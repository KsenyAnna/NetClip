<template>
    <article class="small-card small-card--slide" :class="classes">
        <div class="small-card__titles">
            <div class="small-card__title">{{ title }}</div> 
            <SvgIcon
                :name="`${icon}`"
                :classN="`${iconClass}`"
            />
        </div>
        <div class="small-card__text text--medium">{{ text }}</div>
        <div class="small-card__button">
            <button type="button" class="button button--small button--covered button--blue button--squared">
                <span class="button__text">{{ button }}</span>
            </button>
        </div>
    </article> 
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default { 
    name: 'SmallCardComponent',

    components: {
        SvgIcon,
    },

    props: {
        classes: {            
            default: "",
            type: String,
        },  
        title: {
            default: 'Стандартный заголовок',
            type: [String],
        },
        text: {
            default: 'Стандартный текст',
            type: [String],
        },        
        icon: {
            default: 'info',
            type: [String],
        },
        iconClass: {
            default: 'small-card__icon small-card__icon-info',
            type: [String],
        },
        button: {
            default: 'Стандартная кнопка',
            type: [String],
        },
    },
}
</script>

<style  lang="scss">
.medium-block {
    width: 100%;

    overflow: hidden;

    @media #{$screen-tablet} {
        width: rem(600px);
    }

    @media #{$screen-desktop} {
        width: rem(621px);
    }

    &__title {
        margin-bottom: rem(10px);
    }

    &__texts {
        margin-bottom: rem(10px);
    }

    &__text-more {
        display: none;    
        margin-top: rem(11px);
    }

    &__name--hide {
        display: none;
    }

    &__icon {
        transform: rotate(0deg) ;
    }

    &__icon--opened {
        transform: rotate(180deg) !important;
    }
}
</style>
