import React from 'react';
import { i18n } from '../Translate/i18n'

function Footer() {
  return (
    <>
    <small
        style={{
          color: '#C2FBFF',
          textAlign: 'center',
          fontSize: 20,
          display: "block",
          margin: "40px 10px 10px 10px",
          fontFamily: " 'Bebas Neue', cursive "
        }}
      >
        {i18n.t('footer.cp')}
      </small>
    </>
  );
}

export default Footer;
