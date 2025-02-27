import React from 'react';
import './App.css';
import { Typewriter } from 'react-simple-typewriter';

function App() {
  return (
    <div className="hero">
      <h1 className="hero-title">Sandilya Madiraju.</h1>
      <p className="hero-subtitle">
        product, technology &amp; 
        <span className="dynamic-text">
        <Typewriter
            words={[' strategy', ' growth', ' design', ' business', ' innovation', ' leadership', ]}
            loop={true}
            typeSpeed={40}
            deleteSpeed={100}
            delaySpeed={3000}
          />
        </span>
        </p>

      <div className="hero-icons">

        <a href='https://github.com/granbyio' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
          <ion-icon name="logo-github"></ion-icon>
        </a>

        <a href='https://www.linkedin.com/in/sandilyamadiraju/' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>

        <a href='https://medium.com/@granbyio' target='_blank' rel='noopener noreferrer' aria-label='Medium'>
          <ion-icon name="document-outline"></ion-icon>
        </a>

        <a href='mailto:sandi@madiraju.io' target='_blank' rel='noopener noreferrer' aria-label='Contact'>
          <ion-icon name="mail-outline"></ion-icon>
        </a>

      </div>
    </div>
  );
}

export default App;