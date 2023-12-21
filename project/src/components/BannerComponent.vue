<template>
    <article class="banner" :class="classes">
        <div class="banner__picture">
            <img class="banner__picture-pic" 
                :src="require(`@/assets/images/final/${pic}`)"
                :alt="pic"
            >
        </div>
        <div class="banner__content">
            <div class="banner__title">{{ title }}</div>
            <div class="banner__line">
                <SvgIcon
                :name="line"
                :classN="'banner__line-pic'"
            /> 
            </div>
            <div class="banner__text">{{ text }}</div>
            <div class="banner__go">
                <ButtonComponent
                    :classes="classesButton"
                    :text="textButton"
                />
            </div>
        </div>
    </article>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
import ButtonComponent from './ButtonComponent.vue';

export default { 
    name: 'BannerComponent',

    components: {
        SvgIcon,
        ButtonComponent,
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
        pic: {
            default: 'big-image.jpg',
            type: [String],
        },
        line: {
            default: 'bottom_line',
            type: [String],
        },
        textButton: {
            type: [String],
        },    
        classesButton: {
            type: [String],
        },    
    }
}
</script>

<style  lang="scss">
.banner {
    width: 100%;
    height: 100%;

    position: relative;

    background-color: $white;

    box-shadow: 0px rem(4px) rem(12px) rgba($black, .1);

    overflow: hidden;

    @media #{$screen-tablet} {
        height: rem(358px);

        padding-top: rem(30px);
        padding-left: rem(34px);
        padding-right: rem(400px);
        padding-bottom: rem(71px);

        box-shadow: none;
    }

    @media #{$screen-desktop} {
        height: rem(604px);

        padding-top: rem(90px);
        padding-left: rem(100px);
        padding-right: rem(676px);
        padding-bottom: rem(146px);
    }

    &__picture {
        position: relative;

        width: 100%;
        height: rem(278px);

        overflow: hidden;

        @media #{$screen-tablet} {
            position: absolute;

            top: 0;
            right: 0;
            left: auto;

            height: 100%;
            width: rem(400px);
        }

        @media #{$screen-desktop} {
            height: 100%;
            width: rem(676px);
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
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding-top: rem(18px);
        padding-left: rem(18px);
        padding-right: rem(20px);
        padding-bottom: rem(36px);

        @media #{$screen-tablet} {
            align-items: flex-start;

            padding: 0;
            padding-right: rem(74px);
        }

        @media #{$screen-desktop} {
            padding-right: rem(244px);
        }
    }

    &__title {
        @include hidden-text;
        -webkit-line-clamp: 2;

        max-height: rem(46px);

        color: $tiber;
        
        font-family: $font-family-default;
        font-size: rem($font-size-middle);
        text-align: center;
        line-height: 120%;
        font-weight: 600;
        letter-spacing: rem(0.4px);

        margin-bottom: rem(19px);

        @media #{$screen-tablet} {
            font-size: rem(28px);
            letter-spacing: 0;
            text-align: left;

            max-height: rem(68px);

            margin-bottom: rem(8px);
        }

        @media #{$screen-desktop} {
            font-size: rem(40px);
            
            max-height: rem(96px);

            margin-bottom: rem(18px);
        }
    }

    &__line {
        position: relative;

        height: rem(5px);
        width: rem(150px);
        
        margin-bottom: rem(10px);

        @media #{$screen-tablet} {
            height: rem(8px);
            width: rem(204px);
            
            margin-bottom: rem(15px);
        }

        @media #{$screen-desktop} {
            height: rem(13px);
            width: rem(339.17px);
            
            margin-bottom: rem(36px);
        }

        &-pic {
            position: absolute;
            top: 0;

            color: $curious-blue;

            width: 100%;
            height: 100%;
        }
    }

    &__text {
        @include hidden-text;
        -webkit-line-clamp: 5;

        max-height: rem(85px);

        color: rgba($tiber, .8);

        font-size: rem($font-size-miniature);
        font-weight: $font-weight-regular;
        line-height: 138%;
        text-align: center;

        margin-bottom: rem(10px);

        @media #{$screen-tablet} {
            -webkit-line-clamp: 6;

            max-height: rem(108px);

            font-size: rem(13px); 
            text-align: left;

            margin-bottom: rem(20px);
        }
        @media #{$screen-desktop} {
            -webkit-line-clamp: 5;

            max-height: rem(110px);
            
            font-size: rem($font-size-small); 

            margin-bottom: rem(50px);
        }
    }    
}
</style>
