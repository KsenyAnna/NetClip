<template>
    <article class="cardArticle" :class="classes">  
        <router-link :to=link class="cardArticle__link"></router-link>   
        <div class="cardArticle__image">
            <img 
                :src="require(`@/assets/images/final/articles/${pic}`)" 
                class="cardArticle__image-pic" 
                :alt="pic"
            >  
        </div>
        <div class="cardArticle__content">
            <span class="cardArticle__title">{{ title }}</span>
            <span class="cardArticle__date">{{ date }}</span>
        </div>        
    </article>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default { 
    name: 'CardArticleComponent',

    components: {
        SvgIcon
    },

    props: {
        classes: {
            type: String,
            default: "",
        },        
        pic: {
            type: [String],
        },
        title: {
            default: "Стандартный текст",
            type: [String],
        },
        date: {
            default: "Дата",
            type: [String, Number],
        },
        link: {
            default: "/",
            type: [String, Number],
        },
    },
}
</script>

<style  lang="scss">
.cardArticle {
    position: relative;

    height: rem(288px);

    background-color: $white;

    overflow: hidden;

    border-radius: rem(16px);

    box-shadow: 0px rem(4px) rem(12px) rgba($black, .01);

    cursor: pointer;

    @media #{$screen-desktop} {
        height: rem(434px);

        border-radius: rem(24px);
        
        &:hover {
            transition: $transition-duration $transition-function;

            box-shadow: rem(6px) rem(20px) rem(32px) rgba($black, .12);

            margin-top: rem(-10px);
        }
    }  

    &__link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;       
        z-index: 100; 
    }

    &__image {
        position: relative;

        width: 100%;
        height: rem(146px);

        overflow: hidden;

        @media #{$screen-desktop} {
            height: rem(255px);
        }

        &::before {
            $card-width: 161px;
            $card-height: 146px;

            display: block;

            padding-top: percentage(rem($card-height) / rem($card-width));
            
            content: "";

            @media #{$screen-tablet} {
                $card-width: 159px;
                $card-height: 146px;

                padding-top: percentage(rem($card-height) / rem($card-width));
            }

            @media #{$screen-desktop} {
                $card-width: 292px;
                $card-height: 255px;

                padding-top: percentage(rem($card-height) / rem($card-width));
            }
        }

        &-pic {
            @include block-images-pos;

            width: 100%;
            height: 100%;

            object-fit: cover;
            font-family: "object-fit: cover";
        }
    }

    &__content {
        height: calc(100% - 146px);

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;

        padding-top: rem(10px);
        padding-right: rem(12px);
        padding-bottom: rem(10px);
        padding-left: rem(11px);

        @media #{$screen-tablet} {
            padding: rem(10px);
        }

        @media #{$screen-desktop} {
            height: calc(100% - 255px);

            align-items: flex-start;

            padding-top: rem(25px);
            padding-right: rem(21.02px);
            padding-bottom: rem(20px);
            padding-left: rem(21.02px);
        }
    }
    
    &__title {
        @include hidden-text;
        -webkit-line-clamp: 4;

        max-height: rem(68px);

        width: 100%;

        color: $tiber;

        font-family: $font-family;
        font-size: rem($font-size-miniature);
        font-weight: $font-weight-medium;
        line-height: $line-height-percent-middle;    

        color: $tiber;

        @media #{$screen-tablet} {
            max-height: rem(76px);

            font-size: rem($font-size-tiny);
        }
        @media #{$screen-desktop} {
            max-height: rem(92px);

            font-size: rem($font-size-average);
            line-height: 128%; 
            letter-spacing: rem(0.36px);
        }    
    }   
    
    &__date {
        width: fit-content;

        color: rgba($daintree, .35);

        font-family: $font-family;
        font-size: rem(11px);
        font-weight: $font-weight-medium;
        line-height: $line-height-percent-big;   

        @media #{$screen-desktop} {
            font-size: rem($font-size-tiny);
        }    
    }
}
</style>
