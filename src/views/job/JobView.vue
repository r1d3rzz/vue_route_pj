<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.jobs = data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};
</script>

<style>
</style>