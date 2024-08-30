import React from "react";
import conceptsImage from '../../assets/react-core-concepts.png'

const reactdescription = ['Fundamental', 'Core', 'Crucial']

function genRandomInt(max){
    return Math.floor(Math.random() * ( max + 1 ));
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
