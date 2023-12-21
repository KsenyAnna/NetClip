<template>
    <div class="menu" :class="classes">
        <ul class="menu__list">
            <li class="menu__item"
                v-for="item in menu"
                :key="item.id"
            >
                <router-link to="/" class="menu__text">{{ item.name }}</router-link>
            </li>
        </ul>            
     </div> 
 </template>
 
 <script>
 import SvgIcon from './SvgIcon.vue';
 
 export default {
    name: 'FooterMenuComponent',
    components: {
        SvgIcon
    },    

    props: {
        classes: {
            default: "",
            type: String,            
        },
        menu: {
            default: "",
            type: [Array, String],            
        },
        
    },
 }
 </script>
 
 <style lang="scss">
.menu {
    $footer-padding: 20px;
    
    &__list {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        flex-wrap: wrap;

        @media #{$screen-tablet} {
            flex-wrap: nowrap;
        }
    }

    &__item {
        width: 100%;
        height: rem(18px) !important;

        text-align: center;

        &:not(:last-child) {
            margin-bottom: rem($footer-padding);
            
            @media #{$screen-tablet} {
                margin: 0;
            }        
        }

        @media #{$screen-tablet} {
            width: auto;
            
            margin: 0;

            &:not(:last-child) {
                padding-right: rem(30px);
            }
        }
    }

    &__text {
        font-size: rem($font-size-tiny);
        font-weight: $font-weight-regular;
        line-height: 128%;

        @media #{$screen-tablet} {
            line-height: $line-height-percent-middle;
        }
        @media #{$screen-desktop} {
            line-height: 128%;
        }
    }
}
 </style>
 