<template>
    <article class="card" :class="big ? 'card--big' : ''">     
        <router-link to="/detail" class="card__link"></router-link> 
        <div class="card__favorite favorite" data-tippy-content="Добавить в избранное">
            <SvgIcon
                :name="'star'"
                :classN="'favorite__star card__texts'"
            />
            <SvgIcon
                :name="'star-fill'"
                :classN="'favorite__star favorite__star-fill icon card__texts'"
            />                                       
        </div>
        <div class="card__image">
            <div class="card__box">
                <img 
                    :src="require(`@/assets/images/${pic}`)" 
                    class="card__image-pic" 
                    :alt="pic"
                >
            </div>
        </div>
        <div class="card__content">
            <div class="card__text text-block">
                <div class="card__texts card__texts-title text-block__text text-block__text--title title--block">{{ title }}</div> 
                <div class="card__texts card__texts-small text-block__text text-block__text--small text--gray">{{ text }}</div>  
            </div>    
            <div class="card__info info">
                <span class="info__text text--bottom-block card__texts">{{ date }}</span>
                <div class="info__reactions">
                    <div class="info__reaction info__reaction--like ">
                        <SvgIcon
                            :name="'like'"
                            :classN="'info__reaction-pic info__reaction--like-pic card__texts'"
                        />
                        <span class="info__text text--bottom-block card__texts">{{ numberOfLikes }}</span>
                    </div>
                    <div class="info__reaction info__reaction--comment">
                        <SvgIcon
                            :name="'comments'"
                            :classN="'info__reaction-pic info__reaction--comment-pic card__texts'"
                        />
                        <span class="info__text text--bottom-block card__texts">{{ numberOfComments }}</span>
                    </div>
                    <div class="info__reaction info__reaction--watch">
                        <SvgIcon
                            :name="'eye'"
                            :classN="'info__reaction-pic info__reaction--watch-pic card__texts'"
                        />
                        <span class="info__text text--bottom-block card__texts">{{ numberOfReaction }}</span>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default { 
    name: 'CardComponent',

    components: {
        SvgIcon
    },

    props: {
        pic: {
            default: "big-image.jpg",
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
        date: {
            default: "04.02.2020",
            type: [String, Number],
        },
        big: {
            default: false,
            type: Boolean,
        },
        numberOfLikes: {
            default: 123,
            type: Number,
        },
        numberOfComments: {
            default: 76,
            type: Number,
        },
        numberOfReaction: {
            default: 34,
            type: Number,
        },
    },
}
</script>

<style  lang="scss">
.card {
    position: relative;

    height: 100%;

    background-color: $white;

    overflow: hidden;

    border-radius: rem(8px);

    cursor: pointer;

    @media #{$screen-tablet} {
        height: rem(352px);
    }

    &:hover {
        transition: $transition-duration $transition-function;
        box-shadow: 0px rem(12px) rem(40px) rgba($black, .03),
                    0px rem(3px) rem(10px) rgba(#a4a4a4, .03);
    }

    &:hover & {  
        &__texts {
            color: $curious-blue;
        }
    }

    &--big:hover & {
        &__texts {
            color: $white;
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

    &__activity {
        display: none;
    }

    &__image {
        position: relative;

        width: 100%;
        height: rem(159px);

        overflow: hidden;

        &::before {
            $card-width: 335px;
            $card-height: 159px;

            display: block;

            padding-top: percentage(rem($card-height) / rem($card-width));
            
            content: "";

            @media #{$screen-tablet} {
                $card-width: 354px;
                $card-height: 159px;

                padding-top: percentage(rem($card-height) / rem($card-width));
            }

            @media #{$screen-desktop} {
                $card-width: 392px;
                $card-height: 159px;

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

    &__box {
        @include block-images-pos;
        background: url('~@/assets/images/big-image.jpg') 0 0 / cover repeat;
    }

    &__content {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }
    
    &__text {
        padding: rem(20px) rem(20px) rem(64px) rem(20px);

        @media #{$screen-tablet} {
            height: rem(158px);

            padding: rem(10px) rem(105px) 0 rem(20px);
        }
    }   
    
    &__info {
        position: absolute;

        bottom: 0;
        left: 0;

        height: rem(44px);

        padding-left: rem(20px);
        padding-right: rem(20px);

        @media #{$screen-tablet} {
            height: rem(35px);
        }
    }

    &--big {

        position: relative;

        &:hover {
            &::after {
                background-color: rgba($bunker, .9);
            }
        }

        &::after {
            position: absolute;

            display: block;

            content: "";
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            background-color: rgba($bunker, .7);

            z-index: $z-index-aside-substrate;
        }
    }

    &--big & {
        &__favorite {
            background-color: transparent;
        }

        &__star {
            color: $white;
        }

        &__image {
            height: 100%;
            margin-bottom: rem(-193px);       
        }

        &__texts,
        &__info {
            color: $white;
            
            z-index: $z-index-aside-block;
        }

        &__text {
            padding-right: rem(182px);
    
            @media #{$screen-tablet} { 
                padding-right: rem(270px);
            }
        }  
    }

    &--wide {
        @media #{$screen-tablet} {
            height: rem(219px);

            display: flex;

            flex-direction: row;
            justify-content: space-between;
            flex-wrap: nowrap;
        }

        &-right {
            @media #{$screen-tablet} {
                flex-direction: row-reverse;
            }
        }
    }

    &--wide & {

        &__favorite {
            @media #{$screen-tablet} {

                height: rem(24px);
                width: rem(24px);
                top: rem(15px);
                right: rem(20px);
            }
        }
        
        &__content  {
            @media #{$screen-tablet} {

                padding: rem(15px) rem(20px);

                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
            }
        }
       
        &__activity {
            @media #{$screen-tablet} {

                display: block;
                height: rem(24px);

                margin-bottom: rem(10px) ;
            }
        }

        &__text {
            @media #{$screen-tablet} {
                padding: 0;
                margin-bottom: rem(8px); 
            }

            @media #{$screen-desktop} {
                padding-right: rem(208px);
            }
        }

        &__info {
            @media #{$screen-tablet} {

                position: relative;
                height: rem(14px);

                padding: 0;
            }
        }

        &__image {
            @media #{$screen-tablet} {
                overflow: visible;

                height: 100%;
                width: rem(229px);
                
                &::before {
                    display: none;
                }
            }
            @media #{$screen-desktop} {
                width: rem(392px);
            }
        }

        &__box {
            @media #{$screen-tablet} {
                position: relative;
                height: 100%;
                width: rem(229px);
            }

            @media #{$screen-desktop} {
                width: rem(392px);
            }
        }
    }    

    &--wide-right & {
        &__favorite {
            @media #{$screen-tablet} {
                right: rem(249px);
            }

            @media #{$screen-desktop} {
                right: rem(412px);
            }

        }
    } 
}
</style>
