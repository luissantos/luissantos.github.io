window.Modernizr=function(E,p,n){var v,a,h,g,u,s,q,t,y,m,r,o,e,C,z,j,i,c,l,d,f;function w(a){q.cssText=a}function D(a,b){return w(prefixes.join(a+";")+(b||""))}function b(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function x(b,d){var c,a;for(c in b)if(a=b[c],!B(a,"-")&&q[a]!==n)return d!="pfx"||a;return!1}function A(c,e,f){var d,a;for(d in c)if(a=e[c[d]],a!==n)return f===!1?c[d]:b(a,"function")?a.bind(f||e):a;return!1}function k(a,c,f){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+r.join(d+" ")+d).split(" ");return b(c,"string")||b(c,"undefined")?x(e,c):(e=(a+" "+o.join(d+" ")+d).split(" "),A(e,c,f))}v="2.6.2",a={},h=!0,g=p.documentElement,u="modernizr",s=p.createElement(u),q=s.style,y={}.toString,m="Webkit Moz O ms",r=m.split(" "),o=m.toLowerCase().split(" "),e={},C={},z={},j=[],i=j.slice,l={}.hasOwnProperty,!b(l,"undefined")&&!b(l.call,"undefined")?d=function(a,b){return l.call(a,b)}:d=function(a,c){return c in a&&b(a.constructor.prototype[c],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(d){var a=this,b,c;if(typeof a!="function")throw new TypeError;return b=i.call(arguments,1),c=function(){var f,g,e;return this instanceof c?(f=function(){},f.prototype=a.prototype,g=new f,e=a.apply(g,b.concat(i.call(arguments))),Object(e)===e?e:g):a.apply(d,b.concat(i.call(arguments)))},c}),e.csstransitions=function(){return k("transition")};for(f in e)d(e,f)&&(c=f.toLowerCase(),a[c]=e[f](),j.push((a[c]?"":"no-")+c));return a.addTest=function(b,c){if(typeof b=="object")for(var e in b)d(b,e)&&a.addTest(e,b[e]);else{if(b=b.toLowerCase(),a[b]!==n)return a;c=typeof c=="function"?c():c,typeof h!="undefined"&&h&&(g.className+=" "+(c?"":"no-")+b),a[b]=c}return a},w(""),s=t=null,function(o,a){var f,k,l,e,h,d,i,b,c;function r(a,d){var b=a.createElement("p"),c=a.getElementsByTagName("head")[0]||a.documentElement;return b.innerHTML="x<style>"+d+"</style>",c.insertBefore(b.lastChild,c.firstChild)}function m(){var a=c.elements;return typeof a=="string"?a.split(" "):a}function g(b){var a=i[b[h]];return a||(a={},d++,b[h]=d,i[d]=a),a}function n(c,f,d){if(f||(f=a),b)return f.createElement(c);d||(d=g(f));var e;return d.cache[c]?e=d.cache[c].cloneNode():l.test(c)?e=(d.cache[c]=d.createElem(c)).cloneNode():e=d.createElem(c),e.canHaveChildren&&!k.test(c)?d.frag.appendChild(e):e}function p(c,d){if(c||(c=a),b)return c.createDocumentFragment();d=d||g(c);for(var f=d.frag.cloneNode(),e=0,h=m(),i=h.length;e<i;e++)f.createElement(h[e]);return f}function q(b,a){a.cache||(a.cache={},a.createElem=b.createElement,a.createFrag=b.createDocumentFragment,a.frag=a.createFrag()),b.createElement=function(d){return c.shivMethods?n(d,b,a):a.createElem(d)},b.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(b){return a.createElem(b),a.frag.createElement(b),'c("'+b+'")'})+");return n}")(c,a.frag)}function j(d){d||(d=a);var f=g(d);return c.shivCSS&&!e&&!f.hasCSS&&(f.hasCSS=!!r(d,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),b||q(d,f),d}f=o.html5||{},k=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,l=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",d=0,i={},function(){try{var c=a.createElement("a");c.innerHTML="<xyz></xyz>",e="hidden"in c,b=c.childNodes.length==1||function(){a.createElement("a");var b=a.createDocumentFragment();return typeof b.cloneNode=="undefined"||typeof b.createDocumentFragment=="undefined"||typeof b.createElement=="undefined"}()}catch(a){e=!0,b=!0}}(),c={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:b,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:j,createElement:n,createDocumentFragment:p},o.html5=c,j(a)}(this,p),a._version=v,a._domPrefixes=o,a._cssomPrefixes=r,a.testProp=function(a){return x([a])},a.testAllProps=k,a.prefixed=function(a,b,c){return b?k(a,b,c):k(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+j.join(" "):""),a}(this,this.document),function(e,a,z){function k(a){return"[object Function]"==n.call(a)}function l(a){return"string"==typeof a}function m(){}function q(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function f(){var a=j.shift();i=1,a?a.t?h(function(){("c"==a.t?c.injectCss:c.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),f()):i=0}function A(k,e,r,u,v,w,l){function p(c){if(!n&&q(d.readyState)&&(o.r=n=1,!i&&f(),d.onload=d.onreadystatechange=null,c)){"img"!=k&&h(function(){t.removeChild(d)},50);for(var a in b[e])b[e].hasOwnProperty(a)&&b[e][a].onload()}}var l=l||c.errorTimeout,d=a.createElement(k),n=0,m=0,o={t:r,s:e,e:v,a:w,x:l};1===b[e]&&(m=1,b[e]=[]),"object"==k?d.data=e:(d.src=e,d.type=k),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){p.call(this,m)},j.splice(u,0,o),"img"!=k&&(m||2===b[e]?(t.insertBefore(d,s?null:g),h(p,l)):b[e].push(d))}function B(b,a,c,d,e){return i=0,a=a||"j",l(b)?A("c"==a?y:w,b,a,this.i++,c,d,e):(j.splice(this.i++,0,b),1==j.length&&f()),this}function x(){var a=c;return a.loader={load:B,i:0},a}var d=a.documentElement,h=e.setTimeout,g=a.getElementsByTagName("script")[0],n={}.toString,j=[],i=0,r="MozAppearance"in d.style,s=r&&!!a.createRange().compareNode,t=s?d:g.parentNode,d=e.opera&&"[object Opera]"==n.call(e.opera),d=!!a.attachEvent&&!d,w=r?"object":d?"script":"img",y=d?"script":w,p=Array.isArray||function(a){return"[object Array]"==n.call(a)},o=[],b={},v={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},u,c;c=function(a){function i(c){var c=c.split("!"),f=o.length,a=c.pop(),g=c.length,a={url:a,origUrl:a,prefixes:c},e,b,d;for(b=0;b<g;b++)d=c[b].split("="),(e=v[d.shift()])&&(a=e(a,d));for(b=0;b<f;b++)a=o[b](a);return a}function e(d,c,f,e,g){var a=i(d),h=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(c&&(c=k(c)?c:c[d]||c[e]||c[d.split("/").pop().split("?")[0]]),a.instead?a.instead(d,c,f,e,g):(b[a.url]?a.noexec=!0:b[a.url]=1,f.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":z,a.noexec,a.attrs,a.timeout),(k(c)||k(h))&&f.load(function(){x(),c&&c(a.origUrl,g,e),h&&h(a.origUrl,g,e),b[a.url]=2})))}function h(a,j){function i(a,f){if(a){if(l(a))f||(b=function(){var a=[].slice.call(arguments);g.apply(this,a),d()}),e(a,b,j,0,h);else if(Object(a)===a)for(c in n=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(c)&&(!f&&!--n&&(k(b)?b=function(){var a=[].slice.call(arguments);g.apply(this,a),d()}:b[c]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),d()}}(g[c])),e(a[c],b,j,c,h))}else!f&&d()}var h=!!a.test,f=a.load||a.both,b=a.callback||m,g=b,d=a.complete||m,n,c;i(h?a.yep:a.nope,!!f),f&&i(f)}var f,d,g=this.yepnope.loader;if(l(a))e(a,0,g,0);else if(p(a))for(f=0;f<a.length;f++)d=a[f],l(d)?e(d,0,g,0):p(d)?c(d):Object(d)===d&&h(d,g);else Object(a)===a&&h(a,g)},c.addPrefix=function(a,b){v[a]=b},c.addFilter=function(a){o.push(a)},c.errorTimeout=1e4,null==a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",u=function(){a.removeEventListener("DOMContentLoaded",u,0),a.readyState="complete"},0)),e.yepnope=x(),e.yepnope.executeStack=f,e.yepnope.injectJs=function(o,d,k,j,l,n){var b=a.createElement("script"),e,i,j=j||c.errorTimeout;b.src=o;for(i in k)b.setAttribute(i,k[i]);d=n?f:d||m,b.onreadystatechange=b.onload=function(){!e&&q(b.readyState)&&(e=1,d(),b.onload=b.onreadystatechange=null)},h(function(){e||(e=1,d(1))},j),l?b.onload():g.parentNode.insertBefore(b,g)},e.yepnope.injectCss=function(k,d,e,b,i,j){var b=a.createElement("link"),c,d=j?f:d||m;b.href=k,b.rel="stylesheet",b.type="text/css";for(c in e)b.setAttribute(c,e[c]);i||(g.parentNode.insertBefore(b,g),h(d,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))}