const socialIcons = {
    state: {        
        icons: [
            {
                id: 0,
                name: 'you-tube',
                classN: 'social__icon-pic',
            },
            {
                id: 1,
                name: 'instagram',
                classN: 'social__icon-pic',
            },
       ],
    },
    getters: {
        getSocialIcons(state) {
            return state.icons;
        }
    },
    mutations: {
    },
    actions: {
    },
}

export default socialIcons;