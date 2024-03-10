import React,{useContext} from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { MyContext } from "../App";

function About() {
  let { constextState } = useContext(MyContext);
  return (
    <>
      <NavBar />
      <div>
        <h1>Welcome To My website</h1>
        <p>
          This is the About Page of My Website. Here You Can Find the
          Information about Me and my Work.
        </p>
      </div>
      <div>
        <p>{constextState.name}</p>
        <p>{constextState.id}</p>
      </div>
      <Footer />
    </>
  );
}

export default About