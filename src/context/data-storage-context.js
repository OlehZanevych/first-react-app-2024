import {createContext, useContext} from "react";
import userDataStorage, {getNewUserId} from "../reducers/data-reducer";
import dataActions from "../actions/data-actions";

const DataStorageContext = createContext('');
const useDataStorageContext = () => useContext(DataStorageContext);

const DataStorageProvider = ({children}) => {
    const [state, dispatch] = userDataStorage();

    return (
        <DataStorageContext.Provider value={{state, dispatch, dataActions, getNewUserId}}
        >{children}</DataStorageContext.Provider>);
}

export default DataStorageProvider;
export {useDataStorageContext};