import {useParams} from 'react-router-dom'
import {useState} from "react";
import {useDataStorageContext} from "../../context/data-storage-context";
import Users from "../users";
import Select from "react-select";
import './style.css'

const EditUser = () => {
    const {state, dispatch, dataActions} = useDataStorageContext();

    const currentUserId = useParams().userId;
    const [userId, setUserId] = useState(currentUserId);

    const {users, departments} = state;

    const userData = users[userId];

    const [firstName, setFirstName] = useState(userData.firstName);
    const [lastName, setLastName] = useState(userData.lastName);
    const [age, setAge] = useState(userData.age);
    const [departmentIds, setDepartmentIds] = useState(userData.departmentIds);
    const [info, setInfo] = useState(userData.info);

    if (!currentUserId) {
        return null;
    } else if (currentUserId !== userId) {
        setUserId(currentUserId);

        const newUserData = users[currentUserId];
        setFirstName(newUserData.firstName);
        setLastName(newUserData.lastName);
        setAge(newUserData.age);
        setInfo(newUserData.info);
    }

    const handleFirstNameChange = event => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = event => {
        setLastName(event.target.value);
    }

    const handleAgeChange = event => {
        const age = +event.target.value;
        if (!isNaN(age)) {
            setAge(age);
        }
    }

    const handleInfoChange = event => {
        setInfo(event.target.value);
    }

    const handleDepartmentsChange = selectedDepartmentOptions => {
        const updatedDepartmentIds = selectedDepartmentOptions.map(({value}) => +value);
        setDepartmentIds(updatedDepartmentIds);
    }

    const saveUser = () => {
        const user = {firstName, lastName, age, departmentIds, info};
        dispatch(dataActions.saveUser(userId, user));
    }

    const options = Object.entries(departments).map(([departmentId, departmentData]) => ({
        value: departmentId,
        label: departmentData.name
    }));

    const selectedDepartmentOptions = departmentIds.map(departmentId => ({
        value: `${departmentId}`,
        label: departments[departmentId].name
    }));

    return (
        <>
            <div className='edit-user'>
                <label>First name:</label><input type='text' value={firstName} onChange={handleFirstNameChange}/>
                <label>Last name:</label><input type='text' value={lastName} onChange={handleLastNameChange}/>
                <label>Age:</label><input type='text' value={age} onChange={handleAgeChange}/>
                <label>Departments:</label><Select options={options} defaultValue={selectedDepartmentOptions} onChange={handleDepartmentsChange} isMulti />
                <label>Info:</label><input type='text' value={info} onChange={handleInfoChange}/>
                <button onClick={saveUser}>Save User</button>
            </div>
            <Users/>
        </>
    );
}

export default EditUser;