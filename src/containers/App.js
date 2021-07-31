import React, {Component} from 'react';
import 'tachyons';
import CardList from '../components/CardList';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Button from '../components/Button';
import  { units } from '../units';

class App extends Component {
    constructor() {
        super();
        this.state = {
            units: [],   
            categoryField: 'All', 
        }
    }

    componentDidMount() {
            this.setState({units: units});
    }

    onCardClick = (event) => {
        //Use currentTarget instead of target-
        //target is what was clicked, currentTarget is what the event was bound to
        let modId = event.currentTarget.id -1;
        let updatedUnits = this.state.units;
        let updatedUnit = updatedUnits[modId];
        updatedUnit.clicked = !updatedUnit.clicked;
        updatedUnits[modId] = updatedUnit;
        this.setState({
            units: updatedUnits
        });
    }

    onCategorySelect = (event) => {
        let query = event.currentTarget.id;
        this.setState ({
            categoryField: query,
         });
    }

    render() {
        const { units, categoryField } = this.state;
        const filteredunits = units.filter(unit => {
            return unit.type.toLowerCase().includes(categoryField.toLowerCase());
        })

      return !units.length ?
            <h1>Loading...</h1> : (
                <div className='tc'>
                    <h1 className="f1-l f4 ma0">Axis & Allies Units</h1>
                    < Button name="All" buttonClick={this.onCategorySelect} isSelected={this.state.categoryField} />
                    < Button name="Land" buttonClick={this.onCategorySelect} isSelected={this.state.categoryField} />
                    < Button name="Air" buttonClick={this.onCategorySelect} isSelected={this.state.categoryField} />
                    < Button name="Sea" buttonClick={this.onCategorySelect} isSelected={this.state.categoryField} />
                    < Button name="Utility" buttonClick={this.onCategorySelect} isSelected={this.state.categoryField} />
                    < Scroll>
                        < ErrorBoundry >
                            < CardList cardClick={this.onCardClick} units={filteredunits}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>    
            )
        }
    };


export default App;