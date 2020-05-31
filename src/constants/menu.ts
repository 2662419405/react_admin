/**
 * 支持多级菜单联动
 */
export const MenuConfig = [
  {
    key: '/home',
    icon: 'iconhome',
    title: '首页',
  },
  {
    key: '/home/echarts',
    icon: 'iconshuju',
    title: '数据管理',
  },
  {
    key: '/home/form',
    icon: 'icon17',
    title: '表单模拟',
  },
  {
    key: '/home/user',
    icon: 'iconzhanghao',
    title: '账号管理',
    children: [
      {
        key: '/home/user/admin',
        title: '个人中心',
      },
      {
        key: '/home/user/level',
        title: '个人设置',
      },
    ],
  },
  {
    key: '/home/book',
    icon: 'iconbiji',
    title: '笔记管理',
  },
  {
    key: '/home/about',
    icon: 'iconguanyu',
    title: '关于本站',
  },
]
