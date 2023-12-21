<template>
    <article :class="className">
        <div class="notification__picture">
            <img class="notification__picture-pic" 
                :src="require(`@/assets/images/final/${pic}`)"
                :alt="pic"
            >
        </div>
        <div class="notification__content">
            <div class="notification__title">{{ title }}</div>
            <div class="notification__line">
                <SvgIcon
                :name="line"
                :classN="'notification__line-pic'"
            />
            </div>
            <div class="notification__subtitle">{{ subtitle }}</div>
            <div class="notification__text">{{ text }}</div>
            <div class="notification__text notification__text2">{{ text2 }}</div>
            <div class="notification__button">
                <slot name="buttons"></slot>
            </div>
        </div>
    </article>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
import ButtonComponent from './ButtonComponent.vue';

export default { 
    name: 'NotificationComponent',

    components: {
        SvgIcon,
        ButtonComponent,
    },

    props: {
        modificator: {
            type: String,
            default: "",
        },
        title: {
            default: 'Стандартный заголовок',
            type: [String],
        },
        subtitle: {
            default: 'Стандартный заголовок',
            type: [String],
        },
        text: {
            default: 'Стандартный текст',
            type: [String],
        },        
        text2: {
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
        button: {
            default: 'Кнопка',
            type: [String],
        },    
        button2: {
            default: 'Кнопка',
            type: [String],
        },        
    },

    computed: {
        className() {
            return 'notification notification--' + this.modificator;
        }
    }

}
</script>

<style  lang="scss">
.notification {
    width: 100%;
    height: 100%;

    position: relative;

    background-color: $white;

    box-shadow: 0px rem(4px) rem(12px) rgba($black, .1);

    border-radius: rem(24px);

    overflow: hidden;

    &--medium {
        @media #{$screen-tablet} {
            min-height: rem(380px);

            padding-top: rem(30px);
            padding-left: rem(280px);
            padding-right: rem(20.8px);
            padding-bottom: rem(31px);
        }
        @media #{$screen-desktop} {
            min-height: rem(551px);

            padding-top: rem(60px);
            padding-left: rem(480px);
            padding-right: rem(80px);
            padding-bottom: rem(73px);
        }
    }

    &--small {
        @media #{$screen-tablet} {
            min-height: rem(277px);
        
            padding-top: rem(30px);
            padding-left: rem(30px);
            padding-right: rem(280px);
            padding-bottom: rem(31px);
        }
        @media #{$screen-desktop} {
            min-height: rem(445px);

            padding-top: rem(60px);
            padding-left: rem(60px);
            padding-right: rem(480px);
            padding-bottom: rem(73px);
        }
    }
    
    &--medium & {
        &__picture {            

            @media #{$screen-tablet} {                
                left: 0;
                right: auto;

                height: 100%;
                width: rem(280px);                
            }

            @media #{$screen-desktop} {
                height: 100%;
                width: rem(480px);
            }

            &-pic {
                width: rem(156.27px);
                height: rem(153px);
                margin: auto;

                @media #{$screen-tablet} { 
                    height: rem(233px);
                    width: rem(242.32px);                
                }

                @media #{$screen-desktop} {
                    height: rem(402px);
                    width: rem(400px);
                }
            }
        }

        &__content {
            padding-top: rem(16px);

            @media #{$screen-tablet} {
                align-items: flex-start;

                padding: 0;
                padding-left: rem(31.2px);
            }

            @media #{$screen-desktop} {
                padding-left: rem(80px);
            }
        }

        &__subtitle {
            display: none;

            @media #{$screen-tablet} {
                display: block;
            }
        }

        &__line {
            position: relative;

            height: rem(4px);
            width: rem(102px);

            margin-bottom: rem(9px);

            @media #{$screen-tablet} {
                height: rem(6px);
                width: rem(148.72px);

                margin-bottom: rem(20px);  
            }

            @media #{$screen-desktop} {
                height: rem(11px);
                width: rem(262px);   
                
                margin-bottom: rem(30px);   
            }

            &-pic {
                position: absolute;
                top: 0;

                color: $cerise-red;

                width: 100%;
                height: 100%;

                @media #{$screen-tablet} {
                    left: 0;
                }
            }
        }    
        
        &__text {
            margin-bottom: rem(7px);

            @media #{$screen-tablet} {
                margin-bottom: rem(10px);
            }
        }

        &__text2 {
            margin-bottom: rem(15px);
        
            @media #{$screen-tablet} {
                margin-bottom: rem(20px);
            }

            @media #{$screen-desktop} { 
                margin-bottom: rem(40px);
            }            
        }
    }

    &--small & {
        &__picture {
            @media #{$screen-tablet} {
                right: 0;
                left: auto;

                height: 100%;
                width: rem(280px);
            }

            @media #{$screen-desktop} {
                height: 100%;
                width: rem(480px);
            }

            &-pic {
                width: rem(153.34px);
                height: rem(123.93px);
                margin: auto;

                @media #{$screen-tablet} { 
                    height: rem(192px);
                    width: rem(215.04px);                
                }

                @media #{$screen-desktop} {
                    height: rem(348px);
                    width: rem(348px);
                }
            }
        }
        
        &__content {
            padding-top: rem(12px);

            @media #{$screen-tablet} {
                align-items: flex-start;

                padding: 0;
                padding-right: rem(40px);
            }

            @media #{$screen-desktop} {
                padding-right: rem(100px);
            }
        }

        &__line {
            position: relative;

            height: rem(4px);
            width: rem(102px);

            margin-bottom: rem(13px); 

            @media #{$screen-tablet} {
                height: rem(6px);
                width: rem(143px);   

                margin-bottom: rem(15px); 
            }

            @media #{$screen-desktop} {
                height: rem(11px);
                width: rem(262px);   
                
                margin-bottom: rem(30px);   
            }

            &-pic {
                position: absolute;
                top: 0;

                color: $curious-blue;

                width: 100%;
                height: 100%;

                @media #{$screen-tablet} {
                    left: 0;
                }
            }
        }

        &__subtitle {
            @media #{$screen-tablet} {
                margin-bottom: rem(10px);
            }
            
            @media #{$screen-desktop} {                
                margin-bottom: rem(21px);
            }
        }

        &__text {
            margin-bottom: rem(20px);
            
            @media #{$screen-desktop} { 

                margin-bottom: rem(40px);
            }
        }

        &__text2 {
            display: none;
        }
    }
    
    &__picture {
        position: relative;

        width: 100%;
        height: rem(197px);

        overflow: hidden;

        background-color: $link-water;

        @media #{$screen-tablet} {
            position: absolute;

            top: 0;
        }

        &-pic {
            @include block-images-pos;

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
        
        padding-left: rem(9.77px);
        padding-right: rem(9.77px);
        padding-bottom: rem(22px);  
    }

    &__title {
        color: $tiber;

        font-family: $font-family-default;
        font-size: rem($font-size-average);
        text-align: center;
        line-height: 120%;
        font-weight: 600;

        margin-bottom: rem(8px);

        @media #{$screen-tablet} {
            font-size: rem(22px);
            line-height: 138%;
            text-align: start;

            margin-bottom: rem(10px);
        }

        @media #{$screen-desktop} {
            font-size: rem($font-size-huge);
        }
    }
    
    &__subtitle {        
        color: $tiber;
        
        font-size: rem($font-size-tiny);
        text-align: center;
        line-height: 138%;
        font-weight: 500;

        margin-bottom: rem(9px);

        @media #{$screen-tablet} {
            font-size: rem($font-size-average);
            text-align: start;

            margin-bottom: rem(15px);
        }

        @media #{$screen-desktop} {
            font-size: rem($font-size-medium);
            
            margin-bottom: rem(21px);
        }
    }

    &__text {
        color: rgba($tiber, .8);

        font-size: rem(11px);
        font-weight: $font-weight-regular;
        line-height: 138%;

        @media #{$screen-tablet} {
            font-size: rem($font-size-miniature); 
        }
        @media #{$screen-desktop} {            
            font-size: rem($font-size-small); 
            line-height: 150%;
        }
    }

    &__button {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        column-gap: rem(27.27px);

        @media #{$screen-tablet} {
            column-gap: rem(30px);
        }
    }
}
</style>
