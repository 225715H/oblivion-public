import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CardEditNavigatorStackParamList } from "../types/navigation";
import CardEditScreen from "../screens/cardEdit/cardEdit";
import { TouchableIcon } from "../components/atoms/touchableIcon";
import { LoadImage } from "../utils/loadImages";
import { useCardEdit } from "../context/cardEditContext";

const CardEditNavigatorStack =
  createNativeStackNavigator<CardEditNavigatorStackParamList>();

const CardEditNavigator: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { setCardEdit } = useCardEdit();
  return (
    <CardEditNavigatorStack.Navigator>
      <CardEditNavigatorStack.Screen
        name="CardEditScreen"
        component={CardEditScreen}
        options={{
          headerRight: () => (
            <TouchableIcon
              imageSource={LoadImage.crossIcon}
              onPress={() => {
                setCardEdit(null);
                navigation.goBack();
              }}
              backgroundColor="transparent"
            />
          ),
        }}
      />
    </CardEditNavigatorStack.Navigator>
  );
};

export default CardEditNavigator;
