const app = Vue.createApp({
  methods: {
    async getGame() {
      const res = await fetch("https://de.wikipedia.org/wiki/Minecraft");
      const { results } = await res.json();

      // console.log(results)
      this.image = results[0].image.large;
      this.publisher = results[0].publisher;
      this.release = results[0].release;
      this.platform = results[0].platform;
      this.language = results[0].language;
      this.ageRating = results[0].ageRating;
    },
  },
});

app.mount("#app");
