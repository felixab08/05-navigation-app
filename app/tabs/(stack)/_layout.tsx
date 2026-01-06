import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f8f9fa" },
        headerTintColor: "#212529",
        headerTitleStyle: { fontWeight: "bold" },
        headerShown: false,
        contentStyle: { backgroundColor: "#f8f9fa" },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{ title: "Inicio", animation: "ios_from_left" }}
      />
      <Stack.Screen
        name="productos/index"
        options={{ title: "Productos", animation: "fade_from_bottom" }}
      />
      <Stack.Screen
        name="productos/[id]"
        options={{
          title: "Detalle del Producto",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{ title: "Perfil", animation: "simple_push" }}
      />
      <Stack.Screen
        name="settings/index"
        options={{ title: "Ajustes", animation: "flip" }}
      />
    </Stack>
  );
};

export default StackLayout;
