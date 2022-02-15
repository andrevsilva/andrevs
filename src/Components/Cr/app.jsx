import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import { i18n } from '../Translate/i18n'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn , faWhatsapp , faGithub} from '@fortawesome/free-brands-svg-icons'

function Cr() {

  const contato = require('./img/rain-pixel.gif')

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundImage: "linear-gradient(to bottom, #2D0065, #450063, #5D0060)",
    backgroundClip: "content-box",
    webkitBackgroundClip: "content-box",
    webkitTextFillColor: "transparent",
    minHeight: "400px",
    color: "#FFF",
    fontFamily: " 'Roboto Mono', monospace ",
    fontSize: "18px",
    lineHeight: "32px",
    //padding: "30px"
  }));

  return (
    <>
      <Box style={{marginTop: "200px"}} sx={{ width: '100%' }}>
        <Grid container spacing={2}>
          
          <Grid item xs={12} md={4}>
            <Item style={{
              backgroundImage: `url(${contato})`, 
              backgroundSize: "cover", 
              backgroundPosition: "center", 
              backgroundRepeat: "no-repeat"}}>
            </Item>
          </Grid>

          <Grid item xs={12} md={8}>
            <Item>
              <h1>{i18n.t('contato.title')}</h1>
              <p style={{padding: "10px"}}>{i18n.t('contato.text')}</p>
              <p style={{padding: "10px"}}><FontAwesomeIcon icon={faLinkedinIn} size="2x"/>  https://www.linkedin.com/in/andré-silva-5b054a15b/</p>
              <p style={{padding: "10px"}}><FontAwesomeIcon icon={faGithub} size="2x"/>  https://github.com/andrevsilva</p>
              <p style={{padding: "10px"}}><FontAwesomeIcon icon={faWhatsapp} size="2x"/>  21 982501010</p>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Cr;
