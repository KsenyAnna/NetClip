const cardDirection = {
    state: {
        cardDirection: [
            {
                id: 0,
                pic: 'image1.png',
                title: 'E-commerce',
                text: 'Лучшее в России портфолио крупных интернет-магазинов',
            },
            {
                id: 1,
                pic: 'image2.png',
                title: 'Intranet',
                text: 'Cамый опытный разработчик корпоративных порталов',
            },
            {
                id: 2,
                pic: 'image3.png',
                title: 'Mobile',
                text: 'Разработка нативных мобильных приложений',
            },
            {
                id: 3,
                pic: 'image4.png',
                title: 'SLA 24/7',
                text: 'Выделенный отдел технической поддержки с SLA 24/7',
            },
            {
                id: 4,
                pic: 'image5.png',
                title: 'Personal',
                text: 'Большой опыт в разработке Личных Кабинетов',
            },
            {
                id: 5,
                pic: 'image6.png',
                title: 'Digital',
                text: 'Комплексная интеграция информационных систем',
            },            
        ], 
    },
    getters: {
        getcardDirection(state) {
            return state.cardDirection;
        }
    },
    mutations: {
    },
    actions: {
    },
}

export default cardDirection;