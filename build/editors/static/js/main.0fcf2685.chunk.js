!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["sub-editors-main"]=t():e["sub-editors-main"]=t()}(window,(function(){return(window["webpackJsonp_sub-editors"]=window["webpackJsonp_sub-editors"]||[]).push([[1],{243:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(14),_Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(15),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(45),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__),tf=__webpack_require__(471);function addListener(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}var Iframe=function(_React$Component){Object(_Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Iframe,_React$Component);var _super=Object(_Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Iframe);function Iframe(){var _this;Object(_Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Iframe);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.listener=void 0,_this.componentDidMount=function(){_this.listener=addListener(window,"message",(function(e){var result="";if("string"===typeof e.data){try{result=eval(e.data)}catch(e){result="eval() threw an exception:"+e.message}if(result)try{console.log(result)}catch(e){console.log(e)}}}))},_this.componentWillUnmount=function(){var e;return null===(e=_this.listener)||void 0===e?void 0:e.destroy()},_this}return Object(_Users_zhaozeqing_Desktop_some_time_qiankun_demo_sub_editors_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Iframe,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("iframe",{allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads",title:"sandbox",id:"sandbox",style:{display:"none"}})}}]),Iframe}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=Iframe},366:function(e,t,n){window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},372:function(e,t){},373:function(e,t){},381:function(e,t){},384:function(e,t){},385:function(e,t){},386:function(e,t){},472:function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return q})),n.d(t,"mount",(function(){return A})),n.d(t,"unmount",(function(){return B}));var _=n(5),r=n.n(_),o=n(12),a=n(1),s=n.n(a),i=n(73),c=n.n(i),u=(n(366),n(196)),l=n(264),p=n(61),d=n(243),m=n(6),b=n(11),h=n(14),f=n(15),O=n(116),j=n(359),E=n.n(j),k=n(475),w=n(45),x=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var _=arguments.length,r=new Array(_),o=0;o<_;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!1,current:window.location.pathname.replace(/^.*?(\/\w+)$/,"$1")||I[0].path},e.componentDidMount=function(){e.props.history.listen((function(t,n){"REPLACE"===n&&e.setState({current:t.pathname})}))},e.handleClick=function(t){e.setState({current:t.key})},e.toggle=function(){var t=e.state.collapsed;e.setState({collapsed:!t})},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state.current;return Object(w.jsxs)(k.a,{onClick:this.handleClick,selectedKeys:[e],mode:"horizontal",children:[I.map((function(e){return Object(w.jsx)(k.a.Item,{children:Object(w.jsx)(l.b,{to:e.path,children:e.name})},e.path)})),Object(w.jsxs)(k.a.SubMenu,{title:Object(w.jsx)("span",{className:"submenu-title-wrapper",children:"Navigation Three - Submenu"}),children:[Object(w.jsxs)(k.a.ItemGroup,{title:"Item 1",children:[Object(w.jsx)(k.a.Item,{children:"Option 1"},"setting:1"),Object(w.jsx)(k.a.Item,{children:"Option 2"},"setting:2")]}),Object(w.jsxs)(k.a.ItemGroup,{title:"Item 2",children:[Object(w.jsx)(k.a.Item,{children:"Option 3"},"setting:3"),Object(w.jsx)(k.a.Item,{children:"Option 4"},"setting:4")]})]},"x"),Object(w.jsx)(k.a.Item,{children:Object(w.jsx)("a",{href:"https://blog.csdn.net/qq_36571602",target:"_blank",rel:"noopener noreferrer",children:"\u6211\u7684\u535a\u5ba2"})},"blog")]})}}]),n}(s.a.Component),g=Object(p.g)(x),y=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(w.jsxs)(O.a,{locale:E.a,children:[Object(w.jsx)(g,{}),e,Object(w.jsx)(d.a,{})]})}}]),n}(s.a.Component),v=n(474),D=function(){return Object(w.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"60vh"},children:Object(w.jsx)(v.a,{spinning:!0})})},C=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var _;return Object(m.a)(this,n),(_=t.call(this,e)).LoadingComponent=void 0,_.mounted=void 0,_.LoadingComponent=e.LoadingComponent||D,_.state={AsyncComponent:null},_.load(),_}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"load",value:function(){var e=this;(0,this.props.component)().then((function(t){var n=t.default||t;e.mounted&&e.setState({AsyncComponent:n})}))}},{key:"render",value:function(){var e=this.state.AsyncComponent,t=this.LoadingComponent;return e?Object(w.jsx)(e,Object(u.a)({},this.props)):Object(w.jsx)(t,Object(u.a)({},this.props))}}]),n}(a.Component),I=(n(468),n(469),n(470),[{name:"\u57fa\u7840\u6570\u636e",path:"/basic",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,485))}},{name:"\u6d4b\u8bd5\u4e2d",path:"/testing",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,486))}}]);function P(){var e=window.__POWERED_BY_QIANKUN__?"/tensorflow/":"/";return Object(w.jsx)(l.a,{basename:e,children:Object(w.jsx)(y,{children:Object(w.jsxs)(p.d,{children:[Object(w.jsx)(p.b,{exact:!0,name:"iframe-script-runner",path:"/iframe",component:d.a}),I.map((function(e){var t=e.path,n=e.component;return Object(w.jsx)(p.b,{exact:!0,path:t,component:function(e){return Object(w.jsx)(C,Object(u.a)({component:n},e))}},t)})),Object(w.jsx)(p.a,{exact:!0,from:"/",to:I[0].path})]})})})}function M(e){var t=e.container;c.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(P,{})}),t?t.querySelector("#root"):document.querySelector("#root"))}function q(){return U.apply(this,arguments)}function U(){return(U=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Editor[react17] react app bootstraped");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return L.apply(this,arguments)}function L(){return(L=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Editor[react17] props from main framework",t),M(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return R.apply(this,arguments)}function R(){return(R=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.container,c.a.unmountComponentAtNode(n?n.querySelector("#root"):document.querySelector("#root"));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,483)).then((function(t){var n=t.getCLS,_=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),_(e),r(e),o(e),a(e)}))})(),window.__POWERED_BY_QIANKUN__||M({})}},[[472,2,3]]])}));