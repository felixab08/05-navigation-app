import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation()
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  }

  return (
    <SafeAreaView>
      <View className="mt-5 mx-2.5 p-10">
        <Text className="text-primary mb-5 font-work-black font-bold">
          HomeScreen
        </Text>

        <CustomButton color="primary" onPress={() => router.push("/productos")}>
          Productos
        </CustomButton>
        <CustomButton
          variant="text-only"
          color="secondary"
          className="mt-5"
          onPress={() => router.push("/profile")}
        >
          Profile
        </CustomButton>
        <CustomButton
          variant="contained"
          color="tertiary"
          onPress={() => router.push("/settings")}
        >
          Settings
        </CustomButton>
        {/* links */}

        <Link href={"/productos"} className="mb-5 ml-5" asChild>
          <CustomButton color="primary">Productos</CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer}> Abrir Menu</CustomButton>


        {/* fin de link */}
        {/* <Link className="mb-5 ml-5" href="/productos">
          Products
        </Link>
        <Link className="mb-5 ml-5" href="/settings">
          Settings
        </Link>
        <Link className="mb-5 ml-5" href="/profile">
          Profile
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
