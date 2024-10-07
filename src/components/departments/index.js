import {useDataStorageContext} from "../../context/data-storage-context";
import DepartmentItem from "../department-item";

const Departments = () => {
    const {state: {departments}} = useDataStorageContext();

    const departmentItems = Object.entries(departments).map(([departmentId, department]) =>
        <DepartmentItem key={departmentId} departmentId={departmentId} departmentData={department}/>);

    return (
        <>
            <h1>Departments</h1>
            {departmentItems}
        </>
    );
}

export default Departments;