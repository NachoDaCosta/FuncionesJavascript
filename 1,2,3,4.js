//-----------------------------------------------//
//                  EJ 1 RANGO                   //
function rango(menor,mayor){
    let i=menor;
    while(i<=mayor){
        console.log(i)
        i++
    }
}
rango(4,10)

//-----------------------------------------------//
//                  EJ 2 CUAL MENOR              //
function min(a,b,c){
    return console.log(Math.min(a,b,c))
}
min(3,2,1)

//-----------------------------------------------//
//                  EJ 3 orden              //
function ordenados(d,e,f){
    let A = Array();
    A.push(d);
    A.push(e);
    A.push(f);
    console.log(A.sort((a, b) => a-b)) 
}

ordenados(20,55,13)

//-----------------------------------------------//
//                  EJ 4 maximo              //
function ordenados2(d,e,f){
    return console.log(Math.max(d,e,f))
}

ordenados2(20,55,13)

