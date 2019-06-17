import Vue from 'vue';
import request from '../libs/ajax';

export const state = () => ({
  news: [],
  categories: [],
});

export const mutations = {
  setNews(localState, data) {
    Vue.set(localState, 'news', data);
  },
  setCategories(localState, data) {
    Vue.set(localState, 'categories', data);
  },
};

export const actions = {
  async getNews({ commit }) {
    try {
      const { data: { articles } } = await request('GET', 'top-headlines?country=us');
      const news = articles.map(article => ({
        ...article,
      }));
      commit('setNews', news);
    } catch (error) {
      console.error(error);
    }
  },
  async getCategories({ commit }) {
    try {
      const { data: { sources } } = await request('GET', 'sources?country=us');
      const categories = [...new Set(sources.map(source => source.category))];
      commit('setCategories', categories);
    } catch (error) {
      console.error(error);
    }
  },
};
