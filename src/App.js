import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const about = {
  number: '5555'
}

const person = {
  backgroundColor: 'blue',
  margin: '20px',
  padding: '20px',
  border: '3px solid black',
  borderRadius: '15px',
}
const nayoks = ['ruble', 'bappi', 'razzak']
const cinemas = [{ nayok: 'ruble', naika: 'mousumi' },
{ nayok: 'bappi', naika: 'shokh', }]




function App() {
  return (
    <div className="App">
      {/* <Person></Person>
      <Person></Person>
      <Person></Person> */}

      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>

      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} naika={cinema.naika}> </Cinema>)
      }


      {/* 
      <Friend address="dhaka" phone="15241" name="Roble" naika="moushumi"></Friend>
      <Friend address="Savar" phone="175875241" name="Rofiq" naika="savana"></Friend>
      <Friend address="Savar" phone="175875241" name="Rofiq" naika="savana"></Friend>
      <Friend address="Savar" phone="175875241" name="Rofiq" naika="savana"></Friend> */}



    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  const handelIncrease = () => console.log('increase')
  return (
    <div>
      <h1>hello</h1>
      <button onClick={handelIncrease}>increase</button>
    </div>
  )


}

function Person() {


  /*  return (
     <div className="person">
       <h1>Rifat</h1>
       <h4>Profession: Student</h4>
     </div>
   ) */

  /* return (
    <div style={person}>
      <h1>Rifat</h1>
      <h4>Profession: Student</h4>
    </div>
  ) */
  return (
    <div style={{
      backgroundColor: 'blue',
      margin: '20px',
      padding: '20px',
      border: '3px solid black',
      borderRadius: '15px',
    }}>
      <h1>Rifat</h1>
      <h4>Profession: Student</h4>
    </div>
  )
}

function Cinema(props) {
  return (
    <div className="person">
      <h1>Nayok:{props.nayok}</h1>
      <h4>Naika:{props.naika}</h4>
    </div>
  )
}

function Friend(props) {
  console.log(props)
  return (
    <div className="person">
      <h1>phone:{props.phone}</h1>
      <h4>address:{props.address}</h4>
    </div>
  )

}



export default App;
