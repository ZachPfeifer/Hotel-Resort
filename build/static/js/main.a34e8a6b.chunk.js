(this["webpackJsonphotel-clone"]=this["webpackJsonphotel-clone"]||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/logo.7746c062.svg"},102:function(e,t,a){e.exports=a.p+"static/media/Entree1.da3e7b30.jpg"},103:function(e,t,a){e.exports=a.p+"static/media/lunch1.e57905e2.jpg"},104:function(e,t,a){e.exports=a.p+"static/media/wine.85236bcf.jpg"},109:function(e,t,a){e.exports=a(226)},114:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),r=a(36),c=a.n(r),s=(a(114),a(8)),l=a(16);a(61);function o(e){var t=e.children,a=e.hero;return n.a.createElement("header",{className:a},t)}function m(e){var t=e.title,a=e.subtitle,i=e.children;return n.a.createElement("div",{className:"banner"},n.a.createElement("h1",null,t),n.a.createElement("div",null),n.a.createElement("p",null,a),i)}o.defaultProps={hero:"defaultHero"};var u=a(3),d=a(4),p=a(6),f=a(5),h=a(7);function g(e){var t=e.title;return n.a.createElement("div",{className:"section-title"},n.a.createElement("h4",null,t),n.a.createElement("div",null))}var E=a(19),b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={services:[{icons:n.a.createElement(E.c,null),title:"Evening Dining",info:"In keeping with the family owned tradition of Lucia Lodge, the lodge restaurant offers true home - style cooking. Virtually all of our dressings and sauces are made from scratch on the premises.Enjoy fireside dining in our historic dining room or take in the fresh ocean air on deck.Either way, beautiful vistas of the coast accompany your meal. "},{icons:n.a.createElement(E.d,null),title:"Endless Hiking",info:"Numerous hiking trails wind through the rugged Santa Lucia Mountain range, traversing redwood canyons and sun-drenched ridges. Less strenuous but equally fun hikes can be made from well marked points of interest along the highway. Activities covered here are broken into three categories: beach access, hiking, and day trips."},{icons:n.a.createElement(E.e,null),title:"Gift Shop",info:"The convenience store and gift shop is open from 8 AM to 8 PM daily in season (till 9 PM weekends). The store features deli items, beverages, select wines, grocery and camping supplies. The gift shop, located within the store, has a collection of books, cards, souvenirs and local art such as jade jewelry."},{icons:n.a.createElement(E.b,null),title:"Afternoon Lunch",info:"In keeping with the family owned tradition of Lucia Lodge, the lodge restaurant offers true home - style cooking. Virtually all of our dressings and sauces are made from scratch on the premises.Enjoy fireside dining in our historic dining room or take in the fresh ocean air on deck.Either way, beautiful vistas of the coast accompany your meal. "}]},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"services"},n.a.createElement(g,{title:"services"}),n.a.createElement("div",{className:"services-center"},this.state.services.map((function(e,t){return n.a.createElement("article",{key:t,className:"service"},n.a.createElement("span",null,e.icons),n.a.createElement("h6",null,e.title),n.a.createElement("p",null,n.a.createElement("i",null,e.info)))}))))}}]),t}(i.Component),v=a(27),y=a(37),w=a(53),N=a.n(w),k=a(17),x=a(105),j=Object(x.a)({space:"4ak2gm9gv3p8",accessToken:"mWHFWpgDBZ1eGGZap59ZP91JOfuX-BahYsUlpP380_g"}),O=n.a.createContext(),C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={rooms:[],sortedRooms:[],featuredRooms:[],loading:!0,type:"all",capacity:1,price:0,minPrice:0,maxPrice:0,minSize:0,maxSize:0,breakfast:!1,pets:!1,inCart:!1,cartItems:[]},a.getData=function(){var e,t,i,n,r;return N.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,N.a.awrap(j.getEntries({content_type:"hotelResort",order:"fields.price"}));case 3:e=c.sent,t=a.formatData(e.items),i=t.filter((function(e){return!0===e.featured})),n=Math.max.apply(Math,Object(k.a)(t.map((function(e){return e.price})))),r=Math.max.apply(Math,Object(k.a)(t.map((function(e){return e.size})))),a.setState({rooms:t,featuredRooms:i,sortedRooms:t,loading:!1,price:n,maxPrice:n,maxSize:r}),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),console.log(c.t0);case 14:case"end":return c.stop()}}),null,null,[[0,11]])},a.getRoom=function(e){return Object(k.a)(a.state.rooms).find((function(t){return t.slug===e}))},a.handleChange=function(e){var t=e.target,i="checkbox"===t.type?t.checked:t.value,n=e.target.name;a.setState(Object(y.a)({},n,i),a.filterRooms),console.clear()},a.filterRooms=function(){var e=a.state,t=e.rooms,i=e.type,n=e.capacity,r=e.price,c=e.maxSize,s=e.minSize,l=e.breakfast,o=e.pets,m=Object(k.a)(t);n=parseInt(n),r=parseInt(r),"all"!==i&&(m=m.filter((function(e){return e.type===i}))),1!==n&&(m=m.filter((function(e){return e.capacity>=n}))),m=(m=m.filter((function(e){return e.price<=r}))).filter((function(e){return e.size>=s&&e.size<=c})),l&&(m=m.filter((function(e){return!0===e.breakfast}))),o&&(m=m.filter((function(e){return!0===e.pets}))),a.setState({sortedRooms:m})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"formatData",value:function(e){return e.map((function(e){var t=e.sys.id,a=e.fields.images.map((function(e){return e.fields.file.url}));return Object(v.a)({},e.fields,{images:a,id:t})}))}},{key:"render",value:function(){return n.a.createElement(O.Provider,{value:Object(v.a)({},this.state,{getRoom:this.getRoom,handleChange:this.handleChange})},this.props.children)}}]),t}(i.Component),L=O.Consumer;var S=a(93),q=a.n(S),F=function(){return n.a.createElement("div",{className:"loading"},n.a.createElement("h4",null,"rooms data loading...."),n.a.createElement("img",{src:q.a,alt:"Loading"}))},R=a(23),D=a.n(R);function I(e){var t=e.room,a=t.name,i=t.slug,r=t.images,c=t.price;return n.a.createElement("article",{className:"room"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{src:r[0]||D.a,alt:"Single Room"}),n.a.createElement("div",{className:"price-top"},n.a.createElement("h6",null,"$",c),n.a.createElement("p",null,"per night")),n.a.createElement(s.b,{to:"/rooms/".concat(i),className:"btn-primary room-link"},"Featured")),n.a.createElement("p",{className:"room-info"},a))}var B=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.context,t=e.loading,a=e.featuredRooms;return a=a.map((function(e){return n.a.createElement(I,{key:e.id,room:e})})),n.a.createElement("section",{className:"featured-rooms"},n.a.createElement(g,{title:"featured rooms"}),n.a.createElement("div",{className:"featured-rooms-center"},t?n.a.createElement(F,null):a))}}]),t}(i.Component);B.contextType=O;var P=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"gallery-wrapper bg-grey"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"gallery-info d-flex flex-row-reverse "},n.a.createElement("div",{className:"offset-md-8 col-md-4 offset-sm-10 col-sm-2 m-3"},n.a.createElement("h1",{className:"text-gold text-right font-weight-bolder"},"Come Explore Big Sur's Veiws"),n.a.createElement("p",{className:"text-dark text-muted text-wrap p-2"},"  Numerous hiking trails wind through the rugged Santa Lucia Mountain range, traversing redwood canyons and sun-drenched ridges. Less strenuous but equally fun hikes can be made from well marked points of interest along the highway. Activities covered here are broken into three categories: beach access, hiking, and day trips."))),n.a.createElement("div",{className:"gallery"},n.a.createElement("img",{src:"https://images7.alphacoders.com/906/thumb-350-906177.jpg",className:"img img-1",alt:"Gallery "}),n.a.createElement("img",{src:"http://www.lucialodge.com/activitiestop.jpg",className:"img img-2",alt:"Gallery "}),n.a.createElement("img",{src:"https://images8.alphacoders.com/943/thumb-350-943660.jpg",className:"img img-3",alt:"Gallery "}),n.a.createElement("img",{src:"https://images7.alphacoders.com/880/thumb-350-880547.jpg",className:"img img-4",alt:"Gallery "}),n.a.createElement("img",{src:"https://images2.alphacoders.com/843/thumb-350-843090.jpg",className:"img img-5",alt:"Gallery "}),n.a.createElement("img",{src:"https://images2.alphacoders.com/899/thumb-350-899247.jpg",className:"img img-6",alt:"Gallery "}),n.a.createElement("img",{src:"http://www.lucialodge.com/activities.valley.jpg",className:"img img-7",alt:"Gallery "}),n.a.createElement("img",{src:"http://www.lucialodge.com/about3.jpg",className:"img img-8",alt:"Gallery "}),n.a.createElement("img",{src:"https://images6.alphacoders.com/718/thumb-350-718026.jpg",className:"img img-9",alt:"Gallery "}),n.a.createElement("img",{src:"https://images3.alphacoders.com/695/thumb-350-695172.jpg",className:"img img-10",alt:"Gallery "}),n.a.createElement("img",{src:"http://www.lucialodge.com/activities.camal.jpg",className:"img img-11",alt:"Gallery "}),n.a.createElement("img",{src:"http://www.lucialodge.com/activities.willow.jpg",className:"img img-12",alt:"Gallery "})))))}}]),t}(i.Component),T=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o,null,n.a.createElement(m,{title:"Welcome to The Lucia Lodge",subtitle:"In keeping with the family owned tradition of Lucia Lodge, the lodge restaurant offers true home-style cooking."},n.a.createElement(s.b,{to:"/home",className:"btn-primary"},"Return Home"))),n.a.createElement(b,null),n.a.createElement(B,null),n.a.createElement(P,null))},z=function(e,t){return Object(k.a)(new Set(e.map((function(e){return e[t]}))))};function A(e){var t=e.rooms,a=Object(i.useContext)(O),r=a.handleChange,c=a.type,s=a.capacity,l=a.price,o=a.minPrice,m=a.maxPrice,u=a.minSize,d=a.maxSize,p=a.breakfast,f=a.pets,h=z(t,"type");h=(h=["all"].concat(Object(k.a)(h))).map((function(e,t){return n.a.createElement("option",{value:e,key:t},e)}));var E=z(t,"capacity");return E=E.map((function(e,t){return n.a.createElement("option",{value:e,key:t},e)})),n.a.createElement("section",{className:"filter-container"},n.a.createElement(g,{title:"search rooms"}),n.a.createElement("form",{className:"filter-form"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"type"},"Room Type"),n.a.createElement("select",{className:"form-control",name:"type",id:"type",value:c,onChange:r},h)),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"capacity"},"Guests"),n.a.createElement("select",{className:"form-control",name:"capacity",id:"capacity",value:s,onChange:r},E)),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"price"},"Room Price $",l),n.a.createElement("input",{className:"form-control",type:"range",name:"price",id:"price",min:o,max:m,value:l,onChange:r})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"size"},"Room Size"),n.a.createElement("div",{className:"size-inputs"},n.a.createElement("input",{className:"size-input",type:"number",name:"minSize",id:"size",value:u,onChange:r}),n.a.createElement("input",{className:"size-input",type:"number",name:"maxSize",id:"size",value:d,onChange:r}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"single-extra"},n.a.createElement("input",{type:"checkbox",name:"breakfast",id:"breakfast",checked:p,onChange:r}),n.a.createElement("label",{htmlFor:"breakfast"},"Breakfast")),n.a.createElement("div",{className:"single-extra"},n.a.createElement("input",{type:"checkbox",name:"pets",id:"pets",checked:f,onChange:r}),n.a.createElement("label",{htmlFor:"pets"},"Pets")))))}var M=function(e){var t=e.rooms;return 0===t.length?n.a.createElement("div",{className:"empty-search"},n.a.createElement("h3",null,"unfortunately no rooms matched your search parameters")):n.a.createElement("section",{className:"roomslist"},n.a.createElement("div",{className:"roomslist-center"},t.map((function(e){return n.a.createElement(I,{key:e.id,room:e})}))))};var $,G=($=function(e){var t=e.context,a=t.loading,i=t.sortedRooms,r=t.rooms;return a?n.a.createElement(F,null):n.a.createElement(n.a.Fragment,null,n.a.createElement(A,{rooms:r}),n.a.createElement(M,{rooms:i}))},function(e){return n.a.createElement(L,null,(function(t){return n.a.createElement($,Object.assign({},e,{context:t}))}))}),V=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o,{hero:"roomsHero"},n.a.createElement(m,{title:"our rooms",subtitle:""},n.a.createElement(s.b,{to:"/",className:"btn-primary"},"return home"))),n.a.createElement(G,null))},H=a(106),W=a(96);function J(){var e=Object(W.a)(["\nmin-height: 60vh;\n  background: url(",") center/cover no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return J=function(){return e},e}var X=a(97).a.header(J(),(function(e){return e.img?e.img:D.a})),Z=a(100),U=a.n(Z),Y=(a(223),a(224),function(e){function t(e){var a;return Object(u.a)(this,t),a=Object(p.a)(this,Object(f.a)(t).call(this,e)),console.log(a.props),a.state={payload:a.props.match.params.payload,defaultBcg:D.a,inCart:!0,carItem:[]},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=(0,this.context.getRoom)(this.state.payload),t=this.state.inCart;if(!e)return n.a.createElement("div",{className:"error"},n.a.createElement("h3",null,"No Such Room could be Found... "),n.a.createElement("h3",null,"Loading... "),n.a.createElement(s.b,{to:"/rooms",className:"btn-primary"},"Back to Rooms"));var a=e.name,i=e.description,r=e.capacity,c=e.size,l=e.price,o=e.extras,u=e.breakfast,d=e.pets,p=e.images,f=Object(H.a)(p),h=f[0],g=f.slice(1);return n.a.createElement(n.a.Fragment,null,n.a.createElement(X,{img:h||this.state.defaultBcg},n.a.createElement(m,{title:"".concat(a),subtitle:""},n.a.createElement(s.b,{to:"/rooms",className:"btn-primary"},"Back To Rooms"))),n.a.createElement("section",{className:"single-room"},n.a.createElement(U.a,{className:"slide",dots:!0,centerMode:!0,infinite:!0,arrows:!0,centerPadding:"15px",slidesToShow:2,speed:500,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},g.map((function(e,t){return n.a.createElement("div",{className:"single-room-images"},n.a.createElement("img",{key:t,src:e,alt:a}))}))),n.a.createElement("div",{className:"single-room-info"},n.a.createElement("article",{className:"desc"},n.a.createElement("h3",null,"Details"),n.a.createElement("p",null,i)),n.a.createElement("article",{className:"info "},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h3",null,"Info"),n.a.createElement("h6",null,n.a.createElement("strong",null,"price:")," $",l),n.a.createElement("h6",null,n.a.createElement("strong",null,"size:")," ",c," ft\xb2"),n.a.createElement("h6",null,n.a.createElement("strong",null,"Max Capacity: "),"".concat(r,r>1?" people":" person")),n.a.createElement("h6",null,d?"pets allowed":"no pets allowed"),n.a.createElement("h6",null,u&&"free breakfast included"))),n.a.createElement("div",{className:"row mt-5 float-right"},n.a.createElement("div",{className:"col-md-5 col-sm-12"},!1===t?n.a.createElement("button",{className:"btn-primary"}," Remove from Cart"):n.a.createElement("button",{className:"btn-primary"}," Add to Cart")),n.a.createElement("div",{className:"col-md-1 col-sm-12"},n.a.createElement("br",null)),n.a.createElement("div",{className:"col-md-5 col-sm-12"},n.a.createElement("a",{href:"https://us01.iqwebbook.com/LLCA968/"},n.a.createElement("button",{className:"btn-primary"}," Reserve Now!"))))))),n.a.createElement("section",{className:"room-extras"},n.a.createElement("h6",null,"Extras"),n.a.createElement("ul",{className:"extras"},o.map((function(e,t){return n.a.createElement("li",{key:t},"- ",e)})))))}}]),t}(i.Component));function _(){return n.a.createElement(o,null,n.a.createElement(m,{title:"404",subtitle:"page not found"},n.a.createElement(s.b,{to:"/",className:"btn-primary"},"return home")))}Y.contextType=O;var K=a(101),Q=a.n(K),ee=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={isOpen:!1},a.handleToggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{className:"nav-center"},n.a.createElement("div",{className:"nav-header"},n.a.createElement(s.b,{to:"/"},n.a.createElement("img",{src:Q.a,alt:"Beach Resort"})),n.a.createElement("button",{className:"nav-btn",type:"button",onClick:this.handleToggle},n.a.createElement(E.a,{className:"nav-icon"}))),n.a.createElement("ul",{className:this.state.isOpen?"nav-links show-nav":"nav-links"},n.a.createElement("li",null,n.a.createElement(s.b,{to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/rooms/"},"Rooms")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/resturant"},"Food & Dinning")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/cart"},"Cart")))))}}]),t}(i.Component);function te(){return n.a.createElement("p",{className:"credits mt-5"},n.a.createElement("small",null,"Copyright Lucia Lodge, All Rights Reserved \u2022 Reservations: (866) 424-4787 \u2022 Site Design"))}var ae=a(59),ie=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={services:[{icons:n.a.createElement(ae.a,null),title:"Lunch",hours:"11:00 AM and 4:30 PM",disclaimer:"(Varies by season. Please call)",info:"In keeping with the family owned tradition of Lucia Lodge, the lodge restaurant offers true home - style cooking. Virtually all of our dressings and sauces are made from scratch on the premises.Enjoy fireside dining in our historic dining room or take in the fresh ocean air on deck.Either way, beautiful vistas of the coast accompany your meal."},{icons:n.a.createElement(ae.b,null),title:"Dinner",hours:" 5:00 PM to 8:00 PM",disclaimer:"(Varies by season. Please call)",info:"In keeping with the family owned tradition of Lucia Lodge, the lodge restaurant offers true home - style cooking. Virtually all of our dressings and sauces are made from scratch on the premises.Enjoy fireside dining in our historic dining room or take in the fresh ocean air on deck.Either way, beautiful vistas of the coast accompany your meal. "}]},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"services"},n.a.createElement(g,{title:"Come Dine With Us"}),n.a.createElement("div",{className:"services-center"},this.state.services.map((function(e,t){return n.a.createElement("article",{key:t,className:"service"},n.a.createElement("span",null,e.icons),n.a.createElement("h6",null,e.title),n.a.createElement("p",null,n.a.createElement("small",null,e.hours,n.a.createElement("br",null),e.disclaimer,n.a.createElement("br",null))),n.a.createElement("p",null,n.a.createElement("i",null,n.a.createElement("br",null)," ",e.info)))}))))}}]),t}(i.Component),ne=a(102),re=a.n(ne),ce=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={menu:[{title:"Fried Chick",disc:"Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",price:"$17.00"},{title:"Lucia Burger",disc:"Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",price:"$17.00"},{title:"Black & Bleu Burger",disc:"Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",price:"$17.00"},{title:"California",disc:"Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",price:"$17.00"},{title:"Veggie",disc:"Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",price:"$15.00"},{title:"BLTA",disc:"Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",price:"$17.00"},{title:"Fish & Chips",disc:"Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",price:"$18.00"}],drinks:[{soda:"Coca-Cola, Sprite, Dr Pepper, Sprite, Diet Coke"},{alc:"Pasifico"}]},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"dinner"},n.a.createElement("div",{className:" dinner-bg parallax mx-auto"},n.a.createElement("div",{className:"container mt-5  d-flex justify-content-center"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement(m,{title:"Dinner Menu",subtitle:"Dine with an Ocean View",children:""})))),n.a.createElement("div",{className:"container-fluid over-flow"},n.a.createElement("div",{className:"row m-5 bg-grey "},n.a.createElement("div",{className:"col-lg-6 col-sm-12"},n.a.createElement("h3",{className:"text-gold m-2 pb-1"},n.a.createElement("i",null," Entrees:  ")),this.state.menu.map((function(e,t){return n.a.createElement("div",{key:t,className:"price-wrap ml-3"},n.a.createElement("h5",{className:"price-header float-left mr-3 text-gold"},e.title),n.a.createElement("div",{className:"price-dots"},n.a.createElement("span",{className:"separator-dots"})),n.a.createElement("p",{className:"price-price"},n.a.createElement("small",null,n.a.createElement("i",null,e.price))),n.a.createElement("p",null,n.a.createElement("i",null,e.disc)),n.a.createElement("hr",null))}))),n.a.createElement("div",{className:"col-lg-6 col-sm-12"},n.a.createElement("div",{className:"image-container mt-5 rounded pt-5 pr-5 offset-lg-2 col-lg-10"},n.a.createElement("img",{src:re.a,alt:"Entree Image",className:"img-border img-fluid rounded mb-3 p-1"})),n.a.createElement("h4",{className:"text-gold m-2 pb-1"},n.a.createElement("i",null,"Beverages:")),this.state.drinks.map((function(e,t){return n.a.createElement("div",{key:t,className:"mx-auto"},n.a.createElement("p",{className:"ml-5"}," ",e.soda))})))))))}}]),t}(i.Component),se=a(103),le=a.n(se),oe=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={menu:[{title:"Fried Chick",disc:"Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",price:"$17.00"},{title:"Lucia Burger",disc:"Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",price:"$17.00"},{title:"Black & Bleu Burger",disc:"Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",price:"$17.00"},{title:"California",disc:"Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",price:"$17.00"},{title:"Veggie",disc:"Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",price:"$15.00"},{title:"BLTA",disc:"Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",price:"$17.00"},{title:"Fish & Chips",disc:"Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",price:"$18.00"}],drinks:[{soda:"Coca-Cola, Sprite, Dr Pepper, Sprite, Diet Coke"},{alc:"Pasifico"}]},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"lunch mb-5"},n.a.createElement("div",{className:" lunch-bg parallax mx-auto"},n.a.createElement("div",{className:"container mt-5  d-flex justify-content-center"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement(m,{title:"Lunch Menu",subtitle:"Dine on our Open Padio ",children:""})))),n.a.createElement("div",{className:"container-fluid over-flow"},n.a.createElement("div",{className:"row m-5 bg-grey "},n.a.createElement("div",{className:"col-lg-6 col-sm-12"},n.a.createElement("h3",{className:"text-gold m-2 pb-1"},n.a.createElement("i",null," Entrees:  ")),this.state.menu.map((function(e,t){return n.a.createElement("div",{key:t,className:"price-wrap ml-3"},n.a.createElement("h5",{className:"price-header float-left mr-3 text-gold"},e.title),n.a.createElement("div",{className:"price-dots"},n.a.createElement("span",{className:"separator-dots"})),n.a.createElement("p",{className:"price-price"},n.a.createElement("small",null,n.a.createElement("i",null,e.price))),n.a.createElement("p",null,n.a.createElement("i",null,e.disc)),n.a.createElement("hr",null))}))),n.a.createElement("div",{className:"col-lg-6 col-sm-12"},n.a.createElement("div",{className:"image-container mt-5 rounded pt-5 pr-5 offset-lg-2 col-lg-10"},n.a.createElement("img",{src:le.a,alt:"Entree Image",className:"img-border img-fluid rounded mb-3 p-1"})),n.a.createElement("h4",{className:"text-gold m-2 pb-1"},n.a.createElement("i",null,"Beverages:")),this.state.drinks.map((function(e,t){return n.a.createElement("div",{key:t,className:"mx-auto"},n.a.createElement("p",{className:"ml-5"}," ",e.soda))})))))))}}]),t}(i.Component),me=a(104),ue=a.n(me),de=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"alc-container"},n.a.createElement("h1",{className:"max-auto text-center"},"Alcoholic Beverages"),n.a.createElement("div",{className:"center-image img-thumbnail"},n.a.createElement("img",{src:ue.a,alt:"WINE IMG",className:""})),n.a.createElement("p",{className:"left"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem fugit, excepturi animi officia sed molestias iure ipsam non eaque! Odit, obcaecati sequi in quidem voluptatibus laboriosam nostrum suscipit soluta dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto aperiam accusamus, quasi, esse officia sit, natus soluta ab impedit culpa nam nesciunt exercitationem necessitatibus.adipisicing elit. Exercitationem fugit, excepturi animi officia sed molestias iure ipsam non eaque! Odit, obcaecati sequi in quidem voluptatibus laboriosam nostrum suscipit soluta dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto aperiam accusamus, quasi, esse officia sit, natus soluta ab impedit culpa nam nesciunt exercitationem necessitatibus.adipisicing elit. Exercitationem fugit, excepturi animi officia sed molestias iure ipsam non eaque! Odit, obcaecati sequi in quidem voluptatibus laboriosam nostrum suscipit soluta dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto aperiam accusamus, quasi, esse officia sit, natus soluta ab impedit culpa nam nesciunt exercitationem necessitatibus.adipisicing elit. Exercitationem fugit, excepturi animi officia sed molestias iure ipsam non eaque! Odit, obcaecati sequi in quidem voluptatibus laboriosam nostrum suscipit soluta dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto aperiam accusamus, quasi, esse officia sit, natus soluta ab impedit culpa nam nesciunt exercitationem necessitatibus.adipisicing elit. Exercitationem fugit, excepturi animi officia sed molestias iure ipsam non eaque! Odit, obcaecati sequi in quidem voluptatibus laboriosam nostrum suscipit soluta dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto aperiam accusamus, quasi, esse officia sit, natus soluta ab impedit culpa nam nesciunt exercitationem necessitatibus.adipisicing elit. Exercitationem fugit, excepturi animi officia sed molestias iure ipsam non eaque! Odit, obcaecati sequi in quidem voluptatibus laboriosam nostrum suscipit soluta dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto aperiam accusamus, quasi, esse officia sit, natus soluta ab impedit culpa nam nesciunt exercitationem necessitatibus."),n.a.createElement("p",{className:"right"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem fugit, excepturi animi officia sed molestias iure ipsam non eaque! Odit, obcaecati sequi in quidem voluptatibus laboriosam nostrum suscipit soluta dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem fugit, excepturi animi officia sed molestias iure ipsam non eaque! Odit, obcaecati sequi in quidem voluptatibus laboriosam nostrum suscipit soluta dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto aperiam accusamus, quasi, esse officia sit, natus soluta ab impedit culpa nam nesciunt exercitationem necessitatibus.adipisicing elit. Exercitationem fugit, excepturi animi officia sed molestias iure ipsam non eaque! Odit, obcaecati sequi in quidem voluptatibus laboriosam nostrum suscipit soluta dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto aperiam accusamus, quasi, esse officia sit, natus soluta ab impedit culpa nam nesciunt exercitationem necessitatibus.adipisicing elit. Exercitationem fugit, excepturi animi officia sed molestias iure ipsam non eaque! Odit, obcaecati sequi in quidem voluptatibus laboriosam nostrum suscipit soluta dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto aperiam accusamus, quasi, esse officia sit, natus soluta ab impedit culpa nam nesciunt exercitationem necessitatibus.adipisicing elit. Exercitationem fugit, excepturi animi officia sed molestias iure ipsam non eaque! Odit, obcaecati sequi in quidem voluptatibus laboriosam nostrum suscipit soluta dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto aperiam accusamus, quasi, esse officia sit, natus soluta ab impedit culpa nam nesciunt exercitationem necessitatibus.adipisicing elit. Exercitationem fugit, excepturi animi officia sed molestias iure ipsam non eaque! Odit, obcaecati sequi in quidem voluptatibus laboriosam nostrum suscipit soluta dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto aperiam accusamus, quasi, esse officia sit, natus soluta ab impedit culpa nam nesciunt exercitationem necessitatibus.adipisicing elit. Exercitationem fugit, excepturi animi officia sed molestias iure ipsam non eaque! Odit, obcaecati sequi in quidem voluptatibus laboriosam nostrum suscipit soluta dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto aperiam accusamus, quasi, esse officia sit, natus soluta ab impedit culpa nam nesciunt exercitationem necessitatibus.")))}}]),t}(i.Component),pe=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o,{hero:"resturantHero"},n.a.createElement(m,{title:"Weclome to Pacific Edge",subtitle:"In keeping with the family owned tradition of Lucia Lodge, the lodge restaurant offers true home-style cooking."},n.a.createElement(s.b,{to:"/home",className:"btn-primary"},"Return Home"))),n.a.createElement(ie,null),n.a.createElement("section",{id:"Lunch"},n.a.createElement(oe,null)),n.a.createElement("div",{className:"space"},"      "),n.a.createElement("section",{id:"Dinner"},n.a.createElement(ce,null)),n.a.createElement("div",{className:"space"},"      "),n.a.createElement("section",{id:"Alcohol"},n.a.createElement(de,null)))},fe=function(e){return"$"+Number(e.toFixed(1)).toLocaleString()+" "},he=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.cartItems;return n.a.createElement("div",{className:"alert alert-info"},0===t.length?"Basket is empty":n.a.createElement("div",null,"You have ",t.length," items in the basket. ",n.a.createElement("hr",null)),t.length>0&&n.a.createElement("div",null,n.a.createElement("ul",{style:{marginLeft:-25}},t.map((function(t){return n.a.createElement("li",{key:t.id},n.a.createElement("b",null,t.title),n.a.createElement("button",{style:{float:"right"},className:"btn btn-danger btn-xs",onClick:function(a){return e.props.handleRemoveFromCart(a,t)}},"X"),n.a.createElement("br",null),t.count," X ",fe(t.price))}))),n.a.createElement("b",null,"Sum: ",fe(t.reduce((function(e,t){return e+t.price*t.count}),0))),n.a.createElement("button",{onClick:function(){return alert("Todo: Implement checkout page.")},className:"btn btn-primary"},"checkout")))}}]),t}(i.Component),ge=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).handleRemoveFromCart=function(e,t){a.setState((function(e){var a=e.cartItems.filter((function(e){return e.id!==t.id}));return localStorage.setItem("cartItems",JSON.stringify(a)),{cartItems:a}}))},a.handleAddToCart=function(e,t){a.setState((function(e){var a=e.cartItems,i=!1;return a.forEach((function(e){e.id===t.id&&(e.count+=1,i=!0)})),i||a.push(Object(v.a)({},t,{count:1})),localStorage.setItem("cartItems",JSON.stringify(a)),{cartItems:a}}))},a.state={cartItems:[],inCart:!1},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return console.log(),n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Current Items in Cart:"),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(he,{cartItems:this.state.cartItems,handleRemoveFromCart:this.handleRemoveFromCart}))))}}]),t}(i.Component);ge.contextType=O;a(225);var Ee=function(){return n.a.createElement("div",null,n.a.createElement(ee,null),n.a.createElement(l.c,null,n.a.createElement(l.a,{exact:!0,path:"/",component:T}),n.a.createElement(l.a,{exact:!0,path:"/rooms",component:V}),n.a.createElement(l.a,{exact:!0,path:"/rooms/:payload",component:Y}),n.a.createElement(l.a,{exact:!0,path:"/resturant",component:pe}),n.a.createElement(l.a,{exact:!0,path:"/cart",component:ge}),n.a.createElement(l.a,{component:_})),n.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(C,null,n.a.createElement(s.a,null,n.a.createElement(Ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},23:function(e,t,a){e.exports=a.p+"static/media/room-1.e928a5c4.jpeg"},54:function(e,t){},61:function(e,t,a){},93:function(e,t,a){e.exports=a.p+"static/media/loading-arrow.e9ea7394.gif"}},[[109,1,2]]]);
//# sourceMappingURL=main.a34e8a6b.chunk.js.map