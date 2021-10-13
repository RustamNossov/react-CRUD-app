import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../app-search-panel/app-search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employee-add-form/employee-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Jhon C.", salary: 800, increase: true, liked: false, id: 1, filtered: false},
                {name: "Alex M.", salary: 3000, increase: false, liked: false, id: 2, filtered: false},
                {name: "Carl W.", salary: 15000, increase: true,liked: false, id: 3, filtered: false}
            ],
            term: '',
            filterId: 0
        }
        this.maxId = 4;
        
    }
    
   

    deleteItem = (id) => {
        this.setState(({data}) => {
            const newArr = data.filter(item => item.id !== id);
            return {
                data: newArr
            }
        })
    }

    increaseMaxId = () => {
        this.setState(({maxId}) => ({
            maxId: maxId + 1
        }) )
    }

    addItem = (name, salary) => {
        if (name.trim().length > 2 && salary.length > 0) {
            const newItem = {
                name, 
                salary,
                increase: false,
                liked: false,
                id: this.maxId++,
                filtered: false
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        }
        
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    onChangeSlalary = (id, value) => {
        console.log(parseInt(value))
        this.setState({
            data: this.state.data.map((item, i) => {
                if (i === id-1) {
                    item.salary = value
                    }
                return item
            })
        })
    }


    onUpdateSearch = (term) => {
        this.setState({term})
    } 

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    changeFilterId = (filterId) => {
        this.setState({filterId})
    }

    filter = (data, filterId) =>  {
        if (filterId === 1) {
            return data.filter(item => item.liked)
        }  
        if (filterId === 2) {
            return data.filter(item => item.salary > 1000)
        }
        return data
    }
    render() {

        const {data, term, filterId} = this.state;
        const emplTotalAmount = data.length;
        const riseWillGet = data.filter(item => item.liked === true).length;

        let visibleData = this.searchEmp(data, term); 
        visibleData = this.filter(data, filterId);

        

        return (
            <div className="app">
                <AppInfo 
                    emplTotalAmount={emplTotalAmount}
                    riseWillGet={riseWillGet}/>
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={(term)=>this.onUpdateSearch(term)}/>
                    <AppFilter
                        changeFilterId={(id) => this.changeFilterId(id)}/>
                </div>
                <EmployeesList 
                        data={visibleData} 
                        onDelete={id => this.deleteItem(id)}
                        onToggleProp={this.onToggleProp}
                        onChangeSlalary={this.onChangeSlalary}/>
                <EmployeesAddForm
                        onAdd={this.addItem}/>
            </div>
        )
    }
    
}

export default App;