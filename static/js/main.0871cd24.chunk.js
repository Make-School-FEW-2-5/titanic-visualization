(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(59)},32:function(e,t,n){},57:function(e,t,n){e.exports=n.p+"static/media/logo.36c59f02.svg"},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(8),o=n.n(i),s=(n(32),n(10)),c=n.n(s),u=n(21),l=n(2),h=n(3),d=n(5),p=n(4),f=n(6),m=n(22),g=n.n(m),b=n(7),v=b.a.div.withConfig({displayName:"Circle__Bubble",componentId:"sc-1su4pvy-0"})(["border-radius:50%;width:",";height:",";position:",";left:",";top:",";background-color:",";text-align:center;line-height:",";transition:1000ms;box-shadow:0px 10px 40px -12px rgba(0,0,0,0.75);"],function(e){return 50*e.size+"vw"},function(e){return 50*e.size+"vw"},function(e){return e.children.type?"relative":"absolute"},function(e){return e.children.type?"0":25-50*e.size/2+"vw"},function(e){return e.children.type?"0":25-50*e.size/2+"vw"},function(e){return e.color||"red"},function(e){return 50*e.size+"vw"}),w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(v,Object.assign({},this.props,{ref:function(t){return e.bubble=t}}),this.props.children||this.props.number)}}]),t}(r.Component),j=function(e,t,n){return e.filter(function(e){return e.fields[t]==n})},x=function(e,t,n,r,a){return e.filter(function(e){return e.fields[t]==n}).filter(function(e){return e.fields[r]==a})},O=b.a.button.withConfig({displayName:"Visualization__Button",componentId:"sc-1hv7bil-0"})(["margin:40px auto;width:25%;height:32px;border:none;border-radius:8px;background-color:",";transition:1000ms;"],function(e){return e.men?"Plum":"PaleTurquoise"}),k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){n.state.toggle?(e.target.innerHTML="Show Men",n.setState({toggle:!1})):(e.target.innerHTML="Show Women",n.setState({toggle:!0}))},n.state={toggle:!0},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"getCircleData",value:function(){return this.state.toggle?{color:"PaleTurquoise",number:x(this.props.data,"sex","male","survived","Yes").length,size:x(this.props.data,"sex","male","survived","Yes").length/j(this.props.data,"sex","male").length}:{color:"Plum",number:x(this.props.data,"sex","female","survived","Yes").length,size:x(this.props.data,"sex","female","survived","Yes").length/j(this.props.data,"sex","female").length}}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement(w,{color:"gray",number:"1",size:"1"},a.a.createElement(w,this.getCircleData())),a.a.createElement(O,{men:this.state.toggle,type:"button",onClick:function(t){return e.handleClick(t)}},"Show Women"))}}]),t}(r.Component),y=(n(57),n(58),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).componentDidMount=Object(u.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("titanic-passengers.json");case 2:(t=e.sent)&&n.setState({json:t.data});case 4:case"end":return e.stop()}},e)})),n.state={json:""},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},this.state.json&&a.a.createElement("div",null,a.a.createElement(k,{data:this.state.json}))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.0871cd24.chunk.js.map