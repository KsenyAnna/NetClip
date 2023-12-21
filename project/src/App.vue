<template>
  <div class="page">
    <HeaderComponent
      :logo="headerLogo"
    />    
    <router-view/>
    <FooterComponent
      :logo="footer.logo"
      :classesLogo="footer.classesLogo"
      :classesSocial="footer.classesSocial"
      :classesMenu="footer.classesMenu"
    />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from './components/FooterComponent.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FooterComponent,
    },

    data() {
      return {    
        headerLogo: 'logo.png', 
        footer: {
          logo: 'logo.png', 
          classesLogo: 'footer__logotip',
          classesSocial: 'footer__social',
          classesMenu: 'footer__menu',
        },        
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a:-webkit-any-link {
    text-decoration: none;
}
.page {
    display: flex;
    flex-direction: column;

    min-height: 100vh;

    &__header {
        position: fixed;
        z-index: $z-index-header; 
        top: 0;
        right: 0;
        left: 0;
        flex-shrink: 0;
    }

    &__content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        margin-top: rem($height-header-mobile); 
        padding-top: rem(40px);
        padding-bottom: rem(100px);

        @media #{$screen-tablet} {
            margin-top: rem($height-header-desktop);
            padding-top: rem(50px);
        }
        
        &--modification {
            padding: 0;
            margin-bottom: 0;
        }
    }

    &--block-scroll {
        overflow: hidden;
    }

    &__footer {        
        flex-shrink: 0;
    }
}
</style>
