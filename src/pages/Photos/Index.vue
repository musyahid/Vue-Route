<template>
  <div>
    <h1>Photo page Index</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import photos from '../../data/photos'
export default {
  name: "photos Index",
  data() {
    return {
      list: photos,
      message: "halo",
    };
  },
  created() {
    console.log("photos detail created");
    // this.list = users;
    // console.log("m", { m: this.message, users });
  },
};
</script>