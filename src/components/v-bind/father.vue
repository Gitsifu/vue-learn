<template>
  <div>
    <h1>父组件传值给子组件demo：</h1>
    <div>方式一：</div>
    <child v-bind:msg="massage"></child>
    <div>方式二：</div>
    <child msg="2.这个是父组件的数据"></child>
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
        massage: "1.这个是父组件的数据"
      }
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style scoped>

</style>
