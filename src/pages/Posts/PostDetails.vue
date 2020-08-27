<template>
  <div>
    <h2>Post page</h2>
            <div class="mt-8 grid lg:grid-cols-2 gap-10">
            <!-- Cards go here -->
            <div class="card">
                <h1>{{post.title}}</h1>
                <img src="https://via.placeholder.com/600/771796" alt="stew" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-4">
                    <span class="font-bold">{{post.body}}</span>
                    <span class="block text-gray-500 text-sm">Recipe by Abror</span>
                </div>
                <div class="badge">
                    <span>25 mins</span>
                </div>
            </div>
        </div>    
  </div>
</template>

<script>
export default {
  name: "PostDetails",
  data(){
      return {
          id: this.$route.params.id,
          post: {}
      }
  },
  created () {
    console.log("photos created");
        this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id).then(function(data){
        console.log(data)
        this.post = data.body;
    })
    // this.list = albums
    //   console.log("m", { m: this.messsage, albums });
  },
};
</script>