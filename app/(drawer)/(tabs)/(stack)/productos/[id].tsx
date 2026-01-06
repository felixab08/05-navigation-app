import products from "@/app/store/products.store";
import { Redirect, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((item) => item.id === id);
  if (!product) {
    return <Redirect href="/(stack)/productos" />;
  }

  return (
    <View className="mt-5 mx-2.5">
      <Text className="text-2xl font-work-black">{product.title}</Text>
      <Text className="text-xl">{product.description}</Text>
      <View className="flex flex-row justify-end mt-2">
        <Text className="text-lg font-work-black">S/. {product.price}</Text>
      </View>
      <View className="h-1 bg-gray-200 my-2"></View>
    </View>
  );
};

export default ProductScreen;
