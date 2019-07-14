<template>
  <div class="container py-5">
    <div class="row mb-4">
      <h1 class="col-12"></h1>
    </div>
    <div class="row">
      <Search class="col" />
    </div>
  </div>
</template>

<script>
  import Search from '@/components/Search';

  export default {
    components: {
      Search,
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    max-width: 768px;
  }
</style>
