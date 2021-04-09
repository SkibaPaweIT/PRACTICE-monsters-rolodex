import React, {Component} from 'react';
import './App.css'; //Import css
import { CardList } from './components/card-list/card-list.component'
import {SearchBox } from './components/SearchBox/search-box.component'
class App extends Component { // Component gives us access to state 
  constructor(){ //super odnośi się do konstruktora klasy nadrzędnej czyli Component dlatego można state wrzucić
    super(); 
    this.state = { 
      monsters: [],
      searchField: ''
    };  

    //this.handleChange = this.handleChange.bind(this); //bind is method of any function. It's required to make it if created function
    //isn't arrow function
  }

  //Lifecycle method 
  componentDidMount(){
    //Getting thata from URL
    fetch("https://jsonplaceholder.typicode.com/users")
    //Getting Response to json
    .then(Response => Response.json() 
    //Setting monster as users getted from json
    .then(users => this.setState({monsters: users}))  
    );
  }

  handleChange = (e) => { //arrow function binds to 'this' contex to place where they were defined 
    this.setState({searchField: e.target.value})
  }


  //()=> == annonymous function call
  //{} stands for java script elements you can even {4+5} and this will work as well

  render(){ //it's called everytime state is changed and in the beggining 
       
        //eq to const monsters = this.state.monsters; 
        // const searchField = this.state.seachField
        const { monsters, searchField } = this.state;
        const filterMonsters = monsters.filter(monster =>  monster.name.toLowerCase().includes(searchField.toLowerCase())); 
        //toLowerCase to not to be case sensitive)

        return ( //To jest jsx attribute a nie jakieś htmlelele     
            <div className='App'>
            <h1> Monsters Rolodex </h1>
            <SearchBox 
                placeholder='Search Monsters'
                handleChange={this.handleChange} //we don't need e=> cause of handleChange is referencing this e ?? 
                />
            <CardList monsters={filterMonsters} />
            </div>
        );
  }
}

export default App;
