import { d as defineEventHandler } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const template = defineEventHandler((event) => {
  return {
    template: {
      copyright: "2023, \u0413\u0440\u0443\u043F\u043F\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \xAB\u041A\u0412\u0421\xBB",
      menu_header: [
        {
          label: "\u0411\u0430\u0437\u0430 \u0437\u043D\u0430\u043D\u0438\u0439",
          link: "/objects/"
        },
        {
          label: "\u0410\u043A\u0446\u0438\u0438",
          link: "/promotions/"
        },
        {
          label: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
          link: "/news/"
        },
        {
          label: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",
          link: "/favorites/"
        },
        {
          label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
          link: "/contacts/"
        }
        // {
        // 	icon: '~/assets/sprite/svg/online-school-kvs.svg',
        // 	label: '',
        // 	link: '#',
        // },
        // {
        // 	icon: '~/assets/sprite/svg/telegram-black.svg',
        // 	label: '',
        // 	link: '#',
        // },
      ],
      menu_main: [
        {
          label: "\u041E\u0431\u044A\u0435\u043A\u0442\u044B \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0435",
          link: "/catalog/"
        },
        {
          label: "\u0428\u0430\u0445\u043C\u0430\u0442\u043A\u0430",
          link: "/chess/"
        },
        {
          label: "\u041C\u043E\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B",
          link: "/clients/"
        },
        {
          label: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u043E\u043A\u0430\u0437",
          link: "/shows/"
        },
        {
          label: "\u041C\u043E\u0438 \u0441\u0434\u0435\u043B\u043A\u0438",
          link: "/deals/"
        }
      ],
      menu_user: [
        {
          icon: "user",
          link: "#",
          orange: true
        },
        {
          icon: "logout",
          link: "#"
        }
      ],
      user: [
        {
          name: "\u041A\u043E\u043D\u0442\u0435\u043D\u0442\u043E\u0432 \u041A\u043E\u043D\u0442\u0435\u043D\u0442",
          title: "STAFF KVS"
        }
      ],
      privacy_policy: [
        {
          label: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445",
          link: "/politika-konfidentsialnosti/",
          text: '\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 <a href="/politika-konfidentsialnosti/" target="_blank">\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445</a>'
        }
      ],
      social: [
        {
          icon: "telegram",
          link: "#"
        },
        {
          icon: "youtube",
          link: "#"
        }
      ],
      tagline: [
        {
          main: "\u0410\u0433\u0435\u043D\u0442\u0441\u043A\u0438\u0439 \u043F\u043E\u0440\u0442\u0430\u043B \xAB\u041A\u0412\u0421\xBB. ",
          additional: "\u0421\u0442\u0440\u043E\u0438\u043C \u043C\u0438\u0440 \u2014 \u0441\u0442\u0440\u043E\u0438\u043C \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F!"
        }
      ]
    }
  };
});

export { template as default };
//# sourceMappingURL=template.mjs.map
