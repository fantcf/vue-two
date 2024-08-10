export class Calculator {
  formula = '';
  result = '';
  updateFormula(formula) {
    this.formula = formula;
  }
  add = (num1, num2) => num1 + num2;
  minus = (num1, num2) => num1 - num2;
  multiply = (num1, num2) => num1 * num2;
  divide = (num1, num2) => num1 / num2;
  equals() {}
}
