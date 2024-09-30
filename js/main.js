/*1. Властивості аксесори (set get)
Створити об'єкт для зберігання даних про користувача (ім'я, прізвище, номер телефону та адресу).  
Номер телефону можна встановити тільки український (код країни повинен бути на початку).  
Пошта повинна бути лише на gmail.  
В імені та прізвищі можуть бути тільки латинські літери та тире.  
Усі перевірки виконуються в сеттерах. */

// const user = {
//     name: "",
//     lastName: "",
//     number: "",
//     email:"",
//     set fullName(x){
//         const nameReg = /^[A-Za-z\-]+$/;
//         const [name, lastName] = x.split(" ");
//         if (nameReg.test(name) && nameReg.test(lastName)) {
//             this.name = name;
//             this.lastName = lastName;
//         } else {
//             console.log("Use latin symbol");
//         }
//     },
//     get fullName(){
//         console.log(this.name, this.lastName);
//         return`${this.name}, ${this.lastName}`
//     },
//     set phoneNumber(x){
//         if('+380' === x.substr(0, 4)){
//             console.log('true');
//             this.number = x;
//         } else {
//             console.log('false');
//             this.number = 'Wrong Number'  
//         }
        
//     },
//     get phoneNumber(){
//         console.log(this.number);
//         return this.number;
//     },

//     set emailAdd(x) {
//         const mailReg = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
//         if (mailReg.test(x)) {
//             this.email = x;
//         } else {
//             console.log('Wrong email - set: gmail.com.');
//         }
//     },

    
//     get emailAdd() {
//         return this.email;
//     }
// }


// user.fullName = "Maks Lartsin";
// user.fullName
// user.phoneNumber = "+38093555555";
// user.phoneNumber
// user.emailAdd = "maks@gmail.com"
// user.emailAdd


/* */