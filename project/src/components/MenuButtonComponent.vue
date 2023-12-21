<template>
    <div class="page-with-menu__button" :class="classes">
        <button type="button" class="button button--transparent button--covered button--iconed button--left" data-open-menu>
            <span class="button__text button__text--transparent">{{ name }}</span>
            <span class="button__icon button__icon">
                <SvgIcon
                    :name="'menu'"
                    :classN="'button__icon-pic'"
                />
            </span>
        </button>       
    </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default { 
    name: 'MenuButtonComponent',

    components: {
        SvgIcon,
    },

    props: {  
        classes: {            
            default: "",
            type: String,
        },      
        name: {
            default: "Меню раздела",
            type: String,
        },
    },
}
</script>

<style  lang="scss">
</style>
