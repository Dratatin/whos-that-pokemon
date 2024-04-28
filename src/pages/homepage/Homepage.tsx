import "./homepage.scss"
import DecoratedCta from "../../components/DecoratedCta/DecoratedCta"
import Pokeboule from "../../assets/icons/pokeball.svg?react";

function Homepage() {
    return (
        <section className="hero">
          <div className="hero__wrapper">
            <h1 className="hero__title"> 
              Pokesite  
              <Pokeboule className='hero__title__icon' />
            </h1>
            <DecoratedCta link={{path: "/panel"}} label="Accéder au site" />
          </div>    
          <div className="hero__illustration">
            <div className="hero__illustration__layer"></div>
            <img src="./src/assets/images/app-illustration.jpg" alt="Illustration de Pikachu" />
          </div>
        </section>
    )
  }
  
  export default Homepage