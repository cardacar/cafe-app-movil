import React, { useState } from "react";
import {
  WelcomeContainer,
  WelcomeImage,
  Avatar,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RigthtIcon,
  StyledInputLabel,
  StyledTextInput,
  Colors,
  StyledButton,
  ButtonText,
  Line,
  InnerContainer,
} from "../components/styles";
import GranosCafe from "../assets/granosCafe.png";
import FondoCafe from "../assets/FondoCafe.jpeg"
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Octicons, Ionicons } from "@expo/vector-icons";

const Welcome = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <>
      <StatusBar style="dark" />
      <InnerContainer>
          <WelcomeImage resizeMode="cover" source={FondoCafe}/>
        <PageTitle welcome={true}>Bienvenido!!</PageTitle>
        <SubTitle welcome={true}>Otalvaro Ospina</SubTitle>
        <SubTitle welcome={true}>Ayuda@udea.edu.co</SubTitle>
        <WelcomeContainer>
            <StyledFormArea>
                <Avatar resizeMode="cover" source={GranosCafe}/>
                <Line/>
                <StyledButton onPress={()=>{}}>
                    <ButtonText>Iniciar Sesion</ButtonText>
                </StyledButton>
            </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={Colors.brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RigthtIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={Colors.darkLight}
          />
        </RigthtIcon>
      )}
    </View>
  );
};

export default Welcome;
