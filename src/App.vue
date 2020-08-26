<template>
  <div id="app">


        <div class="px-16">
        <div>
            <nav>
                <div>
                    <header>
                        <h2 class="text-gray-700 text-6xl font-semibold">BLOGPEDIA</h2>
                    </header>
                </div>
                <ul class="flex mt-8 py-5 px-5 bg-gray-300">
                    <li class="mr-6">
                      <a class="text-white hover:text-blue-800" href="#"><router-link to="/">HOME</router-link></a>
                    </li>
                    <li class="mr-6">
                      <a class="text-white hover:text-blue-800" href="#"><router-link to="/post">POST</router-link></a>
                    </li>
                    <li class="mr-6">
                      <a class="text-white hover:text-blue-800" href="#"><router-link to="/photo">PHOTO</router-link></a>
                    </li>
                    <li class="mr-6">
                      <a class="text-white hover:text-blue-800" href="#"><router-link to="/album">ALBUM</router-link></a>
                    </li>
                  </ul>
            </nav>
        </div>
        <!-- End nav -->
        <div class="grid grid-rows-3 grid-flow-col gap-4 mt-2">
          <router-view></router-view>
            <div class="bg-gray-400 row-span-3 col-span-10">
                <div class="py-8 px-5">
                    <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                        Sidbar Links
                    </div>
                    <ul>
                        <li><a class="text-orange-700 hover:text-white" href="#">POST</a></li>
                        <li><a class="text-orange-700 hover:text-white"  href="#">PHOTO</a></li>
                        <li><a class="text-orange-700 hover:text-white"  href="#">ALBUM</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
      
  </div>
</template>
<script>
import './assets/dist/style.css'

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
