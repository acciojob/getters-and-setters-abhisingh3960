//complete this code
class Person {
	constructor(name , age){
		this._name= name;
		this._age= age;
	}
	get name(){
		return this._name;
	}
	set age(value){
		return this._age=value;
	}
}
let Person = new Person();
class Student extends Person {}

class Teacher extends Person {}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
