import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Button from '@mui/material/Button';

import { i18n } from '../../Translate/i18n'

function Investtools() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
    width: 400,
    border: '2px solid #fff',
    p: 2,
    px: 4,
    pb: 3,
    backgroundImage: "linear-gradient(to bottom, #2D0065, #450063, #5D0060)",
    backgroundClip: "content-box",
    webkitBackgroundClip: "content-box",
    webkitTextFillColor: "transparent",
    //height: "400px",
    color: "#FFF",
    fontFamily: " 'Roboto Mono', monospace ",
    fontSize: "14px",
    lineHeight: "32px",
    width: "70%"
};

const button = {
  fontFamily: " 'Roboto Mono', monospace ",
  fontSize: '18px',
  background: '#9A0578'
}

  return (
    <div>
      <Button sx={button} variant="contained" type="button" onClick={handleOpen}>
        {i18n.t('exp.btn')}
      </Button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
            <h1 style={{textAlign: "center"}}>{i18n.t('expInvesttools.title')}</h1>
              <h3 style={{textAlign: "center"}}>{i18n.t('expInvesttools.temp')}</h3>
              <p style={{padding: 20}}>{i18n.t('expInvesttools.desc')}</p>
              <h3 style={{paddingLeft: 20}}>{i18n.t('expInvesttools.tec')}</h3>
              <h3 style={{paddingLeft: 20}}>{i18n.t('expInvesttools.metod')}</h3>
              <h3 style={{paddingLeft: 20}}>{i18n.t('expInvesttools.ferramentas')}</h3>
        </Box>
      </StyledModal>
    </div>
  );
}

  export default Investtools;