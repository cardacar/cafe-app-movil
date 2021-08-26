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
  TextLinkContent,
} from "../components/styles";
import GranosCafe from "../assets/granosCafe.png";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { View, TouchableOpacity } from "react-native";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

const SignUp = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  //actual date of birtdathe
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={GranosCafe} />
        <PageTitle>ChorroCafé</PageTitle>
        <SubTitle>Registrarse</SubTitle>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <Formik
          initialValues={{
            fullName: "",
            date: "",
            email: "",
            password: "",
            confirm: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Nombre Completo"
                icon="person"
                placeholder="Carlos Quiros"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />
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
                label="Fecha de nacimiento"
                icon="calendar"
                placeholder="YYYY - MM - DD"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange("dateOfBirth")}
                onBlur={handleBlur("dateOfBirth")}
                value={dob ? dob.toDateString() : ""}
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
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
              <MyTextInput
                label="Confirmar Contraseña"
                icon="lock"
                placeholder="* * * * * * * * *"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange("confirm")}
                onBlur={handleBlur("confirm")}
                value={values.confirm}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsBox>...</MsBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Iniciar Sesion</ButtonText>
              </StyledButton>
              <Line />
              <StyledButton google={true} onPress={handleSubmit}>
                <Fontisto name="google" color={Colors.pimary} size={25} />
                <ButtonText google={true}>Iniciar sesion con Google</ButtonText>
              </StyledButton>
              <ExtraView>
                <Extratext>Tienes cuenta?</Extratext>
                <TextLink>
                  <TextLinkContent>Iniciar sesion</TextLinkContent>
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
  isDate,
  showDatePicker,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={Colors.brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {/* <StyledTextInput {...props} /> */}
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
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

export default SignUp;
