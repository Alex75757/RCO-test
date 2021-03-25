<template>
  <div id="app">
    <header>
      <h1>Vue.js SPA mini observing system</h1>
      <div>
          <select>
            
              <option
                v-for= "timeFrame in time_frame_id" 
                :key="timeFrame.title"
                
                >
                {{timeFrame.title}}
              
              </option>
              
            </select>
            
      </div >
    
      <div id="c1">
	     
        <a href="default.aspx" style="font-size:18px;">Все?</a>
        &nbsp;
       
        <a v-for= "source in source_id" 
          :key="source.id" 
          :href="source.uri"
          >
          {{source.name}} {{" | "}} </a>
        &nbsp;

      </div>

    </header>
    <main>
      <aside class="sidebar">
        <div id="MainMenu">
            <div id="tab">
                <ul>
                <router-link   
                  v-for ="(tab,i) in tab_id"
                  :key="tab.id"
                                      
                  :to="{  name: 'navFst',
                          params: { idd: tab.id },
                          query: {} }"
                >
                

                  <li  v-if="i == 1" 
                    class="item_active"
                  >
                      <a :href = "tab.id" > 
                          <span>{{tab.caption}}</span>
                      </a>
                  </li>
                  <li  v-else 
                  >
                      <a :href = "tab.id" > 
                          <span>{{tab.caption}}</span>
                      </a>
                  </li>
                  </router-link>
                   
                </ul>
                
              </div>
            </div>
            <div> 
          </div>    
        
        <router-link
            v-for="(post,i) in posts" 
            :key="post.id"
            active-class="is-active"
            class="link"
            :to="{ name: 'post', 
            params: { id: i },
            query: {time_frame_id,i} }">
          {{post.attribute_id}} . 
        </router-link>
        <p><br></p>
          
    </aside>
      <div class="content">
        <router-view></router-view>
      </div>
   
    </main>
  </div>
</template>

<script>


import axios from 'axios'

  export default {
    
   
    data () {
      return {
        time_frame_id: [],
        source_id: [],
        tab_id: [],
        entity_id: [],
        posts: [],
        fake_id: [],
        endpoint: 'http://addr.rco.ru/fxweb/api/Entity?tab_id=0&source_id=7&time_frame=5',
     };
    },

   created() {
      this.getAllPosts();
    },
    methods: {
      getAllPosts() {

       
        console.log('pppppppppzzzzdddddd---')
        
        axios.get('http://addr.rco.ru/fxweb/api/Entity?tab_id=0&source_id=7&time_frame=5')
          .then(response => {
            this.posts = response.data;
            console.log('000---000---000')
            console.log(this.posts)
            console.log('000---000---000')
          })
          .catch(error => {
            console.log('-----error-------');
            console.log(error);
          })
      }
    },  
    

  mounted() {
    
    axios
     //time_frame_id
     .get('http://addr.rco.ru/fxweb/api/TimeFrame'
       )
     .then(
          response => {
            console.log("info loaded 1");
            this.time_frame_id = response.data;
            console.log(this.time_frame_id);
 
            },
          reject =>{
            this.time_frame_ido = "No data loaded";
            console.log(`No data loaded 1`);
          }
      )
      
      .catch(error => {
        console.log(error);
        console.log('----error--');
        });
  
    axios
    //source_id
     .get('http://addr.rco.ru/fxweb/api/Source'
       )
     .then(
          response => {
            console.log("info loaded 2");
            this.source_id = response.data;
            console.log(this.source_id);
 
            },
          reject =>{
            this.source_id = "No data loaded";
            console.log(`No data loaded 2`);
          }
      )
      
      .catch(error => {
        console.log(error);
        console.log('----error--');
        });
  
    axios
    //tab_id
     .get('http://addr.rco.ru/fxweb/api/Tab'
       )
     .then(
          response => {
            console.log("info loaded 3");
            this.tab_id = (response.data);
            console.log(this.tab_id);
          },
          reject =>{
            this.tab_id = "No data loaded";
            console.log(`No data loaded 3`);
          }
      )
      
      .catch(error => {
        console.log(error);
        console.log('----error--');
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
    min-height: 90px;
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
    margin-top: 90px;
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

 
</style>