//move.js

(function() {
  	var _profix = (function( obj ){
    var props = "";
    var aPrefix = ["moz","o", "webkit", "ms"];
   
    for( var i in aPrefix ) {
        props = aPrefix[i] + "Transition";
        if( obj.style[props]  !== undefined ) {
          return "-" + aPrefix[i].toLowerCase() + "-"
        }
      }
  return false
  })(document.createElement( PageSwitch ));
  


  var PageSwitch = (function(){
       function PageSwitch( element, options ) {
          this.settings = $.extend( true, $.fn.PageSwitch.defaults, options ||{} );
          this.element = element;
          this.inint();

       };
    
       PageSwitch.prototype = {

        /*初始化DOm结构，参数*/
        inint: function() {
         var me  = this;
         me.selectors = me.settings.selectors;
         me.sections = me.selectors.sections;
         me.section = me.selectors.section;
         me.pages = me.selectors.pages;
         me.vertical = ( me.settings.vertical === "vertical" ) ? true : false;
         me.index = me.settings.index;
         me.keybord = me.settings.keybord;
         me.during = me.settings.during;
         me.easein = me.settings.easein;
         me.loop = me.settings.loop;
         me.isSwith = true;

          me.layout();
          me._bindEvent();
        },

        /*页面布局*/
        layout: function(){
          var  me = this;        
          if( !me.vertical ) {

            var width = ( me._pageContent() *100 ) +"%";
            var cellWidth = ( 100 / me._pageContent() ).toFixed(2) + "%";
     
            me.element.find( me.sections ).width( width );
            me.element.find(me.section).width( cellWidth ).css( "float", "left" )
      
          }
           
         me._pageLayout();
           
        },

        pre: function(){
          var me = this;
            if( me.index < me.pageCounts ) {
               me.index --;
             }else if( me.loop ){
                 me.index = me.pageCounts;
             }
            me._switch();

        },

        next: function() {
            var me = this;
           
            if( me.index < me.pageCounts-1) {
               me.index ++;
             }else if( me.loop ){
                 me.index = 0;
             }
            me._switch();
        },



         /*分页布局*/
        _pageLayout: function(){
          var me = this,
             
              pageStr = "",
              pagesClass ="" ,
              str ="" ;
               me.active = me.selectors.active.substring(1);//////////////////
             //me.activeClass = me.selectors.active.substring(1);
              me.pageCounts = me._pageContent(),
              pagesClass = me.pages.substring(1);
            
          for( var i = 0; i < me.pageCounts; i++) {
             pageStr +="<li class=normal></li>";
          }
        
         str = "<ul class="+ pagesClass +">"+ pageStr +"</ul>";        
         me.element.append( str )
         me.element.find(me.pages).find( "li" ).eq(0).addClass( me.active )

        },

        _switch: function(){
              var me = this,
               top = 0,
               offset = 0,
               traslate  = null,
               animateOff = null;

              if(  me.isSwith ) {
                me.isSwith = false;
              }else{
                return
              }
              me._pagesTagActive();
              var sections = me.element.find( me.sections );

              if(  me.vertical ){
                 top = sections.find( me.section ).eq( 0 ).height();
                 offset = sections.find( me.section ).eq( 0 ).position().top;
                 traslate = "translateY(-"+Math.abs(top*( me.index)) +"px)";
                 animateOff = {"top": -Math.abs(top*( me.index))+'px'};
                       if(-Math.abs(top*( me.index)) == offset ) {
                        me.isSwith =true;
                        return true;
                       }else{}

              }else{
                 left = sections.find( me.section ).eq(0).width();
                 offset = sections.find( me.section ).eq( 0 ).position().left;
                 traslate = "translateX(-"+Math.abs(left*( me.index)) +"px)";
                  animateOff = {left: -Math.abs(left*( me.index)) +"px"} 
                   if(-Math.abs(left*( me.index)) == offset ) {
                        me.isSwith =true;
                        return true;
                       }else{}
              }

             
              if( _profix ) {

                sections.css({
                "transition":"all "+ me.settings.during+"ms "+me.settings.easein,
                 "transform":traslate,
                })
              }else{

                sections.animate(animateOff, me.settings.during,function(){
                 me.isSwith =true;
                })


              }
      

      },

         /*页面数量*/
      _pageContent: function() {
         return this.element.find( this.section).length;
      },

      _windowhHei: function(){
       
        return    this.vertical ? this.element.height() : this.element.width()
      },

      /*绑定事件*/
      _bindEvent: function(){
            var me = this;
            var section =  me.element.find( me.sections );
             //鼠标事件
             me.element.on( "mousewheel DOMMouseScroll", function(e) {
             
                  var delta  = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                 ////////////////////////////////////////////
               if( delta < 0 && (( me.index < me.pageCounts-1) ||  me.loop) ){
  
                if( me.isSwith ){
                      me.next();
                         } else { 
                            return true ;
                            }
                
               }else if( delta > 0 && ( me.index ||  me.loop) ){
                 if( me.isSwith ){ me.pre() } else {return true }
                  
               }
        }) ;

        /*分页点击*/
        me.element.delegate( "li", "click", function(){

            if( me.isSwith ) {
                me.index = $(this).index() ;
                me._switch();

                  }else{
                    return
              }
          })
        /*键盘事件*/
        if( me.keybord ) {
          $(document).on("keydown", function(e){
              var keyCode = e.keyCode;
              if( keyCode ==37 || keyCode ==38 ) {
                 if( me.isSwith ) { me.pre()}else{return}
                
              } else if( keyCode == 39 || keyCode ==40 ){
                if( me.isSwith ) { me.next()}else{return}
                 
              }
          })
        };

        /*窗口事件*/
        $(window).resize(function(){
          var windowhHei = me._windowhHei();
          var offset = me.vertical ?  me.element.find( me.section ).eq( me.index ).offset().top :  me.element.find( me.section ).eq( me.index ).offset().left ;

            if( (Math.abs(offset) > windowhHei /2) && (me.index < me.pageCounts-1) ){
             
                if( me.isSwith ) {  me.index ++; }else{return true}

         
            }else{

            }
         
         if( me.isSwith ) { me._switch() }else{return true}
        });



        /*动画结束*/
        me.element.on("transitionend webkitTransitionEnd  oTransitionEnd mozTransitionEnd", function(){
             me.isSwith  = true;
             
             
        })

      },


      /*分页标签切换样式*/
      _pagesTagActive: function (){
        var me = this;

           me.element.find(me.pages).find( "li" ).each(function(){
            $(this).removeClass(( me.active ))
          })

            me.element.find(me.pages).find( "li" ).eq( me.index ).addClass( me.active )
      },

       }
   return PageSwitch
  })()


  $.fn.PageSwitch = function( options ){
       return this.each( function() {
        var me = $(this),/////////////////////
            instance = null;
           instance = me.data( "PageSwitch" );
 
            if( !instance ) {
               instance = new PageSwitch( me, options );////////
                //var instance = new PageSwitch( me, options );////////

              me.data( "PageSwitch", instance );
            }
          //return PageSwitch;///////////////////////////////////////


       });
  };

  $.fn.PageSwitch.defaults = {
       selectors: {
        sections: ".sections",
        section: ".section",
        pages: ".pages",
        active: ".active"
       },

       index: 0,
       loop: false,
       vertical: "vertical",
       keybord: true,
       during: 1000,
       easein: "ease",


  };


})(jQuery)