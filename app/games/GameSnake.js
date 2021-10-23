import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Constants from './Snake/Constants';
import Head from './Snake/components/Head';
import Food from './Snake/components/Food';
import Tail from './Snake/components/Tail';
import GameLoop from './Snake/systems/GameLoop';


export default function GameSnake({ navigation }) {
  const BoardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
  const engine = useRef(null);
  const [isGameRunning, setIsGameRunning] = useState(true);
  const randomPositions = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const resetGame = () => {
    engine.current.swap({
      head: {
        position: [Constants.GRID_SIZE / 2, Constants.GRID_SIZE / 2],
        size: Constants.CELL_SIZE,
        updateFrequency: 10,
        nextMove: 10,
        xspeed: 0,
        yspeed: -1,
        renderer: <Head />,
      },
      food: {
        position: [
          randomPositions(0, Constants.GRID_SIZE - 1),
          randomPositions(0, Constants.GRID_SIZE - 1),
        ],
        size: Constants.CELL_SIZE,
        updateFrequency: 10,
        nextMove: 10,
        xspeed: 0,
        yspeed: 0,
        renderer: <Food />,
      },
      tail: {
        size: Constants.CELL_SIZE,
        elements: [],
        renderer: <Tail />,
      },
    });
    setIsGameRunning(true);
  };

  return (
    <View style={styles.canvas}>
        <GameEngine
            ref={engine}
            style={{
              width: BoardSize,
              height: BoardSize,
              flex: null,
              backgroundColor: "white",
            }}
            entities={{
              head: {
                position: [Constants.GRID_SIZE / 2, Constants.GRID_SIZE / 2],
                size: Constants.CELL_SIZE,
                updateFrequency: 10,
                nextMove: 10,
                xspeed: 0,
                yspeed: -1,
                renderer: <Head />,
              },
              food: {
                position: [
                  randomPositions(0, Constants.GRID_SIZE - 1),
                  randomPositions(0, Constants.GRID_SIZE - 1),
                ],
                size: Constants.CELL_SIZE,
                renderer: <Food />,
              },
              tail: {
                size: Constants.CELL_SIZE,
                elements: [],
                renderer: <Tail />,
              },
            }}
            systems={[GameLoop]}
            running={isGameRunning}
            onEvent={(e) => {
              switch (e) {
                case "game-over":
                  alert("Game over!");
                  setIsGameRunning(false);
                  return;
              }
            }}
        />
        <View style={styles.controlContainer}>
          <View style={styles.controllerRow}>
            <TouchableOpacity style={styles.controlBtn} onPress={() => engine.current.dispatch("move-up")}>
              <Image style={styles.btnimg} source={require('./Snake/icons/arrow-up.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.controllerRow}>
            <TouchableOpacity style={styles.controlBtn} onPress={() => engine.current.dispatch("move-left")}>
              <Image style={styles.btnimg} source={require('./Snake/icons/arrow-left.png')} />
            </TouchableOpacity>

            <View style={[styles.controlBtn, { backgroundColor: null }]} />

            <TouchableOpacity style={styles.controlBtn} onPress={() => engine.current.dispatch("move-right")}>
              <Image style={styles.btnimg} source={require('./Snake/icons/arrow-right.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.controllerRow}>
            <TouchableOpacity style={styles.controlBtn} onPress={() => engine.current.dispatch("move-down")}>
              <Image style={styles.btnimg} source={require('./Snake/icons/arrow-down.png')} />
            </TouchableOpacity>
          </View>
        </View>

        {!isGameRunning && (
          <View style={styles.btnContainer}>

            <TouchableOpacity onPress={resetGame}>
              <Text
                style={{
                  color: "white",
                  marginTop: 0,
                  marginHorizontal: 5,
                  fontSize: 19,
                  padding: 10,
                  backgroundColor: "grey",
                  borderRadius: 15
                }}
              >

                Start New Game
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('GamesLandingPage')}>
              <Text
                style={{
                  color: "white",
                  marginTop: 0,
                  marginHorizontal: 5,
                  fontSize: 19,
                  padding: 10,
                  backgroundColor: "grey",
                  borderRadius: 15
                }}
              >

                Go Back
              </Text>
            </TouchableOpacity>

          </View>
        )}

    </View>  /* end of Canvas view */
  );
}  /* end of GameSnake() function */


// Styles
const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: "#495057",
    alignItems: "center",
    justifyContent: "center",
    },
  controlContainer: {
    marginTop: 10,
    },
  controllerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    },
  controlBtn: {
    backgroundColor: "#F2F3AE",
    width: 100,
    height: 100,
    borderRadius: 70/2,
    },
  btnimg: {
    justifyContent: 'center',
    alignSelf: 'center',
    },
  btnContainer: {
    flexDirection: 'row',
    },
});
