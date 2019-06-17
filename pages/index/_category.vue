<template>
  <div class="container">
    <card></card>
  </div>
</template>

<script>

import Card from '@/components/Card.vue';

export default {
  name: 'category',
  async asyncData({ store, params }) {
    const { category } = params;
    store.dispatch('getNews', category);
  },
  components: {
    Card,
  },
};
</script>
