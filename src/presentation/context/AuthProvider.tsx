import React, { PropsWithChildren, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RouteStack } from '../routes/StackNavigation';

export const AuthProvider = ({children}: PropsWithChildren) => {

  //Logica
  const {status, checkStatus} = useAuth();

    const navigation = useNavigation<NavigationProp<RouteStack>>();

  useEffect(() => {

    checkStatus();
    console.log('Status:', status);
    if(status === 'checking'){  //la primera vez que abre el app

        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }]
        });

    }else{  //inicio sesion o no inicio sesion

        if(status === 'authenticated'){
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }]
            })
        }

    }

  },[status])

  return (
    <>
     {children}
    </>
  )
}
