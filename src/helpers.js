const getDayInMonth = () => new Date(new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 2}`) - 1).getDate();

const createDayData = () => {
    const dayInMonth = getDayInMonth();
    const days = [];

    for (let i = 0; i < dayInMonth; i++) {
        days.push({
            id: i + 1,
            day: i + 1,
            title: '',
            date: null,
            people: [],
            height: null,
        })
    }

    while (days.length % 7 !== 0) {
        days.push({
            id: days.length + 1,
            day: '',
            title: '',
            date: null,
            people: [],
            height: null,
        })
    }

    return days;
};

module.exports = {
    createDayData,
};
