<template>
  <div>
    <h2>Album page</h2>
            <div class="mt-8 grid lg:grid-cols-2 gap-10">
            <!-- Cards go here -->
            <div class="card">
                <h1>{{album.title}}</h1>
                <img src="https://via.placeholder.com/600/771796" alt="stew" class="w-full h-32 sm:h-48 object-cover">
                <div class="badge">
                    <span>{{album.body}}</span>
                </div>
            </div>  
        </div>
  </div>
</template>

<script>

export default {
  name: "AlbumDetails",
  data(){
      return {
          id: this.$route.params.id,
          album: {},
      }
  },
  created () {
    console.log("album created");
    this.$http.get('http://jsonplaceholder.typicode.com/albums/'+this.id).then(function(data){
        console.log(data)
        this.album = data.body;
    })
    // this.list = albums
    //   console.log("m", { m: this.messsage, albums });
  },
};
</script>