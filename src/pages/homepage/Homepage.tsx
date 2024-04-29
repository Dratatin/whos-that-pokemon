import "./Homepage.scss"
import DecoratedCta from "../../components/DecoratedCta/DecoratedCta"
import Pokeboule from "../../assets/icons/pokeball.svg?react";

function Homepage() {
    return (
        <section className="homepage">
          <div className="homepage__wrapper">
            <h1 className="homepage__title"> 
              Pokesite  
              <Pokeboule className='homepage__title__icon' />
            </h1>
            <DecoratedCta link={{path: "/pokedex"}} label="Accéder au site" />
          </div>    
          <div className="homepage__illustration">
            <div className="homepage__illustration__layer"></div>
            <img src="./src/assets/images/app-illustration.jpg" alt="Illustration de Pikachu" />
          </div>
        </section>
    )
  }
  
  export default Homepage