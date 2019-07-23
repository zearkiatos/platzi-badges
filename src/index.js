// const element = document.createElement('h1');

// element.innerText = "Hello, Platzi Badges!";

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';



// const jsx = <h1> Hello, Platzi Badges from React</h1>;

// const element = React.createElement('a',{href:'https://platzi.com'},'Ir a Platzi');
const name ='Pedro Capriles';

// const element = React.createElement('h1',{},`Hola, soy ${name}`);

// const jsx =<h1> Hola soy, {name}</h1>;

// const jsx =<h1> Hola soy, {name}</h1>;

const jsx=(
    <div>
        <h1>
            Hola, soy {name}
        </h1>
        <p>Soy Ingeniero de Sistemas.</p>
    </div>
);

const element = React.createElement(
    'div',{},
    React.createElement('h1',{},`Hola, soy ${name}`),
    React.createElement('p',{},'Soy Ingeniero de Sistemas'));

const container = document.getElementById('app');

//ReactDOM.render(__que se quiere renderizar__,___donde se quiere renderizar____)

ReactDOM.render(jsx, container);