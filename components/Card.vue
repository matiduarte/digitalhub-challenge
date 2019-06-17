<template>
  <div class="columns is-multiline">
    <div class="column is-one-third" v-for="(headline, index) in getNews" :key="index">
   <div class="card">
    <div class="card-image">
      <figure class="image is-3by2">
        <img :src="headline.image" :alt="headline.title">
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

import { mapState } from 'vuex';

export default {
  name: 'Card',
  computed: {
    ...mapState(['news']),
    getNews() {
      return this.news;
    },
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
    padding: 10px;
  }
  @media only screen and (max-width: 600px) {

    .columns > .column.is-one-third {
      width: auto;
      justify-content: center;
      align-items: center;
    }
  }

</style>
