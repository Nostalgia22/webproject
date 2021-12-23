<template>
  <div id="app">
    <statusbor></statusbor>
    <router-view/>
    <bottomarea></bottomarea>
  </div>
</template>

<script>
import statusbor from '@/components/statusbar'
import bottomarea from '@/components/bottomarea'
import login from '@/components/login.vue'
export default {
  name: 'App',
  components:{
    statusbor,
    bottomarea,
    login
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
  overflow:scroll;

  overflow-x:hidden;
}
</style>
