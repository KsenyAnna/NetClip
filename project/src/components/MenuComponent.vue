<template>
    <nav class="page-with-menu__menu list-menu" :class="classes" data-menu>
        <div class="list-menu__title list-menu__title--desktop">
            <span class="list-menu__text">{{ title }}</span>
            <button type="button" class="list-menu__button button button__icon button--circular" data-close-menu>
                <SvgIcon
                    :name="'close'"
                    :classN="'list-menu__button-pic button__icon--circular'"
                />
            </button>
        </div>
        <ul class="list-menu__items">
            <li class="list-menu__item"
                v-for="item in menu"
                :key="item.id"
            >
                <router-link to="/" class="list-menu__link"></router-link>
                <span class="list-menu__item--text">{{ item.name }}</span>
            </li>
        </ul>
    </nav>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default { 
    name: 'MenuComponent',

    components: {
        SvgIcon,
    },

    props: {    
        classes: {            
            default: "",
            type: String,
        },   
        title: {
            type: String,
        },
        menu: {
            type: [String, Array],
        },
    },
}
</script>

<style  lang="scss">
</style>
