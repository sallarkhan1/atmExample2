import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {ATM, Slider} from './src/component';
import OneSignal from 'react-native-onesignal';

class App extends React.Component {
  constructor(props) {
    super(props);
    //  OneSignal.init('06540897-9eda-4781-9787-43acb82d4fd5')
    // ///////
    // OneSignal.setLogLevel(6, 0);
    // OneSignal.init('06540897-9eda-4781-9787-43acb82d4fd5', {
    //   kOSSettingsKeyAutoPrompt: false,
    //   kOSSettingsKeyInAppLaunchURL: false,
    //   kOSSettingsKeyInFocusDisplayOption: 2,
    // });
    // OneSignal.inFocusDisplaying(2);

    // OneSignal.addEventListener('received', onReceived);
    // OneSignal.addEventListener('opened', onOpened);
    // OneSignal.addEventListener('ids', onIds);
  }

  componentDidMount() {
    //  OneSignal.setLogLevel(6, 0);
    OneSignal.init('06540897-9eda-4781-9787-43acb82d4fd5', {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOption: 2,
    });
    OneSignal.inFocusDisplaying(2);
    OneSignal.SetLogLevel(OneSignal.LOG_LEVEL.DEBUG, OneSignal.LOG_LEVEL.DEBUG);
  }
  render() {
    return (
      <>
        <View
          style={{
            //  backgroundColor:'red',
            // flex:1
            height: '100%',
            width: '100%',
          }}></View>
        {/* <ATM /> */}
        {/* <Slider /> */}
      </>
    );
  }
}

export default App;

const styles = StyleSheet.create({});
