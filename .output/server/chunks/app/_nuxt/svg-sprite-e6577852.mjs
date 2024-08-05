import { _ as _export_sfc, b as __nuxt_component_0 } from '../server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtPage = __nuxt_component_0;
  _push(ssrRenderComponent(_component_NuxtPage, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("virtual:nuxt:D:/\u041A\u0412\u0421/kvs_eagent/.nuxt/svg-sprite.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const svgSprite = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { svgSprite as default };
//# sourceMappingURL=svg-sprite-e6577852.mjs.map
