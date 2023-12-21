<template>
    <article class="cardReview" :class="classes">     
        <header class="cardReview__header">
            <div class="cardReview__user-info">
                <div class="cardReview__foto">
                    <img 
                        :src="require(`@/assets/images/final/reviews/${photo}`)" 
                        class="cardReview__foto-pic" 
                        :alt="photo"
                    >                    
                </div>
                <div class="cardReview__title">
                    <span class="cardReview__title-name">{{ firstName }}</span>
                </div>
            </div>
            <div class="cardReview__date">
                <span class="cardReview__date-text">{{ date }}</span>
            </div>
        </header>
        <div class="cardReview__content">
            <p class="cardReview__text">{{ text }}</p>
        </div>
        <footer class="cardReview__footer">
            <img 
                :src="require(`@/assets/images/final/reviews/${logo}`)" 
                class="cardReview__footer-pic" 
                :alt="logo"
            > 
        </footer>
    </article>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default { 
    name: 'CardReviewComponent',

    components: {
        SvgIcon,
    },

    props: {
        classes: {
            default: "",
            type: String,
        },        
        photo: {
            default: "",
            type: [String],
        },
        firstName: {
            default: "Имя",
            type: [String],
        },
        date: {
            default: "Дата",
            type: [String, Number],
        },
        text: {
            default: "Стандартный текст",
            type: [String],
        },
        logo: {
            default: "",
            type: [String],
        },
    },
}
</script>

<style  lang="scss">
.cardReview {
    position: relative;

    width: 100%;
    height: rem(250px);
    
    padding: rem(20px);

    background-color: $white;

    box-shadow: 0 rem(4px) rem(12px) 0 rgba($black, .1);

    border-radius: rem(24px);

    cursor: pointer;
        
    @media #{$screen-desktop} {        
        height: rem(320px);    
        
        padding: rem(30px);
        
        &:hover {            

            transition: $transition-duration $transition-function;

            box-shadow: rem(6px) rem(20px) rem(32px) 0 rgba($black, .12);    
            
            margin-top: rem(-10px);
        }

        &:hover & {
            &__text {                
                font-size: rem($font-size-small);
                font-weight: $font-weight-regular;            
            }
        }
    }

    &__link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;        
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: rem(13px);

        @media #{$screen-tablet} {            
            margin-bottom: rem(15px);
        }

        @media #{$screen-desktop} {
            margin-bottom: rem(20px);
        }
    }

    &__user-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__foto {
        margin-right: rem(10px);
        
        @media #{$screen-tablet} {
            margin-right: rem(15px);
        }

        @media #{$screen-desktop} {
            margin-right: rem(20px);
        }

        &-pic {
            width: rem(36px);
            height: rem(36px);
            
            border-radius: 50%;

            @media #{$screen-tablet} {
                width: rem(48px);
                height: rem(48px);
            }

            @media #{$screen-desktop} {
                width: rem(64px);
                height: rem(64px);
            }    
        }
    }

    &__title {
        max-height: rem(40px);
        overflow: hidden;

        @media #{$screen-tablet} {            
            max-height: rem(48px);
        }

        @media #{$screen-desktop} {
            max-height: rem(64px);
        }

        &-name {
            color: $tiber;
            
            font-family: $font-family;
            font-size: rem($font-size-tiny);
            font-weight: $font-weight-medium;
            line-height: 140%;    

            @media #{$screen-tablet} {
                font-size: rem($font-size-small);
            }

            @media #{$screen-desktop} {
                font-size: rem($font-size-medium);
            }    
        }
    }
    
    &__date {
        &-text {
            font-family: $font-family;
            font-size: rem(10px);
            font-weight: $font-weight-medium;
            line-height: $line-height-percent-big;

            color: rgba($daintree, .35);

            @media #{$screen-tablet} {
                font-size: rem(11px);
            }
            @media #{$screen-desktop} {
                font-size: rem($font-size-tiny);
            }    
        }
    }

    &__content {
        margin-bottom: rem(20px);

        height: rem(123px);

        @media #{$screen-tablet} {
            height: rem(112px);
        }
        @media #{$screen-desktop} {
            height: rem(132px);
        }    
    }

    &__text {
        @include hidden-text;
        -webkit-line-clamp: 8;

        font-family: $font-family;
        font-size: rem(11px);
        font-weight: $font-weight-medium;
        line-height: 140%;

        color: rgba($salt-box, .8);

        @media #{$screen-tablet} {
            -webkit-line-clamp: 7;

            font-size: rem($font-size-miniature);
            line-height: $line-height-percent-middle;
            font-weight: $font-weight-regular;

            color: $salt-box;
        }

        @media #{$screen-desktop} {
            -webkit-line-clamp: 6;

            font-size: rem($font-size-tiny);
            line-height: $line-height-percent-big;
            padding-left: rem(10px);                       
        }
    }    

    &__footer {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        max-height: rem(20px);
        overflow: hidden;

        @media #{$screen-tablet} {                
            max-height: rem(20px);
        }

        @media #{$screen-desktop} {
            max-height: rem(24px);
        } 
        
        &-pic {
            width: fit-content;
            height: rem(16px);

            object-fit: contain;

            @media #{$screen-tablet} {                
                height: rem(20px);
            }
            
            @media #{$screen-desktop} {
                height: rem(24px);
            } 
        }        
    }
}
</style>
