import { products } from "@/app/store/products.store";
import CustomButton from "@/components/shared/CustomButton";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-2">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-5 mx-2.5">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="text-xl">{item.description}</Text>
            <View className="flex flex-row justify-between mt-2">
              <Text className="text-lg font-work-black">S/. {item.price}</Text>
              <Link href={`/productos/${item.id}`} asChild>
                <CustomButton variant="text-only" color="primary">
                  Ver detalle
                </CustomButton>
              </Link>
            </View>
            <View className="h-1 bg-gray-200 my-2"></View>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default ProductsScreen;
