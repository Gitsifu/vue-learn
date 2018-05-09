<template>
  <div>{{msg}}</div>
</template>

<script>
  export default {
    name: 'child',
    components: {},
    props: {
      msg: {
        require: false,
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style scoped>

</style>
