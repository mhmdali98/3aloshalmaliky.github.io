(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf320"],{"634a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"dashboard",fluid:"",tag:"section"}},[a("v-text-field",{staticClass:"mt-4",attrs:{label:"اكتب للبحث",outlined:"","append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-data-table",{staticClass:"elevation-1",attrs:{search:t.search,headers:t.headers,items:t.desserts,"sort-by":"phone",loading:t.loading},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("قائمة اصناف العناصر")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",o,!1),i),[t._v("اضافة صنف")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary lighten-1 mb-5"}},[a("v-toolbar-title",[a("h3",[t._v(t._s(t.formTitle))])]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!t.dialog}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{staticClass:"py-0",attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{label:"اسم الصنف",outlined:"",rules:[t.rules.required]},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:t.close}},[t._v("الغاء")]),a("v-btn",{attrs:{loading:t.loadSave,color:"blue darken-1",text:""},on:{click:t.save}},[t._v("حفظ")])],1)],1)],1)],1)]},proxy:!0},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("اعادة تحميل")])]},proxy:!0}])})],1)},o=[],s=a("bc3a"),n=a.n(s),r=a("3d20"),d=a.n(r),c=a("3a60"),l={directives:{mask:c["mask"]},data:()=>({rules:{required:t=>!!t||"مطلوب",min:t=>t.length>=6||"كلمة المرور يجب ان تتكون من 6 عناصر او اكثر",minPhon:t=>13==t.length||"رقم الهاتف يجب ان يتكون من 11 رقم"},search:"",loading:!1,loadSave:!1,dialog:!1,headers:[{text:"اسم الصنف",align:"start",value:"name"}],desserts:[],editedIndex:-1,editedItem:{name:"",id:""},defaultItem:{name:""}}),computed:{formTitle(){return-1===this.editedIndex?"اضافة صنف":"تعديل معلومات الصنف"}},watch:{dialog(t){t||this.close()}},created(){this.initialize()},methods:{showUsers(){this.loading=!0,n.a.get("categories",{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+this.$store.state.idToken}}).then(t=>{this.loading=!1,this.desserts=t.data}).catch(()=>{this.loading=!1})},initialize(){this.showUsers()},editItem(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.editedItem.phone=this.editedItem.phone,this.dialog=!0},deleteItem(t){d.a.fire({title:"هل انت متاكد من العملية  ؟ ",text:"",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"نعم",cancelButtonText:"لا"}).then(e=>{e.value&&n.a.delete("users?Id="+t.id,{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+this.$store.state.idToken}}).then(()=>{d.a.fire("تم ","تمت العملية  بنجاح","success"),this.showUsers()}).catch(()=>{d.a.fire("لم يتم ","لم تمت العملية  بنجاح","error")})})},close(){this.dialog=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},save(){if(this.loadSave=!0,this.editedIndex>-1){const t={name:this.editedItem.name};n.a.put("categories/"+this.editedItem.id,t,{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+this.$store.state.idToken}}).then(()=>{this.loadSave=!1,this.showUsers(),this.close(),d.a.fire({title:"تم تعديل المعلومات",text:"",icon:"success",confirmButtonText:"اغلاق"})}).catch(()=>{this.loadSave=!1,d.a.fire({title:"تاكد من ملى المعلومات",text:"",icon:"error",confirmButtonText:"اغلاق"})})}else if(this.editedItem.name){const t={name:this.editedItem.name};n.a.post("categories",t,{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+this.$store.state.idToken}}).then(()=>{this.loadSave=!1,this.showUsers(),this.close(),d.a.fire({title:"تم اضافة الصنف",text:"",icon:"success",confirmButtonText:"اغلاق"})}).catch(t=>{this.loadSave=!1,400.2==t.response.data.code?d.a.fire({title:"اسم الصنف موجود",text:"",icon:"error",confirmButtonText:"اغلاق"}):d.a.fire({title:"تاكد من ملى المعلومات",text:"",icon:"error",confirmButtonText:"اغلاق"})})}else this.loadSave=!1,d.a.fire({title:"تاكد من ملى المعلومات",text:"",icon:"error",confirmButtonText:"اغلاق"})}}},h=l,m=a("2877"),u=a("6544"),v=a.n(u),p=a("8336"),f=a("b0af"),x=a("99d9"),b=a("62ad"),g=a("a523"),T=a("8fea"),k=a("169a"),I=a("ce7e"),w=a("132d"),C=a("0fd9"),B=a("2fa4"),y=a("8654"),V=a("71d9"),_=a("2a7f"),j=Object(m["a"])(h,i,o,!1,null,null,null);e["default"]=j.exports;v()(j,{VBtn:p["a"],VCard:f["a"],VCardActions:x["a"],VCardText:x["b"],VCol:b["a"],VContainer:g["a"],VDataTable:T["a"],VDialog:k["a"],VDivider:I["a"],VIcon:w["a"],VRow:C["a"],VSpacer:B["a"],VTextField:y["a"],VToolbar:V["a"],VToolbarTitle:_["a"]})}}]);
//# sourceMappingURL=chunk-2d0cf320.141ceb40.js.map