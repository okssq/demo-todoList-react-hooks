(this["webpackJsonptodo-list-of-react-hooks"]=this["webpackJsonptodo-list-of-react-hooks"]||[]).push([[0],[,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFUklEQVR4Xu2Zf2gbZRjHn+eSKsUighP9Q/8Y6D8qqFDE/tEkVdzWu6ZLMnttKuJkgwkTNkVxILiooDiFjimiU6GrrmJDe1d21/1gtnfpRrU4VKYyUBSGA0UUxUpnf9wj1zbaXJP7kdw1b9bmz9zzPu/387n3Pd7kENb4B9c4P6wLWF8Ba9zA+hYIcgHEksqdmtT2dZBzVNo7sBUQS6h3E0I/kTGQk+OZSoMGNT4QAbFtaiMZ0A8At5nBiYwXWJXgu4BYauQ+AuoHgo3L7xqrEnwVEN2qNAPHHQWgWyxL9jxyhqgNxi8EtZTL7WsrIJpUOgCwQ5cE0WmCaEppAUJz2d9UUIvwBYZCopbd8r1Tj2pcLylgCX5gKVTWTkI0qT4IsLDnNxRAEHxOdWExl938Yym4g5P/0OqAo7b33qtarHMVFWCBz48pKiGaGGkFJBP+OkvzT+fC851ns+0X7QBrSYDJUSAhklLakRb2fEPBAw/gbDhsdI5m45ec7i6TAszQJVbBfxIiSSWFsLDnr7bA61wYurSs8LMTvHmdWQFOEgAgBQAhC+SoEcau8Sz/qxt45gU4SLAynpoJh9IT2S2/u4U363ompmNe6iupfbKpXnP1ELQW2WyHfOnxuvDf6dNZ8c9KAlZjrOuDUEkJiMcwNNWtZcWpagBUOqdrAUW3A6KM19antd6Wy5UGqdZ4TwKWS0CEwb823Jg+d7hxtlrh/ZjXs4C8hJa7hMFMBg0/QlSzR1kCqhnY77kDFRBNKC/OE6pnhoXP/A7uV7/ABEST6gEAeAYAfjLI2D4uxz/xK7SffQIREEkpbyDhE/8HpWkDMD0uCcN+hvejl+8Cokn1XQDYaQlncATimCwM+hHazx62Apo6Burr5hvac0P8x06TZjLEjX6l9iHgw5baWSQUNZmXnXpU43pJAc0dIzfgLHyASJsJaHtOajtSKuCmTSevmWmYO0IE2yw10wggapKglBp7cHJmbLXAXf8hEuk4uRFn5wYAoTEfjhB35Yb4w9awDyRPXz9Hl/sAkS+8RlNAnKjL/HE7QCZ/DkcSxzKI3P4iwffoknAo/30sNXIzEZkr435L7R9ERmdOjp9yurtMCjBDl5RA+Kwu8wdi7SdupdBcHwA2We78bwScmJP4USd48zqzAmwlAO0HwgQg3GOB/IUD7ByTeN0NPPMC7CVYEBEuIXFdmtR6xi38ogAGH4JWAJtnwmIpwUVArkuXWie8wLNQ6/ogZCPhB4OM9Lgcn2QByGsG1wJKbIfvOKL0mNx2zuvErNR7ElAogS4gYVqThS9ZgSknh2cBeQlA3GBuWDhfzqQsjSlLAEsAlWYJVEAkoYo5Wci/YK00ayDjAxMQSandSHDU+j4xEIoKmgYiIJJUHkXA3mW5bF+vV5C/4qG+C4gklB2I+F6RZExKcBTQvHXk9vFh/ls3qiMpdRcSvF2k9iNdErrd9FjtGlsBi6e/0EOGAaKThFhS3U0AbxYB+FCXhEdKgTH7crTw6Ivf2EmIJZS9hNizAhKhVx8SHrO7q0z+HC5+7i8uIZZUnibA16yQRPB+Thasf46ucMGkAHPfcxwMANAdhYkLJcSS6j4CeMVKhQDvaJLwuJv9zKQAM7iThBBSihBeWgFJ8JYuC7vdwJs1zApwkrBydSwgH9IlYY9beOYF2EtYgdmjS8JTXuBZqHU8B7iRQICv5yTefA9Ycx9XAuwkIOCrmsTvqznypcCuBRSXQC/rUttztQpv5vYkoEACGUO63PZ8LcOXJSAvweloXCtiPK+AWgFzm3NdgFtTV2rd+gq4Uu+sW641vwL+BcrALl95dLRFAAAAAElFTkSuQmCC"},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(4),r=a.n(o),i=a(1),l=(a(11),a(5)),u=a.n(l);var s=function(){return c.a.createElement("header",null,c.a.createElement("img",{src:u.a,className:"logo"}),c.a.createElement("h1",null,"TodoList Of React Hooks"))},d=a(2);var A=function(e){var t=e.item,a=t.id,o=t.done,r=t.txt,l=e.data,u=e.setData,s=Object(n.useState)(!1),A=Object(i.a)(s,2),m=A[0],E=A[1],f=Object(n.useState)(""),g=Object(i.a)(f,2),k=g[0],h=g[1],p=Object(n.useRef)(null),v=function(e){if(console.log("valu",k,"txt",r,"ID",e),k.trim()&&k.trim()!==r){for(var t=0;t<l.length;t++)if(l[t].id===e){l[t].txt=k.trim();break}console.log("data",l),u(Object(d.a)(l))}E(!1),h("")};return Object(n.useEffect)((function(){m&&p.current.focus()}),[m]),c.a.createElement("div",{className:"item"+(m?" editing":"")},c.a.createElement("div",{className:"item-left"},c.a.createElement("input",{className:"checkbox",type:"checkbox",checked:o,onChange:function(){!function(e){for(var t=0;t<l.length;t++)if(l[t].id===e){l[t].done=!l[t].done;break}u(Object(d.a)(l))}(a)}}),m?c.a.createElement("input",{ref:p,className:"item-input",type:"text",value:k,onChange:function(e){h(e.target.value)},onBlur:function(){v(a)},onKeyDown:function(e){!function(e,t){e.persist(),13===e.keyCode&&v(t)}(e,a)}}):c.a.createElement("div",{className:"txt"+(o?" done":""),onDoubleClick:function(e){E(!m),h(r)}},r)),c.a.createElement("span",{className:"pointer",onClick:function(){!function(e){u(l.filter((function(t){return t.id!==e})))}(a)}},"X"))};var m=function(e){var t=e.data,a=e.setData;return t.length?c.a.createElement("div",{className:"todos"},t.map((function(e){return c.a.createElement(A,{key:e.id,item:e,data:t,setData:a})}))):""};var E=function(e){var t=e.data,a=e.setData,o=Object(n.useState)(""),r=Object(i.a)(o,2),l=r[0],u=r[1];return c.a.createElement("div",{className:"add-todo"},c.a.createElement("input",{className:"input-add",placeholder:"\u8bf7\u8f93\u5165\u5f85\u529e\u4e8b\u9879",value:l,onChange:function(e){u(e.target.value)},onKeyDown:function(e){!function(e){if(e.persist(),13===e.keyCode)if(e.target.value.trim()){var n=e.target.value.trim(),c={id:Date.now(),done:!1,txt:n},o=Object(d.a)(t);o.unshift(c),a(o),u("")}else alert("\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a\uff01")}(e)}}))};var f=function(e){var t=e.data,a=e.setData,n=t.filter((function(e){return e.done})),o=t.filter((function(e){return!e.done}));return c.a.createElement("div",{className:"todo-state"},c.a.createElement("div",{className:"state-item"},o.length?[c.a.createElement("strong",{key:1},o.length," "),c.a.createElement("span",{key:2},"\u9879\u5f85\u5b8c\u6210")]:""),c.a.createElement("div",{className:"state-item pointer",onClick:function(){a(t.filter((function(e){return!e.done})))}},n.length?[c.a.createElement("span",{key:3},"\u6e05\u9664"),c.a.createElement("strong",{key:4}," ",n.length," "),c.a.createElement("span",{key:5},"\u9879\u5df2\u5b8c\u6210\u4e8b\u9879")]:""))},g=[{id:0,done:!1,txt:"react hooks 1-13 vedeo"},{id:1,done:!0,txt:"\u52a8\u624b\u5199\u4e2atodoList"},{id:2,done:!1,txt:"\u751f\u547d\u5468\u671f\u7406\u89e3"},{id:3,done:!1,txt:"\u4e4b\u524d\u8bfe\u7a0b\u4e5f\u8fd8\u6ca1\u770b\u5b8c\u3002\u3002"}];var k=function(){var e=Object(n.useState)(g),t=Object(i.a)(e,2),a=t[0],o=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement(s,null),c.a.createElement(E,{data:a,setData:o}),c.a.createElement(m,{data:a,setData:o}),c.a.createElement(f,{data:a,setData:o}))};r.a.render(c.a.createElement(k,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.39ac39bd.chunk.js.map