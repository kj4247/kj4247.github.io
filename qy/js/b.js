$(function(){var e=navigator.userAgent,n=e.indexOf("Android")>-1||e.indexOf("Adr")>-1||e.indexOf("MicroMessenger")>-1,t=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=function(){var e=function(){var e=/OS ((\d+_?){2,3})\s/;if(navigator.userAgent.match(/iPad/i)||navigator.platform.match(/iPad/i)||navigator.userAgent.match(/iP(hone|od)/i)||navigator.platform.match(/iP(hone|od)/i)){var n=e.exec(navigator.userAgent);if(n.length>0)return n[0].replace("OS","").replace("os","").replace(/\s+/g,"").replace(/_/g,".")}return""}(),n=e.split(".");return!!(n&&n.length>0&&parseInt(n[0])>=9)}();var a=$(".main-layout"),o=0,r=function(){a.removeClass("main-layout-1 main-layout-2 main-layout-3 main-layout-4").addClass("main-layout-"+(o%4+1)),o++,setTimeout(function(){r()},3e3)};r();var s=$("body"),c=$.getUrlPars();"undefined"!=typeof WX_CONFIG&&function(){wx.config(WX_CONFIG),wx.ready(function(){wx.onMenuShareAppMessage({desc:"时间，连接你我！"+(c.name?"敬请"+decodeURIComponent(c.name)+"亲启":""),link:location.href,imgUrl:LOGO_URL,success:function(){},cancel:function(){}}),wx.onMenuShareTimeline({desc:"时间，连接你我！"+(c.name?"敬请"+decodeURIComponent(c.name)+"亲启":""),link:location.href,imgUrl:LOGO_URL,success:function(){},cancel:function(){}})}),wx.error(function(e){console.log(JSON.stringify(e))})}(),s.data("swiper")&&function(){function e(e){a||s.removeClass(t.join(" ")).addClass("swiper-"+e+"-active")}var n=$(".swiper-slide").length,t=[],i=0,a=s.data("introduce");s.addClass("swiper-"+i+"-active");for(var o=0;o<n;o++)t.push("swiper-"+o+"-active");new Swiper(".swiper-container",{direction:"horizontal",loop:!1,pagination:".swiper-pagination",parallax:a,onSlideChangeEnd:function(n){e(n.activeIndex)},onSlidePrevStart:function(e){i=e.activeIndex},onSlidePrevStart:function(e){i=e.activeIndex},onTouchStart:function(t){var a=t.activeIndex;i!==a||0!==a&&a!==n-1?i=a:e(a)}})}(),s.data("introduce")&&function(){$.lazyLoading();var e=$("body").width();$(".introduce-box").css("height",e/1.21+"px");var n=0;setInterval(function(){var e=$(".swiper-slide.swiper-slide-active").index();n!==e&&(n=e,s.removeClass("swiper-0-active swiper-1-active swiper-2-active").addClass("swiper-"+n+"-active"))},50)}(),s.data("invitation")&&function(){function e(){$(".invitation-mask").addClass("active"),setTimeout(function(){$(".invitation-mask").hide(),$(".invitation-page-1").addClass("current")},600);var e=new Swiper(".swiper-container",{loop:!1,direction:"vertical",pagination:".swiper-pagination",onTransitionStart:function(e){var n=e.activeIndex,t=1;o=!0,2===n?(a&&(clearInterval(a),a=null),i.removeClass("step0 step1 step2"),a=setInterval(function(){1===t?i.removeClass("step0 step-o").addClass("step1"):2===t?(i.removeClass("step1").addClass("step2"),setTimeout(function(){i.addClass("step-o")},0)):i.removeClass("step2").addClass("step0"),++t>3&&(t=1)},3e3)):a&&(clearInterval(a),i.removeClass("step0 step1 step2"))}});e.lockSwipes(),$(".invitation-arrow").on("click",function(){e.slideNext()}),$(".invitation-envelope-box, .invitation-envelope-photo").on("click",function(){if(!n.hasClass("enve-open")){e.unlockSwipes(),n.addClass("enve-open");var i=$("#envelope-btn"),a=i.offset().top,r=t.offset().top;i.css({webkitTransform:"translateY("+(r-a)+"px)",transform:"translateY("+(r-a)+"px)",marginTop:"-2rem"}),$(".invitation-arrow.op0").removeClass("op0"),o||setTimeout(function(){o||e.slideNext()},3e3)}})}var n=($(".invitation-envelope"),$(".invitation-page-1")),t=n.find(".invitation-banner-box"),i=$("#speech"),a=null,o=!1;$(".invitation-envelope-photo").on("touchmove",function(e){n.hasClass("enve-open")||e.preventDefault(),e.stopPropagation()});var r=decodeURIComponent(c.cover),s=decodeURIComponent(c.weixin||c.em),l=decodeURIComponent(c.email||c.wx);IMG_URLS.push(r);for(var p=IMG_URLS.length,d=0;d<p;d++)!function(n){var t=new Image;t.src=IMG_URLS[n],t.onload=function(){++n===p&&e()},t.onerror=function(){++n===p&&e()}}(d);$("#cover").attr("src",r),$("#wx").html(l),$("#em").html(s)}()});