import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import Typewriter from 'typewriter-effect';

import { i18n } from '../Translate/i18n'

function My() {

  const my = require('./img/68747470733a2f2f63646e612e61727473746174696f6e2e636f6d2f702f6173736574732f696d616765732f696d616765732f3032382f3130322f3035382f6f726967696e616c2f706978656c2d6a6566662d6d61747269782d732e6769663f313539.gif')

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundImage: "linear-gradient(to bottom, #2D0065, #450063, #5D0060)",
    backgroundClip: "content-box",
    webkitBackgroundClip: "content-box",
    webkitTextFillColor: "transparent",
    minHeight: "400px",
    color: "#FFF",
    fontFamily: " 'Roboto Mono', monospace ",
    fontSize: "18px",
    lineHeight: "32px",
  }));

  return (
    <>
      <Box style={{marginTop: "50px"}} sx={{ width: '100%' }}>
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
            strings: [i18n.t(`eu.title`)],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
        
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Item style={{
              backgroundImage: `url(${my})`, 
              backgroundSize: "cover", 
              backgroundPosition: "center", 
              backgroundRepeat: "no-repeat"}}>
            </Item>
          </Grid>

          <Grid item xs={12} md={8}>
            <Item>
              <p style={{padding: "10px"}}>{i18n.t('eu.text')}</p>
            </Item>
          </Grid>

        </Grid>
      </Box>
    </>
  );
}

export default My;
