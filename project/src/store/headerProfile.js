const headerProfile = {
    state: {
        profile:
            {
                name: "Анастасия",
                photo: "foto.jpg",
            },
    },
    getters: {
        getProfile(state) {
            return state.profile;
        }
    },
    mutations: {

    },
    actions: {
    },
}

export default headerProfile;