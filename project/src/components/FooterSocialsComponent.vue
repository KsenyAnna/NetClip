<template>
    <div class="social" :class="classes">
        <ul class="social__list">
            <li class="social__item"
                v-for="icon in icons"
                :key="icon.id"
            >
                <router-link to="/" class="social__icon">
                    <SvgIcon
                        :name="icon.name"
                        :classN="icon.classN"
                    />
                </router-link>                                
            </li>
        </ul>                      
     </div> 
 </template>
 
 <script>
 import SvgIcon from './SvgIcon.vue';
 
 export default {
    name: 'FooterSocialsComponent',
    components: {
        SvgIcon
    },    

    props: {
        classes: {
            default: "",
            type: String,            
        },
        icons: {
            default: "",
            type: [Array, String],            
        },        
    },
 }
 </script>
 
 <style lang="scss">
.social {
    height: rem(40px);
    width: 100%;
    
    &__list {   
        height: 100%;  
        width: 100%;

        display: flex;     

        justify-content: center;        
        align-items: center;
    }      

    &__item {  
        height: 100%;  

        &:not(:last-child) {
            margin-right: rem(23px);
        }
    }

    &__icon {   
        &-pic {            
            color: $heather;            
            width: rem(40px);            
            height: rem(40px);        
        }    
    }
}
 </style>
 