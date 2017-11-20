
// ==  функция фильтрующая полож числа 
// ==  массива и сумирующая их      ====


var numbers = [-4, 2, -5, 1, 3];
let positiveSum = function(n) {
    let positive = n.filter(function(el) {
        return el > 0;
    })
    let result = positive.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    return result;
}
console.log(positiveSum(numbers));

===============================

function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}


==================================

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

=====================================

function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}

======================================


function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
}

==================================
function positiveSum(arr) {
  var sum = 0;
  arr.forEach(function(v,i,a) {
    if(v>0){sum+=v;}
  });
  return sum;
}

==================================

function positiveSum(arr) {
  return arr.reduce((s,v) => v > 0 ? s + v : s, 0);
}

=============================

const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

===========================

function positiveSum(arr) {
  return arr.length != 0 ? arr.reduce(function (a,b){ return a > 0 && b > 0 ? a + b : a >= 0 && b < 0 ? a + 0 : b >= 0 && a < 0 ? b + 0 : 0}) : 0;
}

=====================

const positiveSum=arr=>arr.filter(a=>a>0).reduce((s,v)=>s+v,0);

================================

const func = f => a => a.reduce(f,0),
positiveSum = func((c,p)=>c+(p>0?p:0));