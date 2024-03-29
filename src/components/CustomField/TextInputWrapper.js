import React, { useEffect, useRef, forwardRef, memo } from "react";
import { Animated, StyleSheet, TextInput } from "react-native";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const TextInputWrapper = (
  {
    _onBlur,
    _onFocus,
    nameTapped,
    handleChange,
    textInputId,
    placeholder,
    value,
    defaultValue,
    textInputOpacity,
    nameEntered,
    editValue,
    textInputProps,
  },
  ref
) => {
  const textInputPosition = useRef(
    new Animated.ValueXY({ x: 0, y: 0 })
  ).current;

  useEffect(() => {
    if (nameEntered) {
      Animated.spring(textInputPosition, {
        toValue: { x: -10, y: -12 },
        damping: 20,
        mass: 1,
        stiffness: 120,
      }).start();
    }
    if (editValue) {
      Animated.spring(textInputPosition, {
        toValue: { x: 0, y: 0 },
        damping: 20,
        mass: 1,
        stiffness: 120,
      }).start();
    }
  }, [nameEntered, editValue, textInputPosition]);

  const backgroundInterpolate = textInputPosition.x.interpolate({
    inputRange: [-10, 0],
    outputRange: ["#FFFFFF", "#ffffff"],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={{
        opacity: textInputOpacity,
        transform: [
          {
            translateX: textInputPosition.x,
          },
          {
            translateY: textInputPosition.y,
          },
        ],
      }}
    >
      <AnimatedTextInput
        value={value}
        ref={ref}
        defaultValue={defaultValue || ""}
        onBlur={_onBlur}
        editable={editValue}
        onFocus={_onFocus}
        onChangeText={(value) => handleChange(textInputId, value)}
        style={[
          TextInputWrapperStyles.textInput,
          {
            backgroundColor: backgroundInterpolate,
          },
        ]}
        placeholder={placeholder}
        {...textInputProps}
      />
    </Animated.View>
  );
};

const TextInputWrapperStyles = StyleSheet.create({
  textInput: {
    marginTop: 10,
    padding: 10,
    height: 40,
    fontSize: 18,
  },
});

export default memo(forwardRef(TextInputWrapper));
