// ============================= Q#5 ============================================
// ============================ STEP#1 ==========================================

let myArray:number[]= [];

// =========================== STEP#2 ===========================================

for(let x = 1; x <= 10; x++ ){
    myArray.push(x);
}

// ========================== STEP#3 =============================================

console.log("My Array", myArray);

// ========================= STEP#4 ==============================================

for (let y =0; y < myArray.length; y++) {
    console.log(`element ${y} : ${myArray[y]}`);
    
}

for (const value of myArray){
    console.log(`${value}`);
}