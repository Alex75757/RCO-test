<template >
    <div id="c1" class="post" >
	     
        <a href="\" style="font-size:18px;">Все?</a>
      <a> | {{$root.source_selected}} | </a>
      <a
            v-for= "source in sources" 
         
            :key="source.id" 
            :to="{    
                name: '',
                params: { iddt : source.id },
                query: {    source_id :source.id, 
                            tab_id: $root.tab_selected}
                }"

        >
        
            <li v-if="source.id == $root.source_selected" 
                @click = "findSource(source.id)" > 
               { {{source.name}} } {{" | "}} </li>
            <li v-else @click = "findSource(source.id)" > 
                {{source.name}} {{" | "}} </li>
         
      </a>
    </div>


  

</template>
<script>

import axios from 'axios';

export default {
      
    data () {
      return {
       
        sources: [],
       
      };
    },

    methods: {
      findSource(id) {
        console.log("все отлично!")
      
      this.$root.source_selected = id
      console.log(`source_selected= ${this.$root.source_selected}`)
    
        },  
    //   getPost(id) {
    //      if (isTimeframe.selectedIndex >= 0) {
   
    //     let  endpoint = 'http://addr.rco.ru/fxweb/api/Entity?tab_id=' + 
    //     this.$root.tab_selected
    //     +'&source_id=' + this.$root.source_selected + 
    //     '&time_frame=' + isTimeframe.selectedIndex
    //     console.log(`endpoint source = ${endpoint}`)
    //     axios(endpoint)
    //       .then(response => {
    //         this.source = response.data[id]
            
    //         console.log('-abba-')
    //         console.log(this.source)
            
    //         console.log('-abba-')
    //       })
    //       .catch( error => {
    //         console.log('-----error-------');
    //         console.log(error)
    //       })
    //     }  
    //   }
    },
    
    mounted() {
      axios
    //source_id
     .get('http://addr.rco.ru/fxweb/api/Source'
       )
     .then(
          response => {
            console.log("info loaded 2. Sources");
            this.sources = response.data;
            console.log(this.sources);
 
            },
          reject =>{
            console.log(`No data loaded 2`);
          }
      )
      
      .catch(error => {
        console.log(error);
        console.log('----error-2 -source-');
        });  


    //   this.getPost(this.$root.source_selected);
    },
    // watch: {
    //   '$route'() {
    //     this.getPost(this.this.$root.source_selected);
    //   },
    // }

   
}
   
</script>

<style lang="scss" scoped>
  .post {
    li:hover, li.active{
    color: green;
    
    }
    // .router-link-active {
    //  color: red;
    // }
    // li:hover, li.active{
    // color: green;
    // }
  } 
</style>