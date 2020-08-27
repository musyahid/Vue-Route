<template>
  <div>
    <h2>Album page</h2>
     <div class="row-span-2 gap-8">
           
        <paginate name="albums" :list="list" :per="3" >
           <div  v-for="(albums, i) in paginated('albums')" :key="i" class="w-full md:w-4/7 py-3">
                <div class="rounded w-full  flex flex-col md:flex-row mb-10">
                    <img src="https://via.placeholder.com/600/771796" class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
                    <div class="bg-white rounded px-4">
                    <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                        {{albums.title}}
                    </div>
                    <!-- <p class="block  p-2 pl-0 pt-1 text-sm text-gray-600">
                        Wonder matter now can estate esteem assure fat roused. Am performed on existence as discourse is. Pleasure friendly at marriage blessing or
                    </p> -->
                    <div class="md:mt-0 text-orange-700 font-semibold text-xl mb-2">
                        <a class="text-orange-700 hover:text-orange-400" href="#"><router-link :to="'/album/detail/'+albums.id">Read More</router-link></a>
                    </div>
                    </div>
                </div>
 
            </div> 
        </paginate> 
  <paginate-links for="albums" :limit="2" :show-step-links="true"></paginate-links>
  <paginate-links for="albums" :simple="{
        next: 'Next »',
        prev: '« Back'
      }"></paginate-links> 
        </div>  
        
  </div>
</template>

<script>
import albums from '../../data/albums'
export default {
  name: "AlbumPage",
  data(){
      return {
          list: [],
          paginate: ['albums'],
      }
  },
  created () {
    console.log("album created");
    this.list = albums
      console.log("m", { m: this.messsage, albums });
  },
};
</script>