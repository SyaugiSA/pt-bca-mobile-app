import * as React from "react";
import { TextInput } from "react-native-paper";

const InputCustom = ({
  label,
  value,
  onChangeText,
  keyboardType,
  isSecureTextEntry = false,
  disabled,
  iconRight,
}) => {
  return (
    <TextInput
      label={label}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={isSecureTextEntry}
      onChangeText={onChangeText}
      disabled={disabled}
      right={iconRight}
    />
  );
};

export default InputCustom;