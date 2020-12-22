export default {
  data() {
    return {
      loading: true,
      api: null
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.api = null;
      fetch(`@/api/produtos/${url}/${url}.jpg`)
        .then(r => r.json())
        .then(r => {
          this.api = r;
        });
    }
  }
};