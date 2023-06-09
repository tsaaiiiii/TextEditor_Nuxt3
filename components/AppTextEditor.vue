<template>
  <div>
    <p>圖片連結測試網址：https://i.pinimg.com/564x/f8/e4/a7/f8e4a76304ec2373cf5b4ee4d6266458.jpg</p>
    <p>網頁連結測試網址：https://www.google.com.tw/?hl=zh_TW</p>
  </div>
  <div class="textEditor">
    <div v-if="editor" class="textEditorContent">
      <button :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }" class="toolbarBtn" @click="editor.chain().focus().toggleBold().run()">
        <span class="material-symbols-outlined">
          format_bold
        </span>
      </button>
      <button :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }" class="toolbarBtn" @click="editor.chain().focus().toggleItalic().run()">
        <span class="material-symbols-outlined">
          format_italic
        </span>
      </button>
      <button :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }" class="toolbarBtn" @click="editor.chain().focus().toggleStrike().run()">
        <span class="material-symbols-outlined">
          strikethrough_s
        </span>
      </button>
      <button :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }" class="toolbarBtn" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()">
        <span class="material-symbols-outlined">
          format_h1
        </span>
      </button>
      <button :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }" class="toolbarBtn" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()">
        <span class="material-symbols-outlined">
          format_h2
        </span>
      </button>
      <button :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }" class="toolbarBtn" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()">
        <span class="material-symbols-outlined">
          format_h3
        </span>
      </button>
      <button :class="{ 'is-active': editor.isActive('bulletList') }" class="toolbarBtn" @click="editor.chain().focus().toggleBulletList().run()">
        <span class="material-symbols-outlined">
          format_list_bulleted
        </span>
      </button>
      <button :class="{ 'is-active': editor.isActive('orderedList') }" class="toolbarBtn" @click="editor.chain().focus().toggleOrderedList().run()">
        <span class="material-symbols-outlined">
          format_list_numbered
        </span>
      </button>
      <button :class="{ 'is-active': editor.isActive('codeBlock') }" class="toolbarBtn" @click="editor.chain().focus().toggleCodeBlock().run()">
        <span class="material-symbols-outlined">
          integration_instructions
        </span>
      </button>
      <button :class="{ 'is-active': editor.isActive('blockquote') }" class="toolbarBtn" @click="editor.chain().focus().toggleBlockquote().run()">
        <span class="material-symbols-outlined">
          format_quote
        </span>
      </button>
      <button class="toolbarBtn" @click="editor.chain().focus().setHorizontalRule().run()">
        <span class="material-symbols-outlined">
          horizontal_rule
        </span>
      </button>
      <button class="toolbarBtn" @click="editor.chain().focus().setHardBreak().run()">
        <span class="material-symbols-outlined">
          delete_forever
        </span>
      </button>
      <button :disabled="!editor.can().chain().focus().undo().run()" class="toolbarBtn" @click="editor.chain().focus().undo().run()">
        <span class="material-symbols-outlined">
          undo
        </span>
      </button>
      <button :disabled="!editor.can().chain().focus().redo().run()" class="toolbarBtn" @click="editor.chain().focus().redo().run()">
        <span class="material-symbols-outlined">
          redo
        </span>
      </button>
      <button :class="{ 'is-active': editor.isActive('underline') }" class="toolbarBtn" @click="editor.chain().focus().toggleUnderline().run()">
        <span class="material-symbols-outlined">
          format_underlined
        </span>
      </button>
      <button :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }" class="toolbarBtn" @click="editor.chain().focus().setTextAlign('left').run()">
        <span class="material-symbols-outlined">
          format_align_left
        </span>
      </button>
      <button :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }" class="toolbarBtn" @click="editor.chain().focus().setTextAlign('center').run()">
        <span class="material-symbols-outlined">
          format_align_center
        </span>
      </button>
      <button :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }" class="toolbarBtn" @click="editor.chain().focus().setTextAlign('right').run()">
        <span class="material-symbols-outlined">
          format_align_right
        </span>
      </button>
      <input ref="fileInput" type="file" style="display: none;" @change="selectFile">
      <button :class="{ 'is-active': editor.isActive('link') }" class="toolbarBtn" @click="setLink">
        <span class="material-symbols-outlined">
          link
        </span>
      </button><button :class="{ 'is-active': editor.isActive('highlight') }" class="toolbarBtn" @click="editor.chain().focus().toggleHighlight().run()">
        <span class="material-symbols-outlined">
          format_ink_highlighter
        </span>
      </button>
      <button @click="addImage">
        <span class="material-symbols-outlined">
          add_photo_alternate
        </span>
      </button>

      <bubble-menu
        class="bubble-menu"
        :tippy-options="{ duration: 100 }"
        :editor="editor"
      >
        <button :class="{ 'is-active': editor.isActive('bold') }" @click="editor.chain().focus().toggleBold().run()">
          Bold
        </button>
        <button :class="{ 'is-active': editor.isActive('italic') }" @click="editor.chain().focus().toggleItalic().run()">
          Italic
        </button>
        <button :class="{ 'is-active': editor.isActive('strike') }" @click="editor.chain().focus().toggleStrike().run()">
          Strike
        </button>
      </bubble-menu>

      <floating-menu
        class="floating-menu"
        :tippy-options="{ duration: 100 }"
        :editor="editor"
      >
        <button :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()">
          H1
        </button>
        <button :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()">
          H2
        </button>
        <button :class="{ 'is-active': editor.isActive('bulletList') }" @click="editor.chain().focus().toggleBulletList().run()">
          Bullet List
        </button>
      </floating-menu>
    </div>
    <div class="content">
      <editor-content :editor="editor" />
    </div>
    <button @click="sentBtn">
      送出
    </button>
  </div>
  <div class="output" v-html="newHtml" />
</template>

<script setup>
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import CodeBlock from '@tiptap/extension-code-block'
import Blockquote from '@tiptap/extension-blockquote'
import Image from '@tiptap/extension-image'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import { Editor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/vue-3'

const editor = ref(null)

onMounted(() => {
  editor.value = new Editor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Text,
      Underline,
      Highlight.configure({ multicolor: true }),
      CodeBlock,
      Blockquote,
      Image,
      Link.configure({
        openOnClick: true
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),,
      Heading.configure({
        levels: [1, 2, 3]
      })
    ],
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
    `
  })
})

onBeforeUnmount(() => {
  editor.value.destroy()
})

const setLink = () => {
  const previousUrl = editor.value.getAttributes('link').href
  const url = window.prompt('URL', previousUrl)
  if (url === null) {
    return
  }
  if (url === '') {
    editor.value
      .chain()
      .focus()
      .extendMarkRange('link')
      .unsetLink()
      .run()
    return
  }
  editor.value
    .chain()
    .focus()
    .extendMarkRange('link')
    .setLink({ href: url })
    .run()
}

// 輸出
const newHtml = ref('')
const sentBtn = () => {
  const html = editor.value.getHTML()
  const json = editor.value.getJSON()
  console.log(html)
  console.log(json)
  newHtml.value = html
}

const addImage = () => {
  const url = window.prompt('URL')
  if (url) {
    editor.value.chain().focus().setImage({ src: url }).run()
  }
}
</script>

<style>
.textEditor{
  margin-bottom: 20px;
}
.textEditorContent{
    border: solid 1px black;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    background-color: #A98B73;

}
.toolbarBtn{
    background: #A98B73;
    width: 50px;
    height: 40px;
    border: none;
    cursor: pointer;

}

.ProseMirror{
    outline: none;

}
.is-active{
    background-color: #fff;
}
span{
    color: #fff;
}
.content{
    border: solid 1px black;
    padding: 10px;
    min-height: 300px;
}

 pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    margin: 30px;
    border-radius: 0.5rem;
 }
 code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
 blockquote {
    padding-left: 1rem;
    border-left: 3px solid black;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  a {
    color: #68CEF8;
  }

  code {
    font-size: 0.9rem;
    padding: 0.25em;
    border-radius: 0.25em;
    background-color: rgba(#616161, 0.1);
    color: #616161;
    box-decoration-break: clone;
  }
  mark {
  background-color: #ffe066;
  padding: 0.125em 0;
  border-radius: 0.25em;
  box-decoration-break: clone;
}

.bubble-menu {
  display: flex;
  background-color: #A98B73;
  padding: 0.2rem;
  border-radius: 0.5rem;

}
  button {
    border: none;
    background: none;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;
    cursor: pointer;
  }
  button:hover,button.is-active{
     opacity: 1;
     background-color: #fff;
     color: black;

  }
  a{
    cursor: pointer;
  }
.output{
  border: solid 1px black;
  min-height: 50px;
  padding: 10px;
}

 img {
    max-width: 100%;
    height: auto;
 }
</style>
