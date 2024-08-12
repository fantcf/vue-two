// 运算符映射：
const operationSignEum = {
  plus: '+',
  minus: '-',
  mul: '*',
  div: '/',
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
    console.log(val, this.lastVal, this.infix);
    if (!isNaN(newVal)) {
      const infixRe = this.buildInfix(newVal, 'add');
      this.input = infixRe.join('');
      this.calculate();
      return;
    }

    const action = val;
    // 基础操作
    // 立即执行运算；
    // 等待执行运算；
    if (['del', 'clsA', 'clsB', 'eq'].includes(action)) {
      if (this.infix.length === 0) {
        return;
      }
      if (action === 'clsA') {
        this.resetData();
      } else if (action === 'del') {
      } else if (action === 'eq') {
        this.calculate(action);
      }
    } else if (['plusMinus', 'rad', 'per', 'rev'].includes(action)) {
      if (this.infix.length === 0 || this.isOp(this.lastVal)) {
        return;
      }
      if (action === 'plusMinus') {
        this.lastVal = -this.lastVal;
      } else if (action === 'rad') {
        const newVal = Math.sqrt(this.lastVal);
        if (!isNaN(newVal)) {
          this.lastVal = newVal;
        }
      } else if (action === 'per') {
        this.lastVal = this.lastVal / 100;
      } else if (action === 'rev') {
        this.lastVal = 1 / this.lastVal;
      }
    } else if (['div', 'mul', 'minus', 'plus'].includes(action)) {
      const isNotTargetSign = [
        operationSignEum.mul,
        operationSignEum.div,
      ].includes(operationSignEum[action]);
      if (this.infix.length === 0 && isNotTargetSign) {
        return;
      }
      const infixRe = this.buildInfix(operationSignEum[action], 'add');
      this.input = infixRe.join('');
    }
  }

  // 构建中缀表达式
  buildInfix(val, type) {
    let newVal;
    const valIsOp = this.isOp(val);
    const lastValIsOp = this.isOp(this.lastVal);
    const isTargetSign = [
      operationSignEum.plus,
      operationSignEum.minus,
    ].includes(val);
    if (type === 'add') {
      if (valIsOp && lastValIsOp) {
        return this.infix;
      } else if (!valIsOp && !lastValIsOp) {
        newVal = this.lastVal * 10 + val;
        this.lastVal = newVal;
        this.infix.pop();
        this.infix.push(this.lastVal);
        return this.infix;
      } else if (!valIsOp && this.infix.length === 1 && isTargetSign) {
        newVal = this.lastVal === '+' ? val : 0 - val;
        this.infix.pop();
        this.infix.push((this.lastVal = val));
      }
      this.infix.push((this.lastVal = val));
      return this.infix;
    } else if (type === 'del') {
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
    const temp = [];
    this.suffix = [];
    this.infix.forEach((item) => {
      if (!this.isOp(item)) {
        this.suffix.push(item);
      } else {
        if (!temp.length) {
          temp.push(item);
        }
      }
    });
    while (temp.length) {
      this.suffix.push(temp.pop());
    }
  }

  // 计算后缀表达式
  calcSuffix() {
    this.result = [];
    this.suffix.forEach((item) => {
      if (!this.isOp(item)) {
        this.result.push(item);
      } else {
        const res = this.opCalc(this.result.pop(), item, this.result.pop());
        this.result.push(res);
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
  opCalc(b, op, a) {
    let res = 0;
    if (op === operationSignEum.plus) {
      res = a + b;
    } else if (op === operationSignEum.minus) {
      res = a - b;
    } else if (op === operationSignEum.mul) {
      res = a * b;
    } else if (op === operationSignEum.div) {
      res = a / b;
    }
    return res;
  }

  // 4. 重置数据
  resetData() {
    this.history = '';
    this.input = '';
    this.output = '';
    this.infix = [];
    this.suffix = [];
    this.result = [];
    this.lastVal = 0;
    this.curDot = false;
  }
}
