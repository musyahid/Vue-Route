(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Post Details"],{c1a5:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h2",[t._v("Post page")]),a("div",{staticClass:"mt-8 grid lg:grid-cols-2 gap-10"},[a("div",{staticClass:"card"},[a("h1",[t._v(t._s(t.post.title))]),a("img",{staticClass:"w-full h-32 sm:h-48 object-cover",attrs:{src:"https://via.placeholder.com/600/771796",alt:"stew"}}),a("div",{staticClass:"m-4"},[a("span",{staticClass:"font-bold"},[t._v(t._s(t.post.body))]),a("span",{staticClass:"block text-gray-500 text-sm"},[t._v("Recipe by Abror")])]),t._m(0)])])])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"badge"},[a("span",[t._v("25 mins")])])}],i={name:"PostDetails",data:function(){return{id:this.$route.params.id,post:{}}},created:function(){console.log("photos created"),this.$http.get("http://jsonplaceholder.typicode.com/posts/"+this.id).then((function(t){console.log(t),this.post=t.body}))}},c=i,l=a("2877"),n=Object(l["a"])(c,e,o,!1,null,null,null);s["default"]=n.exports}}]);
//# sourceMappingURL=Post Details.75379887.js.map