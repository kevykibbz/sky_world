"use strict";(self.webpackChunksurvey_app=self.webpackChunksurvey_app||[]).push([[424],{2502:(e,s,r)=>{r.r(s),r.d(s,{default:()=>S});var a=r(2791),t=r(1087),i=r(184);const n=function(){return(0,i.jsx)("div",{className:"modal fade",id:"terms-txt",tabIndex:"-1",role:"dialog","aria-labelledby":"termsLabel","aria-hidden":"true",children:(0,i.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,i.jsxs)("div",{className:"modal-content",children:[(0,i.jsxs)("div",{className:"modal-header",children:[(0,i.jsx)("h4",{className:"modal-title",id:"termsLabel",children:"Terms and conditions"}),(0,i.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,i.jsxs)("div",{className:"modal-body",children:[(0,i.jsx)("h6",{children:"1. Acceptance of Terms"}),(0,i.jsx)("p",{children:"By accessing and using OpinionHarbor, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these Terms and Conditions, please do not use this Website."}),(0,i.jsx)("h6",{children:"2. User Registration"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"a"}),(0,i.jsx)("p",{children:" To participate in surveys and use certain features of the Website, you may be required to register an account. You agree to provide accurate and up-to-date information during the registration process, including your name, email address, and any other requested information."})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"b"}),(0,i.jsx)("p",{children:"You are responsible for maintaining the confidentiality of your account credentials, and you are solely responsible for all activities that occur under your account."})]})]}),(0,i.jsx)("h6",{children:"3. User Content"}),(0,i.jsx)("p",{children:"You may be asked to submit information and content, including your name, programming stack languages, gender, certificates, and a brief description of yourself. You retain ownership of the content you provide"})]}),(0,i.jsx)("div",{className:"modal-footer",children:(0,i.jsx)("button",{type:"button",className:"btn_1","data-bs-dismiss":"modal",children:"Close"})})]})})})};const c=function(e){let{setFormValid:s,setFinalFormData:r}=e;const c=(0,a.useRef)(null),[l,o]=(0,a.useState)({full_name:"",email_address:"",terms:!1}),[d,m]=(0,a.useState)({full_name:!0,email_address:!0,terms:!0}),[h,u]=(0,a.useState)({full_name:"",email_address:"",terms:""});(0,a.useEffect)((()=>{const e=Object.values(l).some((e=>""===e)),r=Object.values(d).every((e=>e))&&!e;s(r)}),[l,d,s]);const p=e=>{const{name:a,value:t,type:i,checked:n}=e.target;let c="";if("email_address"===a){if(t){/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(t)||(c="Please enter a valid email address.")}else c="This field is required.";m({...d,[a]:!c})}else t?"checkbox"===i&&(c=n?"":"Please accept the Terms and Conditions",m({...d,[a]:n})):c="This field is required.",m({...d,[a]:!c});u({...h,[a]:c}),o({...l,[a]:"checkbox"===i?n:t});const p=Object.values(d).every((e=>e));s(p),r((e=>({...e,[a]:"checkbox"===i?n:t})))};return(0,a.useEffect)((()=>{c.current.focus()}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"summary step",children:[(0,i.jsxs)("h3",{className:"main_question",children:[(0,i.jsx)("strong",{children:"1/3"}),"Basic details"]}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"1"}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:"First Name"}),(0,i.jsx)("input",{type:"text",name:"full_name",className:"form-control required ".concat(d.full_name?"":"is-invalid "),placeholder:"What is your full name",title:"[Surname] [First name] [Other Names]",value:l.full_name,onChange:p,ref:c}),h.full_name&&(0,i.jsx)("div",{className:"invalid-feedback",children:h.full_name})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"2"}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:"Email Address"}),(0,i.jsx)("input",{type:"email",name:"email_address",className:"form-control required ".concat(d.email_address?"":"is-invalid "),placeholder:"What is your email address",value:l.email_address,onChange:p}),h.email_address&&(0,i.jsx)("div",{className:"invalid-feedback",children:h.email_address})]})]})]}),(0,i.jsxs)("div",{className:"form-check form-group terms",children:[(0,i.jsxs)("label",{className:" form-check-label container_check",htmlFor:"invalidCheck3",children:["Please accept our"," ",(0,i.jsxs)(t.rU,{to:"#","data-bs-toggle":"modal","data-bs-target":"#terms-txt",rel:"noreferrer",children:[" ","Terms and conditions"]}),(0,i.jsx)("input",{type:"checkbox",name:"terms",id:"invalidCheck3","aria-describedby":"invalidFeedbackCheck3",checked:l.terms,onChange:p,required:!0,className:"form-check-input required ".concat(d.terms?"":"is-invalid ")}),(0,i.jsx)("span",{className:"checkmark"})]}),h.terms&&(0,i.jsx)("div",{id:"invalidFeedbackCheck3",className:"invalid-feedback",children:h.terms})]})]}),(0,i.jsx)(n,{})]})};var l=r(1243),o=r(8175);const d=()=>(0,i.jsxs)(o.ZP,{speed:2,width:200,height:50,viewBox:"0 0 200 50",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,i.jsx)("rect",{x:"0",y:"15",rx:"5",ry:"5",width:"150",height:"10"}),(0,i.jsx)("rect",{x:"0",y:"30",rx:"5",ry:"5",width:"100",height:"10"})]}),m={options:{production:"http://127.0.0.1:8000/api/options",development:"http://127.0.0.1:8000/api/options"},responses:{production:"http://127.0.0.1:8000/api/questions/responses",development:"http://127.0.0.1:8000/api/questions/responses"}};var h=r(3402);const u=function(e){let{setStepTwoValid:s,setFinalFormData:r}=e;const t=(0,a.useRef)(null),[n,c]=(0,a.useState)(!0),[o,u]=(0,a.useState)([]),[p,x]=(0,a.useState)({description:"",gender:""}),[j,f]=(0,a.useState)({description:!0,gender:!0}),[g,b]=(0,a.useState)({description:"",gender:""});(0,a.useEffect)((()=>{const e=Object.values(p).some((e=>""===e)),r=Object.values(j).every((e=>e))&&!e;s(r)}),[p,j,s]),(0,a.useEffect)((()=>{const e=m.options.production;l.Z.get(e).then((e=>{u(e.data.gender),c(!1)})).catch((e=>{h.ZP.error("Error fetching gender options")}))}),[]);const v=e=>{const{name:a,value:t}=e.target;let i="";"gender"===a?(t||(i="Please select a gender."),f({...j,[a]:!i})):(t||(i="This field is required."),f({...j,[a]:!i})),b({...g,[a]:i}),x({...p,[a]:t});const n=Object.values(j).every((e=>e));s(n),r((e=>({...e,[a]:t})))};return(0,a.useEffect)((()=>{t.current.focus()}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"summary step",children:[(0,i.jsxs)("h3",{className:"main_question",children:[(0,i.jsx)("strong",{children:"2/3"}),"General Description"]}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"3"}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:"Description"}),(0,i.jsx)("textarea",{name:"description",className:"form-control required ".concat(j.description?"":"is-invalid "),rows:30,cols:30,placeholder:"Tell us a bit more about yourself",value:p.description,onChange:v,ref:t}),g.description&&(0,i.jsx)("div",{className:"invalid-feedback",children:g.description})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"4"}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:"Gender"}),(0,i.jsx)("br",{}),n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{}),(0,i.jsx)("br",{}),(0,i.jsx)(d,{}),(0,i.jsx)("br",{}),(0,i.jsx)(d,{})]}):(0,i.jsx)("div",{className:"form-group",children:o.map((e=>(0,i.jsxs)("label",{className:"container_radio version_2",children:[e.option.charAt(0).toUpperCase()+e.option.slice(1),(0,i.jsx)("input",{type:"radio",name:"gender",value:e.option,className:"required",onChange:v}),(0,i.jsx)("span",{className:"checkmark"})]},e.id)))}),g.gender&&(0,i.jsx)("div",{className:"invalid-feedback",children:g.gender})]})]})]})]}),(0,i.jsx)(h.x7,{})]})};const p=function(e){let{setStepThreeValid:s,setFinalFormData:r}=e;const[t,n]=(0,a.useState)(!0),[c,o]=(0,a.useState)([]),[u,p]=(0,a.useState)([]),[x,j]=(0,a.useState)([]),[f,g]=(0,a.useState)(""),[b,v]=(0,a.useState)(""),y=m.options.production;(0,a.useEffect)((()=>{l.Z.get(y).then((e=>{o(e.data.programming_stack),n(!1)})).catch((()=>{h.ZP.error("Error fetching programming stack options")}))}),[y]),(0,a.useEffect)((()=>{const e=u.length>0;g(e?"":"Choose at least one programming language");const a=x.every((e=>"application/pdf"===e.type));v(a?"":"Upload only PDF files");s(e&&a);const t={programming_stack:e?u.join(","):"",certificate:a?x:""};r((e=>({...e,...t})))}),[u,r,x,s]);const k=e=>{const s=e.target.value;e.target.checked?p([...u,s]):p(u.filter((e=>e!==s)))};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"summary step",children:[(0,i.jsxs)("h3",{className:"main_question",children:[(0,i.jsx)("strong",{children:"3/3"}),"Programming stacks and Certificates"]}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"5"}),(0,i.jsx)("div",{className:"column-container",children:t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{}),(0,i.jsx)("br",{}),(0,i.jsx)(d,{}),(0,i.jsx)("br",{}),(0,i.jsx)(d,{}),(0,i.jsx)("br",{}),(0,i.jsx)(d,{}),(0,i.jsx)("br",{}),(0,i.jsx)(d,{})]}):c.map((e=>(0,i.jsx)("div",{className:"form-check",children:(0,i.jsxs)("label",{htmlFor:"form-check-".concat(e.id),className:"form-check-label container_radio version_2",children:[e.option.charAt(0).toUpperCase()+e.option.slice(1),(0,i.jsx)("input",{type:"checkbox",id:"form-check-".concat(e.id),name:"programming_stack",className:"form-check-input ".concat(f?"is-invalid ":""),value:e.option,onChange:k}),(0,i.jsx)("span",{className:"checkmark"})]})},e.id)))}),f&&(0,i.jsx)("div",{className:"error-message text-danger",children:f})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"6"}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:"Upload your certificates"}),(0,i.jsx)("input",{type:"file",name:"certificate",required:"required",className:"form-control required ".concat(b?"is-invalid ":""),placeholder:"Upload your certificates",accept:".pdf",title:"You can upload multiple (.pdf)",multiple:!0,onChange:e=>{const s=e.target.files;j([...s])}}),b&&(0,i.jsx)("div",{className:"error-message invalid-feedback",children:b})]})]})]})]}),(0,i.jsx)(h.x7,{})]})};var x=r(9434),j=r(9806),f=r(1632),g=r(4177);const b=function(){const e=(0,x.v9)((e=>e.formState.usersData)),s=(0,x.I0)();return(0,a.useEffect)((()=>{null===e&&s((0,g.uC)(1))}),[e,s]),(0,i.jsxs)("div",{className:"submit step",children:[(0,i.jsxs)("h3",{className:"main_question",children:[(0,i.jsx)("strong",{children:"3/3"})," Summary"]}),(0,i.jsx)("div",{className:"summary",children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"1"}),(0,i.jsx)("h5",{children:"What is your full name?"}),e.full_name&&(0,i.jsx)("p",{children:e.full_name})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"2"}),(0,i.jsx)("h5",{children:"What is your email address"}),e.email_address&&(0,i.jsx)("p",{children:e.email_address})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"3"}),(0,i.jsx)("h5",{children:"Description"}),e.description&&(0,i.jsx)("p",{children:e.description})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"4"}),(0,i.jsx)("h5",{children:"Gender"}),e.gender&&(0,i.jsx)("p",{children:e.gender})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"5"}),(0,i.jsx)("h5",{children:"Programming stacks"}),e.programming_stack&&(0,i.jsx)("p",{children:e.programming_stack})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"6"}),(0,i.jsx)("h5",{children:"Certificates"}),e.certificate&&e.certificate.map(((e,s)=>(0,i.jsx)("div",{children:(0,i.jsxs)("p",{children:["".concat(s+1," : "),(0,i.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(j.G,{icon:f.gSj,style:{color:"#FF0000",marginLeft:"5px"}})," ",e.name]})]})},s)))]})]})})]})};var v=r(5238),y=r.n(v);const k=e=>{let{type:s,message:r}=e;const a={success:f.f8k,error:f.RLE,info:f.sqG},t={backgroundColor:"info"===s?"#d63384":"",color:"white",padding:"1rem",borderRadius:"0.25rem",display:"flex",alignItems:"center"};return(0,i.jsxs)("div",{style:t,children:[(0,i.jsx)(j.G,{icon:a[s],style:{marginRight:"0.5rem"}}),r]})};var N=r(3393);const _=function(){const e=(0,a.useRef)(null),[s,r]=(0,a.useState)(!1),[t,n]=(0,a.useState)(!1),o=(0,x.v9)(g.me),[d,j]=(0,a.useState)(null),[f,v]=(0,a.useState)(!1),[_,S]=(0,a.useState)(!1),[C,w]=(0,a.useState)(!1),F=(0,x.v9)((e=>e.formState.usersData)),q=(0,x.I0)(),T=()=>{o.stepState<4&&(q((0,g.uC)(o.stepState+1)),q((0,g._Y)(o.percentage+33.33)))},P=()=>{o.stepState>1&&(q((0,g.uC)(o.stepState-1)),q((0,g._Y)(o.percentage-33.33)))};return(0,a.useEffect)((()=>{if(null!==d&&"object"===typeof d){7===Object.keys(d).length&&q((0,g.V_)(d))}}),[d,q]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{id:"wizard_container",children:[(0,i.jsx)("div",{id:"top-wizard",children:(0,i.jsx)("div",{id:"progressbar",className:"ui-progressbar ui-widget ui-widget-content ui-corner-all",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":o.percentage,children:(0,i.jsx)("div",{className:"ui-progressbar-value ui-widget-header ui-corner-left",style:{width:"".concat(o.percentage,"%")}})})}),(0,i.jsxs)("form",{id:"wrapped",encType:"multipart/form-data",onSubmit:e=>{e.preventDefault()},ref:e,children:[(0,i.jsxs)("div",{id:"middle-wizard",children:[1===o.stepState&&(0,i.jsx)(c,{setFormValid:v,setFinalFormData:j}),2===o.stepState&&(0,i.jsx)(u,{setStepTwoValid:S,setFinalFormData:j}),3===o.stepState&&(0,i.jsx)(p,{setStepThreeValid:w,setFinalFormData:j}),1!==o.stepState&&2!==o.stepState&&3!==o.stepState&&(0,i.jsx)(b,{})]}),(0,i.jsx)("div",{id:"bottom-wizard",children:1===o.stepState?(0,i.jsx)("button",{type:"button",name:"forward",className:"forward",onClick:T,disabled:!f,children:"Next"}):2===o.stepState?(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)("button",{type:"button",name:"backward",className:"backward",onClick:P,children:"Prev"}),(0,i.jsx)("button",{type:"button",name:"forward",className:"forward",onClick:T,disabled:!_,children:"Next"})]}):3===o.stepState?(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)("button",{type:"button",name:"backward",className:"backward",onClick:P,children:"Prev"}),(0,i.jsx)("button",{type:"button",name:"forward",className:"forward",disabled:!C,onClick:T,children:"Continue"})]}):(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)("button",{type:"button",name:"backward",className:"backward",onClick:P,children:"Prev"}),(0,i.jsx)(y(),{trigger:(0,i.jsx)("button",{type:"submit",name:"process",className:"submit",children:s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("i",{className:"fa fa-spinner-third fa-solid"}),"Submitting..."]}):"Submit"}),titel:"Confirm submitting your survey data",text:(0,i.jsx)("div",{children:"Are you sure you want to submit data provided in the survey form?"}),confirmText:"Yes am sure",cancelText:"No",onConfirmClicked:()=>{if(F){const e=new FormData,s=m.responses.production;e.append("full_name",F.full_name),e.append("email_address",F.email_address),e.append("description",F.description),e.append("gender",F.gender),e.append("programming_stack",F.programming_stack),F.certificate.forEach(((s,r)=>{e.append("certificate",s)})),r(!0),l.Z.put(s,e,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{r(!1),200===e.status&&(h.ZP.success("Survey data submitted successfully"),n(!0),setTimeout((()=>{n(!1)}),5e3))})).catch((e=>{r(!1);const s=e.response.data.errors;void 0!==e.response.data.errors?Object.keys(s).forEach((e=>{const r=s[e],a=e.charAt(0).toUpperCase()+e.slice(1);Array.isArray(r)?r.forEach((e=>{h.ZP.error("".concat(a,": ").concat(e))})):h.ZP.error("".concat(a,": ").concat(r))})):h.ZP.error(e.response.data.message)}))}else q((0,g.uC)(1))},onCancelClicked:e=>{h.ZP.custom((e=>(0,i.jsx)(k,{type:"info",message:"You have cancelled the submission of your survey data."})))}})]})})]})]}),(0,i.jsx)(h.x7,{}),t&&(0,i.jsx)(N.Z,{})]})};const S=function(){const e=(0,x.I0)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"container-fluid full-height",children:(0,i.jsxs)("div",{className:"row row-height",children:[(0,i.jsx)("div",{className:"col-lg-6 content-left",children:(0,i.jsxs)("div",{className:"content-left-wrapper",children:[(0,i.jsx)(t.rU,{to:"/",id:"logo",rel:"noreferrer",children:(0,i.jsx)("img",{src:"img/logo.png",alt:"",width:"49",height:"35"})}),(0,i.jsx)("div",{id:"social",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://facebook.com",children:(0,i.jsx)("i",{className:"icon-facebook"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://twitter.com",children:(0,i.jsx)("i",{className:"icon-twitter"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://instagram.com",children:(0,i.jsx)("i",{className:"icon-instagram"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://linkedin.com",children:(0,i.jsx)("i",{className:"icon-linkedin"})})})]})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:"img/info_graphic_1.svg",alt:"",className:"img-fluid"})}),(0,i.jsx)("h2",{children:"OpinionHarbor Survey"}),(0,i.jsx)("p",{children:"Discover, Share, and Influence. Welcome to OpinionHarbor, where your opinions matter. Take part in surveys that impact industries, shape products, and influence change. Join a community of voices, express your thoughts, and help build a better tomorrow."}),(0,i.jsx)("button",{type:"button",className:"btn_1 rounded",target:"_parent",onClick:()=>{e((0,g.uC)(1)),e((0,g.V_)(null)),e((0,g._Y)(33.33))},children:"Start Your Survey"})]}),(0,i.jsxs)("div",{className:"copy",children:["\xa9 ",(new Date).getFullYear()," OpinionHarbor. All Rights Reserved"]})]})}),(0,i.jsx)("div",{className:"col-lg-6 content-right",id:"start",children:(0,i.jsx)(_,{})})]})})})}}}]);
//# sourceMappingURL=424.415652db.chunk.js.map