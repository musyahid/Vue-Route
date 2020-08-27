<template>
  <div>
    <h1>Post page Index</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import post from '../../data/posts'
export default {
  name: "post Index",
  data() {
    return {
      list: post,
      message: "halo",
    };
  },
  created() {
    console.log("post detail created");
    // this.list = users;
    // console.log("m", { m: this.message, users });
  },
};
</script>