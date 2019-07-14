import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

const BACKEND_URL = 'http://localhost:8080';

const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_ERROR = 'SEARCH_ERROR';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchResults: [],
  },
  mutations: {
    [SEARCH_SUCCESS](state, result) {
      state.searchResults = result;
    },
    [SEARCH_ERROR](state) {
      state.searchResults = [];
    },
  },
  actions: {
    async search({ commit }, query) {
      if (query && query.length == 0) {
        commit(SEARCH_SUCCESS, []);
        return;
      }
      axios
          .get(`${BACKEND_URL}/search`, {
            params: { query },
          })
          .then(({ data }) => {
            commit(SEARCH_SUCCESS, data.documents)
          })
          .catch((err) => {
            commit(SEARCH_ERROR);
          });
    },
  },
});

store.dispatch('search');

export default store;
