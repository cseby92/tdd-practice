<template>
  <div id="app">
    <HelloWorld msg="Welcome to the TDD Practice"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  }
};
</script>
