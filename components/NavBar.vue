<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
        <a role="button" ref="navbar-burguer" class="navbar-burger burger" :class="{'is-active': toggleMenu}"
           @click="toggleMenu = !toggleMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div ref="navbarBasicExample" class="navbar-menu" :class="{'is-active': toggleMenu}">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Categories
            </a>
            <div class="navbar-dropdown">
              <a v-for="category in categories"
                 class="navbar-item"
                 :key="category"
              >
                {{getCategoryName(category)}}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'NavBar',
  data() {
    return {
      toggleMenu: false,
    };
  },
  computed: {
    ...mapState(['categories']),
    filterNews() {
      return this.categories;
    },
  },
  methods: {
    getCategoryName(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
};
</script>

<style scoped>
  .navbar {
    box-shadow: 0 1px 4px 0 rgba(102, 107, 135, 0.14);
  }
</style>
