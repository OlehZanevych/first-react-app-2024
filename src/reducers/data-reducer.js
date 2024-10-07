import {useReducer} from "react"
import {ADD_USER_ACTION, REMOVE_USER_ACTION, SAVE_USER_ACTION} from "../actions/data-actions";

let lastUserId = 0;
let lastDepartmentId = 0;

const initialState = {
    departments: {
        [++lastDepartmentId]: {
            name: 'Applied Mathematics and Informatics',
            email: 'ami@lnu.edu.ua',
            icon: 'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-ami.png'
        },
        [++lastDepartmentId]: {
            name: 'Faculty of Biology',
            email: 'biolog@lnu.edu.ua',
            icon: 'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-biology.png'
        },
        [++lastDepartmentId]: {
            name: 'Faculty of Economics',
            email: 'edean@lnu.edu.ua',
            icon: 'https://lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-econom.png'
        }
    },
    users: {
        [++lastUserId]: {
            firstName: 'Ivan',
            lastName: 'Shevchenko',
            age: 47,
            departmentIds: [1, 2],
            info: 'Taras Shevchenko was born on 9 March [O.S. 25 February] 1814[b] in the village of Moryntsi, Kiev Governorate, Russian Empire,[6] about 20 years after the third partition of Poland wherein the territory of Ukraine where Shevchenko was born was annexed by Imperial Russia. He was the third child after his sister Kateryna and brother Mykyta; his younger siblings were a brother, Yosyp, and a sister, Maria, who was born blind.[7] His parents were Kateryna Shevchenko (née Boiko)[7] and Hryhoriy Ivanovych Shevchenko, former subjects of the Polish-Lithuanian Commonwealth who became serf peasants, working the land owned by Vasily Engelhardt [uk], a nephew of the Russian statesman Grigory Potemkin.[8]. In 1816, the family moved to Kyrylivka (modern Shevchenkove [uk]), another village owned by Engelhardt, where Taras\'s father and grandfather had been born. The boy grew up in the village.[7] Once, he went looking for "the pillars that prop up the sky" and got lost. Chumaks (travelling merchants) who met the boy took him back to the village.[9] From 1822, Shevchenko was sent to a school, where he was taught to read and write. His teacher was the precentor of the village church, whose nickname was "Sovhyr". He was a harsh disciplinarian, who had a tradition of birching the children in his class every Saturday.[10].'
        },
        [++lastUserId]: {
            firstName: 'Maria',
            lastName: 'Kuleba',
            age: 27,
            departmentIds: [3],
            info: 'Test info about Maria'
        },
        [++lastUserId]: {
            firstName: 'Anton',
            lastName: 'Hnatuk',
            age: 20,
            departmentIds: [1],
            info: 'Test info about Anton'
        }
    }
}

const addUser = (state, payload) => {
    const {users} = state;
    users[payload.userId] = payload.user;
    return {...state};
}

const saveUser = (state, payload) => {
    const {users} = state;
    users[payload.userId] = payload.user;
    return {...state};
}

const removeUser = (state, payload) => {
    const {users} = state;
    const {userId} = payload;

    delete users[userId];

    return {...state};
}

const dataStorageReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case ADD_USER_ACTION:
            return addUser(state, payload);
        case SAVE_USER_ACTION:
            return saveUser(state, payload);
        case REMOVE_USER_ACTION:
            return removeUser(state, payload);
        default:
            return state;
    }
}

export const getNewUserId = () => ++lastUserId;

const useDataStorage = () => useReducer(dataStorageReducer, initialState);

export default useDataStorage;