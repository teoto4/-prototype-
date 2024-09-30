/*1. Властивості аксесори (set get)
Створити об'єкт для зберігання даних про користувача (ім'я, прізвище, номер телефону та адресу).  
Номер телефону можна встановити тільки український (код країни повинен бути на початку).  
Пошта повинна бути лише на gmail.  
В імені та прізвищі можуть бути тільки латинські літери та тире.  
Усі перевірки виконуються в сеттерах. */

const user = {
    name: "",
    lastName: "",
    number: "",
    email:"",
    set fullName(x){
        const nameReg = /^[A-Za-z\-]+$/;
        const [name, lastName] = x.split(" ");
        if (nameReg.test(name) && nameReg.test(lastName)) {
            this.name = name;
            this.lastName = lastName;
        } else {
            console.log("Use latin symbol");
        }
    },
    get fullName(){
        console.log(this.name, this.lastName);
        return`${this.name}, ${this.lastName}`
    },
    set phoneNumber(x){
        if('+380' === x.substr(0, 4)){
            console.log('true');
            this.number = x;
        } else {
            console.log('false');
            this.number = 'Wrong Number'  
        }
        
    },
    get phoneNumber(){
        console.log(this.number);
        return this.number;
    },

    set emailAdd(x) {
        const mailReg = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (mailReg.test(x)) {
            this.email = x;
        } else {
            console.log('Wrong email - set: gmail.com.');
        }
    },

    
    get emailAdd() {
        return this.email;
    }
}


user.fullName = "Maks Lartsin";
user.fullName
user.phoneNumber = "+38093555555";
user.phoneNumber
user.emailAdd = "maks@gmail.com"
user.emailAdd


/*Завдання 2: Клас "Коло"
Створіть клас `Circle`, який моделює коло. Клас має містити:
1. Властивість `radius` для зберігання радіусу кола.
2. Метод `getArea()`, який обчислює площу кола.
3. Метод `getCircumference()`, який обчислює периметр кола.
// Приклад використання
const circle = new Circle(5);
console.log("Площа:", circle.getArea()); // Площа: 78.54
console.log("Периметр:", circle.getCircumference()); // Периметр: 31.42 */

class Circle {
    constructor(radius){
        this.radius = radius;
    }
    getArea(){
        const pi = 3.14159;
        return pi * this.radius * this.radius; 
    }
    getPerimetr(){
        const pi = 3.14159;
        return 2 * pi * this.radius;
    }
}

circle1 = new Circle(7);
console.log(circle1.getArea());
console.log(circle1.getPerimetr());

/*Завдання 3: Клас "Користувач"
Створіть клас `User`, який моделює користувача. Клас має містити:
1. Властивості `name`, `age` та `email`.
2. Метод `greet()`, який виводить привітання.
3. Метод `isAdult()`, який перевіряє, чи є користувач повнолітнім.
// Приклад використання
const user = new User("Олена", 20, "olena@gmail.com");
console.log(user.greet()); // Привіт, мене звати Олена.
console.log("Чи повнолітня?", user.isAdult()); // Чи повнолітня? true */

class User{
    constructor(name, age, email){
        this.name = name,
        this.age = age,
        this.email = email;
    }
    greet(){
        return `Привiт, мене звати ${this.name}`
    }
    isAdult(){
        if (this.age <= 18) {
            return true
        } else{
            return false
        }
    }
}


const user1 = new User("Макс", 19, "teoto@email.com");

console.log(user1.greet());
console.log("Чи повнолiтнiй?", user1.isAdult());
