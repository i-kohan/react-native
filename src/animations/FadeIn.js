import React from 'react';
import { Animated } from 'react-native';

class TranslateYAndOpacity extends React.Component {
  state = {
    opacityValue: new Animated.Value(opacityMin),
    translateYValue: new Animated.Value(translateYMin),
  };

  componentDidMount() {
    this.show(this.props);
  }

  show(props) {
    // ...
    Animated.parallel([
      Animated.timing(opacityValue, { /* ... */ }),
      Animated.timing(translateYValue, { /*  ... */ }),
    ]).start();
  }

  hide(props) {
    // ...
    Animated.parallel([
      Animated.timing(opacityValue, { /* ... */ }),
      Animated.timing(translateYValue, { /*  ... */ }),
    ]).start();
  }

  render() {
    const { opacityValue, translateYValue } = this.state;

    const animatedStyle = {
      opacity: opacityValue,
      transform: [{ translateY: translateYValue }],
    };

    return (
      <Animated.View style={animatedStyle}>{this.props.children}</Animated.View>
    );
  }
}

export default TranslateYAndOpacity
