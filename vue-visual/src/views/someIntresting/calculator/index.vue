<template>
  <div id="calculator">
    <header>
      <h1>calculator</h1>
      <p>By tian</p>
    </header>
    <section class="calculator" id="calculator">
      <calContent></calContent>
    </section>
  </div>
</template>
<script>
import calContent from '@/views/someIntresting/calculator/content';

export default {
  name: 'calculator',
  components: { calContent },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pacifico');

header {
  font-size: 1.8rem;
  font-family: 'Pacifico', cursive;
}

#calculator {
  margin: 2.5rem auto;
  text-align: center;
}

.calculator {
  border: 0.8rem solid #c8e379;
  width: 34rem;
  height: 35rem;
  background-color: #c7e995;
  font-size: 1.6rem;
  border-radius: 1rem;
  box-shadow: 1rem 1rem 0.5rem #ccc;
}
</style>
