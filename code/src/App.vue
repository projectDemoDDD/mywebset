<template>
  <router-view></router-view>
</template>

<script>

import  Login  from "./pages/Login.vue";

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0px;
}
</style>
