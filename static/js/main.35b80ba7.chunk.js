(this.webpackJsonpgangstabots=this.webpackJsonpgangstabots||[]).push([[0],{44:function(e,t,n){e.exports=n(54)},49:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o);n(49),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(24),l=n(25),s=n(28),u=n(29),h=n(89),m=n(92),d=n(99),g=n(95),f=n(94),v=n(96),p=Object(h.a)({root:{maxWidth:400}});function E(e){var t=e.name,n=e.email,a=e.id,o=p();return r.a.createElement(m.a,{className:o.root},r.a.createElement(d.a,null,r.a.createElement(f.a,{component:"img",height:"300",image:"https://robohash.org/".concat(a,"?200x200"),title:"a robot named ".concat(t)}),r.a.createElement(g.a,null,r.a.createElement(v.a,{align:"center",gutterBottom:!0,variant:"h5",component:"h2"},t),r.a.createElement(v.a,{align:"center",variant:"body2",color:"textSecondary",component:"p"},n))))}var b=n(97);function w(e){var t=e.robots;return r.a.createElement(b.a,{container:!0,alignContent:"space-around",alignItems:"center",justify:"space-around",spacing:2},t.map((function(e,n){return r.a.createElement(E,{item:!0,key:e.id,id:t[n].id,name:t[n].name,email:t[n].email})})))}var y=n(98);function j(e){var t=e.searchChange;return r.a.createElement(y.a,{margin:"normal",onChange:t,placeholder:"Search for robots...",size:"medium",variant:"outlined"})}n(53);function C(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"none",height:"800px"}},e.children)}var k=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.state({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong... oops!"):this.props.children}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Gangstabots"),r.a.createElement(j,{searchChange:this.onSearchChange})),r.a.createElement(C,null,r.a.createElement(k,null,r.a.createElement(w,{robots:a})))):r.a.createElement("h1",null,"Loading...")}}]),n}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.35b80ba7.chunk.js.map