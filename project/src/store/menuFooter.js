const menuFooter = {
    state: {
        menu: [
            {
                id: 0,
                name: 'Правила',
            },
            {
                id: 1,
                name: 'Документы',
            },
            {
                id: 2,
                name: 'Политика конфиденциальности',
            },
       ],
    },
    getters: {
        getMenuFooter(state) {
            return state.menu;
        }
    },
    mutations: {
    },
    actions: {
    },
}

export default menuFooter;