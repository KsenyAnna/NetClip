const articles = {
    state: {
        articles: [
            {
                id: 0,
                pic: 'image1.jpg',
                title: 'Опыт внедрения в компаниях с 50 тысячами сотрудников',
                date: '05.04.2019',
                link: '/articles',
            },
            {
                id: 1,
                pic: 'image2.jpg',
                title: 'Передовые кадровые решения',
                date: '05.04.2019',
                link: '/articles',
            },        
            {
                id: 2,
                pic: 'image3.jpg',
                title: 'Глубокий анализ процессов и требований, применение лучших практик',
                date: '05.04.2019',
                link: '/articles',
            },        
            {
                id: 3,
                pic: 'image4.jpg',
                title: 'Разработка сложных модулей и глубокая интеграция',
                date: '05.04.2019',
                link: '/articles',
            },        
        ], 
    },
    getters: {
        getArticles(state) {
            return state.articles;
        }
    },
    mutations: {
    },
    actions: {
    },
}

export default articles;