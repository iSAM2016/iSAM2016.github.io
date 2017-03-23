import Vue from "vue"

Vue.directive('panel', {
  priority: 1000,

  params: [
    
  ],
    
  bind(el, binding, vnod) {
     let _self = this,
         k=null
          if( binding.value.isbutton){//有按钮
                    let pIcon = $(el).find("#pIcon");
                    let buttons = $(el).find("button");

                    function fn1  (){
                       _self.set(  {key:true,isbutton: true})
                            pIcon.off("click",)
                            buttons.on("click",fn2)
                    }
                   
                   function fn2  (){
                       _self.set(  {key:false,isbutton: true})
                            pIcon.on("click",fn1)
                            buttons.off("click")
                    }

                   pIcon.on("click",fn1)

            }else{//没有按钮

              if(binding.value.key){
                     k = 1 
                  }else{
                      k = 0
                  }
                  $(el).find("#pIcon").on("click",function(){
                     k+=1
                          console.log( _self.$set)
                      if(k%2 === 0){
                          _self.$set(  {key:false,isbutton: false})

                      }else{
                          _self.$set(  {key:true,isbutton: false})
                        
                      }

              })
  }
  
     
  },
  update(el, binding, vnod) {

  },

  unbind: function (el, binding, vnod) {
   $(el).find("#pIcon").off("click")
  
   
  }
})

