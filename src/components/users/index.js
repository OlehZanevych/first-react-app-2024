import {useDataStorageContext} from "../../context/data-storage-context";
import UserItem from "../user-item";

const Users = () => {
    const {state: {users}} = useDataStorageContext();

    const userItems = Object.entries(users).map(([userId, user]) => <UserItem key={userId} userId={userId} userData={user}/>)

    return (
        <>
            <h1>Users</h1>
            {userItems}
        </>
    )
}

export default Users;