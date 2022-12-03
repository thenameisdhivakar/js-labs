
// FORMULA OF COMPOUNDINTEREST

function calculateCompoundInterest (Principal, Rate ,Time){
    let Rate1 =Rate/100;
    let Value = 1 + Rate1;
    let formula =  Math.pow (Value,Time);
    let amount = Principal * formula;
    return amount;
}


console.log(calculateCompoundInterest(10,20,30));



// FORMULA OF SPEED

function SpeedFormula (Distance,Time){
    let speed =Distance/Time;
    return speed;
}

console.log(SpeedFormula(3,2))

// FORMULA OF AREAOFTRIANGLE

function AreaoFTriangle (length, breadth){
    // let Triangle = length*breadth;
    // let AOT =1/2 * Triangle;
    // return AOT; 
    return 0.5 * length * breadth;

}

console.log(AreaoFTriangle(10,20))

// PERIMETER OF CUBIOD

function cuboid(length,breadth,height){
    let result = length+ breadth+height;
    return result;
}

console.log(cuboid(10,20,30))

// SPHERE 

function sphere(r){
    let amount1 = Math.pow(r,2);
    let amount2 = 4* Math.PI;
    let result = amount1* amount2;
    return result;
}

//125 ^2
(100 + 25) ^2 = 100 ^2 + 25 ^2 + 2(100 * 25)





