<template>
  <div>
    <h2>Post page</h2>
     <div class="row-span-2 gap-8">
          <paginate name="posts" :list="list" :per="3" >
            <div v-for="(posts, i) in paginated('posts')" :key="i" class="w-full md:w-4/7 py-3">
                <!-- post 1 -->
                <div class="rounded w-full  flex flex-col md:flex-row mb-10">
                    <img src="https://via.placeholder.com/600/771796" class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
                    <div class="bg-white rounded px-4">
                    <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                       {{posts.title}}
                    </div>
                    <p class="block  p-2 pl-0 pt-1 text-sm text-gray-600">
                        {{posts.body.substring(0,120)+"...." }}
                    </p>
                    <div class="md:mt-0 text-orange-700 font-semibold text-xl mb-2">
                        <a class="text-orange-700 hover:text-orange-400" href="#"><router-link :to="'/post/detail/'+posts.id">Read More</router-link></a>
                    </div>
                    </div>
                </div>
            </div>  
          </paginate>
  <paginate-links for="posts" :limit="2" :show-step-links="true"></paginate-links>
  <paginate-links for="posts" :simple="{
        next: 'Next »',
        prev: '« Back'
      }"></paginate-links>     
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
          paginate: ['posts'],
      }
  },
  created() {
    console.log("post created");
    this.list = posts
      console.log("m", { m: this.messsage, posts });
  },
};
</script>