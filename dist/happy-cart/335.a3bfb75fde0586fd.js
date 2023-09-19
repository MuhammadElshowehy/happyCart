"use strict";(self.webpackChunkECommerce=self.webpackChunkECommerce||[]).push([[335],{7335:(N,l,p)=>{p.r(l),p.d(l,{UserModule:()=>y});var d=p(6208),a=p(95),c=p(9310),g=p(6282),e=p(4946),m=p(3604),u=p(6814),f=p(6992),h=p(8467);function _(t,o){1&t&&e._UZ(0,"app-loading")}function Z(t,o){1&t&&(e.TgZ(0,"h2",19),e._uU(1,"Your orders"),e.qZA())}function U(t,o){if(1&t&&(e.TgZ(0,"div",26),e._UZ(1,"img",27),e.TgZ(2,"p")(3,"span"),e._uU(4,"Title: "),e.qZA(),e._uU(5),e.qZA(),e.TgZ(6,"p")(7,"span"),e._uU(8,"Quantity: "),e.qZA(),e._uU(9),e.qZA(),e.TgZ(10,"p")(11,"span"),e._uU(12,"Price of single item: "),e.qZA(),e._uU(13),e.ALo(14,"currency"),e.qZA()()),2&t){const s=o.$implicit;e.xp6(1),e.s9C("src",s.image,e.LSH),e.xp6(4),e.Oqu(s.title),e.xp6(4),e.Oqu(s.quantity),e.xp6(4),e.hij("",e.lcZ(14,4,s.price)," ")}}function v(t,o){if(1&t&&(e.TgZ(0,"div",20)(1,"div",21)(2,"span",22),e._uU(3),e.qZA(),e.YNc(4,U,15,6,"div",23),e._UZ(5,"hr",24),e.TgZ(6,"div",25)(7,"div")(8,"p")(9,"span"),e._uU(10,"Full name: "),e.qZA(),e._uU(11),e.qZA(),e.TgZ(12,"p")(13,"span"),e._uU(14,"City: "),e.qZA(),e._uU(15),e.qZA(),e.TgZ(16,"p")(17,"span"),e._uU(18,"Street: "),e.qZA(),e._uU(19),e.qZA(),e.TgZ(20,"p")(21,"span"),e._uU(22,"Phone: "),e.qZA(),e._uU(23),e.qZA()(),e.TgZ(24,"div")(25,"p")(26,"span"),e._uU(27,"Arrival date: "),e.qZA(),e._uU(28),e.qZA(),e.TgZ(29,"p")(30,"span"),e._uU(31,"Total without shipping: "),e.qZA(),e._uU(32),e.ALo(33,"currency"),e.qZA(),e.TgZ(34,"p")(35,"span"),e._uU(36,"Total with shipping: "),e.qZA(),e._uU(37),e.ALo(38,"currency"),e.qZA()()()()()),2&t){const s=o.$implicit,r=o.index;e.xp6(3),e.Oqu(r+1),e.xp6(1),e.Q6J("ngForOf",s.products),e.xp6(7),e.Oqu(s.fullName),e.xp6(4),e.Oqu(s.city),e.xp6(4),e.Oqu(s.streetAddress),e.xp6(4),e.Oqu(s.phone),e.xp6(5),e.Oqu(s.arrivalDate),e.xp6(4),e.hij("",e.lcZ(33,9,s.totalWithOutShipping)," "),e.xp6(5),e.hij("",e.lcZ(38,11,s.totalWithShipping)," ")}}function A(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1," Please insert old password! "),e.qZA())}function w(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1," insert at least six chars contains: 1 upper char, 1 number & 1 special char (!@#$%^&*) "),e.qZA())}function P(t,o){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,A,2,0,"span",0),e.YNc(2,w,2,0,"span",0),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.passwordForm.get("oldPass").errors.required),e.xp6(1),e.Q6J("ngIf",s.passwordForm.get("oldPass").errors.pattern)}}function q(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1," Please insert old password! "),e.qZA())}function C(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1," insert at least six chars contains: 1 upper char, 1 number & 1 special char (!@#$%^&*) "),e.qZA())}function O(t,o){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,q,2,0,"span",0),e.YNc(2,C,2,0,"span",0),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.passwordForm.get("newPass").errors.required),e.xp6(1),e.Q6J("ngIf",s.passwordForm.get("newPass").errors.pattern)}}const x=[{path:"",canActivate:[g.a],component:(()=>{var t;class o{constructor(r){this.authService=r,this.orders=[],this.isLoading=!1,this.popupMessage=""}ngOnInit(){this.fetchUserData(),this.fetchOrders(),this.passwordForm=new a.cw({oldPass:new a.NI(null,[a.kI.required,a.kI.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/)]),newPass:new a.NI(null,[a.kI.required,a.kI.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/)])})}fetchUserData(){this.currentUser=JSON.parse(localStorage.getItem("authUser"))}fetchOrders(){this.orders=this.currentUser.orders}ChangePassword(){let r=JSON.parse(localStorage.getItem("authUser"));r&&(this.passwordForm.value.oldPass===r.password?(r.password=this.passwordForm.value.newPass,localStorage.setItem("authUser",JSON.stringify(r)),this.fetchUserData(),this.popupMessage="Password changed successfully",this.passwordForm.reset()):this.popupMessage="Old password is incorrect!")}onSubmit(){this.passwordForm.valid&&(this.isLoading=!0,setTimeout(()=>{this.ChangePassword(),this.isLoading=!1},1e3))}received(r){this.popupMessage=r}deleteAccount(){if("delete"===prompt("write 'delete' if you are sure to delete your account")){this.isLoading=!0,this.authService.checkTypeOfUsersInLocaleStorage();let n=this.authService.usersArray;for(let i=0;i<n.length;i++)this.currentUser.email===n[i].email&&setTimeout(()=>{n.splice(i,1),localStorage.setItem("users",JSON.stringify(n)),this.authService.logOut(),this.isLoading=!1},1e3)}else this.popupMessage="You did not type delete correctly!"}}return(t=o).\u0275fac=function(r){return new(r||t)(e.Y36(m.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user"]],decls:48,vars:12,consts:[[4,"ngIf"],[3,"popupMessage","closePopupMessage"],[1,"row"],[1,"col-sm-12"],[1,"personal-info"],[1,"name"],[1,"email"],["class","text-center",4,"ngIf"],["class","orders",4,"ngFor","ngForOf"],[1,"mt-5",3,"formGroup","ngSubmit"],[1,"form-group"],["for","old",1,"form-label"],["type","text","id","old","formControlName","oldPass",1,"form-control","w-50"],["for","new",1,"form-label"],["type","text","id","new","formControlName","newPass",1,"form-control","w-50"],["type","submit",1,"btn","text-center","w-25",3,"disabled"],[1,"mt-3"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","text-center","bg-danger","text-light",3,"click"],[1,"text-center"],[1,"orders"],[1,"order","row"],[1,"count"],["class","products col-sm-12 col-md-6 col-lg-4",4,"ngFor","ngForOf"],[1,"m-0"],[1,"order-info","p-0","d-flex","flex-wrap","col-sm-12"],[1,"products","col-sm-12","col-md-6","col-lg-4"],["alt","product-image","loading","lazy",3,"src"]],template:function(r,n){1&r&&(e.YNc(0,_,1,0,"app-loading",0),e.TgZ(1,"app-popup-message",1),e.NdJ("closePopupMessage",function(F){return n.received(F)}),e.qZA(),e.TgZ(2,"h1"),e._uU(3,"profile"),e.qZA(),e._UZ(4,"hr"),e.TgZ(5,"main",2)(6,"section",3)(7,"div",4)(8,"div",5)(9,"p")(10,"span"),e._uU(11,"First name: "),e.qZA(),e._uU(12),e.qZA(),e.TgZ(13,"p")(14,"span"),e._uU(15,"Last name: "),e.qZA(),e._uU(16),e.qZA()(),e.TgZ(17,"p",6)(18,"span"),e._uU(19,"Email: "),e.qZA(),e._uU(20),e.qZA(),e.TgZ(21,"p")(22,"span"),e._uU(23,"Password: "),e.qZA(),e._uU(24),e.qZA()(),e.YNc(25,Z,2,0,"h2",7),e.YNc(26,v,39,13,"div",8),e.TgZ(27,"form",9),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(28,"fieldset")(29,"legend"),e._uU(30,"Change Password:"),e.qZA(),e.TgZ(31,"div",10)(32,"label",11),e._uU(33,"Old password"),e.qZA(),e._UZ(34,"input",12),e.YNc(35,P,3,2,"span",0),e.qZA(),e.TgZ(36,"div",10)(37,"label",13),e._uU(38,"New password"),e.qZA(),e._UZ(39,"input",14),e.YNc(40,O,3,2,"span",0),e.qZA(),e.TgZ(41,"div")(42,"button",15),e._uU(43," Change "),e.qZA()()()()(),e._UZ(44,"hr",16),e.TgZ(45,"div",17)(46,"button",18),e.NdJ("click",function(){return n.deleteAccount()}),e._uU(47," Delete account "),e.qZA()()()),2&r&&(e.Q6J("ngIf",n.isLoading),e.xp6(1),e.Q6J("popupMessage",n.popupMessage),e.xp6(11),e.Oqu(n.currentUser.fName),e.xp6(4),e.Oqu(n.currentUser.lName),e.xp6(4),e.Oqu(n.currentUser.email),e.xp6(4),e.Oqu(n.currentUser.password),e.xp6(1),e.Q6J("ngIf",n.orders.length),e.xp6(1),e.Q6J("ngForOf",n.orders),e.xp6(1),e.Q6J("formGroup",n.passwordForm),e.xp6(8),e.Q6J("ngIf",n.passwordForm.get("oldPass").invalid&&n.passwordForm.get("oldPass").touched),e.xp6(5),e.Q6J("ngIf",n.passwordForm.get("newPass").invalid&&n.passwordForm.get("newPass").touched),e.xp6(2),e.Q6J("disabled",n.passwordForm.invalid))},dependencies:[u.sg,u.O5,f.N,h.p,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,u.H9],styles:["p[_ngcontent-%COMP%]{margin-bottom:5px}p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--purple)}legend[_ngcontent-%COMP%]{font-size:2rem;color:var(--darkPurple)}label[_ngcontent-%COMP%]{color:var(--darkPurple)}input[_ngcontent-%COMP%]{border:1px solid var(--darkPurple)}@media (max-width: 768px){input[_ngcontent-%COMP%]{width:100%!important}}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:40%;margin:10px auto;color:var(--white);background-color:var(--purple)}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--darkPurple);color:var(--white)}h2[_ngcontent-%COMP%]{color:var(--purple);font-size:1.5rem}.order[_ngcontent-%COMP%]{border:1px solid var(--purple);position:relative}.order[_ngcontent-%COMP%]   span.count[_ngcontent-%COMP%]{position:absolute;display:flex;justify-content:center;align-items:center;background-color:var(--darkPurple);color:var(--orange);width:35px;height:35px}.order[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%], .order-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:10px 10px 10px 45px}.order[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}"]}),o})()}];let M=(()=>{var t;class o{}return(t=o).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(x),c.Bz]}),o})(),y=(()=>{var t;class o{}return(t=o).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[M,d.m,a.UX]}),o})()}}]);