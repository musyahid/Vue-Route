<template>
  <div>
    <h2>Album page</h2>
            <div class="mt-8 grid lg:grid-cols-2 gap-10">
            <!-- Cards go here -->
            <div class="card">
                <h1>{{$route.params.id}}</h1>
                <img src="img/stew.jpg" alt="stew" class="w-full h-32 sm:h-48 object-cover">
                <div class="m-4">
                    <span class="font-bold">5 Bean Chilli Stew</span>
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
import albums from '../../data/albums'
export default {
  name: "AlbumDetails",
  data(){
      return {
          list: albums,
          paginate: ['albums'],
      }
  },
  created () {
    console.log("album created");
  
    // this.list = albums
    //   console.log("m", { m: this.messsage, albums });
  },
};
</script>