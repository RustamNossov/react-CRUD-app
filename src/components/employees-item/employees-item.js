import './employees-item.css';

const EmployeeListItem = (props) => {
   
    
        const {name, salary, onDelete, onToggleProp, increase, liked, onChangeSlalary} = props;

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }

        if (liked) {
            classNames += ' like';
        }

        const changeSalary = (e) => {
            const value = +e.currentTarget.value.replace(/[^\d]/g, '');
            onChangeSlalary(value)
        }
    
        
        return (
            <li className={classNames}>
                <span className="list-group-item-label"
                      onClick = {onToggleProp}
                      data-toggle="liked"
                      >{name}</span>
                <input type="text" 
                       className="list-group-item-input" 
                       value={salary + '$'}
                       onChange={changeSalary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick = {onToggleProp}
                        data-toggle="increase"
                        >
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick = {onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
        
        }

    
    


export default EmployeeListItem;