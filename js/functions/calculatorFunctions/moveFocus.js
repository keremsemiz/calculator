function moveFocus(fromIndex, toIndex) {
    const buttons = Array.from(document.querySelectorAll('.js-calc-btn'));
    const btnsPerRow = 4;
    const decimalBtnIndex = 12;
    const zeroBtnIndex = 13;
    const divideBtnIndex = 14;
    const multiplyBtnIndex = 15;

    switch (toIndex) {
        case 'up': 
            if (fromIndex < btnsPerRow) {
                return;
            }
            else if (fromIndex === buttons.length-1) {
                buttons[fromIndex-(btnsPerRow-1)].focus();
            }
            else {
                buttons[fromIndex-btnsPerRow].focus();
            }
            break;
        case 'down':
            if (fromIndex === buttons.length-1|| fromIndex === buttons.length-2) {
                return;
            }
            else if (fromIndex === decimalBtnIndex || fromIndex === zeroBtnIndex) {
                buttons[buttons.length-2].focus();
            } 
            
            else if (fromIndex === divideBtnIndex || fromIndex === multiplyBtnIndex) {
                buttons[buttons.length-1].focus();
            }
            else {
                buttons[fromIndex + btnsPerRow].focus();
            }
            break;
        case 'left':
            if (fromIndex === 0) {
                return;
            } else {
                buttons[fromIndex - 1].focus();
            }
            break;
        case 'right':
            if (fromIndex === buttons.length-1) {
                return;
            } else {
                buttons[fromIndex + 1].focus();
            }
            break;
    }
}

export default moveFocus;