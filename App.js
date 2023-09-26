import React from "react";
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import StateWithClassComponent from './StateWithClassComponent';
import StateWithFuctionalComponent from './StateWithFuctionalComponent';
import UseEffectWithClassComponent from './UseEffectWithClassComponent';
import UseEffectWithFunctionalComponent from './UseEffectWithFunctionalComponent';

export default function App() {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <View style={styles.container}>
        {/* <StateWithClassComponent /> */}
        {/* <StateWithFuctionalComponent /> */}
        {isTrue ? <UseEffectWithClassComponent /> : null}
        {/* {isTrue && <UseEffectWithClassComponent />} */}
        {/* <UseEffectWithFunctionalComponent /> */}

        <Button title="toggle" onPress={() => setIsTrue(!isTrue)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
