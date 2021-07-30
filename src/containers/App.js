import React, {Component} from 'react';
import 'tachyons';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import  { units } from '../units';

class App extends Component {
    constructor() {
        super();
        this.state = {
            units: [],
            searchField: '',    
        }
    }

    componentDidMount() {
            this.setState({units: units});
    }

    onSearchChange = (event) => {
        this.setState ({
           searchField: event.target.value,
        });
    }

    onCardClick = (event) => {
        //Use currentTarget instead of target-
        //target is what was clicked, currentTarget is what the event was bound to
        console.log(event.currentTarget.id);
        let modId = event.currentTarget.id -1;
        let updatedUnits = this.state.units;
        let updatedUnit = updatedUnits[modId];
        console.log(updatedUnit);
        updatedUnit.clicked = !updatedUnit.clicked;
        updatedUnits[modId] = updatedUnit;
        this.setState({
            units: updatedUnits
        });
    }

    render() {
        const { units, searchField } = this.state;
        const filteredunits = units.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

      return !units.length ?
            <h1>Loading...</h1> : (
                <div className='tc'>
                    <h1 className="f1">Axis & Allies Units</h1>
                    < SearchBox searchChange={this.onSearchChange}/>
                    < Scroll>
                        < ErrorBoundry >
                            < CardList cardClick={this.onCardClick} units={filteredunits} />
                        </ErrorBoundry>
                    </Scroll>
                </div>    
            )
        }
    };


export default App;