<template>
  <div class="card">
    <div class="card-body">
      <p class="card-text" v-html="body"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['result'],
  computed: {
    body() {
      return this.result.title;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 1rem;
}
.card-body {
  padding: 0.5rem;
  p {
    margin-bottom: 0;
  }
}
</style>
