let a = 22;
let b = '';

let typeOfA = typeof a;
let typeOfB = typeof b;


if(typeOfA == "number" && typeOfB  == "number"){
    if(a>b){
        console.log(b);
        console.log(a);
    }else{
        console.log(a);
        console.log(b);
    }

}else{
    console.log('You can compare only numbers!')
}
