import React from "react";
import "../App.css";
import "./Cards.css";

function Cards() {
  return (
    <>
    <div id="portfolio"><h1>Portfolio</h1></div>
    <div className="content">
    <div className="card">
      <h1>Store</h1>
      <p>This is an online store using HTML, SASS and some Javascript for the sliders and the menu. The design is responsive for mobiles, tables and desktop sizes. The store make use of the queries on css in order to be responsive for mobiles, tables and desktop.</p>
      <a href="https://oscarandio.github.io/Luxury-fashion-accesories-store/" target="_blank" rel="noreferrer"><button>See how it works</button></a>

    </div>
    
    <div className="picture">
      <img
              src="https://raw.githubusercontent.com/Oscarandio/Luxury-fashion-accesories-store/main/images/main.jpg"
              alt="Weather"
            ></img>

    </div>

  </div>

   <div className="content">
    <div className="card">
      <h1>Weather App</h1>
      <p>This weather app has the peculiarity of show background pictures related with the city you search. If you search Barcelona city, you will see a background picture related to this city. This app makes use of Fetch API data to get information not only about the weather but also other information such as the wind.  You can also change between Celsius or Farenheit.</p>
      <a href="https://oscarandio.github.io/Aplicacion-del-tiempo/" target="_blank" rel="noreferrer"><button>See how it works</button></a>

    </div>
    
    <div class="picture">
      <img
              src="https://raw.githubusercontent.com/Oscarandio/Aplicacion-del-tiempo/main/public/updated.jpg"
              alt="Weather"
            ></img>

    </div>

    

    
    
  </div>

  <div className="content">
    <div className="card">
      <h1>Sass Project</h1>
      <p>This a small website to learn about the CSS Preprocessor Sass. It has an Installation page and a tutorial. The tutorial shows Sass concepts within an accordeon made with Javascript. This way you can find quickly what you want.</p>
      <a target="_blank" rel="noreferrer" href="https://oscarandio.github.io/Learn-sass/"><button>See how it works</button></a>

    </div>
    
    <div className="picture">
      <img
              src="https://raw.githubusercontent.com/Oscarandio/Learn-sass/main/public/learn.jpg"
              alt="Weather"
            ></img>

    </div>

    

    
    
  </div>

  </>
  );
}

export default Cards;
