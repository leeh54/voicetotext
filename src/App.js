import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import SpeechRecognition from "react-speech-recognition";
import { makeStyles } from '@material-ui/core/styles';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import DeleteIcon from '@material-ui/icons/Delete';
import StopIcon from '@material-ui/icons/Stop';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

firebase.initializeApp({
  apiKey: "AIzaSyDLMq0iTd5n6k_96ZJu7RBMii6caz8KOUE",
  authDomain: "voicetotext-622f9.firebaseapp.com",
  databaseURL: "https://voicetotext-622f9.firebaseio.com",
  projectId: "voicetotext-622f9",
  storageBucket: "voicetotext-622f9.appspot.com",
  messagingSenderId: "336825154148",
  appId: "1:336825154148:web:7fd16d4bd5d066e3"
});

const db = firebase.firestore();

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
  },
}));

const options = {
  autoStart: false
}

function App({ transcript, finalTranscript, startListening, stopListening, resetTranscript }) {
  const classes = useStyles();
  const data = {
    finalTranscript
  }
  db.collection("text").doc().set(data)

  return (

    <div className="App">
      <header className="App-header">
        Voice Recognition Tool
        <div className="button-group">
          <Button className={classes.button} onClick={resetTranscript}>
            <DeleteIcon className={classes.rightIcon} />
            Reset
          </Button>
          <Button color="primary" className={classes.button} onClick={startListening}>
            <KeyboardVoiceIcon className={classes.leftIcon} />
            Start
        </Button>
          <Button color="secondary" className={classes.button} onClick={stopListening}>
            <StopIcon className={classes.rightIcon} />
            Stop
        </Button>
        </div>
      </header>
      <p className="p">
        {transcript}
        {/* {console.log(finalTranscript)} */}
      </p>
    </div>
  );
}

export default SpeechRecognition(options)(App);