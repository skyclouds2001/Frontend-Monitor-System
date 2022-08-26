import { createStore } from 'vuex';

export default createStore({
  state () {
    return {
      pageHeaderTitle: '',
    }
  },
  getters: {},
  mutations: {
    updateTitle (state, title) {
      state.pageHeaderTitle = title;
    },
  },
  actions: {},
  strict:  process.env.NODE_ENV !== 'production',
});
