import React, { createContext, PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { Alert, PermissionsAndroid, View } from 'react-native';
import messaging from '@react-native-firebase/messaging';

type FirebaseContextType = {
    fcmToken: string | null;
    requestPermission: () => void;
}

export const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export const NotificationProvider = ({children}: PropsWithChildren) => {

    const [fcmToken, setFcmToken] = useState<string | null>(null);

    const requestPermission = async () => {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
        if(granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Notification permission granted");
            const token = await messaging().getToken();
            setFcmToken(token);
            console.log("FCM Token:", token);
        } else {
            console.log("Notification permission denied");
        }
    }

    useEffect(() => {
        requestPermission();
        const unSubscribeOnMessage = messaging().onMessage(async remoteMessage => {
            console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
            Alert.alert('New Notification', JSON.stringify(remoteMessage.notification?.body));
        });

        messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('Message handled in the background!', remoteMessage);
        });

        return () => unSubscribeOnMessage();
    },[])

    const value = useMemo(() => ({
        fcmToken: fcmToken,
        requestPermission: requestPermission
    }),[fcmToken]);

  return (
    <FirebaseContext.Provider value={value}>
        {children}
    </FirebaseContext.Provider>
  )
}
