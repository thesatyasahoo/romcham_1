(window["webpackJsonppurple-react-free"]=window["webpackJsonppurple-react-free"]||[]).push([[5],{158:function(e,a,t){e.exports=t.p+"static/media/circle.1541da91.svg"},328:function(e,a,t){e.exports=t.p+"static/media/img_1.3a82198a.jpg"},329:function(e,a,t){e.exports=t.p+"static/media/img_4.ea8a7a45.jpg"},330:function(e,a,t){e.exports=t.p+"static/media/img_2.1b4a771c.jpg"},331:function(e,a,t){e.exports=t.p+"static/media/img_3.573908af.jpg"},332:function(e,a,t){"use strict";var l=t(1),r=t(3),n=t(5),c=t.n(n),s=t(0),m=t.n(s),i=t(7),d=t(42),o=1e3;function u(e,a,t){var l=(e-a)/(t-a)*100;return Math.round(l*o)/o}function E(e,a){var t,n=e.min,s=e.now,i=e.max,d=e.label,o=e.srOnly,E=e.striped,g=e.animated,b=e.className,p=e.style,h=e.variant,v=e.bsPrefix,N=Object(r.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return m.a.createElement("div",Object(l.a)({ref:a},N,{role:"progressbar",className:c()(b,v+"-bar",(t={},t["bg-"+h]=h,t[v+"-bar-animated"]=g,t[v+"-bar-striped"]=g||E,t)),style:Object(l.a)({width:u(s,n,i)+"%"},p),"aria-valuenow":s,"aria-valuemin":n,"aria-valuemax":i}),o?m.a.createElement("span",{className:"sr-only"},d):d)}var g=m.a.forwardRef((function(e,a){var t=e.isChild,n=Object(r.a)(e,["isChild"]);if(n.bsPrefix=Object(i.b)(n.bsPrefix,"progress"),t)return E(n,a);var o=n.min,u=n.now,g=n.max,b=n.label,p=n.srOnly,h=n.striped,v=n.animated,N=n.bsPrefix,f=n.variant,C=n.className,y=n.children,w=Object(r.a)(n,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return m.a.createElement("div",Object(l.a)({ref:a},w,{className:c()(C,N)}),y?Object(d.b)(y,(function(e){return Object(s.cloneElement)(e,{isChild:!0})})):E({min:o,now:u,max:g,label:b,srOnly:p,striped:h,animated:v,bsPrefix:N,variant:f},a))}));g.displayName="ProgressBar",g.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1},a.a=g},339:function(e,a,t){"use strict";t.r(a),t.d(a,"Dashboard",(function(){return v}));var l=t(34),r=t(26),n=t(11),c=t(12),s=t(14),m=t(13),i=t(31),d=t(15),o=t(0),u=t.n(o),E=t(332),g=t(159),b=t(176),p=t.n(b);function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}var v=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){t.setState({startDate:e})},t.state={startDate:new Date,visitSaleData:{},visitSaleOptions:{scales:{yAxes:[{ticks:{beginAtZero:!0,display:!1,min:0,stepSize:20,max:80},gridLines:{drawBorder:!1,color:"rgba(235,237,242,1)",zeroLineColor:"rgba(235,237,242,1)"}}],xAxes:[{gridLines:{display:!1,drawBorder:!1,color:"rgba(0,0,0,1)",zeroLineColor:"rgba(235,237,242,1)"},ticks:{padding:20,fontColor:"#9c9fa6",autoSkip:!0},categoryPercentage:.5,barPercentage:.5}]},legend:{display:!1},elements:{point:{radius:0}}},trafficData:{},trafficOptions:{responsive:!0,animation:{animateScale:!0,animateRotate:!0},legend:!1},todos:[{id:1,task:"Pick up kids from school",isCompleted:!1},{id:2,task:"Prepare for presentation",isCompleted:!0},{id:3,task:"Print Statements",isCompleted:!1},{id:4,task:"Create invoice",isCompleted:!1},{id:5,task:"Call John",isCompleted:!0},{id:6,task:"Meeting with Alisa",isCompleted:!1}],inputValue:""},t.statusChangedHandler=t.statusChangedHandler.bind(Object(i.a)(t)),t.addTodo=t.addTodo.bind(Object(i.a)(t)),t.removeTodo=t.removeTodo.bind(Object(i.a)(t)),t.inputChangeHandler=t.inputChangeHandler.bind(Object(i.a)(t)),t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"statusChangedHandler",value:function(e,a){var t=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(t,!0).forEach((function(a){Object(r.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},this.state.todos[a]);t.isCompleted=e.target.checked;var n=Object(l.a)(this.state.todos);n[a]=t,this.setState({todos:n})}},{key:"addTodo",value:function(e){e.preventDefault();var a=Object(l.a)(this.state.todos);a.unshift({id:a.length?a[a.length-1].id+1:1,task:this.state.inputValue,isCompleted:!1}),this.setState({todos:a,inputValue:""})}},{key:"removeTodo",value:function(e){var a=Object(l.a)(this.state.todos);a.splice(e,1),this.setState({todos:a})}},{key:"inputChangeHandler",value:function(e){this.setState({inputValue:e.target.value})}},{key:"componentDidMount",value:function(){var e=document.getElementById("visitSaleChart").getContext("2d"),a=e.createLinearGradient(0,0,0,181);a.addColorStop(0,"rgba(218, 140, 255, 1)"),a.addColorStop(1,"rgba(154, 85, 255, 1)");var t=e.createLinearGradient(0,0,0,360);t.addColorStop(0,"rgba(54, 215, 232, 1)"),t.addColorStop(1,"rgba(177, 148, 250, 1)");var l=e.createLinearGradient(0,0,0,300);l.addColorStop(0,"rgba(255, 191, 150, 1)"),l.addColorStop(1,"rgba(254, 112, 150, 1)");var r=e.createLinearGradient(0,0,0,181);r.addColorStop(0,"rgba(54, 215, 232, 1)"),r.addColorStop(1,"rgba(177, 148, 250, 1)");var n=e.createLinearGradient(0,0,0,50);n.addColorStop(0,"rgba(6, 185, 157, 1)"),n.addColorStop(1,"rgba(132, 217, 210, 1)");var c=e.createLinearGradient(0,0,0,300);c.addColorStop(0,"rgba(254, 124, 150, 1)"),c.addColorStop(1,"rgba(255, 205, 150, 1)");var s={labels:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG"],datasets:[{label:"CHN",borderColor:a,backgroundColor:a,hoverBackgroundColor:a,legendColor:a,pointRadius:0,fill:!1,borderWidth:1,data:[20,40,15,35,25,50,30,20]},{label:"USA",borderColor:t,backgroundColor:t,hoverBackgroundColor:t,legendColor:t,pointRadius:0,fill:!1,borderWidth:1,data:[40,30,20,10,50,15,35,40]},{label:"UK",borderColor:l,backgroundColor:l,hoverBackgroundColor:l,legendColor:l,pointRadius:0,fill:!1,borderWidth:1,data:[70,10,30,40,25,50,15,30]}]},m={datasets:[{data:[30,30,40],backgroundColor:[r,n,c],hoverBackgroundColor:[r,n,c],borderColor:[r,n,c],legendColor:[r,n,c]}],labels:["Search Engines","Direct Click","Bookmarks Click"]};this.setState({visitSaleData:s,trafficData:m})}},{key:"toggleProBanner",value:function(){document.querySelector(".proBanner").classList.toggle("hide")}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("div",{className:"proBanner"},u.a.createElement("div",null,u.a.createElement("span",{className:"d-flex align-items-center purchase-popup"},u.a.createElement("p",null,""),u.a.createElement("a",{href:"https://www.bootstrapdash.com/product/purple-react/?utm_source=organic&utm_medium=banner&utm_campaign=free-preview",rel:"noopener noreferrer",target:"_blank",className:"btn btn-sm purchase-button ml-auto"},"Check Pro Version"),u.a.createElement("i",{className:"mdi mdi-close bannerClose",onClick:this.toggleProBanner})))),u.a.createElement("div",{className:"page-header"},u.a.createElement("h3",{className:"page-title"},u.a.createElement("span",{className:"page-title-icon bg-gradient-primary text-white mr-2"},u.a.createElement("i",{className:"mdi mdi-home"}))," Dashboard "),u.a.createElement("nav",{"aria-label":"breadcrumb"},u.a.createElement("ul",{className:"breadcrumb"},u.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},u.a.createElement("span",null),"Overview ",u.a.createElement("i",{className:"mdi mdi-alert-circle-outline icon-sm text-primary align-middle"}))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-4 stretch-card grid-margin"},u.a.createElement("div",{className:"card bg-gradient-danger card-img-holder text-white"},u.a.createElement("div",{className:"card-body"},u.a.createElement("img",{src:t(158),className:"card-img-absolute",alt:"circle"}),u.a.createElement("h4",{className:"font-weight-normal mb-3"},"Weekly Sales ",u.a.createElement("i",{className:"mdi mdi-chart-line mdi-24px float-right"})),u.a.createElement("h2",{className:"mb-5"},"$ 15,0000"),u.a.createElement("h6",{className:"card-text"},"Increased by 60%")))),u.a.createElement("div",{className:"col-md-4 stretch-card grid-margin"},u.a.createElement("div",{className:"card bg-gradient-info card-img-holder text-white"},u.a.createElement("div",{className:"card-body"},u.a.createElement("img",{src:t(158),className:"card-img-absolute",alt:"circle"}),u.a.createElement("h4",{className:"font-weight-normal mb-3"},"Weekly Orders ",u.a.createElement("i",{className:"mdi mdi-bookmark-outline mdi-24px float-right"})),u.a.createElement("h2",{className:"mb-5"},"45,6334"),u.a.createElement("h6",{className:"card-text"},"Decreased by 10%")))),u.a.createElement("div",{className:"col-md-4 stretch-card grid-margin"},u.a.createElement("div",{className:"card bg-gradient-success card-img-holder text-white"},u.a.createElement("div",{className:"card-body"},u.a.createElement("img",{src:t(158),className:"card-img-absolute",alt:"circle"}),u.a.createElement("h4",{className:"font-weight-normal mb-3"},"Visitors Online ",u.a.createElement("i",{className:"mdi mdi-diamond mdi-24px float-right"})),u.a.createElement("h2",{className:"mb-5"},"95,5741"),u.a.createElement("h6",{className:"card-text"},"Increased by 5%"))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-7 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("div",{className:"clearfix mb-4"},u.a.createElement("h4",{className:"card-title float-left"},"Visit And Sales Statistics"),u.a.createElement("div",{id:"visit-sale-chart-legend",className:"rounded-legend legend-horizontal legend-top-right float-right"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("span",{className:"legend-dots bg-primary"}),"CHN"),u.a.createElement("li",null,u.a.createElement("span",{className:"legend-dots bg-danger"}),"USA"),u.a.createElement("li",null,u.a.createElement("span",{className:"legend-dots bg-info"}),"UK")))),u.a.createElement(g.a,{ref:"chart",className:"chartLegendContainer",data:this.state.visitSaleData,options:this.state.visitSaleOptions,id:"visitSaleChart"})))),u.a.createElement("div",{className:"col-md-5 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Traffic Sources"),u.a.createElement(g.b,{data:this.state.trafficData,options:this.state.trafficOptions}),u.a.createElement("div",{id:"traffic-chart-legend",className:"rounded-legend legend-vertical legend-bottom-left pt-4"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("span",{className:"legend-dots bg-info"}),"Search Engines",u.a.createElement("span",{className:"float-right"},"30%")),u.a.createElement("li",null,u.a.createElement("span",{className:"legend-dots bg-success"}),"Direct Click",u.a.createElement("span",{className:"float-right"},"30%")),u.a.createElement("li",null,u.a.createElement("span",{className:"legend-dots bg-danger"}),"Bookmarks Click",u.a.createElement("span",{className:"float-right"},"40%")))))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12 grid-margin"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Recent Tickets"),u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"table"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null," Assignee "),u.a.createElement("th",null," Subject "),u.a.createElement("th",null," Status "),u.a.createElement("th",null," Last Update "),u.a.createElement("th",null," Tracking ID "))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("img",{src:t(51),className:"mr-2",alt:"face"})," David Grey "),u.a.createElement("td",null," Fund is not recieved "),u.a.createElement("td",null,u.a.createElement("label",{className:"badge badge-gradient-success"},"DONE")),u.a.createElement("td",null," Dec 5, 2017 "),u.a.createElement("td",null," WD-12345 ")),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("img",{src:t(67),className:"mr-2",alt:"face"})," Stella Johnson "),u.a.createElement("td",null," High loading time "),u.a.createElement("td",null,u.a.createElement("label",{className:"badge badge-gradient-warning"},"PROGRESS")),u.a.createElement("td",null," Dec 12, 2017 "),u.a.createElement("td",null," WD-12346 ")),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("img",{src:t(64),className:"mr-2",alt:"face"})," Marina Michel "),u.a.createElement("td",null," Website down for one week "),u.a.createElement("td",null,u.a.createElement("label",{className:"badge badge-gradient-info"},"ON HOLD")),u.a.createElement("td",null," Dec 16, 2017 "),u.a.createElement("td",null," WD-12347 ")),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("img",{src:t(66),className:"mr-2",alt:"face"})," John Doe "),u.a.createElement("td",null," Loosing control on server "),u.a.createElement("td",null,u.a.createElement("label",{className:"badge badge-gradient-danger"},"REJECTED")),u.a.createElement("td",null," Dec 3, 2017 "),u.a.createElement("td",null," WD-12348 "))))))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-5 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body p-0 d-flex"},u.a.createElement("div",{className:"dashboard-custom-date-picker"},u.a.createElement(p.a,{inline:!0,selected:this.state.startDate,onChange:this.handleChange}))))),u.a.createElement("div",{className:"col-lg-7 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Recent Updates"),u.a.createElement("div",{className:"d-flex"},u.a.createElement("div",{className:"d-flex align-items-center mr-4 text-muted font-weight-light"},u.a.createElement("i",{className:"mdi mdi-account-outline icon-sm mr-2"}),u.a.createElement("span",null,"jack Menqu")),u.a.createElement("div",{className:"d-flex align-items-center text-muted font-weight-light"},u.a.createElement("i",{className:"mdi mdi-clock icon-sm mr-2"}),u.a.createElement("span",null,"October 3rd, 2018"))),u.a.createElement("div",{className:"row mt-3"},u.a.createElement("div",{className:"col-6 pr-1"},u.a.createElement("img",{src:t(328),className:"mb-2 mw-100 w-100 rounded",alt:"face"}),u.a.createElement("img",{src:t(329),className:"mw-100 w-100 rounded",alt:"face"})),u.a.createElement("div",{className:"col-6 pl-1"},u.a.createElement("img",{src:t(330),className:"mb-2 mw-100 w-100 rounded",alt:"face"}),u.a.createElement("img",{src:t(331),className:"mw-100 w-100 rounded",alt:"face "}))),u.a.createElement("div",{className:"d-flex mt-5 align-items-start"},u.a.createElement("img",{src:t(64),className:"img-sm rounded-circle mr-3",alt:"face"}),u.a.createElement("div",{className:"mb-0 flex-grow"},u.a.createElement("h5",{className:"mr-2 mb-2"},"School Website - Authentication Module."),u.a.createElement("p",{className:"mb-0 font-weight-light"},"It is a long established fact that a reader will be distracted by the readable content of a page.")),u.a.createElement("div",{className:"ml-auto"},u.a.createElement("i",{className:"mdi mdi-heart-outline text-muted"}))))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-xl-7 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title"},"Project Status"),u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"table"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null," # "),u.a.createElement("th",null," Name "),u.a.createElement("th",null," Due Date "),u.a.createElement("th",null," Progress "))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null," 1 "),u.a.createElement("td",null," Herman Beck "),u.a.createElement("td",null," May 15, 2015 "),u.a.createElement("td",null,u.a.createElement(E.a,{variant:"gradient-success",now:25}))),u.a.createElement("tr",null,u.a.createElement("td",null," 2 "),u.a.createElement("td",null," Messsy Adam "),u.a.createElement("td",null," Jul 01, 2015 "),u.a.createElement("td",null,u.a.createElement(E.a,{variant:"gradient-danger",now:75}))),u.a.createElement("tr",null,u.a.createElement("td",null," 3 "),u.a.createElement("td",null," John Richards "),u.a.createElement("td",null," Apr 12, 2015 "),u.a.createElement("td",null,u.a.createElement(E.a,{variant:"gradient-warning",now:90}))),u.a.createElement("tr",null,u.a.createElement("td",null," 4 "),u.a.createElement("td",null," Peter Meggik "),u.a.createElement("td",null," May 15, 2015 "),u.a.createElement("td",null,u.a.createElement(E.a,{variant:"gradient-primary",now:50}))),u.a.createElement("tr",null,u.a.createElement("td",null," 5 "),u.a.createElement("td",null," Edward "),u.a.createElement("td",null," May 03, 2015 "),u.a.createElement("td",null,u.a.createElement(E.a,{variant:"gradient-danger",now:50}))),u.a.createElement("tr",null,u.a.createElement("td",null," 5 "),u.a.createElement("td",null," Ronald "),u.a.createElement("td",null," Jun 05, 2015 "),u.a.createElement("td",null,u.a.createElement(E.a,{variant:"gradient-info",now:65}))))))))),u.a.createElement("div",{className:"col-xl-5 grid-margin stretch-card"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement("h4",{className:"card-title text-white"},"Todo"),u.a.createElement("form",{className:"add-items d-flex",onSubmit:this.addTodo},u.a.createElement("input",{type:"text",className:"form-control h-auto",placeholder:"What do you need to do today?",value:this.state.inputValue,onChange:this.inputChangeHandler,required:!0}),u.a.createElement("button",{type:"submit",className:"btn btn-gradient-primary font-weight-bold px-lg-4 px-3"},"Add")),u.a.createElement("div",{className:"list-wrapper"},u.a.createElement("ul",{className:"d-flex flex-column todo-list"},this.state.todos.map((function(a,t){return u.a.createElement(N,{isCompleted:a.isCompleted,changed:function(a){return e.statusChangedHandler(a,t)},key:a.id,remove:function(){return e.removeTodo(t)}},a.task)})))))))))}}]),a}(o.Component),N=function(e){return u.a.createElement("li",{className:e.isCompleted?"completed":null},u.a.createElement("div",{className:"form-check"},u.a.createElement("label",{htmlFor:"",className:"form-check-label"},u.a.createElement("input",{className:"checkbox",type:"checkbox",checked:e.isCompleted,onChange:e.changed})," ",e.children," ",u.a.createElement("i",{className:"input-helper"}))),u.a.createElement("i",{className:"remove mdi mdi-close-circle-outline",onClick:e.remove}))};a.default=v}}]);
//# sourceMappingURL=5.0d93b8f7.chunk.js.map