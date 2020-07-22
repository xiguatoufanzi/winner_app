import request from "@/utils/request";

const state = {
  homeData: {},
  homeNavData: {},
};

const mutations = {
  GET_HOME_DATA(state, homeData) {
    state.homeData = homeData;
  },

  GET_HOME_NAV(state, homeNavData) {
    state.homeNavData = homeNavData;
  },
};

const actions = {
  // 头部导航推荐数据
  async getHomeData({ commit }) {
    const result = await request("/home");
    if (result.code === 200) {
      const homeData = result.data;
      commit("GET_HOME_DATA", homeData);
    }
  },

  // 头部导航其他数据
  async getHomeNav({ commit }) {
    const result = await request("/indexCateList");
    if (result.code === 200) {
      const homeNavData = result.data;
      commit("GET_HOME_NAV", homeNavData);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
