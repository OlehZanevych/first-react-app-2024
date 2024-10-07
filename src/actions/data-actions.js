const DATA_ACTION_GROUP = 'DATA_ACTIONS';

export const ADD_USER_ACTION = `${DATA_ACTION_GROUP}/ADD_USER`;
export const SAVE_USER_ACTION = `${DATA_ACTION_GROUP}/SAVE_USER`;
export const REMOVE_USER_ACTION = `${DATA_ACTION_GROUP}/REMOVE_USER`;

const dataActions = {
    addUser: (userId, user) => ({
        type: ADD_USER_ACTION,
        payload: {userId, user}
    }),
    saveUser: (userId, user) => ({
        type: SAVE_USER_ACTION,
        payload: {userId, user}
    }),
    removeUser: userId => ({
        type: REMOVE_USER_ACTION,
        payload: {userId}
    }),
}

export default dataActions;