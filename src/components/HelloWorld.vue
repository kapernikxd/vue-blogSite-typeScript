<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{text}}
    </p>
    <el-button type="primary" @click="clickEvent">Кнопка</el-button>
 

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  text:string = "Hello";

  get newText() { // computed:
    return `${this.text} from TS`
  }

  created() {
    this.text = 'Hello new World'
  }

  clickEvent() {
    this.text = 'Hello from click'
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
