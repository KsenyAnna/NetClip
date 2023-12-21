<template>
   <div class="logo-header" :class="classes">
        <router-link to="/" class="logo-header__link">
            <img class="logo-header__pic" 
                :src="require(`@/assets/images/icons/${logo}`)"
                :alt="logo"
            >
        </router-link>                        
    </div> 
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default {
    name: 'HeaderLogoComponent',
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
.logo-header {
    &__pic {
        height: rem(40px);
        width: rem(122px);
        
        overflow: hidden;
    }  
}
</style>
