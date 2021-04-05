<template lang="html">
  <div class="post" v-if="timeFrame">
    <h1 class="post__title">{{ timeFrame.title }}</h1>
   
    <p  class="post__id">{{ timeFrame.title }}</p>
   
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    props: ['timeFrame'],
    // metaInfo() {
    //   return {
    //     title: this.post && this.post.title,
    //   };
    // },
    data() {
      return {
        // timeFrame: null,
        endpoint: 'http://addr.rco.ru/fxweb/api/TimeFrame/',
        // endpoint: 'https://jsonplaceholder.typicode.com/posts/',
      }
    },
    methods: {
      getPost(i) {
        axios(`${this.endpoint}.query(id=)${i}`)
          .then(response => {
            this.timeFrame = JSON.stringify(response.data)
            console.log('------timeFrame------')
            console.log(this.timeFrame)
           
            console.log('------timeFrame------')
          })
          .catch( error => {
            console.log('-----error-timeFr------');
            console.log(error)
          })
      }
    },
    
    created() {
      this.getPost(this.timeFrame);
    },
    watch: {
      '$route'() {
        this.getPost(this.timeFrame);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .post {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
    padding: 50px 20px 70px;
    &__title {
      position: relative;
      text-transform: uppercase;
      z-index: 1;
    }
    &__body {
      position: relative;
      z-index: 1;
    }
    &__id {
      position: absolute;
      font-size: 280px;
      bottom: -50px;
      margin: 0;
      color: #eeeeee;
      right: -20px;
      line-height: 1;
      font-weight: 900;
      z-index: 0;
    }
  }
</style>