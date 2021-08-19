(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{13:function(n){n.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},14:function(n){n.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},16:function(n){n.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},21:function(n,t,e){},29:function(n,t,e){"use strict";e.r(t);e(1);var a,c,i,r,s,o,d,l,b,p=e(9),u=e.n(p),x=(e(21),e(2)),m=e(3),j=m.a.ul(a||(a=Object(x.a)(["\n  display: flex;\n  text-align: center;\n  background-color: #f3f6f9;\n\n  .item {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    display: flex;\n    flex-direction: column;\n    width: calc(100% / 3);\n    border: 1px solid #e7ecf2;\n  }\n  .label {\n    padding-bottom: 5px;\n  }\n  .quantity {\n    font-weight: 900;\n  }\n"]))),g=e(0),f=function(n){var t=n.stats;return Object(g.jsxs)(j,{children:[Object(g.jsxs)("li",{className:"item",children:[Object(g.jsx)("span",{className:"label",children:"Followers"}),Object(g.jsx)("span",{className:"quantity",children:t.followers})]}),Object(g.jsxs)("li",{className:"item",children:[Object(g.jsx)("span",{className:"label",children:"Views"}),Object(g.jsx)("span",{className:"quantity",children:t.views})]}),Object(g.jsxs)("li",{className:"item",children:[Object(g.jsx)("span",{className:"label",children:"Likes"}),Object(g.jsx)("span",{className:"quantity",children:t.likes})]})]})},h=m.a.div(c||(c=Object(x.a)(["\n  width: 250px;\n  margin-right: auto;\n  margin-left: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  padding-top: 20px;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  overflow: hidden;\n  .description {\n    text-align: center;\n    color: #8e9ba8;\n  }\n  .avatar {\n    width: 50%;\n    border-radius: 50%;\n    background-color: purple;\n    margin-right: auto;\n    margin-left: auto;\n    margin-bottom: 10px;\n  }\n  .name {\n    color: #1d2c3f;\n    font-size: 22px;\n    font-weight: 700;\n    margin-bottom: 10px;\n  }\n  .tag {\n    margin-bottom: 6px;\n  }\n  .location {\n    margin-bottom: 20px;\n  }\n"]))),O=function(n){var t=n.user,e=t.avatar,a=t.name,c=t.tag,i=t.location;return Object(g.jsxs)(h,{children:[Object(g.jsxs)("div",{className:"description",children:[Object(g.jsx)("img",{src:e,alt:a,className:"avatar"}),Object(g.jsx)("p",{className:"name",children:a}),Object(g.jsxs)("p",{className:"tag",children:["@",c]}),Object(g.jsx)("p",{className:"location",children:i})]}),Object(g.jsx)(f,{stats:t.stats})]})},y=m.a.ul(i||(i=Object(x.a)(["\n  display: flex;\n  color: white;\n\n  .item {\n    width: calc(100% / 5);\n    display: flex;\n    flex-direction: column;\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n  .label {\n  }\n  .percentage {\n  }\n"]))),w=function(n){var t=n.statisticalData,e=function(){for(var n=[],t=0;t<3;t++)n.push(parseInt(256*Math.random()));return n};return Object(g.jsx)(y,{children:t.map((function(n){var t=n.id,a=n.label,c=n.percentage;return Object(g.jsxs)("li",{style:{backgroundColor:"rgb(".concat(e(),")")},className:"item",children:[Object(g.jsx)("span",{className:"label",children:a}),Object(g.jsx)("span",{className:"percentage",children:c})]},t)}))})},v=m.a.section(r||(r=Object(x.a)(["\n  width: 250px;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  .title {\n    font-size: 30px;\n    line-height: 2;\n    font-weight: 700;\n    color: #545557;\n    display: block;\n  }\n"]))),N=function(n){var t=n.title,e=n.statisticalData;return Object(g.jsxs)(v,{children:[Object(g.jsx)("h2",{className:"title",children:t||""}),Object(g.jsx)(w,{statisticalData:e})]})},k=e(13),D=e(14),U=e(15),J=e.n(U),S=e(7),C=m.a.li(s||(s=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n  .status {\n    margin-right: 10px;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n  }\n  .avatar {\n    background-color: purple;\n    border-radius: 5px;\n  }\n  .name {\n    margin-left: 10px;\n    font-weight: 700px;\n    font-size: 20px;\n  }\n  .green {\n    background-color: green;\n  }\n  .red {\n    background-color: red;\n  }\n"]))),G=function(n){var t=n.isOnline,e=n.avatar,a=n.name;return Object(g.jsxs)(C,{children:[Object(g.jsx)("span",{className:"status ".concat(t?"green":"red"),children:t}),Object(g.jsx)("img",{className:"avatar",src:e,alt:"",width:"48"}),Object(g.jsx)("p",{className:"name",children:a})]})},L=m.a.ul(o||(o=Object(x.a)(["\n  background-color: white;\n  width: 250px;\n  padding: 10px;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),q=function(n){var t=n.friends;return Object(g.jsx)(L,{children:t.map((function(n){var t=n.id,e=n.isOnline,a=n.avatar,c=n.name;return Object(g.jsx)(G,{isOnline:e,avatar:a,name:c},t)}))})},A=m.a.tr(d||(d=Object(x.a)(["\n  color: #797d80;\n\n  &:nth-child(2n) {\n    background-color: #ecf1f4;\n  }\n  td {\n    padding-bottom: 4px;\n    padding-top: 4px;\n  }\n  td:not(:last-child) {\n    border-right: 1px solid #e0e5e8;\n  }\n"]))),M=function(n){var t=n.type,e=n.amount,a=n.currency;return Object(g.jsxs)(A,{children:[Object(g.jsx)("td",{children:t}),Object(g.jsx)("td",{children:e}),Object(g.jsx)("td",{children:a})]})},P=m.a.tbody(l||(l=Object(x.a)(["\n  text-align: center;\n"]))),T=function(n){var t=n.transactions;return Object(g.jsx)(P,{children:t.map((function(n){return Object(g.jsx)(M,{type:n.type,amount:n.amount,currency:n.currency},n.id)}))})},z=m.a.table(b||(b=Object(x.a)(["\n  background-color: white;\n  width: 500px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid #e0e5e8;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  thead {\n    background-color: #00bcd5;\n    color: white;\n  }\n  th {\n    padding-top: 5px;\n    padding-bottom: 5px;\n    font-size: 22px;\n  }\n  th:not(:last-child) {\n    border-right: 1px solid white;\n  }\n"]))),R=function(n){var t=n.transactions;return Object(g.jsxs)(z,{cellSpacing:"0",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Type"}),Object(g.jsx)("th",{children:"Amount"}),Object(g.jsx)("th",{children:"Currency"})]})}),Object(g.jsx)(T,{transactions:t})]})},I=e(16),K=function(){return Object(g.jsxs)("main",{children:[Object(g.jsx)(O,{user:k}),Object(g.jsx)(N,{title:"Upload stats",statisticalData:S}),Object(g.jsx)(N,{statisticalData:S}),Object(g.jsx)(q,{friends:D}),Object(g.jsx)(R,{transactions:I})]})};O.propTypes={user:J.a.object},u.a.render(Object(g.jsx)(K,{}),document.getElementById("root"))},7:function(n){n.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')}},[[29,1,2]]]);
//# sourceMappingURL=main.d0acc2ba.chunk.js.map