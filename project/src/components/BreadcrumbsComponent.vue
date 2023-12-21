<template>
    <nav class="breadcrumbs" :class="classes">
        <ul class="breadcrumbs__list">
            <li class="breadcrumbs__item"
                v-for="item in list"
                :key="item.id"
            >
            <router-link 
                :to="(item.name == 'Главная') ? '/' : '#'"
                class="breadcrumbs__link">{{ item.name }}</router-link>                
            </li>
        </ul>
    </nav>
</template>

<script>
export default { 
    name: 'BreadcrumbsComponent',

    components: {
    },

    props: {   
        classes: {            
            default: "",
            type: String,
        },     
        list: {
            type: [String, Array],
        },
    },
}
</script>

<style  lang="scss">
.breadcrumbs {
    &__list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    &__item {
        position: relative;

        display: flex;
        align-items: center;

        padding: 0 rem(23px);

        &:first-child {
            padding-left: 0;
        }

        &:last-child {
            padding-right: 0;
        }
    }

    &__item--active & {
        &__link {
            color: $slate-gray;

            &::after {
                display: none;
            }

            &:hover {
                text-decoration: none;
            }        
        }
    }

    &__item:first-child & {
        &__link {
            &::before {
                display: none;
            }
        }
    }

    &__item:last-child & {
        &__link {            
            &::after {
                display: none;
            }
        }
    }

    &__link {
        font-size: rem($font-size-tiny);
        line-height: rem(28px);

        display: block;

        text-decoration: none;

        color: $heather;

        @media #{$screen-tablet} {
            font-size: rem($font-size-small);
            line-height: rem(32px);
        }

        &:hover {
            text-decoration: underline;

            color: $slate-gray;

            transition: $transition-duration $transition-function;
        }

        &::before,
        &::after {
            position: absolute;
            top: 50%;

            width: rem(6px);
            height: rem(10px);

            transform: translateY(-50%);

            content: "";        

            background-image: url(~@/assets/images/icons/arrow.svg);
            background-repeat: no-repeat;
        }

        &::before {
            left: 0;            
        }

        &::after {
            right: rem(-6px);
        }
    }
}
</style>
