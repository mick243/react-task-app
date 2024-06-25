// 변수의 데이터 타입 명시

let student_id : number = 1;
let student_name : string = 'Alice';
let age : number = 15;
let gender : string = 'female';
let course : string = 'System QA';
let completed : boolean = false;

enum GenderType{
    Male = 'male',
    Female = 'female'
}

interface Student {
    student_id? : number;
    student_name? : string;
    age? : number;
    gender? : 'male' | 'female';
    course? : string;
    completed? : boolean;
    setName : (name : string) => void;
    // getName : () => string;
}

class MyStudent implements Student {
    student_id = 1;
    student_name = 'Alice';
    age = 15;
    gender : 'male' | 'female' = 'female';
    course = 'System QA';
    completed = false;

    setName( name: string) : void {
        this.student_name = name;
        console.log('이름 설정 : ' + this.student_name)
    }
}
// Student라는 인터페이스를 MyStudent에 상속하겠다. (구현한다)

const myInstance = new MyStudent();
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

let student = {
    student_id : 2,
    student_name : 'Momoi',
    age : 15,
    gender : 'female',
    course : 'Senario Writer',
    completed : true
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

let firstArray = [1,2,3];
let secondArray = [4,5,6];

let combineArray= [...firstArray, ...secondArray];

for(let i = 0; i < combineArray.length; i++){
    console.log(combineArray[i]);
}
