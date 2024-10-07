import './style.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddUser from "../add-user";
import EditUser from "../edit-user";
import Departments from "../departments";
import Users from "../users";
import Menu from "../menu";

const MainPage = () => {
    return (
        <div className='main-page'>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path='/add-user' element={<AddUser/>}></Route>
                    <Route path='/edit-user/:userId' element={<EditUser/>}></Route>
                    <Route path='/departments' element={<Departments/>}></Route>
                    <Route path='*' element={<Users/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainPage;