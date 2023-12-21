const newsCard = {
    state: {
        cards: [            
        ],
    },
    getters: {
        getCards(state) {
            return state.cards;
        }
    },
    mutations: {
        setCardsData(state, data) { 
            state.cards = data;
        }
    },
    actions: {
        setCardsData({commit}, data) {
            commit('setCardsData', data);
        }
    },
}

export default newsCard;