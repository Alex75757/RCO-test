<template >
<div>
<p></p>
    <div v-if="entitys.length">
        <div v-if="entitys[0].attribute_id != null"> 
             <li   v-for="(entity,i) in entitys" 
                :key="entity.attribute_id"
                @click="findAttribute(i)"
            >  
                
                 {{entity.attribute_id}} | 
                {{entity.attribute_name}} 
                <br>
                <div v-if="i == $root.attribute_selected">
                     <router-link v-for=" (attribute,k) in attributes"
                        :key="attribute.id"
                        @click="showFacts(k)"
                     :to="{  name: 'facts',
                          params: { my_query: showFacts(k) 
                                    },
                           query: { attribute_id: attribute.id,  
                                    
                                    tab_id: $root.tab_selected, 
                                    source_id: $root.source_selected,
                                    time_frame_id: $root.time_selected
                                    }
                        }"
                     
                     >
                        {{attribute.name}} 
                     </router-link>   
                </div>
            </li>
        </div>
        <div v-else>
            <li   v-for="(entity,j) in entitys" 
                    :key="entity.name_id"
                    @click="findAttribute(j)"
            >  
                {{entity.attribute_name}}
                <div v-if="j == $root.attribute_selected">
                    <router-link v-for=" (attribute,m) in attributes"
                        :key="attribute.name"
                        @click="showFacts(m)"
                        :to="{  name: 'facts',
                          params: { my_query: showFacts(m) 
                                    },
                           query: {  
                                    attribute_id: attribute.id, 
                                    name_id: entity.name_id,
                                    tab_id: $root.tab_selected, 
                                    source_id: $root.source_selected,
                                    time_frame_id: $root.time_selected
                                    }
                        }"

                    >
                    {{attribute.name}}
                    </router-link> 
                </div>
            </li>
        </div>      
    </div>
    <div v-else> No news at all :^)    
    </div>
</div>
       
</template>

<script>
  
  import App from './App'
  import axios from 'axios'

  
  export default {
     
   
    data() {
      return {
      
        entitys: [],
        attributes: [],
        entity_selected: '',
        };
    },
    

    methods: {

    showFacts(idd) {
        this.query = 'attribute_id='+ 
                this.entitys[this.$root.attribute_selected].attribute_id
                + '&name_id=' + //3340041
                this.attributes[idd].id
                + '&tab_id=' +
                this.$root.tab_selected
                + '&source_id=' +
                this.$root.source_selected
                + '&time_frame=' +
                this.$root.time_selected
        // console.log(`query = ${this.query}`)
      return this.query      
        },

      findAttribute (id) {
      
        this.$root.attribute_selected = id
        console.log(`attribute_selected = ${this.$root.attribute_selected}`)    
        console.log(`entity selected = ${this.entitys[this.$root.attribute_selected].attribute_id}`)
       
          
        let endpoint= 'http://addr.rco.ru/fxweb/api/Attribute?'  
       
        if (this.entitys[this.$root.attribute_selected].attribute_id) {
            endpoint += 'attribute_id='+ 
                    this.entitys[this.$root.attribute_selected].attribute_id
                    + '&source_id=' +
                    this.$root.source_selected
                    + '&time_frame=' +
                    this.$root.time_selected
            this.entity_selected = this.entitys[this.$root.attribute_selected].attribute_id
            }
        else {
            endpoint += 'name_id='+  
                    this.entitys[this.$root.attribute_selected].name_id
                    + '&source_id=' +
                    this.$root.source_selected
                    + '&time_frame=' +
                    this.$root.time_selected    
            this.entity_selected = this.entitys[this.$root.attribute_selected].name_id
            }         
            console.log(`entity_selected ${this.entity_selected}`)
            
            axios(endpoint)
                .then(response => {
                this.attributes = response.data
                console.log('------attributes  data------')
                console.log(this.attributes)
                })
                .catch( error => {
                console.log('-attribute--error-------');
                console.log(error)
                })
            
        },  

      getEntitys() {
        let endpoint = 'http://addr.rco.ru/fxweb/api/Entity?tab_id='+  
        this.$root.tab_selected
        + '&source_id=' +
        this.$root.source_selected
        + '&time_frame=' +
        this.$root.time_selected 
         console.log(`end point entity is ${endpoint}`)
        axios(endpoint)
          .then(response => {
            this.entitys = response.data
            console.log('------entitys  data------')
            console.log(this.entitys)
           
              
            console.log('------entitys------')
          })
          .catch( error => {
            console.log('-11----error-------');
            console.log(error)
          })
      }
    },

    // mounted() {
    //   this.showFacts();
    // },
    watch: {
      '$route'() {
        this.getEntitys();
      }
    },

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