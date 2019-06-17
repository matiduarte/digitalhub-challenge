<template>
  <div class="columns is-multiline">
    <div class="column is-one-third" v-for="(headline, index) in news" :key="index">
   <div class="card">
    <div class="card-image">
      <figure class="image is-3by2">
        <div v-lazy-container="{ selector: 'img', error: errorImg }">
          <img :data-src="headline.image" :data-error="errorImg" :alt="headline.title">
        </div>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-6"><a :href="headline.url" target="_blank">{{headline.title}}</a></p>
          <p class="subtitle is-7">{{headline.author}}</p>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'Card',
  props: ['news'],
  data() {
    return {
      errorImg: '/img/no_available.jpg',
    };
  },
  methods: {
    ...mapActions(['setLoading']),
  },
};
</script>

<style scoped>
  .card {
    border-radius: 5px;
  }
  .card-content {
    padding: 10px 2px 2px 2px;
    min-height: 126px;
    max-height: 126px;
  }
  .columns{
    margin-top: 10px;
    justify-content: center;
  }
  .columns > .column.is-one-third {
    width: 31.3333%;
  }
  .media-content {
    padding: 10px 5px 10px 5px;
  }
  img[lazy=loading] {
    filter: blur(2px);
    opacity: 0.8;
  }
  @media only screen and (max-width: 600px) {
    .columns > .column.is-one-third {
      width: auto;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      margin-right: 10px;
      padding-bottom: 2px;
    }
  }

</style>
