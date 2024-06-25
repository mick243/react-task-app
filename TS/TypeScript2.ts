// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드

class Employee {
    // 직원 정보
    constructor(
        private _empName : string, 
        private _age : number, 
        private _empJob : string
        ) {

    }

    get empName() {
        return this._empName;
    }

    set empName (val : string) {
        this._empName = val;
    }

    printEmp = () : void => {
        console.log(this._empName + '의 나이는 ' + this._age + '살이고, 직업은 ' + this._empJob + '입니다.');
    }
}

let employee1 = new Employee('A', 26, '학생');
employee1.empName = 'B'
employee1.printEmp();
