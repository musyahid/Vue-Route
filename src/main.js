import Vue from 'vue'
import VueRouter from "vue-router";
import VuePaginate from 'vue-paginate';
import vueResource from 'vue-resource'

import App from './App.vue'
// implementasi plugin/extension
import routes from './routes'
Vue.use(VueRouter);
Vue.use(VuePaginate);
Vue.use(vueResource)

Vue.config.productionTip = false

const auth = {
  login:true,
}


const router = new VueRouter({
  routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  console.log({ to, from, next });
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (auth.login) {
      next();
    } else {
      alert("anda harus login");
      next("/");
    }
  } else {
    next();
  }
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
