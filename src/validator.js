const validator = {

  isValid(cardNumberValue) {

    if (/[^0-9-\s]+/.test(cardNumberValue)){
      return 1;
    }

    let nCheck = 0;
    let skipDigit = false;

    for (let nPosition = cardNumberValue.length - 1; nPosition >= 0; nPosition--) {
      let cDigit = cardNumberValue.charAt(nPosition);
      let nDigit = parseInt(cDigit, 10);

      if (skipDigit) {
        if ((nDigit *= 2) > 9) nDigit -= 9;
      }
      
      nCheck += nDigit;

      skipDigit = !skipDigit;

    }

      if (nCheck % 10 === 0 && cardNumberValue !== "" && nCheck !== 0) {
        return true;
      } else {
        return false;
      }
    

  },

  maskify(cardNumberValue) {
    let digitMask = [];

    for (let i = 0; i < cardNumberValue.length; i++) {
      if (i < cardNumberValue.length - 4) {
        digitMask.push("#");
      } else {
        digitMask.push(cardNumberValue[i]);
      }
    }
    return digitMask.join("");
  }

};

export default validator;