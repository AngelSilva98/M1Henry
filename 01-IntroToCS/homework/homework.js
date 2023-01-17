'use strict';

function BinarioADecimal(num) {
   let dec = 0;
   for (let i = 0; i < num.length; i++){
      dec += num[i] * Math.pow(2,num.length - 1 -i )
   }
   return dec;
}

function DecimalABinario(num) {
   let res = "";
   while (num > 0){
      res = (num % 2) + res;
      num = Math.floor(num/2)
   }
   return res;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
