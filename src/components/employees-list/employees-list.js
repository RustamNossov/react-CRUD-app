import EmployeeListItem from "../employees-item/employees-item"
import './employees-list.css';


const EmployeesList = () => {

    return (
        <ul className="app-list list-group">
            <EmployeeListItem/>
            <EmployeeListItem/>
            <EmployeeListItem/>
        </ul>
    )
}

export default EmployeesList;