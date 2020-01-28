import {StyleSheet} from 'react-native';
import styleGuide from '../../utils/styleGuide';
import {heightRatio, widthRatio} from '../../utils/stylesheet';

const styles = StyleSheet.create({
  heading: {
    fontSize: heightRatio * 35,
    color: styleGuide.textColor,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: heightRatio * 200,
  },
});

export default styles;
