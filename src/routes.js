// import Home from './pages/Home.vue'
// import AlbumIndex from "./pages/Albums/Index";
// import PhotoIndex from "./pages/Photos/Index";
// import PostIndex from "./pages/Posts/Index";
// import Album from './pages/Albums/Album.vue'
// import Photo from './pages/Photos/Photo.vue'
// import Post from './pages/Posts/Post.vue'
// import AlbumDetails from './pages/Albums/AlbumDetails.vue'
// import PhotoDetails from './pages/Photos/PhotoDetails.vue'
// import PostsDetails from './pages/Posts/PostDetails.vue'

const routes = [
    { path: '/', component: () => import (/* webpackChunkName: "Home */  './pages/Home.vue') },
    { 
      path: '/album', 
      component: () => import (/* webpackChunkName: "Album Index*/ './pages/Albums/Index'), 
      name: "albumIndex",
        children: [
          {
            path: "",
            component: () => import(/* webpackChunkName: "Album" */ './pages/Albums/Album.vue')
          },
          {
            path: "detail/:id",
            component: () => import (/* webpackChunkName: "Album Details" */ './pages/Albums/AlbumDetails.vue'),
            name: "albumDetail",
          }

        ] 
      },
    { 
      path: '/photo', 
        component: () => import (/* webpackChunkName: "Photo Index" */ "./pages/Photos/Index"),
        name: "photoIndex",
        children: [
          {
            path: "",
            component: () => import (/* webpackChunkName: "Photo" */ './pages/Photos/Photo.vue')
          },
          {
            path: "detail/:id",
            component: () => import (/* webpackChunkName: "PhotoDetails" */ './pages/Photos/PhotoDetails.vue'),
            name: "photoDetail",
          }

        ]    
    },
    { 
      path: '/post', 
        component: () => import (/* webpackChunkName: "Post Index" */ "./pages/Posts/Index"),
        name: 'postIndex',
        children: [
          {
            path: "",
            component: () => import(/* webpackChunkName: "Post" */ './pages/Posts/Post.vue')
          },
          {
            path: "detail/:id",
            component: () => import (/* webpackChunkName: "Post Details" */ './pages/Posts/PostDetails.vue'
            ),
            name: "postDetail",
          }

        ] 
    }
  ]

export default routes;