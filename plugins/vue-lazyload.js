import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/img/no_available.png',
  loading: 'static/img/no_available.png',
  attempt: 1,
});
