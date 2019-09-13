# zootopia
zootopia是一个提供可复用模块/工具库的monorepo(采用lerna管理)，希望通用模块的抽离能在最终实现研发效能提升的目的。

## Lerna 使用说明

### Lerna 是什么

根据[官网](https://github.com/lerna/lerna)上的定义，Lerna 是一个使用 git 和 npm 来处理多包依赖管理的工具,利用它能够自动帮助我们管理各种模块包之间的版本依赖关系。

目前，已经有很多公共库都使用 Lerna 作为它们的模块依赖管理工具了，如：babel, create-react-app, react-router, jest 等。

### 为什么使用 Lerna

当项目依赖关系变得复杂之后，Lerna 可以简化多包的下载/发布流程。

举个例子：我们内部有 A, B, C 三个包。依赖关系：A->B->C, 现在每次我们对 C 包的更改都需要我们手动发布 A, B, C 三个包，很是繁琐。现在利用 lerna，我们可以通过一个命令`lerna publish`完成三个依赖包的发布。

### 常用命令

#### 安装依赖

安装所有包的依赖

```
npx lerna bootstrap --hoist
```

安装指定包的依赖, 例如package-one的依赖

```
npx lerna bootstrap --scope=package-one
```

#### 包发布

```
npx lerna publish
```

ps:

1. 不需要发布到 npm 仓库的项目，请在 package.json 中，设置 private: true

## 分支管理

### 开发流程
master分支为主开发分支, 开发工作均基于master。
1. 获取最新代码
  * git checkout master
  * git fetch
  * git rebase origin/master
2. 本地开发，代码提交
  * git add
  * git commit
3. 推送代码至代码库
  * git fetch
  * git rebase origin/master
  * git push

### 发布流程
1. 切换至master,获取最新代码
2. npx lerna publish
