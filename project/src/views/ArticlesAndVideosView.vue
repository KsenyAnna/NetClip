<template>
    <div class="page__content content articles_and_videos_page">
        <div class="container">
            <div class="articles_and_videos_page__nav">
                <BreadcrumbsComponent
                    :list="list"
                />
            </div>             
            <h1 class="articles_and_videos_page__title">{{ title }}</h1>
            <div class="articles_and_videos_page__tabs">
                <TabsComponent
                    :tabsNames="tabsNames"
                    :link="link"
                > 
                </TabsComponent>
            </div>

        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SvgIcon from '@/components/SvgIcon.vue';
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue';
import TabsComponent from '@/components/TabsComponent.vue';

export default {
    name: 'ArticlesAndVideosView',
    components: {
        SvgIcon,
        BreadcrumbsComponent,
        TabsComponent,
    },

    data() {
        return {                 
            title: 'Статьи и видео',
            link: '/reviews',

            list: [
                {
                    id: 0,
                    name: "Главная",
                },
                {
                    id: 1,
                    name: "Статьи и видео",
                },
            ],
        }
    },

    computed: {        
        tabsNames() {
            return this.$store.getters['getTabs'];
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

    &__tabs {
        margin-bottom: rem(50px);
    }
}
</style>