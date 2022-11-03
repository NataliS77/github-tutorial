class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel, blacklistedEmails }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }
  blacklist(email){
    return  this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email)
  }

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
  
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true





// Example 3 - Калькулятор
// Створіть об'єкт calculator із трьома методами:

// create(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.


// const calculator = {
//     // a: 0,
//     // b: 0,
//     create(c, d) {
//         this.a = c
//         this.b = d
//     },
//     add() {
//         return this.a + this.b
//     },
//     mult() {
//         return this.a * this.b
//     }
// };

// console.log('before',calculator);
// calculator.create(5, 2)
// console.log('after',calculator);
// console.log(calculator.add());
// console.log(calculator.mult());


// const obj1 = {
//     name: 'Nikita',
// };
// const obj2 = {
//     name: 'Max',
// };

// function printName(obj) {
//     console.log(`Hi ${obj.name}`);
//     console.log(this);
// }

// function printName1() {
//     console.log(`Hi ${this.name}`);
// }
// printName(obj1);
// printName1.call(obj2);

