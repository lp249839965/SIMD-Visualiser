(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){},158:function(e,t,n){e.exports=n.p+"static/media/c-programming.562eee74.png"},161:function(e,t,n){e.exports=n(384)},166:function(e,t,n){},178:function(e,t,n){},367:function(e,t,n){},384:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),i=n.n(o),u=(n(166),n(32)),c=n(65),l=n(70),s=n(66),d=n(71),m=n(10),p=n(150),f=(n(168),n(170),n(172),n(173),n(383),n(176),n(178),n(11));function g(){return{main:getComputedStyle(document.documentElement).getPropertyValue("--main"),darkMain:getComputedStyle(document.documentElement).getPropertyValue("--dark-main"),one:getComputedStyle(document.documentElement).getPropertyValue("--one"),two:getComputedStyle(document.documentElement).getPropertyValue("--two"),three:getComputedStyle(document.documentElement).getPropertyValue("--three"),four:getComputedStyle(document.documentElement).getPropertyValue("--four"),five:getComputedStyle(document.documentElement).getPropertyValue("--five"),gray:getComputedStyle(document.documentElement).getPropertyValue("--gray"),clearTextColor:getComputedStyle(document.documentElement).getPropertyValue("--clear-text-color"),DarkTextColor:getComputedStyle(document.documentElement).getPropertyValue("--dark-text-color")}}function v(){var e=Object(m.a)(["\n  background: ",";\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-weight: 300\n  font-size: 14px;\n  padding: 5px;\n  padding-left: 10px;\n  margin-bottom: 5px;\n\n  > span {\n    font-weight: 500;\n    margin-left: 10px;\n  }\n\n  @media (max-width: 700px) {\n    font-size: 8px;\n  }\n"]);return v=function(){return e},e}var h=f.a.div(v(),function(e){return e.bg});function b(e){var t=e.status,n=void 0===t?"compiles":t,r="",o="";return"compiles"===n?(r=g().five,o="Code status: Compiles.."):"error"===n?(r=g().two,o="Code status: Error.."):"warning"===n&&(r=g().four,o="Code status: warning.."),a.a.createElement(h,{bg:r},o)}function x(){var e=Object(m.a)(["\n  > button {\n    border: none;\n    background: none;\n    color: #fff;\n    font-size: 18px;\n    padding: 8px;\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);\n\n    @media (max-width: 700px) {\n      font-size: 10px;\n    }\n  }\n\n  > button:hover {\n    color: #fff;\n    cursor: pointer;\n  }\n\n  > button:disabled {\n    color: #919191;\n  }\n\n  > button:active {\n    color: #fff;\n    text-shadow: none;\n  }\n"]);return x=function(){return e},e}function E(){var e=Object(m.a)(["\n  padding: 3px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px;\n"]);return E=function(){return e},e}function y(){var e=Object(m.a)(["\n  background: #1F292E;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return y=function(){return e},e}var w=f.a.div(y()),C=f.a.div(E()),j=f.a.div(x());function S(e){var t=e.visualize,n=e.serialize,r=e.restart,o=e.disabled,i=void 0!==o&&o,u=e.status;return a.a.createElement(w,null,a.a.createElement(C,null,a.a.createElement(j,null,a.a.createElement("button",{disabled:i,onClick:t},"Visualize"),a.a.createElement("button",{onClick:n},"Serialize"),a.a.createElement("button",{onClick:r},"Restart"))),a.a.createElement(b,{status:u}))}var k=n(152);var O=n(33),z=n.n(O);n(108);function P(){var e=Object(m.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: #fff;\n    font: 3em bold;\n"]);return P=function(){return e},e}function D(){var e=Object(m.a)(["\n    border-radius: 50%;\n    height: ",";\n    width: ",";\n    border: ",";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: ",";\n    overflow: hidden;\n"]);return D=function(){return e},e}function V(){var e=Object(m.a)(["\n    border-radius: 50%;\n    height: ",";\n    width: ",";\n    background:#1F292E;\n    position: absolute;\n    top: 50%;\n    left: 75%;\n    margin: ",";\n"]);return V=function(){return e},e}var B=f.a.div(V(),function(e){return e.radius+"px"},function(e){return e.radius+"px"},function(e){var t=e.radius;return-t/2+"px 0 0 "+-t/2+"px"}),M=f.a.div(D(),function(e){return e.radius+"px"},function(e){return e.radius+"px"},function(e){return e.dotSize+"px dashed #1F292E"},function(e){var t=e.radius,n=e.dotSize;return-(t/2+n)+"px 0 0 "+-(t/2+n)+"px"}),F=f.a.div(P());function T(){return a.a.createElement(z.a,{easing:"easeOutCubic",duration:1500,direction:"alternate",loop:!0,delay:function(e,t){return 10*t},scale:.9},a.a.createElement(B,{radius:400},a.a.createElement(z.a,{loop:!0,easing:"linear",rotate:"360deg",duration:8e3},a.a.createElement(M,{radius:395,dotSize:40})),a.a.createElement(F,null,"Compiling")))}var I=n(103),N=n(159),R=(n(365),n(367),function(e){switch(e.type){case"Program":return e.body;case"VariableDeclaration":return e.declarations;case"VariableDeclarator":return e.init?[e.id,e.init]:[e.id];case"ExpressionStatement":return[e.expression];case"BinaryExpression":case"AssignmentExpression":return[e.left,e.right];case"CallExpression":return[e.callee,{type:"arguments",arguments:e.arguments}];case"arguments":return e.arguments;case"MemberExpression":return[e.object,e.property];case"NewExpression":return e.arguments;case"ObjectExpression":return e.properties;case"Property":return[e.key,e.value];case"FunctionDeclaration":case"FunctionExpression":return[e.body];case"BlockStatement":return e.body;case"ReturnStatement":return e.argument?[e.argument]:[];case"UnaryExpression":return[e.argument];case"IfStatement":return[e.test,e.consequent];case"ConditionalExpression":return[e.test,e.consequent,e.alternate];default:return[]}}),W=function(e){switch(e.type){case"Identifier":return e.name;case"Literal":return e.raw;case"UnaryExpression":case"BinaryExpression":case"AssignmentExpression":return e.operator;case"FunctionDeclaration":var t=I.map(e.params,"name").join(",");return"function "+(e.id&&e.id.name||"")+"("+t+")";case"FunctionExpression":var n=I.map(e.params,"name").join(",");return"function "+(e.id&&e.id.name||"")+"("+n+")";default:return e.type}},A=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).recursiveBuilder=function(e){var t=R(e),r=[];return t===[]?t:(t.forEach(function(e){r.push({title:W(e),children:n.recursiveBuilder(e),expanded:!0,type:e.type,start:e.start,end:e.end})}),r)},n.buildTree=function(e){var t=[];return t.push({title:W(e),children:n.recursiveBuilder(e),expanded:!0,type:e.type,start:e.start,end:e.end}),t},n.highlightCode=function(e,t){var r=n.props.cm.editor.doc,a=r.posFromIndex(e),o=r.posFromIndex(t);r.markText(a,o,{className:"highlighted-code"})},n.clearHighlightedCode=function(){n.props.cm.editor.doc.getAllMarks().forEach(function(e){e.clear()})},n.state={treeData:[]},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({treeData:this.buildTree(this.props.ast)})}},{key:"componentWillReceiveProps",value:function(e){this.setState({treeData:this.buildTree(e.ast)})}},{key:"render",value:function(){var e=this;return a.a.createElement(N.a,{treeData:this.state.treeData,onChange:function(t){return e.setState({treeData:t})},canDrag:!1,generateNodeProps:function(t){var n=t.node;return{className:n.type,onMouseEnter:function(){return e.highlightCode(n.start,n.end)},onMouseLeave:function(){return e.clearHighlightedCode()}}}})}}]),t}(r.Component),J=(n(370),n(158)),U=n.n(J);function q(){var e=Object(m.a)(["\n    text-align: center;\n    font-weight: 300;\n    margin: 0px auto;\n    font-size: calc(8px + 0.91vw);\n"]);return q=function(){return e},e}function H(){var e=Object(m.a)(["\n    text-align: center;\n    font-weight: 300;\n    font-size: calc(12px + 3.6vw);\n    letter-spacing: 1.8px;\n    margin-top: 40px;\n    border: medium none;\n    margin-bottom: 20px;\n"]);return H=function(){return e},e}function L(){var e=Object(m.a)(["\n    content: ","\n    width: 40vmin;\n    margin: 10vh auto;\n"]);return L=function(){return e},e}var $=f.a.div(L(),function(e){return"url("+e.url+");"}),G=f.a.div(H()),K=f.a.div(q());function Q(){return a.a.createElement("div",null,a.a.createElement(z.a,{easing:"easeOutCubic",duration:2e3,direction:"alternate",loop:!0,scale:.9},a.a.createElement("div",null,a.a.createElement(z.a,{rotate:"360deg",loop:!0,delay:6e3,duration:4e3},a.a.createElement($,{url:U.a})))),a.a.createElement(G,null,"The Ultimate SIMD visualizer"),a.a.createElement(K,null,"Built by ",a.a.createElement("strong",null,"J\xe9r\xe9mie Piotte")," and ",a.a.createElement("strong",null,"Pierre Marie Ntang")))}function X(){var e=Object(m.a)(["\n  width: 50vw;\n  height: 100vh;\n  overflow: hidden;\n"]);return X=function(){return e},e}function Y(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh\n  width: 50vw;\n  overflow: scroll;\n"]);return Y=function(){return e},e}function Z(){var e=Object(m.a)(["\n  display: flex;\n"]);return Z=function(){return e},e}var _=f.a.div(Z()),ee=f.a.div(Y()),te=f.a.div(X()),ne=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={code:"int a = g(k);\nint b = 600;\nint c = a + b;",disableButtons:!1,status:"compiles",compiling:!1,ast:{}},n.handleClear=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];n.setState(function(t){var n=t.code;return{code:!0===e?"":n}})},n.visualize=function(){n.setState({compiling:!0});var e=function(e){var t=e.doc.getValue();return t=t.replace(new RegExp("int","g"),"let"),k.a(t)}(n.cm.editor);n.setState({compiling:!1,ast:e})},n.serialize=function(){},n.restart=function(){n.setState({compiling:!1,ast:{}})},n.frontPage=a.a.createElement(Q,null),n.waitingScreen=a.a.createElement(T,null),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,n=t.code,r=t.disableButtons,o=t.status,i=t.compiling,u=this.frontPage;return i?u=this.waitingScreen:Object.keys(this.state.ast).length>0&&(u=a.a.createElement(A,{cm:this.cm,ast:this.state.ast})),a.a.createElement(_,null,a.a.createElement(ee,null,a.a.createElement(S,{visualize:this.visualize,serialize:this.serialize,restart:this.restart,disabled:r,status:o}),a.a.createElement(p.Controlled,{ref:function(t){return e.cm=t},value:n,options:{mode:"text/x-csrc",theme:"material",lineNumbers:!0,lineWrapping:!0,gutters:["CodeMirror-lint-markers"]},onBeforeChange:function(t,n,r){""===r?e.handleClear(!0):e.setState({code:r})},onPaste:function(){e.handleClear(!1)}})),a.a.createElement(te,null,u))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[161,2,1]]]);
//# sourceMappingURL=main.0214afce.chunk.js.map