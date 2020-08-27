import Home from './pages/Home.vue'
import AlbumIndex from "./pages/Albums/Index";
import PhotoIndex from "./pages/Photos/Index";
import PostIndex from "./pages/Posts/Index";
import Album from './pages/Albums/Album.vue'
import Photo from './pages/Photos/Photo.vue'
import Post from './pages/Posts/Post.vue'
import AlbumDetails from './pages/Albums/AlbumDetails.vue'
import PhotoDetails from './pages/Photos/PhotoDetails.vue'
import PostsDetails from './pages/Posts/PostDetails.vue'

const routes = [
    { path: '/', component: Home },
    { 
      path: '/album', 
      component: AlbumIndex, 
      name: "albumIndex",
        children: [
          {
            path: "",
            component: Album
          },
          {
            path: "detail/:id",
            component: AlbumDetails,
            name: "albumDetail",
          }

        ] 
      },
    { 
      path: '/photo', 
        component: PhotoIndex,
        name: "photoIndex",
        children: [
          {
            path: "",
            component: Photo
          },
          {
            path: "detail/:id",
            component: PhotoDetails,
            name: "photoDetail",
          }

        ]    
    },
    { 
      path: '/post', 
        component: PostIndex,
        name: 'postIndex',
        children: [
          {
            path: "",
            component: Post
          },
          {
            path: "detail/:id",
            component: PostsDetails,
            name: "postDetail",
          }

        ] 
    },
    // { path: '/album/:id', component: AlbumDetails },
  ]

export default routes;