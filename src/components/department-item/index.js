import './style.css';

const DepartmentItem = ({departmentId, departmentData}) => {
    const {name, email, icon} = departmentData;

    return (
        <div className='department_item'>
            <img src={icon}/>
            <div className='department_item__info'>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default DepartmentItem;