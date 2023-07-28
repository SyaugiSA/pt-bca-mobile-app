import * as React from 'react';
import { Button } from 'react-native-paper';
import { blue_primary, gray_primary } from '../../resource/colors';
import { styled } from 'nativewind';

const PrimaryButton = ({title, icon,mode,onPress,style}) => (
  <Button style={{
    borderRadius:5
  }} icon={icon} mode={mode} buttonColor={gray_primary} onPress={onPress}>
    {title}
  </Button>
);

export default PrimaryButton;