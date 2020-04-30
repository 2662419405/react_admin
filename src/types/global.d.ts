// 菜单子元素类型
export interface MenuChild {
  key: string;
  title: string;
  icon?: string;
}

// 菜单类型
export interface Menu {
  key: string;
  title: string;
  icon: string;
  children?: MenuChild;
}

/**
 * 用户信息数据类型
 */
export interface Ilogin {
  password: string;
  username: string;
  code: string;
}
