import { d as defineComponent, o as openBlock, b as createElementBlock, H as Fragment, e as createBaseVNode, E as toDisplayString, C as renderSlot, n as normalizeClass } from "./vendor.cb7a739a.js";
const _hoisted_1 = { class: "field-label is-normal" };
const _hoisted_2 = { class: "label" };
const _hoisted_3 = { class: "field-body" };
const _hoisted_4 = { class: "label" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    label: { type: String, required: false, default: void 0 },
    addons: { type: Boolean, required: false },
    textaddon: { type: Boolean, required: false },
    grouped: { type: Boolean, required: false },
    multiline: { type: Boolean, required: false },
    horizontal: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["field", [
          props.addons && "has-addons",
          props.textaddon && "has-textarea-addon",
          props.grouped && "is-grouped",
          props.grouped && props.multiline && "is-grouped-multiline",
          props.horizontal && "is-horizontal"
        ]])
      }, [
        typeof props.label === "string" && props.horizontal ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("label", _hoisted_2, toDisplayString(props.label), 1)
          ]),
          createBaseVNode("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "default")
          ])
        ], 64)) : typeof props.label === "string" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("label", _hoisted_4, toDisplayString(props.label), 1),
          renderSlot(_ctx.$slots, "default")
        ], 64)) : renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 2);
    };
  }
});
var _imports_0 = "/assets/vuero-banking-light.ffde3acf.webp";
var _imports_1 = "/assets/vuero-banking-dark.4fa5877a.webp";
function sleep(time = 1e3) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
export { _imports_0 as _, _imports_1 as a, _sfc_main as b, sleep as s };
