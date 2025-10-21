import { Button, Pressable, Text, View } from 'react-native'
import { CalculatorButton } from '../components/CalculatorButton';
import { useRef, useState } from 'react';
import { styles, colors } from '../config/theme/theme';

enum Operator {
    add = '+',
    substract = '-',
    multiply = 'X',
    divide = '÷'
}

export const CalculatorScreen = () => {
    //LOGICA
    const [number, setNumber] = useState('0'); 
    const [prevNumber, setPrevNumber] = useState('');
    const lastOperation = useRef<Operator>(undefined);

    const buildNumber = (numberString: string) => {

        if( number.includes('.') && numberString === '.' ) return;

        if(number.startsWith('0') || number.startsWith('-0')){

            //Colocar el punto decimal
            if(numberString === '.'){
                return setNumber( number + numberString );
            }

            //Evaluar si es otro cero y hay un punto
            if(numberString === '0' && number.includes('.')){
                return setNumber( number + numberString );
            }

            //Evaluar si es diferente de cero y no tiene un punto
            if(numberString !== '0' && !number.includes('.')){
                return setNumber(numberString);
            }

            //evitar 0000000.00
            if(numberString === '0' && !number.includes('.')){
                return;
            }

            return setNumber( number + numberString );
        }

        return setNumber( number + numberString );
    }
    
    const clean = () => {
        setNumber('0');
        setPrevNumber('');
    }

    const deleteOperation = () => {
        if( number.length === 1 ) {
            return setNumber('0');
        }
        return setNumber( number.slice(0, -1) );
    }

    const toggleSign = () => {
        if( number.includes('-') ) {
            return setNumber( number.replace('-',''));
        }
        return setNumber( '-' + number );
    }

    //SUMA
    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }
    const substractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.substract;
    }
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }
    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const calculateResult = () => {

        const num1 = Number( prevNumber );
        const num2 = Number( number );
        let result = 0;

        switch(lastOperation.current){
            case Operator.add:
                result = num1 + num2;
                break;
            case Operator.substract:
                result =  num1 - num2;
                break;
            case Operator.multiply:
                result =  num1 * num2;
                break;
            case Operator.divide:
                result =  num1 / num2;
                break;
            default:
                result = 0;
        }

        console.log({ num1, num2, result, lastOperation });

        setNumber(`${ result }` );
        setPrevNumber('');
    }

    const setLastNumber = () => {
        setPrevNumber( number );
        setNumber('0');
    }

  return (
    <View style={styles.calcultorContainer}>
        <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
            <Text style={styles.mainResult}>{number}</Text>
            <Text style={styles.subResult}>{prevNumber}</Text>
        </View>
        <View style={styles.row}>
            <CalculatorButton label="C" action={clean} color={colors.lightGray}/>
            <CalculatorButton label="+/-" action={toggleSign} color={colors.lightGray}/>
            <CalculatorButton label="del" action={deleteOperation} color={colors.lightGray}/>
            <CalculatorButton label="÷" action={divideOperation} color={colors.orange}/>
        </View>
        <View style={styles.row}>
            <CalculatorButton label="7" action={() => buildNumber('7')}/>
            <CalculatorButton label="8" action={() => buildNumber('8')}/>
            <CalculatorButton label="9" action={() => buildNumber('9')}/>
            <CalculatorButton label="X" action={multiplyOperation} color={colors.orange}/>
        </View>
        <View style={styles.row}>
            <CalculatorButton label="4" action={() => buildNumber('4')}/>
            <CalculatorButton label="5" action={() => buildNumber('5')}/>
            <CalculatorButton label="6" action={() => buildNumber('6')}/>
            <CalculatorButton label="-" action={substractOperation} color={colors.orange}/>
        </View>

        <View style={styles.row}>
            <CalculatorButton label="1" action={() => buildNumber('1')}/>
            <CalculatorButton label="2" action={() => buildNumber('2')}/>
            <CalculatorButton label="3" action={() => buildNumber('3')}/>
            <CalculatorButton label="+" action={addOperation} color={colors.orange}/>
        </View>

        <View style={styles.row}>
            <CalculatorButton label="0" action={() => buildNumber('0')} doubleSize/>
            <CalculatorButton label="." action={() => buildNumber('.')}/>
            <CalculatorButton label="=" action={calculateResult} color={colors.orange}/>
        </View>
    </View>
  )
}

