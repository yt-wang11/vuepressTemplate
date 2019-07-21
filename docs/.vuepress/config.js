module.exports = {
  permalink: '/:year/:month/:day/:slug',  //固定链接的全局配置
  markdown: {  //markdown编辑器的配置
    lineNumbers: true,   //代码显示行号，默认 false
    toc: { includeLevel: [1, 2] },   //显示目录的默认层级
  },
  title: 'Vue教程',  //网站的标题，默认主题几个地方用到
  description: 'Tingno记编写的VUE教程', //网站的描述
  base:'/docs/', //要部署的根目录，不配置的话，都会到网站根目录下面
  themeConfig: {  //主题的配置信息
    nav: [  //导航栏配置
      { text: '首页', link: '/' },  //没有子导航的，显示文字和链接
      { text: '基础', items: [  //有自导航的，就显示文字和子导航对象，下同
        { text: '入门', link: '/base/base' },
        { text: '常见文件', link: '/base/file' },
        { text: '组件化', link: '/base/package' },
        { text: 'ES6新特性', link: '/base/es6' },
      ]},
      { text: '核心', items: [
        { text: '路由Router', link: '/core/Route' },
        { text: '状态Vuex', link: '/core/Vuex' },
      ]},
      { text: '工具', items: [
        { text: 'git', link: '/tools/git' },
        { text: 'webpack', link: '/tools/webpack' },
      ]},
      { text: '博客', link: 'https://notes.tingno.com' }, //链接也可以是外部链接
    ],
    sidebar: [  //配置边栏的链接，一个对象、一个数组都可以。也可以分组，分组配置找官方。
      '/',  //默认配置链接，名称会自动生成，首页或者文件第一个标题
      { //复杂的带子目录的对象
        title: '基础',  //显示名称
        collapsable: false,  //控制子目录是否可折叠，默认 true，下同
        children: [
          ['/base/base','入门'],  //或者指定链接和显示标题  
          ['/base/file', '常见文件'],
          ['/base/package', '组件化'],
          ['/base/es6', 'ES6新特性'],
        ]
      },
      { //复杂的带子目录的对象
        title: '核心',  //显示名称
        collapsable: false,  //控制子目录是否可折叠，默认 true，下同
        children: [
          ['/core/Route', '路由Router'],
          ['/core/Vuex', '状态Vuex']
        ]
      },
      {
        title: '工具',
        children: [
          ['/tools/git', '版本管理工具git'],
          ['/tools/webpack', 'webpack']
        ]
      }
    ],
    sidebarDepth:5,  
    displayAllHeaders: true, // 显示所有活动链接，默认值：false
    activeHeaderLinks: false, // 关闭实时更新url的hash值，默认值：true
    lastUpdated: 'Last Updated',  // 显示最后更新时间

    //帮助编辑
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'q5276/vuestudy',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'q5276/vuestudy',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}