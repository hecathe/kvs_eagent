import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-01469011.mjs';
import _sfc_main$9 from './svg-icon-17467377.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$8 = {
  props: {
    user: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-name" }, _attrs))} data-v-928c65ba><span data-v-928c65ba>${ssrInterpolate($props.user.name)}</span><span data-v-928c65ba>${ssrInterpolate($props.user.title)}</span></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserName.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-928c65ba"]]);
const _sfc_main$7 = {
  props: {
    button: {
      type: Object,
      default: () => {
      }
    },
    icon: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  const _component_svg_icon = _sfc_main$9;
  _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
    class: ["user-button", { "user-button_orange": $props.button.orange }],
    to: $props.button.link
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_svg_icon, {
          name: $props.button.icon,
          width: "24",
          height: "24"
        }, null, _parent2, _scopeId));
        _push2(`<span class="user-button__title" data-v-29a25eb4${_scopeId}>${ssrInterpolate($props.button.title)}</span>`);
      } else {
        return [
          createVNode(_component_svg_icon, {
            name: $props.button.icon,
            width: "24",
            height: "24"
          }, null, 8, ["name"]),
          createVNode("span", { class: "user-button__title" }, toDisplayString($props.button.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/HeaderNavUserButton.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-29a25eb4"]]);
const _sfc_main$6 = {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_header_nav_user_button = __nuxt_component_0$1;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "header-nav-user" }, _attrs))} data-v-5f8816c3><!--[-->`);
  ssrRenderList($props.list, (item, index) => {
    _push(`<li class="header-nav-user__item" data-v-5f8816c3>`);
    _push(ssrRenderComponent(_component_app_header_nav_user_button, { button: item }, null, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/HeaderNavUser.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-5f8816c3"]]);
const _sfc_main$5 = {
  props: {
    menuMain: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "header-nav-main" }, _attrs))} data-v-2eeb09ee><!--[-->`);
  ssrRenderList($props.menuMain, (item) => {
    _push(`<li class="header-nav-main__item" data-v-2eeb09ee>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "header-nav-main__link",
      to: item.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/HeaderNavMain.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-2eeb09ee"]]);
const _imports_0 = "" + buildAssetsURL("online-school-kvs.df186da4.svg");
const _imports_1 = "" + buildAssetsURL("telegram-black.3169e363.svg");
const _sfc_main$4 = {
  props: {
    menuHeader: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  const _component_svg_icon = _sfc_main$9;
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "header-nav-top" }, _attrs))} data-v-a3ab34e9><!--[-->`);
  ssrRenderList($props.menuHeader, (item) => {
    _push(`<li class="header-nav-top__item" data-v-a3ab34e9>`);
    if (item.icon) {
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: item.link,
        class: "header-nav-top__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_svg_icon, {
              name: item.icon
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_svg_icon, {
                name: item.icon
              }, null, 8, ["name"])
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: item.link,
        class: "header-nav-top__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(item.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(item.label), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
    }
    _push(`</li>`);
  });
  _push(`<!--]--><li class="header-nav-top__item" data-v-a3ab34e9>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "#",
    class: "header-nav-top__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-a3ab34e9${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="header-nav-top__item" data-v-a3ab34e9>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "#",
    class: "header-nav-top__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="" data-v-a3ab34e9${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/HeaderNavTop.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-a3ab34e9"]]);
const _sfc_main$3 = {
  props: {
    template: {
      type: Object,
      default: {}
    },
    opened: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      user: this.template.user
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_svg_icon = _sfc_main$9;
  const _component_user_name = __nuxt_component_2;
  const _component_AppHeaderNavUser = __nuxt_component_3;
  const _component_AppHeaderNavMain = __nuxt_component_4;
  const _component_AppHeaderNavTop = __nuxt_component_5;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-65e58747>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "header__logo",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_svg_icon, { name: "kvs-logo" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_svg_icon, { name: "kvs-logo" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="header__mobile" data-v-65e58747>`);
  _push(ssrRenderComponent(_component_user_name, {
    user: $props.template.user
  }, null, _parent));
  _push(`<button class="${ssrRenderClass([{ open: $props.opened }, "header__burger"])}" data-v-65e58747><span data-v-65e58747></span></button></div>`);
  if ($props.opened) {
    _push(`<div class="header__mobile-menu mobile-menu" data-v-65e58747>`);
    _push(ssrRenderComponent(_component_AppHeaderNavUser, {
      list: $props.template.menu_user
    }, null, _parent));
    _push(`<!--[-->`);
    ssrRenderList($props.template.tagline, (item) => {
      _push(`<div class="header__slogan" data-v-65e58747><span class="text-orange" data-v-65e58747>${ssrInterpolate(item.main)}</span><span data-v-65e58747>${ssrInterpolate(item.additional)}</span></div>`);
    });
    _push(`<!--]--><div class="mobile-menu__list" data-v-65e58747>`);
    _push(ssrRenderComponent(_component_AppHeaderNavMain, {
      "menu-main": $props.template.menu_main
    }, null, _parent));
    _push(ssrRenderComponent(_component_AppHeaderNavTop, {
      "menu-header": $props.template.menu_header
    }, null, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="header__top" data-v-65e58747><div class="header__wrapper" data-v-65e58747>`);
  _push(ssrRenderComponent(_component_AppHeaderNavTop, {
    "menu-header": $props.template.menu_header
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList($props.template.tagline, (item) => {
    _push(`<div class="header__slogan" data-v-65e58747><span class="text-orange" data-v-65e58747>${ssrInterpolate(item.main)}</span><span data-v-65e58747>${ssrInterpolate(item.additional)}</span></div>`);
  });
  _push(`<!--]--></div></div><div class="header__bottom" data-v-65e58747><div class="header__wrapper" data-v-65e58747>`);
  _push(ssrRenderComponent(_component_AppHeaderNavMain, {
    "menu-main": $props.template.menu_main
  }, null, _parent));
  _push(`<div class="header__user-menu" data-v-65e58747><div class="header__eagent-logo" data-v-65e58747>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    name: "eagent",
    width: "200",
    height: "39"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_user_name, {
    user: $props.template.user
  }, null, _parent));
  _push(ssrRenderComponent(_component_AppHeaderNavUser, {
    list: $props.template.menu_user
  }, null, _parent));
  _push(`</div></div></div></header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-65e58747"]]);
const _sfc_main$2 = {
  props: {
    socialList: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_icon = _sfc_main$9;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "social-list" }, _attrs))} data-v-4bdf3bff><!--[-->`);
  ssrRenderList($props.socialList, (socialItem) => {
    _push(`<li class="social-list__item" data-v-4bdf3bff><a class="social-list__link"${ssrRenderAttr("href", socialItem.link)} data-v-4bdf3bff>`);
    _push(ssrRenderComponent(_component_svg_icon, {
      name: socialItem.icon
    }, null, _parent));
    _push(`</a></li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-4bdf3bff"]]);
const _sfc_main$1 = {
  props: {
    template: {
      type: Object,
      default: {}
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  const _component_SocialList = __nuxt_component_1$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-6eabb5a4><div class="container" data-v-6eabb5a4><div class="footer__item" data-v-6eabb5a4>${ssrInterpolate($props.template.copyright)}</div><div class="footer__item" data-v-6eabb5a4><!--[-->`);
  ssrRenderList($props.template.privacy_policy, (item, index) => {
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: "footer__link",
      key: index,
      to: item.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div><div class="footer__item" data-v-6eabb5a4>`);
  _push(ssrRenderComponent(_component_SocialList, {
    "social-list": $props.template.social
  }, null, _parent));
  _push(`</div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-6eabb5a4"]]);
const _sfc_main = {
  data() {
    return {
      template: {}
    };
  },
  beforeMount() {
    this.getTemplate();
  },
  methods: {
    getTemplate() {
      $fetch("http://localhost:3000/api/template").then((response) => {
        this.template = response.template;
        console.log(response);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_AppFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppHeader, { template: $data.template }, null, _parent));
  _push(`<main><div class="container">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></main>`);
  _push(ssrRenderComponent(_component_AppFooter, { template: $data.template }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-4f655e16.mjs.map
