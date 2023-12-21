<template>
    <div class="logo-footer" :class="classes">
         <router-link to="/" class="logo-footer__link">
             <img class="logo-footer__pic" 
                 :src="require(`@/assets/images/icons/${logo}`)"
                 :alt="logo"
             >
         </router-link>                        
     </div> 
 </template>
 
 <script>
 import SvgIcon from './SvgIcon.vue';
 
 export default {
    name: 'FooterLogoComponent',
    components: {
        SvgIcon
    },    

    props: {
        classes: {
            default: "",
            type: String,            
        },
        logo: {
            default: 'logo.png',
            type: String,
        },
    },
 }
 </script>
 
 <style lang="scss">
 .logo-footer {
    &__pic {
        height: rem(40px);
        width: rem(122px);

        overflow: hidden;

        margin: 0 auto;

        @media #{$screen-desktop} {  
            height: rem(26.1px);
            width: rem(135px);
        }
    }      
 }
 </style>
 