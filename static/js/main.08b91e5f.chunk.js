(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{21:function(e,t,n){"use strict";n.r(t);var a,c,i,o,r,s,b,d,l,j,p,u,h=n(1),x=n.n(h),O=n(5),g=n(6),f=n(7),v=n(8),k=n(11),m=n(10),y=n(2),w=n(3),F=w.a.button(a||(a=Object(y.a)(["\n  background-color: antiquewhite;\n  padding: 10px;\n  min-width: 150px;\n  height: 50px;\n  font-size: 18px;\n  margin: 20px;\n  border-radius: 20px;\n  filter: drop-shadow(2px 4px 6px black);\n"]))),P=w.a.span(c||(c=Object(y.a)(["\n  display: block;\n  text-transform: capitalize;\n  pointer-events: none;\n  font-weight: 500;\n  font-size: 18px;\n"]))),z=w.a.div(i||(i=Object(y.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"]))),L=w.a.li(o||(o=Object(y.a)(["\n  list-style: none;\n  margin: 5px;\n"]))),C=n(0),I=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(C.jsx)(z,{children:t.map((function(e){return Object(C.jsx)(L,{children:Object(C.jsx)(F,{type:"button",id:e,onClick:n,children:Object(C.jsx)(P,{children:e})})},e)}))})},S=w.a.section(r||(r=Object(y.a)(["\n  width: 50%;\n  margin: auto;\n  text-align: center;\n"]))),T=w.a.h1(s||(s=Object(y.a)(["\n  color: tomato;\n  font-size: 40px;\n  margin-bottom: 50px;\n"]))),B=function(e){var t=e.title,n=e.children;return Object(C.jsxs)(S,{children:[Object(C.jsx)(T,{children:t}),n]})},J=w.a.div(b||(b=Object(y.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"]))),q=w.a.li(d||(d=Object(y.a)(["\n  list-style: none;\n  margin: 5px;\n  background-color: lightgray;\n  border: 2px solid grey;\n  min-width: 120px;\n  font-size: 18px;\n  width: auto;\n"]))),A=w.a.p(l||(l=Object(y.a)(["\n  padding: 10px;\n  margin: 0 20px;\n  font-weight: 700;\n  font-size: 28px;\n"]))),D=w.a.span(j||(j=Object(y.a)(["\n  display: block;\n  pointer-events: none;\n  font-weight: 500;\n"]))),E=w.a.section(p||(p=Object(y.a)(["\n  width: 50%;\n  margin: auto;\n  text-align: center;\n"]))),M=w.a.h1(u||(u=Object(y.a)(["\n  color: teal;\n  font-size: 30px;\n  margin-bottom: 50px;\n"]))),N=function(e){var t=e.message;return Object(C.jsx)(E,{children:Object(C.jsx)(M,{children:t})})},G=function(e){var t=Object.keys(e);return Object(C.jsxs)(C.Fragment,{children:[e.total>0&&Object(C.jsx)(J,{children:t.map((function(t){return Object(C.jsx)(q,{children:Object(C.jsxs)(A,{children:["positivePercentage"!==t?t:"Positive precentage",": ",Object(C.jsxs)(D,{children:[e[t],"positivePercentage"===t&&"%"]})]})},t)}))}),0===e.total&&Object(C.jsx)(N,{message:"No feedback"})]})},H=function(e){Object(k.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countPositiveFeedback=function(e,t){var n=100*parseInt(t)/e;return e?parseInt(n.toFixed(0)):0},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.onLeaveFeedback=function(t){var n=t.target.id;e.setState((function(e){return Object(g.a)({},n,++e[n])}))},e}return Object(v.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.bad,a=e.neutral,c=this.countTotalFeedback(),i=this.countPositiveFeedback(c,t),o=Object.keys(this.state);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(B,{title:"Please leave feedback",children:Object(C.jsx)(I,{options:o,onLeaveFeedback:this.onLeaveFeedback})}),Object(C.jsx)("hr",{}),Object(C.jsx)(B,{title:"Statistics",children:Object(C.jsx)(G,{good:t,bad:n,neutral:a,total:c,positivePercentage:i})})]})}}]),n}(h.Component),K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};Object(O.render)(Object(C.jsx)(x.a.StrictMode,{children:Object(C.jsx)(H,{})}),document.getElementById("root")),K()}},[[21,1,2]]]);
//# sourceMappingURL=main.08b91e5f.chunk.js.map