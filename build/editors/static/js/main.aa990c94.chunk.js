!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["sub-editors-main"]=t():e["sub-editors-main"]=t()}(window,(function(){return(window["webpackJsonp_sub-editors"]=window["webpackJsonp_sub-editors"]||[]).push([[1],{243:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13),_Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(45),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__),tf=__webpack_require__(472);function addListener(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}var Iframe=function(_React$Component){Object(_Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Iframe,_React$Component);var _super=Object(_Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Iframe);function Iframe(){var _this;Object(_Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Iframe);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.listener=void 0,_this.componentDidMount=function(){_this.listener=addListener(window,"message",(function(e){var result="";if("string"===typeof e.data){try{result=eval(e.data)}catch(e){result="eval() threw an exception:"+e.message}if(result)try{console.log(result)}catch(e){console.log(e)}}}))},_this.componentWillUnmount=function(){var e;return null===(e=_this.listener)||void 0===e?void 0:e.destroy()},_this}return Object(_Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Iframe,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("iframe",{allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads",title:"sandbox",id:"sandbox",style:{display:"none"}})}}]),Iframe}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=Iframe},367:function(e,t,n){window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},373:function(e,t){},374:function(e,t){},382:function(e,t){},385:function(e,t){},386:function(e,t){},387:function(e,t){},473:function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return K})),n.d(t,"mount",(function(){return z})),n.d(t,"unmount",(function(){return S}));var o=n(5),_=n.n(o),r=n(12),a=n(1),s=n.n(a),i=n(66),c=n.n(i),u=(n(367),n(138)),l=n(264),p=n(62),d=n(243),m=n(6),b=n(11),h=n(13),f=n(14),j=n(116),O=n(359),E=n.n(O),v=n(476),y=n(45),k=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var o=arguments.length,_=new Array(o),r=0;r<o;r++)_[r]=arguments[r];return(e=t.call.apply(t,[this].concat(_))).state={collapsed:!1,current:window.location.pathname.replace(/^.*?(\/\w+)$/,"$1")||B[0].path},e.componentDidMount=function(){e.props.history.listen((function(t,n){"REPLACE"===n&&e.setState({current:t.pathname})}))},e.handleClick=function(t){e.setState({current:t.key})},e.toggle=function(){var t=e.state.collapsed;e.setState({collapsed:!t})},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state.current;return Object(y.jsxs)(v.a,{onClick:this.handleClick,selectedKeys:[e],mode:"horizontal",children:[B.map((function(e){return Object(y.jsx)(v.a.Item,{children:Object(y.jsx)(l.b,{to:e.path,children:e.name})},e.path)})),Object(y.jsxs)(v.a.SubMenu,{title:Object(y.jsx)("span",{className:"submenu-title-wrapper",children:"Navigation Three - Submenu"}),children:[Object(y.jsxs)(v.a.ItemGroup,{title:"Item 1",children:[Object(y.jsx)(v.a.Item,{children:"Option 1"},"setting:1"),Object(y.jsx)(v.a.Item,{children:"Option 2"},"setting:2")]}),Object(y.jsxs)(v.a.ItemGroup,{title:"Item 2",children:[Object(y.jsx)(v.a.Item,{children:"Option 3"},"setting:3"),Object(y.jsx)(v.a.Item,{children:"Option 4"},"setting:4")]})]},"x"),Object(y.jsx)(v.a.Item,{children:Object(y.jsx)("a",{href:"https://blog.csdn.net/qq_36571602",target:"_blank",rel:"noopener noreferrer",children:"\u6211\u7684\u535a\u5ba2"})},"blog")]})}}]),n}(s.a.Component),w=Object(p.g)(k),x=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(y.jsxs)(j.a,{locale:E.a,children:[Object(y.jsx)(w,{}),e,Object(y.jsx)(d.a,{})]})}}]),n}(s.a.Component),g=n(475),C=n(362),D=n(61);var P="animationend",I={support:"AnimationEvent"in window,endEvent:P,addEndEventListener:function(e,t){e&&function(e,t,n){e.addEventListener(t,n,!1)}(e,P,t)},removeEndEventListener:function(e,t){!function(e,t,n){e.removeEventListener(t,n,!1)}(e,P,t)}},M=n.p+"static/media/index.998ec8ce.less",L=["children","component"],q=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(m.a)(this,n),(o=t.call(this,e)).startAnimate=function(){var e=o.props.name,t=c.a.findDOMNode(Object(D.a)(o)),n=M["saas-".concat(e,"in")];o.setState({style:n,animated:!0}),I.support&&I.addEndEventListener(t,o.done)},o.done=function(){o.setState({style:"",animated:!1})},o.getClass=function(){var e=o.props.children,t=o.state,n=t.animated,_=t.style,r=[e.props.className,_];return n&&r.push(M.animated),r.join(" ")},o.state={style:"",animated:!1},o}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.startAnimate()}},{key:"componentWillUnmount",value:function(){var e=c.a.findDOMNode(this);I.support&&I.removeEndEventListener(e,this.done)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.component,o=Object(C.a)(e,L),_=this.getClass(),r=s.a.cloneElement(s.a.Children.only(t),Object(u.a)(Object(u.a)({},o),{},{className:this.getClass()}));return n?Object(y.jsx)("div",{className:_,children:r}):r}}]),n}(a.Component);q.defaultProps={name:"fade",component:!1};var U=function(){return Object(y.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"60vh"},children:Object(y.jsx)(g.a,{spinning:!0})})},A=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(m.a)(this,n),(o=t.call(this,e)).LoadingComponent=void 0,o.mounted=void 0,o.LoadingComponent=e.LoadingComponent||U,o.state={AsyncComponent:null},o.load(),o}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"load",value:function(){var e=this;(0,this.props.component)().then((function(t){var n=t.default||t;e.mounted&&e.setState({AsyncComponent:n})}))}},{key:"render",value:function(){var e=this.state.AsyncComponent,t=this.LoadingComponent;return e?Object(y.jsx)(q,{component:!0,children:Object(y.jsx)(e,Object(u.a)({},this.props))}):Object(y.jsx)(t,Object(u.a)({},this.props))}}]),n}(a.Component),B=(n(469),n(470),n(471),[{name:"\u57fa\u7840\u6570\u636e",path:"/basic",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,486))}},{name:"\u6d4b\u8bd5\u4e2d",path:"/testing",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,487))}}]);function R(){var e=window.__POWERED_BY_QIANKUN__?"/tensorflow/":"/";return Object(y.jsx)(l.a,{basename:e,children:Object(y.jsx)(x,{children:Object(y.jsxs)(p.d,{children:[Object(y.jsx)(p.b,{exact:!0,name:"iframe-script-runner",path:"/iframe",component:d.a}),B.map((function(e){var t=e.path,n=e.component;return Object(y.jsx)(p.b,{exact:!0,path:t,component:function(e){return Object(y.jsx)(A,Object(u.a)({component:n},e))}},t)})),Object(y.jsx)(p.a,{exact:!0,from:"/",to:B[0].path})]})})})}function W(e){var t=e.container;c.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(R,{})}),t?t.querySelector("#root"):document.querySelector("#root"))}function K(){return T.apply(this,arguments)}function T(){return(T=Object(r.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Editor[react17] react app bootstraped");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return N.apply(this,arguments)}function N(){return(N=Object(r.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Editor[react17] props from main framework",t),W(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return F.apply(this,arguments)}function F(){return(F=Object(r.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.container,c.a.unmountComponentAtNode(n?n.querySelector("#root"):document.querySelector("#root"));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,484)).then((function(t){var n=t.getCLS,o=t.getFID,_=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),_(e),r(e),a(e)}))})(),window.__POWERED_BY_QIANKUN__||W({})}},[[473,2,3]]])}));