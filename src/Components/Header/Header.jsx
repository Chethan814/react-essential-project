import React from "react";
import conceptsImage from '../../assets/react-core-concepts.png'
import './Header.css'

const reactdescription = ['Fundamental', 'Core', 'Crucial']

function genRandomInt(max){
  let random = 0
    setInterval(() => {
      random = Math.floor(Math.random() * ( max + 1 ));
      }, 1000);
      return random
}

export default function () {
    let description = genRandomInt(2)
    

  return (
    <>
      <header>
        <img src={conceptsImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactdescription[description]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </>
  );
}
