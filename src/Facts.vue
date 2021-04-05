<template>
   <div>
        table :)  
        <table >
           <th> items </th>  
           <th>{{$root.attribute_selected}}</th>       
           <tr v-for="(fact,i) in facts "
                :key="i "
           >
                
               
               <td> {{entity_selected}} </td>
               <td>
                   {{fact.target}}
               </td>
               <td>
                   {{fact.fact}}
               </td>
               <td>
                   {{fact.documentsCount}}
               </td>
               <td>
                   {{fact.value}}
               </td>
           </tr>
       </table>

    </div>     
</template>
<script >
    import axios from 'axios';
    import App from './App.vue'
    import Entitys from './Entitys.vue'
    
    export default {
    props:['my_query', 'entity_selected'],  
    data () {
      return {
           
        facts: [],
       
      };
    },
    
    methods: {

        
    },
      
    mounted() {
      axios
    //fact
     .get('http://addr.rco.ru/fxweb/api/Fact?' + this.my_query
       )
     .then(
          response => {
            console.log("info loaded. Facts");
            this.facts = response.data;
            console.log(this.facts);
 
            },
          reject =>{
            console.log(`No data loaded from Facts`);
            console.log(`my_query = ${this.my_query}`)
          }
      )
      
      .catch(error => {
        console.log(error);
        console.log('----error-2 -facts-');
        console.log(`my_query = ${this.my_query}`)
        });  

    },

    
  
}
   
   
</script>   

<style lang="scss" scoped>
.table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}
tr:nth-child(even) {
    background-color: #eee;
}