<template lang="html">
  <div class="post" v-if="post">
    <h1 class="post__title">{{ post.attribute_name }}</h1>
   
    <p  class="post__id">{{ post.attribute_id }}</p>
   
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    props: ['id'],
    metaInfo() {
      return {
        title: this.post && this.post.title,
      };
    },
    data() {
      return {
        post: null,
        // endpoint: 'http://addr.rco.ru/fxweb/api/Tab/',
        endpoint:  'http://addr.rco.ru/fxweb/api/Entity?tab_id=0&source_id=7&time_frame=5',

      }
    },
    methods: {
      getPost(id) {
        axios(this.endpoint)
          .then(response => {
            this.post = response.data[id]
            console.log(id)
            console.log(this.post)
           
            console.log('------aaa------')
          })
          .catch( error => {
            console.log('-----error-------');
            console.log(error)
          })
      }
    },
    
    created() {
      this.getPost(this.id);
    },
    watch: {
      '$route'() {
        this.getPost(this.id);
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
      font-size: 180px;
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