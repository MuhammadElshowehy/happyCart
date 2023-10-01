"use strict";(self.webpackChunkECommerce=self.webpackChunkECommerce||[]).push([[335],{7335:(J,d,p)=>{p.r(d),p.d(d,{UserModule:()=>N});var m=p(6208),a=p(95),g=p(9310),_=p(6282),e=p(4946),h=p(3604),l=p(6814),f=p(6992),Z=p(8467);function U(t,r){1&t&&e._UZ(0,"app-loading")}function w(t,r){1&t&&(e.TgZ(0,"h2",24),e._uU(1,"Your orders"),e.qZA())}function v(t,r){if(1&t&&(e.TgZ(0,"div",31),e._UZ(1,"img",32),e.TgZ(2,"p")(3,"span"),e._uU(4,"Title: "),e.qZA(),e._uU(5),e.qZA(),e.TgZ(6,"p")(7,"span"),e._uU(8,"Quantity: "),e.qZA(),e._uU(9),e.qZA(),e.TgZ(10,"p")(11,"span"),e._uU(12,"Price of single item: "),e.qZA(),e._uU(13),e.ALo(14,"currency"),e.qZA()()),2&t){const s=r.$implicit;e.xp6(1),e.s9C("src",s.image,e.LSH),e.xp6(4),e.Oqu(s.title),e.xp6(4),e.Oqu(s.quantity),e.xp6(4),e.hij("",e.lcZ(14,4,s.price)," ")}}function A(t,r){if(1&t&&(e.TgZ(0,"div",25)(1,"div",26)(2,"span",27),e._uU(3),e.qZA(),e.YNc(4,v,15,6,"div",28),e._UZ(5,"hr",29),e.TgZ(6,"div",30)(7,"div")(8,"p")(9,"span"),e._uU(10,"Full name: "),e.qZA(),e._uU(11),e.qZA(),e.TgZ(12,"p")(13,"span"),e._uU(14,"City: "),e.qZA(),e._uU(15),e.qZA(),e.TgZ(16,"p")(17,"span"),e._uU(18,"Street: "),e.qZA(),e._uU(19),e.qZA(),e.TgZ(20,"p")(21,"span"),e._uU(22,"Phone: "),e.qZA(),e._uU(23),e.qZA()(),e.TgZ(24,"div")(25,"p")(26,"span"),e._uU(27,"Arrival date: "),e.qZA(),e._uU(28),e.qZA(),e.TgZ(29,"p")(30,"span"),e._uU(31,"Total without shipping: "),e.qZA(),e._uU(32),e.ALo(33,"currency"),e.qZA(),e.TgZ(34,"p")(35,"span"),e._uU(36,"Total with shipping: "),e.qZA(),e._uU(37),e.ALo(38,"currency"),e.qZA()()()()()),2&t){const s=r.$implicit,n=r.index;e.xp6(3),e.Oqu(n+1),e.xp6(1),e.Q6J("ngForOf",s.products),e.xp6(7),e.Oqu(s.fullName),e.xp6(4),e.Oqu(s.city),e.xp6(4),e.Oqu(s.streetAddress),e.xp6(4),e.Oqu(s.phone),e.xp6(5),e.Oqu(s.arrivalDate),e.xp6(4),e.hij("",e.lcZ(33,9,s.totalWithOutShipping)," "),e.xp6(5),e.hij("",e.lcZ(38,11,s.totalWithShipping)," ")}}function P(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1," Please insert old password! "),e.qZA())}function C(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1," insert at least six chars contains: 1 upper char, 1 number & 1 special char (!@#$%^&*) "),e.qZA())}function T(t,r){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,P,2,0,"span",0),e.YNc(2,C,2,0,"span",0),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.passwordForm.get("oldPass").errors.required),e.xp6(1),e.Q6J("ngIf",s.passwordForm.get("oldPass").errors.pattern)}}function q(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1," Please insert old password! "),e.qZA())}function O(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1," insert at least six chars contains: 1 upper char, 1 number & 1 special char (!@#$%^&*) "),e.qZA())}function x(t,r){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,q,2,0,"span",0),e.YNc(2,O,2,0,"span",0),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.passwordForm.get("newPass").errors.required),e.xp6(1),e.Q6J("ngIf",s.passwordForm.get("newPass").errors.pattern)}}const y=[{path:"",canActivate:[_.a],component:(()=>{var t;class r{constructor(n){this.authService=n,this.orders=[],this.isLoading=!1,this.popupMessage=""}ngOnInit(){this.fetchUserData(),this.fetchOrders(),this.passwordForm=new a.cw({oldPass:new a.NI(null,[a.kI.required,a.kI.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/)]),newPass:new a.NI(null,[a.kI.required,a.kI.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/)])})}fetchUserData(){this.currentUser=JSON.parse(localStorage.getItem("authUser"))}fetchOrders(){this.orders=this.currentUser.orders}ChangePassword(){let n=JSON.parse(localStorage.getItem("authUser"));n&&(this.passwordForm.value.oldPass===n.password?(n.password=this.passwordForm.value.newPass,localStorage.setItem("authUser",JSON.stringify(n)),this.fetchUserData(),this.popupMessage="Password changed successfully",this.passwordForm.reset()):this.popupMessage="Old password is incorrect!")}showPassword(n){this.authService.showPassword(n)}onSubmit(){this.passwordForm.valid&&(this.isLoading=!0,setTimeout(()=>{this.ChangePassword(),this.isLoading=!1},1e3))}received(n){this.popupMessage=n}deleteAccount(){if("delete"===prompt("write 'delete' if you are sure to delete your account")){this.isLoading=!0,this.authService.checkTypeOfUsersInLocaleStorage();let o=this.authService.usersArray;for(let i=0;i<o.length;i++)this.currentUser.email===o[i].email&&setTimeout(()=>{o.splice(i,1),localStorage.setItem("users",JSON.stringify(o)),this.authService.logOut(),this.isLoading=!1},1e3)}else this.popupMessage="You did not type delete correctly!"}}return(t=r).\u0275fac=function(n){return new(n||t)(e.Y36(h.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user"]],decls:52,vars:11,consts:[[4,"ngIf"],[3,"popupMessage","closePopupMessage"],[1,"row"],[1,"col-sm-12"],[1,"personal-info"],[1,"name"],[1,"email"],["class","text-center",4,"ngIf"],["class","orders",4,"ngFor","ngForOf"],[1,"mt-5",3,"formGroup","ngSubmit"],[1,"form-group"],["for","old",1,"form-label"],["type","password","id","old","formControlName","oldPass",1,"form-control","w-50"],["oldPass",""],[1,"m-1"],["type","checkbox",3,"click"],[1,"form-group","mt-3"],["for","new",1,"form-label"],["type","password","id","new","formControlName","newPass",1,"form-control","w-50"],["newPass",""],["type","submit",1,"btn","text-center","w-25",3,"disabled"],[1,"mt-3"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","text-center","bg-danger","text-light",3,"click"],[1,"text-center"],[1,"orders"],[1,"order","row"],[1,"count"],["class","products col-sm-12 col-md-6 col-lg-4",4,"ngFor","ngForOf"],[1,"m-0"],[1,"order-info","p-0","d-flex","flex-wrap","col-sm-12"],[1,"products","col-sm-12","col-md-6","col-lg-4"],["alt","product-image","loading","lazy",3,"src"]],template:function(n,o){if(1&n){const i=e.EpF();e.YNc(0,U,1,0,"app-loading",0),e.TgZ(1,"app-popup-message",1),e.NdJ("closePopupMessage",function(u){return o.received(u)}),e.qZA(),e.TgZ(2,"h1"),e._uU(3,"profile"),e.qZA(),e._UZ(4,"hr"),e.TgZ(5,"main",2)(6,"section",3)(7,"div",4)(8,"div",5)(9,"p")(10,"span"),e._uU(11,"First name: "),e.qZA(),e._uU(12),e.qZA(),e.TgZ(13,"p")(14,"span"),e._uU(15,"Last name: "),e.qZA(),e._uU(16),e.qZA()(),e.TgZ(17,"p",6)(18,"span"),e._uU(19,"Email: "),e.qZA(),e._uU(20),e.qZA()(),e.YNc(21,w,2,0,"h2",7),e.YNc(22,A,39,13,"div",8),e.TgZ(23,"form",9),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(24,"fieldset")(25,"legend"),e._uU(26,"Change Password:"),e.qZA(),e.TgZ(27,"div",10)(28,"label",11),e._uU(29,"Old password"),e.qZA(),e._UZ(30,"input",12,13),e.TgZ(32,"div",14)(33,"input",15),e.NdJ("click",function(){e.CHM(i);const u=e.MAs(31);return e.KtG(o.showPassword(u))}),e.qZA(),e._uU(34,"show password "),e.qZA(),e.YNc(35,T,3,2,"span",0),e.qZA(),e.TgZ(36,"div",16)(37,"label",17),e._uU(38,"New password"),e.qZA(),e._UZ(39,"input",18,19),e.TgZ(41,"div",14)(42,"input",15),e.NdJ("click",function(){e.CHM(i);const u=e.MAs(40);return e.KtG(o.showPassword(u))}),e.qZA(),e._uU(43,"show password "),e.qZA(),e.YNc(44,x,3,2,"span",0),e.qZA(),e.TgZ(45,"div")(46,"button",20),e._uU(47," Change "),e.qZA()()()()(),e._UZ(48,"hr",21),e.TgZ(49,"div",22)(50,"button",23),e.NdJ("click",function(){return o.deleteAccount()}),e._uU(51," Delete account "),e.qZA()()()}2&n&&(e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("popupMessage",o.popupMessage),e.xp6(11),e.Oqu(o.currentUser.fName),e.xp6(4),e.Oqu(o.currentUser.lName),e.xp6(4),e.Oqu(o.currentUser.email),e.xp6(1),e.Q6J("ngIf",o.orders.length),e.xp6(1),e.Q6J("ngForOf",o.orders),e.xp6(1),e.Q6J("formGroup",o.passwordForm),e.xp6(12),e.Q6J("ngIf",o.passwordForm.get("oldPass").invalid&&o.passwordForm.get("oldPass").touched),e.xp6(9),e.Q6J("ngIf",o.passwordForm.get("newPass").invalid&&o.passwordForm.get("newPass").touched),e.xp6(2),e.Q6J("disabled",o.passwordForm.invalid))},dependencies:[l.sg,l.O5,f.N,Z.p,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,l.H9],styles:["p[_ngcontent-%COMP%]{margin-bottom:5px}p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--purple)}legend[_ngcontent-%COMP%]{font-size:2rem;color:var(--darkPurple)}label[_ngcontent-%COMP%]{color:var(--darkPurple)}input[_ngcontent-%COMP%]{border:1px solid var(--darkPurple)}@media (max-width: 768px){input[_ngcontent-%COMP%]{width:100%!important}}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:40%;margin:10px auto;color:var(--white);background-color:var(--purple)}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--darkPurple);color:var(--white)}h2[_ngcontent-%COMP%]{color:var(--purple);font-size:1.5rem}.order[_ngcontent-%COMP%]{border:1px solid var(--purple);position:relative}.order[_ngcontent-%COMP%]   span.count[_ngcontent-%COMP%]{position:absolute;display:flex;justify-content:center;align-items:center;background-color:var(--darkPurple);color:var(--orange);width:35px;height:35px}.order[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%], .order-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:10px 10px 10px 45px}.order[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}"]}),r})()}];let F=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild(y),g.Bz]}),r})(),N=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[F,m.m,a.UX]}),r})()}}]);