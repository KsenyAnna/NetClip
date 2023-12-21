<template>
    <article class="medium-block" :class="classes" data-uncover>
        <div class="medium-block__title title--h3">{{ title }}</div>
        <div class="medium-block__texts">
            <p class="medium-block__text text--medium">{{ text }}</p>
            <p class="medium-block__text medium-block__text-more  text--medium" data-uncover-content>{{ textMore }}</p>
        </div>
        <button type="button" class="medium-block__button button button--simple button--iconed button--right" data-uncover-toggle>
            <span class="medium-block__name button__text"  data-uncover-name>{{ showMore }}</span>
            <span class="medium-block__name medium-block__name--hide button__text"  data-uncover-hide>{{ hide }}</span>
            <span class="medium-block__icon button__icon">                                    
                <SvgIcon
                    :name="`${icon}`"
                    :classN="`${iconClass}`"
                />
            </span>
        </button>
    </article>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default { 
    name: 'MediumBlockComponent',

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
        textMore: {
            default: 'Стандартный дополнительный текст',
            type: [String],
        },        
        showMore: {
            default: 'Показать еще',
            type: [String],
        },        
        hide: {
            default: 'Скрыть',
            type: [String],
        },
        icon: {
            default: 'arrow-down-red',
            type: [String],
        },
        iconClass: {
            default: 'button__icon-pic medium-block__icon',
            type: [String],
        },
    }
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
