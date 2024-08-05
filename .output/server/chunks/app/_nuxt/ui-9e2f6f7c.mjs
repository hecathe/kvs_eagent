import { _ as __nuxt_component_0$1 } from './nuxt-link-01469011.mjs';
import { useSSRContext, withCtx, createTextVNode, mergeProps, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {
  props: {
    isButton: {
      type: Boolean,
      default: true
    },
    url: {
      type: String,
      default: "#"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  if ($props.url) {
    _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
      to: $props.url,
      class: "button"
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ];
        }
      }),
      _: 3
    }, _parent));
  } else {
    _push(`<button${ssrRenderAttrs(mergeProps({ class: "button" }, _attrs))} data-v-ae8189c5>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</button>`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ae8189c5"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppButton = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="title-h1">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430</h1>`);
  _push(ssrRenderComponent(_component_AppButton, { "is-button": false }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041A\u043D\u043E\u043F\u043A\u0430`);
      } else {
        return [
          createTextVNode("\u041A\u043D\u043E\u043F\u043A\u0430")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ui.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ui = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ui as default };
//# sourceMappingURL=ui-9e2f6f7c.mjs.map
