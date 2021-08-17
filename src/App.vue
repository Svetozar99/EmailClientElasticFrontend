<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>

import Navigation from './components/navigation/TheNavigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  }
}
</script>

<style>
</style>
