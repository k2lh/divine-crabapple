<template>
  <siteHeader />
  <RouterView />
  <siteFooter />
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router';
  import siteHeader from './components/siteHeader.vue';
  import siteFooter from './components/siteFooter.vue';

  export default {
    name: 'App',
    components: {
      siteHeader,
      siteFooter
    },
    data() {
      return {
        items: []
      };
    }
  };
</script>

<style scoped>

</style>
