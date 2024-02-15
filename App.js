import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Audio } from 'expo-av';

const drumKit = {
  'bass1': require('./assets/sounds/Basses/BASSBrooding.wav'),
  'bass2': require('./assets/sounds/Basses/BASSUnstable.wav'),
  'bass3': require('./assets/sounds/Basses/REESEFaith.wav'),

  'drumLoop1': require('./assets/sounds/DrumLoops/DancehallDrumLoop.wav'),
  'drumLoop2': require('./assets/sounds/DrumLoops/TrapDrumLoop.wav'),
  'drumLoop3': require('./assets/sounds/DrumLoops/VariousDrumLoop.wav'),

  'drum1': require('./assets/sounds/DrumOneShots/Clap.wav'),
  'drum2': require('./assets/sounds/DrumOneShots/Crash.wav'),
  'drum3': require('./assets/sounds/DrumOneShots/Kick.wav'),
  'drum4': require('./assets/sounds/DrumOneShots/Ride.wav'),
  'drum5': require('./assets/sounds/DrumOneShots/Rimshot.wav'),
  'drum6': require('./assets/sounds/DrumOneShots/Shaker.wav'),
  'drum7': require('./assets/sounds/DrumOneShots/Snap.wav'),
  'drum8': require('./assets/sounds/DrumOneShots/Snare.wav'),

  'percussionLoop1': require('./assets/sounds/PercussionLoops/OrchidPercussionLoop1.wav'),
  'percussionLoop2': require('./assets/sounds/PercussionLoops/OrchidPercussionLoop2.wav'),
  'percussionLoop3': require('./assets/sounds/PercussionLoops/OrchidShakerLoop.wav'),

  'vocalLoop1': require('./assets/sounds/VocalLoops/BlueEyesVocal.wav'),
  'vocalLoop2': require('./assets/sounds/VocalLoops/DisneylandVocal.wav'),
  'vocalLoop3': require('./assets/sounds/VocalLoops/StefanieVocal.wav'),
}

const colors = {
  'bass': '#c0392b',
  'drumLoop': '#2980b9',
  'drum': '#34495e',
  'percussionLoop': '#8e44ad',
  'vocalLoop': '#d35400',
  //'': '#95a5a6',
}

export default class App extends React.Component {

  playSound = async drumKitSound => {
    try {
      const soundObject = new Audio.Sound();
      const path = drumKit[drumKitSound];
      await soundObject.loadAsync(path);
      await soundObject.playAsync().then(status => {
        console.log(status);
        setTimeout(() => {
          soundObject.unloadAsync().then(s => {
            console.log(s);
          });
        }, status.durationMillis);
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => {
            this.playSound('bass1');
          }} style={[{ backgroundColor: colors['bass'] }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.playSound('bass2');
          }} style={[{ backgroundColor: colors['bass'] }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.playSound('bass3');
          }} style={[{ backgroundColor: colors['bass'] }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.playSound('vocalLoop1');
          }} style={[{ backgroundColor: colors['vocalLoop'] }, styles.button]}>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => {
            this.playSound('drumLoop1');
          }} style={[{ backgroundColor: colors['drumLoop'] }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.playSound('drumLoop2');
          }} style={[{ backgroundColor: colors['drumLoop'] }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.playSound('drumLoop3');
          }} style={[{ backgroundColor: colors['drumLoop'] }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.playSound('vocalLoop2');
          }} style={[{ backgroundColor: colors['vocalLoop'] }, styles.button]}>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => {
            this.playSound('percussionLoop1');
          }} style={[{ backgroundColor: colors['percussionLoop'] }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.playSound('percussionLoop2');
          }} style={[{ backgroundColor: colors['percussionLoop'] }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.playSound('percussionLoop3');
          }} style={[{ backgroundColor: colors['percussionLoop'] }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.playSound('vocalLoop3');
          }} style={[{ backgroundColor: colors['vocalLoop'] }, styles.button]}>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => {
            this.playSound('drum1');
          }} style={[{ backgroundColor: colors['drum'] }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.playSound('drum2');
          }} style={[{ backgroundColor: colors['drum'] }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.playSound('drum3');
          }} style={[{ backgroundColor: colors['drum'] }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.playSound('drum4');
          }} style={[{ backgroundColor: colors['drum'] }, styles.button]}>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => {
            this.playSound('drum5');
          }} style={[{ backgroundColor: colors['drum'] }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.playSound('drum6');
          }} style={[{ backgroundColor: colors['drum'] }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.playSound('drum7');
          }} style={[{ backgroundColor: colors['drum'] }, styles.button]}>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.playSound('drum8');
          }} style={[{ backgroundColor: colors['drum'] }, styles.button]}>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    height: 75,
    margin: 10,
    borderRadius: 4
  }
});
