enum API_STATUS {
    PENDDING,
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED" //PROMISE
}

//constant
//java

let a1 = API_STATUS.PENDDING;
let a2 = API_STATUS.FULFILLED;

//frontend : syntax
console.log(">>> a1 = ", a1, " a2 = ", a2) //>>> a1 =  0  a2 =  FULFILLED