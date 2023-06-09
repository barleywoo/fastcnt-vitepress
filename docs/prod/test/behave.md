---
layout: doc
aside: true

title: "UI自动化测试"
outline: 'deep'
---

UI自动化测试是以自动化方式对用户界面（UI）进行测试的一种测试技术。该工具具有极高的精度，可以及时检测出用户界面的各种异常。它可以测试完整的功能，从而检测出潜在的问题。它可以识别用户界面上出现的各种元素，从而检测出用户界面的可用性。它可以模拟用户的行为，从而及时发现潜在的问题。
![](/static/testing/behave/apply.png)

快连网络UI自动化测试的优点包括：
1. 改善测试效率，更快发现UI缺陷；
2. 提高测试覆盖率，更容易检测出UI的细节问题；
3. 改善测试精确度，更快检测出UI的可用性；
4. 提高可维护性，更容易对UI的变更和修改进行测试；
5. 提高可移植性，支持多个平台和测试环境。

## 直击痛点

### ❓ 与常见的UI功能测试，有何区别之处？

⭕ 常见的UI功能测试基本上都采取的编写python代码和录屏测试方式来进行测试。编写代码对测试人员有一定的技术要求；而录屏的方式兼容性却无法保证，只要在录屏测试环境发生一些轻微变化则用例就不能使用。

⭕ 我们的UI功能测试则采用的是“自然语言”编程的方式，既有编程测试的逻辑性，又比录屏测试的兼容性好。通过封装pom模型，让系统能够自动识别测试的项目元素并进行定位，页面元素的变更不需要变更流程模块，方便维护大量用例和流程，编排组合的业务流程可复用性高。同时也支持测试人员手动或自动的方式对pom模型进行识别添加。
![](/static/testing/behave/behave1.png)

---

### ❓ 测试人员掌握功能自动化测试的复杂度如何？

⭕ 通过自然语言编程。测试团队人员，只要关心业务系统操作流程，通过“自然语言”编写测试案例，系统自动转化为测试用例，极大降低了自动化测试的技术门槛，让自动化测试接近“人与人面对面的交流。

⭕ 全组件化开发。封装近200个常用操作，让测试人员在测试开发过程如同“搭积木”。如浏览器操作，文件操作，数据库操作，界面操作等，这些操作代码通过“自然语言”封装，节省了大量脚本开发“重复造轮子”的工作。在测试编程过程中需要拖拽即刻完成。
![](/static/testing/behave/behave2.png)

---

### ❓ 测试人员往往存在主观的臆断，导致测试的深度广度不够，怎么解决？

⭕ 自动化测试能非常显著的提高测试执行的效率，为尽可能执行更全面的测试提供支撑，采用自动化测试工具，可以更大范围地覆盖目标系统。

⭕ 通过智能调度引擎，根据任务需求动态分配执行机数量，根据设备的忙闲状态自动选择执行机。

⭕ 在自动化测试实施过程中，主要有两类角色：测试人员、开发人员。测试人员只要关心业务功能，通过“自然语言”编写测试脚本；而开发人员只需要等测试的报告结果，对结果进行BUG修改。通过这种方式，让专业的人做专业的事情。即使业务流程发生改变，也只需要对pom模型、功能模块中和业务流程中进行对应的修改，即可完成测试用例的适配。
![](/static/testing/behave/behave3.png)

---

### ❓ 测试用例脚本怎么用？是否支持测试用例对应多组数据？

⭕ 测试用例脚本和数据分离。测试数据参数化、独立数据源，实现脚本数据分离。脚本数据分离的目的是实现用例脚本“复用”，通过配置实现“一套代码”跑“万条数据”，同时测试数据的独立管理。
![](/static/testing/behave/behave4.png)
