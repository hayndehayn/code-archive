//! #1
function sumArray(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
const exampleArray = [1, 2, 3, 4, 5]
const sum = sumArray(exampleArray)
console.log('Сума елементів масиву:', sum) // Виведення суми


//! #2
function doubleArrayElements(numbers) {
  return numbers.map(number => number * 2);
}
const normalArray = [1, 2, 3, 4, 5]
const doubledArray = doubleArrayElements(exampleArray)
console.log('Подвоєні елементи масиву:', doubledArray) // Виведення 


//! #3
class SkillsManager {
  constructor() {
    this.skills = [];
  }

  addSkill(skill) {
    if (typeof skill !== 'string' || skill.length < 2) {
      return null;
    }
    this.skills.push(skill);
    return skill; 
  }

  getAllSkills() {
    return this.skills
  }
}

const skillsManager = new SkillsManager();
console.log(skillsManager.addSkill('JavaScript')); // Виведе: JavaScript
console.log(skillsManager.addSkill('CSS')); // Виведе: CSS
console.log(skillsManager.addSkill(123)); // Виведе: null
console.log(skillsManager.getAllSkills()); // Виведе: ['JavaScript', 'CSS']


//! #4 
class DateCalculator {
  constructor(initialDate) {
    this.date = new Date(initialDate);
  }

  addDays(days) {
    this.date.setDate(this.date.getDate() + days);
  }

  subtractDays(days) {
    this.date.setDate(this.date.getDate() - days);
  }

  getResult() {
    const year = this.date.getFullYear();
    const month = (this.date.getMonth() + 1).toString().padStart(2, '0');
    const day = this.date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}

const dateCalculator = new DateCalculator('2023-01-01')
dateCalculator.addDays(5)
console.log(dateCalculator.getResult()) // Виводить нову дату після додавання днів

dateCalculator.subtractDays(3)
console.log(dateCalculator.getResult()) // Виводить нову дату після віднімання днів

