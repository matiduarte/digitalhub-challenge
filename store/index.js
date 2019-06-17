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
  async getNews({ commit }, category) {
    try {
      const categoryParam = (category) ? `&category=${category}` : '';
      const { data: { articles } } = await request('GET', `top-headlines?country=us${categoryParam}`);
      const news = articles.map(article => ({
        author: article.author,
        title: article.title,
        image: article.urlToImage,
        url: article.url,
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
