(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{19:function(e,t,n){e.exports=n(27)},24:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(13),o=n.n(r),s=(n(24),n(14)),c=n(15),l=n(17),u=n(16),h=n(5),d=n(18);var m=function(e){return i.a.createElement("div",{id:"editorContainer"},i.a.createElement("textarea",{id:"editor",onChange:e.onChange,value:e.value}))},p=n(6),v=n.n(p);var g=function(e){return i.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:v()(e.input)}})},b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={input:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({input:"\n  # This is an h1 tag \n  ## This is an h2 tag \n  **This text will be bold**\n  \n  `<h1>` Inline Code\n  \n  > This is a blockquote\n  > This is a blockquote.\n  \n  ```\n        if (ThisIsBlockOfCode){\n          return true\n        }\n  ```\n  * Item 1\n  * Item 2\n  \n  [This is a link to FreeCodeCamp](https://www.freecodecamp.org/)\n  \n  ![happy face image](https://image.shutterstock.com/image-vector/emoticon-dancing-music-260nw-336486941.jpg)\n  "})}},{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){return v.a.setOptions({breaks:!0}),i.a.createElement("div",{id:"container"},i.a.createElement("div",{className:"titles",id:"editor-title"},"Editor"),i.a.createElement("div",{className:"titles",id:"preview-title"},"Preview"),i.a.createElement(m,{onChange:this.handleChange,value:this.state.input}),i.a.createElement(g,{input:this.state.input}))}}]),t}(i.a.Component);o.a.render(i.a.createElement(b,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8023b6af.chunk.js.map