"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[445],{527:function(e,n,t){t.d(n,{L6:function(){return c},Ai:function(){return o},y:function(){return i},oO:function(){return u}});var r="https://api.themoviedb.org/3/",a="api_key=bb0c5b52be3456598a7badc1793c41c3";function c(){return fetch("".concat(r,"trending/all/day?").concat(a))}function o(e){return fetch("".concat(r,"search/movie?").concat(a,"&language=en-US&page=1&query=").concat(e))}function i(e){return fetch("".concat(r,"movie/").concat(e,"/credits?").concat(a,"&language=en-US"))}function u(e){return fetch("\n".concat(r,"movie/").concat(e,"/reviews?").concat(a,"&language=en-US&page=1"))}},445:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(982),a=t(885),c=t(791),o=t(501),i="MoviesPage_gallery__PLz7r",u="MoviesPage_name__rHfeD",l="MoviesPage_card__JhZCa",s=t(527),f=t(184);function h(){var e=(0,o.lr)(),n=(0,a.Z)(e,2),t=n[0],h=n[1],d=t.get("query"),m=(0,c.useState)([]),p=(0,a.Z)(m,2),g=p[0],y=p[1],b=(0,c.useState)(!1),v=(0,a.Z)(b,2),j=v[0],x=v[1];(0,c.useEffect)((function(){if(d){x(!0),(0,s.Ai)(d).then((function(e){return e.json()})).then((function(e){y((0,r.Z)(e.results))})).catch((function(e){return e.message})).finally((function(){x(!1)}))}}),[d]);return(0,f.jsxs)("div",{children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h({query:e.currentTarget.elements.query.value}),console.log(e.currentTarget.elements.query.value)},children:[(0,f.jsx)("label",{children:(0,f.jsx)("input",{type:"text",name:"query",required:!0,placeholder:"Enter your search query"})}),(0,f.jsx)("button",{type:"submit",children:"Search"}),j&&(0,f.jsx)("h4",{children:"Loading..."})]}),0===g.length&&!j&&(0,f.jsx)("h4",{children:"Nothing found"}),(0,f.jsx)("div",{children:(0,f.jsx)("ul",{className:i,children:g.map((function(e){var n=e.title,t=e.id,r=e.backdrop_path;return n&&(0,f.jsxs)("li",{className:l,children:[r?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(r),alt:n}):(0,f.jsx)("img",{src:"https://www.hostpapa.com/blog/blog/wp-content/uploads/2019/05/image5.png",alt:n,width:"200px"}),(0,f.jsx)(o.rU,{className:u,to:"/movies/".concat(t),children:n})]},t)}))})})]})}},982:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(907);var a=t(181);function c(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=445.1bb0c7e9.chunk.js.map