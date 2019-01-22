const getDayInMonth = (year, month) => 32 - new Date(year, month, 32).getDate();

const getDayWeek = (year, month) => new Date(`${year}-${month + 1}-01`).getDay() - 1;

const getId = (length) => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'.split('');
    if (typeof length !== "number") {
        length = Math.floor(Math.random() * chars.length);
    }
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
};

const defaultDayOptions = {
    day: '',
    events: '',
    date: '',
    users: '',
    description: '',
    height: null,
    update: false,
    found: false,
};

const getMonth = (year = new Date().getFullYear(), month = new Date().getMonth()) => {
    const dayWeek = getDayWeek(year, month);
    const dayInMonth = getDayInMonth(year, month);
    const days = [];

    if (dayWeek !== 0) {
        for (let i = 0; i < dayWeek; i++) {
            days.push({
                id: getId(10),
                ...defaultDayOptions
            })
        }
    }

    for (let i = 0; i < dayInMonth; i++) {
        days.push({
            ...defaultDayOptions,
            id: getId(10),
            day: new Date(`${year} ${month + 1} ${i + 1}`),
        })
    }

    while (days.length % 7 !== 0) {
        days.push({
            id: getId(10),
            ...defaultDayOptions
        })
    }

    return days;
};

const arrToMap = arr => arr.reduce((map, obj) => {
    map[obj.id] = obj;
    return map;
}, {});

const objToArr = obj => Object.values(obj);

const chunkArray = (arr, chunk) => {
    let i, j, result = [];
    for (i = 0, j = arr.length; i < j; i += chunk) {
        result.push(arr.slice(i, i + chunk));
    }
    return result;
};


module.exports = {
    getMonth,
    arrToMap,
    objToArr,
    chunkArray
};
