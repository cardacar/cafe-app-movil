import React, { useState } from "react";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
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
  MsBox,
  Line,
  ExtraView,
  Extratext,
  TextLink,
  TextLinkContent
} from "../components/styles";
import GranosCafe from "../assets/granosCafe.png";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { View } from "react-native";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={GranosCafe} />
        <PageTitle>ChorroCafé</PageTitle>
        <SubTitle>Login</SubTitle>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Correo electronico"
                icon="mail"
                placeholder="example@gmail.com"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyBoardType="email-address"
              />
              <MyTextInput
                label="Contraseña"
                icon="lock"
                placeholder="* * * * * * * * *"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsBox>...</MsBox>
              <StyledButton onPress={handleSubmit}>
                  <ButtonText>
                      Iniciar Sesion
                  </ButtonText>
              </StyledButton>
              <Line/>
              <StyledButton google={true} onPress={handleSubmit}>
                  <Fontisto name="google" color={Colors.pimary} size={25}/>
                  <ButtonText google={true}>
                      Iniciar sesion con Google
                  </ButtonText>
              </StyledButton>
              <ExtraView>
                  <Extratext>No tienes cuenta? 
                  </Extratext>
                  <TextLink>
                      <TextLinkContent>Crear cuenta</TextLinkContent>
                  </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
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

export default Login;
