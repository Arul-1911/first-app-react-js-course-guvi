import React, { useReducer } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BasicForm from '../components/BasicForm';

function Home() {

  function reducer(state,action){
    switch (action.type){
       case "inc":
       return state+1;

       case 'dec':
        return state > 0 ? state -1 : 0;

        default:
          return state = 0;
    }
  }

  const [countState, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <NavBar />
      <div>
        <h1>Welcome To My website</h1>
        <p>
          This is the Home Page of My Website. Here You Can Find the Information
          about Me and my Work.
        </p>
        <BasicForm/>
      </div>
    <p>{countState}</p>
    <button onClick={() => dispatch({type:'inc'})}>+</button>
    <button onClick={() => dispatch({type:'dec'})}>-</button>
      <Footer />
    </>
  );
}

export default Home