import { Redirect } from "expo-router";

const App = () => {
  return <Redirect href="/(stack)/home" />;

  // return (
  // <SafeAreaView>
  //   <View className="mt-5 mx-2.5">
  //     <Text className="text-5xl" style={{ fontFamily: "WorkSans-Black" }}>
  //       Hola Mundo
  //     </Text>
  //     <Text className="text-4xl font-work-black text-primary">
  //       Hola Mundo
  //     </Text>
  //     <Text className="text-3xl font-work-medium text-secondary-400">
  //       Hola Mundo
  //     </Text>
  //     <Text className="text-2xl font-work-light text-tertiary/50">
  //       Hola Mundo tertiary
  //     </Text>
  //     <Text className="text-xl">Hola Mundo</Text>
  //     <Link href="/productos">Productos</Link>
  //   </View>
  // </SafeAreaView>
  // );
};

export default App;
