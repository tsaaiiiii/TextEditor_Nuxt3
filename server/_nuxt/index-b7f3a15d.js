import { ref, onUnmounted, mergeProps, unref, useSSRContext, resolveDirective, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate } from "vue/server-renderer";
import "@tiptap/extension-document";
import "@tiptap/extension-heading";
import "@tiptap/extension-paragraph";
import "@tiptap/extension-text";
import "@tiptap/extension-underline";
import "@tiptap/extension-highlight";
import "@tiptap/extension-code-block";
import "@tiptap/extension-blockquote";
import "@tiptap/extension-image";
import "@tiptap/starter-kit";
import "@tiptap/extension-text-align";
import "@tiptap/extension-link";
import { BubbleMenu, FloatingMenu, EditorContent } from "@tiptap/vue-3";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "destr";
import "klona";
import "vue-dompurify-html";
import "defu";
const BannerImage_vue_vue_type_style_index_0_scope_true_lang = "";
const _sfc_main$2 = {
  __name: "BannerImage",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedImage = ref("");
    ref(null);
    const imageContainer = ref(null);
    const resizeHandle = ref(null);
    const isResizing = ref(false);
    const originalWidth = ref(0);
    const originalHeight = ref(0);
    const originalX = ref(0);
    const originalY = ref(0);
    const handleMouseDown = (e) => {
      e.preventDefault();
      isResizing.value = true;
      originalWidth.value = imageContainer.value.offsetWidth;
      originalHeight.value = imageContainer.value.offsetHeight;
      originalX.value = e.pageX;
      originalY.value = e.pageY;
    };
    const handleMouseMove = (e) => {
      if (!isResizing.value) {
        return;
      }
      const width = originalWidth.value + (e.pageX - originalX.value);
      const height = originalHeight.value + (e.pageY - originalY.value);
      imageContainer.value.style.width = `${width}px`;
      imageContainer.value.style.height = `${height}px`;
    };
    const handleMouseUp = () => {
      isResizing.value = false;
    };
    onUnmounted(() => {
      resizeHandle.value.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    });
    const outputStyle = ref();
    const showImg = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner" }, _attrs))}><div class="banner_bg"><div id="image-container">`);
      if (unref(selectedImage)) {
        _push(`<img id="resizable-image"${ssrRenderAttr("src", unref(selectedImage))} alt="Selected Image">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div id="resize-handle"></div></div><button class="bannerImgBtn"><span class="material-symbols-outlined"> image_search </span></button><input type="file" style="${ssrRenderStyle({ "display": "none" })}"></div><div></div><button> 送出圖片 </button><div class="banner_bg"><div class="outputImg"><div><img style="${ssrRenderStyle([
        unref(showImg) ? null : { display: "none" },
        unref(outputStyle)
      ])}" id="outputImg"${ssrRenderAttr("src", unref(selectedImage))} alt=""></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BannerImage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const AppTextEditor_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "AppTextEditor",
  __ssrInlineRender: true,
  setup(__props) {
    const editor = ref(null);
    const newHtml = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_dompurify_html = resolveDirective("dompurify-html");
      let _temp0;
      _push(`<!--[--><div><p>圖片連結測試網址：https://i.pinimg.com/564x/f8/e4/a7/f8e4a76304ec2373cf5b4ee4d6266458.jpg</p><p>網頁連結測試網址：https://www.google.com.tw/?hl=zh_TW</p></div><div class="textEditor">`);
      if (unref(editor)) {
        _push(`<div class="textEditorContent"><button${ssrIncludeBooleanAttr(!unref(editor).can().chain().focus().toggleBold().run()) ? " disabled" : ""} class="${ssrRenderClass([{ "is-active": unref(editor).isActive("bold") }, "toolbarBtn"])}"><span class="material-symbols-outlined"> format_bold </span></button><button${ssrIncludeBooleanAttr(!unref(editor).can().chain().focus().toggleItalic().run()) ? " disabled" : ""} class="${ssrRenderClass([{ "is-active": unref(editor).isActive("italic") }, "toolbarBtn"])}"><span class="material-symbols-outlined"> format_italic </span></button><button${ssrIncludeBooleanAttr(!unref(editor).can().chain().focus().toggleStrike().run()) ? " disabled" : ""} class="${ssrRenderClass([{ "is-active": unref(editor).isActive("strike") }, "toolbarBtn"])}"><span class="material-symbols-outlined"> strikethrough_s </span></button><button class="${ssrRenderClass([{ "is-active": unref(editor).isActive("heading", { level: 1 }) }, "toolbarBtn"])}"><span class="material-symbols-outlined"> format_h1 </span></button><button class="${ssrRenderClass([{ "is-active": unref(editor).isActive("heading", { level: 2 }) }, "toolbarBtn"])}"><span class="material-symbols-outlined"> format_h2 </span></button><button class="${ssrRenderClass([{ "is-active": unref(editor).isActive("heading", { level: 3 }) }, "toolbarBtn"])}"><span class="material-symbols-outlined"> format_h3 </span></button><button class="${ssrRenderClass([{ "is-active": unref(editor).isActive("bulletList") }, "toolbarBtn"])}"><span class="material-symbols-outlined"> format_list_bulleted </span></button><button class="${ssrRenderClass([{ "is-active": unref(editor).isActive("orderedList") }, "toolbarBtn"])}"><span class="material-symbols-outlined"> format_list_numbered </span></button><button class="${ssrRenderClass([{ "is-active": unref(editor).isActive("codeBlock") }, "toolbarBtn"])}"><span class="material-symbols-outlined"> integration_instructions </span></button><button class="${ssrRenderClass([{ "is-active": unref(editor).isActive("blockquote") }, "toolbarBtn"])}"><span class="material-symbols-outlined"> format_quote </span></button><button class="toolbarBtn"><span class="material-symbols-outlined"> horizontal_rule </span></button><button class="toolbarBtn"><span class="material-symbols-outlined"> delete_forever </span></button><button${ssrIncludeBooleanAttr(!unref(editor).can().chain().focus().undo().run()) ? " disabled" : ""} class="toolbarBtn"><span class="material-symbols-outlined"> undo </span></button><button${ssrIncludeBooleanAttr(!unref(editor).can().chain().focus().redo().run()) ? " disabled" : ""} class="toolbarBtn"><span class="material-symbols-outlined"> redo </span></button><button class="${ssrRenderClass([{ "is-active": unref(editor).isActive("underline") }, "toolbarBtn"])}"><span class="material-symbols-outlined"> format_underlined </span></button><button class="${ssrRenderClass([{ "is-active": unref(editor).isActive({ textAlign: "left" }) }, "toolbarBtn"])}"><span class="material-symbols-outlined"> format_align_left </span></button><button class="${ssrRenderClass([{ "is-active": unref(editor).isActive({ textAlign: "center" }) }, "toolbarBtn"])}"><span class="material-symbols-outlined"> format_align_center </span></button><button class="${ssrRenderClass([{ "is-active": unref(editor).isActive({ textAlign: "right" }) }, "toolbarBtn"])}"><span class="material-symbols-outlined"> format_align_right </span></button><input type="file" style="${ssrRenderStyle({ "display": "none" })}"><button class="${ssrRenderClass([{ "is-active": unref(editor).isActive("link") }, "toolbarBtn"])}"><span class="material-symbols-outlined"> link </span></button><button class="${ssrRenderClass([{ "is-active": unref(editor).isActive("highlight") }, "toolbarBtn"])}"><span class="material-symbols-outlined"> format_ink_highlighter </span></button><button><span class="material-symbols-outlined"> add_photo_alternate </span></button>`);
        _push(ssrRenderComponent(unref(BubbleMenu), {
          class: "bubble-menu",
          "tippy-options": { duration: 100 },
          editor: unref(editor)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="${ssrRenderClass({ "is-active": unref(editor).isActive("bold") })}"${_scopeId}> Bold </button><button class="${ssrRenderClass({ "is-active": unref(editor).isActive("italic") })}"${_scopeId}> Italic </button><button class="${ssrRenderClass({ "is-active": unref(editor).isActive("strike") })}"${_scopeId}> Strike </button>`);
            } else {
              return [
                createVNode("button", {
                  class: { "is-active": unref(editor).isActive("bold") },
                  onClick: ($event) => unref(editor).chain().focus().toggleBold().run()
                }, " Bold ", 10, ["onClick"]),
                createVNode("button", {
                  class: { "is-active": unref(editor).isActive("italic") },
                  onClick: ($event) => unref(editor).chain().focus().toggleItalic().run()
                }, " Italic ", 10, ["onClick"]),
                createVNode("button", {
                  class: { "is-active": unref(editor).isActive("strike") },
                  onClick: ($event) => unref(editor).chain().focus().toggleStrike().run()
                }, " Strike ", 10, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(FloatingMenu), {
          class: "floating-menu",
          "tippy-options": { duration: 100 },
          editor: unref(editor)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="${ssrRenderClass({ "is-active": unref(editor).isActive("heading", { level: 1 }) })}"${_scopeId}> H1 </button><button class="${ssrRenderClass({ "is-active": unref(editor).isActive("heading", { level: 2 }) })}"${_scopeId}> H2 </button><button class="${ssrRenderClass({ "is-active": unref(editor).isActive("bulletList") })}"${_scopeId}> Bullet List </button>`);
            } else {
              return [
                createVNode("button", {
                  class: { "is-active": unref(editor).isActive("heading", { level: 1 }) },
                  onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 1 }).run()
                }, " H1 ", 10, ["onClick"]),
                createVNode("button", {
                  class: { "is-active": unref(editor).isActive("heading", { level: 2 }) },
                  onClick: ($event) => unref(editor).chain().focus().toggleHeading({ level: 2 }).run()
                }, " H2 ", 10, ["onClick"]),
                createVNode("button", {
                  class: { "is-active": unref(editor).isActive("bulletList") },
                  onClick: ($event) => unref(editor).chain().focus().toggleBulletList().run()
                }, " Bullet List ", 10, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content">`);
      _push(ssrRenderComponent(unref(EditorContent), { editor: unref(editor) }, null, _parent));
      _push(`</div><button> 送出 </button></div><div${ssrRenderAttrs(_temp0 = mergeProps({ class: "output" }, ssrGetDirectiveProps(_ctx, _directive_dompurify_html, unref(newHtml))))}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppTextEditor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BannerImage = __nuxt_component_0;
  const _component_AppTextEditor = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))}><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">`);
  _push(ssrRenderComponent(_component_BannerImage, null, null, _parent));
  _push(ssrRenderComponent(_component_AppTextEditor, null, null, _parent));
  _push(`<div>123</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-b7f3a15d.js.map
