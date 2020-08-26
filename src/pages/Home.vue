<template>
  <div>
    <h2>Home page</h2>
     <div class="row-span-2 gap-8">
            <div class="w-full md:w-4/7 py-3">
                <!-- post 1 -->
                <div class="rounded w-full  flex flex-col md:flex-row mb-10">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
                    <div class="bg-white rounded px-4">
                    <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                        At every tiled on ye defer do. No attention suspected oh difficult.
                    </div>
                    <p class="block  p-2 pl-0 pt-1 text-sm text-gray-600">
                        Wonder matter now can estate esteem assure fat roused. Am performed on existence as discourse is. Pleasure friendly at marriage blessing or
                    </p>
                    <div class="md:mt-0 text-orange-700 font-semibold text-xl mb-2">
                        <a class="text-orange-700 hover:text-orange-400" href="#">Read More</a>
                    </div>
                    </div>
                </div>
            </div> 
            <div class="w-full md:w-4/7 py-3">
                <!-- post 1 -->
                <div class="rounded w-full  flex flex-col md:flex-row mb-10">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
                    <div class="bg-white rounded px-4">
                    <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                        At every tiled on ye defer do. No attention suspected oh difficult.
                    </div>
                    <p class="block  p-2 pl-0 pt-1 text-sm text-gray-600">
                        Wonder matter now can estate esteem assure fat roused. Am performed on existence as discourse is. Pleasure friendly at marriage blessing or
                    </p>
                    <div class="md:mt-0 text-orange-700 font-semibold text-xl mb-2">
                        <a class="text-orange-700 hover:text-orange-400" href="#">Read More</a>
                    </div>
                    </div>
                </div>
            </div>         
        </div>  
  </div>
</template>

<script>
export default {
  name: "HomePage",
  components: {
  },
  created: () => {
    console.log("home created");
  },
};
</script>