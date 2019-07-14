<template>
  <div>
    <input @keyup="search" v-model.trim="query" type="text" class="form-control" placeholder="Search...">
    <div class="mt-4">
      <Result v-for="result in results" :key="result.id" :result="result" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Result from '@/components/Result';

export default {
  data() {
    return {
      query: '',
    };
  },
  computed: mapState({
    results: (state) => state.searchResults,
  }),
  methods: {
    search() {
      if (this.query != this.lastQuery) {
        this.$store.dispatch('search', this.query);
        this.lastQuery = this.query;
      }
    },
  },
  components: {
    Result,
  },
};
</script>
