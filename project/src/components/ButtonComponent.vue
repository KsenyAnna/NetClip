<template>   
    <button type="button" 
        :class="className"
    >
        <slot name="iconLeft"></slot>

        <span class="button__text">{{ text }}</span>  

        <slot name="iconRight"></slot>
       
    </button>  
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default { 
    name: 'ButtonComponent',

    components: {
        SvgIcon,
    },

    props: {
        classes: {
            type: String,
        },
        text: {
            type: String,
        },        
    },

    computed: {
        className() {
        return 'button ' + this.classes;
        }
    }
}
</script>

<style  lang="scss">
.button {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 0;

    cursor: pointer;
    transition: color $transition-duration $transition-function,
                border-color $transition-duration $transition-function,
                background-color $transition-duration $transition-function;
    text-decoration: none;   
    
    color: $tiber;

    border: 0;
    border-radius: rem(4px);

    &:focus {
        border-color: $slate-gray;
        outline: none;
    }

    &--medium {
        height: rem(29px);

        padding: 0 rem(32.5px);

        @media #{$screen-tablet} {
            height: rem(30px);
            
            padding: 0 rem(24px);
        }

        @media #{$screen-desktop} {
            height: rem(45px);

            padding: 0 rem(36px);
        }
    }    

    &--medium & {
        &__text {            
            color: $white;

            font-family: $font-family-default;
            font-size: rem(11px);
            font-weight: 600;
            letter-spacing: rem(0.22px);

            @media #{$screen-tablet}  {
                letter-spacing: rem(0.24px); 
            }

            @media #{$screen-desktop} {
                font-size: rem($font-size-average);
                letter-spacing: rem(0.36px); 
            }
        }
    }

    &--middle {
        height: rem(29px);

        padding: 0 rem(22.75px);

        @media #{$screen-tablet} {
            height: rem(32px);
            
            padding: 0 rem(26.46px);
        }

        @media #{$screen-desktop} {
            height: rem(45px);

            padding: 0 rem(36px);
        }        
    }

    &--middle & {
        &__text {
            color: $white;

            font-family: $font-family-default;
            font-size: rem(11px);
            font-weight: 600;
            letter-spacing: rem(0.22px);   

            @media #{$screen-tablet} {
                font-size: rem($font-size-tiny);
                letter-spacing: rem(0.28px); 
            }

            @media #{$screen-desktop} {
                font-size: rem($font-size-average);
                letter-spacing: rem(0.36px); 
            }
        }
    }

    &--castom {
        padding: 0 rem(24px);

        @media #{$screen-desktop} {
            padding: 0 rem(36px);
        }
    }

    &--with-frame {
        background-color: $white;
        
        border: rem(2px) solid $curious-blue;

        padding: 0 rem(22px);

        @media #{$screen-desktop} {
            padding: 0 rem(33px);
        }
    }

    &--with-frame & {
        &__text {
            color: $curious-blue;
        }
    }

    &--simple {        
        padding: 0;
    }

    &--covered {        
        border: 0;
    }

    &--covered#{&}--blue {
        background-color: $curious-blue;

        &:hover {
            background-color: $wild-blue-yonder;
        }

        &:focus {
            background-color: rgba($wild-blue-yonder, .5);
            border: none;
        }
    }

    &--simple#{&}--iconed {
        background-color: transparent;
        height: rem(24px);

        @media #{$screen-tablet} {
            height: rem(30px);
        }

        @media #{$screen-desktop} {
            height: rem(36px);
        }
    }
    
    &--simple#{&}--iconed & {
        &__text {
            color: rgba($tiber, .8);

            font-family: $font-family-default;
            font-size: rem($font-size-miniature);
            font-weight: 600;
            line-height: 138%;
            letter-spacing: rem(0.24px);   

            @media #{$screen-tablet} {
                font-size: rem($font-size-tiny);
                letter-spacing: rem(0.28px); 
            }

            @media #{$screen-desktop} {
                font-size: rem($font-size-average);
                letter-spacing: rem(0.36px); 
            }
        }
    }

    &--iconed-left & {
        &__icon-pic {
            transform: rotate(180deg);
            margin-right: rem(12px);

            @media #{$screen-tablet} {
                margin-right: rem(10px);
            }

            @media #{$screen-desktop} {
                margin-right: rem(7px);
            }
        }       
    }

    &--iconed-right & {
        &__icon-pic {
            margin-left: rem(12px);

            @media #{$screen-tablet} {
                margin-left: rem(10px);
            }

            @media #{$screen-desktop} {
                margin-left: rem(7px);
            }
        }       
    }

    &__icon {
        height: 100%;

        &-pic {
            height: rem(24px);
            width: rem(24px);

            @media #{$screen-tablet} {
                height: rem(30px);
                width: rem(30px);
            }

            @media #{$screen-desktop} {
                height: rem(36px);
                width: rem(36px);
            }
        }
    }    
}
</style>
