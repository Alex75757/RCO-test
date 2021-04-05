<template lang="html">
  <div class="greeting">
    <h2>
      Wellcome to the Vue.js blog
    </h2>
    
  </div>
</template>
<script>
export default {
    props: ['id'],
    data() {
      return {
        post: null,
     }
    },

}
</script>
<style lang="scss">
  .greeting {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
</style>