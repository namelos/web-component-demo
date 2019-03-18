<template>
  <VueContainerComponent />
</template>

<script>
  import VueContainerComponent from './VueContainerComponent'

  export default {
    name: 'App',
    components: {
      VueContainerComponent
    },
    data() {
      return {
        message: 'Vue Component'
      }
    }
  }
</script>

<style scoped>
</style>
