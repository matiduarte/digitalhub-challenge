<template>
  <div class="container">
    <card :news="news"></card>
  </div>
</template>

<script>

import Card from '@/components/Card.vue';
import { mapState } from 'vuex';

export default {
  name: 'category',
  async asyncData({ store, params }) {
    const { category } = params;
    return store.dispatch('getNews', category);
  },
  components: {
    Card,
  },
  computed: {
    ...mapState(['news']),
  },
};
</script>
