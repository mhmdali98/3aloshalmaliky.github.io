(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f914ad4"],{7496:function(e,t,a){"use strict";a("df86");var n=a("7560"),r=a("58df");t["a"]=Object(r["a"])(n["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(e){const t=e("div",{staticClass:"v-application--wrap"},this.$slots.default);return e("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[t])}})},cd59:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("dashboard-core-app-bar",{model:{value:e.expandOnHover,callback:function(t){e.expandOnHover=t},expression:"expandOnHover"}}),a("dashboard-core-drawer",{attrs:{"expand-on-hover":e.expandOnHover},on:{"update:expandOnHover":function(t){e.expandOnHover=t},"update:expand-on-hover":function(t){e.expandOnHover=t}}}),a("dashboard-core-view")],1)},r=[],o={name:"DashboardIndex",components:{DashboardCoreAppBar:()=>a.e("chunk-2810edf6").then(a.bind(null,"8e07")),DashboardCoreDrawer:()=>a.e("chunk-0f1cb0be").then(a.bind(null,"09ae")),DashboardCoreView:()=>a.e("chunk-ef8a64b2").then(a.bind(null,"2038"))},data:()=>({expandOnHover:!1})},i=o,d=a("2877"),s=a("6544"),p=a.n(s),l=a("7496"),u=Object(d["a"])(i,n,r,!1,null,null,null);t["default"]=u.exports;p()(u,{VApp:l["a"]})},df86:function(e,t,a){}}]);
//# sourceMappingURL=chunk-2f914ad4.6d29b5f9.js.map