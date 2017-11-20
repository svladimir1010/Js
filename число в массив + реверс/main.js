function digitize(n) {  
return String(n).split('').reverse().map(Number);
}


console.log(digitize(35231));   
// // ==================  то же  ===================


function digitize(n) {
  return [].reduceRight.call(String(n), (acc, char) => acc.concat(+char), []);
  console.log([]);
}

 console.log(digitize(35231));      //  ==> [1, 3, 2, 5, 3 ]

// ======================================================

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

===========================================================

function digitize(n){
  return (n + '').split('').map(Number).reverse();
}

=============================================

function digitize(n) {
  return n.toString().split("").reverse().map(function(i){
    return parseInt(i);
  });
}

=================================================

 const digitize = (n) => String(n).split('').reverse().map(Number);