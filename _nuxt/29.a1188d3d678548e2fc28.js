(window.webpackJsonp=window.webpackJsonp||[]).push([[29,30],{286:function(e,o,r){"use strict";r.r(o),r.d(o,"makeResponsive",(function(){return T}));var T=function(e){return function(o,r,T,t,c,h){var v,n,l=1;function _(){var _,S,m,w,f=e.properties.width,F=e.properties.height,k=null===(_=c[1])||void 0===_||null===(S=_.offsetParent)||void 0===S?void 0:S.offsetWidth,P=null===(m=c[1])||void 0===m||null===(w=m.offsetParent)||void 0===w?void 0:w.offsetHeight,d=window.devicePixelRatio||1,B=k/f,y=P/F,x=1;o&&("width"==r&&v==k||"height"==r&&n==P?x=l:T?1==t?x=Math.min(B,y):2==t&&(x=Math.max(B,y)):(k<f||P<F)&&(x=Math.min(B,y))),c[0].width=f*d*x,c[0].height=F*d*x,c.forEach((function(e){e.style.width=f*x+"px",e.style.height=F*x+"px"})),h.scaleX=d*x,h.scaleY=d*x,v=k,n=P,l=x,h.tickOnUpdate=!1,h.update(),h.tickOnUpdate=!0}window.addEventListener("resize",_),_()}}},458:function(e,o,r){"use strict";r.r(o);var p,T=r(286),t={},c=createjs,h={},v={},img={};function n(){var e=this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop));return e.gotoAndStop(this.currentFrame),e.paused=this.paused,e.framerate=this.framerate,e}function l(symbol,e,o){var r=c.extend(symbol,c.MovieClip);return r.clone=n,r.nominalBounds=e,r.frameBounds=o,r}h.ssMetadata=[],(h.текст=function(e,o,r){this.initialize(e,o,r,{}),this.shape=new c.Shape,this.shape.graphics.beginFill("#56506B").beginStroke().moveTo(-8,2).lineTo(-8,-2).lineTo(8,-2).lineTo(8,2).closePath(),this.shape.setTransform(-7.95,2.05),this.shape_1=new c.Shape,this.shape_1.graphics.beginFill("#56506B").beginStroke().moveTo(-16,2).lineTo(-16,-2).lineTo(16,-2).lineTo(16,2).closePath(),this.shape_1.setTransform(.05,-5.95),this.shape_2=new c.Shape,this.shape_2.graphics.beginFill("#56506B").beginStroke().moveTo(-16,2).lineTo(-16,-2).lineTo(16,-2).lineTo(16,2).closePath(),this.shape_2.setTransform(.05,-13.95),this.shape_3=new c.Shape,this.shape_3.graphics.beginFill("#56506B").beginStroke().moveTo(-25.8,-20.7).curveTo(-25.8,-22.8,-24.3,-24.3).curveTo(-22.8,-25.8,-20.7,-25.8).lineTo(20.7,-25.8).curveTo(22.8,-25.8,24.3,-24.3).curveTo(25.8,-22.8,25.8,-20.7).lineTo(25.8,10.3).curveTo(25.8,12.5,24.3,14).curveTo(22.8,15.5,20.7,15.5).lineTo(-15.5,15.5).lineTo(-25.8,25.8).closePath().moveTo(-20.7,15.5).lineTo(-15.5,10.3).lineTo(20.7,10.3).lineTo(20.7,-20.7).lineTo(-20.7,-20.7).closePath(),this.shape_3.setTransform(.025,.025),this.timeline.addTween(c.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1))}).prototype=l(h.текст,new c.Rectangle(-25.8,-25.8,51.7,51.7),null),(h.смайлик=function(e,o,r){this.initialize(e,o,r,{}),this.shape=new c.Shape,this.shape.graphics.beginFill("#56506B").beginStroke().moveTo(-18,18).curveTo(-25.5,10.6,-25.5,0).curveTo(-25.5,-10.6,-18,-18).curveTo(-10.6,-25.5,-0,-25.5).curveTo(10.6,-25.5,18,-18).curveTo(25.5,-10.5,25.5,0).curveTo(25.5,10.6,18,18).curveTo(10.5,25.5,-0,25.5).curveTo(-10.6,25.5,-18,18).closePath().moveTo(-14.4,-14.4).curveTo(-20.4,-8.4,-20.4,0).curveTo(-20.4,8.5,-14.4,14.4).curveTo(-8.5,20.4,-0,20.4).curveTo(8.5,20.4,14.4,14.4).curveTo(20.4,8.5,20.4,0).curveTo(20.4,-8.4,14.4,-14.4).curveTo(8.5,-20.4,-0,-20.4).curveTo(-8.5,-20.4,-14.4,-14.4).closePath().moveTo(-8,11.5).curveTo(-11.5,9.1,-13.1,5.1).lineTo(13,5.1).curveTo(11.4,9.1,8,11.5).curveTo(4.4,14,-0,14).curveTo(-4.4,14,-8,11.5).closePath().moveTo(6.2,-3.7).curveTo(5.1,-4.8,5.1,-6.4).curveTo(5.1,-7.9,6.2,-9.1).curveTo(7.3,-10.2,8.9,-10.2).curveTo(10.5,-10.2,11.6,-9.1).curveTo(12.7,-7.9,12.8,-6.4).curveTo(12.7,-4.8,11.6,-3.7).curveTo(10.5,-2.5,8.9,-2.5).curveTo(7.3,-2.5,6.2,-3.7).closePath().moveTo(-11.6,-3.7).curveTo(-12.7,-4.8,-12.7,-6.4).curveTo(-12.7,-7.9,-11.6,-9.1).curveTo(-10.5,-10.2,-8.9,-10.2).curveTo(-7.4,-10.2,-6.2,-9.1).curveTo(-5.1,-7.9,-5.1,-6.4).curveTo(-5.1,-4.8,-6.2,-3.7).curveTo(-7.4,-2.5,-8.9,-2.5).curveTo(-10.5,-2.5,-11.6,-3.7).closePath(),this.shape.setTransform(0,.025),this.timeline.addTween(c.Tween.get(this.shape).wait(1))}).prototype=l(h.смайлик,new c.Rectangle(-25.5,-25.5,51,51.1),null),(h.коробка=function(e,o,r){this.initialize(e,o,r,{}),this.shape=new c.Shape,this.shape.graphics.beginFill("#56506B").beginStroke().moveTo(-.2,.2).lineTo(-.4,-.4).lineTo(-.3,-.5).lineTo(.3,-0).curveTo(.3,.1,.4,.1).curveTo(.4,.2,.4,.2).curveTo(.4,.3,.3,.3).curveTo(.3,.4,.2,.4).lineTo(0,.5).curveTo(-0,.5,-0,.4).curveTo(-.1,.4,-.1,.4).curveTo(-.1,.4,-.2,.3).curveTo(-.2,.3,-.2,.2).closePath(),this.shape.setTransform(-76.3806,43.4614),this.shape_1=new c.Shape,this.shape_1.graphics.beginFill("#56506B").beginStroke().moveTo(-.2,.2).lineTo(-.4,-.5).lineTo(-.3,-.5).lineTo(.2,-0).curveTo(.3,0,.3,.1).curveTo(.4,.1,.4,.1).curveTo(.4,.2,.4,.2).curveTo(.3,.3,.3,.3).curveTo(.3,.3,.2,.4).curveTo(.2,.4,.2,.4).curveTo(.2,.4,.1,.4).curveTo(.1,.4,.1,.4).curveTo(0,.4,-0,.4).curveTo(-.1,.4,-.1,.4).curveTo(-.1,.3,-.2,.3).curveTo(-.2,.3,-.2,.2).closePath(),this.shape_1.setTransform(-78.6806,40.5),this.shape_2=new c.Shape,this.shape_2.graphics.beginFill("#56506B").beginStroke().moveTo(-.2,.3).lineTo(-.4,-.3).lineTo(-.4,-.5).curveTo(.1,-.2,.3,.1).curveTo(.3,.1,.3,.2).curveTo(.4,.2,.4,.2).curveTo(.3,.3,.3,.3).curveTo(.3,.3,.2,.4).lineTo(0,.5).lineTo(-.2,.3).closePath(),this.shape_2.setTransform(-76.1929,40.5194),this.shape_3=new c.Shape,this.shape_3.graphics.beginFill("#56506B").beginStroke().moveTo(-.1,.3).lineTo(-.3,-.4).lineTo(-.2,-.5).lineTo(.3,.1).curveTo(.3,.1,.3,.2).curveTo(.4,.2,.4,.2).curveTo(.4,.2,.3,.3).curveTo(.3,.3,.3,.4).lineTo(0,.4).closePath(),this.shape_3.setTransform(-85.85,42.9),this.shape_4=new c.Shape,this.shape_4.graphics.beginFill("#56506B").beginStroke().moveTo(-.1,.3).lineTo(-.3,-.2).lineTo(-.4,-.5).curveTo(.1,-.2,.3,.1).curveTo(.3,.1,.3,.2).curveTo(.4,.2,.4,.2).curveTo(.3,.3,.3,.3).curveTo(.3,.3,.2,.4).lineTo(.1,.5).lineTo(-.1,.3).closePath(),this.shape_4.setTransform(-84.2929,41.8194),this.shape_5=new c.Shape,this.shape_5.graphics.beginFill("#56506B").beginStroke().moveTo(-.1,.3).lineTo(-.3,-.2).lineTo(-.3,-.5).lineTo(.3,0).curveTo(.3,.1,.3,.2).curveTo(.3,.2,.3,.3).curveTo(.3,.3,.3,.3).curveTo(.3,.4,.3,.4).lineTo(.1,.5).lineTo(-.1,.3).closePath(),this.shape_5.setTransform(-77.555,42.0694),this.shape_6=new c.Shape,this.shape_6.graphics.beginFill("#56506B").beginStroke().moveTo(-.1,.4).lineTo(-.3,.1).lineTo(-.3,-.4).lineTo(-.3,-.4).lineTo(.3,.1).curveTo(.3,.1,.3,.2).curveTo(.3,.2,.3,.3).curveTo(.3,.3,.3,.3).curveTo(.3,.4,.3,.4).lineTo(.1,.5).lineTo(-.1,.4).closePath(),this.shape_6.setTransform(-83.3167,40.55),this.shape_7=new c.Shape,this.shape_7.graphics.beginFill("#56506B").beginStroke().moveTo(-0,.4).curveTo(-.1,.4,-.1,.4).curveTo(-.1,.4,-.1,.4).curveTo(-.2,.3,-.2,.3).curveTo(-.2,.3,-.2,.3).lineTo(-.4,-.4).lineTo(-.3,-.4).lineTo(.3,.1).curveTo(.4,.1,.4,.1).curveTo(.4,.2,.4,.2).curveTo(.4,.3,.3,.3).curveTo(.3,.3,.3,.4).lineTo(.1,.4).lineTo(-0,.4).closePath(),this.shape_7.setTransform(-86.03,40.545),this.shape_8=new c.Shape,this.shape_8.graphics.beginFill("#56506B").beginStroke().moveTo(-.1,.4).lineTo(-.3,-.1).lineTo(-.3,-.5).curveTo(.1,-.2,.3,.1).curveTo(.3,.1,.3,.2).curveTo(.3,.2,.3,.3).curveTo(.3,.3,.3,.3).curveTo(.3,.4,.3,.4).lineTo(.1,.5).lineTo(-.1,.4).closePath(),this.shape_8.setTransform(-81.255,40.9821),this.shape_9=new c.Shape,this.shape_9.graphics.beginFill("#56506B").beginStroke().moveTo(-6.8,.9).lineTo(-6.8,-.9).lineTo(6.8,-.9).lineTo(6.8,.7).curveTo(6.8,.8,6.8,.8).curveTo(6.8,.8,6.7,.8).curveTo(6.7,.9,6.7,.9).curveTo(6.7,.9,6.6,.9).closePath(),this.shape_9.setTransform(-53.525,61.725),this.shape_10=new c.Shape,this.shape_10.graphics.beginFill("#56506B").beginStroke().moveTo(-.9,9.8).lineTo(-.9,-4.8).lineTo(-1.8,-4.8).curveTo(-1.8,-4.8,-1.8,-4.8).curveTo(-1.9,-4.8,-1.9,-4.8).curveTo(-1.9,-4.8,-1.9,-4.9).curveTo(-1.9,-4.9,-1.9,-4.9).lineTo(0,-9.8).lineTo(1.9,-4.8).lineTo(1,-4.8).curveTo(1,-4.8,.9,-4.8).curveTo(.9,-4.8,.9,-4.8).curveTo(.8,-4.8,.8,-4.7).curveTo(.8,-4.7,.8,-4.6).lineTo(.8,9.8).closePath(),this.shape_10.setTransform(-50.3,49.625),this.shape_11=new c.Shape,this.shape_11.graphics.beginFill("#56506B").beginStroke().moveTo(-.8,9.9).curveTo(-.8,9.9,-.9,9.8).curveTo(-.9,9.8,-.9,9.8).curveTo(-.9,9.8,-.9,9.8).curveTo(-1,9.7,-1,9.7).lineTo(-1,-4.8).lineTo(-1.9,-4.8).lineTo(0,-9.8).lineTo(1.9,-4.9).lineTo(.8,-4.9).lineTo(.8,9.9).closePath(),this.shape_11.setTransform(-56.95,49.65),this.shape_12=new c.Shape,this.shape_12.graphics.beginFill("#56506B").beginStroke().moveTo(.8,9.7).curveTo(-.3,9,-.5,7.9).lineTo(-.5,2.1).lineTo(-.5,1.8).lineTo(-.5,-5.6).curveTo(-1.1,-5.5,-1.4,-4.9).curveTo(-1.8,-5.7,-2.9,-5.7).curveTo(-3.9,-5.7,-4.3,-4.9).curveTo(-4.6,-5.6,-5.5,-5.7).curveTo(-6.4,-5.8,-7,-5.2).lineTo(-6.8,-5.5).lineTo(-6.1,-6.4).lineTo(-5,-7.5).curveTo(-4.1,-8.3,-2.6,-8.8).curveTo(-1.9,-9.1,-.8,-9.2).curveTo(-.7,-9.2,-.7,-9.2).curveTo(-.6,-9.2,-.6,-9.3).curveTo(-.6,-9.3,-.5,-9.3).curveTo(-.5,-9.4,-.5,-9.4).lineTo(-.5,-10).lineTo(.5,-10).lineTo(.5,-9.2).curveTo(4.8,-8.8,7,-5.2).curveTo(6.4,-5.8,5.6,-5.7).curveTo(4.6,-5.6,4.3,-4.9).curveTo(3.9,-5.7,2.9,-5.7).curveTo(1.8,-5.7,1.4,-4.9).curveTo(1.1,-5.5,.5,-5.7).lineTo(.5,7.7).curveTo(.5,8.7,1.4,8.9).curveTo(2.4,9.1,2.9,8.8).curveTo(3.6,8.4,3.7,7.7).lineTo(3.8,7.5).lineTo(4.6,7.5).lineTo(4.7,7.6).curveTo(4.5,9,3.3,9.7).curveTo(2.9,9.9,2.1,10).curveTo(1.5,10,.8,9.7).closePath(),this.shape_12.setTransform(-81.175,52.425),this.shape_13=new c.Shape,this.shape_13.graphics.beginFill("#56506B").beginStroke().moveTo(-4.1,11.1).curveTo(-4.1,11.1,-4.1,11).curveTo(-4.1,11,-4,10.9).curveTo(-4,10.9,-3.9,10.9).curveTo(-3.9,10.8,-3.8,10.8).lineTo(-2.1,10.2).lineTo(-1.6,10.2).lineTo(-.7,10.2).curveTo(-.6,10.2,-.6,10.2).curveTo(-.6,10.2,-.5,10.2).curveTo(-.5,10.1,-.5,10.1).curveTo(-.5,10.1,-.5,10).lineTo(-.5,1.4).lineTo(-.6,1.1).curveTo(-1.7,1,-2.4,.4).curveTo(-3.5,-.4,-3.8,-1.6).curveTo(-4.1,-2.3,-4.1,-3.6).lineTo(-4.1,-11.3).lineTo(4,-11.4).curveTo(4,-11.4,4,-11.3).curveTo(4.1,-11.3,4.1,-11.3).curveTo(4.1,-11.3,4.1,-11.2).curveTo(4.1,-11.2,4.1,-11.1).lineTo(4.1,-3.4).curveTo(4,-2,3.8,-1.3).lineTo(3,-.2).curveTo(2.6,.4,2,.7).curveTo(1.5,1,.7,1.1).curveTo(.6,1.2,.6,1.2).curveTo(.5,1.2,.5,1.2).curveTo(.5,1.3,.5,1.3).curveTo(.5,1.3,.5,1.4).lineTo(.5,10).curveTo(.5,10.1,.5,10.1).curveTo(.5,10.1,.5,10.2).curveTo(.5,10.2,.6,10.2).curveTo(.6,10.2,.6,10.2).lineTo(1.6,10.1).lineTo(3.8,10.8).curveTo(4.2,10.9,4.1,11.3).lineTo(-4,11.4).curveTo(-4,11.4,-4,11.3).curveTo(-4.1,11.3,-4.1,11.3).curveTo(-4.1,11.3,-4.1,11.2).curveTo(-4.1,11.2,-4.1,11.1).closePath(),this.shape_13.setTransform(-67.6719,51.4),this.shape_14=new c.Shape,this.shape_14.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7).moveTo(94.6,74.7).lineTo(-94.5,74.7).curveTo(-97.5,74.7,-99.6,72.6).curveTo(-101.8,70.5,-101.8,67.5).lineTo(-101.8,-67.5).curveTo(-101.8,-70.5,-99.6,-72.6).curveTo(-97.5,-74.7,-94.5,-74.7).lineTo(94.6,-74.7).curveTo(97.5,-74.7,99.7,-72.6).curveTo(101.8,-70.5,101.8,-67.5).lineTo(101.8,67.5).curveTo(101.8,70.5,99.7,72.6).curveTo(97.5,74.7,94.6,74.7).closePath(),this.shape_14.setTransform(.025,.025),this.shape_15=new c.Shape,this.shape_15.graphics.beginFill("#F4D1B9").beginStroke().moveTo(-94.5,74.7).curveTo(-97.5,74.7,-99.6,72.6).curveTo(-101.8,70.5,-101.8,67.5).lineTo(-101.8,-67.5).curveTo(-101.8,-70.5,-99.6,-72.6).curveTo(-97.5,-74.7,-94.5,-74.7).lineTo(94.6,-74.7).curveTo(97.5,-74.7,99.7,-72.6).curveTo(101.8,-70.5,101.8,-67.5).lineTo(101.8,67.5).curveTo(101.8,70.5,99.7,72.6).curveTo(97.5,74.7,94.6,74.7).closePath(),this.shape_15.setTransform(.025,.025),this.timeline.addTween(c.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1))}).prototype=l(h.коробка,new c.Rectangle(-105.2,-78.2,210.5,156.5),null),(h._content=function(e,o,r){this.initialize(e,o,r,{}),this.instance=new h.текст,this.instance.parent=this,this.instance.setTransform(337.95,536.3),this.timeline.addTween(c.Tween.get(this.instance).wait(43).to({regX:2.6,scaleX:.0194,scaleY:.0194,x:350.95,y:310.9},0).to({regX:0,scaleX:1,scaleY:1},7).to({scaleX:1.0455,scaleY:1.0455},3).to({scaleX:1,scaleY:1},3).wait(6).to({x:345.95},3).to({x:350.95},3).to({x:782.95},28).wait(1)),this.instance_1=new h.смайлик,this.instance_1.parent=this,this.instance_1.setTransform(277.5,535.2),this.timeline.addTween(c.Tween.get(this.instance_1).wait(43).to({regX:2.6,scaleX:.0196,scaleY:.0196,x:290.5,y:309.8},0).to({regX:0,scaleX:1,scaleY:1},7).to({scaleX:1.0588,scaleY:1.0588,x:290.45},3).to({scaleX:1,scaleY:1,x:290.5},3).wait(6).to({x:285.5},3).to({x:290.5},3).to({x:722.5},28).wait(1)),this.instance_2=new h.коробка,this.instance_2.parent=this,this.instance_2.setTransform(-107.05,315.25),this.timeline.addTween(c.Tween.get(this.instance_2).wait(4).to({x:320},28).to({x:315},3).to({x:320},3).wait(24).to({x:315},3).to({x:320},3).to({x:752},28).wait(1)),this.shape=new c.Shape,this.shape.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7,1).moveTo(0,25.9).lineTo(0,-25.9),this.shape.setTransform(246.55,283.425),this.shape_1=new c.Shape,this.shape_1.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7).moveTo(25.3,5.4).curveTo(25.3,10.4,17.2,13.3).curveTo(16.9,13.5,14.6,9.1).curveTo(12.3,4.8,11.9,4.9).curveTo(11.5,5,12.6,11.9).curveTo(13.8,18.7,13.3,18.8).curveTo(9.3,19.7,4.3,19.9).curveTo(3.6,20,1.7,11.4).curveTo(-.3,2.8,-1,2.8).curveTo(-2,2.8,-4,10.8).curveTo(-6,18.7,-7,18.6).curveTo(-11.7,18.2,-15.6,17).curveTo(-15.8,16.9,-14.8,10.9).curveTo(-13.7,5,-14,4.9).curveTo(-14.2,4.8,-16.1,8.9).curveTo(-18,13.1,-18.2,13).curveTo(-25.3,10.1,-25.3,5.4).curveTo(-25.3,-5.1,-17.9,-12.5).curveTo(-10.5,-19.9,-0,-19.9).curveTo(10.5,-19.9,17.9,-12.5).curveTo(25.3,-5.1,25.3,5.4).closePath(),this.shape_1.setTransform(176.925,317.8251),this.shape_2=new c.Shape,this.shape_2.graphics.beginFill("#FFEFDE").beginStroke().moveTo(1.7,11.4).curveTo(-.3,2.8,-1,2.8).curveTo(-2,2.8,-4,10.8).curveTo(-6,18.7,-7,18.6).curveTo(-11.7,18.2,-15.6,17).curveTo(-15.8,16.9,-14.8,10.9).curveTo(-13.7,5,-14,4.9).curveTo(-14.2,4.8,-16.1,8.9).curveTo(-18,13.1,-18.2,13).curveTo(-25.3,10.1,-25.3,5.4).curveTo(-25.3,-5.1,-17.9,-12.5).curveTo(-10.5,-19.9,-0,-19.9).curveTo(10.5,-19.9,17.9,-12.5).curveTo(25.3,-5.1,25.3,5.4).curveTo(25.3,10.4,17.2,13.3).curveTo(16.9,13.5,14.6,9.1).curveTo(12.3,4.8,11.9,4.9).curveTo(11.5,5,12.6,11.9).curveTo(13.8,18.7,13.3,18.8).curveTo(9.3,19.7,4.3,19.9).lineTo(4.3,19.9).curveTo(3.6,19.9,1.7,11.4).closePath(),this.shape_2.setTransform(176.925,317.8251),this.shape_3=new c.Shape,this.shape_3.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7).moveTo(24.7,5.9).lineTo(20.2,18.1).curveTo(14.7,31.5,10.1,37.6).curveTo(5.5,43.6,-5.2,51.8).curveTo(-10.5,55.9,-14.9,58.7).curveTo(-22.8,66.6,-34.2,66.3).curveTo(-45.5,66.1,-53.7,58).curveTo(-61.8,49.8,-62.1,38.5).curveTo(-62.3,27.1,-54.4,19.2).lineTo(-24.1,-10.8).curveTo(-23.1,-11.8,-19.6,-14.7).curveTo(-16.1,-17.7,-15.1,-18.7).curveTo(-14,-19.9,-12.1,-23.1).curveTo(-9.6,-27.2,-9.2,-27.7).curveTo(-8.2,-29.3,7.5,-43.9).curveTo(15.4,-51.1,23,-58.1).curveTo(24,-58.8,24.6,-59.2).curveTo(32.8,-64.3,41.8,-65.8).curveTo(46.3,-66.5,49.2,-66.2).lineTo(65.5,-66),this.shape_3.setTransform(221.8243,266.736),this.shape_4=new c.Shape,this.shape_4.graphics.beginFill("#FF7D69").beginStroke().moveTo(-35.9,66.3).curveTo(-47.2,66.1,-55.4,58).curveTo(-63.5,49.8,-63.8,38.5).curveTo(-64,27.1,-56.1,19.2).lineTo(-25.8,-10.8).curveTo(-24.8,-11.8,-21.3,-14.7).curveTo(-17.8,-17.7,-16.8,-18.7).curveTo(-15.7,-19.9,-13.8,-23.1).lineTo(-10.9,-27.7).curveTo(-9.9,-29.3,5.8,-43.9).lineTo(21.3,-58.1).lineTo(22.9,-59.2).curveTo(31.1,-64.3,40.1,-65.8).curveTo(44.6,-66.5,47.5,-66.2).lineTo(63.8,-66).lineTo(23,5.9).lineTo(18.5,18.1).curveTo(13,31.5,8.4,37.6).curveTo(3.8,43.6,-6.9,51.8).curveTo(-12.2,55.9,-16.6,58.7).curveTo(-24.3,66.3,-35.2,66.3).lineTo(-35.9,66.3).closePath(),this.shape_4.setTransform(223.5475,266.736),this.shape_5=new c.Shape,this.shape_5.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7,1).moveTo(0,25.9).lineTo(0,-25.9),this.shape_5.setTransform(395.05,283.425),this.shape_6=new c.Shape,this.shape_6.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7).moveTo(-25.3,5.4).curveTo(-25.3,10.4,-17.3,13.3).curveTo(-16.9,13.5,-14.6,9.1).curveTo(-12.3,4.8,-11.9,4.9).curveTo(-11.5,5,-12.7,11.9).curveTo(-13.9,18.7,-13.4,18.8).curveTo(-9.3,19.7,-4.3,19.9).curveTo(-3.6,20,-1.6,11.4).curveTo(.3,2.8,1,2.8).curveTo(2,2.8,4,10.8).curveTo(6,18.7,6.9,18.6).curveTo(11.7,18.2,15.6,17).curveTo(15.8,16.9,14.8,10.9).curveTo(13.7,5,13.9,4.9).curveTo(14.2,4.8,16.1,8.9).curveTo(18,13,18.2,13).curveTo(25.3,10.1,25.3,5.4).curveTo(25.3,-5.1,17.9,-12.5).curveTo(10.5,-19.9,-0,-19.9).curveTo(-10.5,-19.9,-17.9,-12.5).curveTo(-25.3,-5.1,-25.3,5.4).closePath(),this.shape_6.setTransform(464.675,317.8251),this.shape_7=new c.Shape,this.shape_7.graphics.beginFill("#FFEFDE").beginStroke().moveTo(-4.3,19.9).curveTo(-9.3,19.7,-13.4,18.8).curveTo(-13.9,18.7,-12.7,11.9).curveTo(-11.5,5,-11.9,4.9).curveTo(-12.3,4.8,-14.6,9.1).curveTo(-16.9,13.5,-17.3,13.3).curveTo(-25.3,10.4,-25.3,5.4).curveTo(-25.3,-5.1,-17.9,-12.5).curveTo(-10.5,-19.9,-0,-19.9).curveTo(10.5,-19.9,17.9,-12.5).curveTo(25.3,-5.1,25.3,5.4).curveTo(25.3,10.1,18.2,13).curveTo(18,13,16.1,8.9).curveTo(14.2,4.8,13.9,4.9).curveTo(13.7,5,14.8,10.9).curveTo(15.8,16.9,15.6,17).curveTo(11.7,18.2,6.9,18.6).curveTo(6,18.7,4,10.8).curveTo(2,2.8,1,2.8).curveTo(.3,2.8,-1.6,11.4).curveTo(-3.6,19.9,-4.3,19.9).lineTo(-4.3,19.9).closePath(),this.shape_7.setTransform(464.675,317.8251),this.shape_8=new c.Shape,this.shape_8.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7).moveTo(-24.7,5.8).lineTo(-20.2,18).curveTo(-14.7,31.4,-10.1,37.5).curveTo(-5.6,43.6,5.1,51.7).curveTo(10.5,55.8,14.9,58.7).curveTo(22.8,66.5,34.2,66.3).curveTo(45.5,66.1,53.7,57.9).curveTo(61.8,49.8,62,38.4).curveTo(62.2,27,54.4,19.2).lineTo(24.1,-10.8).curveTo(23.1,-11.8,19.6,-14.8).curveTo(16.1,-17.8,15.1,-18.8).curveTo(13.9,-20,12,-23.1).curveTo(9.3,-27.6,9.2,-27.8).curveTo(7.5,-30.3,-23,-58.2).lineTo(-24.6,-59.2).curveTo(-32.8,-64.3,-41.8,-65.8).lineTo(-49.2,-66.3).lineTo(-65.5,-66),this.shape_8.setTransform(419.7507,266.778),this.shape_9=new c.Shape,this.shape_9.graphics.beginFill("#FF7D69").beginStroke().moveTo(16.7,58.7).curveTo(12.2,55.8,6.9,51.7).curveTo(-3.8,43.6,-8.4,37.5).curveTo(-12.9,31.4,-18.4,18).lineTo(-23,5.8).lineTo(-63.8,-66).lineTo(-47.4,-66.3).lineTo(-40,-65.8).curveTo(-31,-64.3,-22.9,-59.2).lineTo(-21.2,-58.2).curveTo(9.3,-30.3,11,-27.8).lineTo(13.8,-23.1).curveTo(15.7,-20,16.9,-18.8).curveTo(17.9,-17.8,21.4,-14.8).curveTo(24.9,-11.8,25.9,-10.8).lineTo(56.1,19.2).curveTo(64,27,63.8,38.4).curveTo(63.6,49.8,55.4,57.9).curveTo(47.3,66.1,35.9,66.3).lineTo(35.2,66.3).curveTo(24.3,66.3,16.7,58.7).closePath(),this.shape_9.setTransform(418.0275,266.7789),this.shape_10=new c.Shape,this.shape_10.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7,0,1).moveTo(-10.8,-30).curveTo(3.4,-17.4,7.7,-.1).curveTo(10.5,10.7,9.2,22.2).curveTo(8.6,27.9,7.4,31.5),this.shape_10.setTransform(350.9841,96.4442),this.shape_11=new c.Shape,this.shape_11.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7,0,1).moveTo(-11,-45).curveTo(-40.2,-45.7,-52.8,-33.9).curveTo(-62.4,-24.9,-62.7,-7.9).curveTo(-63.1,10,-51.3,20.8).curveTo(-40.2,31,-22.5,31.4).curveTo(-18.3,31.5,-14.5,31.1).curveTo(-10.4,31.1,2.3,30).curveTo(11.2,29.2,15.6,30.3).curveTo(22.3,32.2,28.6,38.8).curveTo(31.8,42.1,33.6,45.1).curveTo(34.8,41.5,35.4,35.7).curveTo(36.6,24.2,33.9,13.4).curveTo(36,12.8,37.9,12.6).curveTo(45.9,11.7,55.1,16.3).curveTo(59.7,18.7,62.7,21.1).curveTo(62.8,17.1,61.7,11.1).curveTo(59.6,-1,54,-11.2).curveTo(35.9,-43.8,-11,-45).closePath(),this.shape_11.setTransform(324.8241,82.8805),this.shape_12=new c.Shape,this.shape_12.graphics.beginFill("#E3A683").beginStroke().moveTo(28.6,38.8).curveTo(22.3,32.2,15.6,30.3).curveTo(11.2,29.2,2.3,30).curveTo(-10.4,31.1,-14.5,31.1).curveTo(-18.3,31.5,-22.5,31.4).curveTo(-40.2,31,-51.3,20.8).curveTo(-63.1,10,-62.7,-7.9).curveTo(-62.4,-24.9,-52.8,-33.9).curveTo(-40.2,-45.7,-11,-45).curveTo(35.9,-43.8,54,-11.2).curveTo(59.6,-1,61.7,11.1).curveTo(62.8,17.1,62.7,21.1).curveTo(59.7,18.7,55.1,16.3).curveTo(45.9,11.7,37.9,12.6).curveTo(36,12.8,33.9,13.4).curveTo(36.6,24.2,35.4,35.7).curveTo(34.8,41.5,33.6,45.1).curveTo(31.8,42.1,28.6,38.8).closePath(),this.shape_12.setTransform(324.8241,82.8805),this.shape_13=new c.Shape,this.shape_13.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7,0,1).moveTo(22.5,20.9).curveTo(18.6,20.1,13.4,18.1).curveTo(2.9,14,-4,7.7).curveTo(-10.9,1.4,-17.4,-10.4).lineTo(-22.5,-20.9).lineTo(-10.2,-18).curveTo(3.4,-13.8,9.6,-7.6).curveTo(17.3,.1,20.7,11.3).curveTo(22.4,16.9,22.5,20.9).closePath(),this.shape_13.setTransform(350.775,101.625),this.shape_14=new c.Shape,this.shape_14.graphics.beginFill("#E3A683").beginStroke().moveTo(13.4,18.1).curveTo(2.9,14,-4,7.7).curveTo(-10.9,1.4,-17.4,-10.4).lineTo(-22.5,-20.9).lineTo(-10.2,-18).curveTo(3.4,-13.8,9.6,-7.6).curveTo(17.3,.1,20.7,11.3).curveTo(22.4,16.9,22.5,20.9).curveTo(18.6,20.1,13.4,18.1).closePath(),this.shape_14.setTransform(350.775,101.625),this.shape_15=new c.Shape,this.shape_15.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7,0,1).moveTo(-22.5,21).lineTo(-13.3,18.2).curveTo(-2.8,14.1,4,7.8).curveTo(10.9,1.6,17.4,-10.2).curveTo(20.6,-16.2,22.5,-20.8).curveTo(16.9,-20,10.1,-17.9).curveTo(-3.5,-13.7,-9.7,-7.5).curveTo(-17.4,.2,-20.7,11.4).curveTo(-22.4,17,-22.5,21).closePath(),this.shape_15.setTransform(288.975,101.5458),this.shape_16=new c.Shape,this.shape_16.graphics.beginFill("#E3A683").beginStroke().moveTo(-20.7,11.3).curveTo(-17.4,.1,-9.7,-7.6).curveTo(-3.5,-13.8,10.1,-18).curveTo(16.9,-20.1,22.5,-20.9).curveTo(20.6,-16.3,17.4,-10.3).curveTo(10.9,1.5,4,7.7).curveTo(-2.8,14,-13.3,18.1).lineTo(-22.5,20.9).curveTo(-22.4,16.9,-20.7,11.3).closePath(),this.shape_16.setTransform(288.975,101.625),this.shape_17=new c.Shape,this.shape_17.graphics.beginFill("#584F6C").beginStroke().moveTo(-3.1,3.9).curveTo(-4.7,2.7,-4.9,.6).curveTo(-5.2,-1.4,-3.9,-3.1).curveTo(-2.7,-4.7,-.6,-4.9).curveTo(1.4,-5.2,3.1,-3.9).curveTo(4.7,-2.7,4.9,-.6).curveTo(5.2,1.4,3.9,3.1).curveTo(2.7,4.7,.6,4.9).lineTo(-0,5).curveTo(-1.7,5,-3.1,3.9).closePath(),this.shape_17.setTransform(347.225,137.825),this.shape_18=new c.Shape,this.shape_18.graphics.beginFill("#584F6C").beginStroke().moveTo(-3.1,3.9).curveTo(-4.7,2.7,-4.9,.6).curveTo(-5.2,-1.4,-3.9,-3.1).curveTo(-2.7,-4.7,-.6,-4.9).curveTo(1.4,-5.2,3.1,-3.9).curveTo(4.7,-2.7,4.9,-.6).curveTo(5.2,1.4,3.9,3.1).curveTo(2.7,4.7,.6,4.9).lineTo(-0,5).curveTo(-1.7,5,-3.1,3.9).closePath(),this.shape_18.setTransform(293.225,137.825),this.shape_19=new c.Shape,this.shape_19.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7).moveTo(55,3).curveTo(55,25.8,38.9,41.9).curveTo(22.8,58,0,58).curveTo(-22.8,58,-38.9,41.9).curveTo(-55,25.8,-55,3).curveTo(-55,-24.8,-45.4,-38.9).curveTo(-32.4,-58,0,-58).curveTo(32.4,-58,45.4,-38.9).curveTo(55,-24.8,55,3).closePath(),this.shape_19.setTransform(320.25,138.35),this.shape_20=new c.Shape,this.shape_20.graphics.beginFill("#FFEFDE").beginStroke().moveTo(-38.9,41.9).curveTo(-55,25.7,-55,3).curveTo(-55,-24.8,-45.4,-38.9).curveTo(-32.4,-58,-0,-58).curveTo(32.4,-58,45.4,-38.9).curveTo(55,-24.8,55,3).curveTo(55,25.7,38.9,41.9).curveTo(22.8,58,-0,58).curveTo(-22.8,58,-38.9,41.9).closePath(),this.shape_20.setTransform(320.25,138.35),this.shape_21=new c.Shape,this.shape_21.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7).moveTo(12,0).curveTo(12,4.9,8.5,8.5).curveTo(5,12,0,12).curveTo(-5,12,-8.5,8.5).curveTo(-12,4.9,-12,0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,0,-12).curveTo(5,-12,8.5,-8.5).curveTo(12,-5,12,0).closePath(),this.shape_21.setTransform(377,141.35),this.shape_22=new c.Shape,this.shape_22.graphics.beginFill("#FFEFDE").beginStroke().moveTo(-8.5,8.5).curveTo(-12,4.9,-12,0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,0,-12).curveTo(5,-12,8.5,-8.5).curveTo(12,-5,12,0).curveTo(12,4.9,8.5,8.5).curveTo(5,12,0,12).curveTo(-5,12,-8.5,8.5).closePath(),this.shape_22.setTransform(377,141.35),this.shape_23=new c.Shape,this.shape_23.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7).moveTo(12,0).curveTo(12,4.9,8.5,8.5).curveTo(4.9,12,0,12).curveTo(-5,12,-8.5,8.5).curveTo(-12,4.9,-12,0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,0,-12).curveTo(4.9,-12,8.5,-8.5).curveTo(12,-5,12,0).closePath(),this.shape_23.setTransform(263,141.35),this.shape_24=new c.Shape,this.shape_24.graphics.beginFill("#FFEFDE").beginStroke().moveTo(-8.5,8.5).curveTo(-12,4.9,-12,0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,-0,-12).curveTo(5,-12,8.5,-8.5).curveTo(12,-5,12,0).curveTo(12,4.9,8.5,8.5).curveTo(5,12,-0,12).curveTo(-5,12,-8.5,8.5).closePath(),this.shape_24.setTransform(263,141.35),this.shape_25=new c.Shape,this.shape_25.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7).moveTo(12,0).curveTo(12,5,8.5,8.5).curveTo(4.9,12,0,12).curveTo(-5,12,-8.5,8.5).curveTo(-12,5,-12,0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,0,-12).curveTo(4.9,-12,8.5,-8.5).curveTo(12,-5,12,0).closePath(),this.shape_25.setTransform(321.5,198.725),this.shape_26=new c.Shape,this.shape_26.graphics.beginFill("#FFEFDE").beginStroke().moveTo(-8.5,8.5).curveTo(-12,5,-12,0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,0,-12).curveTo(4.9,-12,8.5,-8.5).curveTo(12,-5,12,0).curveTo(12,5,8.5,8.5).curveTo(4.9,12,0,12).curveTo(-5,12,-8.5,8.5).closePath(),this.shape_26.setTransform(321.5,198.725),this.shape_27=new c.Shape,this.shape_27.graphics.beginFill().beginStroke("#56506B").setStrokeStyle(7).moveTo(74.5,64).lineTo(-74.5,64).lineTo(-74.5,-29.8).curveTo(-74.5,-43.9,-64.5,-54).curveTo(-54.4,-64,-40.2,-64).lineTo(40.2,-64).curveTo(54.4,-64,64.4,-54).curveTo(74.5,-43.9,74.5,-29.8).closePath(),this.shape_27.setTransform(321,264.75),this.shape_28=new c.Shape,this.shape_28.graphics.beginFill("#FF7D69").beginStroke().moveTo(-74.5,64).lineTo(-74.5,-29.7).curveTo(-74.5,-44,-64.5,-54).curveTo(-54.5,-64,-40.2,-64).lineTo(40.2,-64).curveTo(54.5,-64,64.4,-54).curveTo(74.5,-44,74.5,-29.7).lineTo(74.5,64).closePath(),this.shape_28.setTransform(321,264.75),this.shape_29=new c.Shape,this.shape_29.graphics.beginFill("#56506B").beginStroke().moveTo(-320,7).lineTo(-320,-7).lineTo(320,-7).lineTo(320,7).closePath(),this.shape_29.setTransform(320,428.25),this.shape_30=new c.Shape,this.shape_30.graphics.beginFill("#56506B").beginStroke().moveTo(-320,5.8).lineTo(-320,-5.9).lineTo(320,-5.9).lineTo(320,5.8).closePath(),this.shape_30.setTransform(320,329),this.timeline.addTween(c.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(97))}).prototype=p=new c.MovieClip,p.nominalBounds=new c.Rectangle(107.7,274.3,749.5999999999999,287.90000000000003),h.properties={id:"7D3720B908D64391B3F0D4070C9821EA",width:640,height:480,fps:24,color:"#FFFFFF",opacity:1,manifest:[],preloads:[]},(h.Stage=function(canvas){createjs.Stage.call(this,canvas)}).prototype=p=new createjs.Stage,p.setAutoPlay=function(e){this.tickEnabled=e},p.play=function(){this.tickEnabled=!0,this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())},p.stop=function(e){e&&this.seek(e),this.tickEnabled=!1},p.seek=function(e){this.tickEnabled=!0,this.getChildAt(0).gotoAndStop(h.properties.fps*e/1e3)},p.getDuration=function(){return this.getChildAt(0).totalFrames/h.properties.fps*1e3},p.getTimelinePosition=function(){return this.getChildAt(0).currentFrame/h.properties.fps*1e3},t.composition={getStage:function(){return exportRoot.getStage()},getLibrary:function(){return h},getSpriteSheet:function(){return v},getImages:function(){return img}},t.makeResponsive=Object(T.makeResponsive)(h),o.default=t}}]);
//# sourceMappingURL=29.a1188d3d678548e2fc28.js.map