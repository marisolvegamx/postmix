if(!_.table){_.table=1;(function($){var IN=function(a,b){this.ea=a;this.qf=b?GN:HN},JN=function(a){this.ea=a},KN=function(a){$.qd.call(this);this.j=a;this.X=this.Y=null},LN=function(a,b,c){KN.call(this,a);this.reset(b,c)},MN=function(a,b){KN.call(this,a);this.Yd=b;this.b=null},NN=function(a,b){KN.call(this,a);this.Yd=b;this.b=null},ON=function(a,b){$.X.call(this);this.b=[];this.g=$.on(b,4);this.j=$.on(a,5);this.D=0;this.Y=[];this.R=[];this.K=[];this.ba=[];this.X=[];this.G={fill:"none",cellBorder:"black",topPadding:0,rightPadding:0,
bottomPadding:0,leftPadding:0,hAlign:"start",vAlign:"top",enabled:!0,wordWrap:"break-word",wordBreak:"normal"};this.G.fill="#fff"},QN=function(a){if(a.O(2048)){var b=[],c=a.D?a.b.length/a.D:0,d,e,g=Math.min(c,a.j),h=Math.min(a.D,a.g);for(d=0;d<g;d++){for(e=0;e<h;e++)b.push(a.b[d*a.D+e]);for(e=h;e<a.g;e++)b.push(PN(a,d,e));for(e=h;e<a.D;e++){var k=a,l=a.b[d*a.D+e];l.content(null);k.Y.push(l)}}for(d=g;d<a.j;d++)for(e=0;e<a.g;e++)b.push(PN(a,d,e));for(d=g;d<c;d++)for(e=0;e<a.D;e++)g=a,h=a.b[d*a.D+e],
h.content(null),g.Y.push(h);a.b=b;a.D=window.NaN;a.N(2048);a.B(1984)}},SN=function(a){if(a.O(64)){var b=a.pb(),c=RN(a.g,a.K,a.rr,a.qr,a.tJ,a.sJ,a.rJ,b.width,a.X);b=RN(a.j,a.R,a.es,a.ds,a.zI,a.xJ,a.wJ,b.height,a.ba);a.N(64);if(c||b)a.X=c||a.X,a.ba=b||a.ba,a.B(1792)}},UN=function(a,b,c,d,e,g,h){if(g&&"none"!=g){var k=(g.thickness?g.thickness:1)%2?.5:0;b=TN(a,b,c,d,e);c=$.Tk(g);c in a.Xt?a=a.Xt[c]:(d=a.Sm.length?a.Sm.pop():$.uj(),a.Hb.fb(d),$.F(g)&&"keys"in g&&!$.F(g.mode)&&(g=$.Sk(g),g.mode=a.pb()),
d.stroke(g),d.fill(null),a=a.Xt[c]=d);switch(h){case 0:a.moveTo(b.ob(),b.Ob()+k);a.lineTo(b.Xa()+1,b.Ob()+k);break;case 1:a.moveTo(b.Xa()+k,b.Ob());a.lineTo(b.Xa()+k,b.Ka()+1);break;case 2:a.moveTo(b.ob(),b.Ka()+k);a.lineTo(b.Xa()+1,b.Ka()+k);break;case 3:a.moveTo(b.ob()+k,b.Ob()),a.lineTo(b.ob()+k,b.Ka()+1)}}},VN=function(a,b,c){if(b||c){var d;if((d=b&&b.Va("bottomBorder"))||(d=c&&c.Va("topBorder"))||(d=b&&b.Va("border"))||(d=c&&c.Va("border")))return d;if(a.Vm){var e=a.Vm[(b||window.NaN)&&b.g],
g=a.Vm[(c||window.NaN)&&c.g];if((d=e&&e.Va("bottomBorder"))||(d=g&&g.Va("topBorder"))||(d=e&&e.Va("border"))||(d=g&&g.Va("border"))||(d=e&&e.Va("cellBottomBorder"))||(d=g&&g.Va("cellTopBorder"))||(d=e&&e.Va("cellBorder"))||(d=g&&g.Va("cellBorder")))return d}if(e=a.tm&&a.tm[(b||c).G])if((d=!b&&(e.Va("topBorder")||e.Va("border"))||!c&&(e.Va("bottomBorder")||e.Va("border")))||(d=e.Va("cellBottomBorder"))||(d=e.Va("cellTopBorder"))||(d=e.Va("cellBorder"))||(d=e.Va("cellBorder")))return d;return(d=!b&&
(a.Va("topBorder")||a.Va("border"))||!c&&(a.Va("bottomBorder")||a.Va("border")))||(d=b&&a.Va("cellBottomBorder"))?d:(d=c&&a.Va("cellTopBorder"))?d:a.Va("cellBorder")||"none"}return"none"},WN=function(a,b,c){if(b||c){var d;if((d=b&&b.Va("rightBorder"))||(d=c&&c.Va("leftBorder"))||(d=b&&b.Va("border"))||(d=c&&c.Va("border")))return d;var e=a.Vm&&a.Vm[(b||c).g];if(e&&((d=!b&&(e.Va("leftBorder")||e.Va("border"))||!c&&(e.Va("rightBorder")||e.Va("border")))||(d=e.Va("cellRightBorder"))||(d=e.Va("cellLeftBorder"))||
(d=e.Va("cellBorder"))||(d=e.Va("cellBorder"))))return d;if(a.tm){e=a.tm[(b||window.NaN)&&b.G];var g=a.tm[(c||window.NaN)&&c.G];if((d=e&&e.Va("rightBorder"))||(d=g&&g.Va("leftBorder"))||(d=e&&e.Va("border"))||(d=g&&g.Va("border"))||(d=e&&e.Va("cellRightBorder"))||(d=g&&g.Va("cellLeftBorder"))||(d=e&&e.Va("cellBorder"))||(d=g&&g.Va("cellBorder")))return d}return(d=!b&&(a.Va("leftBorder")||a.Va("border"))||!c&&(a.Va("rightBorder")||a.Va("border")))||(d=b&&a.Va("cellRightBorder"))?d:(d=c&&a.Va("cellLeftBorder"))?
d:a.Va("cellBorder")||"none"}return"none"},XN=function(a,b,c){if($.n(c)){var d=!1;null===c?a.es&&b in a.es&&(delete a.es[b],d=!0):(a.es||(a.es=[]),a.es[b]!=c&&(a.es[b]=c,d=!0));d&&a.B(64,1);return a}return a.es&&b in a.es?a.es[b]:null},YN=function(a,b,c){if($.n(c)){var d=!1;null===c?a.ds&&b in a.ds&&(delete a.ds[b],d=!0):(a.ds||(a.ds=[]),a.ds[b]!=c&&(a.ds[b]=c,d=!0));d&&a.B(64,1);return a}return a.ds&&b in a.ds?a.ds[b]:null},ZN=function(a,b,c){return $.n(c)?(a.K[b]!=c&&(null===c?delete a.K[b]:a.K[b]=
c,a.B(64,1)),a):b in a.K?a.K[b]:null},$N=function(a,b,c){if($.n(c)){var d=!1;null===c?a.rr&&b in a.rr&&(delete a.rr[b],d=!0):(a.rr||(a.rr=[]),a.rr[b]!=c&&(a.rr[b]=c,d=!0));d&&a.B(64,1);return a}return a.rr&&b in a.rr?a.rr[b]:null},aO=function(a,b,c){if($.n(c)){var d=!1;null===c?a.qr&&b in a.qr&&(delete a.qr[b],d=!0):(a.qr||(a.qr=[]),a.qr[b]!=c&&(a.qr[b]=c,d=!0));d&&a.B(64,1);return a}return a.qr&&b in a.qr?a.qr[b]:null},TN=function(a,b,c,d,e,g){QN(a);SN(a);var h=a.pb();g=$.L(g,$.K)?g:new $.K(0,0,
0,0);var k=a.X[c-1]+1||0;c=a.X[Math.min(c+e,a.g)-1];g.width=c-k;g.left=h.left+k;k=a.ba[b-1]+1||0;c=a.ba[Math.min(b+d,a.j)-1];g.height=c-k;g.top=h.top+k;return g},RN=function(a,b,c,d,e,g,h,k,l){var m,p=!1,q=0,r=[],t=[],u=[],v=0;e=$.P(e,k);g=$.P(g,k);h=$.P(h,k);var x=!1;for(m=0;m<a;m++){var w=c?$.P(c[m],k):window.NaN;var z=d?$.P(d[m],k):window.NaN;var A=b[m];var E=w,D=z;A=$.P(A,k);E=$.P(E,k);D=$.P(D,k);(0,window.isNaN)(A)&&(A=e);(0,window.isNaN)(E)&&(E=g);(0,window.isNaN)(D)&&(D=h);(0,window.isNaN)(E)||
(A=Math.max(A,E));(0,window.isNaN)(D)||(A=Math.min(A,D));(0,window.isNaN)(A)?(v++,(0,window.isNaN)(w)?(0,window.isNaN)(g)||(t[m]=g,x=!0):(t[m]=w,x=!0),(0,window.isNaN)(z)?(0,window.isNaN)(h)||(u[m]=h,x=!0):(u[m]=z,x=!0)):(q+=A,r[m]=A)}if(x&&0<v){var R=[];c=v*v;do for(d=!1,b=Math.max(3*v,k-q)/v,m=0;m<a;m++)if(!(m in r))if(m in R){if(R[m]==t[m]&&t[m]<b){q-=t[m];v++;delete R[m];d=!0;break}if(R[m]==u[m]&&u[m]>b){q-=u[m];v++;delete R[m];d=!0;break}}else{if(m in t&&t[m]>b){q+=R[m]=t[m];v--;d=!0;break}if(m in
u&&u[m]<b){q+=R[m]=u[m];v--;d=!0;break}}while(d&&0<v&&c--)}t=0;u=[];b=Math.max(3*v,k-q)/v;for(m=0;m<a;m++)m in r?A=r[m]:R&&m in R?A=R[m]:A=b,t+=A,k=Math.round(t)-1,u[m]=k,k!=l[m]&&(p=!0);return p?u:null},PN=function(a,b,c){return a.Y.length?a.Y.pop().reset(b,c):new LN(a,b,c)},bO=function(a,b,c,d,e,g){return c.D&&c.D[b]||d&&d.D&&d.D[b]||e&&e.D&&e.D[b]||a.G&&a.G[b]||g},cO=function(a,b){ON.call(this,a,b)};$.Xu.prototype.ft=$.ca(7,function(){return!0});$.dv.prototype.ft=$.ca(6,function(){return!1});
var HN=["topBorder","rightBorder","bottomBorder","leftBorder"],GN=["cellTopBorder","cellRightBorder","cellBottomBorder","cellLeftBorder"];IN.prototype.top=function(a,b,c,d,e){null!=a&&(a=$.Zb.apply(null,arguments));return this.ea.Va(this.qf[0],a,256)};IN.prototype.right=function(a,b,c,d,e){null!=a&&(a=$.Zb.apply(null,arguments));return this.ea.Va(this.qf[1],a,256)};IN.prototype.bottom=function(a,b,c,d,e){null!=a&&(a=$.Zb.apply(null,arguments));return this.ea.Va(this.qf[2],a,256)};
IN.prototype.left=function(a,b,c,d,e){null!=a&&(a=$.Zb.apply(null,arguments));return this.ea.Va(this.qf[3],a,256)};var dO=IN.prototype;dO.top=dO.top;dO.right=dO.right;dO.bottom=dO.bottom;dO.left=dO.left;var eO=["topPadding","rightPadding","bottomPadding","leftPadding"];JN.prototype.top=function(a){$.n(a)&&(a=$.ln(a)||0);return this.ea.Va(eO[0],a,1024)};JN.prototype.right=function(a){$.n(a)&&(a=$.ln(a)||0);return this.ea.Va(eO[1],a,1024)};JN.prototype.bottom=function(a){$.n(a)&&(a=$.ln(a)||0);return this.ea.Va(eO[2],a,1024)};JN.prototype.left=function(a){$.n(a)&&(a=$.ln(a)||0);return this.ea.Va(eO[3],a,1024)};var fO=JN.prototype;fO.top=fO.top;fO.right=fO.right;fO.bottom=fO.bottom;fO.left=fO.left;$.I(KN,$.qd);$.f=KN.prototype;$.f.Va=function(a,b,c,d){if($.n(a)){if($.n(b)){var e=!1;null===b?this.D&&this.D[a]&&(delete this.D[a],e=!0):(this.D||(this.D={}),this.D[a]!=b&&(this.D[a]=b,e=!0));e&&this.j.B(+c||1024,+d||1);return this}return this.D&&this.D[a]}return this.D||{}};$.f.fontSize=function(a){$.n(a)&&(a=$.ln(a));return this.Va("fontSize",a)};$.f.fontFamily=function(a){$.n(a)&&(a=String(a));return this.Va("fontFamily",a)};
$.f.T8=function(a){$.n(a)&&(a=String(a));return this.Va("fontColor",a)};$.f.V8=function(a){$.n(a)&&(a=$.hb(+a,0,1));return this.Va("fontOpacity",a)};$.f.U8=function(a){$.n(a)&&(a=$.dk(a));return this.Va("fontDecoration",a)};$.f.fontStyle=function(a){$.n(a)&&(a=$.ek(a));return this.Va("fontStyle",a)};$.f.fontVariant=function(a){$.n(a)&&(a=$.fk(a));return this.Va("fontVariant",a)};$.f.fontWeight=function(a){$.n(a)&&(a=$.ln(a));return this.Va("fontWeight",a)};
$.f.letterSpacing=function(a){$.n(a)&&(a=$.ln(a));return this.Va("letterSpacing",a)};$.f.W8=function(a){$.n(a)&&(a=$.gk(a));return this.Va("textDirection",a)};$.f.lineHeight=function(a){$.n(a)&&(a=$.ln(a));return this.Va("lineHeight",a)};$.f.textIndent=function(a){$.n(a)&&(a=(0,window.parseFloat)($.ln(a)));return this.Va("textIndent",a)};$.f.vAlign=function(a){$.n(a)&&(a=$.ck(a));return this.Va("vAlign",a)};$.f.Cl=function(a){$.n(a)&&(a=$.bk(a));return this.Va("hAlign",a)};
$.f.wordWrap=function(a){return this.Va("wordWrap",a)};$.f.Gt=function(a){return this.Va("wordBreak",a)};$.f.textOverflow=function(a){$.n(a)&&(a=String(a));return this.Va("textOverflow",a)};$.f.mm=function(a){$.n(a)&&(a=!!a);return this.Va("selectable",a)};$.f.sd=function(a){$.n(a)&&(a=!!a);return this.Va("disablePointerEvents",a)};$.f.X8=function(a){$.n(a)&&(a=!!a);return this.Va("useHtml",a)};
$.f.S8=function(a,b,c,d,e){if($.n(a)){null===a||(a=$.Zb.apply(null,arguments));$.V(this.j);this.Va("border",a,256);for(var g=0;4>g;g++)this.Va(HN[g],null,256);this.j.ga(!0);return this}return this.Y||(this.Y=new IN(this,!1))};
$.f.dT=function(a,b,c,d){if($.n(a)){var e,g,h;if($.C(a)){var k=a;a=k[0];b=k[1];c=k[2];d=k[3];k=k.length}else k=arguments.length;if(k)$.F(a)?(e=$.ln(a.top)||0,g=$.ln(a.right)||0,h=$.ln(a.bottom)||0,l=$.ln(a.left)||0):1==k?l=h=g=e=$.ln(a)||0:2==k?(h=e=$.ln(a)||0,l=g=$.ln(b)||0):3==k?(e=$.ln(a)||0,l=g=$.ln(b)||0,h=$.ln(c)||0):4<=k&&(e=$.ln(a)||0,g=$.ln(b)||0,h=$.ln(c)||0,l=$.ln(d)||0);else var l=h=g=e=0;$.V(this.j);this.Va(eO[0],e,1024);this.Va(eO[1],g,1024);this.Va(eO[2],h,1024);this.Va(eO[3],l,1024);
this.j.ga(!0);return this}return this.X||(this.X=new JN(this))};var gO=KN.prototype;gO.fontSize=gO.fontSize;gO.fontFamily=gO.fontFamily;gO.fontColor=gO.T8;gO.fontOpacity=gO.V8;gO.fontDecoration=gO.U8;gO.fontStyle=gO.fontStyle;gO.fontVariant=gO.fontVariant;gO.fontWeight=gO.fontWeight;gO.letterSpacing=gO.letterSpacing;gO.textDirection=gO.W8;gO.lineHeight=gO.lineHeight;gO.textIndent=gO.textIndent;gO.vAlign=gO.vAlign;gO.hAlign=gO.Cl;gO.wordWrap=gO.wordWrap;gO.wordBreak=gO.Gt;gO.textOverflow=gO.textOverflow;
gO.selectable=gO.mm;gO.disablePointerEvents=gO.sd;gO.useHtml=gO.X8;gO.border=gO.S8;$.I(LN,KN);$.f=LN.prototype;$.f.reset=function(a,b){($.B(this.gc)||$.y(this.gc))&&$.M(this.qh);this.K=this.R=1;this.g=a;this.G=b;this.qh=this.gc=null;this.b=window.NaN;delete this.D;return this};
$.f.content=function(a){if($.n(a)){if(this.gc!=a){this.gc=a;this.qh&&this.j.fE(this.qh);if($.B(a)||$.y(a)){var b=this.j;b.lh||(b.lh=new $.ts,b.lh.P($.kl("standalones.labelsFactory")),b.lh.anchor("center"),b.lh.position("center"));this.qh=b.lh.add({value:String(a)},{value:{x:0,y:0}})}else $.L(a,$.cg)?(this.qh=$.sj(),this.qh.fb(a)):this.qh=a;this.j.B(1024,1)}return this}return this.gc};$.f.bw=function(a){return $.n(a)?(a=$.on(a,this.K),a!=this.K&&(this.K=a,this.j.B(128,1)),this):this.K};
$.f.cw=function(a){return $.n(a)?(a=$.on(a,this.R),a!=this.R&&(this.R=a,this.j.B(128,1)),this):this.R};$.f.c9=function(){return this.g};$.f.Z8=function(){return this.G};$.f.io=function(){return this.j.io(this.g)};$.f.Y8=function(){return this.j.vW(this.G)};$.f.hb=function(){return TN(this.j,this.g,this.G,this.R,this.K)};$.f.fill=function(a,b,c,d,e,g,h){null!=a&&(a=$.Xb.apply(null,arguments));return this.Va("fill",a,512)};$.f.padding=function(a,b,c,d){return this.dT.apply(this,arguments)};
$.f.W=function(){($.B(this.gc)||$.y(this.gc))&&$.M(this.qh);LN.F.W.call(this)};var hO=LN.prototype;hO.content=hO.content;hO.rowSpan=hO.cw;hO.colSpan=hO.bw;hO.padding=hO.padding;hO.getBounds=hO.hb;hO.getRowNum=hO.c9;hO.getColNum=hO.Z8;hO.getRow=hO.io;hO.getCol=hO.Y8;hO.fill=hO.fill;$.I(MN,KN);$.f=MN.prototype;$.f.g9=function(){return this.Yd};$.f.f9=function(a){return this.j.gy(a,this.Yd)};$.f.width=function(a){return $.n(a)?(ZN(this.j,this.Yd,a),this):ZN(this.j,this.Yd)};$.f.minWidth=function(a){return $.n(a)?($N(this.j,this.Yd,a),this):$N(this.j,this.Yd)};$.f.maxWidth=function(a){return $.n(a)?(aO(this.j,this.Yd,a),this):aO(this.j,this.Yd)};$.f.xW=function(a,b,c,d,e,g,h){null!=a&&(a=$.Xb.apply(null,arguments));return this.Va("fill",a,512)};
$.f.d9=function(a,b,c,d,e){if($.n(a)){null===a||(a=$.Zb.apply(null,arguments));$.V(this.j);this.Va("cellBorder",a,256);for(var g=0;4>g;g++)this.Va(GN[g],null,256);this.j.ga(!0);return this}return this.b||(this.b=new IN(this,!0))};$.f.e9=function(a,b,c,d){return this.dT.apply(this,arguments)};var iO=MN.prototype;iO.width=iO.width;iO.maxWidth=iO.maxWidth;iO.minWidth=iO.minWidth;iO.getCell=iO.f9;iO.getColNum=iO.g9;iO.cellFill=iO.xW;iO.cellBorder=iO.d9;iO.cellPadding=iO.e9;$.I(NN,KN);$.f=NN.prototype;$.f.k9=function(){return this.Yd};$.f.j9=function(a){return this.j.gy(this.Yd,a)};$.f.height=function(a){return $.n(a)?(this.j.S0(this.Yd,a),this):this.j.S0(this.Yd)};$.f.minHeight=function(a){return $.n(a)?(XN(this.j,this.Yd,a),this):XN(this.j,this.Yd)};$.f.maxHeight=function(a){return $.n(a)?(YN(this.j,this.Yd,a),this):YN(this.j,this.Yd)};$.f.yW=function(a,b,c,d,e,g,h){null!=a&&(a=$.Xb.apply(null,arguments));return this.Va("fill",a,512)};
$.f.h9=function(a,b,c,d,e){if($.n(a)){null===a||(a=$.Zb.apply(null,arguments));$.V(this.j);this.Va("cellBorder",a,256);for(var g=0;4>g;g++)this.Va(GN[g],null,256);this.j.ga(!0);return this}return this.b||(this.b=new IN(this,!0))};$.f.i9=function(a,b,c,d){return this.dT.apply(this,arguments)};var jO=NN.prototype;jO.height=jO.height;jO.maxHeight=jO.maxHeight;jO.minHeight=jO.minHeight;jO.getCell=jO.j9;jO.getRowNum=jO.k9;jO.cellFill=jO.yW;jO.cellBorder=jO.h9;jO.cellPadding=jO.i9;$.I(ON,$.es);$.f=ON.prototype;$.f.xa=$.es.prototype.xa;$.f.ta=$.es.prototype.ta|4032;$.f.lh=null;$.f.Hb=null;$.f.MD=null;$.f.Xt=null;$.f.ru=null;$.f.Sm=null;$.f.UA=null;$.f.tW=null;$.f.uW=null;$.f.wW=null;$.f.Vm=null;$.f.tm=null;$.f.es=null;$.f.ds=null;$.f.rr=null;$.f.qr=null;$.f.zI=null;$.f.xJ=null;$.f.wJ=null;$.f.tJ=null;$.f.sJ=null;$.f.rJ=null;$.f.ET=function(a){return $.n(a)?(a=$.on(a,this.j),this.j!=a&&((0,window.isNaN)(this.D)&&(this.D=this.g),this.j=a,this.B(2176,1)),this):this.j};
$.f.uP=function(a){return $.n(a)?(a=$.on(a,this.g),this.g!=a&&((0,window.isNaN)(this.D)&&(this.D=this.g),this.g=a,this.B(2176,1)),this):this.g};$.f.gy=function(a,b){QN(this);a=$.on(a,window.NaN,!0);b=$.on(b,window.NaN,!0);return this.b[a*this.g+b]||null};$.f.io=function(a){QN(this);a=$.on(a,window.NaN,!0);if((0,window.isNaN)(a)||a>=this.j)return null;this.Vm||(this.Vm=[]);a in this.Vm||(this.Vm[a]=new NN(this,a));return this.Vm[a]};
$.f.vW=function(a){QN(this);a=$.on(a,window.NaN,!0);if((0,window.isNaN)(a)||a>=this.g)return null;this.tm||(this.tm=[]);a in this.tm||(this.tm[a]=new MN(this,a));return this.tm[a]};$.f.Zfa=function(a){return $.n(a)?(this.zI!=a&&(this.zI=a,this.B(64,1)),this):this.zI};$.f.aga=function(a){return $.n(a)?(this.xJ!=a&&(this.xJ=a,this.B(64,1)),this):this.xJ};$.f.$fa=function(a){return $.n(a)?(this.wJ!=a&&(this.wJ=a,this.B(64,1)),this):this.wJ};
$.f.k$=function(a){return $.n(a)?(this.tJ!=a&&(this.tJ=a,this.B(64,1)),this):this.tJ};$.f.j$=function(a){return $.n(a)?(this.sJ!=a&&(this.sJ=a,this.B(64,1)),this):this.sJ};$.f.i$=function(a){return $.n(a)?(this.rJ!=a&&(this.rJ=a,this.B(64,1)),this):this.rJ};$.f.J8=function(a,b,c,d,e){if($.n(a)){null===a||(a=$.Zb.apply(null,arguments));$.V(this);this.Va("border",a,256);for(var g=0;4>g;g++)this.Va(HN[g],null,256);this.ga(!0);return this}return this.tW||(this.tW=new IN(this,!1))};
$.f.q$=function(a,b){var c;if($.n(a)){var d=!$.C(a);var e=0;if(!d){var g=a.length;for(c=0;c<g;c++){var h=a[c];if($.C(h))h.length>e&&(e=h.length);else{d=!0;break}}}if(!d&&g&&e){$.V(this);this.ET(g);this.uP(e);if(b)for(c=0;c<g;c++)for(d=0;d<e;d++){var k=this.gy(c,d);k.cw(1);k.bw(1)}for(c=0;c<g;c++)for(h=a[c],d=0;d<e;d++){k=this.gy(c,d);var l=h[d];k.content($.n(l)?l:null)}this.ga(!0)}else $.jk(3);return this}e=[];for(c=0;c<this.j;c++){h=[];for(d=0;d<this.g;d++)h.push(this.gy(c,d).content());e.push(h)}return e};
$.f.aa=function(){if(!this.xc())return this;this.Hb||(this.Hb=$.sj(),this.MD=this.Hb.He());var a=this.Hb.Ea(),b=a&&!a.Se();b&&a.suspend();this.O(4)&&(this.B(64),($.hn(this.left())||$.hn(this.top()))&&this.B(1792),this.N(4));this.lh&&$.V(this.lh);QN(this);SN(this);if(this.O(128)){var c,d;for(c=0;c<this.b.length;c++)this.b[c].b=window.NaN;for(var e=0;e<this.j;e++)for(var g=0;g<this.g;g++){var h=e*this.g+g,k=this.b[h];if((0,window.isNaN)(k.b)&&(1<k.bw()||1<k.cw())){for(c=Math.min(this.j,e+k.cw());c-- >
e;)for(d=Math.min(this.g,g+k.bw());d-- >g;)this.b[c*this.g+d].b=h;k.b=window.NaN}}this.N(128);this.B(1792)}if(this.O(512)){this.Sm||(this.Sm=[]);if(this.ru)for(var l in this.ru)c=this.ru[l],c.clear(),c.parent(null),this.Sm.push(c),delete this.ru[l];else this.ru={};for(l=0;l<this.j;l++)for(c=0;c<this.g;c++)if(g=this.b[l*this.g+c],(0,window.isNaN)(g.b)){var m=TN(this,l,c,g.cw(),g.bw(),m);d=l;e=c;d=(g=g.fill())?g:(g=this.Vm&&this.Vm[d]&&this.Vm[d].yW())?g:(g=this.tm&&this.tm[e]&&this.tm[e].xW())?g:(g=
d%2?this.V0():this.R0())?g:this.Va("fill");d&&(e=$.Tk(d),e in this.ru?d=this.ru[e]:(g=this.Sm.length?this.Sm.pop():$.uj(),this.Hb.tf(g,0),g.fill(d),g.stroke(null),d=this.ru[e]=g),e=m.ob(),g=m.Xa()+1,h=m.Ob(),k=m.Ka()+1,d.moveTo(e,h),d.lineTo(g,h),d.lineTo(g,k),d.lineTo(e,k),d.close())}this.N(512)}if(this.O(256)){this.Sm||(this.Sm=[]);if(this.Xt)for(var p in this.Xt)m=this.Xt[p],m.clear(),m.parent(null),this.Sm.push(m),delete this.Xt[p];else this.Xt={};for(m=0;m<this.g;m++)l=this.b[m],(0,window.isNaN)(l.b)&&
UN(this,0,m,1,l.bw(),VN(this,void 0,l),0);for(p=0;p<this.j;p++)l=this.b[p*this.g],(0,window.isNaN)(l.b)&&UN(this,p,0,l.cw(),1,WN(this,void 0,l),3);for(p=0;p<this.j;p++)for(m=0;m<this.g;m++)d=p*this.g+m,l=this.b[d],(c=this.b[d+this.g])?(0,window.isNaN)(l.b)?(0,window.isNaN)(c.b)||(c.b==d?l=c=void 0:c=this.b[c.b]):(0,window.isNaN)(c.b)?l=this.b[l.b]:l.b==c.b?l=c=void 0:(l=this.b[l.b],c=this.b[c.b]):(0,window.isNaN)(l.b)||(l=this.b[l.b]),UN(this,p,m,1,1,VN(this,l,c),2),d=p*this.g+m,l=this.b[d],(c=m+
1==this.g?void 0:this.b[d+1])?(0,window.isNaN)(l.b)?(0,window.isNaN)(c.b)||(c.b==d?l=c=void 0:c=this.b[c.b]):(0,window.isNaN)(c.b)?l=this.b[l.b]:l.b==c.b?l=c=void 0:(l=this.b[l.b],c=this.b[c.b]):(0,window.isNaN)(l.b)||(l=this.b[l.b]),UN(this,p,m,1,1,WN(this,l,c),1);this.N(256)}if(this.O(1024)){if(this.UA)for(;this.UA.length;){var q=this.UA.pop();$.L(q,$.cg)?q.remove():($.V(q),$.L(q,$.Hs)?(g=q,$.Ms(g)&&$.Ms(g).clear(g.na())):$.L(q,$.mv)?(d=q,$.nv(d)&&$.nv(d).clear(d.na())):$.L(q,$.X)&&(q.ft&&q.ft()&&
(d=q,d.WD(d.$_)),q.U(null),q.remove()),$.Bp(q,this.GR),q.ga(!1))}p=this.j*this.g;for(m=0;m<p;m++)d=this.b[m],!(0,window.isNaN)(d.b)&&(q=d.qh)&&($.L(q,$.Cg)?(q.Ki(),$.M(q)):($.V(q),$.Bp(q,this.GR),$.L(q,$.Hs)||$.L(q,$.mv)?q.enabled(!1):q.ft&&q.ft()&&(d=q,d.WD(d.$_)),q.U(null),q.remove(),q.ga(!1)));p=new $.os;$.V(p);for(m=0;m<this.j;m++)for(l=0;l<this.g;l++)if(d=this.b[m*this.g+l],q=d.qh,c=$.L(q,$.cg),q){e=this.Vm&&this.Vm[m];h=this.tm&&this.tm[l];c||$.V(q);if((0,window.isNaN)(d.b)){var r=TN(this,m,
l,d.cw(),d.bw(),r);p.top(this.qK("topPadding",d,e,h,this));p.right(this.qK("rightPadding",d,e,h,this));p.bottom(this.qK("bottomPadding",d,e,h,this));p.left(this.qK("leftPadding",d,e,h,this));r=p.jj(r);if(c){q.parent(this.MD);g=q.Yc(0);var t=bO(this,"hAlign",d,e,h,"start");k=bO(this,"vAlign",d,e,h,"top");"start"==t?t="rtl"==bO(this,"textDirection",d,e,h,"rtl")?"right":"left":"end"==t&&(t="rtl"==bO(this,"textDirection",d,e,h,"rtl")?"left":"right");switch(t){case "right":d=r.left+r.width-g.JQ();break;
case "center":d=r.left+(r.width-g.JQ())/2;break;default:d=r.left}switch(k){case "bottom":e=r.top+r.height-g.IQ();break;case "middle":e=r.top+(r.height-g.IQ())/2;break;default:e=r.top}g.setPosition(d,e);q.clip(r)}else{q.U(this.MD);if($.L(q,$.Hs))if(g=q,g.Bc({value:{x:r.left,y:r.top}}),$.Ms(g)==this.lh){g.anchor("left-top");g.width(r.width);g.height(r.height);(q=h&&h.D)&&g.P(q);(q=e&&e.D)&&g.P(q);(q=d.D)&&g.P(q);g.ga(!1);continue}else e=g.I("position")||$.Ns(g)&&$.Ns(g).I("position")||$.Ms(g)&&$.Ms(g).I("position"),
e={value:$.pn(r,e)},g.Bc(e),g.aa();else $.L(q,$.mv)?(d=q,e=d.position()||$.wv(d)&&$.wv(d).position()||$.nv(d)&&$.nv(d).position(),e={value:$.pn(r,e)},d.Bc(e),d.aa()):$.L(q,$.X)&&(q.ft&&q.ft()&&(d=q,d.$_=d.WD(),d.WD(!1)),d=q,d.oa(r),d.aa&&d.aa());$.U(q,this.GR)}}c||q.ga(!1)}p.ga(!1);this.lh&&($.V(this.lh),this.lh.P(this.G),this.lh.U(this.MD),this.lh.oa(this.pb()),this.lh.aa(),this.lh.ga(!1));this.N(1024)}this.lh&&this.lh.ga(!1);this.O(8)&&(this.Hb.zIndex(this.zIndex()),this.N(8));this.O(2)&&(this.Hb.parent(this.U()),
this.N(2));b&&a.resume();return this};$.f.remove=function(){this.Hb&&this.Hb.parent(null)};$.f.fontSize=function(a){$.n(a)&&(a=$.ln(a));return this.Va("fontSize",a)};$.f.fontFamily=function(a){$.n(a)&&(a=String(a));return this.Va("fontFamily",a)};$.f.N8=function(a){$.n(a)&&(a=String(a));return this.Va("fontColor",a)};$.f.P8=function(a){$.n(a)&&(a=$.hb(+a,0,1));return this.Va("fontOpacity",a)};$.f.O8=function(a){$.n(a)&&(a=$.dk(a));return this.Va("fontDecoration",a)};
$.f.fontStyle=function(a){$.n(a)&&(a=$.ek(a));return this.Va("fontStyle",a)};$.f.fontVariant=function(a){$.n(a)&&(a=$.fk(a));return this.Va("fontVariant",a)};$.f.fontWeight=function(a){$.n(a)&&(a=$.ln(a));return this.Va("fontWeight",a)};$.f.letterSpacing=function(a){$.n(a)&&(a=$.ln(a));return this.Va("letterSpacing",a)};$.f.Q8=function(a){$.n(a)&&(a=$.gk(a));return this.Va("textDirection",a)};$.f.lineHeight=function(a){$.n(a)&&(a=$.ln(a));return this.Va("lineHeight",a)};
$.f.textIndent=function(a){$.n(a)&&(a=(0,window.parseFloat)($.ln(a)));return this.Va("textIndent",a)};$.f.vAlign=function(a){$.n(a)&&(a=$.ck(a));return this.Va("vAlign",a)};$.f.Cl=function(a){$.n(a)&&(a=$.bk(a));return this.Va("hAlign",a)};$.f.Gt=function(a){return this.Va("wordBreak",a)};$.f.wordWrap=function(a){return this.Va("wordWrap",a)};$.f.textOverflow=function(a){$.n(a)&&(a=String(a));return this.Va("textOverflow",a)};$.f.mm=function(a){$.n(a)&&(a=!!a);return this.Va("selectable",a)};
$.f.sd=function(a){$.n(a)&&(a=!!a);return this.Va("disablePointerEvents",a)};$.f.R8=function(a){$.n(a)&&(a=!!a);return this.Va("useHtml",a)};$.f.L8=function(a,b,c,d,e,g,h){null!=a&&(a=$.Xb.apply(null,arguments));return this.Va("fill",a,512)};$.f.V0=function(a,b,c,d,e,g,h){null!=a&&(a=$.Xb.apply(null,arguments));return this.Va("rowOddFill",a,512)};$.f.R0=function(a,b,c,d,e,g,h){null!=a&&(a=$.Xb.apply(null,arguments));return this.Va("rowEvenFill",a,512)};
$.f.K8=function(a,b,c,d,e){if($.n(a)){a=$.Zb.apply(null,arguments);$.V(this);this.Va("cellBorder",a,256);for(var g=0;4>g;g++)this.Va(GN[g],null,256);this.ga(!0);return this}return this.uW||(this.uW=new IN(this,!0))};
$.f.M8=function(a,b,c,d){if($.n(a)){var e,g,h;if($.C(a)){var k=a;a=k[0];b=k[1];c=k[2];d=k[3];k=k.length}else k=arguments.length;if(k)$.F(a)?(e=$.ln(a.top)||0,g=$.ln(a.right)||0,h=$.ln(a.bottom)||0,l=$.ln(a.left)||0):1==k?l=h=g=e=$.ln(a)||0:2==k?(h=e=$.ln(a)||0,l=g=$.ln(b)||0):3==k?(e=$.ln(a)||0,l=g=$.ln(b)||0,h=$.ln(c)||0):4<=k&&(e=$.ln(a)||0,g=$.ln(b)||0,h=$.ln(c)||0,l=$.ln(d)||0);else var l=h=g=e=0;$.V(this);this.Va(eO[0],e,1024);this.Va(eO[1],g,1024);this.Va(eO[2],h,1024);this.Va(eO[3],l,1024);
this.ga(!0);return this}return this.wW||(this.wW=new JN(this))};$.f.GR=function(a){$.G(a.target.aa)&&a.target.aa()};$.f.Va=function(a,b,c,d){if($.n(a)){if($.n(b)){var e=!1;null===b?this.G[a]&&(delete this.G[a],e=!0):this.G[a]!=b&&(this.G[a]=b,e=!0);e&&this.B(+c||1024,+d||1);return this}return this.G&&this.G[a]}return this.G||{}};$.f.S0=function(a,b){return $.n(b)?(this.R[a]!=b&&(null===b?delete this.R[a]:this.R[a]=b,this.B(64,1)),this):a in this.R?this.R[a]:null};
$.f.fE=function(a){this.UA=this.UA||[];this.UA.push(a)};$.f.qK=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d&&(d=d.Va(a),null!=d))return d}return 0};$.f.W=function(){$.rd(this.b,this.Y,this.Vm,this.tm,this.ru,this.Xt,this.Sm);$.M(this.lh);$.M(this.Hb);$.M(this.MD);delete this.G;ON.F.W.call(this)};
$.f.pl=function(a){var b=$.F(a)?a:{};a=b.rowsSeparator||"\n";$.Ln(a);var c=b.columnsSeparator||",";$.Ln(c);b=b.ignoreFirstRow||!1;var d=this.ET(),e=this.uP(),g,h,k,l=Array(d);for(g=0;g<d;g++)l[g]=Array(e);var m={},p=[];for(g=0;g<d;g++){for(h=0;h<e;h++)if(!(g*e+h in m)){var q=this.gy(g,h);var r=q.content();r=$.y(r)||$.B(r)||$.da(r)?String(r):"";-1!=r.indexOf(c)?(r=r.split('"').join('""'),r='"'+r+'"'):-1!=r.indexOf(a)&&(r=r.split('"').join('""'),r='"'+r+'"');l[g][h]=r;r=q.bw();var t=q.cw();if(2!=t+
r)for(q=0;q<t;q++)for(k=0;k<r;k++)if(0!=q||0!=k)l[g+q][h+k]="",m[(g+q)*e+(h+k)]=!0}p.push(l[g].join(c))}b&&p.shift();return p.join(a)};$.f.FC=function(a){var b=$.mk.anychart.exports;if(b){var c=this.pl({rowsSeparator:"\n",columnsSeparator:",",ignoreFirstRow:!1});b.saveAsXlsx(c,a)}else $.jk(4,null,["Exporting"])};$.f.EC=function(a,b){var c=$.mk.anychart.exports;if(c){var d=this.pl(a);c.saveAsCsv(d,b)}else $.jk(4,null,["Exporting"])};$.I(cO,ON);$.fs(cO,ON);var kO=ON.prototype;kO.rowsCount=kO.ET;
kO.colsCount=kO.uP;kO.getCell=kO.gy;kO.getRow=kO.io;kO.getCol=kO.vW;kO.rowsHeight=kO.Zfa;kO.rowsMinHeight=kO.aga;kO.rowsMaxHeight=kO.$fa;kO.colsWidth=kO.k$;kO.colsMinWidth=kO.j$;kO.colsMaxWidth=kO.i$;kO.border=kO.J8;kO.contents=kO.q$;kO.draw=kO.aa;kO.fontSize=kO.fontSize;kO.fontFamily=kO.fontFamily;kO.fontColor=kO.N8;kO.fontOpacity=kO.P8;kO.fontDecoration=kO.O8;kO.fontStyle=kO.fontStyle;kO.fontVariant=kO.fontVariant;kO.fontWeight=kO.fontWeight;kO.letterSpacing=kO.letterSpacing;kO.textDirection=kO.Q8;
kO.lineHeight=kO.lineHeight;kO.textIndent=kO.textIndent;kO.vAlign=kO.vAlign;kO.hAlign=kO.Cl;kO.wordBreak=kO.Gt;kO.wordWrap=kO.wordWrap;kO.textOverflow=kO.textOverflow;kO.selectable=kO.mm;kO.disablePointerEvents=kO.sd;kO.useHtml=kO.R8;kO.cellFill=kO.L8;kO.rowEvenFill=kO.R0;kO.rowOddFill=kO.V0;kO.cellBorder=kO.K8;kO.cellPadding=kO.M8;kO.saveAsPng=kO.wv;kO.saveAsJpg=kO.uv;kO.saveAsPdf=kO.vv;kO.saveAsSvg=kO.xv;kO.shareAsPng=kO.zt;kO.shareAsJpg=kO.Xz;kO.shareAsPdf=kO.Yz;kO.shareAsSvg=kO.Zz;
kO.getPngBase64String=kO.Oy;kO.getJpgBase64String=kO.My;kO.getSvgBase64String=kO.Qy;kO.getPdfBase64String=kO.Ny;kO.toSvg=kO.aq;kO.parentBounds=kO.oa;kO.container=kO.U;kO.toCsv=kO.pl;kO.saveAsCsv=kO.EC;kO.saveAsXlsx=kO.FC;kO=cO.prototype;kO.draw=kO.aa;$.H("anychart.standalones.table",function(a,b){return new cO(a,b)});}).call(this,$)}
