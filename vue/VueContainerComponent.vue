<template>
  <div class="container">
    <h1>Vue Container Component</h1>
    <web-component></web-component>
    <ng-web-component></ng-web-component>
    <vue-web-component></vue-web-component>
  </div>
</template>

<script>
  export default {
    name: 'VueContainerComponent'
  }
</script>

<style scoped>
  .container {
    border: 1px solid black;
  }
</style>
