<template>
  <div id="app">
    <transition name="slide">
      <div>
        <nav-bar :categories="getCategories"></nav-bar>
        <nuxt />
        <Footer/>
      </div>
    </transition>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import { mapState } from 'vuex';

export default {
  components: {
    NavBar,
    Footer,
  },
  computed: {
    ...mapState(['categories']),
    getCategories() {
      return this.categories;
    },
  },
};
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #e8ecf0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
