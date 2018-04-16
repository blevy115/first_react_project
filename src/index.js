import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App';


var person = {
  personName:"Brandon",
  personAge:26,
  favourites:[
    "Star Wars, ",
    "Legend of Zelda, ",
    "One Piece ",
    "Naruto",
  ]
}


ReactDOM.render(
  <Hello
  name={person.personName}
  age={person.personAge}
  favourites={person.favourites}
  />,
  document.getElementById('root')
)
