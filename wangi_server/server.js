let Koa = require("koa");
let KoaRouter = require("koa-router");

const app = new Koa();
const router = new KoaRouter();

// 首页数据
let homeData = require("./datas/index.json");
router.get("/home", (ctx, next) => {
  ctx.body = {
    code: 200,
    data: homeData,
  };
});

// 主页nav数据
let indexCateModule = require("./datas/indexCateList.json");
router.get("/indexCateList", (ctx, next) => {
  ctx.body = {
    code: 200,
    data: indexCateModule,
  };
});

// 分类数据
let cateLists2 = require("./datas/cateLists2.json");
router.get("/cateLists", (ctx, next) => {
  ctx.body = {
    code: 200,
    data: cateLists2,
  };
});

// 值得买
let goodBuy = require("./datas/goodBuy.json");
router.get("/goodBuy", (ctx, next) => {
  ctx.body = {
    code: 200,
    data: goodBuy,
  };
});

// 值得买瀑布初始数据
let recManual = require("./datas/recManual.json");
router.get("/recManual", (ctx, next) => {
  ctx.body = {
    code: 200,
    data: recManual,
  };
});

router.post("/test2", (ctx, next) => {
  // 1. 请求参数： body
  ctx.body = "post请求的测试数据";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen("3001", () => {
  console.log("服务器地址: http://localhost:3001");
});
