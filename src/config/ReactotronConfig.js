import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure().useReactNative().connect({
    enabled: true,
    host: '192.168.1.7', // server ip
    port: 9090,
  });

  // eslint-disable-next-line no-console
  console.tron = tron;

  tron.clear();
}
