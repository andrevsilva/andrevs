import React from 'react';
import Espaco from './modal/espaco';
import Urb9 from './modal/urb9'
import Investtools from './modal/investtools';

import Typewriter from 'typewriter-effect';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { i18n } from '../Translate/i18n'

function Exp() {

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundImage: "linear-gradient(to bottom, #2D0065, #450063, #5D0060)",
    backgroundClip: "content-box",
    webkitBackgroundClip: "content-box",
    webkitTextFillColor: "transparent",
    color: "#FFF",
    fontFamily: " 'Roboto Mono', monospace ",
    fontSize: "14px",
    lineHeight: "32px",
    padding: "30px",
    height: "300px"
  }));

  const espaco = require('./img/logo_espaco_g.webp')
  const urb9 = require('./img/urb9.png')
  const investtools = require('./img/ivt.png')
  
  return (
    <Box style={{marginTop: "200px"}} sx={{ width: '100%' }}>
      <h1
        style={{
          backgroundImage: 'linear-gradient(to bottom, #2D0065, #450063, #5D0060)',
          color: '#fff',
          backgroundClip: 'text',
          webkitBackgroundClip: 'text',
          fontFamily: " 'Roboto Mono', monospace ",
          fontSize: "min(90px, 10vw)",
          webkitTextFillColor: 'transparent',
          textAlign: 'center'
        }}
      >
        <Typewriter 
          options={{
            strings: [i18n.t(`exp.title`)],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
        <Grid item xs={4} md={4}>
          <Item>
            <img src={espaco} alt="" style={{width: 150, padding: '15px'}}/>
            <Espaco />
          </Item>
        </Grid>
        <Grid item xs={4} md={4}>
          <Item>
            <img src={urb9} alt="" style={{width: 150, padding: '15px'}} />
            <Urb9 />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src={investtools} alt="" style={{width: 150, padding: '15px'}} />
            <Investtools />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Exp;
