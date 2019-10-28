// const element = document.createElement('h1');

// element.innerText = "Hello, Platzi Badges!";

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';

const container = document.getElementById("app");

// ReactDOM.render(<Badge firstName="Pedro" lastName="Capriles" jobTitle="FullStack Developer" twitter="@zearkiatos" avatarUrl="https://s.gravatar.com/avatar/db9770705c9ea98b2185ea09179d588f?s=80" />, container);

// ReactDOM.render(<BadgeNew />, container);
ReactDOM.render(<Badges />, container);