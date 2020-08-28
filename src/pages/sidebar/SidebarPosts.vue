<template>
  <div>
        <div class="py-8 px-5">
        <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
            LAST POST
        </div>
                <!-- post 1 -->
                <div class="rounded w-full  flex flex-col md:flex-row mb-10">
                    <img src="https://via.placeholder.com/600/771796" class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
                    <div class="bg-white rounded px-4">
                    <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                       {{list.title}}
                    </div>
  
                    </div>
                </div>

    </div>
  </div>
</template>

<script>
import posts from '../../data/posts'


export default {
  name: "PostPage",
  data(){
      return {
          list: [],
      }
  },
  created() {
    console.log("post created");
    this.list = posts[posts.length-1]
   
  },
};
</script>