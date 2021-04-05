<template >
  <div id="app" >
    <header>
      <h1>Vue.js SPA mini observing system step 2</h1>
 

      <div>
          <select id="isTimeframe" @click="ConsoleShow">
            
              <option  
                v-for= "time in time_frame" 
                :key="time.title"
                
                >
                {{time.title}}
              
              </option>
              
            </select>
            
      </div >
    <SorceTake  
    />
      

    </header>
    <main>
      <aside class="sidebar" >
        <div id="MainMenu">
            <div id="tab" @emit="getAllPosts ()">
                <ul  >
                 
                <router-link     
                  v-for ="(tab,i) in tabs"
                  :key="tab.id"
                                    
                  :to="{  name: 'entity',
                          params: { idd: i 
                                    },
                           query: {    source_id :$root.souce_selected, 
                            tab_id: $root.tab_selected}
                  }"
                >
                
                  <li  v-if="i == $root.tab_selected" 
                    @click="findTab(i)" 
                    class="item_active"
                  >
                      <a :href = "tab.id" > 
                          <span>{{tab.caption}}</span>
                      </a>
                  </li>
                  <li  v-else @click="findTab(i)"
                  >
                      <a :href = "tab.id" > 
                          <span >{{tab.caption}}</span>
                      </a>
                  </li>
                  </router-link>
                   
                </ul>
                
              </div>
          
          </div>
             
        <div>
          <Entity />
        </div>
        
          
    </aside>
      <div class="content" >
        <router-view>
          <Facts />
        </router-view>
      
      </div>
   
    </main>
  </div>
</template>

<script>

import axios from 'axios'
import SorceTake from './Source.vue'
import Entity from './Entitys.vue'
import Facts from './Facts.vue'

  export default {
    components: {
      SorceTake,
      Entity,
      Facts
    },
  
    data () {
      return {
       
        time_frame: [],
        sources: [],
        tabs: [],
             
      };
    },
  
    methods: {

      ConsoleShow () {
      this.$root.time_selected = isTimeframe.selectedIndex
      console.log(`time frame = ${this.$root.time_selected}`)
      },

      findTab(i) {
        console.log("супер, пара трупер")
        this.$root.tab_selected = i;
         this.$root.attribute_selected = -1
        console.log(`attribute_selected =  ${this.$root.attribute_selected}`)
      },
     
    },  
    
  beforeCreate() {
    
    axios
     //time_frame_id
     .get('http://addr.rco.ru/fxweb/api/TimeFrame'
       )
     .then(
          response => {
            console.log("info loaded 1 time_frame");
            this.time_frame = response.data;
            console.log(this.time_frame)
 
            },
          reject =>{
           
            console.log(`No data loaded. Time Frame`);
          }
      )
      
      .catch(error => {
        console.log(error);
        console.log('----error-1 Time Frame-');
        });
  
    
  
    axios
    //tab_id
     .get('http://addr.rco.ru/fxweb/api/Tab'
       )
     .then(
          response => {
            console.log("info loaded Tabs");
            this.tabs = (response.data);
            console.log(this.tabs);
          },
          reject =>{
            console.log(`No data loaded Tab`);
          }
      )
      
      .catch(error => {
        console.log(error);
        console.log('----error-3 Tab-');
        });
   
  }
   
}

</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  h1, h2 {
    font-weight: normal;
    text-align: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  header {
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 100px;
    border-bottom: 1px solid #42b983;
    text-align: left;
    background: #ffffff;
  }
  c1{
    font-size:14px;
  }
  main {
    display: flex;
    height: calc(100vh - 90px);
    max-width: auto;
    margin-top: 110px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }
    aside {
      flex: 1 0 30%;
      height: 100%;
      overflow-y: auto;
      width: 30%;
      padding: 50px 1px;
      box-sizing: border-box;
      border-right: 1px solid #42b983;
    }
  .content {
    flex: 1 1 70%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  // .router-link-active {
  // color: red;
  // }
 li:hover, li.active{
   color: blue;
 } 
 
</style>