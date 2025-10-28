
import ImageColors from 'react-native-image-colors';

export const getColorFromImage = async(imageUrl: string) => {
    const fallbackColor = 'grey';
    const colors = await ImageColors.getColors(imageUrl, {
        fallback: fallbackColor,
    })

    switch(colors.platform){
        case 'android':
            return colors.dominant ?? fallbackColor;
        
        case 'ios':
            return colors.background ?? fallbackColor;

        default:
            return fallbackColor;
    }
};