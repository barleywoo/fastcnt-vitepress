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
      { text: '主页', link: '/' },
      { 
        text: '产品-解决方案', // link: '/prod/' ,
        items: [
          {
            // Title for the section.
            text: 'Section A Title',
            items: [
              { text: 'Section AA Item A', link: '...' },
              { text: 'Section AB Item B', link: '...' }
            ]
          },
          {
            // Title for the section.
            text: 'Section B Title',
            items: [
              { text: 'Section BB Item A', link: '...' },
              { text: 'Section BA Item B', link: '...' }
            ]
          }
        ]
    
      },
      { 
        text: '关于我们', //link: '/about/' ,
        items: [
          { text: 'Section A Item A', link: '...' },
          { text: 'Section B Item B', link: '...' }
        ]
        
      },
      { text: '代理加盟', link: '/agent' },
      { text: '联系我们', link: '/contact' },
      { text: '荣誉', link: '/honor' },
      { text: '加入我们', link: '/joinus' }

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
      message: '沪ICP备14038470号-1<br/>信息产业部备案管理系统网址<a href="https://beian.miit.gov.cn/">beian.miit.gov.cn</a>',
      copyright: 'Copyright©2013快连网络服务有限公司版权所有'
    },
  
  }
})
