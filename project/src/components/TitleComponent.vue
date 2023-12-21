<template>
    <article class="title" :class="classes">        
        <div class="title__text">{{ title }}</div>
        <div class="title__line">
            <SvgIcon
            :name="line"
            :classN="'title__line-pic'"
        /> 
        </div>   
    </article>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default { 
    name: 'TitleComponent',

    components: {
        SvgIcon,
    },

    props: {
        classes: {
            default: '',
            type: [String],
        },  
        title: {
            default: 'Стандартный заголовок',
            type: [String],
        },
        line: {
            default: 'bottom_line',
            type: [String],
        },          
    },
}
</script>

<style  lang="scss">
.title {
    height: 100%;
    width: 100%;
    
    &--red & {
        &__line {
            &-pic {
                color: $cerise-red;
            }
        }
    }

    &__text {
        color: $tiber;
        
        font-family: $font-family-default;
        font-size: rem($font-size-average);
        text-align: center;
        line-height: 120%;
        font-weight: 600;

        margin-bottom: rem(8px);

        @media #{$screen-tablet} {
            font-size: rem(22px);
            line-height: $line-height-percent-middle;
            text-align: left;

            margin-bottom: rem(9px);
        }

        @media #{$screen-desktop} {
            font-family: $font-family;
            font-size: rem($font-size-huge);
            font-weight: $font-weight-medium;
        }
    }

    &__line {
        position: relative;

        height: rem(4px);
        width: rem(102px);

        margin-left: auto;
        margin-right: auto;

        @media #{$screen-tablet} {
            height: rem(6px);
            width: rem(143px);

            margin: 0;
        }

        @media #{$screen-desktop} {
            height: rem(11px);
            width: rem(262px);
        }

        &-pic {
            position: absolute;
            top: 0;

            color: $curious-blue;

            width: 100%;
            height: 100%;

        }
    }
}

</style>
