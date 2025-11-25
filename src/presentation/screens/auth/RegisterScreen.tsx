import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import { Portal, Dialog, Button, TextInput } from 'react-native-paper';
import { colors } from '../../config/theme/theme';
import { useAuth } from '../../hooks/useAuth';
import { RouteStack } from '../../routes/StackNavigation';
import { RegisterUseCase } from '../../../domain/useCases/register.usecaste';

export const RegisterScreen = () => {

    const navigation = useNavigation<NavigationProp<RouteStack>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');

    const _onRegisterPressed = async () => {
      //TODO REGISTER
      const user = await RegisterUseCase(email,password, fullName);
      if(user){
         setMessage("Registro exitoso");
        showDialog();
        navigation.navigate('Login');
      }
    }

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

  return (
     <>
        <Portal>
          <Dialog
            visible={visible}
            onDismiss={hideDialog}>
              <Dialog.Title>Alerta</Dialog.Title>
              <Dialog.Content><Text>{message}</Text></Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Cerrar</Button>
              </Dialog.Actions>
           </Dialog>
        </Portal>
        <View style={styles.container} >
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", padding: 20}}>
                <Image source={require('../../../../assets/logo.png')} style={styles.image} />
                <Text style={styles.header}>Bienvenido</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        label="Nombre completo"
                        value = {fullName}
                        onChangeText={setFullName}
                        underlineColor='transparent'
                        mode='outlined'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        label="Correo Electrónico"
                        value = {email}
                        onChangeText={setEmail}
                        underlineColor='transparent'
                        mode='outlined'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        label="Contraseña"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        underlineColor='transparent'
                        mode='outlined'
                    />
                </View>
                <Button mode ="contained" onPress={_onRegisterPressed}>
                    Registrarme
                </Button>
            </View>
        </View>
    </>
  )
}
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      width: '100%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
        width: 340,
        marginVertical: 12
    },
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    label: {
      color: colors.darkGray,
    },
    link: {
      fontWeight: 'bold',
      color: colors.textPrimary,
    },
    image: {
        width: 128,
        height: 128,
        marginBottom: 12,
      },
    header: {
      fontSize: 26,
      color: colors.textPrimary,
      fontWeight: 'bold',
      paddingVertical: 14,
    },
  });