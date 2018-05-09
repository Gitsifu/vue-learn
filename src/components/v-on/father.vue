<template>
  <div>
    <h1>v-on和$emit的使用</h1>
    <child v-on:event="clickButton"></child>
    <div>{{msg}}</div>
  </div>
</template>

<script>
  import Child from "./child";

  export default {
    name: 'father',
    components: {Child},
    props: [],
    data() {
      return {
        msg: '这个是原始数据'
      }
    },
    methods: {
      clickButton(data) {
        this.msg = data;
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
</style>
