import styled from "styled-components/native";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

//Obtengo la altura de la barra de estado
const StatusBarHeigth = Constants.statusBarHeight;

export const Colors = {
  primary: "#ffffff",
  secondary: "#efefef",
  tertiary: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#6B381B",
  blue: "#080DDB",
  red: "#EF4444",
};

const { primary, secondary, tertiary, darkLight, brand, blue, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeigth + 10}px;
  background-color: ${primary};
`
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px
`

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
`

export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;

    ${(props)=> props.welcome &&`
      font-size: 35px;
    `}

`

export const SubTitle = styled.Text`
  font-size: 15px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary}

  ${(props)=> props.welcome &&`
      margin-bottom: 5px;
      font-weight: normal;
    `}
`

export const StyledFormArea = styled.View`
  width: 90%;
`

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius:5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 1px;
  margin-bottom: 10px;
  color: ${tertiary};
`
export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`

export const LeftIcon = styled.View`
  left: 15px;
  top: 34px;
  position: absolute;
  z-index:1;
`

export const RigthtIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index:1;
`

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;

  ${(props)=> props.google ==true && `
    background-color: ${blue};
    flex-direction: row;
    justify-content: center;
  `
  }

`

export const ButtonText = styled.Text`
  color:${primary};
  font-size: 16px;
  
  ${(props)=> props.google ==true && `
    padding: 25px;
  `
  }

`
export const MsBox = styled.Text`
  text-align: center;
  font-size: 13px;
`
export const Line = styled.View`
  height: 1px;
  width: 100%;
  margin-vertical: 10px;
  background-color: ${darkLight},
`

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`

export const Extratext = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size:15px;
`

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`