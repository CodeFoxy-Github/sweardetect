<template>
  <div>
    <h1>{{ msg }}</h1>
    </p>
    <form>
    <h3>Enter a Word</h3>
    <ul>
      <input id="textbox1" />
    </ul>
    <ul>
      <button>Continue</button>
    </ul>
    </form>
  </div>
  <script>
 console.log(test);
  </script>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
