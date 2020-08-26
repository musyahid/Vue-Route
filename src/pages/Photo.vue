<template>
  <div>
    <h2>Photo page</h2>
        <div class="row-span-2 gap-8">
            <paginate
  name="languages"
  :list="langs"
  :per="4"
>
  <li v-for="(lang, i) in paginated('languages')"  :key="i">
    {{ lang }}
  </li>
</paginate>
 <paginate-links for="languages" :show-step-links="true"></paginate-links>
  <paginate-links for="languages" :limit="2" :show-step-links="true"></paginate-links>
  <paginate-links for="languages" :simple="{
        next: 'Next »',
        prev: '« Back'
      }"></paginate-links>
        
   
        </div>  
  </div>
  
  
</template>

<script>
export default {
  name: "PhotoPage",
   data(){
      return {
          langs: ["Inggris","Prancis","Italia","Arab","Indonesia","Malaysia"],
          paginate: ['languages']
      }
  },
  created () {
    console.log("photo created");

  },
};
</script>