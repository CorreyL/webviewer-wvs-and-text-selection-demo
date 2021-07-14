/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[0],{349:function(ha,ca,h){h.r(ca);h.d(ca,"ByteRangeRequest",function(){return ka});var ba=h(3),aa=h(0);h.n(aa);var fa=h(1),da=h(119);ha=h(75);var z=h(202),y=h(54),f=h(50),e=h(201),x=h(135);h=h(303);var r=[],w=[],n=window,ea=function(){return function(){this.Kk=1}}(),ia;(function(e){e[e.UNSENT=0]="UNSENT";e[e.DONE=4]="DONE"})(ia||(ia={}));var ka=function(){function f(f,h,r,w){var x=this;this.url=f;this.range=h;this.zf=r;this.withCredentials=
w;this.YV=ia;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);n.Uint8Array&&(this.request.responseType="arraybuffer");w&&(this.request.withCredentials=w);oa.DISABLE_RANGE_HEADER||(Object(aa.isUndefined)(h.stop)?this.request.setRequestHeader("Range","bytes="+h.start):this.request.setRequestHeader("Range",["bytes=",h.start,"-",h.stop-1].join("")));this.request.setRequestHeader("X-Requested-With","XMLHttpRequest");r&&Object.keys(r).forEach(function(e){x.request.setRequestHeader(e,
r[e])});this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=e.a.NOT_STARTED}f.prototype.start=function(f){var h=this,r=this.request;r.onreadystatechange=function(){if(h.aborted)return h.status=e.a.ABORTED,f({code:e.a.ABORTED});if(this.readyState===h.YV.DONE){h.$y();var w=0===window.document.URL.indexOf("file:///");200===r.status||206===r.status||w&&0===r.status?(w=n.sO(this),
h.Er(w,f)):(h.status=e.a.ERROR,f({code:h.status,status:h.status}))}};this.request.send(null);this.status=e.a.STARTED};f.prototype.Er=function(f,h){this.status=e.a.SUCCESS;if(h)return h(!1,f)};f.prototype.abort=function(){this.$y();this.aborted=!0;this.request.abort()};f.prototype.$y=function(){var e=Object(x.c)(this.url,this.range,w);-1!==e&&w.splice(e,1);if(0<r.length){e=r.shift();var h=new f(e.url,e.range,this.zf,this.withCredentials);e.request=h;w.push(e);h.start(Object(x.d)(e))}};f.prototype.extend=
function(e){var f=Object.assign({},this,e.prototype);f.constructor=e;return f};return f}(),oa=function(e){function h(f,h,n,r,w){n=e.call(this,f,n,r)||this;n.Mk={};n.Ix=h;n.url=f;n.DISABLE_RANGE_HEADER=!1;n.$u=ka;n.XI=3;n.zf=w||{};return n}Object(ba.c)(h,e);h.prototype.bt=function(e,h,n){var r=-1===e.indexOf("?")?"?":"&";switch(n){case !1:case f.a.NEVER_CACHE:e=e+r+"_="+Object(aa.uniqueId)();break;case !0:case f.a.CACHE:e=e+r+"_="+h.start+","+(Object(aa.isUndefined)(h.stop)?"":h.stop)}return e};h.prototype.HM=
function(e,f,h,n){void 0===h&&(h={});return new this.$u(e,f,h,n)};h.prototype.Q0=function(e,f,h,n,x){for(var y=0;y<r.length;y++)if(Object(aa.isEqual)(r[y].range,f)&&Object(aa.isEqual)(r[y].url,e))return r[y].$f.push(n),r[y].Wz++,null;for(y=0;y<w.length;y++)if(Object(aa.isEqual)(w[y].range,f)&&Object(aa.isEqual)(w[y].url,e))return w[y].$f.push(n),w[y].Wz++,null;h={url:e,range:f,Ix:h,$f:[n],Wz:1};if(0===r.length&&w.length<this.XI)return w.push(h),h.request=this.HM(e,f,x,this.withCredentials),h;r.push(h);
return null};h.prototype.em=function(e,f,h){var n=this.bt(e,f,this.Ix);(e=this.Q0(n,f,this.Ix,h,this.zf))&&e.request.start(Object(x.d)(e));return function(){var e=Object(x.c)(n,f,w);if(-1!==e){var h=--w[e].Wz;0===h&&w[e].request&&w[e].request.abort()}else e=Object(x.c)(n,f,r),-1!==e&&(h=--r[e].Wz,0===h&&r.splice(e,1))}};h.prototype.XN=function(){return{start:-da.a}};h.prototype.O3=function(){var e=-(da.a+da.e);return{start:e-da.d,end:e}};h.prototype.Rq=function(e){var f=this;this.Nx=!0;var h=da.a;
this.em(this.url,this.XN(),function(n,r,w){function x(){var h=f.Gd.UN();f.em(f.url,h,function(n,r){if(n)return Object(fa.h)("Error loading central directory: "+n),e(n);r=Object(y.a)(r);if(r.length!==h.stop-h.start)return e("Invalid XOD file: Zip central directory data is wrong size! Should be "+(h.stop-h.start)+" but is "+r.length);f.Gd.kR(r);f.oD=!0;f.Nx=!1;return e(!1)})}if(n)return Object(fa.h)("Error loading end header: "+n),e(n,r,w);r=Object(y.a)(r);if(r.length!==h)return e("Invalid XOD file: Zip end header data is wrong size!");
try{f.Gd=new z.a(r)}catch(va){return e(va)}f.Gd.k5?f.em(f.url,f.O3(),function(h,n){if(h)return Object(fa.h)("Error loading zip64 header: "+h),e(h);n=Object(y.a)(n);f.Gd.B5(n);x()}):x()})};h.prototype.pO=function(e){e(Object.keys(this.Gd.Ml))};h.prototype.VG=function(e,f){var h=this;if(this.Gd.zM(e)){var n=this.Gd.Ty(e);if(n in this.Mk){var r=this.Vg[e];r.Op=this.Mk[n];r.Op.Kk++;r.cancel=r.Op.cancel}else{var w=this.Gd.j2(e),x=this.em(this.url,w,function(r,x){r?(Object(fa.h)('Error loading part "'+
e+'": '+r),h.em(h.url,w,function(r,x){if(r)return f(r,e);h.oR(x,w,n,e,f)})):h.oR(x,w,n,e,f)}),y=this.Vg[e];y&&(y.sT=!0,y.cancel=function(){y.Op.Kk--;0===y.Op.Kk&&(x(),delete h.Mk[n])},this.Mk[n]=new ea(n),y.Op=this.Mk[n],y.Op.cancel=y.cancel)}}else delete this.Vg[e],f(Error('File not found: "'+e+'"'),e)};h.prototype.oR=function(e,f,h,n,r){if(e.length!==f.stop-f.start)r(Error("Part data is wrong size!"),n);else{do{if(!this.Mk[h])return;n=this.Mk[h].Kk;for(var w=f.Jo.length,x=0;x<w;++x){var y=f.Jo[x];
r(!1,y.Do,e["string"===typeof e?"substring":"subarray"](y.start,y.stop),this.Gd.rP(y.Do));y.Do in this.Vg&&delete this.Vg[y.Do]}}while(n!==this.Mk[h].Kk);delete this.Mk[h]}};h.DISABLE_RANGE_HEADER=!1;h.XI=3;return h}(ha.a);(function(e){function f(f,h,n){var r=e.call(this)||this,w;for(w in f)r[w]=f[w];r.Sea=f;r.startOffset=h;r.endOffset=n;r.HM=function(e,h,n,w){Object(aa.isUndefined)(h.stop)?(h.start+=r.endOffset,h.stop=r.endOffset):(h.start+=r.startOffset,h.stop+=r.startOffset);e=r.bt(r.url,h,r.Ix);
return new f.$u(e,h,n,w)};return r}Object(ba.c)(f,e);return f})(oa);Object(h.a)(oa);Object(h.b)(oa);ca["default"]=oa}}]);}).call(this || window)
