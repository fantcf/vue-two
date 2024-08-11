// 运算符映射：
const operationSignEum = {
  PLUS: '+',
  MINUS: '-',
  MULTIPLY: '*',
  DIVIDE: '/',
};
// const operationEum = {
//   PLUS: 'plus',
//   MINUS: 'minus',
//   MULTIPLY: 'multiply',
//   DIVIDE: 'divide',
// };
const operationArr = ['+', '-', '*', '/'];

export class Calculator {
  // 定义三个基本数据：历史记录、输入内容、结果
  history = '';
  input = '';
  output = '';

  // 中缀表达式、后缀表达式、后缀表达式结果集
  infix = [];
  suffix = [];
  result = [];
  lastVal = 0; // 存储最近的值
  calcDone = false; // 当前计算完成
  curDot = false; // 当前正在处理小数点（.）

  // 敲击键盘，输入内容
  inputVal(val) {
    // 判断是否是数字
    const newVal = parseInt(val, 10);
    if (!isNaN(newVal)) {
      const infixRe = this.buildInfix(newVal, 'add');
      this.input = infixRe.join('');
      this.calculate();
    }
  }

  // 构建中缀表达式
  buildInfix(val, type) {
    let newVal;
    const valIsOp = this.isOp(val);
    const lastValIsOp = this.isOp(this.lastVal);
    if (type === 'add') {
      if (!valIsOp && !lastValIsOp) {
        newVal = this.lastVal * 10 + val;
        this.lastVal = newVal;
        this.infix.pop();
        this.infix.push(this.lastVal);
        return this.infix;
      }
    }
  }

  // 综合计算过程（触发中转后、计算后缀；设置标记、显示输出、历史记录）
  calculate(type) {
    this.infix2Suffix();
    const suffixRe = this.calcSuffix();
    if (suffixRe) {
      this.output = '=' + suffixRe;
    }
  }

  // 中缀转后缀表达式
  infix2Suffix() {
    this.suffix = [];
    this.infix.forEach((item) => {
      if (!this.isOp(item)) {
        this.suffix.push(item);
      }
    });
  }

  // 计算后缀表达式
  calcSuffix() {
    this.result = [];
    this.suffix.forEach((item) => {
      if (!this.isOp(item)) {
        this.result.push(item);
      }
    });
    return this.result[0];
  }

  // 辅助函数------------
  // 1. 判断是否是运算符号
  isOp(op) {
    return op && operationArr.includes(op);
  }

  // 2. 判断运算符优先级
  priorHigher() {}

  // 3. 进行运算符的运算
  opCalc() {}
}
