<template>
  <div>
    <h1>sidebar home</h1>
        <div class="py-8 px-5">
        <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
            Sidbar Links
        </div>
        <ul>
            <li><a class="text-orange-700 hover:text-white" href="#"><router-link to="/">HOME</router-link></a></li>
            <li><a class="text-orange-700 hover:text-white" href="#"><router-link to="/post">POST</router-link></a></li>
            <li><a class="text-orange-700 hover:text-white"  href="#"><router-link to="/photo">PHOTO</router-link></a></li>
            <li><a class="text-orange-700 hover:text-white"  href="#"><router-link to="/album">ALBUM</router-link></a></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarHome",
  data() {
    return {
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