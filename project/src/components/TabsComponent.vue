<template>   
    <div :class="className">
        <ul class="tabs__buttons">
            <span class="tabs__button" 
                :class="{ activeTab: selectedTab === tab}"
                v-for="(tab, index) in tabsNames" 
                @click="selectedTab = tab"
            >{{ tab }}</span>
        </ul>

        <ul v-show="selectedTab === 'Статьи'"
            class="tabs__list"
        >                             
            <li class="tabs__item"                                                 
                v-for="card in articles"
                :key="card.id"
            > 
                <CardArticleComponent                        
                    :pic="card.pic"
                    :title="card.title"
                    :date="card.date"                        
                    :link="card.link"                        
                />                          
            </li>
        </ul>

        <ul class="tabs__list"
            v-show="selectedTab === 'Видео'"
        >                             
            <li class="tabs__item"                                                 
                v-for="card in videos"
                :key="card.id"
            > 
                <CardArticleComponent                        
                    :pic="card.pic"
                    :title="card.title"
                    :date="card.date"                        
                    :link="card.link"                        
                />                          
            </li>
        </ul>
    </div>    
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import CardArticleComponent from './CardArticleComponent.vue';

export default { 
    name: 'TabsComponent',

    components: {
        ButtonComponent,
        CardArticleComponent,
    },

    props: {
        classes: {
            default: '',
            type: String,
        },    
        tabsNames: {
        },            
        selectedTab: {
            default: 'Статьи',
        },            
        link: {
            type: String,
        },            
    },

    computed: {
        className() {
            return 'tabs ' + this.classes;
        },
        articles() {
            return this.$store.getters['getArticles'];
        }, 
        videos() {
            return this.$store.getters['getVideos'];
        }, 
    }, 
}
</script>

<style  lang="scss">
.tabs {
    width: 100%;
    height: 100%;
    
    &__buttons {
        
        display: flex;
        justify-content: center;
        column-gap: rem(20px);

        margin-bottom: rem(20px);

        @media #{$screen-tablet} {
            justify-content: flex-start;
            column-gap: rem(12px);
        }
        @media #{$screen-desktop} {                
            column-gap: rem(13px);    
            
            margin-bottom: rem(30px);
        }
    }

    &__button {
        height: rem(37px);
        display: flex;
        justify-content: center;
        align-items: center;  

        cursor: pointer;
        transition: color $transition-duration $transition-function,
                    background-color $transition-duration $transition-function;
        text-decoration: none;  

        border: 0;
        border-radius: rem(4px);

        font-family: $font-family-default;
        font-size: rem($font-size-miniature);
        font-weight: 600;
        line-height: 138%;
        letter-spacing: rem(0.22px);  

        padding: 0 rem(20px);

        background-color: $athens-gray;

        color: $curious-blue;  

        @media #{$screen-tablet} {
            height: rem(42px);

            font-family: $font-family;
            font-size: rem($font-size-small);
            font-weight: 500;
            letter-spacing: 0;
        }

        @media #{$screen-desktop} {
            height: rem(43px);

            font-size: rem($font-size-average);
            line-height: 128%;
            letter-spacing: rem(0.36px); 
            
            padding: 0 rem(22.5px);
        }
    }    

    .activeTab {   
        color: $white;
        background-color: $curious-blue;
    }

    &__list {
        width: 100%;
           
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap; 
        row-gap: rem(13px);
        column-gap: rem(13px);

        margin-bottom: rem(17px);

        @media #{$screen-tablet} {
            width: 100%;
            
            column-gap: rem(20px);                
            
            margin-bottom: 0;
        }

        @media #{$screen-desktop} {
            column-gap: rem(35px);
        }
    }

    &__item {
        width: calc((100% - 13px) / 2);

        @media #{$screen-tablet} {
            width: calc((100% - (3 * 20px)) / 4);            
        }

        @media #{$screen-desktop} {
            width: calc((100% - (3 * 35px)) / 4);      
        }
    }
}
</style>
