<template>
  <div>
      <div class="py-8 px-5">
        <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
            LAST ALBUMS
        </div>
        <!-- post 1 -->
        <div class="rounded w-full  flex flex-col md:flex-row mb-10">
            <img v-bind:src="list.thumbnailUrl" class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
            <div class="bg-white rounded px-4">
            <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
              {{list.title}}
            </div>

            </div>
        </div>
        <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
            GALERI GALERY
        </div>
             <div class="mt-8 grid lg:grid-cols-3 gap-10">
                    <!-- Cards go here -->
                    <div  v-for="(photos, i) in galery" :key="i" class="card">
                        <img v-bind:src="photos.thumbnailUrl" alt="stew" class="w-full h-32 sm:h-48 object-cover">
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
  </div>
</template>

<script>
import photos from '../../data/photos'

export default {
  name: "PostPage",
  data(){
      return {
          list: [],
          galery: []
      }
  },
  created() {
    console.log("post created");
    this.list = photos[photos.length-1]
    this.galery = photos
  },
};
</script>