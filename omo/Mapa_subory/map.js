google.maps.__gjsload__('map', function(_){'use strict';var Vy=function(a,b){return new _.Br(_.Q(a.N,1)[b])};var Wy=function(a){this.N=a||[]};var Xy=function(a){this.N=a||[]};var Yy=function(a,b){for(var c=0,d=_.Gc(a.j.N,1);c<d;c++){var e=Vy(a.j,c);0==e.getType()&&(e.N[2]=b)}};var Zy=function(a){var b=Math.round(1E7*a);return 0>a?b+4294967296:b};var $y=function(a,b){return _.xj(a.get("projection"),b,a.get("zoom"),a.get("offset"),a.get("center"))};var az=function(){var a=_.R;a.N[1]=a.N[1]||[];return new _.Be(a.N[1])};
var bz=function(){var a=_.ii().N[14];return null!=a?a:0};var cz=function(a,b){return new Wy(_.Q(a.N,4)[b])};var dz=function(a,b){return _.Q(a.N,5)[b]};var ez=function(a){return(a=a.N[1])?new _.ue(a):_.zh};var fz=function(a){return(a=a.N[0])?new _.ue(a):_.yh};var gz=function(a){a=a.N[1];return null!=a?a:0};var hz=function(a){a=a.N[0];return null!=a?a:0};var iz=function(a){this.N=a||[]};
var jz=function(a,b){for(var c=a.length,d=_.ua(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;return!0};var kz=function(a,b){for(var c=0,d=a.O,e=a.j,f=0,g;g=b[f++];)if(a.intersects(g)){var h=g.O,k=g.j,n=0;if(_.Li(g,a))return 1;n=e.contains(k.j)&&k.contains(e.j)&&!_.cd(e,k)?_.ed(k.j,e.O)+_.ed(e.j,k.O):_.ed(e.contains(k.j)?k.j:e.j,e.contains(k.O)?k.O:e.O);c+=n*(Math.min(d.j,h.j)-Math.max(d.O,h.O))}return c/=_.gd(d)*_.dd(e)};
var lz=function(a,b){var c=a.x,d=a.y;switch(b){case 90:a.x=d;a.y=256-c;break;case 180:a.x=256-c;a.y=256-d;break;case 270:a.x=256-d,a.y=c}};var mz=function(a,b,c,d,e,f,g,h){this.La=a.La;this.zoom=a.zoom;this.j=a;this.U=b;this.oa=c;this.$=d;this.T=e;this.na=f;this.S=g;this.P=_.Nj(h)?h:null;this.O="";this.Yb()};var nz=function(){this.maxZoom=this.minZoom=-1;this.j=[];this.Va=[]};var oz=function(a,b,c,d,e){this.La=a;this.zoom=b;this.O=c;this.j=d.slice(0);this.P=e&&e.kh||_.sa};
var pz=function(){var a=!1;return function(b,c){if(b&&c){if(.999999>kz(b,c))return a=!1;var d=_.wj(b,(_.wy-1)/2);return.999999<kz(d,c)?a=!0:a}}};var qz=function(){return function(a,b){return a&&b?.9<=kz(a,b):void 0}};var rz=function(a,b){if(a&&b){for(var c=0,d;d=b[c++];)if(d.intersects(a))return!0;return!1}};
var sz=function(a,b,c,d,e){this.O=this.T=this.S=this.P=!0;this.j=_.Hf("map",{startTime:a,ej:e,yp:{firstMap:c}});this.pa=b;d&&d.get()?this.sh(0,d.get()):(d&&d.addListenerOnce((0,_.t)(this.sh,this,!0)),_.I.addListenerOnce(b,"tilesloaded",(0,_.t)(this.sh,this,!1)));_.I.addListenerOnce(b,"zoom_changed",(0,_.t)(this.Li,this));_.I.addListenerOnce(b,"center_changed",(0,_.t)(this.Li,this))};var tz=function(a,b){this.P=a;this.S=b};
var uz=function(a,b){this.j=function(c,d,e,f,g){var h;a:{if(!(7>d)){var k=1<<d-7;h=c.x/k;for(var k=c.y/k,n=0;n<vz.length;++n)if(h>=vz[n].$f&&h<=vz[n].Zf&&k>=vz[n].bg&&k<=vz[n].ag){h=!0;break a}}h=!1}return h?b.j(c,d,e,f,g):a.j(c,d,e,f,g)}};var wz=function(a){for(var b=0;b<_.Gc(a.N,0);++b){var c=a.getUrl(b).replace(/(\?|&)src=api(&|$)/,"$1src=apiv3$2");a.setUrl(b,c)}for(b=0;b<_.Gc(a.N,6);++b){var d=b,c=_.Q(a.N,6)[d].replace(/(\?|&)src=api(&|$)/,"$1src=apiv3$2"),d=b;_.Q(a.N,6)[d]=c}};
var xz=function(a,b){this.P=b||new _.kf;this.j=new _.Zc(a%360,45);this.S=new _.M(0,0);this.O=!0};var yz=function(a,b,c,d,e,f){this.j=function(g,h,k,n,p){return new mz(_.ov(g,h,k,n,p),a,b,c,d,e,k.width,f)}};
var zz=function(a,b,c,d){this.O=[];for(var e=0;e<_.u(a);++e){var f=a[e],g=new nz,h=f.N[2];g.minZoom=(null!=h?h:0)||0;h=f.N[3];g.maxZoom=(null!=h?h:0)||d;for(h=0;h<_.Gc(f.N,5);++h)g.j.push(dz(f,h));for(h=0;h<_.Gc(f.N,4);++h){var k=_.Zi(b,new _.hd(new _.K(hz(fz(cz(f,h)))/1E7,gz(fz(cz(f,h)))/1E7),new _.K(hz(ez(cz(f,h)))/1E7,gz(ez(cz(f,h)))/1E7)),g.maxZoom);g.Va[h]=new _.lf([new _.M(Math.floor(k.ra/c.width),Math.floor(k.qa/c.height)),new _.M(Math.floor(k.wa/c.width),Math.floor(k.ya/c.height))])}this.O.push(g)}};
var Az=function(a){this.j=function(b,c,d,e,f){function g(){f&&f.Oc&&k.yc()&&f.Oc()}var h=_.Gj(a,function(a,h){return a.j(b,c,d,e,{Jg:f&&f.Jg,Oc:g,zIndex:h})}),k=new oz(b,c,e,h,{kh:f&&f.kh});return k}};var Bz=function(a){var b=new _.$w(rz),c=new _.$w(pz()),d=new _.$w(qz());a.bindTo("traffic",b,"available");a={};a.obliques=c;a.traffic=b;a.report_map_issue=d;return a};
var Cz=function(a,b){var c=a.__gm,d=new _.Jw(b,a.overlayMapTypes,_.Lj(_.Z,a));d.bindTo("size",c);d.bindTo("zoom",c);d.bindTo("offset",c);d.bindTo("projectionBounds",c)};var Dz=function(a){var b=new _.Ix(300);b.bindTo("input",a,"bounds");_.I.addListener(b,"idle_changed",function(){b.get("idle")&&_.I.trigger(a,"idle")})};
var Ez=function(a){if(a&&_.jk(a.getDiv())&&(_.ak()||_.Zj())){_.Z(a,"Tdev");var b=window.document.querySelector('meta[name="viewport"]');(b=b&&b.content)&&b.match(/width=device-width/)&&_.Z(a,"Mfp")}};
var Fz=function(a,b){function c(){var c=b.get("mapType");if(c)switch(c.nb){case "roadmap":_.Z(a,"Tm");break;case "satellite":c.na&&_.Z(a,"Ta");_.Z(a,"Tk");break;case "hybrid":c.na&&_.Z(a,"Ta");_.Z(a,"Th");break;case "terrain":_.Z(a,"Tr");break;default:_.Z(a,"To")}}c();_.I.addListener(b,"maptype_changed",c)};var Gz=function(a){var b=new _.Nw(a.mapTypes);b.bindTo("bounds",a);b.bindTo("heading",a);b.bindTo("mapTypeId",a);b.bindTo("tilt",a.__gm);return b};
var Hz=function(a,b){_.Ga(_.pg,function(c,d){b.set(d,Iz(a,d))})};var Jz=function(a,b){this.j=a;this.O=b};var Kz=function(a,b){function c(c){c=b.getAt(c);if(c instanceof _.dg){var e=new _.J,f=c.get("styles");e.set("apistyle",_.Uw(f));e=Iz(a,c.j,e);c.lf=(0,_.t)(e.lf,e)}}_.I.addListener(b,"insert_at",c);_.I.addListener(b,"set_at",c);b.forEach(function(a,b){c(b)})};
var Lz=function(a){var b;b=(b=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection||null)&&b.type;_.Z(a,"Nt",b&&Mz[b]||"-na")};
var Nz=function(a,b,c){if((_.ak()||_.Zj())&&_.Ck()){_.Z(b,"Mmni");var d=window.setInterval(function(){var e;e=a.j.getBoundingClientRect();if(e=!(0>=e.top-5&&0>=e.left-5&&e.height+5>=window.document.body.scrollHeight&&e.width+5>=window.document.body.scrollWidth))e=a.j.getBoundingClientRect(),e=0>=e.top-5&&0>=e.left-5&&e.bottom+5>=window.innerHeight&&e.right+5>=window.innerWidth&&(!c||c());e&&(_.Z(b,"Mmus"),window.clearInterval(d))},1E3)}};var Oz=function(a){this.j=a};
var Pz=function(){var a,b=new _.J;b.bounds_changed=function(){var c=b.get("bounds");c?a&&_.oi(a,c)||(a=_.mf(c.ra-512,c.qa-512,c.wa+512,c.ya+512),b.set("boundsQ",a)):b.set("boundsQ",c)};return b};var Qz=function(){this.U=new _.jf;this.S={};this.P={}};
var Rz=function(a,b,c,d,e,f,g){var h=c.__gm,k=new _.Fw(c,a,b,!!c.Fa,e,h,d,g,(0,_.t)(f.j,f));k.bindTo("draggingCursor",c);k.bindTo("draggableMap",c,"draggable");_.I.addListener(c,"zoom_changed",function(){k.get("zoom")!=c.get("zoom")&&k.set("zoom",c.get("zoom"))});k.set("zoom",c.get("zoom"));k.bindTo("disablePanMomentum",c);k.bindTo("projectionTopLeft",e);k.bindTo("draggableCursor",h,"cursor");d.bindTo("zoom",k);e.bindTo("zoom",k);return k};
var Sz=function(a,b,c){var d=Tz,e=c.Cf;c=c.Fh;var f=[];_.X.U?f.push("mob:n"):f.push("mob:y");1<_.rf()?f.push("hdpi:y"):f.push("hdpi:n");c?f.push("staticmapsize:y"):f.push("staticmapsize:n");_.fk()?f.push("webp:y"):f.push("webp:n");a=new sz(a,b,d,e,f);Tz=!1;return a};var Uz=function(a,b,c,d){return d?new tz(a,function(){return b}):_.V[23]?new tz(a,function(a){var d=c.get("scale");return 2==d||4==d?b:a}):a};
var Vz=function(a,b){var c=a.__gm,d=new _.Rv(b,(0,_.t)(_.vk.O,_.vk));d.bindTo("center",a);d.bindTo("projectionBounds",c);d.bindTo("offset",c);return d};
var Wz=function(a,b,c){var d=_.ii(),e=_.Me(_.R);this.pa=b;this.O=c;this.j=new _.kf;this.P=_.Je(e);this.S=_.Ke(e);this.T=_.ui(d);this.na=_.ti(e);this.$=_.Q(d.N,0);(_.vj()||_.V[43]||_.mj())&&0<_.Gc(d.N,12)&&!this.na&&(this.$=_.Q(d.N,12));b={};c=0;for(d=_.Gc(a.N,5);c<d;++c){var e=c,e=new iz(_.Q(a.N,5)[e]),f;f=e.N[1];f=null!=f?f:0;b[f]=b[f]||[];b[f].push(e)}new zz(b[0],this.j,new _.N(256,256),21);a.N[0]=a.N[0]||[];this.va=new _.ve(a.N[0]);this.ta=new zz(b[1],this.j,new _.N(256,256),22);a.N[1]=a.N[1]||
[];this.U=new _.ve(a.N[1]);wz(this.U);new zz(b[3],this.j,new _.N(256,256),21);a.N[3]=a.N[3]||[];this.Ba=new _.ve(a.N[3]);a.N[7]=a.N[7]||[];this.oa=new _.ve(a.N[7]);wz(this.oa)};
var Xz=function(a,b,c,d){var e,f=d||{};e=_.D(f.heading);var g=c?function(a,b){return c.T(a,b,f.Gk)}:_.na(0);d=("hybrid"==b&&!e||"terrain"==b||"roadmap"==b)&&0!=f.Bi;var h=f.cd||_.na(null);return"satellite"==b?(b="",e?(g=a.oa,b+="deg="+f.heading+"&",e=null):(g=a.U,e=a.ta),_.tv(g,e,b,d,_.sv(f.heading),a.na,h)):new yz(a.$,d&&1<_.rf(),_.sv(f.heading,!!f.Gk),g,h,f.heading)};
var Yz=function(a,b){var c;c=null;"hybrid"==b||"roadmap"==b?c=a.va:"terrain"==b?c=a.Ba:"satellite"==b&&(c=a.U);c?(c=c.N[5],c=null!=c?c:""):c=null;return c};
var Zz=function(a){function b(a,b){if(!b||!b.Ac)return b;var c=[];_.ji(c,b.Ac.N);c=new _.qs(c);_.ds(_.Ht(c)).N[0]=a;return{scale:b.scale,wd:b.wd,Ac:c}}var c,d=Xz(a,"roadmap",a.O,{Bi:!1,cd:function(){return b(3,c.get("options"))}}),e=Xz(a,"roadmap",a.O,{cd:function(){return b(18,c.get("options"))}}),d=new Az([d,e]),e=Xz(a,"roadmap",a.O,{cd:function(){return c.get("options")}});c=new _.kv(new uz(d,e),a.j,21,"Mapa","Zobrazi\u0165 mapu s ulicami","\u013dutujeme, sn\u00edmky tohto miesta nie s\u00fa k dispoz\u00edcii.",
_.Rx.roadmap,!1,Yz(a,"roadmap"),47,"roadmap",a.T,a.P,a.S);$z(a,c);return c};var aA=function(a,b){function c(){return g.get("options")}var d=_.D(b),e=Xz(a,"satellite",null,{heading:b,cd:c}),f=Xz(a,"hybrid",a.O,{heading:b,cd:c}),g=new _.kv(new Az([e,f]),_.D(b)?new xz(b):a.j,d?21:22,"Hybridn\u00e9","Zobrazi\u0165 sn\u00edmky s n\u00e1zvami ul\u00edc","\u013dutujeme, sn\u00edmky tohto miesta nie s\u00fa k dispoz\u00edcii.",_.Rx.hybrid,d,Yz(a,"hybrid"),50,"hybrid",a.T,a.P,a.S);$z(a,g);return g};
var bA=function(a,b){var c=_.D(b),d=Xz(a,"satellite",null,{heading:b,cd:function(){return e.get("options")}}),e=new _.kv(d,_.D(b)?new xz(b):a.j,c?21:22,"Satelitn\u00e9","Zobrazi\u0165 satelitn\u00e9 sn\u00edmky","\u013dutujeme, sn\u00edmky tohto miesta nie s\u00fa k dispoz\u00edcii.",c?"a":_.Rx.satellite,c,null,null,"satellite",a.T,a.P,a.S);return e};
var Iz=function(a,b,c){var d=null,e=[0,90,180,270],f=_.qe();if("hybrid"==b){d=aA(a);c=[];f=0;for(b=e.length;f<b;++f)c.push(aA(a,e[f]));d.j=new _.Yu(d,c)}else if("satellite"==b){d=bA(a);c=[];f=0;for(b=e.length;f<b;++f)c.push(bA(a,e[f]));d.j=new _.Yu(d,c)}else if("roadmap"==b&&1<_.rf()&&(+_.xi(f)||_.V[43]))d=Zz(a);else{e=Xz(a,b,a.O,{cd:function(){return d.get("options")},Gk:!!+_.wi(f),Bi:!+_.vi(f)});if("terrain"==b){if(b=Yz(a,"terrain")){var g=b.split(",");2==g.length&&(b=g[1])}d=new _.kv(e,a.j,21,
"Ter\u00e9nne","Zobrazi\u0165 mapu ul\u00edc a ter\u00e9nu","\u013dutujeme, sn\u00edmky tohto miesta nie s\u00fa k dispoz\u00edcii.",_.Rx.terrain,!1,b,63,"terrain",a.T,a.P,a.S,+_.wi(f)?new _.N(128,128):new _.N(256,256))}else d=new _.kv(e,a.j,21,"Mapa","Zobrazi\u0165 mapu s ulicami","\u013dutujeme, sn\u00edmky tohto miesta nie s\u00fa k dispoz\u00edcii.",_.Rx.roadmap,!1,Yz(a,"roadmap"),47,"roadmap",a.T,a.P,a.S,+_.wi(f)?new _.N(128,128):new _.N(256,256));$z(a,d,c)}return d};
var $z=function(a,b,c){var d=a.pa.__gm;c?b.bindTo("apistyle",c):(b.bindTo("layers",d,"layers"),b.bindTo("apistyle",d),b.bindTo("mapMaker",a.pa));b.bindTo("authUser",d);_.V[23]&&b.bindTo("scale",a.pa);a.O.O().addListener(function(){b.notify("epochs")})};var cA=function(){};Wy.prototype.V=_.l("N");_.Af.prototype.Cf=_.ni(8,_.l("P"));_.jf.prototype.j=_.ni(7,function(a){this.Aa.forEach(function(b){b(a)})});Xy.prototype.V=_.l("N");Xy.prototype.getTile=function(){var a=this.N[1];return a?new _.es(a):_.vy};
iz.prototype.V=_.l("N");iz.prototype.clearRect=function(){var a=this.N;4 in a&&delete a[4]};var vz=[{$f:108.25,Zf:109.625,bg:49,ag:51.5},{$f:109.625,Zf:109.75,bg:49,ag:50.875},{$f:109.75,Zf:110.5,bg:49,ag:50.625},{$f:110.5,Zf:110.625,bg:49,ag:49.75}];_.m=mz.prototype;_.m.rb=function(){return this.j.rb()};_.m.yc=function(){return this.j.yc()};_.m.release=function(){this.j.release()};_.m.freeze=function(){this.j.freeze()};
_.m.Yb=function(){var a=this.na();if(a&&a.Ac){var b=this.$(new _.M(this.La.x,this.La.y),this.zoom);if(b){for(var c=2==a.scale||4==a.scale?a.scale:1,c=Math.min(1<<this.zoom,c),d=this.oa&&4!=c,e=this.zoom,f=c;1<f;f/=2)e--;var f=this.S,g;1!=c&&(f/=c);d&&(c*=2);1!=c&&(g=c);c=new _.cv(a.Ac);c.j.N[3]=0;g&&(_.It(c.j).N[4]=g);_.ev(c,b,e,f);if(e=this.T(b,this.zoom,128==this.S))Yy(c,e),_.Nj(this.P)&&_.jv(c,this.P),e=this.U,b=e[(b.x+2*b.y)%e.length],b+="?pb="+_.bv(_.rs(c.j)),null!=a.wd&&(b+="&authuser="+a.wd),
this.O==b?this.j.Yb():(this.O=b,this.j.setUrl(b))}else this.O="",this.j.setUrl("")}};_.m=oz.prototype;_.m.rb=_.l("O");_.m.yc=function(){return jz(this.j,function(a){return a.yc()})};_.m.release=function(){_.fc(this.j,function(a){a.release()});this.P()};_.m.freeze=function(){_.fc(this.j,function(a){a.freeze()})};_.m.Yb=function(){_.fc(this.j,function(a){a.Yb()})};var Mz={bluetooth:"-b",cellular:"-c",ethernet:"-e",none:"-n",wifi:"-wf",wimax:"-wm",other:"-o"},Tz=!0;_.m=sz.prototype;
_.m.Kp=function(){this.S&&(this.S=!1,_.Ff(this.j,"visreq"))};_.m.Lp=function(){this.T&&(this.T=!1,_.Ff(this.j,"visres"))};_.m.ek=function(a){this.P&&(this.P=!1,_.Ff(this.j,"firsttile",a||void 0))};_.m.sh=function(a,b){this.O&&(this.ek(b),this.O=!1,_.Ff(this.j,"visuallycomplete",b||void 0))};_.m.Li=function(){this.O=!1};tz.prototype.T=function(a,b,c){return this.S(this.P.T(a,b,c))};tz.prototype.j=function(a){return this.S(this.P.j(a))};tz.prototype.O=function(){return this.P.O()};
xz.prototype.fromLatLngToPoint=function(a,b){var c=this.P.fromLatLngToPoint(a,b);lz(c,this.j.heading());c.y=(c.y-128)/_.uy+128;return c};xz.prototype.fromPointToLatLng=function(a,b){var c=this.S;c.x=a.x;c.y=(a.y-128)*_.uy+128;lz(c,360-this.j.heading());return this.P.fromPointToLatLng(c,b)};xz.prototype.getPov=_.l("j");zz.prototype.getTileUrl=function(a,b){var c=this.j(a,b);return c&&_.lv(c,a,b)};
zz.prototype.j=function(a,b){for(var c=this.O,d=new _.M(a.x%(1<<b),a.y),e=0;e<c.length;++e){var f=c[e];if(!(f.minZoom>b||f.maxZoom<b)){var g=_.u(f.Va);if(0==g)return f.j;for(var h=f.maxZoom-b,k=0;k<g;++k){var n=f.Va[k];if(_.pi(new _.lf([new _.M(n.ra>>h,n.qa>>h),new _.M(1+(n.wa>>h),1+(n.ya>>h))]),d))return f.j}}}return null};_.Ca(Jz,_.J);
Jz.prototype.getPrintableImageUri=function(a,b,c,d,e){var f=this.get("mapType");if(2048<a*(e||1)||2048<b*(e||1)||!(f instanceof _.kv))return null;var g=d||this.get("zoom");if(null==g)return null;var h=c||this.get("center");if(!h)return null;c=f.get("options");if(!c.Ac)return null;d=new _.cv(c.Ac);d.j.N[3]=0;var k=this.O.j(g);k&&Yy(d,k);if("hybrid"==f.nb){_.Kt(d.j);for(f=_.Gc(d.j.N,1)-1;0<f;--f){var k=Vy(d.j,f),n=Vy(d.j,f-1);_.ji(k.N,n?n.V():null)}f=Vy(d.j,0);f.N[0]=1;1 in f.N&&delete f.N[1];2 in f.N&&
delete f.N[2]}if(2==e||4==e)_.It(d.j).N[4]=e;e=_.Jt(d.j);e.N[3]=e.N[3]||[];e=new _.ms(e.N[3]);e.setZoom(g);e.N[2]=e.N[2]||[];g=new _.Im(e.N[2]);f=Zy(h.lat());g.N[0]=f;h=Zy(h.lng());g.N[1]=h;e.N[0]=e.N[0]||[];h=new _.ns(e.N[0]);h.N[0]=a;h.N[1]=b;a=this.j;a+="?pb="+_.bv(_.rs(d.j));null!=c.wd&&(a+="&authuser="+c.wd);return a};
Qz.prototype.$=function(a){if(_.Gc(a.N,0)){this.S={};this.P={};for(var b=0;b<_.Gc(a.N,0);++b){var c,d=b;c=new Xy(_.Q(a.N,0)[d]);var e=c.getTile(),d=e.getZoom(),f;f=e.N[1];f=null!=f?f:0;e=e.N[2];e=null!=e?e:0;c=c.N[2];c=null!=c?c:0;var g=this.S;g[d]=g[d]||{};g[d][f]=g[d][f]||{};g[d][f][e]=c;this.P[d]=Math.max(this.P[d]||0,c)}this.U.j(null)}};Qz.prototype.T=function(a,b,c){var d=this.S,e=a.x;a=a.y;c&&(e=Math.floor(e/2),a=Math.floor(a/2));return d[b]&&d[b][e]&&d[b][e][a]||0};
Qz.prototype.j=function(a){return this.P[a]||0};Qz.prototype.O=_.l("U");cA.prototype.O=function(a,b,c,d,e,f){function g(){var b=a.get("streetView");b?(a.bindTo("svClient",b,"client"),b.__gm.bindTo("fontLoaded",oa)):(a.unbind("svClient"),a.set("svClient",null))}var h=_.Je(_.Me(_.R)),k=c.vq,n=Sz(e,a,{Cf:k&&k.Cf(),Fh:c.Fh}),p=a.__gm,q=new _.Pw,r=Bz(a.features),v,w;(function(){var c=bz(),d=a.get("noPerTile")&&_.V[15],e=new Qz;v=Uz(e,c,a,d);w=new _.vx(h,q,r,p.va,d?null:e,b.Fa,n)})();w.bindTo("tilt",a);w.bindTo("heading",a);w.bindTo("bounds",a);w.bindTo("zoom",a);w.bindTo("mapMaker",
a);w.bindTo("size",p);c=new Wz(az(),a,v);Hz(c,a.mapTypes);c=a.getDiv();_.I.addDomListenerOnce(c,"mousedown",function(){_.Z(a,"Mi")},!0);var y=new _.Nx(c,b,{Si:!0,wj:_.ti(_.Me(_.R))});e=y.P;_.tk(y.j,0);_.I.forward(a,"resize",c);p.set("panes",y.S);p.set("innerContainer",y.O);_.mj()&&_.ek()||_.L("onion",function(b){b.Yg(a,v,new _.tc)});var z=new _.mw(e,y.U,n),F=new _.uv(["blockingLayerCount","staticMapLoading"],"waitWithTiles",function(a,b){return!!a||!!b});_.ej(p.ta,"sm-block")&&k&&F.bindTo("staticMapLoading",
k,"loading");F.bindTo("blockingLayerCount",p);z.bindTo("waitWithTiles",F);z.set("panes",y.S);z.bindTo("styles",a);_.V[20]&&z.bindTo("animatedZoom",a);_.vj()&&(_.Px(a),_.Qx(a));var C=new _.Sw;C.bindTo("tilt",a);C.bindTo("zoom",a);C.bindTo("mapTypeId",a);C.bindTo("aerial",r.obliques,"available");p.bindTo("tilt",C);var E=Gz(a);w.bindTo("mapType",E);var H=new _.Fx(p.va);_.I.addListener(H,"attributiontext_changed",function(){a.set("mapDataProviders",H.get("attributionText"))});F=new _.Zw;F.bindTo("styles",
a);F.bindTo("mapTypeStyles",E,"styles");p.bindTo("apistyle",F);_.V[15]&&p.bindTo("authUser",a);F=new _.Jx;F.bindTo("mapMaker",a);F.bindTo("mapType",E);F.bindTo("layers",p);p.bindTo("style",F);var P=new _.Sv;p.set("projectionController",P);z.bindTo("size",y);z.bindTo("projection",P);z.bindTo("projectionBounds",P);z.bindTo("mapType",E);P.bindTo("projectionTopLeft",z);P.bindTo("offset",z);P.bindTo("latLngCenter",a,"center");P.bindTo("size",y);P.bindTo("projection",a);z.bindTo("fixedPoint",P);a.bindTo("bounds",
P,"latLngBounds",!0);p.set("mouseEventTarget",{});F=new _.Ew(_.X.P,y.O);F.bindTo("title",p);var T=Rz(y.O,e,a,z,P,f,F);k&&(f=Vz(a,e),k.bindTo("div",f),k.bindTo("center",f,"newCenter"),k.bindTo("zoom",T),k.bindTo("tilt",p),k.bindTo("size",p));p.bindTo("zoom",T);p.bindTo("center",a);p.bindTo("size",y);p.bindTo("mapType",E);p.bindTo("offset",z);p.bindTo("layoutPixelBounds",z);p.bindTo("pixelBounds",z);p.bindTo("projectionTopLeft",z);p.bindTo("projectionBounds",z,"viewProjectionBounds");p.bindTo("projectionCenterQ",
P);a.set("tosUrl",_.cy);k=Pz();k.bindTo("bounds",z,"pixelBounds");p.bindTo("pixelBoundsQ",k,"boundsQ");k=new _.Jv({projection:1});k.bindTo("immutable",p,"mapType");f=new _.Qv({projection:new _.kf});f.bindTo("projection",k);a.bindTo("projection",f);_.I.forward(p,"panby",z);_.I.forward(p,"panbynow",z);_.I.forward(p,"panbyfraction",z);_.I.addListener(p,"panto",function(b){if(b instanceof _.K)if(a.get("center")){b=P.fromLatLngToDivPixel(b);var c=P.get("offset")||_.wg;b.x+=Math.round(c.width)-c.width;
b.y+=Math.round(c.height)-c.height;_.I.trigger(z,"panto",b.x,b.y)}else a.set("center",b);else throw Error("panTo: latLng must be of type LatLng");});_.I.forward(p,"pantobounds",z);_.I.addListener(p,"pantolatlngbounds",function(a){if(a instanceof _.hd)_.I.trigger(z,"pantobounds",$y(P,a));else throw Error("panToBounds: latLngBounds must be of type LatLngBounds");});_.I.addListener(T,"zoom_changed",function(){T.get("zoom")!=a.get("zoom")&&(a.set("zoom",T.get("zoom")),_.ol(a,"Mm"))});var U=new _.Qw;U.bindTo("mapTypeMaxZoom",
E,"maxZoom");U.bindTo("mapTypeMinZoom",E,"minZoom");U.bindTo("maxZoom",a);U.bindTo("minZoom",a);U.bindTo("trackerMaxZoom",q,"maxZoom");T.bindTo("zoomRange",U);z.bindTo("zoomRange",U);T.bindTo("draggable",a);T.bindTo("scrollwheel",a);T.bindTo("disableDoubleClickZoom",a);var oa=new _.Lx(_.jk(c));p.bindTo("fontLoaded",oa);k=p.O;k.bindTo("scrollwheel",a);k.bindTo("disableDoubleClickZoom",a);g();_.I.addListener(a,"streetview_changed",g);if(!b.Fa){var $a=function(){_.L("controls",function(b){var c=new b.ji(y.j);
p.set("layoutManager",c);z.bindTo("layoutBounds",c,"bounds");b.no(c,a,E,y.j,H,r.report_map_issue,U,C,P,y.T,v);b.oo(a,y.O);(c=a.getDiv())&&b.sk(c)})};if(_.mj()){var bb=_.Pt.ad().S,k=new _.Kx;k.bindTo("layers",p);k.bindTo("gid",bb);k.bindTo("persistenceKey",bb);_.Z(a,"Sm");k=function(){bb.get("gid")&&_.Z(a,"Su")};k();_.I.addListener(bb,"gid_changed",k)}var Cb=_.I.addListener(z,"tilesloading_changed",function(){z.get("tilesloading")&&(Cb.remove(),$a())});_.I.addListenerOnce(z,"tilesloaded",function(){_.L("util",
function(b){b.O.j();window.setTimeout((0,_.t)(b.j.P,b.j),5E3);b.S(a)})});_.Z(a,"Mm");b.v2&&_.Z(a,"Mz");_.ll("Mm","-p",a,!(!a||!a.Fa));Fz(a,E);_.ol(a,"Mm");_.Dk(function(){_.ol(a,"Mm")});Ez(a);c&&Nz(new Oz(c),a,function(){return 0!=a.get("draggable")})}Dz(a);var vc=bz();c=new Wz(az(),a,new tz(v,function(a){return a||vc}));Kz(c,a.overlayMapTypes);Cz(a,y.S.mapPane);_.vj()&&p.bindTo("card",a);b.Fa||Lz(a);d&&window.setTimeout(function(){_.I.trigger(a,"projection_changed");_.ra(a.get("bounds"))&&_.I.trigger(a,
"bounds_changed");_.I.trigger(a,"tilt_changed");_.ra(a.get("heading"))&&_.I.trigger(a,"heading_changed")},0);_.V[43]&&(d=_.ii(),c=_.Me(_.R),d=0<_.Gc(d.N,12)&&"cn"!=_.Ke(c).toLowerCase()?_.Q(d.N,12):_.Q(d.N,0),d=new Jz(d[0],v),d.bindTo("mapType",E),d.bindTo("center",a),d.bindTo("zoom",p),a.getPrintableImageUri=(0,_.t)(d.getPrintableImageUri,d));_.V[43]&&a.bindTo("tilesloading",z)};
cA.prototype.fitBounds=function(a,b){function c(){var c=_.qf(a.getDiv());c.width-=80;c.width=Math.max(1,c.width);c.height-=80;c.height=Math.max(1,c.height);var e=a.getProjection(),f=b.getSouthWest(),g=b.getNorthEast(),h=f.lng(),k=g.lng();h>k&&(f=new _.K(f.lat(),h-360,!0));f=e.fromLatLngToPoint(f);h=e.fromLatLngToPoint(g);g=Math.max(f.x,h.x)-Math.min(f.x,h.x);f=Math.max(f.y,h.y)-Math.min(f.y,h.y);c=g>c.width||f>c.height?0:Math.floor(Math.min(_.ij(c.width+1E-12)-_.ij(g+1E-12),_.ij(c.height+1E-12)-_.ij(f+
1E-12)));g=_.Zi(e,b,0);e=_.$i(e,new _.M((g.ra+g.wa)/2,(g.qa+g.ya)/2),0);_.D(c)&&(a.setCenter(e),a.setZoom(c))}a.getProjection()?c():_.I.addListenerOnce(a,"projection_changed",c)};cA.prototype.j=function(a,b,c,d,e,f){var g=_.ov(a,b,c,d,{Oc:f});_.xu(function(){g.setUrl(e)});return g};_.lc("map",new cA);});
