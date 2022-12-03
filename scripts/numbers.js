let example='123456789';
let name = 'Kumanan'; 


f
unction add(n1,n2) {

    if (typeof n1 == 'string') {
        throw new Error( " n1: Invalid argument")
    }
     return n1 + n2;
}

let result = null;
try {
   result =  add("2", 3);
} catch (error) {
    console.error("Aborting: Invalid argument for n1.");
}

console.log(result);


