/**
 * Created by zxr on 16/4/18.
 */
function ckcpt(){var t="";return t}function ckstyle(){var t={cpath:"",language:"",flashvars:"",setup:"1,1,1,1,1,2,0,1,0,0,0,1,200,0,2,1,0,1,1,1,2,10,3,0,1,2,3000,0,0,0,0,1,1,1,1,1,1,250,0,90,0,0",pm_bg:"0x000000,100,230,180",mylogo:"null",pm_mylogo:"1,1,-100,-55",logo:"null",pm_logo:"2,0,-100,20",control_rel:"related.swf,ckplayer/related.xml,0",control_pv:"Preview.swf,105,2000",pm_repc:"",pm_spac:"|",pm_fpac:"file->f",pm_advtime:"2,0,-110,10,0,300,0",pm_advstatus:"1,2,2,-200,-40",pm_advjp:"1,1,2,2,-100,-40",pm_padvc:"2,0,-10,-10",pm_advms:"2,2,-46,-56",pm_zip:"1,1,-20,-8,1,0,0",pm_advmarquee:"1,2,50,-60,50,20,0,0x000000,50,0,20,1,30,2000",pm_glowfilter:"1,0x01485d, 100, 6, 3, 10, 1, 0, 0",advmarquee:escape('{a href="http://www.ckplayer.com"}{font color="#FFFFFF" size="12"}\u8fd9\u91cc\u53ef\u4ee5\u653e\u6587\u5b57\u5e7f\u544a\uff0c\u64ad\u653e\u5668\u9ed8\u8ba4\u4f7f\u7528\u8fd9\u91cc\u8bbe\u7f6e\u7684\u5e7f\u544a\u5185\u5bb9\uff0c\u5982\u679c\u4e0d\u60f3\u5728\u8fd9\u91cc\u4f7f\u7528\u53ef\u4ee5\u6e05\u7a7a\u8fd9\u91cc\u7684\u5185\u5bb9\uff0c\u5982\u679c\u60f3\u5728\u9875\u9762\u4e2d\u5b9e\u65f6\u5b9a\u4e49\u6eda\u52a8\u6587\u5b57\u5e7f\u544a\u5185\u5bb9\uff0c\u53ef\u4ee5\u6e05\u7a7a\u8fd9\u91cc\u7684\u5185\u5bb9\uff0c\u7136\u540e\u5728\u9875\u9762\u4e2d\u8bbe\u7f6e\u5e7f\u544a\u51fd\u6570\u3002{/font}{/a}'),mainfuntion:"",flashplayer:"",calljs:"ckplayer_status,ckadjump,playerstop,ckmarqueeadv",myweb:escape(""),cpt_lights:"1",cpt_share:"ckplayer/share.xml",cpt_list:ckcpt()};return t}var CKobject={_K_:function(t){return document.getElementById(t)},_T_:!1,_M_:!1,_G_:!1,_Y_:!1,_I_:null,_J_:0,_O_:{},uaMatch:function(t,e,a,i,n,r,s,o,l){var _=e.exec(t);return null!=_?{b:"IE",v:_[2]||"0"}:(_=a.exec(t),null!=_?{b:_[1]||"",v:_[2]||"0"}:(_=i.exec(t),null!=_?{b:_[1]||"",v:_[2]||"0"}:(_=n.exec(t),null!=_?{b:_[1]||"",v:_[2]||"0"}:(_=r.exec(t),null!=_?{b:_[2]||"",v:_[1]||"0"}:(_=s.exec(t),null!=_?{b:_[1]||"",v:_[2]||"0"}:(_=o.exec(t),null!=_?{b:_[1]||"",v:_[2]||"0"}:(_=l.exec(t),null!=_?{b:_[1]||"",v:_[2]||"0"}:{b:"unknown",v:"0"})))))))},browser:function(){var t=navigator.userAgent,e=/(msie\s|trident.*rv:)([\w.]+)/,a=/(firefox)\/([\w.]+)/,i=/(opera).+version\/([\w.]+)/,n=/(chrome)\/([\w.]+)/,r=/version\/([\w.]+).*(safari)/,s=/(safari)\/([\w.]+)/,o=/(mozilla)\/([\w.]+)/,l=/(mobile)\/([\w.]+)/,_=t.toLowerCase(),c=this.uaMatch(_,e,a,i,n,r,s,o,l);return c.b&&(b=c.b,v=c.v),{B:b,V:v}},Platform:function(){var t="",e=navigator.userAgent,a=(navigator.appVersion,{iPhone:e.indexOf("iPhone")>-1||e.indexOf("Mac")>-1,iPad:e.indexOf("iPad")>-1,ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,webKit:e.indexOf("AppleWebKit")>-1,trident:e.indexOf("Trident")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),presto:e.indexOf("Presto")>-1,mobile:!!e.match(/AppleWebKit.*Mobile.*/)||!!e.match(/AppleWebKit/),webApp:-1==e.indexOf("Safari")});for(var i in a)if(a[i]){t=i;break}return t},isHTML5:function(){return!!document.createElement("video").canPlayType},getType:function(){return this._T_},getVideo:function(){var t="",e=this._E_.v;if(e&&e.length>1)for(var a=0;a<e.length;a++){var i=e[a].split("->");i.length>=1&&""!=i[0]&&(t+='<source src="'+i[0]+'"'),i.length>=2&&""!=i[1]&&(t+=' type="'+i[1]+'"'),t+=">"}return t},getVars:function(t){var e=this._A_;return"undefined"==typeof e?null:t in e?e[t]:null},getParams:function(){var t="";return this._A_&&(1==parseInt(this.getVars("p"))&&(t+=' autoplay="autoplay"'),1==parseInt(this.getVars("e"))&&(t+=' loop="loop"'),2==parseInt(this.getVars("p"))&&(t+=' preload="metadata"'),this.getVars("i")&&(t+=' poster="'+this.getVars("i")+'"')),t},getpath:function(t){var e="CDEFGHIJKLMNOPQRSTUVWXYZcdefghijklmnopqrstuvwxyz",a=t.substr(0,1);if(e.indexOf(a)>-1&&(t.substr(0,4)==a+"://"||t.substr(0,4)==a+":\\"))return t;var n=unescape(window.location.href).replace("file:///",""),r=parseInt(document.location.port),s=document.location.protocol+"//"+document.location.hostname,o="",l="",_="",c=0,h=unescape(t).split("//");h.length>0&&(o=h[0]+"//");var u="http|https|ftp|rtsp|mms|ftp|rtmp|file",f=u.split("|");for(80!=r&&r&&(s+=":"+r),i=0;i<f.length;i++)if(f[i]+"://"==o){c=1;break}if(0==c)if("/"==t.substr(0,1))_=s+t;else{l=n.substring(0,n.lastIndexOf("/")+1).replace("\\","/");var a=t.replace("../","./"),s=a.split("./"),d=s.length,h=a.replace("./",""),p=l.split("/"),v=p.length-d;for(i=0;i<v;i++)_+=p[i]+"/";_+=h}else _=t;return _},getXhr:function(){var t;try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{t=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){t=!1}}return t||"undefined"==typeof XMLHttpRequest||(t=new XMLHttpRequest),t},getX:function(){var f="ckstyle()";this.getVars("x")&&1!=parseInt(this.getVars("c"))&&(f=this.getVars("x")+"()");try{"object"==typeof eval(f)&&(this._X_=eval(f))}catch(e){try{"object"==typeof eval(ckstyle)&&(this._X_=ckstyle())}catch(e){this._X_=ckstyle()}}},getSn:function(t,e){return e>=0?this._X_[t].split(",")[e]:this._X_[t]},getUrl:function(t,e){var a=["get","utf-8"];if(t&&2==t.length){var i=t[0],n=t[1].split("/");n.length>=2&&(a[0]=n[1]),n.length>=3&&(a[1]=n[2]),this.ajax(a[0],a[1],i,function(t){var a=CKobject;if(t&&"error"!=t){var i="",n=t;if(t.indexOf("}")>-1){for(var r=t.split("}"),s=0;s<r.length-1;s++){i+=r[s]+"}";var o=r[s].replace("{","").split("->");2==o.length&&(a._A_[o[0]]=o[1])}n=r[r.length-1]}a._E_.v=n.split(","),e?a.showHtml5():(a.changeParams(i),a.newAdr())}})}},getflashvars:function(t){var e="",a=0;if(t)for(var i in t)a>0&&(e+="&"),"f"==i&&t[i]&&!this.getSn("pm_repc",-1)&&(t[i]=this.getpath(t[i]),t[i].indexOf("&")>-1&&(t[i]=encodeURIComponent(t[i]))),"y"==i&&t[i]&&(t[i]=this.getpath(t[i])),e+=i+"="+t[i],a++;return e},getparam:function(t){var e="",a="",i={allowScriptAccess:"always",allowFullScreen:!0,quality:"high",bgcolor:"#000"};if(t)for(var n in t)i[n]=t[n];for(var r in i)e+=r+'="'+i[r]+'" ',a+='<param name="'+r+'" value="'+i[r]+'" />';return e=e.replace("movie=","src="),{w:e,v:a}},getObjectById:function(t){if(this._T_)return this;var e=null,a=this._K_(t),i="embed";if(a&&"OBJECT"==a.nodeName)if("undefined"!=typeof a.SetVariable)e=a;else{var n=a.getElementsByTagName(i)[0];n&&(e=n)}return e},ajax:function(t,e,a,i){var n=this.getXhr(),r=[],s="";"get"==t?(s=a.indexOf("?")>-1?a+"&t="+(new Date).getTime():a+"?t="+(new Date).getTime(),n.open("get",s)):(r=a.split("?"),a=r[0],s=r[1],n.open("post",a,!0)),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.setRequestHeader("charset",e),"post"==t?n.send(s):n.send(null),n.onreadystatechange=function(){if(4==n.readyState){var t=n.responseText;i(""!=t?t:null)}}},addListener:function(t,e){var a=CKobject._V_;if(a.addEventListener)try{a.addEventListener(t,e,!1)}catch(t){this.getNot()}else if(a.attachEvent)try{a.attachEvent("on"+t,e)}catch(t){this.getNot()}else a["on"+t]=e},removeListener:function(t,e){var a=CKobject._V_;if(a.removeEventListener)try{a.removeEventListener(t,e,!1)}catch(t){this.getNot()}else if(a.detachEvent)try{a.detachEvent("on"+t,e)}catch(t){this.getNot()}else a["on"+t]=null},Flash:function(){var t=!1,e=0;if(document.all||this.browser().B.toLowerCase().indexOf("ie")>-1)try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");t=!0;var i=a.GetVariable("$version");e=parseInt(i.split(" ")[1].split(",")[0])}catch(n){}else if(navigator.plugins&&navigator.plugins.length>0){var a=navigator.plugins["Shockwave Flash"];if(a){t=!0;for(var r=a.description.split(" "),s=0;s<r.length;++s)isNaN(parseInt(r[s]))||(e=parseInt(r[s]))}}return{f:t,v:e}},embed:function(t,e,a,i,n,r,s,o,l){var _=["all"];r?this.isHTML5()?this.embedHTML5(e,a,i,n,o,s,_):this.embedSWF(t,e,a,i,n,s,l):this.Flash().f&&parseInt(this.Flash().v)>10?this.embedSWF(t,e,a,i,n,s,l):this.isHTML5()?this.embedHTML5(e,a,i,n,o,s,_):this.embedSWF(t,e,a,i,n,s,l)},embedSWF:function(t,e,a,i,n,r,s){a||(a="ckplayer_a1"),s||(s={bgcolor:"#FFF",allowFullScreen:!0,allowScriptAccess:"always",wmode:"transparent"}),this._A_=r,this.getX();var o="undefined",l=!1,_=document,c="http://www.macromedia.com/go/getflashplayer",h='<a href="'+c+'" target="_blank">\u8bf7\u70b9\u51fb\u6b64\u5904\u4e0b\u8f7d\u5b89\u88c5\u6700\u65b0\u7684flash\u63d2\u4ef6</a>',u={w:"\u60a8\u7684\u7f51\u9875\u4e0d\u7b26\u5408w3c\u6807\u51c6\uff0c\u65e0\u6cd5\u663e\u793a\u64ad\u653e\u5668",f:"\u60a8\u6ca1\u6709\u5b89\u88c5flash\u63d2\u4ef6\uff0c\u65e0\u6cd5\u64ad\u653e\u89c6\u9891\uff0c"+h,v:"\u60a8\u7684flash\u63d2\u4ef6\u7248\u672c\u8fc7\u4f4e\uff0c\u65e0\u6cd5\u64ad\u653e\u89c6\u9891\uff0c"+h},f=typeof _.getElementById!=o&&typeof _.getElementsByTagName!=o&&typeof _.createElement!=o,p='id="'+a+'" name="'+a+'" ',v="",g="";s.movie=t,s.flashvars=this.getflashvars(r),-1==i&&(d=!0,this._K_(e).style.width="100%",i="100%"),v+='<object pluginspage="http://www.macromedia.com/go/getflashplayer" ',v+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ',v+='codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" ',v+='width="'+i+'" ',v+='height="'+n+'" ',v+=p,v+='align="middle">',v+=this.getparam(s).v,v+="<embed ",v+=this.getparam(s).w,v+=' width="'+i+'" height="'+n+'" name="'+a+'" id="'+a+'" align="middle" '+p,v+='type="application/x-shockwave-flash" pluginspage="'+c+'" />',v+="</object>",f?this.Flash().f?this.Flash().v<10?(g=u.v,l=!0):(g=v,this._T_=!1):(g=u.f,l=!0):(g=u.w,l=!0),g&&(this._K_(e).innerHTML=g),l&&(this._K_(e).style.color="#0066cc",this._K_(e).style.lineHeight=this._K_(e).style.height,this._K_(e).style.textAlign="center")},embedHTML5:function(e,i,r,o,l,_,c){this._E_={c:e,p:i,w:r,h:o,v:l,s:c},this._A_=_,this.getX(),b=this.browser().B,v=this.browser().V,x=v.split("."),t=x[0],m=b+v,n=b+t,w="",s=!1,f=this.Flash().f,a=!1,c||(c=["iPad","iPhone","ios"]);for(var h=0;h<c.length;h++){if(w=c[h],"all"==w.toLowerCase()){s=!0;break}if("all+false"==w.toLowerCase()&&!f){s=!0;break}if(w.indexOf("+")>-1?(w=w.split("+")[0],a=!0):a=!1,this.Platform()==w||m==w||n==w||b==w){if(!a){s=!0;break}if(!f){s=!0;break}}}if(s){if(l){var u=l[0].split("->");if(u&&2==u.length&&u[1].indexOf("ajax")>-1)return void this.getUrl(u,!0)}this.showHtml5()}},status:function(){this._H_=parseInt(this.getSn("setup",20));var f="ckplayer_status";""!=this.getSn("calljs",0)&&(f=this.getSn("calljs",0));try{if("function"==typeof eval(f))return this._L_=eval(f),this._M_=!0,!0}catch(e){try{if("function"==typeof eval(ckplayer_status))return this._L_=ckplayer_status,this._M_=!0,!0}catch(e){return!1}}return!1},showHtml5:function(){var C=CKobject,p=C._E_.p,a=C._E_.v,c=C._E_.c,b=!1,s=this._E_.v,w=C._E_.w,h=C._E_.h,d=!1,r="";1==s.length&&(r=' src="'+s[0].split("->")[0]+'"'),-1==w&&(d=!0,C._K_(c).style.width="100%",w="100%"),w.toString().indexOf("%")>-1&&(w="100%"),h.toString().indexOf("%")>-1&&(h="100%");var v="<video controls"+r+' id="'+p+'" width="'+w+'" height="'+h+'"'+C.getParams()+">"+C.getVideo()+"</video>";if(C._K_(c).innerHTML=v,C._K_(c).style.backgroundColor="#000",C._V_=this._K_(p),d||(C._K_(c).style.width=this._E_.w.toString().indexOf("%")>-1?C._K_(c).offsetWidth*parseInt(this._E_.w)*.01+"px":C._V_.width+"px",C._K_(c).style.height=this._E_.h.toString().indexOf("%")>-1?C._K_(c).offsetHeight*parseInt(this._E_.h)*.01+"px":C._V_.height+"px"),C._P_=!1,C._T_=!0,""!=C.getVars("loaded")){var f=C.getVars("loaded")+"()";try{"function"==typeof eval(f)&&eval(f)}catch(e){try{"function"==typeof eval(loadedHandler)&&loadedHandler()}catch(e){}}}C.status(),C.addListener("play",C.playHandler),C.addListener("pause",C.playHandler),C.addListener("error",C.errorHandler),C.addListener("emptied",C.errorHandler),C.addListener("loadedmetadata",C.loadedMetadataHandler),C.addListener("ended",C.endedHandler),C.addListener("volumechange",C.volumeChangeHandler)},videoPlay:function(){this._T_&&this._V_.play()},videoPause:function(){this._T_&&this._V_.pause()},playOrPause:function(){this._T_&&(this._V_.paused?this._V_.play():this._V_.pause())},fastNext:function(){this._T_&&(this._V_.currentTime=this._V_.currentTime+10)},fastBack:function(){this._T_&&(this._V_.currentTime=this._V_.currentTime-10)},changeVolume:function(t){this._T_&&(this._V_.volume=.01*t)},videoSeek:function(t){this._T_&&(this._V_.currentTime=t)},newAddress:function(t){var e=[];if(t&&(e=this.isHtml5New(t),e&&this._T_)){this.changeParams(t);var a=e[0].split("->");if(a&&2==a.length&&a[1].indexOf("ajax")>-1)return void this.getUrl(a,!1);this._E_.v=e,this.newAdr()}},quitFullScreen:function(){document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()},changeStatus:function(t){this._H_=t},newAdr:function(){var t=this._E_.v;this._V_.pause(),1==t.length?this._V_.src=t[0].split("->")[0]:this._V_.innerHTML=this.getVideo(),this._V_.load()},isHtml5New:function(t){if(-1==t.indexOf("html5"))return!1;for(var e=t.replace(/{/g,""),a=e.split("}"),i="",n=0;n<a.length;n++)if(a[n].indexOf("html5")>-1){i=a[n].replace("html5->","").split(",");break}return i},changeParams:function(t){if(t)for(var e=t.replace(/{/g,""),a=e.split("}"),i=0;i<a.length;i++){var n=a[i].split("->");if(2==n.length)switch(n[0]){case"p":1==parseInt(n[1])?this._V_.autoplay=!0:2==parseInt(n[1])?this._V_.preload="metadata":(this._V_.autoplay=!1,null!=this._I_&&(clearInterval(this._I_),this._I_=null));break;case"e":1==parseInt(n[1])?this._V_.loop=!0:this._V_.loop=!1;break;case"i":this._V_.poster=n[1]}}},frontAdPause:function(t){this.getNot()},frontAdUnload:function(){this.getNot()},changeFace:function(t){this.getNot()},plugin:function(t,e,a,i,n,r,s){this.getNot()},videoClear:function(){this.getNot()},videoBrightness:function(t){this.getNot()},videoContrast:function(t){this.getNot()},videoSaturation:function(t){this.getNot()},videoSetHue:function(t){this.getNot()},videoWAndH:function(t,e){this.getNot()},videoWHXY:function(t,e,a,i){this.getNot()},changeFlashvars:function(t){this.getNot()},changeMyObject:function(t,e){this.getNot()},getMyObject:function(t,e){this.getNot()},changeeFace:function(){this.getNot()},changeStyle:function(t,e){this.getNot()},promptLoad:function(){this.getNot()},promptUnload:function(){this.getNot()},marqueeLoad:function(t,e){this.getNot()},marqueeClose:function(t){this.getNot()},getNot:function(){var t="The ckplayer's API for HTML5 does not exist";return t},volumeChangeHandler:function(){var t=CKobject;t._V_.muted?(t.returnStatus("volumechange:0",1),t._O_.volume=0,t._O_.mute=!0):(t._O_.mute=!1,t._O_.volume=100*t._V_.volume,t.returnStatus("volumechange:"+100*t._V_.volume,1))},endedHandler:function(){var C=CKobject,e=parseInt(C.getVars("e"));if(C.returnStatus("ended",1),C._I_&&(clearInterval(C._I_),C._I_=null),0==e||4==e||6==e){6==e&&this.quitFullScreen();var f="playerstop()";""!=C.getSn("calljs",2)&&(f=C.getSn("calljs",2)+"()");try{if("function"==typeof eval(f))return void eval(f)}catch(e){try{if("function"==typeof eval(playerstop))return void playerstop()}catch(e){return}}}},loadedMetadataHandler:function(){var t=CKobject;t.returnStatus("loadedmetadata",1),t._O_.totaltime=t._V_.duration,t._O_.width=t._V_.width,t._O_.height=t._V_.height,t._O_.awidth=t._V_.videoWidth,t._O_.aheight=t._V_.videoHeight,t._V_.defaultMuted?(t.returnStatus("volumechange:0",1),t._O_.mute=!0,t._O_.volume=0):(t._O_.mute=!1,t._O_.volume=100*t._V_.volume,t.returnStatus("volumechange:"+100*t._V_.volume,1))},errorHandler:function(){CKobject.returnStatus("error",1)},playHandler:function(){var t=CKobject;if(t._V_.paused)t.returnStatus("pause",1),t.addO("play",!1),null!=t._I_&&(clearInterval(t._I_),t._I_=null);else{if(t.returnStatus("play",1),t.addO("play",!0),t._P_||(t.returnStatus("play",1),t._P_=!0),t._I_=setInterval(t.playTime,parseInt(t.getSn("setup",37))),!t._G_){t._G_=!0;for(var e in t._A_)if("g"==e&&t._A_[e]){var a=parseInt(t._A_[e]);t.videoSeek(a)}}if(!t._Y_){t._Y_=!0;for(var e in t._A_)if("j"==e&&t._A_[e]){var i=parseInt(t._A_[e]);i>0?t._J_=i:t._J_=parseInt(t._O_.totaltime)+i}}}},returnStatus:function(t,e){var a=t;3==this._H_&&(a=this._E_.p+"->"+a),this._M_&&e<=this._H_&&this._L_(a)},addO:function(t,e){this._O_[t]=e},getStatus:function(){return this._O_},playTime:function(){var t=CKobject,e=t._V_.currentTime;t._O_.time=e,t._J_>0&&e>t._J_&&(t._J_=0,t.videoSeek(t._O_.totaltime)),t.returnStatus("time:"+e,1)}};