<template lang="html">
  <div class="post" v-if="tab">
    
    <p  class="post__title">{{ tab.caption }}</p>
    <p  class="post__id">{{ tab.id }}</p>
   
  </div>
</template>

<script>
  
  import axios from 'axios';
  export default {
    props: ['idd'],
    // tab: [],
  
    data() {
      
      return {
        iq: null,
        tab: null,
        // endp: 'https://jsonplaceholder.typicode.com/albums/1/photos',
        endp: 'http://addr.rco.ru/fxweb/api/Tab'
      }
    },
    methods: {
      
      getPost(id) {
      
        axios(this.endp)
          .then(response => {
            this.tab = response.data[id]
                     
            console.log('---vvvv----')
            
            console.log(id)
            console.log(this.tab)
           
            console.log('------VVVVVVV------')
          })
          .catch( error => {
            console.log('-----error-------');
            console.log(error)
          })
      }
    },
    
    created() {
      this.getPost(this.idd);
    },
    watch: {
      '$route'() {
        this.getPost(this.idd);
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