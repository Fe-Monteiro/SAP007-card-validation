import validator from './validator.js'; 

console.log(validator);


 const checkCardNumber = () => {
   const inputText = document.querySelector("[data-form-input]");
   let inputValue = inputText.value;
  

  
  let result = validator.isValid(inputValue);
  let maskCardNumber = validator.maskify(inputValue);


   if(result === true){
     alert("Cartão" + " " + (maskCardNumber) + " " + "é válido");
   }else if(result === false){
     alert("Cartão" + " " + (maskCardNumber) + " " + "é inválido");
   }else{
    alert("Favor informar somente números.");
   }
 }
 const cardNumberValue = document.querySelector("[data-form-button]");
   cardNumberValue.addEventListener("click", checkCardNumber);