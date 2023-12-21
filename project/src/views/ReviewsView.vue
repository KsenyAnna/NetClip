<template>
    <div class="page__content content articles_and_videos_page">
        <div class="container">
            <div class="articles_and_videos_page__nav">
                <BreadcrumbsComponent
                    :list="list"
                />
            </div>             
            <h1 class="articles_and_videos_page__title">{{ title }}</h1>
            <ul class="articles_and_videos_page__reviews">        
                <li class="articles_and_videos_page__reviews-item"                                                 
                    v-for="card in reviews"
                    :key="card.id"
                > 
                    <CardReviewComponent                        
                        :photo="card.photo"
                        :firstName="card.firstName"
                        :date="card.date"
                        :text="card.text"
                        :logo="card.logo"
                        
                    />                          
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SvgIcon from '@/components/SvgIcon.vue';
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue';
import CardReviewComponent from '@/components/CardReviewComponent.vue';

export default {
    name: 'ReviewsView',
    components: {
        SvgIcon,
        BreadcrumbsComponent,
        CardReviewComponent,
    },

    data() {
        return {                 
            title: 'Отзывы',

            list: [
                {
                    id: 0,
                    name: "Главная",
                },
                {
                    id: 1,
                    name: "Отзывы",
                },
            ],
        }
    },

    computed: {        
        reviews() {
            return this.$store.getters['getReviews'];
        },
    },    
}
</script>

<style lang="scss"> 
.articles_and_videos_page {
    &__nav {
        margin-bottom: rem(15px);
    }

    &__title {
        color: $tiber;
        
        font-family: $font-family;
        font-size: rem($font-size-average);
        text-align: center;
        line-height: $line-height-percent-huge;
        font-weight: $font-weight-medium;

        margin-bottom: rem(20px);

        @media #{$screen-tablet} {
            font-size: rem(22px);
            text-align: left;

            margin-bottom: rem(30px);
        }

        @media #{$screen-desktop} {            
            font-size: rem($font-size-huge);
            
            margin-bottom: rem(100px);
        }
    }

    &__reviews {
        width: 100%;
           
        display: flex;
        align-items: center;
        
        flex-wrap: wrap; 
        row-gap: rem(20px);

        margin-bottom: rem(50px);

        @media #{$screen-tablet} {
            width: 100%;

            justify-content: space-between;
            column-gap: rem(16px);

            order: 3;
        }

        @media #{$screen-desktop} {
            column-gap: rem(40px);
        }

        &-item {
            width: 100%;

            @media #{$screen-tablet} {
                width: calc((100% - 16px) / 2);            
            }

            @media #{$screen-desktop} {
                width: calc((100% - 40px) / 2);      
            }
        } 
    }
}
</style>