const getDayInMonth = () => new Date(new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 2}`) - 1).getDate();
const getDayWeek = () => new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-01`).getDay() - 1;

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

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

const createDayData = () => {
    const dayWeek = getDayWeek();
    const dayInMonth = getDayInMonth();
    const days = [];

    if (dayWeek !== 0) {
        for (let i = 0; i < dayWeek; i++) {
            days.push({
                id: getId(10),
                day: '',
                events: '',
                date: '',
                users: '',
                description: '',
                height: null,
                update: false,
            })
        }
    }

    for (let i = 0; i < dayInMonth; i++) {
        days.push({
            id: getId(10),
            day: new Date(`${new Date().getFullYear()} ${new Date().getMonth() + 1} ${i + 1}`),
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
            id: getId(10),
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
