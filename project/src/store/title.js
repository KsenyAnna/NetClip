const title = {
    state: {
        title: [
            {
                id: 0,
                title: 'Направления',
                line: 'bottom_line',
                classes: 'title--red'
            },
            {
                id: 1,
                title: 'Отзывы',
                line: 'bottom_line',
            },
            {
                id: 2,
                title: 'Статьи по теме',
                line: 'bottom_line',
            },                       
        ], 
    },
    getters: {
        getTitle(state) {
            return state.title;
        }
    },
    mutations: {
    },
    actions: {
    },
}

export default title;