import React from 'react';

import Typewriter from 'typewriter-effect';

import { i18n } from '../Translate/i18n'

function Header() {

  const cyberpunkImg = require('./img/pixel-jeff-clipa-s.gif')
  const brasil = require('./img/Bandeira-do-Brasil-PNG.png')
  const eua = require('./img/25008b43d004c918268141415187d573.webp')

  const I18N_STORAGE_KEY = 'i18nextLng'

  const handleSelectChange = event => {
    localStorage.setItem(
      I18N_STORAGE_KEY,
      event.target.value
    )
    window.location = window.location.href
  }

  return (
    <>
      <div style={{
          backgroundImage: `url(${cyberpunkImg})`,
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          width: "100w", 
          height: "90vh",
          backgroundRepeat: "no-repeat",
          top: 0
        }}
      >
        <button onClick={handleSelectChange} value="pt-BR" style={{backgroundImage: `url(${brasil})` , width: '56px' , height: '4vh' , borderRadius: "50px" , border: "none" , backgroundSize: "cover" , backgroundPosition: "center" , cursor: "pointer" , margin: 15}}></button>
        <button onClick={handleSelectChange} value="en-US" style={{backgroundImage: `url(${eua})` , width: '56px' , height: '4vh' , borderRadius: "50px" , border: "none" , backgroundSize: "cover" , backgroundPosition: "center" , cursor: "pointer"}}></button>
        <h1 
          style={{
            fontSize: "min(120px, 10vw)", 
            textAlign: "center", 
            position: "relative", 
            top: "200px",
            fontFamily: " 'Bebas Neue', cursive ",
            color: "#C2FBFF",
          }}>
          <Typewriter 
            options={{
              strings: [i18n.t(`slogan.text`) , i18n.t(`slogan.text2`)],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div> 
    </>
  );
}

export default Header;
