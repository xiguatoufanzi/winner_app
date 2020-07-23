import Home from "@/pages/Home";
import Category from "@/pages/Category";
import GoodBuy from "@/pages/GoodBuy";
import Cart from "@/pages/Cart";
import Personal from "@/pages/Personal";
import Login from "@/pages/Login";
import Detail from '@/components/Detail'

export default [
  // 首页
  {
    name: "home", // 是当前路由的标识名称
    path: "/",
    component: Home,
  },
  // 分类
  {
    name: "category",
    path: "/category",
    component: Category,
  },
  // 值得买
  {
    name: "goodbuy",
    path: "/goodbuy",
    component: GoodBuy,
  },
  // 购物车
  {
    name: "cart",
    path: "/cart",
    component: Cart,
  },
  // 个人
  {
    name: "personal",
    path: "/personal",
    component: Personal,
  },
  // 登录
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  // 物品详情页面
  {
    name: "detail",
    path: "/detail",
    component: Detail,
  },
];
