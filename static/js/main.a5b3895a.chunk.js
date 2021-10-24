(this["webpackJsonptest-trinity-frontend"]=this["webpackJsonptest-trinity-frontend"]||[]).push([[0],{74:function(n,e,t){},75:function(n,e,t){"use strict";t.r(e);var r,c,i,a,s,o,u,p,d,l=t(1),x=t(22),j=t.n(x),h=t(24),b=t(16),f=t(18),O=t(4),m=t(5),g=t(6),v=g.a.div(r||(r=Object(m.a)(["\n    width: 100vw;\n    height: 100vh;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),w=t(7),y=t.n(w),E=t(13),S=t(19),k=g.a.div(c||(c=Object(m.a)(["\n    padding: 10px;\n    max-height: 100%;\n    width: 100%;\n    max-width: 420px;\n\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n\n    position: relative;\n\n    @media(max-width: 420px){\n        flex-direction: row;\n    }\n\n    .logo {\n        font-size: 24px;\n        margin: 10px;\n        text-align: center;\n        text-decoration: none;\n    }\n"]))),_=g.a.input(i||(i=Object(m.a)(["\n    background-color: #2E2F45;\n\n    width: 100%;\n    max-width: 240px;\n    min-height: 40px;\n    padding: 0px 5px;\n\n    border-radius: 10px;\n    border-style: none;\n\n    font-size: 14px;\n    font-weight: bold;\n    text-align: center;\n"]))),T=t(2),N=function(n){var e=n.placeholder,t=Object(l.useState)(""),r=Object(S.a)(t,2),c=r[0],i=r[1],a=Object(O.f)(),s=function(){var n=Object(E.a)(y.a.mark((function n(e){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:13===e.keyCode&&(i(""),a.push("/user/".concat(c)));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(T.jsxs)(k,{children:[Object(T.jsxs)(f.b,{to:"/",className:"logo",children:[Object(T.jsx)("b",{children:"Github"})," ",Object(T.jsx)("i",{children:"Search"})]}),Object(T.jsx)(_,{placeholder:e,value:c,onChange:function(n){i(n.target.value)},onKeyDown:s})]})},R=function(){return Object(T.jsx)(v,{children:Object(T.jsx)(N,{placeholder:"Enter with your github username"})})},I=g.a.div(a||(a=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n\n    .loading {\n        width: 100vw;\n        height: calc(100vh - 70px);\n\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n"]))),z=g.a.div(s||(s=Object(m.a)(["\n    height: 50px;\n\n    display: flex;\n    justify-content: center;\n\n    @media(max-width: 420px){\n        height: 120px;\n    }\n"]))),F=g.a.div(o||(o=Object(m.a)(["\n    display: flex;\n    justify-content: center;\n    @media(max-width: 580px){\n        flex-wrap: wrap;\n    }\n\n    > section {\n        background-color: #2E2F45;\n\n        width: 100%;\n        max-width: 300px;\n        min-width: 240px;\n        max-height: 240px;\n        @media(max-width: 580px){\n            max-width: 400px;\n        }\n\n        padding: 15px;\n        margin: 10px;\n        border-radius: 5px;\n\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n\n        > img {\n            max-width: 100px;\n            border-radius: 50%;\n        }\n    }\n\n    .infos > div  {\n        margin: 5px;\n        \n        display: flex;\n        align-items: center;\n     \n        > p {\n            margin-left: 5px;\n        }\n    }\n"]))),B=g.a.div(u||(u=Object(m.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n"]))),C=g.a.a(p||(p=Object(m.a)(["\n    background-color: #2E2F45;\n\n    width: 100%;\n    min-width: 300px;\n    max-width: 400px;\n    height: 70px;\n\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    justify-content: center;\n\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n\n    text-decoration: none;\n\n    transition-duration: 0.25s;\n    :hover {\n        filter: brightness(115%);\n    }\n\n    > div {\n        display: flex;\n        align-items: center;\n        margin: 5px 0;\n        > p {\n            margin-left: 5px;\n        }\n    }\n"]))),J=t(43),P=function(n){var e=n.repository;return Object(T.jsxs)(C,{href:e.html_url,target:"_blank",children:[Object(T.jsx)("p",{children:Object(T.jsx)("b",{children:e.name})}),Object(T.jsxs)("div",{children:[Object(T.jsx)(J.a,{}),Object(T.jsx)("p",{children:e.stargazers_count})]})]})},U=t(44),A=t(28),D=function(){var n=Object(b.c)((function(n){return n.user})),e=Object(b.c)((function(n){return n.repositories}));return Object(T.jsxs)(F,{children:[Object(T.jsxs)("section",{children:[Object(T.jsx)("img",{src:n.avatar_url,alt:n.name}),Object(T.jsxs)("p",{style:{margin:"10px"},children:["@",n.login]}),Object(T.jsxs)("div",{className:"infos",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)(U.a,{}),Object(T.jsx)("p",{children:n.location})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)(A.a,{}),Object(T.jsx)("p",{children:n.public_repos})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)(A.b,{}),Object(T.jsx)("p",{children:n.followers})]})]})]}),Object(T.jsx)(B,{children:e.map((function(n,e){return Object(T.jsx)(P,{repository:n},e)}))})]})},G=t(45),K=t.n(G),q=function(){return Object(T.jsx)(K.a,{type:"spinningBubbles",color:"#ccc",height:30,width:30})},H=g.a.div(d||(d=Object(m.a)(["\n    width: 100vw;\n    height: calc(100vh - 70px);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    > img, h1 {\n        opacity: 0.5;\n        margin-top: -30px;\n    }\n\n    > img {\n        width: 100%;\n        max-width: 240px;\n    }\n"]))),L=t.p+"static/media/no-found.73fa0cf5.png",M=function(){return Object(T.jsxs)(H,{children:[Object(T.jsx)("img",{src:L,alt:"No found"}),Object(T.jsx)("h1",{children:"No found"})]})},Q=t(23),V=t.n(Q),W=function(){var n=Object(E.a)(y.a.mark((function n(e){var t,r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="https://api.github.com/users/".concat(e),n.next=4,V.a.get(t);case 4:return r=n.sent,n.abrupt("return",r);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",{status:n.t0});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),X=W,Y=function(){var n=Object(E.a)(y.a.mark((function n(e){var t,r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="https://api.github.com/users/".concat(e,"/repos"),n.next=4,V.a.get(t);case 4:return r=n.sent,n.abrupt("return",r);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",{status:n.t0});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),Z=Y,$=function(){var n=Object(E.a)(y.a.mark((function n(e){var t,r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,X(e);case 3:return t=n.sent,n.next=6,Z(e);case 6:if(r=n.sent,200!==t.status||200!==r.status){n.next=11;break}return n.abrupt("return",{status:200,user:t.data,repositories:r.data});case 11:return n.abrupt("return",{status:"error"});case 12:n.next=17;break;case 14:return n.prev=14,n.t0=n.catch(0),n.abrupt("return",{status:"error "});case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e){return n.apply(this,arguments)}}(),nn=$,en=function(){var n=Object(l.useState)(!1),e=Object(S.a)(n,2),t=e[0],r=e[1],c=Object(l.useState)(!0),i=Object(S.a)(c,2),a=i[0],s=i[1],o=Object(O.g)().username,u=Object(b.b)();return Object(l.useEffect)((function(){var n=function(){var n=Object(E.a)(y.a.mark((function n(){var e;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),n.next=3,nn(o);case 3:200===(e=n.sent).status?(u({type:"SET_USER",payload:e.user}),u({type:"SET_REPOSITORIES",payload:e.repositories}),s(!1)):s(!0),r(!1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[o,u]),Object(T.jsxs)(I,{children:[Object(T.jsx)(z,{children:Object(T.jsx)(N,{placeholder:"Trinity Solu\xe7\xf5es"})}),t&&Object(T.jsx)("div",{className:"loading",children:Object(T.jsx)(q,{})}),a?Object(T.jsx)(M,{}):Object(T.jsx)(D,{})]})};var tn=function(){return Object(T.jsx)(f.a,{className:"App",children:Object(T.jsxs)(O.c,{children:[Object(T.jsx)(O.a,{exact:!0,path:"/",children:Object(T.jsx)(R,{})}),Object(T.jsx)(O.a,{path:"/user/:username",children:Object(T.jsx)(en,{})})]})})},rn=(t(74),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return"SET_USER"===e.type?e.payload:n}),cn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return"SET_REPOSITORIES"===e.type?e.payload:n},an=Object(h.a)({user:rn,repositories:cn}),sn=Object(h.b)(an);j.a.render(Object(T.jsx)(b.a,{store:sn,children:Object(T.jsx)(tn,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.a5b3895a.chunk.js.map