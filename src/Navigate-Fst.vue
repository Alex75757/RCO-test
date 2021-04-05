<template lang="html">
  <div class="post" v-if="tab">
    <h1 class="post__title">{{ tab.id }}</h1>
    <p class="post__body">{{ tab.name }}</p>
    <p  class="post__id">{{ tab.caption }}</p>
  </div>
</template>
<script>
export default {
    props: ['id'],
   
   

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