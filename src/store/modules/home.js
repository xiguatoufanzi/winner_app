import request from "@/utils/request";

const state = {
  homeData: {},
};

const mutations = {
  GET_HOME_DATA(state, homeData) {
    state.homeData = homeData;
  },
};

const actions = {
  async getHomeData({ commit }) {
    const result = await request("/home");
    if (result.code === 200) {
      const homeData = result.data;
      commit("GET_HOME_DATA", homeData);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
