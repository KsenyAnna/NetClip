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
                    <main class="page-with-menu__main detail-page">
                        <div class="detail-page__date">
                            <data value="value_name">{{ data }}</data>                        
                        </div>
                        <h2>Заголовок новости</h2>
                        <p>Проснувшись однажды утром после беспокойного сна, <a href="">Грегор Замза</a> обнаружил, что он у себя в постели превратился в страшное насекомое.</p>
                        <img src="~@/assets/images/big-image.jpg" alt="Картинка">
                        <p>Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот</p>
                        <ul>
                            <li>На верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло.
                                <ul>
                                    <li>На верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло.</li>
                                    <li>Его многочисленные, убого тонкие по сравнению с остальным телом ножки беспомощно копошились у него перед глазами</li>
                                    <li>«Что со мной случилось?» – подумал он.</li>
                                </ul>
                            </li>
                            <li>Его многочисленные, убого тонкие по сравнению с остальным телом ножки беспомощно копошились у него перед глазами</li>
                            <li>«Что со мной случилось?» – подумал он.</li>
                        </ul>
                        <p>Это не было сном. <a href="">Его комната</a>, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах. Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку.</p>
                        <blockquote>На портрете была изображена дама в меховой шляпе и боа, она сидела очень прямо и протягивала зрителю тяжелую меховую муфту, в которой целиком исчезала ее рука.</blockquote>
                        <p>Затем взгляд Грегора устремился в окно, и пасмурная погода – слышно было, как по жести подоконника стучат капли дождя – привела его и вовсе в грустное настроение. </p>
                        <ol>
                            <li>«Хорошо бы еще немного поспать и забыть всю эту чепуху», – подумал он
                                <ol>
                                    <li>но это было совершенно <a href="">неосуществимо</a></li>
                                    <li>он привык спать на правом боку</li>
                                    <li>а в теперешнем своем состоянии он никак не мог принять этого положения.</li>
                                </ol>
                            </li>
                            <li>С какой бы силой ни поворачивался он на правый бок, он неизменно сваливался опять на спину.</li>
                            <li>Закрыв глаза, чтобы не видеть своих барахтающихся ног, он проделал это добрую сотню раз и отказался от этих попыток только тогда, когда почувствовал какую-то неведомую дотоле, тупую и слабую боль в боку.</li>
                        </ol>
                        <h3>Заголовок третьего уровня</h3>
                        <p>«Ах ты, господи, – подумал он, – какую я выбрал хлопотную профессию! Изо дня в день в разъездах. Деловых волнений куда больше, чем на месте, в <a href="">торговом доме</a>, а кроме того, изволь терпеть тяготы дороги, думай о расписании поездов, мирись с плохим, нерегулярным питанием, завязывай со все новыми и новыми людьми недолгие, никогда не бывающие сердечными отношения. Черт бы побрал все эт</p>
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

export default {
    name: 'DetailView',
    components: {
        SvgIcon,
        BreadcrumbsComponent,
        MenuButtonComponent,
        MenuComponent,
    },

    data() {
        return {
            title: 'Заголовок страницы',
            data: '4 августа 2019',

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
.detail-page {    
    &__date {
        font-size: rem($font-size-small);
        line-height: 160%;
        color: $slate-gray;
        font-weight: $font-weight-regular;

        margin-bottom: rem(20px);
    }
}
</style>