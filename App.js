import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, {
      flexDirection: "row"
    }]}>
      <View style={{ flex: 3, backgroundColor: 'green' }}></View>
      <View style={{ flex: 2, backgroundColor: 'red' }}></View>
      <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});