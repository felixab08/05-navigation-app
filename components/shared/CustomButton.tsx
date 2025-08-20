import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface CustomButtonProps extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  variant?: "contained" | "text-only";
  className?: string;
}

const CustomButton = ({
  children,
  color = "primary",
  variant = "contained",
  className,
  onPress,
  onLongPress,
}: CustomButtonProps) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];
  const textColor = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  }[color];
  const borderColor = {
    primary: "border-primary",
    secondary: "border-secondary",
    tertiary: "border-tertiary",
  }[color];

  if (variant === "text-only") {
    return (
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        className={`p-3 mt-5 border-2 ${borderColor} rounded-md active:opacity-75 ${className}`}
      >
        <Text className={`text-center ${textColor} font-work-medium`}>
          {children}
        </Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className={`p-3 rounded-md ${btnColor} active:opacity-75 mt-5 ${className}`}
    >
      <Text className="text-white text-center">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
