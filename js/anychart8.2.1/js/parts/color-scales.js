if(!_.color_scales){_.color_scales=1;(function($){var HH,KH,NH,OH,RH,bea;$.DH=function(a,b){var c=a.I("fontSize")!=b;null===b?delete a.Xd.fontSize:a.Xd.fontSize=b;c&&a.B(4)};$.EH=function(a,b){return $.Cj(bea,a,b||"clip")};$.FH=function(){$.qr.call(this);this.wG=this.CG=0;this.bv=10};$.GH=function(a){var b=new $.FH;b.$($.kl("defaultScaleSettings.linear"));b.$($.kl("defaultLinearColorScale"));b.Qk.apply(b,arguments);return b};HH=function(a){$.yr.call(this,a)};
$.IH=function(){$.cr.call(this);this.qf=this.qe=null;this.vd=[];this.lr=this.Bk=null;this.Ga=[];this.vS=!1};$.JH=function(a){var b=new $.IH;b.$($.kl("defaultOrdinalColorScale"));b.px(a);return b};KH=function(){$.$v.call(this)};$.LH=function(){$.aw.call(this);this.G=window.NaN;$.as(this,this,this.Gh,this.fh,null,this.Gh);this.yc.la(this,"mousedown",this.J6);this.Ce|=1024};$.MH=function(a){a.line&&(a.line.Dj(),a.line.remove(),a.line=null);a.lines&&(a.lines.length=0)};
NH=function(a){if(a.j){var b=a.scale();if(b&&$.L(b,$.IH)){a.Y={};for(var c=a.j,d=c.zc();d.advance();){var e=($.n(c.ka)?d.o(c.ka):null)||d.get(c.Ee?c.Ee.Hk:c.Mp[1]);if(e=b.Dm(e))a.Y[e.sourceIndex]||(a.Y[e.sourceIndex]=[]),a.Y[e.sourceIndex].push(d.na())}}}};
OH=function(a){var b=0;if(a.Ie&&a.Ie.enabled()){var c=a.orientation();b=2*a.Ie.size();var d=$.n(a.Ie.offsetX())?a.Ie.offsetX():0;a=$.n(a.Ie.offsetY())?a.Ie.offsetY():0;switch(c){case "top":b+=a;break;case "right":b-=d;break;case "bottom":b-=a;break;case "left":b+=d}}return b};
$.PH=function(a,b){if(a.j){var c=a.scale(),d=a.j,e=d.Me()||(d.lp?d.lp():void 0),g=a.Ie&&a.Ie.enabled();d=d.enabled()&&e==c;if(a.enabled()&&g&&c&&d&&(c=a.line.hb(),g=$.hb(a.scale().transform(b,.5),0,1),!(0,window.isNaN)(g))){switch(a.orientation()){case "top":var h=c.left+c.width*g;var k=c.top+c.height+a.Ie.size();var l=180;break;case "bottom":h=c.left+c.width*g;k=c.top-a.Ie.size();l=0;break;case "left":h=c.left+c.width+a.Ie.size();k=c.top+c.height-c.height*g;l=90;break;case "right":h=c.left-a.Ie.size(),
k=c.top+c.height-c.height*g,l=-90}$.V(a.Ie).rotation(l).Bc({value:{x:h,y:k}}).ga(!1).aa();a.Ie.Yf().visible(!0)}}};$.QH=function(a){a.scale()&&a.Ie&&a.Ie.Yf().visible(!1)};RH=function(){$.LH.call(this)};bea={Cha:"always-show",xia:"clip",$ia:"drop"};$.I($.FH,$.qr);$.f=$.FH.prototype;$.f.Sa=function(){return"linear-color"};
$.f.yQ=function(a){var b,c=[];var d=0;for(b=arguments.length;d<b;d++){var e=arguments[d];if($.y(e))c.push($.Qb(e,!0));else if($.C(e))c.push.apply(c,this.yQ.apply(this,e));else if($.F(e)){var g=e.keys;if($.n(g)&&$.C(g)){g=this.yQ.apply(this,e.keys);var h=e.opacity;if($.n(h))for(var k=0;k<g.length;k++)e=g[k],$.n(e.opacity)||(e.opacity=h);c.push.apply(c,g)}else c.push(e)}}return c};
$.f.dea=function(a){for(var b=this.yQ.apply(this,arguments),c=0,d=b.length;c<d;c++){var e=b[c];$.n(e.offset)||(e.offset=c?c==d-1?1:c/(d-1):0);var g=e.color;$.C(g)?e.color=$.Ma(g):$.y(g)&&(e.color=$.Ak($.Lk(g).Wh))}$.Za(b);return b};
$.f.Qk=function(a){if(0<arguments.length&&$.n(arguments[0])){var b=this.dea.apply(this,arguments),c=this.qe&&b.length==this.qe.length;if(c)for(var d=0,e=b.length;d<e;d++){var g=!1;(0,$.xa)(this.qe,function(a){var c;if(!(c=g))a:{c=b[d];for(var e in a)if(!(e in c)||a[e]!==c[e]){c=!1;break a}for(e in c)if(!(e in a)){c=!1;break a}c=!0}g=c});c=c&&g}c&&this.qe||(this.qe=b,this.sa(2));return this}return this.qe};
$.f.Hx=function(a){a=this.transform(a);for(var b,c,d=0,e=this.qe.length;d<e;d++){var g=this.qe[d];if(c)break;else a>=g.offset?b=g:c=g}var h;b?c?h=$.Kk(c.color,b.color,(a-b.offset)/(c.offset-b.offset)):h=b.color:h=c.color;return $.C(h)?$.Wb(h):h.color};
$.f.tP=function(a){this.nb();a=$.Ak($.Lk(a).Wh);var b;var c=0;for(b=this.qe.length;c<b;c++){var d=this.qe[c];var e=d.color;if(c!=this.qe.length-1){var g=this.qe[c+1];var h=g.color}var k=(a[1]-e[1])/(h[1]-e[1]);var l=(a[2]-e[2])/(h[2]-e[2]);var m=(a[0]-e[0])/(h[0]-e[0]);(0,window.isNaN)(m)&&(m=k||l);(0,window.isNaN)(k)&&(k=l||m);(0,window.isNaN)(l)&&(l=m||k);if($.Sl(m,k)&&$.Sl(m,l)&&$.Sl(k,l)&&(k=Math.round(h[1]*k+(1-k)*e[1])==a[1],l=Math.round(h[2]*l+(1-l)*e[2])==a[2],Math.round(h[0]*m+(1-m)*e[0])==
a[0]&&k&&l)){var p=this.ke*(m/(1/(g.offset-d.offset))+d.offset)+this.min;break}}return $.n(p)?p:window.NaN};$.f.Ia=function(a){this.ol||(this.ol=this.Rk());return $.n(a)?(this.ol.P(a),this.sa(2),this):this.ol};$.f.lb=function(a){this.fl||(this.fl=this.Rk(),this.fl.count(5));return $.n(a)?(this.fl.P(a),this.sa(2),this):this.fl};
$.f.eH=function(){var a=this.Ia().Uz(this.min,this.max,this.Qm&&this.min!=this.js,this.Pm&&this.max!=this.Xp,this.bv);this.Qm&&(this.min=a[0]);this.Pm&&(this.max=a[1]);this.lb().Vz(this.Ia().tj(),this.bv,a[2],a[3],this.fw)};$.f.Bv=function(){$.FH.F.Bv.call(this);$.Wq(this.cq,[this.min,this.max]);this.ke=this.max-this.min};$.f.fi=function(a){$.W(a,2)&&(this.Pc=!1,this.sa(2))};$.f.Rk=function(){var a=new $.sr(this);$.O(this,a);$.U(a,this.fi,this);return a};
$.f.J=function(){var a=$.FH.F.J.call(this);a.ticks=this.Ia().J();a.minorTicks=this.lb().J();a.colors=(0,$.eb)(this.Qk(),function(a){return $.Wb(a.color)});return a};$.f.$=function(a,b){$.FH.F.$.call(this,a,b);this.Ia(a.ticks);this.lb(a.minorTicks);this.Qk(a.colors)};var SH=$.FH.prototype;$.H("anychart.scales.linearColor",$.GH);SH.colors=SH.Qk;SH.valueToColor=SH.Hx;SH.colorToValue=SH.tP;SH.ticks=SH.Ia;SH.minorTicks=SH.lb;$.I(HH,$.yr);HH.prototype.WW=function(){var a=[],b=this.scale.px();b.length||(b=this.scale.Cq());if(b){var c;b=b.length;(0,window.isNaN)(this.vI())?c=Math.ceil(b/this.AS())||1:c=this.vI();for(var d=0;d<b;d+=c)a.push(d)}return a};
HH.prototype.uS=function(a){var b=a.length||0,c=this.scale.Cq(),d=c.length;if(!b||!d)return[];for(var e=[],g=!1,h=0;h<b&&!g;h++){var k=a[h],l=a[h+1];(0,window.isNaN)(l)||l>=d?(l=d-1,g=!0):l--;var m=$.n(c[k].vq)?c[k].vq:(c[k].start+c[k].end)/2,p=$.n(c[l].vq)?c[l].vq:(c[l].start+c[l].end)/2;e.push(k==l?m:[m,p])}return e};$.I($.IH,$.cr);$.f=$.IH.prototype;$.f.Sa=function(){return"ordinal-color"};$.f.aL=function(){this.Op()};$.f.Qk=function(a){if($.n(a))return null===a?this.qe=[]:$.C(a)&&(this.qe=$.Ma(a)),this.Op(),this.sa(2),this;if($.C(this.qe)){this.Kz||(this.Kz=$.Ma(this.qe));if(this.Kz.length<this.vd.length)for(;this.Kz.length!=this.vd.length;)this.Kz.push(this.vd[this.Kz.length]);return this.Kz}return this.lr||[]};
$.f.names=function(a){if($.n(a)){if(null===a)this.qf=[];else if($.C(a))this.qf=$.Ma(a);else{if(!$.y(a)||this.qf==a)return this;this.qf=a}this.Op();$.zr(this.Ia());this.sa(4);return this}this.nb();if($.C(this.qf)){this.Um||(this.Um=$.Ma(this.qf));if(this.Um.length<this.Bk.length)for(;this.Um.length!=this.Bk.length;)this.Um.push(this.Bk[this.Um.length]);return this.Um}if(!this.Lj){this.Lj=[];a=0;for(var b=this.Bk.length;a<b;a++){var c=this.Bk[a],d;$.n(c.vq)?d=c.vq:(0,window.isFinite)(c.start+c.end)?
c.start===c.end?d=c.start:d=c.start+" - "+c.end:d=(0,window.isFinite)(c.start)?"> "+c.start:"< "+c.end;c.name||(c.name=d);this.Lj.push(d)}}return this.Lj};$.f.px=function(a){return $.n(a)?(this.vd!=a&&(this.vd=a,this.vS||(this.lr=$.kl("defaultOrdinalColorScale.autoColors")(this.vd.length)),this.Op(),$.zr(this.Ia()),this.sa(4)),this):this.vd};$.f.Cq=function(){this.nb();this.names();return this.Bk};
$.f.Dm=function(a){this.nb();var b=null;if(this.Bk)for(var c=this.Bk.length;c--;){var d=this.Bk[c];if($.n(d.vq)&&d.vq===a||a>=d.start&&a<=d.end&&-1<d.sourceIndex)b=d}return b};$.f.Hx=function(a){this.nb();var b="none";if(a=this.Dm(a)){var c=a.sourceIndex;if(0<=c){var d=this.Qk();$.n(a.color)?b=a.color:d&&0<d.length&&(b=c>d.length-1?d[d.length-1]:d[c])}}return b};
$.f.tP=function(a){this.nb();a=$.Lk(a).Wh;for(var b=window.NaN,c=0,d=this.Bk.length;c<d;c++){var e=this.Bk[c],g=this.Qk();if(a==$.Lk(e.color||g[e.sourceIndex]||g[g.length-1]).Wh){b=(e.start+e.end)/2;break}}return b};$.f.Gw=function(a){this.nb();return(a=this.Dm(a))?(0,$.Ca)(this.Bk,a):-1};$.f.Ia=function(a){this.ol||(this.ol=this.Rk());return $.n(a)?(this.ol.P(a),this):this.ol};$.f.fi=function(a){$.W(a,2)&&this.sa(2)};$.f.Rk=function(){var a=new HH(this);$.O(this,a);$.U(a,this.fi,this);return a};
$.f.transform=function(a,b){this.nb();var c=this.Dm(a);return c?1/this.Bk.length*((0,$.Ca)(this.Bk,c)+(b||0)):window.NaN};$.f.Vc=function(a){this.nb();a=this.Bk[$.hb(Math.ceil(a*this.Bk.length)-1,0,this.Bk.length-1)];return $.n(a.vq)?a.vq:(a.start+a.end)/2};$.f.pg=function(){return!!this.px.length};$.f.NA=function(a){this.Pc=!1;a||this.sa(2);return!0};$.f.reset=function(){this.Um=this.HA=this.Lj=this.Kz=this.Bk=null;return this};$.f.Op=function(){this.reset();this.Ga.length=0};
$.f.ld=function(a){for(var b=0;b<arguments.length;b++)this.Ga.push(arguments[b]);return this};
$.f.nb=function(){if(!this.Bk){var a=[];if(!this.vd.length){this.HA=[];$.Pa(this.Ga);var b=[],c=[];(0,$.xa)(this.Ga,function(a){var d=$.Q(a);(0,window.isNaN)(a)?b.push({equal:a}):c.push(d)});$.Ua(c);var d=Math.round(1+3.32*Math.log(c.length)/Math.log(10));var e=Math.floor(c[0]);var g=(c[c.length-1]-e)/d;var h=e;var k=Math.ceil(h+g);for(e=0;e<d;e++)this.HA.push({from:h,to:k}),h=k,k=Math.ceil(h+g);this.HA=this.HA.concat(b);this.vS||(this.lr=$.kl("defaultOrdinalColorScale.autoColors")(this.HA.length))}k=
this.vd.length?this.vd:this.HA;e=0;for(d=k.length;e<d;e++){g=k[e];h=this.qf?this.qf[e]:null;var l=this.Qk();var m=this.Fe()?Math.max(0,l.length-1-e):e;l=l&&l[m]?l[m]:null;m=!0;var p=e,q=g.equal,r=$.Q(g.from),t=$.Q(g.to),u=$.Q(g.less),v=$.Q(g.greater),x=window.NaN,w=window.NaN,z=void 0;$.n(q)?(r=$.Q(q),(0,window.isNaN)(r)?z=q:w=x=r):(0,window.isNaN)(r)||(0,window.isNaN)(t)?(0,window.isNaN)(v)?(0,window.isNaN)(u)?m=!1:(x=Number.NEGATIVE_INFINITY,w=u):(x=v,w=Number.POSITIVE_INFINITY):(x=Math.min(r,t),
w=Math.max(r,t));m&&a.push({vq:z,start:x,end:w,sourceIndex:p,enabled:!0,color:g.color||l,name:g.name||h})}$.Ua(a,function(a,b){var c=a.start>b.start?1:a.start<b.start?-1:0;Math.max(a.start,b.start)<=Math.min(a.end,b.end)&&(a.start>b.start?a.sourceIndex>b.sourceIndex?b.end=a.start:(a.start=b.end,a.start>=a.end&&(a.enabled=!1)):a.start<b.start?a.sourceIndex>b.sourceIndex?(b.start=a.end,b.start>=b.end&&(b.enabled=!1)):a.end=b.start:a.sourceIndex>b.sourceIndex?(b.start=a.end,b.start>=b.end&&(b.enabled=
!1)):(a.end=b.start,a.start>=a.end&&(a.enabled=!1)));return c});h=[];e=0;for(d=a.length;e<d;e++)g=a[e],g.enabled&&h.push(g);a.length=0;this.Bk=h}};$.f.J=function(){var a=$.IH.F.J.call(this);a.ticks=this.Ia().J();this.vd&&this.vd.length&&(a.ranges=this.vd);this.qf&&(a.names=this.qf);this.qe&&(a.colors=this.qe);return a};$.f.$=function(a,b){$.IH.F.$.call(this,a,b);this.Ia(a.ticks);this.Qk(a.colors);this.px(a.ranges);this.names(a.names)};var TH=$.IH.prototype;$.H("anychart.scales.ordinalColor",$.JH);
TH.getType=TH.Sa;TH.colors=TH.Qk;TH.ranges=TH.px;TH.names=TH.names;TH.ticks=TH.Ia;TH.getRangeByValue=TH.Dm;TH.getProcessedRanges=TH.Cq;TH.valueToColor=TH.Hx;TH.colorToValue=TH.tP;TH.getIndexByValue=TH.Gw;TH.transform=TH.transform;TH.inverseTransform=TH.Vc;$.I(KH,$.$v);KH.prototype.UV=function(a,b,c,d,e){b=Math.round(b.left+a*b.width);var g=this.length(),h=this.position();b=1==a?b+e:b-e;if("outside"==h){var k=c.top-d/2;var l=-g}else"center"==h?(k=c.top+(c.height-g)/2,l=g):"inside"==h&&(k=c.Ka()+d/2,l=g);this.path.moveTo(b,k);this.path.lineTo(b,k+l)};
KH.prototype.TV=function(a,b,c,d,e){b=Math.round(b.top+b.height-a*b.height);var g=this.length(),h=this.position();b=1==a?b-e:b+e;"outside"==h?(a=c.Xa()+d/2,c=g):"center"==h?(a=c.left+(c.width-g)/2,c=g):(a=c.left-d/2,c=-g);this.path.moveTo(a,b);this.path.lineTo(a+c,b)};
KH.prototype.RV=function(a,b,c,d,e){b=Math.round(b.left+a*b.width);var g=this.length(),h=this.position();b=1==a?b+e:b-e;if("outside"==h){var k=c.Ka()+d/2;var l=g}else"center"==h?(k=c.top+(c.height-g)/2,l=g):"inside"==h&&(k=c.top-d/2,l=-g);this.path.moveTo(b,k);this.path.lineTo(b,k+l)};
KH.prototype.SV=function(a,b,c,d,e){b=Math.round(b.top+b.height-a*b.height);var g=this.length(),h=this.position();b=1==a?b-e:b+e;if("outside"==h){var k=c.left-d/2;var l=-g}else"center"==h?(k=c.left+(c.width-g)/2,l=g):"inside"==h&&(k=c.Xa()+d/2,l=g);this.path.moveTo(k,b);this.path.lineTo(k+l,b)};$.I($.LH,$.aw);$.f=$.LH.prototype;$.f.ta=$.aw.prototype.ta|1024;$.f.Rk=function(){return new KH};$.f.GO=function(){this.line||($.L(this.scale(),$.FH)?this.line=$.uj():$.L(this.scale(),$.IH)&&(this.line=$.sj(),this.lines=[]),this.line.zIndex(this.zIndex()),this.line.parent(this.U()),this.line.cursor("pointer"),$.$r(this,this.line));return this.line};$.f.aJ=function(a){return $.n(a)?(a=$.Q(a),this.G!=a&&(this.G=a,this.B(this.Ce,9)),this):this.G};
$.f.align=function(a){return $.n(a)?(a=$.Kj(a),this.D!=a&&(this.D=a,this.B(this.Ce,9)),this):this.D};$.f.length=function(a){return $.n(a)?(this.Od!=a&&(this.Od=a,this.B(this.Ce,9)),this):this.Od};$.f.ev=function(a){this.Ie||(this.Ie=new $.mv,this.Ie.Bc({value:{x:0,y:0}}),$.U(this.Ie,this.K6,this));return $.n(a)?(this.Ie.P(a),this.B(1024,1),this):this.Ie};$.f.K6=function(a){$.W(a,1)&&this.B(1024,1)};
$.f.target=function(a){return $.n(a)?(this.j!=a&&(this.j=a,NH(this),$.U(this.j,this.Jga,this)),this):this.j};$.f.Jga=function(a){$.W(a,132)&&NH(this)};
$.f.np=function(a,b){var c=this.scale(),d={};if($.L(c,$.FH)){var e=(0,window.parseFloat)(b);var g=c.CC(e);var h="number"}else if($.L(c,$.IH)){e=b;g=c.Ia().names()[a];h="string";var k=c.Dm(b);k&&(d.colorRange={value:{color:k.color,end:k.end,name:k.name,start:k.start,index:k.sourceIndex},type:""})}d.index={value:a,type:"number"};d.value={value:g,type:h};d.tickValue={value:e,type:"number"};d.max={value:$.n(c.max)?c.max:null,type:"number"};d.min={value:$.n(c.min)?c.min:null,type:"number"};d.scale={value:c,
type:""};return $.Vt(new $.gu(d))};$.f.Cw=function(a,b){var c=0;a.enabled()&&(c=a.length(),c="center"==a.position()?Math.max((c-this.G)/2,0):$.n(b)?0<b?"outside"==a.position()?0:c:0>b?"inside"==a.position()?0:c:c:c);return c};
$.f.FO=function(a,b,c,d,e){c=a.top+a.height+c/2-d;var g=this.scale();if($.L(g,$.FH))this.line.moveTo(a.left+b,c).lineTo(a.left-b+a.width,c).lineTo(a.left-b+a.width,c-e).lineTo(a.left+b,c-e).close();else if($.L(g,$.IH)){d=g.Cq();g=g.Qk();for(var h=a.width/d.length,k=0,l=d.length;k<l;k++){var m=d[k];m=m.color||g[m.sourceIndex]||g[g.length-1];var p=this.lines[k]?this.lines[k].clear():this.lines[k]=this.line.path(),q=a.left+b+h*k;p.moveTo(q,c).lineTo(q+h,c).lineTo(q+h,c-e).lineTo(q,c-e).close();p.stroke(this.stroke());
p.fill(m)}}};
$.f.EO=function(a,b,c,d,e){c=a.left-c/2+d;var g=this.scale();if($.L(g,$.FH))this.line.moveTo(c,a.top+b).lineTo(c,a.top-b+a.height).lineTo(c+e,a.top-b+a.height).lineTo(c+e,a.top+b).close();else if($.L(g,$.IH)){d=g.Cq();g=g.Qk();for(var h=a.height/d.length,k=0,l=d.length;k<l;k++){var m=d[k];m=m.color||g[m.sourceIndex]||g[g.length-1];var p=this.lines[k]?this.lines[k].clear():this.lines[k]=this.line.path(),q=a.top+b+h*(d.length-1-k);p.moveTo(c,q).lineTo(c,q+h).lineTo(c+e,q+h).lineTo(c+e,q).close();p.stroke(this.stroke());
p.fill(m)}}};
$.f.CO=function(a,b,c,d,e){c=a.top-c/2+d;var g=this.scale();if($.L(g,$.FH))this.line.moveTo(a.left+b,c).lineTo(a.left-b+a.width,c).lineTo(a.left-b+a.width,c+e).lineTo(a.left+b,c+e).close();else if($.L(g,$.IH)){d=g.Cq();g=g.Qk();for(var h=a.width/d.length,k=0,l=d.length;k<l;k++){var m=d[k];m=m.color||g[m.sourceIndex]||g[g.length-1];var p=this.lines[k]?this.lines[k].clear():this.lines[k]=this.line.path(),q=a.left+b+h*k;p.moveTo(q,c).lineTo(q+h,c).lineTo(q+h,c+e).lineTo(q,c+e).close();p.stroke(this.stroke());p.fill(m)}}};
$.f.DO=function(a,b,c,d,e){c=a.left+a.width+c/2-d;var g=this.scale();if($.L(g,$.FH))this.line.moveTo(c,a.top+b).lineTo(c,a.top-b+a.height).lineTo(c-e,a.top-b+a.height).lineTo(c-e,a.top+b).close();else if($.L(g,$.IH)){d=g.Cq();g=g.Qk();for(var h=a.height/d.length,k=0,l=d.length;k<l;k++){var m=d[k];m=m.color||g[m.sourceIndex]||g[g.length-1];var p=this.lines[k]?this.lines[k].clear():this.lines[k]=this.line.path(),q=a.top+b+h*(d.length-1-k);p.moveTo(c,q).lineTo(c,q+h).lineTo(c-e,q+h).lineTo(c-e,q).close();
p.stroke(this.stroke());p.fill(m)}}};
$.f.ku=function(){var a=this.GO(),b=this.scale();b||this.scale($.GH());if($.L(b,$.FH))a.clear(),a.stroke(this.stroke()),b=$.Xb(b.Qk()),this.Gb()?b.angle=0:b.angle=90,a.fill(b);else if($.L(b,$.IH))for(a=0,b=this.lines.length;a<b;a++)this.lines[a].clear();switch(this.orientation()){case "top":var c=this.FO;break;case "right":c=this.EO;break;case "bottom":c=this.CO;break;case "left":c=this.DO}a=this.stroke();a=!a||$.Hn(a)?0:a.thickness?(0,window.parseFloat)(this.stroke().thickness):1;b=0==a%2?0:.5;var d=
this.pb(),e=OH(this),g=Math.round(this.G),h=this.Cw(this.Ia(),1),k=this.Cw(this.lb(),1);c.call(this,d,b,a,Math.max(h,k,e),g)};
$.f.pb=function(){if(!this.Qq||this.O(4)){var a=this.oa();if(a){a.top=Math.round(a.top);a.left=Math.round(a.left);a.width=Math.round(a.width);a.height=Math.round(a.height);if(this.Gb()){var b=a.width;var c=a.height}else b=a.height,c=a.width;var d=this.Eh(b);c=this.width()?$.P(this.width(),c):$.dw(this,a,d);var e=this.padding(),g=$.P(e.I("top"),a.height),h=$.P(e.I("right"),a.width),k=$.P(e.I("bottom"),a.height);e=$.P(e.I("left"),a.width);var l=this.align(),m;this.Gb()?(d+h+e>b&&(d=b-(h+e)),"left"==
l||"top"==l?m=e:"right"==l||"bottom"==l?m=b-d-h:"center"==l&&(m=(b-d-h-e)/2)):(d+k+g>b&&(d=b-(k+g)),"left"==l||"top"==l?m=g:"right"==l||"bottom"==l?m=b-d-k:"center"==l&&(m=(b-d-k-g)/2));switch(this.orientation()){case "top":var p=a.top+g;var q=a.left+m;var r=c;var t=d;break;case "right":p=a.top+m;q=a.left+a.width-c-h;r=d;t=c;break;case "bottom":p=a.top+a.height-c-k;q=a.left+m;r=c;t=d;break;case "left":p=a.top+m,q=a.left+e,r=d,t=c}this.Qq=new $.K(Math.round(q),Math.round(p),Math.round(t),Math.round(r))}else this.Qq=
new $.K(0,0,0,0);this.N(4)}return this.Qq};$.f.Eh=function(a){return $.P(this.Od,a)};
$.f.XW=function(a,b){var c=this.Ia(),d=this.lb(),e=this.Cw(c),g=this.Cw(d),h=OH(this);"outside"==c.position()?"outside"==d.position()?c=Math.max(a+e,b+g):(c="inside"==d.position()?Math.max(a+e,b):Math.max(a+e,b+g),h=Math.max(g,h)):"inside"==c.position()?"outside"==d.position()?(c=Math.max(a,b+g),h=Math.max(e,h)):(c="inside"==d.position()?Math.max(a,b):Math.max(a,b+g),h=Math.max(e,g,h)):"outside"==d.position()?(c=Math.max(a+e,b+g),h=Math.max(e,h)):(c="inside"==d.position()?Math.max(a+e,b):Math.max(a+
e,b+g),h=Math.max(e,g,h));e=this.stroke();return c+h+(Math.round(this.G)+(!e||$.Hn(e)?0:e.thickness?(0,window.parseFloat)(e.thickness):1))};$.f.scale=function(a){(a=$.LH.F.scale.call(this,a))||(this.ba||(this.ba=$.GH(),this.ba.Qk("#fff","#000")),a=this.ba);return a};$.f.GY=function(){return 48};$.f.Hg=function(a){$.W(a,2)&&$.MH(this);$.LH.F.Hg.call(this,a)};
$.f.aa=function(){if(!this.xc())return this;this.O(1024)&&(this.Ie&&(this.Ie.U(this.U()),this.Ie.zIndex(this.zIndex()+1),this.Ie.aa(),this.Ie.Yf().visible(!1)),this.N(1024));this.O(2)&&this.Ie&&this.Ie.U(this.U());if(this.O(8)&&this.Ie){var a=this.zIndex();this.Ie.zIndex(a+1)}return $.LH.F.aa.call(this)};
$.f.J6=function(a){if(this.j){var b=this.scale(),c=this.j,d=c&&(c.Me()||(c.lp?c.lp():void 0));if(this.enabled()&&b&&c.enabled()&&d==b){d=this.line.hb();if(this.Gb()){var e=a.clientX;var g=d.left+$.dj(this.U().Ea()).x;d=(e-g)/d.width}else e=a.clientY,g=d.top+$.dj(this.U().Ea()).y,d=(d.height-(e-g))/d.height;d=b.Vc(d);a.metaKey||a.shiftKey||!c.map||c.map.Jd();if($.L(b,$.IH))d=b.Dm(d),b&&c&&(e=this.Y[d.sourceIndex],b=c.hc(),b=b.pe(),"single"==b.pd()?this.wf={ca:c,gd:e}:this.wf=[{ca:c,gd:e,Om:e[e.length-
1],Zd:{index:e[e.length-1],Ef:0}}]);else if($.L(b,$.FH)){a=c.zc();e=window.Infinity;for(var h=window.NaN,k=b.Jh(),l=b.ti();a.advance();){g=a.get(c.Ee?c.Ee.Hk:c.Mp[1]);g=$.hb(g,k,l);var m=Math.abs(d-g);e>m&&(e=m,h=g)}e=[];a=c.zc();for(d=h;a.advance();)g=a.get(c.Ee?c.Ee.Hk:c.Mp[1]),g=$.hb(g,k,l),g==d&&e.push(a.na());b&&c&&(b=c.hc(),b=b.pe(),"single"==b.pd()?this.wf={ca:c,gd:e}:this.wf=[{ca:c,gd:e,Om:e[e.length-1],Zd:{index:e[e.length-1],Ef:0}}])}}}};
$.f.Gh=function(a){if(this.j){var b=this.scale(),c=this.j,d=c.Me()||(c.lp?c.lp():void 0);if(this.enabled()&&b&&c.enabled()&&d==b){d=this.line.hb();if(this.Gb()){var e=a.clientX;var g=d.left+$.dj(this.U().Ea()).x;d=(e-g)/d.width}else e=a.clientY,g=d.top+$.dj(this.U().Ea()).y,d=(d.height-(e-g))/d.height;d=b.Vc(d);if($.L(b,$.IH)){a=b.Dm(d);var h=this.Y[a.sourceIndex];b=c.hc();g=b.pe();"single"==g.pd()?this.wf={ca:c,gd:h}:this.wf=[{ca:c,gd:h,Om:h[h.length-1],Zd:{index:h[h.length-1],Ef:0}}]}else if($.L(b,
$.FH)&&c){g=c.zc();h=window.Infinity;for(var k=window.NaN,l=b.Jh(),m=b.ti();g.advance();){e=g.get(c.Ee?c.Ee.Hk:c.Mp[1]);e=$.hb(e,l,m);var p=Math.abs(d-e);h>p&&(h=p,k=e)}h=[];g=c.zc();for(d=k;g.advance();)e=g.get(c.Ee?c.Ee.Hk:c.Mp[1]),e=$.hb(e,l,m),e==d&&h.push(g.na());b&&c&&(b=c.hc(),g=b.pe(),"single"==g.pd()?(this.wf&&!(0,$.Nz)(h,function(a){return $.Da(this.wf.gd,a)},this)&&b.dispatchEvent(b.Zj("hovered",a,[{ca:c,gd:[],Zd:{index:this.wf.gd[this.wf.gd.length-1],Ef:0}}],!1)),this.wf={ca:c,gd:h}):
this.wf=[{ca:c,gd:h,Om:h[h.length-1],Zd:{index:h[h.length-1],Ef:0}}])}$.PH(this,d)}}};$.f.fh=function(){$.QH(this);var a=this.j;a&&(this.Da=a)};$.f.remove=function(){$.LH.F.remove.call(this);this.Ie&&this.Ie.remove()};$.f.J=function(){var a=$.LH.F.J.call(this);a.marker=this.ev().J();a.colorLineSize=this.aJ();a.length=this.length();a.align=this.align();return a};$.f.$=function(a,b){$.LH.F.$.call(this,a,b);this.ev(a.marker);this.aJ(a.colorLineSize);this.length(a.length);this.align(a.align)};
$.I(RH,$.LH);$.fs(RH,$.LH);var UH=$.LH.prototype;UH.marker=UH.ev;UH.colorLineSize=UH.aJ;UH.length=UH.length;UH.align=UH.align;UH=RH.prototype;$.H("anychart.standalones.colorRange",function(){var a=new RH;a.ia(!0,$.kl("standalones.colorRange"));return a});UH.padding=UH.padding;UH.draw=UH.aa;UH.parentBounds=UH.oa;UH.container=UH.U;UH.colorLineSize=UH.aJ;}).call(this,$)}
