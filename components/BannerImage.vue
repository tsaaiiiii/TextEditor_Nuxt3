<template>
  <div class="banner">
    <div class="banner_bg">
      <div id="image-container" ref="imageContainer">
        <img v-if="selectedImage" id="resizable-image" :src="selectedImage" alt="Selected Image">
        <div id="resize-handle" ref="resizeHandle" />
      </div>
      <button class="bannerImgBtn" @click="openFilePicker">
        <span class="material-symbols-outlined">
          image_search
        </span>
      </button>
      <input ref="fileInput" type="file" style="display: none;" @change="selectFile">
    </div>
  </div>
</template>

<script setup>
const selectedImage = ref('')
const fileInput = ref(null)
const openFilePicker = () => {
  fileInput.value.click()
}
const selectFile = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      selectedImage.value = reader.result
    }
    reader.readAsDataURL(file)
  }
}
onMounted(() => {
  resizeHandle.value.addEventListener('mousedown', handleMouseDown)
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
})
const imageContainer = ref(null)
const resizeHandle = ref(null)
const isResizing = ref(false)
const originalWidth = ref(0)
const originalHeight = ref(0)
const originalX = ref(0)
const originalY = ref(0)
const handleMouseDown = (e) => {
  e.preventDefault()
  isResizing.value = true
  originalWidth.value = imageContainer.value.offsetWidth
  originalHeight.value = imageContainer.value.offsetHeight
  originalX.value = e.pageX
  originalY.value = e.pageY
}

const handleMouseMove = (e) => {
  if (!isResizing.value) { return }

  const width = originalWidth.value + (e.pageX - originalX.value)
  const height = originalHeight.value + (e.pageY - originalY.value)
  imageContainer.value.style.width = `${width}px`
  imageContainer.value.style.height = `${height}px`
}

const handleMouseUp = () => {
  isResizing.value = false
}

onUnmounted(() => {
  resizeHandle.value.removeEventListener('mousedown', handleMouseDown)
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
})
</script>

<style scope>
.banner{
width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}
.banner_bg{
 width: 800px;
  height: 400px;
   background-color: #D3D3D3;

}
.bannerImgBtn{
cursor: pointer;

}
.bannerImgBtn:hover{
    background-color: #A98B73;
}

.material-symbols-outlined{
    font-size: 40px;
    color: #000;
}
  #image-container {
  max-width: 100%;
  max-height: 100%;
  position: relative;
  overflow: hidden;
}

#resizable-image {
  width: 100%;
  height: 100%;
  pointer-events: none;
}

#resize-handle {
  width: 20px;
  height: 20px;
  background-color: #000;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: se-resize;
}
</style>
