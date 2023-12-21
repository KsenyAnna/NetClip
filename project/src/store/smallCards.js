const smallCards = {
    state: {
        smallCards: [
            {
                id: 0,
                title: 'Важное уведомление Важное уведомление',
                text: 'Удаленная работа. Инструкция для сотрудников о том как защитить себя от корон... Удаленная работа Инструкция для сотрудников о том как защитить себя от корон...',
                icon: 'warn',
                iconClass: 'small-card__icon small-card__icon-warning',
                button: 'Подробнее',
            },
            {
                id: 1,
                title: 'Вопрос дня',
                text: 'Вы адекватный?',
                icon: 'question',
                iconClass: 'small-card__icon small-card__icon-question',
                button: 'Да',
            },
            {
                id: 2,
                title: 'Технические работы',
                text: 'Портал будет недоступен 14.08.2021 с 10:00 до 19:00',
                icon: 'info',
                iconClass: 'small-card__icon small-card__icon-info',
                button: 'Ясно-понятно',
            },
            {
                id: 3,
                title: 'Опрос недели',
                text: 'Какую книгу вы больше всего любили, когда были маленьким?',
                icon: 'question',
                iconClass: 'small-card__icon small-card__icon-question',
                button: 'Пройти опрос',
            },
            {
                id: 4,
                title: 'Опрос недели',
                text: 'Какую книгу вы больше всего любили, когда были маленьким?',
                icon: 'question',
                iconClass: 'small-card__icon small-card__icon-question',
                button: 'Пройти опрос',
            },
        ],
    },
    getters: {
        getSmallCards(state) {
            return state.smallCards;
        }
    },
    mutations: {

    },
    actions: {
    },
}

export default smallCards;