<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="hover-link navbar-item" href="http://www.chalhoubgroup.com/">
          DigitalHub
        </a>
        <a role="button" ref="navbar-burguer" class="navbar-burger burger" :class="{'is-active': toggleMenu}"
           @click="toggleMenu = !toggleMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{'is-active': toggleMenu}">
        <div class="navbar-start">
          <nuxt-link
            class="hover-link navbar-item" to="/"
            @click.native="toggleMenu = false"
          >Home</nuxt-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="hover-link navbar-link" style="color: #fff">
              Categories
            </a>
            <div class="navbar-dropdown" style="border-top-width: 1px">
              <nuxt-link v-for="category in categories"
                 class="navbar-item"
                 :key="category"
                 :to="{ path: category }"
              >
                {{getCategoryName(category)}}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  props: ['categories'],
  data() {
    return {
      toggleMenu: false,
      toggleDropdown: false,
    };
  },
  methods: {
    getCategoryName(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
};
</script>

<style scoped>
  .hover-link:hover {
    background-color: #33418e !important;
    color: white !important;
  }
  .navbar-menu {
    background-color: #3f51b5;
  }
  .navbar {
    background: #3f51b5;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12), 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    color: #fff;
  }
  .navbar-burger {
    color: #fff;
  }
  .navbar-item {
    color: #fff;
  }
  .navbar-item > a:hover {
    color: red;
  }
  .navbar-dropdown {
    background: #3f51b5;
  }
  .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {
  background-color: #33418e !important;
  }
  .navbar-link:not(.is-arrowless)::after {
    border-color: #fff;
    margin-top: -0.375em;
    right: 1.125em;
  }
</style>
