// 引入插件moment
const moment = require('moment');
moment.locale('zh-cn');
module.exports = {
  // 标题
  "title": "飞跃雪山",
  // 描述
  "description": "置身于雪山的怀抱中，更显居住的智慧和艺术",
  // SEO
  "head": [
    ['link', { rel: 'icon', href: '/bitbug_favicon.ico' }],
    ['meta', { name: 'author', content: '飞跃雪山' }],
    ['meta', { name: 'keywords', content: 'vuepress,飞跃雪山,个人博客，个人笔记' }],
  ],
  // 时间戳
  "plugins": [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          // 不要忘了安装 moment
          return moment(timestamp).format("LLLL")
        }
      }
    ]
  ],
  "dest": "public",
  "theme": "reco",
  "themeConfig": {
    "lastUpdated": '最后更新于',
    // 导航栏
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "T-x-s-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "T-x-s-date"
      },
      {
        "text": "随笔",
        "icon": "T-x-s-message",
        "items": [
          {
            "text": "fancy",
            "link": "/docs/fancy/"
          }
        ]
      },
      {
        "text": "链接",
        "icon": "T-x-s-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/T-x-s",
            "icon": "T-x-s-github"
          }
        ]
      }
    ],
    // 侧边栏
    "sidebar": {
      "/docs/fancy/": [
        "",
        "fancy",
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // 友情链接
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    // "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Jokul",
    "authorAvatar": "/JoKul.png",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}