import{_ as m}from"./sweetalert2.esm.all-CKY2Pm8T.js";import{_ as p}from"./kfc-B5a9-Plg.js";import{_,o as n,c as a,a as u,b as t,u as g,d as f,e as l,f as o,F as v,r as x}from"./index-BSt33bxk.js";import{N as B}from"./modal-CJ6pVmrg.js";const $={},k={class:"titleBox"};function h(r,s){return n(),a("div",k,s[0]||(s[0]=[u('<div class="imgBox"><img src="'+m+'" alt="redlogo" class="logImg"><img src="'+p+'" alt="kfc로고" class="bigFather"></div><div class="textBox"><p class="payMentTitle">주문하기</p><p class="paymentInfo">카드 결제 전용</p></div>',2)]))}const N=_($,[["render",h]]),w={},I={class:"slider"};function M(r,s){return n(),a("div",I,s[0]||(s[0]=[t("div",{class:"slide"},null,-1),t("div",{class:"slide"},null,-1),t("div",{class:"slide"},null,-1)]))}const V=_(w,[["render",M]]),b="/assets/here-i8dH-4Ht.png",y="/assets/takeaway-9DEH3mGK.png",O={class:"buttonBox"},C={__name:"MainButtonBox",setup(r){const s=g(),i=f(),e=()=>{s.setOrderOption("eat"),i.push("/mainmenu")},d=()=>{s.setOrderOption("packaging"),i.push("/mainmenu")};return(R,c)=>(n(),a("div",O,[t("div",{class:"here",onClick:e},c[0]||(c[0]=[t("img",{src:b,class:"buttonImg"},null,-1),l(" 매장 식사 ")])),t("div",{class:"takeaway",onClick:d},c[1]||(c[1]=[t("img",{src:y,class:"buttonImg"},null,-1),l(" 포장 주문 ")]))]))}},F={class:"footerBox"},H={__name:"MainFooter",setup(r){const s=()=>{B()};return(i,e)=>(n(),a("div",F,[t("div",{class:"languageBox",onClick:s},"Language"),e[0]||(e[0]=t("div",{class:"guideBox"},[t("p",null,"현금 결제는 카운터에서 가능합니다.")],-1))]))}},S={class:"All_Box",style:{overflow:"hidden"}},G={__name:"Mainpage",setup(r){return(s,i)=>{const e=x("RouterView");return n(),a(v,null,[t("div",S,[o(N),o(V),o(C),o(H)]),o(e)],64)}}};export{G as default};
