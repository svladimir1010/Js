

// Array.prototype.diff = function(a) {
//     return this.filter(function(i){return a.indexOf(i) < 0;});
// };

// // var mas1 = ["some1","some2","some3", "some4"],
// //     mas2 = ["some1","some5","some3"];

// var mas1 = [121, 144, 19, 161, 19, 144, 19, 11],
// mas2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];


// var result = mas2.diff(mas1);
// console.info(result); // ["some5"]



// ============= ^^^^^^^  поиск не совпадений  ^^^^^^ =============== ^^^^^
// var arr = [9, 7, 5];

//     arr.forEach(function(item, i, arr) {
//       alert( item );
//     });
// ==================================
 //создаем массивы
 // var array1 = ["п","р","ы","в","е","т"],
 // array2 = ["п","р"];
// var mas1 = [121, 144, 19, 161, 19, 144, 19, 11],
// mas2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];


// let comp = function(n, c) {
// let d = [];
// for(let i = n.length; i--;) {
// let e =n[i] * n[i];
// //console.log(e);
// d.push(e);
//    }

//    console.log(d);
// }
// comp(a,b);
// ===================================== ============================
         // сравнение двух массивов квадрата из элементов первого массива со вторым


// var arr1 = [121, 144, 19, 161, 19, 144, 19, 11],
// 	arr2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
// let comp = function(array1, array2) {
// 		array1 = array1.map(function(n) {
// 			return n * n;
// 		});
// 		let compareNumeric = function (a, b) {
// 			return a - b;
// 		}
// 		let a = JSON.stringify(array1.sort(compareNumeric));
// 		let b = JSON.stringify(array2.sort(compareNumeric));

//        ( a !== b || a == 0 || b == 0 ) ? alert('false') : alert('true');

// }

// comp(arr1, arr2);

// ======================================================


function comp(array1, array2){
array1 = array1.map(function(n) {
        return n * n;
    });
    let compareNumeric = function(a, b) {
        return a - b;
    }
    let a = JSON.stringify(array1.sort(compareNumeric));
    let b = JSON.stringify(array2.sort(compareNumeric));

    if(a !== b || a == 0 || b == 0) {
      return false;
      }else { 
         return true;
         }
}

// ========================  СРАВНЕНИЕ ДВУХ МАССИВОВ     ====================
// 
// 
// let a = [121, 361, 361, 361, 14641, 20736, 20736, 25921];
// let b = [121, 361, 361, 361, 14641, 20736, 20736, 25921];
// console.log(JSON.stringify(a)==JSON.stringify(b));
// console.log(b == a);
// =========================================================================

            // //у каждого массива есть очень важное свойство - это длинна массива. чтобы ее узнать
            // //необходимо прописать имя_массива.length т.е. array1.length            
            // //попробуем вывести длинну в консоль
            // console.log(array1.length);
            // console.log(array2.length);
            // //здесь будем хранить значение элемента
            // var cache;
            // //сохраним длины массивов:
            // var ln1 = array1.length
            // ln2 = array2.length;
            // //теперь делаем цикл
            // for (var i = 0; i < ln1; ++i)
            // {
            // 	cache = array1[i];
            // 	for (var j = 0; j < ln2; ++j)
            // 	{
            // 		if (cache == array2[j])

            // 		{
            // 			console.log('найдено совпадение: ' + cache);
            // 			break;
            // 		}
            // 	}
            // }
