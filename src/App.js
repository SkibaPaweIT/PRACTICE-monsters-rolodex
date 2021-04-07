import React, {Component} from 'react';
import './App.css'; //Import css
import { CardList } from './components/card-list/card-list.component'
class App extends Component { // Component gives us access to state that we can access
  constructor(){ //super odnośi się do konstruktora klasy nadrzędnej czyli Component dlatego można state wrzucić
    super(); 

    this.state = { 
      monsters: []
    };  
  }

  //Lifecycle metod 
  componentDidMount(){
    //Getting thata from URL
    fetch("https://jsonplaceholder.typicode.com/users")
    //Getting Response to json
    .then(Response => Response.json() 
    //Setting monster as users getted from json
    .then(users => this.setState({monsters: users}))  
    );
  }
 

  render(){ //it's called everytime state is changed and in the beggining 
        //()=> == annonymous function call
        //{} stands for java script elements you can even {4+5} and this will work as well
        return ( //To jest jsx attribute a nie jakieś htmlelele 
            <div className='App'>
            <CardList monsters={this.state.monsters} />
            </div>
        );
  }
}

export default App;
