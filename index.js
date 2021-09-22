'usestrict';
function fun(echo) {
    console.log(echo);
};

fun('hello'); // hello

function boo(aFunction) {
    aFunction('boo');
}

boo(fun); // boo

console.log(fun);
/*
function fun(echo) {
    console.log(echo);
};
*/

fun(boo);
/*
function boo(aFunction) {
    aFunction('boo');
}
*/

let moreFun = fun;

moreFun('hello again'); // hello again

function echoMaker() {
    return fun;
}

let bigFun = echoMaker();

bigFun('Is there an echo?'); // Is there an echo?
