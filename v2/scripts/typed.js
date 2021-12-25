!function(a){"use strict";var b=function(b,c){this.el=a(b),this.options=a.extend({},a.fn.typed.defaults,c),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};b.prototype={constructor:b,init:function(){var a=this;a.timeout=setTimeout(function(){for(var b=0;b<a.strings.length;++b)a.sequence[b]=b;a.shuffle&&(a.sequence=a.shuffleArray(a.sequence)),a.typewrite(a.strings[a.sequence[a.arrayPos]],a.strPos)},a.startDelay)},build:function(){var b=this,c;this.showCursor===!0&&(this.cursor=a('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.stringsElement&&(this.strings=[],this.stringsElement.hide(),console.log(this.stringsElement.children()),c=this.stringsElement.children(),a.each(c,function(d,c){b.strings.push(a(c).html())})),this.init()},typewrite:function(c,b){if(this.stop!==!0){var d=Math.round(70*Math.random())+this.typeSpeed,a=this;a.timeout=setTimeout(function(){var g=0,d=c.substr(b),h,e,i,f;if("^"===d.charAt(0)&&(h=1,/^\^\d+/.test(d)&&(d=/\d+/.exec(d)[0],h+=d.length,g=parseInt(d)),c=c.substring(0,b)+c.substring(b+h)),"html"===a.contentType)if(e=c.substr(b).charAt(0),"<"===e||"&"===e){i="",f="";for(f="<"===e?">":";";c.substr(b+1).charAt(0)!==f&&(i+=c.substr(b).charAt(0),b++,!(b+1>c.length)););b++,i+=f}a.timeout=setTimeout(function(){if(b===c.length){if(a.options.onStringTyped(a.arrayPos),a.arrayPos===a.strings.length-1&&(a.options.callback(),a.curLoop++,a.loop===!1||a.curLoop===a.loopCount))return;a.timeout=setTimeout(function(){a.backspace(c,b)},a.backDelay)}else{0===b&&a.options.preStringTyped(a.arrayPos);var d=c.substr(0,b+1);a.attr?a.el.attr(a.attr,d):a.isInput?a.el.val(d):"html"===a.contentType?a.el.html(d):a.el.text(d),b++,a.typewrite(c,b)}},g)},d)}},backspace:function(c,b){if(this.stop!==!0){var d=Math.round(70*Math.random())+this.backSpeed,a=this;a.timeout=setTimeout(function(){var e,d;if("html"===a.contentType&&">"===c.substr(b).charAt(0)){for(e="";"<"!==c.substr(b-1).charAt(0)&&(e-=c.substr(b).charAt(0),b--,!(0>b)););b--,e+="<"}d=c.substr(0,b),a.attr?a.el.attr(a.attr,d):a.isInput?a.el.val(d):"html"===a.contentType?a.el.html(d):a.el.text(d),b>a.stopNum?(b--,a.backspace(c,b)):b<=a.stopNum&&(a.arrayPos++,a.arrayPos===a.strings.length?(a.arrayPos=0,a.shuffle&&(a.sequence=a.shuffleArray(a.sequence)),a.init()):a.typewrite(a.strings[a.sequence[a.arrayPos]],b))},d)}},shuffleArray:function(a){var d,c,b=a.length;if(b)for(;--b;)c=Math.floor(Math.random()*(b+1)),d=a[c],a[c]=a[b],a[b]=d;return a},reset:function(){var a=this;clearInterval(a.timeout),this.el.attr("id"),this.el.empty(),"undefined"!=typeof this.cursor&&this.cursor.remove(),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},a.fn.typed=function(c){return this.each(function(){var e=a(this),d=e.data("typed"),f="object"==typeof c&&c;d&&d.reset(),e.data("typed",d=new b(this,f)),"string"==typeof c&&d[c]()})},a.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery)