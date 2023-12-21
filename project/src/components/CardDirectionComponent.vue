<template>
    <article class="cardDirection" :class="classes">     
        <div class="cardDirection__image-bg"></div>
        <div class="cardDirection__image">
            <img 
                :src="require(`@/assets/images/final/directions/${pic}`)" 
                class="cardDirection__image-pic" 
                :alt="pic"
            >
        </div>
        <div class="cardDirection__content">
            <div class="cardDirection__title">
                {{title}}
            </div>
            <div class="cardDirection__text">
                {{ text }}
            </div>
        </div>
    </article>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default { 
    name: 'CardDirectionComponent',

    components: {
        SvgIcon
    },

    props: {
        classes: {            
            default: "",
            type: String,
        },        
        pic: {
            type: [String],
        },
        title: {
            default: "Стандартный заголовок",
            type: [String],
        },
        text: {
            default: "Стандартный текст",
            type: [String],
        },
    },
}
</script>

<style  lang="scss">
.cardDirection {    
    position: relative;

    height: rem(100px); 

    border-radius: rem(24px);

    cursor: pointer;

    background-color: $athens-gray;
    
    box-shadow: 0px rem(4px) rem(12px) rgba($black, .1);

    overflow: hidden;

    padding-top: rem(20px);
    padding-right: rem(46px);
    padding-bottom: rem(21px);
    padding-left: rem(117px);

    @media #{$screen-tablet} {
        height: rem(128px);

        padding-top: rem(30px);
        padding-right: rem(27px);
        padding-bottom: rem(32px);
        padding-left: rem(113px);
    }

    @media #{$screen-desktop} {
        height: rem(160px);

        padding-top: rem(40px);
        padding-right: rem(30px);
        padding-bottom: rem(43px);
        padding-left: rem(130px);
    }

    &__image {
        &-bg {
            position: absolute;
            top: 0;
            left: 0;

            height: rem(80px);
            width: rem(94px);

            background: url('../assets/images/final/directions/bg-mob.png') 0 0 no-repeat;

            @media #{$screen-tablet} {
                height: rem(101px);
                width: rem(98px);

                background: url('../assets/images/final/directions/bg-tab.png') 0 0 no-repeat;
            }
            @media #{$screen-desktop} {
                height: rem(114px);
                width: rem(110px);

                background: url('../assets/images/final/directions/bg-desk.png') 0 0 no-repeat;
            }
        }
    }

    &__image {
        position: absolute;
        top: rem(6px);
        left: rem(7px);

        @media #{$screen-tablet} {
            top: rem(11px);
            left: rem(8px);
        }
        @media #{$screen-desktop} {
            top: rem(19px);
            left: rem(15px);
        }

        &-pic {
            height: rem(44px);
            width: rem(44px);

            @media #{$screen-tablet} {
            }
            @media #{$screen-desktop} {
                height: rem(54px);
                width: rem(54px);
            }
        }
    }

    &__title {
        @include hidden-text;
        -webkit-line-clamp: 1;

        height: rem(19px);

        color: $tiber;
        
        font-family: $font-family;
        font-size: rem($font-size-tiny);
        line-height: $line-height-percent-middle;
        font-weight: $font-weight-medium;

        margin-bottom: rem(6px);

        @media #{$screen-tablet} {
            font-size: rem($font-size-average);

            height: rem(25px);

            margin-bottom: rem(7px);
        }

        @media #{$screen-desktop} {
            line-height: 137%;

            margin-bottom: rem(10px);
        }
    }

    &__text {
        @include hidden-text;
        -webkit-line-clamp: 2;

        height: rem(34px);

        color: rgba($tiber, .8);

        font-size: rem(11px);
        font-weight: $font-weight-regular;
        line-height: $line-height-percent-big;

        @media #{$screen-tablet} {
            font-size: rem($font-size-miniature); 

            line-height: $line-height-percent-middle;
        }
        @media #{$screen-desktop} {

            height: rem(42px);
            
            font-size: rem($font-size-tiny); 

            line-height: $line-height-percent-big;
        }
    }
}
</style>
