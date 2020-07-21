import chroma from 'chroma-js';
import sizes from './sizes';
export default {
  ColorBox: {
    width: '20%',
    height: (props) => (props.showingFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    fontSize: '1rem',
    '&:hover button': {
      opacity: 1,
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: (props) => (props.showingFullPalette ? '20%' : '33.333%'),
    },
    [sizes.down('md')]: {
      width: '50%',
      height: (props) => (props.showingFullPalette ? '10%' : '20%'),
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: (props) => (props.showingFullPalette ? '5%' : '10%'),
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.5
        ? 'rgba(255, 255, 255, 0.9)'
        : 'rgba(0, 0, 0, 0.7)',
    fontSize: '0.9rem',
    fontWeight: 500,
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5
        ? 'rgba(0, 0, 0, 0.6)'
        : 'rgba(255, 255, 255, 0.8)',
    background: 'rgba(255, 255, 255, 0.15)',
    position: 'absolute',
    border: 'none',
    right: 0,
    bottom: 0,
    width: '60px',
    height: '25px',
    textAlign: 'center',
    lineHeight: '25px',
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7
        ? 'rgba(0, 0, 0, 0.6)'
        : 'white',
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    textDecoration: 'none',
    opacity: 0,
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0,
    padding: '0 0 5px 10px',
    color: 'black',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  copyOverlay: {
    opacity: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)',
  },
  showOverlay: {
    opacity: 1,
    transform: 'scale(50)',
    zIndex: 10,
    position: 'absolute',
  },
  copyMessage: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '4rem',
    transform: 'scale(0.001)',
    opacity: 0,
    color: 'white',
    '& h1': {
      fontWeight: 400,
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: 0,
      padding: '1rem',
      textTransform: 'uppercase',
      [sizes.down('xs')]: {
        fontSize: '4rem',
      },
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: 100,
    },
  },
  showMessage: {
    opacity: 1,
    transform: 'scale(1)',
    zIndex: 25,
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
  },
};
