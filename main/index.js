import { registerMicroApps, setDefaultMountApp, start } from "qiankun"
import "./index.less"

/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
import render from "./render/ReactRender"

/**
 * Step1 初始化应用（可选）
 */
render({ loading: true })

const loader = (loading) => render({ loading })

/**
 * Step2 注册子应用
 */

registerMicroApps(
  [
    {
      name: "umiApp",
      entry: "//localhost:7000",
      container: "#subapp-viewport",
      loader,
      activeRule: "/umiApp",
    },
    // {
    //   name: "tensorflow",
    //   entry: "//localhost:7001",
    //   container: "#subapp-viewport",
    //   loader,
    //   activeRule: "/tensorflow",
    // },
    {
      name: "umi-app",
      entry: "//localhost:7002",
      container: "#subapp-viewport",
      loader,
      activeRule: "/umi-app",
    },
  ],
  {
    beforeLoad: [
      (app) => {
        console.log("[LifeCycle] before load %c%s", "color: green;", app.name)
      },
    ],
    beforeMount: [
      (app) => {
        console.log("[LifeCycle] before mount %c%s", "color: green;", app.name)
      },
    ],
    afterUnmount: [
      (app) => {
        console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name)
      },
    ],
  }
)

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp("/umi-app")

/**
 * Step4 启动应用
 */
start({ sandbox: true })
