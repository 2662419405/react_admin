/**
 * 支持多级菜单联动
 */
export const MenuConfig = [
  {
    key: "/home",
    icon: "icon-home",
    title: "首页",
  },
  {
    key: "/home/echarts",
    icon: "icon-shuju",
    title: "数据管理",
  },
  {
    key: "/home/user",
    icon: "icon-yonghu",
    title: "账号管理",
    children: [
      {
        key: "/home/user/admin",
        title: "用户管理",
      },
      {
        key: "/home/user/level",
        title: "权限管理",
      },
    ],
  },
  {
    key: "/home/book",
    icon: "icon-biji",
    title: "笔记管理",
  },
  {
    key: "/home/about",
    icon: "icon-guanyu",
    title: "关于本站",
  },
];
