const reviews = {
    state: {
        reviews: [
            {
                id: 0,
                photo: 'foto1.jpg',
                firstName: 'Паулина',
                date: '04.011.2020',
                text: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову. Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.',
                logo: 'logo1.jpg'
            },
            {
                id: 1,
                photo: 'foto2.jpg',
                firstName: 'Анастасия',
                date: '05.04.2019',
                text: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову.',
                logo: 'logo2.jpg'
            },                 
        ], 
    },
    getters: {
        getReviews(state) {
            return state.reviews;
        }
    },
    mutations: {
    },
    actions: {
    },
}

export default reviews;