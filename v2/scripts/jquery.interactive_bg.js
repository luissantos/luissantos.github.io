!function(a){var b={strength:25,scale:1.05,animationSpeed:"200ms",contain:!0,wrapContent:!1};a.fn.interactive_bg=function(c){return this.each(function(){var d=a.extend({},b,c),e=a(this),f=e.outerHeight(),g=e.outerWidth(),h=d.strength/f,i=d.strength/g,j='ontouchstart'in document.documentElement;if(d.contain==!0&&e.css({overflow:"hidden"}),d.wrapContent==!1?e.prepend("<div class='ibg-bg'></div>"):e.wrapInner("<div class='ibg-bg'></div>"),e.find("> .ibg-bg").css({background:"url('"+a(".top-image-thumb").find('img').attr('src')+"') no-repeat center center","background-size":"cover"}),e.find("> .ibg-bg").css({width:g,height:f}),j||screen.width<=699){window.addEventListener('devicemotion',k,!1);function k(i){var c=Math.round(event.accelerationIncludingGravity.x*10)/10,f=Math.round(event.accelerationIncludingGravity.y*10)/10,g=-(c/10)*d.strength,h=-(f/10)*d.strength,b=-(g*2),a=-(h*2);e.find("> .ibg-bg").css({"-webkit-transform":"matrix("+d.scale+",0,0,"+d.scale+","+b+","+a+")","-moz-transform":"matrix("+d.scale+",0,0,"+d.scale+","+b+","+a+")","-o-transform":"matrix("+d.scale+",0,0,"+d.scale+","+b+","+a+")",transform:"matrix("+d.scale+",0,0,"+d.scale+","+b+","+a+")"})}}else e.mouseenter(function(a){d.scale!=1&&e.addClass("ibg-entering"),e.find("> .ibg-bg").css({"-webkit-transform":"matrix("+d.scale+",0,0,"+d.scale+",0,0)","-moz-transform":"matrix("+d.scale+",0,0,"+d.scale+",0,0)","-o-transform":"matrix("+d.scale+",0,0,"+d.scale+",0,0)",transform:"matrix("+d.scale+",0,0,"+d.scale+",0,0)","-webkit-transition":"-webkit-transform "+d.animationSpeed+" linear","-moz-transition":"-moz-transform "+d.animationSpeed+" linear","-o-transition":"-o-transform "+d.animationSpeed+" linear",transition:"transform "+d.animationSpeed+" linear"}).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){e.removeClass("ibg-entering")})}).mousemove(function(a){if(!e.hasClass("ibg-entering")&&!e.hasClass("exiting")){var j=a.pageX||a.clientX,k=a.pageY||a.clientY,j=j-e.offset().left-g/2,k=k-e.offset().top-f/2,b=i*j*-1,c=h*k*-1;e.find("> .ibg-bg").css({"-webkit-transform":"matrix("+d.scale+",0,0,"+d.scale+","+b+","+c+")","-moz-transform":"matrix("+d.scale+",0,0,"+d.scale+","+b+","+c+")","-o-transform":"matrix("+d.scale+",0,0,"+d.scale+","+b+","+c+")",transform:"matrix("+d.scale+",0,0,"+d.scale+","+b+","+c+")","-webkit-transition":"none","-moz-transition":"none","-o-transition":"none",transition:"none"})}}).mouseleave(function(a){d.scale!=1&&e.addClass("ibg-exiting"),e.addClass("ibg-exiting").find("> .ibg-bg").css({"-webkit-transform":"matrix(1,0,0,1,0,0)","-moz-transform":"matrix(1,0,0,1,0,0)","-o-transform":"matrix(1,0,0,1,0,0)",transform:"matrix(1,0,0,1,0,0)","-webkit-transition":"-webkit-transform "+d.animationSpeed+" linear","-moz-transition":"-moz-transform "+d.animationSpeed+" linear","-o-transition":"-o-transform "+d.animationSpeed+" linear",transition:"transform "+d.animationSpeed+" linear"}).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){e.removeClass("ibg-exiting")})})})}}(window.jQuery)