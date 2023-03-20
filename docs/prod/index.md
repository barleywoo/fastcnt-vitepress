---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
title: "产品系列"
description: 快连网络产品系列

head:
  - - meta
    - name: 测试和安全
      content: 代码扫描 单元测试 接口测试 服务测试 UI测试 功能测试
  - - meta
    - name: 自动化测试
      content: 测试自动化 自动化回归 POM模型 RobotFramework selenium webdriver 
---

![产品系列](/static/banner/banner_1.jpg "产品系列")

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/static/home/test.jpg',
    name: '自动化测试',
    title: '',
    org: '前往',
    orgLink: '/prod/testing'
  },
  {
    avatar: '/static/home/fintech.jpg',
    name: '互联网金融',
    title: '',
    org: '前往',
    orgLink: '/prod/fintech'
  },
  {
    avatar: '/static/home/core.jpg',
    name: '核心银行',
    title: '',
    org: '前往',
    orgLink: '/prod/corebank'
  },
  {
    avatar: '/static/home/micro.jpg',
    name: '小微金融',
    title: '',
    org: '前往',
    orgLink: '/prod/microCredit'
  }
]
</script>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      快连网络系列产品
    </template>
    <template #lead>
      快连网络致力于金融领域信息化建设和服务，为小微金融、互联网金融的发展持续贡献力量。
      公司一如既往地重视软件的安全和质量，特地推出系列自动化测试平台和解决方案。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
