"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{527:function(t,n,e){e.d(n,{L6:function(){return r},Ai:function(){return o},y:function(){return u},oO:function(){return i}});var c="https://api.themoviedb.org/3/",a="api_key=bb0c5b52be3456598a7badc1793c41c3";function r(){return fetch("".concat(c,"trending/all/day?").concat(a))}function o(t){return fetch("".concat(c,"search/movie?").concat(a,"&language=en-US&page=1&query=").concat(t))}function u(t){return fetch("".concat(c,"movie/").concat(t,"/credits?").concat(a,"&language=en-US"))}function i(t){return fetch("\n".concat(c,"movie/").concat(t,"/reviews?").concat(a,"&language=en-US&page=1"))}},76:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var c=e(885),a=e(871),r=e(791),o=e(527),u="Cast_profileFoto__eEkMO",i="Cast_gallery__6ZDHS",s=e(184);function l(){var t=(0,a.UO)(null).id,n=(0,r.useState)([]),e=(0,c.Z)(n,2),l=e[0],f=e[1];return(0,r.useEffect)((function(){(0,o.y)(t).then((function(t){return t.json()})).then((function(t){f(t.cast)}))}),[t]),console.log(l),(0,s.jsx)("ul",{className:i,children:l.map((function(t){var n=t.id,e=t.name,c=t.character,a=t.profile_path;return(0,s.jsxs)("li",{children:[a?(0,s.jsx)("img",{className:u,src:"https://image.tmdb.org/t/p/w200".concat(a),alt:e}):(0,s.jsx)("img",{className:u,src:"https://www.hostpapa.com/blog/blog/wp-content/uploads/2019/05/image5.png",alt:e}),(0,s.jsx)("h3",{children:e}),(0,s.jsxs)("p",{children:["Character: ",c]})]},n)}))})}}}]);
//# sourceMappingURL=76.5c0bd799.chunk.js.map