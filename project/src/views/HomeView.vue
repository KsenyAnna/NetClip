<template>
  <div class="home">
    <div slass="fdd">
      <div class="fdd__hg">Первое приложение Vue</div>
    </div>
    <first-component/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import FirstComponent from '@/components/FirstComponent.vue'

  export default {
    name: 'HomeView',
    components: {
      // HelloWorld,
      FirstComponent,
    }
  }
</script>

<style lang="scss"> 

</style>