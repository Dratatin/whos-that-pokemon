import './app.scss';
import Pokeboule from "./assets/icons/pokeball.svg?react";

function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className='hero__wrapper'>
          <h1 className="hero__title"> 
            Pokesite  
            <Pokeboule className='hero__title__icon' />
          </h1>
        </div>    
        <div className="hero__illustration">
          <div className="hero__illustration__layer"></div>
          <img src="./src/assets/images/app-illustration.jpg" alt="Illustration de Pikachu" />
        </div>
      </section>
    </div>
  )
}

export default App