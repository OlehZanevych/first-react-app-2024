import './style.css'
import {useState} from "react";
import {useDataStorageContext} from "../../context/data-storage-context";
import {Link} from "react-router-dom";

const UserItem = ({userId, userData}) => {
    const [isOpenInfo, setOpenInfo] = useState(false);

    const {state: {departments}, dispatch, dataActions} = useDataStorageContext();

    const {firstName, lastName, age, departmentIds, info} = userData;

    const toggleOpenInfo = () => {
        setOpenInfo(!isOpenInfo);
    }

    const removeUser = () => dispatch(dataActions.removeUser(userId));

    return (
        <div className='user_item'>
            <span className='user_item__text'>{firstName}</span>
            <span className='user_item__text'>{lastName}</span>
            <span className='user_item__number'>{age}</span>
            <div className='user_item__operations'>
                <span onClick={toggleOpenInfo}>{isOpenInfo ? 'Close' : 'Open'} details</span>
                <Link to={`/edit-user/${userId}`}>Edit</Link>
                <span onClick={removeUser}>Remove</span>
            </div>
            {isOpenInfo && (
                <div>
                    <div>
                        <label>Information about User:</label> {info}
                    </div>
                    {
                        departmentIds.length > 0 && (<div>
                            <label>Departments:</label> {departmentIds.map(departmentId => departments[departmentId].name).join(', ')}
                        </div>)
                    }
                </div>
            )}
        </div>
    )
}

export default UserItem;