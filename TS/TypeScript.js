// 변수의 데이터 타입 명시
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var student_id = 1;
var student_name = 'Alice';
var age = 15;
var gender = 'female';
var course = 'System QA';
var completed = false;
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.student_id = 1;
        this.student_name = 'Alice';
        this.age = 15;
        this.gender = 'female';
        this.course = 'System QA';
        this.completed = false;
    }
    MyStudent.prototype.setName = function (name) {
        this.student_name = name;
        console.log('이름 설정 : ' + this.student_name);
    };
    return MyStudent;
}());
// Student라는 인터페이스를 MyStudent에 상속하겠다. (구현한다)
var myInstance = new MyStudent();
myInstance.setName('Aris');
// function getInfo(id : number) : Student 
// {
//     return {
//         student_id : id,
//         student_name : 'Alice',
//         age : 15,
//         gender : 'female',
//         course : 'System QA',
//         completed : true
//     }
// }
var student = {
    student_id: 2,
    student_name: 'Momoi',
    age: 15,
    gender: 'female',
    course: 'Senario Writer',
    completed: true
};
// function setInfo(student : Student) : void {
//     console.log(student);
// }
// setInfo(student);
// console.log(getInfo(1))
// 함수의 데이터 타입 명시(매개변수, return타입)
// function Plus(a : number, b : number) : number {
//     return a + b;
// }
// const user : {name : string, age : number} = {
//     name : 'Midori',
//     age : 15
// };
// type StrOrNum = number | string
// let numStr : StrOrNum = 100;
// let item : number;
// function convertToString(val : StrOrNum) : string {
//     if(typeof val === 'string'){
//         item = 0;
//     } else {
//         item = val;
//     }
//     return String(val);
// }
// function convertToNumber(val : StrOrNum) : number {
//     return Number(val);
// }
// console.log(convertToString(numStr));
// console.log(convertToNumber(numStr));
// let numbers : number[] = [1,2,3,4,5];
// let fruits : string[] = ['apple', 'banana', 'orange'];
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
// let mixedArray : (number | string)[] = [1, 'two', 3, 'four'];
// let greeting : [number, string, boolean] = [1, 'Tristana', true];
// for(let i = 0; i <greeting.length; i++) {
//     console.log(greeting[i]);
// }
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var combineArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
for (var i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
