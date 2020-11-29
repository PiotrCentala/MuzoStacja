import { Dimensions } from 'react-native'
const dim = Dimensions.get('window');
export function isIPhoneXSize() {
    return dim.height >= 812 || dim.width >= 812;
}

export function isIPhoneXrSize() {
    return dim.height == 896 || dim.width == 896;
}
export function isIphone12Size() {
    return dim.height == 844 || dim.width == 844
}