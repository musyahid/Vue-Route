<template>
  <div>
    <h2>Photo page</h2>
     <div class="row-span-2 gap-8">
          <paginate name="photos" :list="list" :per="3" >
            <div v-for="(photos, i) in paginated('photos')" :key="i" class="w-full md:w-4/7 py-3">
                <!-- post 1 -->
                <div class="rounded w-full  flex flex-col md:flex-row mb-10">
                    <img v-bind:src="photos.thumbnailUrl" class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
                    <div class="bg-white rounded px-4">
                    <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                       {{photos.title}}
                    </div>
                    <div class="md:mt-0 text-orange-700 font-semibold text-xl mb-2">
                        <a class="text-orange-700 hover:text-orange-400" href="#"><router-link :to="'/photo/detail/'+photos.id">Read More</router-link></a>
                    </div>
                    </div>
                </div>
            </div>
                    </paginate> 
  <paginate-links for="photos" :limit="2" :show-step-links="true"></paginate-links>
  <paginate-links for="photos" :simple="{
        next: 'Next »',
        prev: '« Back'
      }"></paginate-links>         
        </div>  
  </div>
</template>

<script>
import photos from '../../data/photos'
export default {
  name: "PhotoPage",
  data(){
      return {
          list: [],
            paginate: ['photos'],
      }
  },
  created() { 
    console.log("photo created");
    this.list = photos
      console.log("m", { m: this.messsage, photos });
  },
};
</script>