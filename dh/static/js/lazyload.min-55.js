!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(window.jQuery||window.Zepto)}(function(s,t){var r,e,i=window,c=s(i),n={threshold:0,failure_limit:0,event:"scroll",effect:"show",effect_params:null,container:i,data_attribute:"original",data_srcset_attribute:"original-srcset",skip_invisible:!0,appear:u,load:u,vertical_only:!1,check_appear_throttle_time:300,url_rewriter_fn:u,no_fake_img_loader:!1,placeholder_data_img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",placeholder_real_img:"http://ditu.baidu.cn/yyfm/lazyload/0.0.1/img/placeholder.png"};function u(){}function f(t,e){return(e._$container==c?("innerHeight"in i?i.innerHeight:c.height())+c.scrollTop():e._$container.offset().top+e._$container.height())<=t.offset().top-e.threshold}function _(t,e){return(e._$container==c?c.scrollTop():e._$container.offset().top)>=t.offset().top+e.threshold+t.height()}function a(n,o){var l=0;n.each(function(t,e){var a=n.eq(t);if(!(a.width()<=0&&a.height()<=0||"none"===a.css("display")))if(o.vertical_only)if(_(a,o));else if(f(a,o)){if(++l>o.failure_limit)return!1}else r();else if(_(a,o)||function(t,e){return(e._$container==c?s.fn.scrollLeft?c.scrollLeft():i.pageXOffset:e._$container.offset().left)>=t.offset().left+e.threshold+t.width()}(a,o));else if(f(a,o)||function(t,e){return(e._$container==c?c.width()+(s.fn.scrollLeft?c.scrollLeft():i.pageXOffset):e._$container.offset().left+e._$container.width())<=t.offset().left-e.threshold}(a,o)){if(++l>o.failure_limit)return!1}else r();function r(){a.trigger("_lazyload_appear"),l=0}})}function h(e){return e.filter(function(t){return!e.eq(t).data("_lazyload_loadStarted")})}e=Object.prototype.toString,r=function(t){return e.call(t).replace("[object ","").replace("]","")},s.fn.hasOwnProperty("lazyload")||(s.fn.lazyload=function(f){var t,_,e,d=this;return s.isPlainObject(f)||(f={}),s.each(n,function(t,e){var a=r(f[t]);-1!=s.inArray(t,["threshold","failure_limit","check_appear_throttle_time"])?"String"==a?f[t]=parseInt(f[t],10):"Number"!=a&&(f[t]=e):"container"==t?(f.hasOwnProperty(t)?f[t]==i||f[t]==document?f._$container=c:f._$container=s(f[t]):f._$container=c,delete f.container):!n.hasOwnProperty(t)||f.hasOwnProperty(t)&&a==r(n[t])||(f[t]=e)}),t="scroll"==f.event,e=0==f.check_appear_throttle_time?a:function(t,e){var a,r,n,o,l=0;return function(){a=this,r=arguments;var t=new Date-l;return o||(t>=e?i():o=setTimeout(i,e-t)),n};function i(){o=0,l=+new Date,n=t.apply(a,r),a=null,r=null}}(a,f.check_appear_throttle_time),_=t||"scrollstart"==f.event||"scrollstop"==f.event,d.each(function(t,e){var r=this,n=d.eq(t),a=n.attr("src"),o=n.attr("data-"+f.data_attribute),l=f.url_rewriter_fn==u?o:f.url_rewriter_fn.call(r,n,o),i=n.attr("data-"+f.data_srcset_attribute),c=n.is("img");if(n.data("_lazyload_loadStarted")||a==l)return n.data("_lazyload_loadStarted",!0),void(d=h(d));n.data("_lazyload_loadStarted",!1),c&&!a&&n.one("error",function(){n.attr("src",f.placeholder_real_img)}).attr("src",f.placeholder_data_img),n.one("_lazyload_appear",function(){var t,e=s.isArray(f.effect_params);function a(){t&&n.hide(),c?(i&&n.attr("srcset",i),l&&n.attr("src",l)):n.css("background-image",'url("'+l+'")'),t&&n[f.effect].apply(n,e?f.effect_params:[]),d=h(d)}n.data("_lazyload_loadStarted")||(t="show"!=f.effect&&s.fn[f.effect]&&(!f.effect_params||e&&0==f.effect_params.length),f.appear!=u&&f.appear.call(r,n,d.length,f),n.data("_lazyload_loadStarted",!0),f.no_fake_img_loader||i?(f.load!=u&&n.one("load",function(){f.load.call(r,n,d.length,f)}),a()):s("<img />").one("load",function(){a(),f.load!=u&&f.load.call(r,n,d.length,f)}).attr("src",l))}),_||n.on(f.event,function(){n.data("_lazyload_loadStarted")||n.trigger("_lazyload_appear")})}),_&&f._$container.on(f.event,function(){e(d,f)}),c.on("resize load",function(){e(d,f)}),s(function(){e(d,f)}),this})});