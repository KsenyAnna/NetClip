const videos = {
    state: {
        videos: [
            {
                id: 0,
                pic: 'image4.jpg',
                title: 'Текст о человеке,на которого вы хотите равняться.',
                date: '02.12.2023',
                link: '/articles',
            },
            {
                id: 1,
                pic: 'image3.jpg',
                title: 'Сценарий детского праздника Нептуна',
                date: '02.12.2023',
                link: '/articles',
            },        
            {
                id: 2,
                pic: 'image2.jpg',
                title: 'Составить контент план для соцсетей поможет нейросеть',
                date: '02.12.2023',
                link: '/articles',
            },        
            {
                id: 3,
                pic: 'image1.jpg',
                title: 'Нейросеть AI Search генерирует контент план онлайн. Попробуй бесплатно.',
                date: '02.12.2023',
                link: '/articles',
            },        
        ], 
    },
    getters: {
        getVideos(state) {
            return state.videos;
        }
    },
    mutations: {
    },
    actions: {
    },
}

export default videos;