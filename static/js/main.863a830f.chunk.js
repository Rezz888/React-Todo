(this["webpackJsonplambda-todo"]=this["webpackJsonplambda-todo"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(7),l=a.n(c),r=a(8),m=a(5),d=a(1),i=a(2),s=a(4),u=a(3),p=function(t){return o.a.createElement("div",{className:"item".concat(t.todo.completed?" completed":""),onClick:function(){return t.toggleItem(t.todo.id)}},o.a.createElement("p",null,t.todo.task))},h=function(t){return o.a.createElement("div",{className:"todo-list"},t.todoData.map((function(e){return o.a.createElement(p,{key:e.id,todo:e,toggleItem:t.toggleItem})})),o.a.createElement("button",{className:"clear-btn",onClick:t.clearItem},"CLEAR"))},b=(a(13),function(t){Object(s.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(d.a)(this,a),(t=e.call(this)).handleChange=function(e){t.setState({item:e.target.value}),console.log(e.target.name)},t.submitItem=function(e){e.preventDefault(),t.props.addItem(t.state.item),t.setState({item:""})},t.state={item:""},t}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{className:"add-task",onSubmit:this.submitItem},o.a.createElement("input",{type:"text",placeholder:"Enter a task",name:"item",value:this.state.item,onChange:this.handleChange}),o.a.createElement("button",{className:"add"},"Add"))}}]),a}(o.a.Component)),f=[{task:"Organize Garage",id:1528817077286,completed:!1},{task:"Feeding the baby",id:1528817084358,completed:!1},{task:"Finish Project",id:1528817084359,completed:!1}],g=function(t){Object(s.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(d.a)(this,a),(t=e.call(this)).toggleItem=function(e){console.log(e),t.setState({todoData:t.state.todoData.map((function(t){return e===t.id?Object(m.a)(Object(m.a)({},t),{},{completed:!t.completed}):t}))})},t.addItem=function(e){var a={task:e,id:Date.now(),completed:!1};t.setState({todoData:[].concat(Object(r.a)(t.state.todoData),[a])})},t.clearItem=function(e){e.preventDefault(),t.setState({todoData:t.state.todoData.filter((function(t){return!t.completed}))})},t.state={todoData:f},t}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",null," Todo App!"),o.a.createElement(b,{addItem:this.addItem})),o.a.createElement(h,{todoData:this.state.todoData,toggleItem:this.toggleItem,clearItem:this.clearItem}))}}]),a}(o.a.Component);l.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.863a830f.chunk.js.map