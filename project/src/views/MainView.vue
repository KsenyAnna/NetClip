<template>
    <main class="page__content content final_main_page">
        <section class="final_main_page__banner">
            <BannerComponent
                :title="banner.title"
                :text="banner.text"
                :pic="banner.pic"
                :line="banner.line"
                :classesButton="banner.classesButton"
                :textButton="banner.textButton"
            />  
        </section>
        <div class="final_main_page__notifications">
             <div class="container">
                <section class="final_main_page__notification">
                    <NotificationComponent
                        :modificator="notificationMedium.modificator"
                        :title="notificationMedium.title"
                        :subtitle="notificationMedium.subtitle"
                        :text="notificationMedium.text"
                        :text2="notificationMedium.text2"
                        :pic="notificationMedium.pic"
                        :line="notificationMedium.line"
                    >
                        <template v-slot:buttons>
                            <ButtonComponent
                                :classes="notificationMedium.classesButton"
                                :text="notificationMedium.textButton"
                            />
                        </template>  
                    </NotificationComponent>
                </section>
                <section class="final_main_page__notification">
                    <NotificationComponent
                        :modificator="notificationSmall.modificator"
                        :title="notificationSmall.title"
                        :subtitle="notificationSmall.subtitle"
                        :text="notificationSmall.text"
                        :pic="notificationSmall.pic"
                        :line="notificationSmall.line"
                    >
                        <template v-slot:buttons>
                            <ButtonComponent
                                :classes="notificationSmall.classesButton"
                                :text="notificationSmall.textButton"
                            />
                            <ButtonComponent
                                :classes="notificationSmall.classesButton2"
                                :text="notificationSmall.textButton2"
                            />
                        </template>  
                    </NotificationComponent>
                </section>                
            </div>
        </div>       
        <section class="final_main_page__directions">
            <div class="final_main_page__title">
                <TitleComponent
                    :title="title[0].title"
                    :line="title[0].line"
                    :classes="title[0].classes"
                />
            </div>
            <ul class="final_main_page__directions-list">        
                <li class="final_main_page__directions-item"                                                 
                    v-for="card in cardDirection"
                    :key="card.id"
                > 
                    <CardDirectionComponent
                        :pic="card.pic"
                        :title="card.title"
                        :text="card.text"
                        
                    />                          
                </li>
            </ul>
        </section>
        <section class="final_main_page__reviews ">
            <div class="final_main_page__title final_main_page__reviews-title">
                <TitleComponent
                    :title="title[1].title"
                    :line="title[1].line"
                />
            </div>
            <ul class="final_main_page__reviews-list">        
                <li class="final_main_page__reviews-item"                                                 
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
            <router-link to="/reviews" class="final_main_page__link final_main_page__button final_main_page__reviews-button">
                <ButtonComponent
                    :classes="'button--simple button--iconed button--iconed-right'"
                    :text="'Посмотреть все'"
                >
                    <template v-slot:iconRight>
                        <SvgIcon
                            :name="'long_arrow'"
                            :classN="'button__icon-pic'"
                        />                     
                    </template>
                </ButtonComponent>
            </router-link>
        </section>
        <div class="final_main_page__articles">
            <div class="container">
                <section class="final_main_page__article">
                    <div class="final_main_page__title final_main_page__article-title">
                        <TitleComponent
                            :title="title[2].title"
                            :line="title[2].line"
                        />
                    </div>

                    <div class="final_main_page__tabs final_main_page__article-tabs">
                        <TabsComponent
                            :tabsNames="tabsNames"
                            :link="link"
                        > 
                        </TabsComponent>
                    </div>
                    
                    
                    <router-link to="/articles" class="final_main_page__link final_main_page__button final_main_page__article-button">
                        <ButtonComponent
                            :classes="'button--simple button--iconed button--iconed-right'"
                            :text="'Посмотреть все'"
                        >
                            <template v-slot:iconRight>
                                <SvgIcon
                                    :name="'long_arrow'"
                                    :classN="'button__icon-pic'"
                                />                     
                            </template>
                        </ButtonComponent>
                    </router-link>
                </section>
            </div>
        </div>        
    </main>   
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SvgIcon from '@/components/SvgIcon.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import NotificationComponent from '@/components/NotificationComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import CardDirectionComponent from '@/components/CardDirectionComponent.vue';
import TitleComponent from '@/components/TitleComponent.vue';
import CardReviewComponent from '@/components/CardReviewComponent.vue';
import TabsComponent from '@/components/TabsComponent.vue';

export default {
    name: 'FinalMainView',
    components: {
        SvgIcon,
        BannerComponent,
        NotificationComponent,
        ButtonComponent,
        CardDirectionComponent,
        TitleComponent,
        CardReviewComponent,
        TabsComponent,
    },

    data() {
        return {         
            link: '/articles',        
            banner: {
                title: 'Ведущий web-интегратор',
                text: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову',
                pic: 'banner.jpg',                
                line: 'bottom_line',
                classesButton: 'button--covered button--blue button--medium',
                textButton: 'Перейти',
            },
            notificationMedium: {
                modificator: 'medium',
                title: 'Читайте нас в Telegram',
                subtitle: 'Важное уведомление',
                text: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову.',
                text2: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками.',
                pic: 'notificationMedium.jpg',
                line: 'bottom_line',
                classesButton: 'button--covered button--blue button--middle',
                textButton: 'Подробнее',
            },
            notificationSmall: {
                modificator: 'small',
                title: 'Digital Workplace',
                subtitle: 'Важное уведомление',
                text: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову.',
                pic: 'notificationSmall.jpg',
                line: 'bottom_line',
                classesButton: 'button--covered button--blue button--middle button--castom',
                textButton: 'Начать',
                classesButton2: 'button--middle button--castom button--with-frame',
                textButton2: 'Инструкция',
            },            
                       
        }
    },

    computed: {
        cardDirection() {
            return this.$store.getters['getcardDirection'];
        }, 
        title() {
            return this.$store.getters['getTitle'];
        }, 
        reviews() {
            return this.$store.getters['getReviews'];
        },
        tabsNames() {
            return this.$store.getters['getTabs'];
        }, 
    },    
}
</script>

<style lang="scss"> 
.final_main_page {
    padding: 0;

    &__title {
        margin-bottom: rem(20px);

        @media #{$screen-tablet} {
            margin-bottom: rem(30px);
        }

        @media #{$screen-desktop} {
            margin-bottom: rem(60px);
        }
    }

    &__banner {
        width: 100%;
        max-width: rem(1440px); 
        margin-right: auto; //центрируем
        margin-left: auto; //центрируем
        
        margin-bottom: rem(40px);

        @media #{$screen-tablet} {
            margin-bottom: rem(50px);
        }

        @media #{$screen-desktop} {
            margin-bottom: rem(90px);
        }
    }

    &__notifications {
        margin-bottom: rem(60px);

        @media #{$screen-desktop} {
            margin-bottom: rem(100px);
        }
    }

    &__notification {        
        &:not(:last-child) {
            margin-bottom: rem(20px);

            @media #{$screen-tablet} {
                margin-bottom: rem(30px);
            }

            @media #{$screen-desktop} {
                margin-bottom: rem(50px);
            }
        }
    }

    &__directions {
        width: 100%;
        max-width: rem(1440px); 
        
        background-color: $white;

        padding-top: rem(40px);
        padding-right: rem(20px);
        padding-bottom: 0;
        padding-left: rem(20px);

        margin-right: auto; //центрируем
        margin-left: auto; //центрируем
        margin-bottom: rem(60px);

        @media #{$screen-tablet} {
            padding-top: rem(50px);
            padding-right: rem(20px);
            padding-bottom: rem(60px);
            padding-left: rem(20px);

            margin-bottom: 0;
        }

        @media #{$screen-desktop} {
            padding-top: rem(100px);
            padding-right: rem(100px);
            padding-bottom: rem(99px);
            padding-left: rem(100px);
            
            margin-bottom: rem(87px);
        }

        &-list {
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            margin-top: rem(-20px);

            @media #{$screen-tablet} {
                margin-top: rem(-30px);
                margin-left: rem(-24px);
                margin-right: rem(-24px);
            }

            @media #{$screen-desktop} {
                margin-top: rem(-32px);
                margin-left: rem(-25px);
                margin-right: rem(-25px);
            }
        }
        
        &-item {
            width: 100%;
            margin-top: rem(20px);

            @media #{$screen-tablet} {
                margin-top: rem(30px);
                padding-left: rem(24px);
                padding-right: rem(24px);  
                width: percentage(1 / 2);
            
            }

            @media #{$screen-desktop} {
                margin-top: rem(32px);
                padding-left: rem(25px);
                padding-right: rem(25px);
                width: percentage(1 / 3);

            }
        }     
    }

    &__reviews {
        display: flex;
        flex-wrap: wrap;

        width: 100%;
        max-width: rem(1440px); 
        
        background-color: $link-water;

        padding-top: rem(40px);
        padding-right: rem(21px);
        padding-bottom: rem(60);
        padding-left: rem(20px);

        margin-right: auto; //центрируем
        margin-left: auto; //центрируем
        margin-bottom: 0;

        @media #{$screen-tablet} {
            justify-content: space-between;

            padding-top: rem(50px);
            padding-right: rem(20px);
        }

        @media #{$screen-desktop} {
            padding: rem(100px);
        }

        &-title {
            width: 100%;
            @media #{$screen-tablet} {
                order: 1;
                width: fit-content;
            }
        }

        &-button {
            width: 100%;

            @media #{$screen-tablet} {
                order: 2;
                width: fit-content;

                margin-top: rem(-2px);
            }
            @media #{$screen-desktop} {
                margin-top: rem(13px);
            }
        }

        &-list {
            width: 100%;
           
            display: flex;
            align-items: center;
            
            flex-wrap: wrap; 
            row-gap: rem(20px);

            margin-bottom: rem(20px);

            @media #{$screen-tablet} {
                width: 100%;

                justify-content: space-between;
                column-gap: rem(16px);

                order: 3;
                
                margin-bottom: 0;
            }

            @media #{$screen-desktop} {
                column-gap: rem(40px);
            }
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

    &__article {
        display: flex;
        flex-wrap: wrap;

        background-color: transparent;

        padding-top: rem(40px);

        margin-bottom: rem(100px);

        @media #{$screen-tablet} {
            justify-content: space-between;

            padding-top: rem(50px);
            padding-right: rem(16px);
            padding-left: rem(12px);

            margin-bottom: rem(120px);
        }

        @media #{$screen-desktop} {
            padding-top: rem(100px);
            padding-right: 0;
            padding-left: 0;

            margin-bottom: rem(150px);
        }

        &-title {
            width: 100%;

            @media #{$screen-tablet} {
                order: 1;
                width: fit-content;
            }            
        }

        &-tabs {            
            width: 100%;
            
            margin-bottom: rem(17px);

            @media #{$screen-tablet} {                
                order: 3;

                margin-bottom: 0;
            }
        }

        &-button {
            width: 100%;

            @media #{$screen-tablet} {
                order: 2;
                width: fit-content;

                margin-top: rem(10px);
            }

            @media #{$screen-desktop} {
                margin-top: rem(13px);
            }
        }
    }
}
</style>