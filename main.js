// ============================= Q#5 ============================================
// ============================ STEP#1 ==========================================
var myArray = [];
// =========================== STEP#2 ===========================================
for (var x = 1; x <= 10; x++) {
    myArray.push(x);
}
// ========================== STEP#3 =============================================
console.log("My Array", myArray);
// ========================= STEP#4 ==============================================
for (var y = 0; y < myArray.length; y++) {
    console.log("element ".concat(y, " : ").concat(myArray[y]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log("".concat(value));
}
