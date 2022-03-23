<template>
  <h1>JobDetail</h1>
  <div v-if="job">
    <h2>Job Title - {{ job.title }}</h2>
    <h3>Detail - {{ job.detail }}</h3>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.job = data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};
</script>

<style>
</style>