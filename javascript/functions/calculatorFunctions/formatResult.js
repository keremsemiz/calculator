import getDigitCount from './getDigitCount.js';
import isFloat from './isFloat.js';

function formatResult(result, maxLength) {
    const precision = 10;

    if( getDigitCount(result) > maxLength) {

        if (isFloat(result)) {
            const resultInt = parseInt(result);
            const resultIntLength = getDigitCount(resultInt);

            if (resultIntLength > maxLength) {
                return result.toPrecision(precision);
            }
            else {
                const digitsAfterDecimal = maxLength - resultIntLength;

                return result.toFixed(digitsAfterDecimal);
            }
        }

        else {
            return result.toPrecision(precision);
        }
    }
    
    return result.toLocaleString('en-UK')
}

export default formatResult;