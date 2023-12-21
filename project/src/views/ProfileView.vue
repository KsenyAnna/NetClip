<template>
    <div class="home">
        <div class="page-with-menu page__content page__content--modification">

            <MenuButtonComponent
                :name="button"
            />

            <div class="container page-with-menu__container background">
                <div class="background__sidebar" data-background></div>

                <MenuComponent
                    :title="menu_title"
                    :menu="menu"
                />

                <section class="page-with-menu__content">

                    <BreadcrumbsComponent
                        :list="list"
                    />
                    
                    <h1 class="page-with-menu__title title--h1">{{ title }}</h1>

                    <main class="page-with-menu__main editing-profile">

                        <FormComponent/>
                        
                    </main>

                </section>      
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SvgIcon from '@/components/SvgIcon.vue';
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue';
import MenuButtonComponent from '@/components/MenuButtonComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import FormComponent from '@/components/FormComponent.vue';

export default {
    name: 'ProfileView',
    components: {
        SvgIcon,
        BreadcrumbsComponent,          
        MenuButtonComponent, 
        MenuComponent,
        FormComponent,
    },

    data() {
        return {
            title: 'Редактировать профиль',

            button: "Меню раздела",

            menu_title: "Меню раздела",

            menu: [
                {
                    id: 0,
                    name: "Избранное",
                },
                {
                    id: 1,
                    name: "Моя компания",
                },
                {
                    id: 2,
                    name: "Моё развитие",
                },
                {
                    id: 3,
                    name: "Новости компании",
                },
                {
                    id: 4,
                    name: "Телефонная книга",
                },
            ],

            list: [
                {
                    id: 0,
                    name: "Главная",
                },
                {
                    id: 1,
                    name: "Тут",
                },
                {
                    id: 2,
                    name: "Будут",
                },
                {
                    id: 3,
                    name: "Хлебные",
                },
                {
                    id: 4,
                    name: "Крошки",
                },
                {
                    id: 5,
                    name: "В две строки",
                },
            ],
        }
    }
}
</script>

<style lang="scss"> 
.editing-profile {
    margin-bottom: rem(160px);

    @media #{$screen-tablet} {
        margin-bottom: rem(190px);
    }

    &__block {
        width: 100%;

        margin-bottom: rem(50px);
    }

    &__title {
        margin-bottom: rem(11px);

        &--modified {
            margin-bottom: rem(20px);
        }
    }

    &__list {
        display: flex;
        flex-direction: column;
    }

    &__item {
        width: 100%;

        @media #{$screen-tablet} {
            max-width: rem(335px);
        }
        &:not(:last-child) {
            margin-bottom: rem(21px);            
        }

        &--wide {
            max-width: 100%;
        }

        &--modified {
            margin-bottom: rem(11px);
        }
    }

    &__buttons {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        margin: 0;
    }

    &__button {
        &:not(:last-child) {
            margin-right: rem(22px);
        }
    }
}
</style>