import {Component} from 'react';

import AppBtn from '../app-btn/app-btn';

import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {value: 'Все сотрудники', active: true},
                {value: 'На повышение', active: false},
                {value: 'ЗП больше 1000$', active: false}
            ]
        }
    }

    changeActiveStatus = (id) => {
        const newData = this.state.data.map((item, i) => {
            
            if (i === id) {
                item.active = true;
                return item;
            } else {
                item.active = false;
                return item;
            }
        })
        this.setState({
            data: newData
        })

        this.props.changeFilterId(id);
        
    }

    render() {
        const {data} = this.state
        const elements = data.map((item, i) => {
            return (
                <AppBtn 
                        key = {i} 
                        {...item} 
                        onClick = {()=>this.changeActiveStatus(i)}
                        />
            );
        })

        return (
            <div className="btn-group">
                {elements}
            </div>
        );
    } 
}

export default AppFilter;
