console.log(a);
try {
console.log(b);
console.log(c);
} catch {};


var a = 1;
const b = 2;
let c;

// 함수는 함수의 실제 매개변수가 될 수 있다.
function foo() {
    arg();
}

function bar() {
    console.log('bar')
}

foo(bar);

// 함수는 함수의 반환값이 될 수 있다.
function foo(arg) {
    return arg;
}

function bar() {
    console.log('bar')
}

foo(bar)();

//할당명령문의 대상이 될 수 있다.
//동일비교의 대상이 될 수 있다.
const foo = function foo(arg){
    return arg;
}

foo(1);

//기본값 매개변수 default function parameter
//나머지 매개변수 Rest parameter
//arguments 객체
function foo(arg){
    console.log(arg);
}
foo();

function foo(arg = 1){
    console.log(arg);
}
foo();

function foo(arg, ...rest){
    console.log(rest);
}
foo(1,2,3,4);

function foo(arg){
    console.log(arguments);
}
foo(1,2,3,4);

// 즉시 실행 함수
(function foo() {
    console.log('foo');   
})();

//재귀 함수
function foo(arg){
    if(arg === 3) return;
    console.log(arg);
    foo(arg++);
}
foo(0);

//중첩함수

function foo(arg){
    function bar() {
        console.log(arg)
    }
    bar();
}
foo(1);

//콜백함수
function foo(arg) {
    arg();
}

foo(() => {
    console.log(1);
});
