<template>
  <div class="calculator-base">
    <div class="calculator-input">
      <div class="input-content history" style="color: #888b8d">
        {{ history }}
      </div>
      <div class="input-content" style="color: #d37376">{{ formula }}</div>
      <div class="result">{{ result }}</div>
    </div>
    <div class="calculator-buttons">
      <div
        class="calBtn-row"
        v-for="(item, index) in calculatorBtnsData"
        :key="index"
      >
        <div
          class="calBtn"
          v-for="(subItem, subKey) in item"
          :key="subKey"
          @click="onClickBtn(subItem)"
        >
          {{ subItem }}
        </div>
      </div>
      <div class="calBtn-row">
        <div class="calBtn special">0</div>
        <div class="calBtn">.</div>
        <div class="calBtn special">=</div>
      </div>
    </div>
  </div>
</template>
<script>
import { calculatorBtnsData } from '@/views/someIntresting/calculator/models/calculatorBtns.js';
import { Calculator } from '@/models/class/Calculator';
export default {
  data() {
    return {
      formula: '9*2',
      result: '18',
      history: '9*2 = 18',
      calculator: '',
      calculatorBtnsData,
    };
  },
  created() {
    this.calculator = new Calculator();
    this.formula = this.calculator.input;
    this.result = this.calculator.output;
    this.history = this.calculator.history;
  },
  methods: {
    onClickBtn(val) {
      this.calculator.inputVal(val);
      this.updateData();
    },
    updateData() {
      this.formula = this.calculator.input;
      this.result = this.calculator.output;
      this.history = this.calculator.history;
    },
  },
};
</script>
<style scoped>
.calculator-base {
  font-size: 18px;
}
.calculator-input {
  background-color: #fff;
  height: 110px;
  font-size: 22px;
  margin: 1rem 1.8rem 2rem;
  border: 1px solid #fff;
  border-radius: 3px;
  box-shadow: 0px 0px 3px 2px #b7b0b0;
}
.input-content,
.result {
  height: 40px;
  line-height: 40px;
  text-align: right;
  padding-right: 10px;
}
.calculator-input .history {
  height: 25px;
  font-size: 14px;
  line-height: 25px;
}
.calculator-input .input-content {
  border-bottom: 1px solid rgba(222, 220, 219, 0.5);
}
.calBtn-row {
  margin: 1rem 1rem;
}
.calBtn {
  background-color: #b3d57c;
  width: 83px;
  height: 50px;
  display: inline-block;
  margin: 0.1rem 0.5rem;
  border: 0.1rem solid rgba(166, 98, 98, 0.74);
  border-radius: 5px;
  line-height: 50px;
  box-shadow: 0.1rem 0.1rem 0.3rem rgb(94, 174, 115);
  transition: all 0.1s;
  user-select: none;
}
.calBtn:hover {
  color: #eae7e7;
  cursor: pointer;
  box-shadow: 0.3rem 0.3rem 0.5rem #c7e995;
}
.calBtn:active {
  transform: translate(0.05rem, 0.05rem);
}
.special {
  width: 185px;
}
</style>
