import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "快连网络官网",
  titleTemplate: ':title - 快连',
  description: "快连网络服务（上海）有限公司门户网站",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    aside: false,
    logo: '/static/fastcnt.svg',


    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    footer: {
      message: '沪ICP备14038470号-1<br/>信息产业部备案管理系统网址<a href=:"https://beian.miit.gov.cn/ target="_self" rel="sponsored" >beian.miit.gov.cn</a>',
      copyright: 'Copyright©2013快连网络服务有限公司版权所有'
    },
  
  }
})
