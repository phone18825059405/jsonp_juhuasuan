webpackJsonp([2],{24:function(t,a,e){e(31);var s=e(1)(e(29),e(34),null,null);t.exports=s.exports},29:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{all:[],waitPay:[],waitSend:[],current:[],curTabs:0,maskShow:!1,tempOperId:""}},created:function(){var t=1*new Date,a=this;this.all=JSON.parse(localStorage.allOrder),this.all.forEach(function(e){"waitSend"===e.state?a.waitSend.push(e):"waitPay"===e.state&&(e.deadline>t?a.waitPay.push(e):(e.state="dead",delete e.deadline,e.stateText="交易关闭"))}),localStorage.allOrder=JSON.stringify(this.all);var e=location.search.match(/type=([0-9]+)/)[1];switch(this.curTabs=e,e){case"0":this.current=this.all;break;case"1":this.current=this.waitPay;break;case"2":this.current=this.waitSend}},methods:{changeTabs:function(a){var e=t(a.target).attr("data-index"),s=t(a.target).attr("data-code");this.current=this[s],this.curTabs=e,location.search="?type="+e},toggleShow:function(a){this.maskShow=!this.maskShow,t(this.$refs.pay).toggleClass("show"),this.tempOperId=t(a.target).attr("data-time")},pay:function(a){var e=this,s=1*new Date;this.all.forEach(function(t){if(t.createTime==e.tempOperId)return t.deadline>s?(t.state="waitSend",t.stateText="等待发货"):(t.state="dead",t.stateText="交易关闭",alert("操作超时，交易已结束")),delete t.deadline,localStorage.allOrder=JSON.stringify(e.all),void(e.tempOperId="")}),this.maskShow=!this.maskShow,t(this.$refs.pay).toggleClass("show"),location.reload()},deleteOrder:function(a){var e=this,s=t(a.target).attr("data-time");this.all.forEach(function(t,a,i){if(s==t.createTime)return i.splice(a,1),void(localStorage.allOrder=JSON.stringify(e.all))}),location.reload()}}}}).call(a,e(0))},31:function(t,a){},34:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"fixed-top"},[t._m(0),t._v(" "),e("div",{staticClass:"nav-bar"},[e("ul",[e("li",{class:[0==t.curTabs?"cur":""],attrs:{"data-index":"0","data-code":"all"},on:{click:t.changeTabs}},[t._v("全部")]),t._v(" "),e("li",{class:[1==t.curTabs?"cur":""],attrs:{"data-index":"1","data-code":"waitPay"},on:{click:t.changeTabs}},[t._v("待付款")]),t._v(" "),e("li",{class:[2==t.curTabs?"cur":""],attrs:{"data-index":"2","data-code":"waitSend"},on:{click:t.changeTabs}},[t._v("待发货")])])])]),t._v(" "),e("div",{staticClass:"order"},[e("ul",{staticClass:"order-list"},t._l(t.current,function(a){return e("li",[e("div",{attrs:{"data-id":""}},[e("div",{staticClass:"header-title box"},[t._m(1,!0),t._v(" "),e("div",{staticClass:"seller-link flex-1"},[e("a",{attrs:{href:"javascript:"}},[t._v(t._s(a.goods[0].sellerNick))])]),t._v(" "),e("div",{staticClass:"state"},[e("span",[t._v(t._s(a.stateText))])])]),t._v(" "),t._l(a.goods,function(a){return e("div",{staticClass:"main box"},[e("div",{staticClass:"img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http:"+a.imgUrl,expression:"'http:'+good.imgUrl"}],attrs:{alt:""}})]),t._v(" "),e("div",{staticClass:"info flex-1"},[e("h4",{staticClass:"title"},[t._v(t._s(a.title))]),t._v(" "),e("p",{staticClass:"params"},t._l(a.params,function(a,s){return e("span",[t._v(t._s(s)+":"+t._s(a)+";")])})),t._v(" "),t._m(2,!0)]),t._v(" "),e("div",{staticClass:"pay"},[e("div",[e("p",{staticClass:"price"},[t._v("￥"+t._s(a.info.price.priceText))]),t._v(" "),e("p",{staticClass:"price"},[e("del",[t._v("￥"+t._s(a.oldPrice))])]),t._v(" "),e("p",{staticClass:"nums"},[t._v("x"+t._s(a.quantity))])])])])}),t._v(" "),t._m(3,!0),t._v(" "),e("div",{staticClass:"total-price"},[e("span",[t._v("共"+t._s(a.totalQun)+"件商品")]),t._v(" "),e("span",[t._v("合计：¥ "+t._s(a.totalPrice))]),t._v(" "),e("span",[t._v("(含运费 ¥: 0.00)")])]),t._v(" "),e("div",{staticClass:"operation"},[e("ul",{staticClass:"clearfix"},["dead"===a.state?e("li",{attrs:{"data-time":a.createTime},on:{click:t.deleteOrder}},[t._v("删除订单")]):t._e(),t._v(" "),"waitSend"===a.state?e("li",{attrs:{"data-time":a.createTime},on:{click:t.deleteOrder}},[t._v("取消订单")]):t._e(),t._v(" "),"waitPay"===a.state?e("li",{attrs:{"data-time":a.createTime},on:{click:t.deleteOrder}},[t._v("取消订单")]):t._e(),t._v(" "),a.deadline?e("li",{attrs:{"data-time":a.createTime},on:{click:t.toggleShow}},[t._v("付款")]):t._e()])])],2)])}))]),t._v(" "),e("div",{ref:"pay",staticClass:"pay"},[e("header",{staticClass:"box"},[e("div",{staticClass:"shut flex-1"},[e("span",{on:{click:t.toggleShow}})]),t._v(" "),e("div",{staticClass:"title flex-1"},[t._v("付款详情")]),t._v(" "),e("div",{staticClass:"flex-1"})]),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"btn"},[e("button",{on:{click:t.pay}},[t._v("确认付款")])])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.maskShow,expression:"maskShow"}],staticClass:"mask",staticStyle:{position:"fixed","z-index":"9998",top:"0",right:"0",left:"0",bottom:"0",width:"100%",height:"100%","background-color":"rgba(0,0,0,.8)"}})])],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",[e("div",{staticClass:"back flex-1"},[e("span")]),t._v(" "),e("h3",{staticClass:"title flex-1 flex-center"},[t._v("订单管理")]),t._v(" "),e("div",{staticClass:"flex-1"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"icon box flex-center"},[e("img",{attrs:{src:"http://img.alicdn.com/tps/i4/TB12mhwHVXXXXctXVXXAAT2HVXX-63-63.png",alt:""}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"tag"},[e("li",[t._v("七天退换")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"service box"},[e("div",{staticClass:"flex-1"},[e("h5",{staticClass:"title "},[t._v("保险服务")]),t._v(" "),e("p")]),t._v(" "),e("div",{staticClass:"pay-data"},[e("p",{staticClass:"price"},[t._v("￥0.00")]),t._v(" "),e("p",{staticClass:"nums"},[t._v("x1")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",{staticClass:"box"},[e("h4",[t._v("银行卡号")]),e("p",{staticClass:"flex-1"},[t._v("6648****565545")])]),t._v(" "),e("li",{staticClass:"box"},[e("h4",[t._v("付款方式")]),e("p",{staticClass:"flex-1"},[t._v("在线支付")])]),t._v(" "),e("li",{staticClass:"box totalPrice"},[e("h4",[t._v("需付款")]),e("p",{staticClass:"flex-1"},[t._v("7855.99元")])])])}]}},42:function(t,a,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var i=e(3),l=s(i),r=e(2),c=s(r),n=e(0);s(n);l.default.use(c.default,{preLoad:1.3,error:"dist/404.png",loading:"dist/loading-spin.svg",attempt:1}),new l.default({el:"#app",components:{ordermanage:e(24)}})}},[42]);