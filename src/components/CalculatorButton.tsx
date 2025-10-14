import React from 'react'
import { Pressable, Text } from 'react-native'
import { colors, styles } from '../config/theme/theme'

interface Props {
    label: string;
    color?: string;
    doubleSize?: boolean;
    action: () => void;
}

export const CalculatorButton = ({ label, 
                                    action, 
                                    color = colors.darkGray,
                                    doubleSize = false
                                }: Props) => {
    //LOGICA
    // SUMA RESTA MULTIPLICACION
  return (
    <>
        <Pressable style={[styles.button, { backgroundColor: color, width: doubleSize ? 180 : 80 }]} onPress={() => action()}>
            <Text style={styles.buttonText}>{label}</Text>
        </Pressable>
    </>
  )
}
