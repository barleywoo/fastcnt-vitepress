import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "快连网络官网",
  titleTemplate: ':title - 快连',
  description: "快连网络服务（上海）有限公司门户网站",
  lastUpdated: false,

  head: [
    [
      'meta',
      { name: '测试和安全', content: '代码扫描 单元测试 接口测试 服务测试 UI测试 功能测试' }
    ],
    [
      'meta',
      { name: '自动化测试', content: '测试自动化 自动化回归 POM模型 RobotFramework selenium webdriver' }
    ]
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    aside: false,
    logo: '/static/fastcnt.svg',

    nav: [
      { text: '主页', link: '/' },
      { text: '产品-解决方案', link: '/prod/'},
      { text: '关于我们', link: '/about/' },
      { text: '代理加盟', link: '/agent' },
      { text: '联系我们', link: '/contact' },
      { text: '荣誉', link: '/honor' },
      { text: '加入我们', link: '/joinus' }

    ],

    sidebar: {
      '/prod/': [
        {
          text: '产品系列',
          items: [
            { text: '小微贷系统', link: '/prod/microCredit' },
            { text: '互联网金融', link: '/prod/fintech' },
            { text: '核心银行系统', link: '/prod/corebank' },
            { text: '自动化测试平台', link: '/prod/testing' }
          ]
        }
      ],

      '/about/': [
        {
          text: '关于我们',
          items: [
            { text: '关于', link: '/about/' },
            { text: '创始人', link: '/about/founder' },
            { text: '组织结构', link: '/about/structure' },
            { text: '企业文化', link: '/about/culture' }
          ]
        }
      ]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    footer: {
      message: '沪ICP备14038470号-1<br/>信息产业部备案管理系统网址<a href="https://beian.miit.gov.cn/">beian.miit.gov.cn</a>',
      copyright: 'Copyright©2013快连网络服务有限公司版权所有'
    },
  
  }
})
