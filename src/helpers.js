const getDayInMonth = () => new Date(new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 2}`) - 1).getDate();

const createDayData = () => {
    const dayInMonth = getDayInMonth();
    const days = [];

    for (let i = 0; i < dayInMonth; i++) {
        days.push({
            id: i + 1,
            day: i + 1,
            events: '',
            date: '',
            users: '',
            description: '',
            height: null,
            update: false,
        })
    }

    while (days.length % 7 !== 0) {
        days.push({
            id: days.length + 1,
            day: '',
            events: '',
            date: '',
            users: '',
            description: '',
            height: null,
            update: false,
        })
    }

    return days;
};

const arrToMap = arr => arr.reduce((map, obj) => {
    map[obj.id] = obj;
    return map;
}, {});

const objToArr = obj => Object.values(obj);


module.exports = {
    createDayData,
    arrToMap,
    objToArr,
};
