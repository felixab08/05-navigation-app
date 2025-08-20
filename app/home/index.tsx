import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

const HomeScreen = () => {
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
