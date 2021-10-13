import EmployeeListItem from "../employees-item/employees-item"
import './employees-list.css';


const EmployeesList = ({data, onDelete, onToggleProp, onChangeSlalary}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeeListItem 
                    key = {id} 
                    {...itemProps} 
                    onDelete={() => onDelete(id)}
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                    onChangeSlalary={(value) => onChangeSlalary(id, value)}
                
                    />
        );
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;