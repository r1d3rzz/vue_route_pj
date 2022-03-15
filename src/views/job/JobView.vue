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
      jobs: [
        {
          id: 1,
          title: "project manager",
          detail: "creative coder project manager",
        },
        { id: 2, title: "designer", detail: "creative coder designer" },
        {
          id: 3,
          title: "developer",
          detail: "creative coder project developer",
        },
      ],
    };
  },
};
</script>

<style>
</style>