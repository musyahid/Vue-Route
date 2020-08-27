<template>
  <div>
    <h1>Album page Index</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import albums from '../../data/albums'
export default {
  name: "album Index",
  data() {
    return {
      list: albums,
      message: "halo",
    };
  },
  created() {
    console.log("albums detail created");
    // this.list = users;
    // console.log("m", { m: this.message, users });
  },
};
</script>