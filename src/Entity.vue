<template lang="html">
  <div class="post" v-if="entity">
    <h1 class="post__title">{{ entity.attribute_name }}</h1>
   <br>
    <p  class="post__id">{{ entity.attribute_id }}</p>
   
  </div>

  
</template>

<script>
  
  import App from './App'
  import axios from 'axios'
  import Source from './Source.vue'
  
  export default {
    props: ['iddt'],
    
    
          
    
    // metaInfo() {
    //   return {
    //     title: this.entity && this.entity.title,
    //   };
    // },
    data() {
      return {
      
        entity: null,
        
        }
    },
    methods: {
      getPost(id) {
        let endpoint = 'http://addr.rco.ru/fxweb/api/Entity?tab_id=' + 
        this.$root.tab_selected
        +'&source_id=' +
        this.$root.source_selected
        + '&time_frame=' + isTimeframe.selectedIndex
         console.log(`end point entity is ${endpoint}`)
        axios(endpoint)
          .then(response => {
            this.entity = response.data[id]
            console.log('------entity from data------')
            console.log(this.entity)
           
            console.log(id)
           
            console.log('------bbbvvvfff------')
          })
          .catch( error => {
            console.log('-11----error-------');
            console.log(error)
          })
      }
    },

    created() {
      this.getPost(this.iddt);
    },
    watch: {
      '$route'() {
        this.getPost(this.iddt);
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