"use strict";
module.exports = {
  types: [
    { value: "✨功能", name: " ✨ 功能：新增一个功能" },
    { value: "🐛修复", name: " 🐛 修复：修复一个Bug" },
    { value: "🔨自测修复", name: " 🔨 自测修复：修复一些自测时发现的错误代码" },
    { value: "📦打包", name: " 📦 打包：打包更新" },
    { value: "🔀合并", name: " 🔀 合并：分支合并" },
    { value: "👷冲突", name: " 👷 解决：解决一个冲突" },
    {
      value: "💄样式",
      name: " 💄 样式：css, 空格, 分号等不影响功能、格式样式修复",
    },
    { value: "📃文案", name: " 📃 文案：错误文案修正" },
    {
      value: "🚧提交",
      name: " 🚧 提交：提交正在开发的代码（未完成的功能、需求等）",
    },
    { value: "♻️重构", name: " ♻️  重构：代码重构，注意和特性、修复区分开" },
    {
      value: "🍱资源",
      name: " 🍱 资源：仅添加或更新静态资源的提交（image、css等）",
    },
    {
      value: "🔧工具",
      name: " 🔧 工具：开发工具变动(构建、脚手架工具、依赖版本升降级等)",
    },
    {
      value: "🚚项目目录变更",
      name: " 🚚 变更：项目结构的目录变更（移动或重命名文件等）",
    },
    { value: "👌代码评审", name: " 👌 评审：代码评审进行的代码的更新与优化" },
    { value: "💡配置文件", name: " 💡 配置文件：更改依赖的各配置文件的提交" },
    { value: "⚡️性能", name: " ⚡️ 性能：提升性能" },
    { value: "📝文档", name: " 📝 文档：变更的只有文档" },
    { value: "⏪回滚", name: " ⏪ 回滚：代码回退" },
  ],
  // scopes: [
  //   ['components', '组件相关'],
  //   ['hooks', 'hook 相关'],
  //   ['utils', 'utils 相关'],
  //   ['组件库相关','对组件库的调整'],
  //   ['styles', '样式相关'],
  //   ['deps', '项目依赖'],
  //   ['auth', '对 auth 修改'],
  //   ['other', '其他修改'],
  //   // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
  //   ['custom', '以上都不是？我要自定义']
  // ].map(([value, description]) => {
  //   return {
  //     value,
  //     name: `${value.padEnd(30)} (${description})`
  //   }
  // }),
  // // 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。
  // // allowCustomScopes: true,
  // // allowTicketNumber: false,
  // // isTicketNumberRequired: false,
  // // ticketNumberPrefix: 'TICKET-',
  // // ticketNumberRegExp: '\\d{1,5}',
  // // 针对每一个 type 去定义对应的 scopes，例如 fix /*
  // scopeOverrides: {
  //   fix: [
  //     { name: 'merge' },
  //     { name: 'style' },
  //     { name: 'e2eTest' },
  //     { name: 'unitTest' }
  //   ]
  // },
  messages: {
    type: "选择一种你的提交类型:",
    scope: "选择一个scope (可选):",
    customScope: "Denote the SCOPE of this change:",
    subject: "此次commit内容（简短精炼的变更描述）:\n",
    body: '此次commit内容（详细的变更描述，使用"|"换行(可选)）：\n',
    breaking: "非兼容性说明 (可选):\n",
    footer: "关联关闭的issue，例如：#31, #34(可选):\n",
    confirmCommit: "确定提交说明?",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["功能", "修复"], // 设置只有 type 选择了 功能 或 修复，才询问 breaking message
  subjectLimit: 100, // subject 限制长度
  breaklineChar: "|", // 换行符，支持 body 和 footer
  footerPrefix: "ISSUES CLOSED:",
  // askForBreakingChangeFirst : true, // default is false
};
