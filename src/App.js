import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import SpeechRecognition from "react-speech-recognition";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
  },
}));

function toggleListen(){
  this.state = { listening: false }
  this.setState = ({
    listening: !this.state.listening
  })
}

function App({ transcript, listening, startListening, stopListening, resetTranscript }) {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        Voice Recognition Tool
        <div className="button-group">
          <Button className={classes.button} onClick={resetTranscript}>Reset</Button>
          <Button color="primary" className={classes.button} onClick={startListening}>
            Start
        </Button>
          <Button color="secondary" className={classes.button} onClick={stopListening}>
            Stop
        </Button>
        </div>
      </header>
      <p className="p">
        {transcript}
      </p>
    </div>
  );
}

export default SpeechRecognition(App);
