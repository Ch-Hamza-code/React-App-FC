import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
    state = {
        counters:[
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0},
            {id:5,value:0},
            {id:6,value:0},
            {id:7,value:0},
            {id:8,value:0},
            {id:9,value:0},
            {id:10,value:0},
            
        ]
      } 
      handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index]={...counter};
      counters[index].value++
      this.setState({counters});
      }

      handleDecrement = counter => {
        
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index]={...counter};
      counters[index].value--;
      this.setState({counters});
     }


      handleReset = () => {
        const  counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        }
        );
        this.setState({counters});
      }

      handleDelete = counterId =>{
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
      }

    render() { 
        return (
            <div>
                <button 
                   onClick={this.handleReset}
                   className="btn btn-primary btn-sm m2 ">Reset</button>
                {this.state.counters.map(counter => (
                    <Counter 
                    key={counter.id} 
                    onDelete={this.handleDelete} 
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    counter={counter}
                    />))}

                    
            </div>
        );
    }
}
 
export default Counters;