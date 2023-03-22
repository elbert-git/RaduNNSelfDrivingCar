var st=Object.defineProperty;var it=(i,t,e)=>t in i?st(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var r=(i,t,e)=>(it(i,typeof t!="symbol"?t+"":t,e),e),nt=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var w=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)};var m=(i,t,e)=>(nt(i,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();let L=null;class P{constructor(){r(this,"processes");r(this,"updateRate");if(this.processes=[],this.updateRate=60,L)return L;L=this,this.update()}update(){this.processes.forEach(t=>{t.update()}),requestAnimationFrame(this.update.bind(this))}}function x(i){return i*(Math.PI/180)}function b(i,t,e){return i+e*(t-i)}function T(i=1){return(Math.random()*2-1)*i}function j(i,t=-1,e=1){let s=i;return s>e&&(s=e),s<t&&(s=t),s}class c{constructor(t,e){r(this,"x");r(this,"y");this.x=t,this.y=e}add(t){return new c(this.x+t.x,this.y+t.y)}subtract(t){return new c(this.x-t.x,this.y-t.y)}rotate(t){return new c(this.x*Math.cos(x(t))-this.y*Math.sin(x(t)),this.x*Math.sin(x(t))+this.y*Math.cos(x(t)))}scale(t){return new c(this.x*t,this.y*t)}magnitude(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))}}var k,J;class ot{constructor(t){w(this,k);r(this,"parentElement");r(this,"elCanvas");r(this,"ctx");r(this,"center");r(this,"size");r(this,"cameraPosition");r(this,"camearaViewScale");r(this,"cameraSubject");this.parentElement=t,this.elCanvas=document.createElement("canvas"),this.elCanvas.classList.add("debugRedLine","roadCanvas"),this.ctx=this.elCanvas.getContext("2d"),this.parentElement.appendChild(this.elCanvas),this.center=new c(0,0),this.cameraPosition=new c(0,0);const e=2;this.camearaViewScale=new c(1/e,1/e),this.cameraSubject=null,this.size={x:0,y:0},window.addEventListener("resize",this.onResize.bind(this)),this.onResize()}onResize(){this.size={x:this.parentElement.clientWidth,y:this.parentElement.clientHeight},this.elCanvas.width=this.size.x,this.elCanvas.height=this.size.y,this.center=new c(Math.floor(this.size.x/2),Math.floor(this.size.y/2))}clear(){this.ctx.fillStyle="#333333",this.ctx.beginPath(),this.ctx.rect(0,0,this.size.x,this.size.y),this.ctx.fill()}draw(t){this.clear(),m(this,k,J).call(this),this.ctx.save(),this.ctx.translate(this.center.x-this.cameraPosition.x,this.center.y-this.cameraPosition.y),this.ctx.scale(this.camearaViewScale.x,this.camearaViewScale.y),Object.keys(t).forEach(e=>{t[e].draw(this.ctx)}),this.ctx.restore();//! temp put camera control here
}}k=new WeakSet,J=function(){if(this.cameraSubject){const t=this.cameraSubject.position.scale(this.camearaViewScale.x);t.x=0,this.cameraPosition=t}};class rt{constructor(){r(this,"objects");r(this,"canvas");r(this,"colliderGroups");this.objects={},this.canvas=new ot(document.getElementById("road")),this.colliderGroups={}}update(){this.canvas.draw(this.objects)}addObject(t,e){this.objects[t]=e,this.addObjectToColliderGroups(e)}addObjectToColliderGroups(t){const e=t.physicsData.colliderTag;e&&(this.colliderGroups[e]?this.colliderGroups[e].push(t):this.colliderGroups[e]=[t]),t.children&&t.children.forEach(s=>{this.addObjectToColliderGroups(s)})}}class q{constructor(){r(this,"stroke");r(this,"fill");r(this,"fillStyle");r(this,"strokeStyle");r(this,"closePath");r(this,"lineWidth");r(this,"lineDash");r(this,"images");r(this,"imageSize");r(this,"opacity");this.stroke=!1,this.fill=!0,this.fillStyle="white",this.strokeStyle="black",this.lineDash=[],this.closePath=!0,this.lineWidth=1,this.images=[],this.imageSize=new c(0,0),this.opacity=1}addImage(t,e,s){this.images.push(t),this.imageSize=new c(e,s)}}class S{constructor(t,e){r(this,"a");r(this,"b");this.a=t,this.b=e}getIntersectionWith(t){const e=(t.a.x-t.b.x)*(this.a.y-t.b.y)-(t.a.y-t.b.y)*(this.a.x-t.b.x),s=(t.b.y-this.a.y)*(this.a.x-this.b.x)-(t.b.x-this.a.x)*(this.a.y-this.b.y),n=(t.a.y-t.b.y)*(this.b.x-this.a.x)-(t.a.x-t.b.x)*(this.b.y-this.a.y);if(n!==0){const o=e/n,l=s/n;return o>=0&&o<=1&&l>=0&&l<=1?new c(b(this.a.x,this.b.x,o),b(this.a.y,this.b.y,o)):null}else return null}static getEdges(t,e=!0){const s=[];for(let n=0;n<t.length-1;n++){const o=new S(t[n],t[n+1]);s.push(o)}return e&&s.push(new S(t[t.length-1],t[0])),s}}var G,$;class f{constructor(t){w(this,G);r(this,"position");r(this,"rotation");r(this,"polygon");r(this,"style");r(this,"children");r(this,"parentPosition");r(this,"parentAngle");r(this,"physicsData");this.position=new c(0,0),this.rotation=0,this.polygon=t,this.style=new q,this.children=[],this.parentPosition=new c(0,0),this.parentAngle=0,this.physicsData={enabled:!1,colliderTag:null,collidesWith:[]}}draw(t){t.beginPath(),this.update(),this.physicsData.enabled&&this.handlePhysics(),this.children.forEach(s=>{s.parentPosition=this.position.add(this.parentPosition),s.parentAngle=this.rotation+this.parentAngle,s.draw(t)});const e=this.computeTransformedVertices();if(e.forEach((s,n)=>{n===0?(t.beginPath(),t.moveTo(s.x,s.y)):t.lineTo(s.x,s.y)}),m(this,G,$).call(this,t),this.style.closePath&&t.closePath(),this.style.fill&&t.fill(),this.style.stroke&&t.stroke(),this.style.images.length>0){const s=this.rotation,n=x(s);t.rotate(n);const a=e[0].subtract(this.position).rotate(0).add(this.position).rotate(-s);for(let h=0;h<this.style.images.length;h++)t.drawImage(this.style.images[h],a.x,a.y,this.style.imageSize.x,this.style.imageSize.y);t.rotate(-n)}}computeTransformedVertices(){let t=[...this.polygon.vertices];return t=t.map(e=>e.rotate(this.rotation+this.parentAngle).add(this.position.add(this.parentPosition))),t}update(){}handlePhysics(){const t=new P().processes[0];let e=[];this.physicsData.collidesWith.length>0&&this.physicsData.collidesWith.forEach(n=>{e=[...e,...t.colliderGroups[n]]});let s=[];for(let n=0;n<e.length;n++)s=[...s,...this.checkCollisionWith(e[n])];s.length>0&&this.onCollision(s)}checkCollisionWith(t){const e=this.computeTransformedVertices(),s=S.getEdges(e),n=t.computeTransformedVertices(),o=S.getEdges(n),l=[];for(let a=0;a<s.length;a++)for(let h=0;h<o.length;h++){const p=s[a],g=o[h],C=p.getIntersectionWith(g);C&&l.push(C)}return l}onCollision(t){}}G=new WeakSet,$=function(t){t.fillStyle=this.style.fillStyle,t.strokeStyle=this.style.strokeStyle,t.lineWidth=this.style.lineWidth,t.setLineDash(this.style.lineDash),t.globalAlpha=this.style.opacity};class y{constructor(t){r(this,"vertices");this.vertices=t}}const z=400,at=-1e5,lt=5,d={roadWidth:z,roadHeight:at,laneCount:lt,allLanesWidth:z-15};function ct(i,t){const e=new f(new y([new c(-i,0),new c(i,0),new c(i,t),new c(-i,t)]));return e.style.fillStyle="#a6a6a6",e}function Y(i,t,e){const n=e?-i:i,o=new f(new y([new c(n,0),new c(n,t)]));return o.physicsData.colliderTag="road",o.style.fill=!1,o.style.stroke=!0,o.style.strokeStyle="white",o.style.lineWidth=5,o}function ht(i,t,e){const n={};for(let o=1;o<i;o++){const l=-t+t*2/i*o,a=new f(new y([new c(l,0),new c(l,e)]));a.style.stroke=!0,a.style.strokeStyle="white",a.style.lineWidth=5,a.style.fill=!1,a.style.lineDash=[30,50],n[`lane${o}`]=a}return n}const ut=ct(d.roadWidth,d.roadHeight),dt=Y(d.allLanesWidth,d.roadHeight,!0),pt=Y(d.allLanesWidth,d.roadHeight,!1),ft=ht(d.laneCount,d.allLanesWidth,d.roadHeight),F={road:ut,leftSideLine:dt,rightSideLine:pt,...ft};class yt{constructor(t){r(this,"connectingNeuron");r(this,"weight");this.connectingNeuron=t,this.weight=T()}getConnectionOutput(){}}var O,K;class V{constructor(){w(this,O);r(this,"inputConnections");r(this,"bias");r(this,"rawInputValue");this.inputConnections=[],this.bias=T(),this.rawInputValue=null}connectToLayer(t){t.forEach(e=>{this.inputConnections.push(new yt(e))})}getOutput(){return this.rawInputValue===null?m(this,O,K).call(this)>this.bias?1:0:this.rawInputValue}convertToJson(){return{bias:this.bias,connectionWeights:this.inputConnections.map(e=>e.weight)}}mutate(t){this.bias+=T(t),this.bias=j(this.bias),this.inputConnections.forEach(e=>{e.weight+=T(t),e.weight=j(e.weight)})}}O=new WeakSet,K=function(){let t=0;return this.inputConnections.forEach(e=>{t+=e.connectingNeuron.getOutput()*e.weight}),t};class N{constructor(t){r(this,"layers");this.layers=[],t.forEach((e,s)=>{const n=[];for(let o=0;o<e;o++){const l=new V;s>0&&l.connectToLayer(this.layers[s-1]),n.push(l)}this.layers.push(n)})}feedFoward(t){this.layers[0].forEach((n,o)=>{n.rawInputValue=t[o]});const e=[];return this.layers[this.layers.length-1].forEach(n=>{e.push(n.getOutput())}),e}convertToJson(){const t={data:[]};for(let e=0;e<this.layers.length;e++){const s=this.layers[e],n=[];for(let o=0;o<s.length;o++){const l=s[o];n.push(l.convertToJson())}t.data.push(n)}return t}convertFromJson(t){t.data.forEach((s,n)=>{const o=[];s.forEach(l=>{const a=new V;a.bias=l.bias,n>0&&(a.connectToLayer(this.layers[n-1]),a.inputConnections.forEach((h,p)=>{h.weight=l.connectionWeights[p]})),o.push(a)}),this.layers[n]=o})}mutate(t){for(let e=0;e<this.layers.length;e++){const s=this.layers[e];for(let n=0;n<s.length;n++)s[n].mutate(t)}}clone(){const t=this.convertToJson(),e=new N([]);return e.convertFromJson(t),e}}class R{constructor(){r(this,"signalsOut");this.signalsOut={up:0,right:0,down:0,left:0}}update(){}}class gt extends R{constructor(){super(),this.signalsOut.up=1}}class wt extends R{constructor(){super();r(this,"neuralNetwork");this.neuralNetwork=new N([7,8,4])}updateNetwork(e){const s=this.neuralNetwork.feedFoward(e);this.signalsOut.up=s[0],this.signalsOut.right=s[1],this.signalsOut.down=s[2],this.signalsOut.left=s[3]}}class mt extends f{constructor(e,s){super(e);r(this,"reading");r(this,"distance");this.reading=0,this.distance=s}update(){this.reading=0}onCollision(e){let s=null,n=1/0;e.forEach(g=>{const C=Math.abs(g.subtract(this.position.add(this.parentPosition)).magnitude());C<n&&(s=g,n=C);//!temp draw closest points
const et=10,E=new P().processes[0].canvas.ctx;E.beginPath(),E.fillStyle="yellow",E.arc(g.x,g.y,et,0,Math.PI*2),E.fill()});const a=this.position.add(this.parentPosition).subtract(s).magnitude();this.reading=a/this.distance;const h=10,p=new P().processes[0].canvas.ctx;p.beginPath(),p.fillStyle="red",p.arc(s.x,s.y,h,0,Math.PI*2),p.fill()}}class bt extends f{constructor(t,e,s,n){super(t);for(let o=0;o<e+0;o++){const l=0-s/2+(s/(e-1)*o+1),a=new mt(new y([new c(0,0),new c(0,-n).rotate(l)]),n);a.style.strokeStyle="red",a.style.stroke=!0,a.style.fill=!1,a.physicsData.enabled=!0,a.physicsData.collidesWith=["road","traffic"],this.children.push(a)}}getReadings(){const t=[];return this.children.forEach(e=>{t.push(e.reading)}),t}}class U extends f{constructor(e){super(e);r(this,"controls");r(this,"pedal");r(this,"turnSpeed");r(this,"carSpeed");r(this,"status");this.controls=new R,this.pedal=0,this.turnSpeed=5,this.rotation=0,this.carSpeed=20,this.status="enabled"}update(){this.status==="enabled"&&this.processControls()}processControls(){this.controls.signalsOut.up?this.pedal=b(this.pedal,1,.1):this.controls.signalsOut.down?this.pedal=b(this.pedal,-1,.1):this.pedal=b(this.pedal,0,.1),this.pedal!==0&&(this.controls.signalsOut.left?this.rotation-=this.turnSpeed*this.pedal:this.controls.signalsOut.right&&(this.rotation+=this.turnSpeed*this.pedal));let e=new c(0,-this.carSpeed);e=e.scale(this.pedal),e=e.rotate(this.rotation),this.position=this.position.add(e)}onCollision(e){this.status="crashed",this.physicsData.enabled=!1,this.style.opacity=.5,this.children[0].children.forEach(s=>{s.physicsData.enabled=!1})}}class Ct extends U{constructor(t){super(t),this.controls=new gt,this.status="enabled"}}class xt extends U{constructor(e){super(e);r(this,"sensors");this.controls=new wt,this.status="enabled",this.sensors=new bt(new y([]),7,180,500),this.children.push(this.sensors)}update(){const e=this.sensors.getReadings();this.controls.updateNetwork(e),super.update()}}let W=null;var v,X;class Q{constructor(){w(this,v);r(this,"library");if(this.library={},W)return W;W=this}async loadImage(t,e){const s=await m(this,v,X).call(this,e);this.library[t]=s}}v=new WeakSet,X=async function(t){const e=document.createElement("img");return e.src=t,new Promise(s=>{e.onload=()=>{s(e)}})};let D=null;class M{constructor(){r(this,"elGenerationControl");r(this,"elFurthestDistanceText");r(this,"elGenerationText");r(this,"carsPerGeneration");r(this,"mutatingFactor");r(this,"controlButtonPressed");if(this.elGenerationControl=document.getElementById("generationControlButton"),this.elFurthestDistanceText=document.getElementById("distanceLabel"),this.elGenerationText=document.getElementById("generationLabel"),this.controlButtonPressed=()=>{console.log("generation button click")},this.carsPerGeneration=100,this.mutatingFactor=.2,D)return D;D=this,this.elGenerationControl.addEventListener("click",()=>{this.controlButtonPressed()})}updateTexts(t="0",e="0"){this.elFurthestDistanceText.innerHTML=t,this.elGenerationText.innerHTML=e}}const A=new Q,u=[55,110],Z=new y([new c(-u[0],-u[1]),new c(u[0],-u[1]),new c(u[0],u[1]),new c(-u[0],u[1])]),_=()=>{const i=new q;return i.stroke=!1,i.fill=!1,i.fillStyle="red",i.addImage(A.library.carFill,u[0]*2,u[1]*2),i.addImage(A.library.carOutlines,u[0]*2,u[1]*2),i};function B(){const i=new Ct(Z);return i.carSpeed=10,i.physicsData.colliderTag="traffic",i.style=_(),i}function H(i=null){const t=new xt(Z);return t.physicsData.enabled=!0,t.physicsData.collidesWith=["road","traffic"],t.style=_(),i&&(t.controls.neuralNetwork=i.clone(),t.controls.neuralNetwork.mutate(new M().mutatingFactor)),t}function Pt(i,t,e,s){const n=[];for(let a=0;a<i;a++){const h=new c(b(0,t,a/i)-t/2+t/i/2,e);n.push(h)}const o=[];for(let a=0;a<i;a++)if(Math.random()>s){const h=B();h.position=n[a],o.push(h)}if(o.length===0){const a=B();a.position=n[Math.floor(Math.random()*(i-1))],o.push(a)}o.length===i&&o.splice(Math.floor(Math.random()*(i-1)),1);const l={};for(let a=0;a<o.length;a++)l[e.toString()+"trafficCars"+a.toString()]=o[a];return l}function St(i,t,e,s,n,o){let l={};for(let a=0;a<i;a++){const h=t-e*a,p=Pt(s,n,h,o);l={...l,...p}}return l}var I,tt;class Et{constructor(){w(this,I);r(this,"physicsWorld");r(this,"active");r(this,"trafficCarGroup");r(this,"aiCarGroup");r(this,"farthestCar");r(this,"bestNetwork");this.physicsWorld=new P().processes[0],this.active=!1,this.aiCarGroup=new f(new y([])),this.aiCarGroup.style.fill=!1,this.trafficCarGroup=new f(new y([])),this.trafficCarGroup.style.fill=!1,this.farthestCar=null,this.bestNetwork=null;//! todo test if all ssame weight
}startGeneration(){if(this.active)this.endGeneration(),this.startGeneration();else{this.active=!0;for(let e=0;e<new M().carsPerGeneration;e++){const s=this.bestNetwork?H(this.bestNetwork):H();this.aiCarGroup.children.push(s)}this.physicsWorld.addObject("aiCarGroup",this.aiCarGroup);const t=St(5,-700,500,d.laneCount,d.allLanesWidth*2,.5);Object.keys(t).forEach(e=>{this.trafficCarGroup.children.push(t[e])}),this.physicsWorld.addObject("trafficCarGroup",this.trafficCarGroup)}}update(){this.farthestCar=m(this,I,tt).call(this),this.physicsWorld.canvas.cameraSubject=this.farthestCar}endGeneration(){var t;if(this.active){const e=(t=this.farthestCar)==null?void 0:t.controls;this.bestNetwork=e.neuralNetwork.clone(),this.active=!1,delete this.physicsWorld.objects.trafficCarGroup,delete this.physicsWorld.objects.aiCarGroup,this.aiCarGroup.children=[],this.trafficCarGroup.children=[],this.physicsWorld.colliderGroups.traffic=[]}else console.error("no generation is not currently active")}}I=new WeakSet,tt=function(){const t=this.aiCarGroup.children;let e=0,s=t[0];return t.forEach(n=>{const o=n.position.y;o<e&&(e=o,s=n)}),s};const Tt="/assets/carOutlines.svg",kt="/assets/carFill.svg";(async()=>{const i=new Q;await i.loadImage("carOutlines",Tt),await i.loadImage("carFill",kt);const t=new P,e=new rt;t.processes.push(e),Object.keys(F).forEach(o=>{e.addObject(o,F[o])});const s=new Et;t.processes.push(s);const n=new M;n.controlButtonPressed=s.startGeneration.bind(s)})();