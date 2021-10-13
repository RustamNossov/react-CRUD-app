import './app-info.css';


const AppInfo = (props) => {
    const {emplTotalAmount, riseWillGet} = props;
    return (
        
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {emplTotalAmount}</h2>
            <h2>Премию получат: {riseWillGet}</h2>
        </div>
    )
}

export default AppInfo;