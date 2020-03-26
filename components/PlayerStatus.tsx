import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BeerMug from '../components/BeerMug';
import Dice from './Dice';
import Icon from 'react-native-vector-icons/FontAwesome';

const iconSize = 28;

export default function PlayerStatus({playerName, cupFilled, beerNr, currentNumber}) {
  return (
    <View>
        <View style={styles.container}>
          <View style={styles.descriptionContainer}>
            <View style={[styles.outerIconCircle, {backgroundColor: 'rgb(246, 252, 252)'}]}>
              <View style={[styles.iconCircle, {backgroundColor: 'rgb(229, 247, 246)'}]}>
                <Icon name="user" size={iconSize} color='rgb(77, 217, 211)'></Icon>
              </View>
            </View>
            <Text style={styles.descriptionText}>Spieler:</Text>
            <Text style={styles.descriptionText}>{playerName}</Text>
          </View>
          
          <View style={styles.descriptionContainer}>
            <View style={[styles.outerIconCircle, {backgroundColor: 'rgb(252, 248, 253)'}]}>
              <View style={[styles.iconCircle, {backgroundColor: 'rgb(247, 233, 250)'}]}>
                <Dice currentNumber={currentNumber} diceSize={iconSize}></Dice>
              </View>
            </View>
            <Text style={styles.descriptionText}>Augenzahl:</Text>
            <Text style={styles.descriptionText}>{currentNumber}</Text>

          </View>

          <View style={styles.descriptionContainer}>
            <View style={[styles.outerIconCircle, {backgroundColor: 'rgb(252, 248, 253)'}]}>
              <View style={[styles.iconCircle, {backgroundColor: 'rgb(255, 228, 239)'}]}>
                <BeerMug percentageFilled={cupFilled}></BeerMug>
              </View>
            </View>
            <Text style={styles.descriptionText}>Füllstand:</Text>
            <Text style={styles.descriptionText}>{cupFilled}%</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <View style={[styles.outerIconCircle, {backgroundColor: 'rgb(245, 251, 254)'}]}>
              <View style={[styles.iconCircle, {backgroundColor: 'rgb(226, 246, 254)'}]}>
                <Icon name="bar-chart" size={iconSize} color='rgb(121, 193, 239)'></Icon>
              </View>
            </View>
            <Text style={styles.descriptionText}>Getrunken:</Text>
            <Text style={styles.descriptionText}>{beerNr}tes Getränk</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <View style={[styles.outerIconCircle, {backgroundColor: 'rgb(250, 249, 254)'}]}>
              <View style={[styles.iconCircle, {backgroundColor: 'rgb(241, 236, 253)'}]}>
                <Icon name="refresh" size={iconSize} color='rgb(162, 121, 239)'></Icon>
              </View>
            </View>
            <Text style={styles.descriptionText}>todo</Text>
            <Text style={styles.descriptionText}>todo</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <View style={[styles.outerIconCircle, {backgroundColor: 'rgb(247, 248, 253)'}]}>
              <View style={[styles.iconCircle, {backgroundColor: 'rgb(231, 235, 251)'}]}>
                <Icon name="warning" size={iconSize} color='rgb(121, 145, 239)'></Icon>
              </View>
            </View>
            <Text style={styles.descriptionText}>Austrinken</Text>
            <Text style={styles.descriptionText}>muss leer sein</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 3,
    paddingRight: 3,
    marginTop: 5,
    marginBottom: 5, 
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'baseline',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5
  },
  statusContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  descriptionText: {
      color: 'rgb(152, 153, 161)',
      fontSize: 8
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
    marginBottom: 3,
    marginTop: 3
  },
  iconCircle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    width: iconSize + iconSize * 0.666,
    height: iconSize + iconSize * 0.666,
    borderRadius: 50,
    overflow: 'hidden',

  },
  outerIconCircle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    width: iconSize + iconSize,
    height: iconSize + iconSize,
    borderRadius: 50,
    overflow: 'hidden',
  }
});
