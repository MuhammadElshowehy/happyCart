"use strict";(self.webpackChunkECommerce=self.webpackChunkECommerce||[]).push([[722],{2722:(Q,p,a)=>{a.r(p),a.d(p,{CartModule:()=>O});var u=a(9310),d=a(6282),t=a(4946),l=a(6814),m=a(6992),g=a(8467),h=a(4131),f=a(1379);function _(e,i){1&e&&t._UZ(0,"app-loading")}function C(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",7)(1,"button",8),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.removeAll())}),t._uU(2," Remove all products "),t.qZA()()}}function v(e,i){if(1&e&&t._UZ(0,"app-cart-or-favorite-empty",9),2&e){const n=t.oxw();t.Q6J("titlePage",n.cart)}}function y(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",12),t._UZ(1,"app-product",13),t.TgZ(2,"div",14)(3,"label",15),t._uU(4,"Quantity:"),t.qZA(),t.TgZ(5,"input",16),t.NdJ("input",function(r){const c=t.CHM(n).$implicit,A=t.oxw(2);return t.KtG(A.calcQuantity(c,r))}),t.qZA()(),t.TgZ(6,"button",17),t.NdJ("click",function(){const s=t.CHM(n).index,c=t.oxw(2);return t.KtG(c.remove(s))}),t._uU(7," Remove from cart "),t.qZA()()}if(2&e){const n=i.$implicit;t.xp6(1),t.Q6J("productComp",n),t.xp6(4),t.s9C("value",n.quantity)}}function P(e,i){if(1&e&&(t.TgZ(0,"div",10),t.YNc(1,y,8,2,"div",11),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.cartProducts)}}function x(e,i){if(1&e&&(t.TgZ(0,"button",21),t._uU(1," Your total price is: "),t.TgZ(2,"span"),t._uU(3),t.ALo(4,"currency"),t.qZA()()),2&e){const n=t.oxw(2);t.xp6(3),t.Oqu(t.lcZ(4,1,n.totalPrice))}}function M(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",18),t.YNc(1,x,5,3,"button",19),t.TgZ(2,"button",20),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.goToCheckOut())}),t._uU(3," Proceed to checkout \u2192 "),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.validQuantity),t.xp6(1),t.Q6J("disabled",!n.validQuantity)}}const b=[{path:"",canActivate:[d.a],component:(()=>{var e;class i{constructor(o){this.router=o,this.cartProducts=[],this.isEmpty=!0,this.isLoading=!1,this.cart="Cart",this.popupMessage="",this.totalPrice=0,this.validQuantity=!0}getAuthUser(){return JSON.parse(localStorage.getItem("authUser"))}setAuthUser(o){localStorage.setItem("authUser",JSON.stringify(o))}ngOnInit(){this.authUser=this.getAuthUser(),this.cartProducts=this.placeDefaultQuantity(this.authUser.cart),this.authUser.cart=this.cartProducts,this.setAuthUser(this.authUser),this.calcTotalPrice(),this.isEmpty=0===this.cartProducts.length}placeDefaultQuantity(o){let r=[];for(let s of o)s.quantity||(s=Object.assign({quantity:1},s)),r.push(s);return r}calcQuantity(o,r){let s=+r.target.value;if(s<1)return this.validQuantity=!1,void(this.popupMessage="Please insert a positive number!");this.validQuantity=!0,o.quantity=s;for(let c of this.cartProducts)c.id===o.id&&(c=o);this.authUser.cart=this.cartProducts,this.setAuthUser(this.authUser),this.calcTotalPrice()}calcTotalPrice(){let o=0;for(let r of this.cartProducts)o+=r.price*r.quantity;this.totalPrice=o}receivedFromPopup(o){this.popupMessage=o}removedSuccessfully(){this.popupMessage="Product removed successfully"}removeAll(){this.isLoading=!0,setTimeout(()=>{this.cartProducts=[],this.authUser.cart=[],this.setAuthUser(this.authUser),this.isEmpty=!0,this.totalPrice=0,this.isLoading=!1},1e3)}remove(o){this.isLoading=!0,setTimeout(()=>{this.cartProducts.splice(o,1),this.removedSuccessfully(),this.authUser.cart=this.cartProducts,this.setAuthUser(this.authUser),this.cartProducts.length?this.calcTotalPrice():(this.isEmpty=!0,this.totalPrice=0),this.isLoading=!1},1e3)}goToCheckOut(){this.isLoading=!0,!1!==this.validQuantity&&setTimeout(()=>{this.router.navigate(["/checkout"]),this.isLoading=!1},1e3)}}return(e=i).\u0275fac=function(o){return new(o||e)(t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart"]],decls:11,vars:6,consts:[[4,"ngIf"],[1,"top"],["class","remove-all",4,"ngIf"],[3,"popupMessage","closePopupMessage"],[3,"titlePage",4,"ngIf"],["class","row",4,"ngIf"],["class","proceed",4,"ngIf"],[1,"remove-all"],["type","button",1,"btn","text-light",3,"click"],[3,"titlePage"],[1,"row"],["class","col-sm-6 col-md-6 col-xl-3 col-lg-4",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-6","col-xl-3","col-lg-4"],[3,"productComp"],[1,"form-group","m-1"],["for","quantity"],["id","quantity","type","number","min","1",1,"form-control",3,"value","input"],["type","button",1,"btn","w-100","p-2","text-light",3,"click"],[1,"proceed"],["class","btn","type","button","disabled","",4,"ngIf"],["type","button",1,"btn","text-light",3,"disabled","click"],["type","button","disabled","",1,"btn"]],template:function(o,r){1&o&&(t.YNc(0,_,1,0,"app-loading",0),t.TgZ(1,"div",1)(2,"h1"),t._uU(3,"Your wonderful cart list"),t.qZA(),t.YNc(4,C,3,0,"div",2),t.qZA(),t._UZ(5,"hr"),t.TgZ(6,"app-popup-message",3),t.NdJ("closePopupMessage",function(c){return r.receivedFromPopup(c)}),t.qZA(),t.YNc(7,v,1,1,"app-cart-or-favorite-empty",4),t.TgZ(8,"main"),t.YNc(9,P,2,1,"div",5),t.qZA(),t.YNc(10,M,4,2,"div",6)),2&o&&(t.Q6J("ngIf",r.isLoading),t.xp6(4),t.Q6J("ngIf",!r.isEmpty),t.xp6(2),t.Q6J("popupMessage",r.popupMessage),t.xp6(1),t.Q6J("ngIf",r.isEmpty),t.xp6(2),t.Q6J("ngIf",r.cartProducts),t.xp6(1),t.Q6J("ngIf",r.totalPrice))},dependencies:[l.sg,l.O5,m.N,g.p,h.F,f.h,l.H9],styles:[".top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}button[_ngcontent-%COMP%]{background-color:var(--darkPurple);border:1px solid var(--orange)}button[_ngcontent-%COMP%]:hover{background-color:var(--orange)}.proceed[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;row-gap:10px;margin-top:30px}.proceed[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{width:245px;display:flex;justify-content:space-between;align-items:center}.proceed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--darkPurple);font-size:1.25rem}.proceed[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{font-size:1.25rem;width:245px}.form-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;column-gap:10px}span[_ngcontent-%COMP%]{color:red}label[_ngcontent-%COMP%]{color:var(--darkPurple)}@media (max-width: 576px){main[_ngcontent-%COMP%]{max-width:360px}main[_ngcontent-%COMP%]{justify-content:center;margin:auto}.top[_ngcontent-%COMP%], .proceed[_ngcontent-%COMP%]{flex-direction:column}}"]}),i})()}];let U=(()=>{var e;class i{}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(b),u.Bz]}),i})();var Z=a(6208);let O=(()=>{var e;class i{}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[U,Z.m]}),i})()}}]);