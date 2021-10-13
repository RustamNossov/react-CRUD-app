
import './app-btn.css';

const AppBtn  = (props) => {
    
//btn btn-light
//btn btn-outline-light
const {value, active, onClick} = props;
const className = active ? 'btn btn-light' : 'btn btn-outline-light'

return (
        <button 
            className={className}
            type="button"
            onClick = {onClick}>
                {value}
        </button>
        
);
    
}

export default AppBtn;
