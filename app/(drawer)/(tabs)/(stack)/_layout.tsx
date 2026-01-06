import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      console.log('valor de entrada=', StackActions);

      navigation.dispatch(StackActions.pop());
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer)
  }
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f8f9fa" },
        headerTintColor: "#212529",
        headerTitleStyle: { fontWeight: "bold" },
        // headerShown: true,
        contentStyle: { backgroundColor: "#f8f9fa" },
        headerShadowVisible: false,
        headerLeft: ({ tintColor, canGoBack }) => <Ionicons name={canGoBack ? "arrow-back-outline" : "grid-outline"} size={20} className="mr-5" onPress={() => onHeaderLeftClick(canGoBack)} />
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
