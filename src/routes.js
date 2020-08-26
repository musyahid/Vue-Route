import Home from './pages/Home.vue'
import Album from './pages/Album.vue'
import Photo from './pages/Photo.vue'
import Post from './pages/Post.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/album', component: Album },
    { path: '/photo', component: Photo },
    { path: '/post', component: Post }
  ]

export default routes;