module.exports = {
  title: ' Front-End Development Specifications',
  description: '前端开发规范文档',
  base: '/frontend/',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  port: 9523,
  evergreen: true,  // 浏览器兼容性-构建到现代浏浏览器
  markdown: {
    // lineNumbers: true
  },
  themeConfig: {
    nav: [
      {
        text: 'HTML/CSS',
        link: '/html-css/'
      },
      {
        text: 'JavaScript',
        link: '/javascript/'
      },
      {
        text: 'Eslint',
        link: '/eslint/'
      },
      {
        text: 'Vue',
        link: '/vue/'
      },
      {
        text: '其它',
        link: '/others/'
      },
    ],
    sidebar: 'auto',
    lastUpdated: '上次更新',
    repo: 'luichooy/FrontEndPD',
    editLinks: true,
    editLinkText: '编辑本页！',
    prev: true,
    next: true
  }
};
