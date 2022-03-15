<template>
  <h1>JobDetail {{ id }}</h1>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      // id: this.$route.params.id,
    };
  },
};
</script>

<style>
</style>