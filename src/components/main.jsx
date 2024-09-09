import React from 'react';
import './Main.css';

// Componente con Props y Argumentos
const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

const Main = () => {
  return (
    <main className="main-content">
      <Title text="Welcome to My Website" />
      <p>This is a responsive page built with React.</p>
    </main>
  );
};

export default Main;
