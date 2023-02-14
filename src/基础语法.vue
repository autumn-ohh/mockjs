<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const methods = {
      getNews: () => {
        axios.get("/api/news").then((res) => {
          console.log(res);
        });
      },
      postNews: () => {
        axios.post("/api/post/news").then((res) => {
          console.log(res);
        });
      },
    };

    methods.getNews();
    methods.postNews();
    return {
      ...methods,
    };
  },
});
</script>

<style scoped></style>
