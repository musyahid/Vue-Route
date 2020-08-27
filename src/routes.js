
const routes = [
    { path: '/', 
      components: {
        default:() => import (/* webpackChunkName: "Home */  './pages/Home.vue'),
        'sidebar-widget' : () => import('./pages/sidebar/SidebarHome') 
      } 
    },
    { 
      path: '/album', 
      components: {
        default: () => import (/* webpackChunkName: "Album Index*/ './pages/Albums/Index'), 
        'sidebar-widget' : () => import('./pages/sidebar/SidebarAlbum') 
      },
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
        components: {
          default: () => import (/* webpackChunkName: "Photo Index" */ "./pages/Photos/Index"),
          'sidebar-widget' : () => import('./pages/sidebar/SidebarPhotos')
        },
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
        components: {
          default:() => import (/* webpackChunkName: "Home */  './pages/Posts/Index'),
          'sidebar-widget' : () => import('./pages/sidebar/SidebarPosts') 
        },
        meta: { requiresAuth: true },
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