<template>
  <div>
    <h2>Photo page</h2>
            <div class="mt-8 grid lg:grid-cols-2 gap-10">
            <!-- Cards go here -->
            <div class="card">
                <h1>{{photo.title}}</h1>
                <img v-bind:src="photo.url" alt="stew" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-4">
                    <span class="font-bold">{{photo.title}}</span>
                    <span class="block text-gray-500 text-sm">Recipe by Abror</span>
                </div>
            </div>
            
        </div>
        
  </div>
</template>

<script>
export default {
  name: "PhotoDetails",
  data(){
      return {
          id: this.$route.params.id,
          photo: {}
      }
  },
  created () {
    console.log("photos created");
    this.$http.get('http://jsonplaceholder.typicode.com/photos/'+this.id).then(function(data){
        console.log(data)
        this.photo = data.body;
    })
    // this.list = albums
    //   console.log("m", { m: this.messsage, albums });
  },
};
</script>