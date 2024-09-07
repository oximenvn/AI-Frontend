const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Qa-WJGm9gB3.js","./index-CgSlfPJF.js","./index-CjT__D29.css","./index-DvL50hbV.js","./index.esm-BOTtKH0M.js","./CRow-CjSQ_Wxj.js","./CCardBody-DcYjC8v1.js","./CCardHeader-DAhs6e_W.js","./CForm-CfRmUBNQ.js","./CFormTextarea-C5oZ3Rd2.js","./CFormControlWrapper-D8h4-a2a.js","./CFormControlValidation-BEHPIdK1.js","./CFormLabel-DcxmMUfk.js","./CButton-DAYe9zpV.js","./CInputGroupText-dlMBHQWM.js","./cil-lock-locked-DmxpJbVL.js","./CFormInput-CbsDqQco.js","./CAccordionHeader-YtX-Nvr9.js","./CCollapse-DehsZeNM.js","./CAlertHeading-CMdepxFo.js","./Dashboard-DxHgaiJw.js","./WidgetsDropdown-DVYPuSly.js","./index.esm-BvnQ6b9p.js","./cib-twitter-00_H7eLt.js","./cil-people-BKgPdOQQ.js","./CDropdownToggle-B_5UmeGe.js","./CConditionalPortal-BMHfL15n.js","./isRTL-j-lcr31G.js","./getNextActiveElement-BFbndcFM.js","./cil-user-female-Dz9e4tbB.js","./CButtonGroup-CS2SHLeB.js","./CCardFooter-CkoN7-3H.js","./CProgress-BZIV-b2s.js","./CTable-6uYtwnaH.js","./cil-user-Ddrdy7PS.js","./cib-google-C6akqOlX.js","./cif-us-DcptizC8.js","./Colors-BFFWGh3H.js","./Typography-DYIMT4_5.js","./Accordion-BsSwt7wj.js","./Breadcrumbs-U44ghyPH.js","./Cards-CG35Y3RE.js","./react-DOh6XfOk.js","./CCardTitle-CHsmtlK_.js","./CListGroupItem-DD7KtQm1.js","./CCardGroup-BY12mvsr.js","./Carousels-CkoLroNp.js","./Collapses-_060Wf8j.js","./ListGroups-0Q45FKli.js","./CFormCheck-BWiLir3N.js","./Navs-D3PN2_YK.js","./Paginations-BfQGT99W.js","./Placeholders-BV82AMm5.js","./Popovers-BjuswmrC.js","./CPopover-CPbJxquM.js","./getRTLPlacement-C1bywFYE.js","./getTransitionDurationFromElement-Cpu4p4hx.js","./Progress-Bqcvb1Nl.js","./Spinners-P7F1MRlV.js","./Tabs-DzEaHkoH.js","./Tables-BVpJeJY1.js","./Tooltips-D2xmhr2V.js","./CTooltip-Bx9cvevb.js","./Buttons-OXRau7y4.js","./ButtonGroups-DPPt3IPK.js","./CDropdownDivider-eBaCUMmN.js","./Dropdowns-qQQV6sQ7.js","./ChecksRadios-CZkZntb7.js","./FloatingLabels-BZ57ODbR.js","./CFormSelect-D74y7pF2.js","./FormControl-nU0YmYKp.js","./InputGroup-DoPeZn_P.js","./Layout-BDE4Zhs7.js","./Range-BYUs8NQ8.js","./Select-B519mYFN.js","./Validation-BIPbE0cm.js","./Charts-CtO96WG8.js","./CoreUIIcons-BdHeGBao.js","./cil-user-follow-BSAO1d7D.js","./cil-magnifying-glass-COgjSVTM.js","./Brands-IaNaxzQs.js","./Flags-SSNCgjUs.js","./Alerts-Z7z8Tk2o.js","./Badges-Bm0l_mf3.js","./Modals-DEr9Sv4M.js","./Toasts-CICUKHZ_.js","./Widgets-by-w9PQN.js"])))=>i.map(i=>d[i]);
import{r as d,R as c,a as a1,_ as w,b as N,c as z,P as l,d as E1,s as z2,t as M2,e as w2,f as y,u as S2,j as p,C as O2,g as _2,h as Z1,N as A2,i as T2,k as L2,l as X1}from"./index-CgSlfPJF.js";import{C as u1,a as D2,b as O}from"./index.esm-BOTtKH0M.js";function m1(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return d.useMemo(function(){return t.every(function(o){return o==null})?null:function(o){t.forEach(function(e){R2(e,o)})}},t)}function R2(t,r){if(t!=null)if(F2(t))t(r);else try{t.current=r}catch{throw new Error('Cannot assign value "'.concat(r,'" to ref "').concat(t,'"'))}}function F2(t){return!!(t&&{}.toString.call(t)=="[object Function]")}function j2(t,r){if(t==null)return{};var o={},e=Object.keys(t),i,n;for(n=0;n<e.length;n++)i=e[n],!(r.indexOf(i)>=0)&&(o[i]=t[i]);return o}function x1(t,r){return x1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,i){return e.__proto__=i,e},x1(t,r)}function P2(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,x1(t,r)}var q1={disabled:!1},c2=c.createContext(null),V2=function(r){return r.scrollTop},t1="unmounted",Z="exited",X="entering",U="entered",N1="exiting",V=function(t){P2(r,t);function r(e,i){var n;n=t.call(this,e,i)||this;var s=i,a=s&&!s.isMounting?e.enter:e.appear,C;return n.appearStatus=null,e.in?a?(C=Z,n.appearStatus=X):C=U:e.unmountOnExit||e.mountOnEnter?C=t1:C=Z,n.state={status:C},n.nextCallback=null,n}r.getDerivedStateFromProps=function(i,n){var s=i.in;return s&&n.status===t1?{status:Z}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(i){var n=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==X&&s!==U&&(n=X):(s===X||s===U)&&(n=N1)}this.updateStatus(!1,n)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var i=this.props.timeout,n,s,a;return n=s=a=i,i!=null&&typeof i!="number"&&(n=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:n,enter:s,appear:a}},o.updateStatus=function(i,n){if(i===void 0&&(i=!1),n!==null)if(this.cancelNextCallback(),n===X){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:a1.findDOMNode(this);s&&V2(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Z&&this.setState({status:t1})},o.performEnter=function(i){var n=this,s=this.props.enter,a=this.context?this.context.isMounting:i,C=this.props.nodeRef?[a]:[a1.findDOMNode(this),a],u=C[0],f=C[1],m=this.getTimeouts(),g=a?m.appear:m.enter;if(!i&&!s||q1.disabled){this.safeSetState({status:U},function(){n.props.onEntered(u)});return}this.props.onEnter(u,f),this.safeSetState({status:X},function(){n.props.onEntering(u,f),n.onTransitionEnd(g,function(){n.safeSetState({status:U},function(){n.props.onEntered(u,f)})})})},o.performExit=function(){var i=this,n=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:a1.findDOMNode(this);if(!n||q1.disabled){this.safeSetState({status:Z},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:N1},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:Z},function(){i.props.onExited(a)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(i,n){n=this.setNextCallback(n),this.setState(i,n)},o.setNextCallback=function(i){var n=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,n.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},o.onTransitionEnd=function(i,n){this.setNextCallback(n);var s=this.props.nodeRef?this.props.nodeRef.current:a1.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var C=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=C[0],f=C[1];this.props.addEndListener(u,f)}i!=null&&setTimeout(this.nextCallback,i)},o.render=function(){var i=this.state.status;if(i===t1)return null;var n=this.props,s=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var a=j2(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return c.createElement(c2.Provider,{value:null},typeof s=="function"?s(i,a):c.cloneElement(c.Children.only(s),a))},r}(c.Component);V.contextType=c2;V.propTypes={};function q(){}V.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:q,onEntering:q,onEntered:q,onExit:q,onExiting:q,onExited:q};V.UNMOUNTED=t1;V.EXITED=Z;V.ENTERING=X;V.ENTERED=U;V.EXITING=N1;var k1=d.forwardRef(function(t,r){var o=t.className,e=t.dark,i=t.disabled,n=t.white,s=w(t,["className","dark","disabled","white"]);return c.createElement("button",N({type:"button",className:z("btn","btn-close",{"btn-close-white":n},i,o),"aria-label":"Close",disabled:i},e&&{"data-coreui-theme":"dark"},s,{ref:r}))});k1.propTypes={className:l.string,dark:l.bool,disabled:l.bool,white:l.bool};k1.displayName="CCloseButton";var z1=d.forwardRef(function(t,r){var o=t.className,e=o===void 0?"modal-backdrop":o,i=t.visible,n=w(t,["className","visible"]),s=d.useRef(null),a=m1(r,s);return c.createElement(V,{in:i,mountOnEnter:!0,nodeRef:s,timeout:150,unmountOnExit:!0},function(C){return c.createElement("div",N({className:z(e,"fade",{show:C==="entered"})},n,{ref:a}))})});z1.propTypes={className:l.string,visible:l.bool};z1.displayName="CBackdrop";var M1=d.forwardRef(function(t,r){var o,e=t.children,i=t.as,n=i===void 0?"span":i,s=t.className,a=t.color,C=t.position,u=t.shape,f=t.size,m=t.textBgColor,g=t.textColor,v=w(t,["children","as","className","color","position","shape","size","textBgColor","textColor"]);return c.createElement(n,N({className:z("badge",(o={},o["bg-".concat(a)]=a,o["position-absolute translate-middle"]=C,o["top-0"]=C==null?void 0:C.includes("top"),o["top-100"]=C==null?void 0:C.includes("bottom"),o["start-100"]=C==null?void 0:C.includes("end"),o["start-0"]=C==null?void 0:C.includes("start"),o["badge-".concat(f)]=f,o["text-".concat(g)]=g,o["text-bg-".concat(m)]=m,o),u,s)},v,{ref:r}),e)});M1.propTypes={as:l.string,children:l.node,className:l.string,color:E1,position:l.oneOf(["top-start","top-end","bottom-end","bottom-start"]),shape:z2,size:l.oneOf(["sm"]),textBgColor:E1,textColor:M2};M1.displayName="CBadge";var w1=d.forwardRef(function(t,r){var o=t.children,e=t.className,i=w(t,["children","className"]);return c.createElement("nav",{"aria-label":"breadcrumb"},c.createElement("ol",N({className:z("breadcrumb",e)},i,{ref:r}),o))});w1.propTypes={children:l.node,className:l.string};w1.displayName="CBreadcrumb";var C1=d.forwardRef(function(t,r){var o=t.children,e=t.active,i=t.className,n=t.href,s=w(t,["children","active","className","href"]);return c.createElement("li",N({className:z("breadcrumb-item",{active:e},i)},e&&{"aria-current":"page"},s,{ref:r}),n?c.createElement(u1,{href:n},o):o)});C1.propTypes={active:l.bool,children:l.node,className:l.string,href:l.string};C1.displayName="CBreadcrumbItem";var S1=d.forwardRef(function(t,r){var o,e=t.children,i=t.className,n=t.color,s=w(t,["children","className","color"]);return c.createElement("div",N({className:z("callout",(o={},o["callout-".concat(n)]=n,o),i)},s,{ref:r}),e)});S1.propTypes={children:l.node,className:l.string,color:E1};S1.displayName="CCallout";var l1=function(t){var r=t.getBoundingClientRect();return Math.floor(r.top)>=0&&Math.floor(r.left)>=0&&Math.floor(r.bottom)<=(window.innerHeight||document.documentElement.clientHeight)&&Math.floor(r.right)<=(window.innerWidth||document.documentElement.clientWidth)},O1=d.forwardRef(function(t,r){var o,e=t.children,i=t.className,n=t.position,s=w(t,["children","className","position"]);return c.createElement("div",N({className:z("footer",(o={},o["footer-".concat(n)]=n,o),i)},s,{ref:r}),e)});O1.propTypes={children:l.node,className:l.string,position:l.oneOf(["fixed","sticky"])};O1.displayName="CFooter";var _1=d.forwardRef(function(t,r){var o,e=t.children,i=t.as,n=i===void 0?"ul":i,s=t.className,a=t.layout,C=t.variant,u=w(t,["children","as","className","layout","variant"]);return c.createElement(n,N({className:z("nav",(o={},o["nav-".concat(a)]=a,o["nav-".concat(C)]=C,o),s),role:"navigation"},u,{ref:r}),e)});_1.propTypes={as:l.elementType,children:l.node,className:l.string,layout:l.oneOf(["fill","justified"]),variant:l.oneOf(["pills","tabs","underline","underline-border"])};_1.displayName="CNav";var A1=d.createContext({}),C2=function(t,r,o){return c.Children.map(t,function(e,i){if(!c.isValidElement(e)||e.type.displayName!=="CNavGroup"&&e.type.displayName!=="CNavLink"&&e.type.displayName!=="CNavItem")return e;var n=r?o?"".concat(r,".").concat(i):"".concat(r):"".concat(i);return e.props&&e.props.children?c.cloneElement(e,{idx:n,children:C2(e.props.children,n,e.type.displayName!=="CNavItem")}):c.cloneElement(e,{idx:n})})},T1=d.forwardRef(function(t,r){var o=t.children,e=t.as,i=e===void 0?"ul":e,n=t.className,s=w(t,["children","as","className"]),a=d.useState(""),C=a[0],u=a[1],f={visibleGroup:C,setVisibleGroup:u};return c.createElement(A1.Provider,{value:f},c.createElement(i,N({className:z("sidebar-nav",n),ref:r},s),C2(o)))});T1.propTypes={as:l.elementType,children:l.node,className:l.string};T1.displayName="CSidebarNav";var U1=function(t,r){var o=t.toString().split("."),e=r.toString().split(".");return e.every(function(i,n){return i===o[n]})},H=d.forwardRef(function(t,r){var o=t.children,e=t.as,i=e===void 0?"li":e,n=t.className,s=t.compact,a=t.idx,C=t.toggler,u=t.visible,f=w(t,["children","as","className","compact","idx","toggler","visible"]),m=d.useState(),g=m[0],v=m[1],k=d.useRef(null),M=d.useContext(A1),S=M.visibleGroup,b=M.setVisibleGroup,T=d.useState(!!(u||a&&S&&U1(S,a))),D=T[0],R=T[1];d.useEffect(function(){R(!!(a&&S&&U1(S,a)))},[S]);var F=function(P){P.preventDefault(),b(D?a!=null&&a.toString().includes(".")?a.slice(0,a.lastIndexOf(".")):"":a),R(!D)},E={height:0},x=function(){k.current&&v(k.current.scrollHeight)},_=function(){v("auto")},$=function(){k.current&&v(k.current.scrollHeight)},o1=function(){var P;(P=k.current)===null||P===void 0||P.offsetHeight,v(0)},i1=function(){v(0)},n1={entering:{display:"block",height:g},entered:{display:"block",height:g},exiting:{display:"block",height:g},exited:{height:g},unmounted:{}},s1=i==="li"?"ul":"div";return c.createElement(i,N({className:z("nav-group",{show:D},n)},f,{ref:r}),C&&c.createElement("a",{className:"nav-link nav-group-toggle",onClick:function(P){return F(P)}},C),c.createElement(V,{in:D,nodeRef:k,onEntering:x,onEntered:_,onExit:$,onExiting:o1,onExited:i1,timeout:300},function(P){return c.createElement(s1,{className:z("nav-group-items",{compact:s}),style:N(N({},E),n1[P]),ref:k},o)}))});H.propTypes={as:l.elementType,children:l.node,className:l.string,compact:l.bool,idx:l.string,toggler:l.oneOfType([l.string,l.node]),visible:l.bool};H.displayName="CNavGroup";var K=d.forwardRef(function(t,r){var o=t.children,e=t.className,i=t.idx,n=w(t,["children","className","idx"]),s=d.useRef(null),a=m1(r,s),C=d.useContext(A1).setVisibleGroup;return d.useEffect(function(){var u;n.active=(u=s.current)===null||u===void 0?void 0:u.classList.contains("active"),i&&n.active&&C(i)},[n.active,e]),c.createElement(u1,N({className:z("nav-link",e)},n,{ref:a}),o)});K.propTypes={active:l.bool,as:l.elementType,children:l.node,className:l.string,disabled:l.bool,idx:l.string};K.displayName="CNavLink";var h=d.forwardRef(function(t,r){var o=t.children,e=t.as,i=e===void 0?"li":e,n=t.className,s=w(t,["children","as","className"]);return c.createElement(i,{className:z("nav-item",n),ref:r},s.href||s.to?c.createElement(K,N({className:n},s),o):o)});h.propTypes={as:l.elementType,children:l.node,className:l.string};h.displayName="CNavItem";var r1=d.forwardRef(function(t,r){var o=t.children,e=t.as,i=e===void 0?"li":e,n=t.className,s=w(t,["children","as","className"]);return c.createElement(i,N({className:z("nav-title",n)},s,{ref:r}),o)});r1.propTypes={as:l.elementType,children:l.node,className:l.string};r1.displayName="CNavTitle";var y1=function(t){return!!getComputedStyle(t).getPropertyValue("--cui-is-mobile")},L1=d.forwardRef(function(t,r){var o,e=t.children,i=t.className,n=t.colorScheme,s=t.narrow,a=t.onHide,C=t.onShow,u=t.onVisibleChange,f=t.overlaid,m=t.placement,g=t.position,v=t.size,k=t.unfoldable,M=t.visible,S=w(t,["children","className","colorScheme","narrow","onHide","onShow","onVisibleChange","overlaid","placement","position","size","unfoldable","visible"]),b=d.useRef(null),T=m1(r,b),D=d.useState(),R=D[0],F=D[1],E=d.useState(!1),x=E[0],_=E[1],$=d.useState(!1),o1=$[0],i1=$[1],n1=d.useState(M!==void 0?M:!f),s1=n1[0],P=n1[1];d.useEffect(function(){b.current&&_(y1(b.current)),M!==void 0&&I1(M)},[M]),d.useEffect(function(){R!==void 0&&u&&u(R),!R&&a&&a(),R&&C&&C()},[R]),d.useEffect(function(){x&&i1(!1)},[x]),d.useEffect(function(){var j,G;return b.current&&_(y1(b.current)),b.current&&F(l1(b.current)),window.addEventListener("resize",B1),window.addEventListener("mouseup",$1),window.addEventListener("keyup",H1),(j=b.current)===null||j===void 0||j.addEventListener("mouseup",G1),(G=b.current)===null||G===void 0||G.addEventListener("transitionend",function(){b.current&&F(l1(b.current))}),function(){var f1,v1;window.removeEventListener("resize",B1),window.removeEventListener("mouseup",$1),window.removeEventListener("keyup",H1),(f1=b.current)===null||f1===void 0||f1.removeEventListener("mouseup",G1),(v1=b.current)===null||v1===void 0||v1.removeEventListener("transitionend",function(){b.current&&F(l1(b.current))})}});var I1=function(j){if(x){i1(j);return}P(j)},h1=function(){I1(!1)},B1=function(){b.current&&_(y1(b.current)),b.current&&F(l1(b.current))},H1=function(j){x&&b.current&&!b.current.contains(j.target)&&h1()},$1=function(j){x&&b.current&&!b.current.contains(j.target)&&h1()},G1=function(j){var G=j.target;G&&G.classList.contains("nav-link")&&!G.classList.contains("nav-group-toggle")&&x&&h1()};return c.createElement(c.Fragment,null,c.createElement("div",N({className:z("sidebar",(o={},o["sidebar-".concat(n)]=n,o["sidebar-narrow"]=s,o["sidebar-overlaid"]=f,o["sidebar-".concat(m)]=m,o["sidebar-".concat(g)]=g,o["sidebar-".concat(v)]=v,o["sidebar-narrow-unfoldable"]=k,o.show=x&&o1||f&&s1,o.hide=s1===!1&&!x&&!f,o),i)},S,{ref:T}),e),typeof window<"u"&&x&&w2.createPortal(c.createElement(z1,{className:"sidebar-backdrop",visible:x&&o1}),document.body))});L1.propTypes={children:l.node,className:l.string,colorScheme:l.oneOf(["dark","light"]),narrow:l.bool,onHide:l.func,onShow:l.func,onVisibleChange:l.func,overlaid:l.bool,placement:l.oneOf(["start","end"]),position:l.oneOf(["fixed","sticky"]),size:l.oneOf(["sm","lg","xl"]),unfoldable:l.bool,visible:l.bool};L1.displayName="CSidebar";var D1=d.forwardRef(function(t,r){var o=t.children,e=t.as,i=e===void 0?"a":e,n=t.className,s=w(t,["children","as","className"]);return c.createElement(i,N({className:z("sidebar-brand",n),ref:r},s),o)});D1.propTypes={as:l.elementType,children:l.node,className:l.string};D1.displayName="CSidebarBrand";var R1=d.forwardRef(function(t,r){var o=t.children,e=t.className,i=w(t,["children","className"]);return c.createElement("div",N({className:z("sidebar-footer",e),ref:r},i),o)});R1.propTypes={children:l.node,className:l.string};R1.displayName="CSidebarFooter";var F1=d.forwardRef(function(t,r){var o=t.children,e=t.className,i=w(t,["children","className"]);return c.createElement("button",N({className:z("sidebar-toggler",e),ref:r},i),o)});F1.propTypes={children:l.node,className:l.string};F1.displayName="CSidebarToggler";var j1=d.forwardRef(function(t,r){var o=t.children,e=t.className,i=w(t,["children","className"]);return c.createElement("div",N({className:z("sidebar-header",e),ref:r},i),o)});j1.propTypes={children:l.node,className:l.string};j1.displayName="CSidebarHeader";var P1=d.forwardRef(function(t,r){var o=t.children,e=t.className,i=w(t,["children","className"]);return c.createElement("div",N({className:z("tab-content",e)},i,{ref:r}),o)});P1.propTypes={children:l.node,className:l.string};P1.displayName="CTabContent";var V1=d.forwardRef(function(t,r){var o=t.children,e=t.className,i=t.onHide,n=t.onShow,s=t.transition,a=s===void 0?!0:s,C=t.visible,u=w(t,["children","className","onHide","onShow","transition","visible"]),f=d.useRef(),m=m1(r,f);return c.createElement(V,{in:C,nodeRef:f,onEnter:n,onExit:i,timeout:150},function(g){return c.createElement("div",N({className:z("tab-pane",{active:C,fade:a,show:g==="entered"},e)},u,{ref:m}),o)})});V1.propTypes={children:l.node,className:l.string,onHide:l.func,onShow:l.func,transition:l.bool,visible:l.bool};V1.displayName="CTabPane";const W2=c.lazy(()=>y(()=>import("./Qa-WJGm9gB3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url)),I2=c.lazy(()=>y(()=>import("./Dashboard-DxHgaiJw.js"),__vite__mapDeps([20,1,2,3,4,21,22,5,6,7,23,24,25,26,13,27,28,29,30,31,32,33,34,35,36]),import.meta.url)),Y1=c.lazy(()=>y(()=>import("./Colors-BFFWGh3H.js"),__vite__mapDeps([37,1,2,3,4,6,7,5]),import.meta.url)),B2=c.lazy(()=>y(()=>import("./Typography-DYIMT4_5.js"),__vite__mapDeps([38,1,2,4,6,7]),import.meta.url)),H2=c.lazy(()=>y(()=>import("./Accordion-BsSwt7wj.js"),__vite__mapDeps([39,1,2,4,5,6,7,17,18]),import.meta.url)),$2=c.lazy(()=>y(()=>import("./Breadcrumbs-U44ghyPH.js"),__vite__mapDeps([40,1,2,4,5,6,7]),import.meta.url)),Q1=c.lazy(()=>y(()=>import("./Cards-CG35Y3RE.js"),__vite__mapDeps([41,1,2,4,42,5,6,7,43,13,44,31,45]),import.meta.url)),G2=c.lazy(()=>y(()=>import("./Carousels-CkoLroNp.js"),__vite__mapDeps([46,1,2,4,42,5,6,7]),import.meta.url)),Z2=c.lazy(()=>y(()=>import("./Collapses-_060Wf8j.js"),__vite__mapDeps([47,1,2,4,5,6,7,13,18]),import.meta.url)),X2=c.lazy(()=>y(()=>import("./ListGroups-0Q45FKli.js"),__vite__mapDeps([48,1,2,4,5,6,7,44,49,11,12]),import.meta.url)),q2=c.lazy(()=>y(()=>import("./Navs-D3PN2_YK.js"),__vite__mapDeps([50,1,2,4,5,6,7,25,26,13,27,28]),import.meta.url)),U2=c.lazy(()=>y(()=>import("./Paginations-BfQGT99W.js"),__vite__mapDeps([51,1,2,4,5,6,7]),import.meta.url)),Y2=c.lazy(()=>y(()=>import("./Placeholders-BV82AMm5.js"),__vite__mapDeps([52,1,2,4,42,5,6,7,43,13]),import.meta.url)),Q2=c.lazy(()=>y(()=>import("./Popovers-BjuswmrC.js"),__vite__mapDeps([53,1,2,4,5,6,7,54,26,27,55,56,13]),import.meta.url)),K2=c.lazy(()=>y(()=>import("./Progress-Bqcvb1Nl.js"),__vite__mapDeps([57,1,2,4,5,6,7,32]),import.meta.url)),J2=c.lazy(()=>y(()=>import("./Spinners-P7F1MRlV.js"),__vite__mapDeps([58,1,2,4,5,6,7,13]),import.meta.url)),e0=c.lazy(()=>y(()=>import("./Tabs-DzEaHkoH.js"),__vite__mapDeps([59,1,2,4,5,6,7,28,56]),import.meta.url)),t0=c.lazy(()=>y(()=>import("./Tables-BVpJeJY1.js"),__vite__mapDeps([60,1,2,4,5,6,7,33]),import.meta.url)),r0=c.lazy(()=>y(()=>import("./Tooltips-D2xmhr2V.js"),__vite__mapDeps([61,1,2,4,5,6,7,62,26,27,55,56,13]),import.meta.url)),K1=c.lazy(()=>y(()=>import("./Buttons-OXRau7y4.js"),__vite__mapDeps([63,1,2,4,5,6,7,13]),import.meta.url)),o0=c.lazy(()=>y(()=>import("./ButtonGroups-DPPt3IPK.js"),__vite__mapDeps([64,1,2,4,5,6,7,30,13,49,11,12,14,16,10,25,26,27,28,65]),import.meta.url)),i0=c.lazy(()=>y(()=>import("./Dropdowns-qQQV6sQ7.js"),__vite__mapDeps([66,1,2,4,5,6,7,25,26,13,27,28,65,30]),import.meta.url)),n0=c.lazy(()=>y(()=>import("./ChecksRadios-CZkZntb7.js"),__vite__mapDeps([67,1,2,4,5,6,7,49,11,12]),import.meta.url)),s0=c.lazy(()=>y(()=>import("./FloatingLabels-BZ57ODbR.js"),__vite__mapDeps([68,1,2,4,5,6,7,10,11,12,16,9,69]),import.meta.url)),J1=c.lazy(()=>y(()=>import("./FormControl-nU0YmYKp.js"),__vite__mapDeps([70,1,2,4,5,6,7,8,12,16,10,11,9,13]),import.meta.url)),a0=c.lazy(()=>y(()=>import("./InputGroup-DoPeZn_P.js"),__vite__mapDeps([71,1,2,4,5,6,7,14,16,10,11,12,9,49,13,25,26,27,28,65,69]),import.meta.url)),l0=c.lazy(()=>y(()=>import("./Layout-BDE4Zhs7.js"),__vite__mapDeps([72,1,2,4,5,6,7,16,10,11,12,8,69,49,13,14]),import.meta.url)),c0=c.lazy(()=>y(()=>import("./Range-BYUs8NQ8.js"),__vite__mapDeps([73,1,2,4,5,6,7,12]),import.meta.url)),C0=c.lazy(()=>y(()=>import("./Select-B519mYFN.js"),__vite__mapDeps([74,1,2,4,5,6,7,69,10,11,12]),import.meta.url)),p0=c.lazy(()=>y(()=>import("./Validation-BIPbE0cm.js"),__vite__mapDeps([75,1,2,4,5,6,7,8,12,16,10,11,14,69,49,13,9]),import.meta.url)),d0=c.lazy(()=>y(()=>import("./Charts-CtO96WG8.js"),__vite__mapDeps([76,1,2,22,4,5,6,7]),import.meta.url)),e2=c.lazy(()=>y(()=>import("./CoreUIIcons-BdHeGBao.js"),__vite__mapDeps([77,1,2,24,78,29,15,79,34,80,4,35,23,5,6,7]),import.meta.url)),u0=c.lazy(()=>y(()=>import("./Flags-SSNCgjUs.js"),__vite__mapDeps([81,1,2,80,4,35,23,5,6,7,36]),import.meta.url)),m0=c.lazy(()=>y(()=>import("./Brands-IaNaxzQs.js"),__vite__mapDeps([80,1,2,4,35,23,5,6,7]),import.meta.url)),t2=c.lazy(()=>y(()=>import("./Alerts-Z7z8Tk2o.js"),__vite__mapDeps([82,1,2,4,5,6,7,19]),import.meta.url)),h0=c.lazy(()=>y(()=>import("./Badges-Bm0l_mf3.js"),__vite__mapDeps([83,1,2,4,5,6,7,13]),import.meta.url)),f0=c.lazy(()=>y(()=>import("./Modals-DEr9Sv4M.js"),__vite__mapDeps([84,1,2,4,5,6,7,26,13,54,27,55,56,62]),import.meta.url)),v0=c.lazy(()=>y(()=>import("./Toasts-CICUKHZ_.js"),__vite__mapDeps([85,1,2,4,5,6,7,26,13]),import.meta.url)),y0=c.lazy(()=>y(()=>import("./Widgets-by-w9PQN.js"),__vite__mapDeps([86,1,2,4,22,21,5,6,7,23,24,25,26,13,27,28,32,31,78,34,45]),import.meta.url)),p2=[{path:"/",exact:!0,name:"Home"},{path:"/qa",name:"Qa",element:W2},{path:"/dashboard",name:"Dashboard",element:I2},{path:"/theme",name:"Theme",element:Y1,exact:!0},{path:"/theme/colors",name:"Colors",element:Y1},{path:"/theme/typography",name:"Typography",element:B2},{path:"/base",name:"Base",element:Q1,exact:!0},{path:"/base/accordion",name:"Accordion",element:H2},{path:"/base/breadcrumbs",name:"Breadcrumbs",element:$2},{path:"/base/cards",name:"Cards",element:Q1},{path:"/base/carousels",name:"Carousel",element:G2},{path:"/base/collapses",name:"Collapse",element:Z2},{path:"/base/list-groups",name:"List Groups",element:X2},{path:"/base/navs",name:"Navs",element:q2},{path:"/base/paginations",name:"Paginations",element:U2},{path:"/base/placeholders",name:"Placeholders",element:Y2},{path:"/base/popovers",name:"Popovers",element:Q2},{path:"/base/progress",name:"Progress",element:K2},{path:"/base/spinners",name:"Spinners",element:J2},{path:"/base/tabs",name:"Tabs",element:e0},{path:"/base/tables",name:"Tables",element:t0},{path:"/base/tooltips",name:"Tooltips",element:r0},{path:"/buttons",name:"Buttons",element:K1,exact:!0},{path:"/buttons/buttons",name:"Buttons",element:K1},{path:"/buttons/dropdowns",name:"Dropdowns",element:i0},{path:"/buttons/button-groups",name:"Button Groups",element:o0},{path:"/charts",name:"Charts",element:d0},{path:"/forms",name:"Forms",element:J1,exact:!0},{path:"/forms/form-control",name:"Form Control",element:J1},{path:"/forms/select",name:"Select",element:C0},{path:"/forms/checks-radios",name:"Checks & Radios",element:n0},{path:"/forms/range",name:"Range",element:c0},{path:"/forms/input-group",name:"Input Group",element:a0},{path:"/forms/floating-labels",name:"Floating Labels",element:s0},{path:"/forms/layout",name:"Layout",element:l0},{path:"/forms/validation",name:"Validation",element:p0},{path:"/icons",exact:!0,name:"Icons",element:e2},{path:"/icons/coreui-icons",name:"CoreUI Icons",element:e2},{path:"/icons/flags",name:"Flags",element:u0},{path:"/icons/brands",name:"Brands",element:m0},{path:"/notifications",name:"Notifications",element:t2,exact:!0},{path:"/notifications/alerts",name:"Alerts",element:t2},{path:"/notifications/badges",name:"Badges",element:h0},{path:"/notifications/modals",name:"Modals",element:f0},{path:"/notifications/toasts",name:"Toasts",element:v0},{path:"/widgets",name:"Widgets",element:y0}],b0=()=>{const t=S2().pathname,r=(i,n)=>{const s=n.find(a=>a.path===i);return s?s.name:!1},e=(i=>{const n=[];return i.split("/").reduce((s,a,C,u)=>{const f=`${s}/${a}`,m=r(f,p2);return m&&n.push({pathname:f,name:m,active:C+1===u.length}),f}),n})(t);return p.jsxs(w1,{className:"my-0",children:[p.jsx(C1,{href:"/",children:"Home"}),e.map((i,n)=>d.createElement(C1,{...i.active?{active:!0}:{href:i.pathname},key:n},i.name))]})};c.memo(b0);const g0=()=>p.jsx(D2,{className:"px-4",lg:!0,children:p.jsx(d.Suspense,{fallback:p.jsx(O2,{color:"primary"}),children:p.jsxs(_2,{children:[p2.map((t,r)=>t.element&&p.jsx(Z1,{path:t.path,exact:t.exact,name:t.name,element:p.jsx(t.element,{})},r)),p.jsx(Z1,{path:"/",element:p.jsx(A2,{to:"qa",replace:!0})})]})})}),E0=c.memo(g0),x0=()=>p.jsxs(O1,{className:"px-4",children:[p.jsxs("div",{children:[p.jsx("a",{href:"https://luat.skyai.vn",target:"_blank",rel:"noopener noreferrer",children:"Luật-AI"}),p.jsx("span",{className:"ms-1",children:"© 2024 ."})]}),p.jsxs("div",{className:"ms-auto",children:[p.jsx("span",{className:"me-1",children:"Powered by"}),p.jsx("a",{href:"https://skyai.vn",target:"_blank",rel:"noopener noreferrer",children:"SkyAI"})]})]}),N0=c.memo(x0);var k0=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M450.27,348.569,406.6,267.945V184c0-83.813-68.187-152-152-152s-152,68.187-152,152v83.945L58.928,348.568A24,24,0,0,0,80.031,384h86.935c-.238,2.636-.367,5.3-.367,8a88,88,0,0,0,176,0c0-2.7-.129-5.364-.367-8h86.935a24,24,0,0,0,21.1-35.431ZM310.6,392a56,56,0,1,1-111.419-8H310.018A56.14,56.14,0,0,1,310.6,392ZM93.462,352,134.6,276.055V184a120,120,0,0,1,240,0v92.055L415.736,352Z' class='ci-primary'/>"],z0=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M472,40H40A24.028,24.028,0,0,0,16,64V448a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V64A24.028,24.028,0,0,0,472,40Zm-8,400H48V72H464Z' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='152 240 184 240 184 200 224 200 224 168 184 168 184 128 152 128 152 168 112 168 112 200 152 200 152 240' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='196.284 285.089 168 313.373 139.716 285.089 117.089 307.716 145.373 336 117.089 364.284 139.716 386.911 168 358.627 196.284 386.911 218.911 364.284 190.627 336 218.911 307.716 196.284 285.089' class='ci-primary'/><rect width='112' height='32' x='288' y='168' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='112' height='32' x='288' y='288' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='112' height='32' x='288' y='352' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"],M0=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M105.361,398.32A195.891,195.891,0,0,1,343.42,91.125L366.676,67.87A227.875,227.875,0,0,0,82.733,420.948,228.027,228.027,0,0,0,366.24,452.1l-23.312-23.312C267.9,472.768,169.657,462.617,105.361,398.32Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M468.916,353.07a243.542,243.542,0,0,0,0-186.459c-.885-2.136-1.806-4.251-2.747-6.354A242.246,242.246,0,0,0,416.11,87.571L404.8,76.257,393.483,87.571,221.213,259.84l172.63,172.631L404.8,443.424,416.11,432.11a242.218,242.218,0,0,0,49.452-71.358C466.716,358.212,467.844,355.657,468.916,353.07ZM404.359,121.95a211.57,211.57,0,0,1,0,275.781L266.468,259.84Z' class='ci-primary'/>"],w0=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='330.529 16 297.559 16 178.441 496 211.412 496 330.529 16' class='ci-primary'/>"],S0=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M446.754,47.9a20.075,20.075,0,0,0-21.307-2.745L32,229.835v37l165.349,66.139L303.317,496h37L453.281,68.369A20.072,20.072,0,0,0,446.754,47.9ZM317.124,458.524l-98.473-151.5-148.9-59.561L415.779,85.044Z' class='ci-primary'/>"],O0=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M334.627,16H48V496H472V153.373ZM440,166.627V168H320V48h1.373ZM80,464V48H288V200H440V464Z' class='ci-primary'/><rect width='224' height='32' x='136' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='224' height='32' x='136' y='376' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"],_0=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M394.633,220.663,269.475,25.174a16,16,0,0,0-26.95,0L117.364,220.665A170.531,170.531,0,0,0,84.1,322.3c0,94.785,77.113,171.9,171.9,171.9s171.9-77.113,171.9-171.9A170.519,170.519,0,0,0,394.633,220.663ZM256,462.2c-77.14,0-139.9-62.758-139.9-139.9a138.758,138.758,0,0,1,27.321-83.058q.319-.432.608-.884L256,63.475,367.967,238.359q.288.453.608.884A138.754,138.754,0,0,1,395.9,322.3C395.9,399.441,333.14,462.2,256,462.2Z' class='ci-primary'/>"],A0=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M444.4,235.236,132.275,49.449A24,24,0,0,0,96,70.072V434.214a24.017,24.017,0,0,0,35.907,20.839L444.03,276.7a24,24,0,0,0,.367-41.461ZM128,420.429V84.144L416.244,255.718Z' class='ci-primary'/>"],T0=["512 512","<rect width='288' height='32' x='112' y='152' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='288' height='32' x='112' y='240' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='152' height='32' x='112' y='328' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M480,48H32V464H480ZM448,432H64V80H448Z' class='ci-primary'/>"],L0=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"],D0=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M491.693,256.705l-54.957-49.461,16.407-13.406a80.491,80.491,0,0,0,18.363-21.522c18.148-31.441,12.867-70.042-13.144-96.052S393.75,44.973,362.311,63.122a80.513,80.513,0,0,0-21.52,18.362L327.383,97.891,277.922,42.935l-.579-.611a24.028,24.028,0,0,0-33.941,0l-65.6,65.605,1.19,23.7L212.1,158.685a48.6,48.6,0,0,1,11.079,12.889c10.807,18.722,7.57,41.8-8.056,57.426s-38.7,18.862-57.426,8.058a48.66,48.66,0,0,1-12.9-11.086l-27.047-33.1-23.7-1.189-71.26,71.26a24,24,0,0,0,0,33.942L198.147,472.244a80,80,0,0,0,113.138,0L492.3,291.225a24.029,24.029,0,0,0,0-33.94ZM288.657,449.617a48,48,0,0,1-67.883,0L51.069,279.911l53.1-53.095,15.91,19.473.1.119a80.487,80.487,0,0,0,21.521,18.363c31.441,18.149,70.041,12.867,96.052-13.144s31.291-64.61,13.143-96.05a80.482,80.482,0,0,0-18.363-21.521l-19.591-16.01,47.124-47.124,56.018,62.241,24.282-.579,25.062-30.67a48.611,48.611,0,0,1,12.888-11.078c18.722-10.807,41.8-7.569,57.426,8.056s18.864,38.7,8.057,57.426a48.591,48.591,0,0,1-11.079,12.889l-30.67,25.061-.58,24.282,62.243,56.018Z' class='ci-primary'/>"],r2=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z' class='ci-primary'/><rect width='32' height='32' x='80' y='264' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='240' y='128' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='136' y='168' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='400' y='264' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z' class='ci-primary'/>"],o2=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z' class='ci-primary'/>"],R0=typeof global=="object"&&global&&global.Object===Object&&global,F0=typeof self=="object"&&self&&self.Object===Object&&self,d2=R0||F0||Function("return this")(),p1=d2.Symbol,u2=Object.prototype,j0=u2.hasOwnProperty,P0=u2.toString,J=p1?p1.toStringTag:void 0;function V0(t){var r=j0.call(t,J),o=t[J];try{t[J]=void 0;var e=!0}catch{}var i=P0.call(t);return e&&(r?t[J]=o:delete t[J]),i}var W0=Object.prototype,I0=W0.toString;function B0(t){return I0.call(t)}var H0="[object Null]",$0="[object Undefined]",i2=p1?p1.toStringTag:void 0;function G0(t){return t==null?t===void 0?$0:H0:i2&&i2 in Object(t)?V0(t):B0(t)}function Z0(t){return t!=null&&typeof t=="object"}var X0="[object Symbol]";function q0(t){return typeof t=="symbol"||Z0(t)&&G0(t)==X0}var U0=/\s/;function Y0(t){for(var r=t.length;r--&&U0.test(t.charAt(r)););return r}var Q0=/^\s+/;function K0(t){return t&&t.slice(0,Y0(t)+1).replace(Q0,"")}function d1(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var n2=NaN,J0=/^[-+]0x[0-9a-f]+$/i,e3=/^0b[01]+$/i,t3=/^0o[0-7]+$/i,r3=parseInt;function s2(t){if(typeof t=="number")return t;if(q0(t))return n2;if(d1(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=d1(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=K0(t);var o=e3.test(t);return o||t3.test(t)?r3(t.slice(2),o?2:8):J0.test(t)?n2:+t}var b1=function(){return d2.Date.now()},o3="Expected a function",i3=Math.max,n3=Math.min;function c1(t,r,o){var e,i,n,s,a,C,u=0,f=!1,m=!1,g=!0;if(typeof t!="function")throw new TypeError(o3);r=s2(r)||0,d1(o)&&(f=!!o.leading,m="maxWait"in o,n=m?i3(s2(o.maxWait)||0,r):n,g="trailing"in o?!!o.trailing:g);function v(E){var x=e,_=i;return e=i=void 0,u=E,s=t.apply(_,x),s}function k(E){return u=E,a=setTimeout(b,r),f?v(E):s}function M(E){var x=E-C,_=E-u,$=r-x;return m?n3($,n-_):$}function S(E){var x=E-C,_=E-u;return C===void 0||x>=r||x<0||m&&_>=n}function b(){var E=b1();if(S(E))return T(E);a=setTimeout(b,M(E))}function T(E){return a=void 0,g&&e?v(E):(e=i=void 0,s)}function D(){a!==void 0&&clearTimeout(a),u=0,e=C=i=a=void 0}function R(){return a===void 0?s:T(b1())}function F(){var E=b1(),x=S(E);if(e=arguments,i=this,C=E,x){if(a===void 0)return k(C);if(m)return clearTimeout(a),a=setTimeout(b,r),v(C)}return a===void 0&&(a=setTimeout(b,r)),s}return F.cancel=D,F.flush=R,F}var s3="Expected a function";function a3(t,r,o){var e=!0,i=!0;if(typeof t!="function")throw new TypeError(s3);return d1(o)&&(e="leading"in o?!!o.leading:e,i="trailing"in o?!!o.trailing:i),c1(t,r,{leading:e,maxWait:r,trailing:i})}var Q=function(){return Q=Object.assign||function(r){for(var o,e=1,i=arguments.length;e<i;e++){o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r[n]=o[n])}return r},Q.apply(this,arguments)};function m2(t){return!t||!t.ownerDocument||!t.ownerDocument.defaultView?window:t.ownerDocument.defaultView}function h2(t){return!t||!t.ownerDocument?document:t.ownerDocument}var f2=function(t){var r={},o=Array.prototype.reduce.call(t,function(e,i){var n=i.name.match(/data-simplebar-(.+)/);if(n){var s=n[1].replace(/\W+(.)/g,function(a,C){return C.toUpperCase()});switch(i.value){case"true":e[s]=!0;break;case"false":e[s]=!1;break;case void 0:e[s]=!0;break;default:e[s]=i.value}}return e},r);return o};function v2(t,r){var o;t&&(o=t.classList).add.apply(o,r.split(" "))}function y2(t,r){t&&r.split(" ").forEach(function(o){t.classList.remove(o)})}function b2(t){return".".concat(t.split(" ").join("."))}var W1=!!(typeof window<"u"&&window.document&&window.document.createElement),l3=Object.freeze({__proto__:null,addClasses:v2,canUseDOM:W1,classNamesToQuery:b2,getElementDocument:h2,getElementWindow:m2,getOptions:f2,removeClasses:y2}),Y=null,a2=null;W1&&window.addEventListener("resize",function(){a2!==window.devicePixelRatio&&(a2=window.devicePixelRatio,Y=null)});function l2(){if(Y===null){if(typeof document>"u")return Y=0,Y;var t=document.body,r=document.createElement("div");r.classList.add("simplebar-hide-scrollbar"),t.appendChild(r);var o=r.getBoundingClientRect().right;t.removeChild(r),Y=o}return Y}var W=m2,g1=h2,c3=f2,I=v2,B=y2,A=b2,e1=function(){function t(r,o){o===void 0&&(o={});var e=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.isDragging=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var i=W(e.el);e.scrollXTicking||(i.requestAnimationFrame(e.scrollX),e.scrollXTicking=!0),e.scrollYTicking||(i.requestAnimationFrame(e.scrollY),e.scrollYTicking=!0),e.isScrolling||(e.isScrolling=!0,I(e.el,e.classNames.scrolling)),e.showScrollbar("x"),e.showScrollbar("y"),e.onStopScrolling()},this.scrollX=function(){e.axis.x.isOverflowing&&e.positionScrollbar("x"),e.scrollXTicking=!1},this.scrollY=function(){e.axis.y.isOverflowing&&e.positionScrollbar("y"),e.scrollYTicking=!1},this._onStopScrolling=function(){B(e.el,e.classNames.scrolling),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isScrolling=!1},this.onMouseEnter=function(){e.isMouseEntering||(I(e.el,e.classNames.mouseEntered),e.showScrollbar("x"),e.showScrollbar("y"),e.isMouseEntering=!0),e.onMouseEntered()},this._onMouseEntered=function(){B(e.el,e.classNames.mouseEntered),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isMouseEntering=!1},this._onMouseMove=function(i){e.mouseX=i.clientX,e.mouseY=i.clientY,(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseMoveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseMoveForAxis("y")},this.onMouseLeave=function(){e.onMouseMove.cancel(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseLeaveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseLeaveForAxis("y"),e.mouseX=-1,e.mouseY=-1},this._onWindowResize=function(){e.scrollbarWidth=e.getScrollbarWidth(),e.hideNativeScrollbar()},this.onPointerEvent=function(i){if(!(!e.axis.x.track.el||!e.axis.y.track.el||!e.axis.x.scrollbar.el||!e.axis.y.scrollbar.el)){var n,s;e.axis.x.track.rect=e.axis.x.track.el.getBoundingClientRect(),e.axis.y.track.rect=e.axis.y.track.el.getBoundingClientRect(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&(n=e.isWithinBounds(e.axis.x.track.rect)),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&(s=e.isWithinBounds(e.axis.y.track.rect)),(n||s)&&(i.stopPropagation(),i.type==="pointerdown"&&i.pointerType!=="touch"&&(n&&(e.axis.x.scrollbar.rect=e.axis.x.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.x.scrollbar.rect)?e.onDragStart(i,"x"):e.onTrackClick(i,"x")),s&&(e.axis.y.scrollbar.rect=e.axis.y.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.y.scrollbar.rect)?e.onDragStart(i,"y"):e.onTrackClick(i,"y"))))}},this.drag=function(i){var n,s,a,C,u,f,m,g,v,k,M;if(!(!e.draggedAxis||!e.contentWrapperEl)){var S,b=e.axis[e.draggedAxis].track,T=(s=(n=b.rect)===null||n===void 0?void 0:n[e.axis[e.draggedAxis].sizeAttr])!==null&&s!==void 0?s:0,D=e.axis[e.draggedAxis].scrollbar,R=(C=(a=e.contentWrapperEl)===null||a===void 0?void 0:a[e.axis[e.draggedAxis].scrollSizeAttr])!==null&&C!==void 0?C:0,F=parseInt((f=(u=e.elStyles)===null||u===void 0?void 0:u[e.axis[e.draggedAxis].sizeAttr])!==null&&f!==void 0?f:"0px",10);i.preventDefault(),i.stopPropagation(),e.draggedAxis==="y"?S=i.pageY:S=i.pageX;var E=S-((g=(m=b.rect)===null||m===void 0?void 0:m[e.axis[e.draggedAxis].offsetAttr])!==null&&g!==void 0?g:0)-e.axis[e.draggedAxis].dragOffset;E=e.draggedAxis==="x"&&e.isRtl?((k=(v=b.rect)===null||v===void 0?void 0:v[e.axis[e.draggedAxis].sizeAttr])!==null&&k!==void 0?k:0)-D.size-E:E;var x=E/(T-D.size),_=x*(R-F);e.draggedAxis==="x"&&e.isRtl&&(_=!((M=t.getRtlHelpers())===null||M===void 0)&&M.isScrollingToNegative?-_:_),e.contentWrapperEl[e.axis[e.draggedAxis].scrollOffsetAttr]=_}},this.onEndDrag=function(i){e.isDragging=!1;var n=g1(e.el),s=W(e.el);i.preventDefault(),i.stopPropagation(),B(e.el,e.classNames.dragging),e.onStopScrolling(),n.removeEventListener("mousemove",e.drag,!0),n.removeEventListener("mouseup",e.onEndDrag,!0),e.removePreventClickId=s.setTimeout(function(){n.removeEventListener("click",e.preventClick,!0),n.removeEventListener("dblclick",e.preventClick,!0),e.removePreventClickId=null})},this.preventClick=function(i){i.preventDefault(),i.stopPropagation()},this.el=r,this.options=Q(Q({},t.defaultOptions),o),this.classNames=Q(Q({},t.defaultOptions.classNames),o.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},typeof this.el!="object"||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=a3(this._onMouseMove,64),this.onWindowResize=c1(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=c1(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=c1(this._onMouseEntered,this.stopScrollDelay),this.init()}return t.getRtlHelpers=function(){if(t.rtlHelpers)return t.rtlHelpers;var r=document.createElement("div");r.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var o=r.firstElementChild,e=o==null?void 0:o.firstElementChild;if(!e)return null;document.body.appendChild(o),o.scrollLeft=0;var i=t.getOffset(o),n=t.getOffset(e);o.scrollLeft=-999;var s=t.getOffset(e);return document.body.removeChild(o),t.rtlHelpers={isScrollOriginAtZero:i.left!==n.left,isScrollingToNegative:n.left!==s.left},t.rtlHelpers},t.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display==="none"||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:l2()}catch{return l2()}},t.getOffset=function(r){var o=r.getBoundingClientRect(),e=g1(r),i=W(r);return{top:o.top+(i.pageYOffset||e.documentElement.scrollTop),left:o.left+(i.pageXOffset||e.documentElement.scrollLeft)}},t.prototype.init=function(){W1&&(this.initDOM(),this.rtlHelpers=t.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},t.prototype.initDOM=function(){var r,o;this.wrapperEl=this.el.querySelector(A(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(A(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(A(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(A(this.classNames.offset)),this.maskEl=this.el.querySelector(A(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,A(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(A(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(A(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(A(this.classNames.track)).concat(A(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(A(this.classNames.track)).concat(A(this.classNames.vertical))),this.axis.x.scrollbar.el=((r=this.axis.x.track.el)===null||r===void 0?void 0:r.querySelector(A(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=((o=this.axis.y.track.el)===null||o===void 0?void 0:o.querySelector(A(this.classNames.scrollbar)))||null,this.options.autoHide||(I(this.axis.x.scrollbar.el,this.classNames.visible),I(this.axis.y.scrollbar.el,this.classNames.visible))},t.prototype.initListeners=function(){var r=this,o,e=W(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),(o=this.contentWrapperEl)===null||o===void 0||o.addEventListener("scroll",this.onScroll),e.addEventListener("resize",this.onWindowResize),!!this.contentEl){if(window.ResizeObserver){var i=!1,n=e.ResizeObserver||ResizeObserver;this.resizeObserver=new n(function(){i&&e.requestAnimationFrame(function(){r.recalculate()})}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),e.requestAnimationFrame(function(){i=!0})}this.mutationObserver=new e.MutationObserver(function(){e.requestAnimationFrame(function(){r.recalculate()})}),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},t.prototype.recalculate=function(){if(!(!this.heightAutoObserverEl||!this.contentEl||!this.contentWrapperEl||!this.wrapperEl||!this.placeholderEl)){var r=W(this.el);this.elStyles=r.getComputedStyle(this.el),this.isRtl=this.elStyles.direction==="rtl";var o=this.contentEl.offsetWidth,e=this.heightAutoObserverEl.offsetHeight<=1,i=this.heightAutoObserverEl.offsetWidth<=1||o>0,n=this.contentWrapperEl.offsetWidth,s=this.elStyles.overflowX,a=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var C=this.contentEl.scrollHeight,u=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=e?"auto":"100%",this.placeholderEl.style.width=i?"".concat(o||u,"px"):"auto",this.placeholderEl.style.height="".concat(C,"px");var f=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=o!==0&&u>o,this.axis.y.isOverflowing=C>f,this.axis.x.isOverflowing=s==="hidden"?!1:this.axis.x.isOverflowing,this.axis.y.isOverflowing=a==="hidden"?!1:this.axis.y.isOverflowing,this.axis.x.forceVisible=this.options.forceVisible==="x"||this.options.forceVisible===!0,this.axis.y.forceVisible=this.options.forceVisible==="y"||this.options.forceVisible===!0,this.hideNativeScrollbar();var m=this.axis.x.isOverflowing?this.scrollbarWidth:0,g=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&u>n-g,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&C>f-m,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},t.prototype.getScrollbarSize=function(r){var o,e;if(r===void 0&&(r="y"),!this.axis[r].isOverflowing||!this.contentEl)return 0;var i=this.contentEl[this.axis[r].scrollSizeAttr],n=(e=(o=this.axis[r].track.el)===null||o===void 0?void 0:o[this.axis[r].offsetSizeAttr])!==null&&e!==void 0?e:0,s=n/i,a;return a=Math.max(~~(s*n),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(a=Math.min(a,this.options.scrollbarMaxSize)),a},t.prototype.positionScrollbar=function(r){var o,e,i;r===void 0&&(r="y");var n=this.axis[r].scrollbar;if(!(!this.axis[r].isOverflowing||!this.contentWrapperEl||!n.el||!this.elStyles)){var s=this.contentWrapperEl[this.axis[r].scrollSizeAttr],a=((o=this.axis[r].track.el)===null||o===void 0?void 0:o[this.axis[r].offsetSizeAttr])||0,C=parseInt(this.elStyles[this.axis[r].sizeAttr],10),u=this.contentWrapperEl[this.axis[r].scrollOffsetAttr];u=r==="x"&&this.isRtl&&(!((e=t.getRtlHelpers())===null||e===void 0)&&e.isScrollOriginAtZero)?-u:u,r==="x"&&this.isRtl&&(u=!((i=t.getRtlHelpers())===null||i===void 0)&&i.isScrollingToNegative?u:-u);var f=u/(s-C),m=~~((a-n.size)*f);m=r==="x"&&this.isRtl?-m+(a-n.size):m,n.el.style.transform=r==="x"?"translate3d(".concat(m,"px, 0, 0)"):"translate3d(0, ".concat(m,"px, 0)")}},t.prototype.toggleTrackVisibility=function(r){r===void 0&&(r="y");var o=this.axis[r].track.el,e=this.axis[r].scrollbar.el;!o||!e||!this.contentWrapperEl||(this.axis[r].isOverflowing||this.axis[r].forceVisible?(o.style.visibility="visible",this.contentWrapperEl.style[this.axis[r].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(r))):(o.style.visibility="hidden",this.contentWrapperEl.style[this.axis[r].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(r))),this.axis[r].isOverflowing?e.style.display="block":e.style.display="none")},t.prototype.showScrollbar=function(r){r===void 0&&(r="y"),this.axis[r].isOverflowing&&!this.axis[r].scrollbar.isVisible&&(I(this.axis[r].scrollbar.el,this.classNames.visible),this.axis[r].scrollbar.isVisible=!0)},t.prototype.hideScrollbar=function(r){r===void 0&&(r="y"),!this.isDragging&&this.axis[r].isOverflowing&&this.axis[r].scrollbar.isVisible&&(B(this.axis[r].scrollbar.el,this.classNames.visible),this.axis[r].scrollbar.isVisible=!1)},t.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},t.prototype.onMouseMoveForAxis=function(r){r===void 0&&(r="y");var o=this.axis[r];!o.track.el||!o.scrollbar.el||(o.track.rect=o.track.el.getBoundingClientRect(),o.scrollbar.rect=o.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(o.track.rect)?(this.showScrollbar(r),I(o.track.el,this.classNames.hover),this.isWithinBounds(o.scrollbar.rect)?I(o.scrollbar.el,this.classNames.hover):B(o.scrollbar.el,this.classNames.hover)):(B(o.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(r)))},t.prototype.onMouseLeaveForAxis=function(r){r===void 0&&(r="y"),B(this.axis[r].track.el,this.classNames.hover),B(this.axis[r].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(r)},t.prototype.onDragStart=function(r,o){var e;o===void 0&&(o="y"),this.isDragging=!0;var i=g1(this.el),n=W(this.el),s=this.axis[o].scrollbar,a=o==="y"?r.pageY:r.pageX;this.axis[o].dragOffset=a-(((e=s.rect)===null||e===void 0?void 0:e[this.axis[o].offsetAttr])||0),this.draggedAxis=o,I(this.el,this.classNames.dragging),i.addEventListener("mousemove",this.drag,!0),i.addEventListener("mouseup",this.onEndDrag,!0),this.removePreventClickId===null?(i.addEventListener("click",this.preventClick,!0),i.addEventListener("dblclick",this.preventClick,!0)):(n.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},t.prototype.onTrackClick=function(r,o){var e=this,i,n,s,a;o===void 0&&(o="y");var C=this.axis[o];if(!(!this.options.clickOnTrack||!C.scrollbar.el||!this.contentWrapperEl)){r.preventDefault();var u=W(this.el);this.axis[o].scrollbar.rect=C.scrollbar.el.getBoundingClientRect();var f=this.axis[o].scrollbar,m=(n=(i=f.rect)===null||i===void 0?void 0:i[this.axis[o].offsetAttr])!==null&&n!==void 0?n:0,g=parseInt((a=(s=this.elStyles)===null||s===void 0?void 0:s[this.axis[o].sizeAttr])!==null&&a!==void 0?a:"0px",10),v=this.contentWrapperEl[this.axis[o].scrollOffsetAttr],k=o==="y"?this.mouseY-m:this.mouseX-m,M=k<0?-1:1,S=M===-1?v-g:v+g,b=40,T=function(){e.contentWrapperEl&&(M===-1?v>S&&(v-=b,e.contentWrapperEl[e.axis[o].scrollOffsetAttr]=v,u.requestAnimationFrame(T)):v<S&&(v+=b,e.contentWrapperEl[e.axis[o].scrollOffsetAttr]=v,u.requestAnimationFrame(T)))};T()}},t.prototype.getContentElement=function(){return this.contentEl},t.prototype.getScrollElement=function(){return this.contentWrapperEl},t.prototype.removeListeners=function(){var r=W(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),r.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},t.prototype.unMount=function(){this.removeListeners()},t.prototype.isWithinBounds=function(r){return this.mouseX>=r.left&&this.mouseX<=r.left+r.width&&this.mouseY>=r.top&&this.mouseY<=r.top+r.height},t.prototype.findChild=function(r,o){var e=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector;return Array.prototype.filter.call(r.children,function(i){return e.call(i,o)})[0]},t.rtlHelpers=null,t.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",tabIndex:0,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},t.getOptions=c3,t.helpers=l3,t}(),L=function(){return L=Object.assign||function(r){for(var o,e=1,i=arguments.length;e<i;e++){o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r[n]=o[n])}return r},L.apply(this,arguments)};function C3(t,r){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,e=Object.getOwnPropertySymbols(t);i<e.length;i++)r.indexOf(e[i])<0&&Object.prototype.propertyIsEnumerable.call(t,e[i])&&(o[e[i]]=t[e[i]]);return o}var g2=d.forwardRef(function(t,r){var o=t.children,e=t.scrollableNodeProps,i=e===void 0?{}:e,n=C3(t,["children","scrollableNodeProps"]),s=d.useRef(),a=d.useRef(),C=d.useRef(),u={},f={};Object.keys(n).forEach(function(v){Object.prototype.hasOwnProperty.call(e1.defaultOptions,v)?u[v]=n[v]:f[v]=n[v]});var m=L(L({},e1.defaultOptions.classNames),u.classNames),g=L(L({},i),{className:"".concat(m.contentWrapper).concat(i.className?" ".concat(i.className):""),tabIndex:u.tabIndex||e1.defaultOptions.tabIndex,role:"region","aria-label":u.ariaLabel||e1.defaultOptions.ariaLabel});return d.useEffect(function(){var v;return a.current=g.ref?g.ref.current:a.current,s.current&&(v=new e1(s.current,L(L(L({},u),a.current&&{scrollableNode:a.current}),C.current&&{contentNode:C.current})),typeof r=="function"?r(v):r&&(r.current=v)),function(){v==null||v.unMount(),v=null,typeof r=="function"&&r(null)}},[]),d.createElement("div",L({"data-simplebar":"init",ref:s},f),d.createElement("div",{className:m.wrapper},d.createElement("div",{className:m.heightAutoObserverWrapperEl},d.createElement("div",{className:m.heightAutoObserverEl})),d.createElement("div",{className:m.mask},d.createElement("div",{className:m.offset},typeof o=="function"?o({scrollableNodeRef:a,scrollableNodeProps:L(L({},g),{ref:a}),contentNodeRef:C,contentNodeProps:{className:m.contentEl,ref:C}}):d.createElement("div",L({},g),d.createElement("div",{className:m.contentEl},o)))),d.createElement("div",{className:m.placeholder})),d.createElement("div",{className:"".concat(m.track," simplebar-horizontal")},d.createElement("div",{className:m.scrollbar})),d.createElement("div",{className:"".concat(m.track," simplebar-vertical")},d.createElement("div",{className:m.scrollbar})))});g2.displayName="SimpleBar";const E2=({items:t})=>{const r=(i,n,s,a=!1)=>p.jsxs(p.Fragment,{children:[n||a&&p.jsx("span",{className:"nav-icon",children:p.jsx("span",{className:"nav-icon-bullet"})}),i&&i,s&&p.jsx(M1,{color:s.color,className:"ms-auto",children:s.text})]}),o=(i,n,s=!1)=>{const{component:a,name:C,badge:u,icon:f,...m}=i,g=a;return p.jsx(g,{as:"div",children:m.to||m.href?p.jsx(K,{...m.to&&{as:T2},...m,children:r(C,f,u,s)}):r(C,f,u,s)},n)},e=(i,n)=>{var v;const{component:s,name:a,icon:C,items:u,to:f,...m}=i,g=s;return p.jsx(g,{compact:!0,as:"div",toggler:r(a,C),...m,children:(v=i.items)==null?void 0:v.map((k,M)=>k.items?e(k,M):o(k,M,!0))},n)};return p.jsx(T1,{as:g2,children:t&&t.map((i,n)=>i.items?e(i,n):o(i,n))})};E2.propTypes={items:l.arrayOf(l.any).isRequired};const p3=["100 100",`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" viewBox="0 0 339 339" xml:space="preserve">
<path fill="#FFFFFF" opacity="0.000000" stroke="none" 
	d="
M235.000000,340.000000 
	C156.666687,340.000000 78.833359,340.000000 1.000031,340.000000 
	C1.000021,227.000031 1.000021,114.000069 1.000010,1.000077 
	C113.999947,1.000051 226.999893,1.000051 339.999878,1.000026 
	C339.999939,113.999931 339.999939,226.999863 339.999969,339.999878 
	C305.166656,340.000000 270.333344,340.000000 235.000000,340.000000 
M96.190811,200.860886 
	C97.707367,198.544037 99.223923,196.227203 101.601135,193.857376 
	C105.149773,193.164444 105.160286,195.630142 105.076721,198.757172 
	C102.241913,211.769226 95.944305,222.725037 86.573227,232.268234 
	C80.702225,238.247070 77.861687,246.103790 77.320549,254.830109 
	C79.039436,253.902481 80.403610,252.614975 80.839691,251.066162 
	C82.989738,243.429916 86.521675,236.666122 91.665092,230.547516 
	C99.351685,221.403564 105.442513,211.372269 106.838608,198.895691 
	C107.511414,198.802902 108.184227,198.710098 109.296478,198.999435 
	C109.478867,199.065857 109.661263,199.132294 110.137138,199.915024 
	C111.168571,201.391113 112.199997,202.867218 112.558334,204.826019 
	C111.743637,205.555374 110.703621,206.145203 110.151382,207.037048 
	C106.934509,212.232208 103.419823,217.302490 100.810799,222.797211 
	C98.362518,227.953400 96.794388,233.547928 95.134644,239.038956 
	C94.842186,240.006516 96.003906,241.413651 96.494057,242.617767 
	C97.201561,241.527863 98.450089,240.475266 98.528236,239.341965 
	C99.012604,232.317337 101.591644,226.260132 105.644234,220.524490 
	C108.083275,217.072525 109.547569,212.923737 111.378815,209.054443 
	C112.111725,207.505844 112.653603,205.866837 113.967720,204.680496 
	C119.979164,208.789551 125.990616,212.898590 132.298782,217.602020 
	C133.530670,219.043594 134.762573,220.485153 135.617661,222.419052 
	C134.784927,223.298294 133.952209,224.177536 132.569229,225.325699 
	C131.699890,226.191422 130.830566,227.057129 129.377991,228.070389 
	C128.921310,228.715240 128.464630,229.360092 127.439545,230.350906 
	C123.951675,235.594147 119.487251,240.442429 117.174507,246.160919 
	C111.988831,258.983032 104.163986,269.248535 92.096535,276.351868 
	C92.500008,277.365814 92.724281,278.144318 93.108040,278.834167 
	C93.502007,279.542419 94.051796,280.164001 94.750755,281.121216 
	C105.457909,274.664825 113.607872,266.036285 117.837334,254.453827 
	C121.735107,243.779724 127.281288,234.390350 135.861191,226.124603 
	C137.251877,225.086029 138.642563,224.047470 140.477463,222.773544 
	C140.671494,222.504852 140.865509,222.236145 141.804550,222.000854 
	C144.167557,223.479843 146.530563,224.958817 148.334564,226.882355 
	C131.532806,239.385681 120.148064,255.705887 113.837685,275.646240 
	C110.747192,285.411957 106.127037,294.370422 99.244049,302.054932 
	C96.073921,305.594238 92.869484,309.102783 89.121590,313.242767 
	C90.431564,314.530701 91.553818,315.634064 92.850830,316.909271 
	C103.729591,307.028534 111.961220,296.135101 115.788986,282.790619 
	C120.185661,267.462799 126.052490,252.934692 136.512527,240.904846 
	C141.715652,234.920822 148.721680,230.504440 155.135040,226.041443 
	C155.456375,226.368927 155.777710,226.696396 156.047897,227.816589 
	C154.422195,239.403946 148.863770,249.227234 141.693344,258.880798 
	C139.960510,260.676178 138.317383,262.569672 136.479355,264.250000 
	C128.434525,271.604431 122.637405,280.391144 119.520981,290.852264 
	C118.705383,293.590057 118.352531,296.465759 117.736435,299.530396 
	C119.617966,299.707916 120.592934,299.849243 121.570534,299.870697 
	C122.038284,299.880981 122.511017,299.664062 123.305313,299.471558 
	C124.692848,288.361969 129.189713,278.534851 136.561768,270.015594 
	C139.706024,266.382050 142.744003,262.656525 146.363174,258.550568 
	C152.949188,249.459503 157.269501,239.474152 158.811172,227.978500 
	C159.191513,227.619919 159.571869,227.261337 160.721512,227.039703 
	C161.500290,227.101105 162.279053,227.162506 163.202530,227.490799 
	C163.352005,227.645920 163.534317,227.717072 164.645432,227.860779 
	C170.748840,227.932312 176.886505,228.455688 182.949677,227.996185 
	C207.538467,226.132675 227.859772,215.518860 243.725677,196.769241 
	C265.787781,170.697266 271.009003,140.781525 260.099396,108.984329 
	C245.557602,66.600693 203.133667,42.287807 159.224838,50.121456 
	C131.436447,55.079105 110.365273,70.261406 96.521751,94.912697 
	C86.899170,112.047729 83.212097,130.441284 85.900482,150.124084 
	C87.897949,164.748276 92.737541,178.109695 101.242744,190.745773 
	C100.880165,191.795624 100.517593,192.845474 99.450623,194.019882 
	C97.643837,196.349396 95.837059,198.678925 93.587326,201.532578 
	C92.825020,203.121048 92.062714,204.709503 90.754646,206.751587 
	C90.345673,207.458664 89.770653,208.118332 89.553078,208.880081 
	C87.034737,217.697144 84.239250,226.323456 76.678940,232.429199 
	C76.179596,232.832474 76.803391,234.626450 77.010132,236.965820 
	C83.280258,230.825073 88.109444,225.617645 89.322754,217.843933 
	C89.877342,214.290680 91.400276,210.888565 92.897003,206.868103 
	C93.806656,204.948883 94.716309,203.029648 96.190811,200.860886 
z"/>
<path fill="#8FE4E8" opacity="1.000000" stroke="none" 
	d="
M101.374008,190.082886 
	C92.737541,178.109695 87.897949,164.748276 85.900482,150.124084 
	C83.212097,130.441284 86.899170,112.047729 96.521751,94.912697 
	C110.365273,70.261406 131.436447,55.079105 159.224838,50.121456 
	C203.133667,42.287807 245.557602,66.600693 260.099396,108.984329 
	C271.009003,140.781525 265.787781,170.697266 243.725677,196.769241 
	C227.859772,215.518860 207.538467,226.132675 182.949677,227.996185 
	C176.886505,228.455688 170.748840,227.932312 164.124222,227.655792 
	C163.449509,227.307587 163.267792,227.231964 163.057831,227.223907 
	C162.279053,227.162506 161.500290,227.101105 160.328339,226.544266 
	C160.340729,222.982605 160.746277,219.916397 161.392792,216.959717 
	C162.100494,217.284760 162.567215,217.500259 163.489868,217.793854 
	C167.745117,217.859756 171.683044,218.449585 175.293716,217.618164 
	C177.601105,217.086853 180.150528,214.803268 181.193954,212.633301 
	C181.823822,211.323425 180.181534,208.379837 178.825760,206.800949 
	C177.319794,205.047165 174.978455,204.010681 172.940765,202.390366 
	C172.280609,201.766800 171.680511,201.414780 170.992096,200.876099 
	C170.903778,200.689468 170.752747,200.305099 170.917053,199.963409 
	C171.433167,199.059326 171.657532,198.193909 172.157410,197.983688 
	C175.425705,196.609299 176.898834,194.509674 177.468460,190.729584 
	C178.131332,186.330795 180.378876,182.170807 182.001312,177.590286 
	C182.059418,176.854370 182.054901,176.435379 182.022690,176.014343 
	C181.994995,176.012299 182.034164,176.051682 182.397552,176.130859 
	C185.623734,174.206665 188.486542,172.203293 191.611481,170.150879 
	C192.264648,169.757751 192.655670,169.413696 193.356018,169.005508 
	C194.243622,168.355698 194.821884,167.770020 195.655304,167.143799 
	C196.296631,166.786255 196.682831,166.469254 197.371704,166.076508 
	C198.185593,165.404541 198.696777,164.808334 199.182983,164.144745 
	C199.158020,164.077377 199.142700,164.220245 199.481964,164.213196 
	C200.673431,163.533371 201.525635,162.860580 202.708328,162.118408 
	C209.035172,157.702805 215.031494,153.356583 221.352783,148.954376 
	C223.191360,147.635010 224.704956,146.371597 226.430786,145.065979 
	C226.643036,145.023773 227.010864,144.795700 227.322372,144.708405 
	C229.278030,143.159439 230.922165,141.697769 232.869888,140.116760 
	C236.117371,137.972931 239.061249,135.948425 242.333588,133.872406 
	C243.108353,133.115067 243.554642,132.409256 244.195953,131.483185 
	C244.358429,130.626602 244.538986,129.872620 244.262131,129.371185 
	C237.709610,117.503120 231.161621,105.631432 224.420929,93.870392 
	C223.831940,92.842728 221.917648,92.574661 220.138214,91.982208 
	C214.891266,92.727943 210.108276,93.349747 205.362503,94.183372 
	C196.725388,95.700523 188.110382,97.343437 179.155243,98.886482 
	C178.157684,98.873466 177.491028,98.907829 176.444946,99.057983 
	C175.714020,99.868484 175.061157,100.561226 175.056580,101.258217 
	C174.997025,110.354210 174.782013,119.460968 175.154877,128.542480 
	C175.313629,132.409241 176.750351,136.223526 177.686249,140.419830 
	C177.886902,141.495911 178.007645,142.213837 178.085663,143.277100 
	C178.097702,144.081024 178.152435,144.539612 178.097443,145.453293 
	C177.976959,151.265366 177.966217,156.622330 177.667969,162.281891 
	C177.255005,165.371109 176.705383,168.217529 177.087967,170.932571 
	C178.029984,177.617798 175.029770,182.192337 170.276642,186.367508 
	C167.968353,188.395126 166.473114,191.327911 164.460358,193.725479 
	C163.895554,194.398254 162.800446,194.625839 161.651016,194.877167 
	C159.105423,193.460052 156.983505,191.722229 154.576706,191.116623 
	C151.718781,190.397476 138.503738,198.886093 137.204865,201.660690 
	C136.731445,202.672012 136.401566,204.087524 135.577469,204.543106 
	C130.129791,207.554779 130.610443,212.119446 132.002060,217.007645 
	C125.990616,212.898590 119.979164,208.789551 113.636559,204.486694 
	C113.305397,204.292892 113.269005,204.310181 113.494164,203.921661 
	C114.100426,199.754379 115.307915,195.826736 114.660538,192.233246 
	C113.784676,187.371445 114.813217,183.587128 117.399826,179.606934 
	C119.130051,176.944550 121.298164,173.644455 116.918480,170.591446 
	C114.747269,172.880829 112.528206,175.220673 109.720009,178.181702 
	C113.759705,179.000854 113.312218,180.696548 111.049225,182.806778 
	C110.208542,181.876511 109.544945,181.142197 109.797363,181.421509 
	C106.833733,184.468872 104.103867,187.275879 101.374008,190.082886 
M154.700699,112.799500 
	C154.700699,112.799500 154.391296,112.638008 154.391296,112.638008 
	C154.391296,112.638008 154.275986,112.958794 153.311829,112.840439 
	C148.153412,112.937889 142.994980,113.035347 137.317566,112.579369 
	C133.951462,112.673294 130.585373,112.767220 127.047302,112.163910 
	C122.639191,105.967308 112.615089,106.823013 109.619392,113.495956 
	C109.194130,114.443214 108.058388,115.823448 107.342628,115.770538 
	C101.063438,115.306351 97.743416,118.418442 96.228340,124.181023 
	C96.056099,124.836166 95.102798,125.394508 94.393822,125.782288 
	C89.911240,128.234055 88.396675,131.957565 90.128242,136.669739 
	C91.743614,141.065704 95.466133,142.123337 99.820053,142.082703 
	C107.816406,142.008041 115.814552,142.125244 123.917854,142.996887 
	C123.487549,149.331818 123.057251,155.666748 122.434921,162.619095 
	C123.999382,162.607742 125.867043,163.156113 127.081352,162.498337 
	C139.101288,155.987350 151.055801,149.350876 162.898849,142.524414 
	C164.312546,141.709549 164.952301,139.551971 166.356430,137.556488 
	C163.365707,129.893433 160.414871,122.214149 157.312546,114.596550 
	C157.049377,113.950356 155.774078,113.716354 154.813614,113.120613 
	C154.813614,113.120613 154.592056,113.057175 154.700699,112.799500 
M198.269638,182.091202 
	C195.495117,187.751526 197.138733,191.057251 202.965851,191.102859 
	C214.754074,191.195160 226.549637,191.311981 238.327087,190.940567 
	C240.481857,190.872620 243.706146,188.949722 244.362457,187.133530 
	C245.026840,185.294983 243.653137,182.117294 242.225327,180.250275 
	C239.213486,176.311966 237.111755,170.927780 230.736252,170.988770 
	C230.362595,170.992371 230.021942,169.937927 229.593658,169.437759 
	C225.304291,164.428375 219.768509,164.613632 215.726181,169.782669 
	C214.648605,171.160599 213.397964,172.523849 211.949341,173.468307 
	C207.647293,176.273132 203.206985,178.865921 198.269638,182.091202 
M185.501282,83.116814 
	C190.332947,83.110619 195.170319,83.246201 199.994415,83.051903 
	C203.638138,82.905128 205.796066,79.955994 204.410278,76.995712 
	C201.199371,70.136635 194.513397,67.148293 188.489456,63.558723 
	C187.571533,63.011749 185.423233,63.697369 184.298752,64.472542 
	C179.287399,67.927132 174.336151,71.491638 169.609512,75.320488 
	C168.434006,76.272713 167.274902,78.724586 167.723633,79.833450 
	C168.303299,81.265862 170.426285,82.784935 172.024414,82.955177 
	C176.143478,83.393959 180.339432,83.110939 185.501282,83.116814 
z"/>
<path fill="#FDFDFC" opacity="1.000000" stroke="none" 
	d="
M132.150421,217.304840 
	C130.610443,212.119446 130.129791,207.554779 135.577469,204.543106 
	C136.401566,204.087524 136.731445,202.672012 137.204865,201.660690 
	C138.503738,198.886093 151.718781,190.397476 154.576706,191.116623 
	C156.983505,191.722229 159.105423,193.460052 161.675797,195.207642 
	C162.050400,196.381836 162.102646,197.045074 162.123016,198.069809 
	C162.391129,199.558060 162.691116,200.684784 162.681091,201.964951 
	C159.365143,205.213272 156.491104,208.453232 153.305435,211.350510 
	C151.287186,213.186050 148.804672,214.511093 146.193115,216.104446 
	C142.391739,216.548706 141.601822,219.156097 141.059525,221.967438 
	C140.865509,222.236145 140.671494,222.504852 140.273376,222.526001 
	C138.711014,222.161209 137.352737,222.043976 135.994461,221.926727 
	C134.762573,220.485153 133.530670,219.043594 132.150421,217.304840 
z"/>
<path fill="#2899A3" opacity="1.000000" stroke="none" 
	d="
M154.912140,225.378906 
	C148.721680,230.504440 141.715652,234.920822 136.512527,240.904846 
	C126.052490,252.934692 120.185661,267.462799 115.788986,282.790619 
	C111.961220,296.135101 103.729591,307.028534 92.850830,316.909271 
	C91.553818,315.634064 90.431564,314.530701 89.121590,313.242767 
	C92.869484,309.102783 96.073921,305.594238 99.244049,302.054932 
	C106.127037,294.370422 110.747192,285.411957 113.837685,275.646240 
	C120.148064,255.705887 131.532806,239.385681 148.885925,226.522232 
	C151.586777,224.336670 153.736282,222.511215 155.964035,221.044434 
	C155.665573,222.728394 155.288849,224.053650 154.912140,225.378906 
z"/>
<path fill="#EE8D50" opacity="1.000000" stroke="none" 
	d="
M135.259186,226.376694 
	C127.281288,234.390350 121.735107,243.779724 117.837334,254.453827 
	C113.607872,266.036285 105.457909,274.664825 94.750755,281.121216 
	C94.051796,280.164001 93.502007,279.542419 93.108040,278.834167 
	C92.724281,278.144318 92.500008,277.365814 92.096535,276.351868 
	C104.163986,269.248535 111.988831,258.983032 117.174507,246.160919 
	C119.487251,240.442429 123.951675,235.594147 128.044922,230.131958 
	C129.087280,229.249619 129.524246,228.586243 129.961227,227.922852 
	C130.830566,227.057129 131.699890,226.191422 133.178986,225.226028 
	C134.278885,225.543137 134.769043,225.959915 135.259186,226.376694 
z"/>
<path fill="#EE8D50" opacity="1.000000" stroke="none" 
	d="
M145.830292,258.972809 
	C142.744003,262.656525 139.706024,266.382050 136.561768,270.015594 
	C129.189713,278.534851 124.692848,288.361969 123.305313,299.471558 
	C122.511017,299.664062 122.038284,299.880981 121.570534,299.870697 
	C120.592934,299.849243 119.617966,299.707916 117.736435,299.530396 
	C118.352531,296.465759 118.705383,293.590057 119.520981,290.852264 
	C122.637405,280.391144 128.434525,271.604431 136.479355,264.250000 
	C138.317383,262.569672 139.960510,260.676178 142.413940,258.852234 
	C144.033127,258.873383 144.931702,258.923096 145.830292,258.972809 
z"/>
<path fill="#B3BFA4" opacity="1.000000" stroke="none" 
	d="
M101.308372,190.414337 
	C104.103867,187.275879 106.833733,184.468872 109.797363,181.421509 
	C109.544945,181.142197 110.208542,181.876511 111.049225,182.806778 
	C113.312218,180.696548 113.759705,179.000854 109.720009,178.181702 
	C112.528206,175.220673 114.747269,172.880829 116.918480,170.591446 
	C121.298164,173.644455 119.130051,176.944550 117.399826,179.606934 
	C114.813217,183.587128 113.784676,187.371445 114.660538,192.233246 
	C115.307915,195.826736 114.100426,199.754379 113.479172,203.927612 
	C113.239029,204.322052 113.231430,204.343307 113.231430,204.343307 
	C112.199997,202.867218 111.168571,201.391113 110.352737,199.347122 
	C111.135735,195.337784 111.703117,191.896332 112.270500,188.454895 
	C111.512962,188.227737 110.755417,188.000565 109.997871,187.773407 
	C109.324478,189.125015 108.162613,190.450577 108.088799,191.834167 
	C107.969231,194.075180 108.563927,196.354294 108.857040,198.617310 
	C108.184227,198.710098 107.511414,198.802902 106.382301,198.741638 
	C105.758179,198.341217 105.546173,198.141830 105.289986,197.989426 
	C105.160286,195.630142 105.149773,193.164444 101.025284,193.905029 
	C100.449425,193.952667 100.155022,193.895325 100.155022,193.895325 
	C100.517593,192.845474 100.880165,191.795624 101.308372,190.414337 
z"/>
<path fill="#F9C779" opacity="1.000000" stroke="none" 
	d="
M105.183350,198.373291 
	C105.546173,198.141830 105.758179,198.341217 106.044220,198.772995 
	C105.442513,211.372269 99.351685,221.403564 91.665092,230.547516 
	C86.521675,236.666122 82.989738,243.429916 80.839691,251.066162 
	C80.403610,252.614975 79.039436,253.902481 77.320549,254.830109 
	C77.861687,246.103790 80.702225,238.247070 86.573227,232.268234 
	C95.944305,222.725037 102.241913,211.769226 105.183350,198.373291 
z"/>
<path fill="#EC9256" opacity="1.000000" stroke="none" 
	d="
M112.894882,204.584656 
	C113.231430,204.343307 113.239029,204.322052 113.254013,204.316116 
	C113.269005,204.310181 113.305397,204.292892 113.293915,204.280945 
	C112.653603,205.866837 112.111725,207.505844 111.378815,209.054443 
	C109.547569,212.923737 108.083275,217.072525 105.644234,220.524490 
	C101.591644,226.260132 99.012604,232.317337 98.528236,239.341965 
	C98.450089,240.475266 97.201561,241.527863 96.494064,242.617767 
	C96.003906,241.413651 94.842186,240.006516 95.134644,239.038956 
	C96.794388,233.547928 98.362518,227.953400 100.810799,222.797211 
	C103.419823,217.302490 106.934509,212.232208 110.151382,207.037048 
	C110.703621,206.145203 111.743637,205.555374 112.894882,204.584656 
z"/>
<path fill="#EC9256" opacity="1.000000" stroke="none" 
	d="
M146.096741,258.761688 
	C144.931702,258.923096 144.033127,258.873383 142.692276,258.700439 
	C148.863770,249.227234 154.422195,239.403946 156.412140,227.426086 
	C157.297653,227.425781 157.818924,227.815979 158.340210,228.206177 
	C157.269501,239.474152 152.949188,249.459503 146.096741,258.761688 
z"/>
<path fill="#EC9256" opacity="1.000000" stroke="none" 
	d="
M92.484032,207.417892 
	C91.400276,210.888565 89.877342,214.290680 89.322754,217.843933 
	C88.109444,225.617645 83.280258,230.825073 77.010132,236.965820 
	C76.803391,234.626450 76.179596,232.832474 76.678940,232.429199 
	C84.239250,226.323456 87.034737,217.697144 89.553078,208.880081 
	C89.770653,208.118332 90.345673,207.458664 91.314636,206.817657 
	C92.077751,207.061768 92.280891,207.239838 92.484032,207.417892 
z"/>
<path fill="#9FD8D0" opacity="1.000000" stroke="none" 
	d="
M155.885803,220.685760 
	C153.736282,222.511215 151.586777,224.336670 149.165421,226.299957 
	C146.530563,224.958817 144.167557,223.479843 141.432037,221.984146 
	C141.601822,219.156097 142.391739,216.548706 146.416992,216.365173 
	C147.357544,216.835739 147.737015,217.084915 148.425720,217.557343 
	C151.410889,217.848373 154.086838,217.916153 156.696777,218.262573 
	C156.382462,219.256073 156.134125,219.970917 155.885803,220.685760 
z"/>
<path fill="#B3BFA4" opacity="1.000000" stroke="none" 
	d="
M155.964050,221.044449 
	C156.134125,219.970917 156.382462,219.256073 156.778763,217.996948 
	C157.202240,216.996780 157.477768,216.540878 158.053802,216.100311 
	C158.750626,216.094696 159.146927,216.073746 159.841309,216.118088 
	C160.476868,216.405655 160.814331,216.627914 161.151825,216.850174 
	C160.746277,219.916397 160.340729,222.982605 159.943695,226.475800 
	C159.571869,227.261337 159.191513,227.619919 158.575684,228.092346 
	C157.818924,227.815979 157.297653,227.425781 156.437714,227.029724 
	C155.777710,226.696396 155.456375,226.368927 155.023590,225.710175 
	C155.288849,224.053650 155.665573,222.728394 155.964050,221.044449 
z"/>
<path fill="#9FD8D0" opacity="1.000000" stroke="none" 
	d="
M109.076759,198.808380 
	C108.563927,196.354294 107.969231,194.075180 108.088799,191.834167 
	C108.162613,190.450577 109.324478,189.125015 109.997871,187.773407 
	C110.755417,188.000565 111.512962,188.227737 112.270500,188.454895 
	C111.703117,191.896332 111.135735,195.337784 110.206009,198.988968 
	C109.661263,199.132294 109.478867,199.065857 109.076759,198.808380 
z"/>
<path fill="#EAA06C" opacity="1.000000" stroke="none" 
	d="
M99.802826,193.957611 
	C100.155022,193.895325 100.449425,193.952667 100.594955,193.931519 
	C99.223923,196.227203 97.707367,198.544037 95.508858,200.957550 
	C94.561356,201.038956 94.295815,201.023697 94.030273,201.008453 
	C95.837059,198.678925 97.643837,196.349396 99.802826,193.957611 
z"/>
<path fill="#EAA06C" opacity="1.000000" stroke="none" 
	d="
M135.560181,226.250641 
	C134.769043,225.959915 134.278885,225.543137 133.454102,225.091568 
	C133.952209,224.177536 134.784927,223.298294 135.806061,222.172882 
	C137.352737,222.043976 138.711014,222.161209 140.051270,222.643677 
	C138.642563,224.047470 137.251877,225.086029 135.560181,226.250641 
z"/>
<path fill="#EC9256" opacity="1.000000" stroke="none" 
	d="
M93.808807,201.270508 
	C94.295815,201.023697 94.561356,201.038956 95.226433,201.082306 
	C94.716309,203.029648 93.806656,204.948883 92.690521,207.143005 
	C92.280891,207.239838 92.077751,207.061768 91.587509,206.590836 
	C92.062714,204.709503 92.825020,203.121048 93.808807,201.270508 
z"/>
<path fill="#EAA06C" opacity="1.000000" stroke="none" 
	d="
M129.669617,227.996613 
	C129.524246,228.586243 129.087280,229.249619 128.329132,229.958984 
	C128.464630,229.360092 128.921310,228.715240 129.669617,227.996613 
z"/>
<path fill="#B3BFA4" opacity="1.000000" stroke="none" 
	d="
M163.130188,227.357361 
	C163.267792,227.231964 163.449509,227.307587 163.676239,227.577545 
	C163.534317,227.717072 163.352005,227.645920 163.130188,227.357361 
z"/>
<path fill="#F3823B" opacity="1.000000" stroke="none" 
	d="
M178.207184,144.998199 
	C178.152435,144.539612 178.097702,144.081024 178.355453,142.978607 
	C178.422028,137.578766 178.176117,132.822754 177.902008,127.631393 
	C177.855316,125.176025 177.836807,123.156021 177.904419,120.666351 
	C178.012848,114.470901 178.035141,108.745117 178.430023,103.012085 
	C179.550323,102.987610 180.298050,102.970375 181.395538,102.995956 
	C190.325577,107.563530 198.905884,112.088295 207.776138,116.765953 
	C199.239014,134.459518 190.752884,152.047379 181.915466,170.363327 
	C181.381912,169.073425 180.995087,168.544037 180.960587,167.992599 
	C180.577682,161.870865 180.344986,155.737823 179.840683,149.626907 
	C179.710526,148.049805 178.773544,146.539291 178.207184,144.998199 
z"/>
<path fill="#1195A2" opacity="1.000000" stroke="none" 
	d="
M227.010864,144.795700 
	C227.010864,144.795700 226.643036,145.023773 226.047379,145.035660 
	C223.977081,146.368484 222.502457,147.689423 221.027832,149.010345 
	C215.031494,153.356583 209.035172,157.702805 202.344696,162.081863 
	C200.814621,162.816559 199.978653,163.518402 199.142700,164.220245 
	C199.142700,164.220245 199.158020,164.077377 198.830261,164.113129 
	C198.024658,164.816666 197.546829,165.484451 197.069000,166.152252 
	C196.682831,166.469254 196.296631,166.786255 195.256378,167.089966 
	C194.070572,167.053497 193.538849,167.030304 193.003555,167.003571 
	C193.000000,167.000000 192.992874,166.992874 192.985764,166.617279 
	C191.941986,164.139755 190.905319,162.037827 189.899658,159.619080 
	C190.280716,158.535934 190.630783,157.769592 191.376953,157.005386 
	C193.023178,156.874207 194.273270,156.740891 196.185196,156.536972 
	C195.194656,154.648941 194.471222,153.270004 193.802948,151.576813 
	C194.244308,150.511169 194.630478,149.759766 195.253235,148.878891 
	C195.626389,148.426132 195.762939,148.102859 195.919861,147.476410 
	C196.292389,146.451096 196.644562,145.728943 197.358643,144.947174 
	C198.047714,144.075958 198.374893,143.264389 198.663940,142.202515 
	C198.722977,141.631927 198.820160,141.311630 199.287231,140.939697 
	C200.006073,140.075745 200.355042,139.263412 200.677826,138.202271 
	C200.757050,137.639587 200.862457,137.325729 201.225220,136.856476 
	C201.650757,136.144455 201.818970,135.587830 201.983429,135.010712 
	C201.979660,134.990219 202.018875,134.976074 202.268753,134.822952 
	C202.673508,134.121674 202.828400,133.573517 202.982758,133.007721 
	C202.982224,132.990082 203.015869,132.979385 203.376587,132.928619 
	C204.056519,132.068039 204.375732,131.258209 204.654205,130.198242 
	C204.710144,129.627457 204.806778,129.306808 205.276093,128.936676 
	C205.994522,128.071503 206.340256,127.255806 206.650574,126.148819 
	C206.924072,125.162277 207.232986,124.467026 207.927475,123.855606 
	C209.623123,124.567879 210.933182,125.196327 213.168594,126.268669 
	C214.240509,123.821510 215.232346,121.557144 216.447952,119.343224 
	C216.671722,119.393661 217.026993,119.683907 217.133102,120.033646 
	C219.337082,121.691170 220.592285,125.322876 224.348602,122.884949 
	C225.127808,123.200035 225.617233,123.486435 226.120377,124.159523 
	C226.946564,124.923286 227.759018,125.300362 228.818878,125.639404 
	C229.382111,125.700150 229.697952,125.798935 230.049896,126.249306 
	C232.086380,127.335823 234.086746,128.070770 236.407562,128.840790 
	C237.130859,129.021530 237.533707,129.167175 237.958618,129.652328 
	C239.322144,131.302536 240.663635,132.613220 242.005127,133.923920 
	C239.061249,135.948425 236.117371,137.972931 232.465332,140.070496 
	C229.124756,140.622665 226.817749,141.433807 227.010864,144.795700 
z"/>
<path fill="#FDFEFE" opacity="1.000000" stroke="none" 
	d="
M123.811951,142.162476 
	C115.814552,142.125244 107.816406,142.008041 99.820053,142.082703 
	C95.466133,142.123337 91.743614,141.065704 90.128242,136.669739 
	C88.396675,131.957565 89.911240,128.234055 94.393822,125.782288 
	C95.102798,125.394508 96.056099,124.836166 96.228340,124.181023 
	C97.743416,118.418442 101.063438,115.306351 107.342628,115.770538 
	C108.058388,115.823448 109.194130,114.443214 109.619392,113.495956 
	C112.615089,106.823013 122.639191,105.967308 126.951981,112.841545 
	C126.690109,114.691452 126.523567,115.863731 126.265137,117.478088 
	C125.386154,126.000946 124.599060,134.081711 123.811951,142.162476 
z"/>
<path fill="#FDFEFE" opacity="1.000000" stroke="none" 
	d="
M198.545181,181.816391 
	C203.206985,178.865921 207.647293,176.273132 211.949341,173.468307 
	C213.397964,172.523849 214.648605,171.160599 215.726181,169.782669 
	C219.768509,164.613632 225.304291,164.428375 229.593658,169.437759 
	C230.021942,169.937927 230.362595,170.992371 230.736252,170.988770 
	C237.111755,170.927780 239.213486,176.311966 242.225327,180.250275 
	C243.653137,182.117294 245.026840,185.294983 244.362457,187.133530 
	C243.706146,188.949722 240.481857,190.872620 238.327087,190.940567 
	C226.549637,191.311981 214.754074,191.195160 202.965851,191.102859 
	C197.138733,191.057251 195.495117,187.751526 198.545181,181.816391 
z"/>
<path fill="#B29064" opacity="1.000000" stroke="none" 
	d="
M204.903412,128.986160 
	C204.806778,129.306808 204.710144,129.627457 204.366364,130.352570 
	C203.751434,131.497818 203.383652,132.238602 203.015869,132.979385 
	C203.015869,132.979385 202.982224,132.990082 202.727966,133.154022 
	C202.322098,133.870667 202.170486,134.423370 202.018875,134.976074 
	C202.018875,134.976074 201.979660,134.990219 201.728516,135.165375 
	C201.307526,135.897629 201.137695,136.454758 200.967865,137.011871 
	C200.862457,137.325729 200.757050,137.639587 200.385803,138.359100 
	C199.719086,139.506958 199.318222,140.249146 198.917358,140.991318 
	C198.820160,141.311630 198.722977,141.631927 198.377991,142.362991 
	C197.752365,143.518082 197.374557,144.262436 196.996735,145.006790 
	C196.644562,145.728943 196.292389,146.451096 195.693451,147.617249 
	C195.303345,148.376938 195.160004,148.692657 195.016647,149.008362 
	C194.630478,149.759766 194.244308,150.511169 193.533478,151.760712 
	C192.466171,153.840302 191.723511,155.421768 190.980835,157.003235 
	C190.630783,157.769592 190.280716,158.535934 189.605453,159.793030 
	C187.879440,163.198410 186.478653,166.113083 185.043625,169.028259 
	C185.009399,169.028778 185.031616,169.094284 184.751266,169.288925 
	C183.658676,171.672943 182.846420,173.862305 182.034164,176.051682 
	C182.034164,176.051682 181.994995,176.012299 181.749298,176.101501 
	C181.012894,176.487885 180.522202,176.785065 179.750122,176.770996 
	C178.964325,171.632919 178.459900,166.806122 177.955475,161.979309 
	C177.966217,156.622330 177.976959,151.265366 178.097443,145.453293 
	C178.773544,146.539291 179.710526,148.049805 179.840683,149.626907 
	C180.344986,155.737823 180.577682,161.870865 180.960587,167.992599 
	C180.995087,168.544037 181.381912,169.073425 181.915466,170.363327 
	C190.752884,152.047379 199.239014,134.459518 207.776138,116.765953 
	C198.905884,112.088295 190.325577,107.563530 181.199402,102.750793 
	C179.788177,102.648323 178.922806,102.833824 178.057449,103.019318 
	C178.035141,108.745117 178.012848,114.470901 177.656097,120.326782 
	C177.155884,113.285309 176.990112,106.113754 176.824356,98.942192 
	C177.491028,98.907829 178.157684,98.873466 179.382584,99.197327 
	C189.114883,104.140671 198.267853,108.769302 207.493744,113.247643 
	C208.481949,113.727318 210.760529,113.743553 210.981781,113.279427 
	C214.337662,106.239281 217.449783,99.082932 220.618958,91.953781 
	C221.917648,92.574661 223.831940,92.842728 224.420929,93.870392 
	C231.161621,105.631432 237.709610,117.503120 244.262131,129.371185 
	C244.538986,129.872620 244.358429,130.626602 243.882645,131.385193 
	C241.561737,130.775894 239.749161,130.044342 237.936569,129.312805 
	C237.533707,129.167175 237.130859,129.021530 236.228882,128.552582 
	C233.824432,127.452087 231.919113,126.674904 230.013794,125.897720 
	C229.697952,125.798935 229.382111,125.700150 228.674957,125.343323 
	C227.557983,124.647797 226.832321,124.210312 226.106644,123.772835 
	C225.617233,123.486435 225.127808,123.200035 224.137344,122.613373 
	C221.433197,121.436714 219.230087,120.560310 217.026993,119.683907 
	C217.026993,119.683907 216.671722,119.393661 216.341568,119.093231 
	C215.341400,118.515083 214.671371,118.237373 213.850281,117.887535 
	C213.699203,117.815414 213.365616,117.844208 213.195236,117.622849 
	C212.682007,117.285004 212.339157,117.168510 211.667618,117.017197 
	C210.858704,117.631523 210.378494,118.280670 209.624695,119.135902 
	C208.748047,120.818581 208.144974,122.295174 207.541901,123.771774 
	C207.232986,124.467026 206.924072,125.162277 206.360580,126.307114 
	C205.705139,127.499855 205.304291,128.243011 204.903412,128.986160 
M240.080841,127.351913 
	C240.187347,127.397446 240.293869,127.442978 240.400375,127.488518 
	C240.280518,127.314499 240.160675,127.140472 240.032440,126.226913 
	C234.484558,116.104424 228.936691,105.981926 222.772430,94.734802 
	C220.404358,99.289360 218.707260,102.462143 217.092712,105.676407 
	C212.805161,114.212090 212.820755,114.216614 221.073471,118.749565 
	C221.505280,118.986755 221.839798,119.422043 222.285034,119.610725 
	C228.170731,122.105011 234.068146,124.571609 240.080841,127.351913 
z"/>
<path fill="#F9BD68" opacity="1.000000" stroke="none" 
	d="
M123.864906,142.579681 
	C124.599060,134.081711 125.386154,126.000946 126.554260,117.403793 
	C127.610252,115.969452 128.285248,115.051506 129.134003,114.419144 
	C130.966934,116.001266 132.588623,117.349564 134.292847,118.583900 
	C138.208038,121.419571 142.163437,124.199730 146.022583,127.346970 
	C143.630264,131.283630 141.220230,134.817291 139.026993,138.480743 
	C135.161591,144.937286 131.428497,151.473053 127.337723,158.047089 
	C125.565933,159.412918 124.096443,160.707306 122.626945,162.001678 
	C123.057251,155.666748 123.487549,149.331818 123.864906,142.579681 
z"/>
<path fill="#FDFEFE" opacity="1.000000" stroke="none" 
	d="
M185.002975,83.116547 
	C180.339432,83.110939 176.143478,83.393959 172.024414,82.955177 
	C170.426285,82.784935 168.303299,81.265862 167.723633,79.833450 
	C167.274902,78.724586 168.434006,76.272713 169.609512,75.320488 
	C174.336151,71.491638 179.287399,67.927132 184.298752,64.472542 
	C185.423233,63.697369 187.571533,63.011749 188.489456,63.558723 
	C194.513397,67.148293 201.199371,70.136635 204.410278,76.995712 
	C205.796066,79.955994 203.638138,82.905128 199.994415,83.051903 
	C195.170319,83.246201 190.332947,83.110619 185.002975,83.116547 
z"/>
<path fill="#1C949D" opacity="1.000000" stroke="none" 
	d="
M220.138214,91.982208 
	C217.449783,99.082932 214.337662,106.239281 210.981781,113.279427 
	C210.760529,113.743553 208.481949,113.727318 207.493744,113.247643 
	C198.267853,108.769302 189.114883,104.140671 179.713470,99.244713 
	C188.110382,97.343437 196.725388,95.700523 205.362503,94.183372 
	C210.108276,93.349747 214.891266,92.727943 220.138214,91.982208 
z"/>
<path fill="#9FD8D0" opacity="1.000000" stroke="none" 
	d="
M177.667969,162.281891 
	C178.459900,166.806122 178.964325,171.632919 179.893646,177.012848 
	C180.858597,177.679688 181.398651,177.793442 181.938705,177.907196 
	C180.378876,182.170807 178.131332,186.330795 177.468460,190.729584 
	C176.898834,194.509674 175.425705,196.609299 172.157410,197.983688 
	C171.657532,198.193909 171.433167,199.059326 170.606445,199.896179 
	C167.344345,199.765472 164.368393,199.971832 162.154877,197.708298 
	C162.102646,197.045074 162.050400,196.381836 161.973373,195.388123 
	C162.800446,194.625839 163.895554,194.398254 164.460358,193.725479 
	C166.473114,191.327911 167.968353,188.395126 170.276642,186.367508 
	C175.029770,182.192337 178.029984,177.617798 177.087967,170.932571 
	C176.705383,168.217529 177.255005,165.371109 177.667969,162.281891 
z"/>
<path fill="#F0843F" opacity="1.000000" stroke="none" 
	d="
M146.102509,127.002434 
	C142.163437,124.199730 138.208038,121.419571 134.292847,118.583900 
	C132.588623,117.349564 130.966934,116.001266 129.572418,114.362106 
	C132.503586,113.723923 135.170074,113.428360 137.836563,113.132797 
	C142.994980,113.035347 148.153412,112.937889 153.862640,112.951004 
	C154.413452,113.061569 154.592056,113.057175 154.592056,113.057175 
	C154.592056,113.057175 154.813614,113.120613 154.864288,113.470505 
	C154.915909,114.178177 154.916855,114.535957 154.627441,115.069862 
	C151.884583,119.164520 149.432083,123.083038 146.760315,127.002068 
	C146.541046,127.002571 146.102509,127.002434 146.102509,127.002434 
z"/>
<path fill="#FDFDFC" opacity="1.000000" stroke="none" 
	d="
M173.000809,202.661911 
	C174.978455,204.010681 177.319794,205.047165 178.825760,206.800949 
	C180.181534,208.379837 181.823822,211.323425 181.193954,212.633301 
	C180.150528,214.803268 177.601105,217.086853 175.293716,217.618164 
	C171.683044,218.449585 167.745117,217.859756 163.492462,217.454712 
	C165.690292,212.864334 168.341461,208.691208 171.286804,204.339905 
	C172.054245,203.661789 172.527527,203.161850 173.000809,202.661911 
z"/>
<path fill="#D29A66" opacity="1.000000" stroke="none" 
	d="
M122.530930,162.310394 
	C124.096443,160.707306 125.565933,159.412918 127.753044,158.077789 
	C129.278946,157.880875 130.192108,157.916275 130.879715,157.539764 
	C140.576721,152.229736 150.271210,146.913254 159.884155,141.453720 
	C161.209381,140.701065 162.093567,139.171844 163.483734,137.999939 
	C164.189102,137.979385 164.592667,137.961044 165.234604,137.964722 
	C165.472961,137.986725 165.950790,138.016769 165.950790,138.016769 
	C164.952301,139.551971 164.312546,141.709549 162.898849,142.524414 
	C151.055801,149.350876 139.101288,155.987350 127.081352,162.498337 
	C125.867043,163.156113 123.999382,162.607742 122.530930,162.310394 
z"/>
<path fill="#F4F5F3" opacity="1.000000" stroke="none" 
	d="
M170.992645,204.518082 
	C168.341461,208.691208 165.690292,212.864334 163.036530,217.376617 
	C162.567215,217.500259 162.100494,217.284760 161.392792,216.959717 
	C160.814331,216.627914 160.476868,216.405655 159.947083,215.703430 
	C160.833557,210.752823 161.912323,206.282166 162.991089,201.811523 
	C162.691116,200.684784 162.391129,199.558060 162.123016,198.069809 
	C164.368393,199.971832 167.344345,199.765472 170.442139,200.237885 
	C170.752747,200.305099 170.903778,200.689468 170.962433,201.306061 
	C171.011627,202.787796 171.002136,203.652939 170.992645,204.518082 
z"/>
<path fill="#F9C779" opacity="1.000000" stroke="none" 
	d="
M166.153610,137.786621 
	C165.950790,138.016769 165.472961,137.986725 165.072266,137.732147 
	C164.142593,137.303741 163.613586,137.129929 163.055542,136.963654 
	C163.026505,136.971176 163.046631,136.914642 163.034729,136.528717 
	C162.138092,134.516922 161.346985,132.829346 160.331909,131.289413 
	C159.765656,130.430389 158.357758,129.938004 158.134338,129.072525 
	C156.923447,124.382065 155.963913,119.626717 154.917786,114.893730 
	C154.916855,114.535957 154.915909,114.178177 154.941986,113.555634 
	C155.774078,113.716354 157.049377,113.950356 157.312546,114.596550 
	C160.414871,122.214149 163.365707,129.893433 166.153610,137.786621 
z"/>
<path fill="#9FD8D0" opacity="1.000000" stroke="none" 
	d="
M176.444946,99.057983 
	C176.990112,106.113754 177.155884,113.285309 177.569977,120.796440 
	C177.836807,123.156021 177.855316,125.176025 177.854767,128.084152 
	C177.759232,132.668732 177.682770,136.365204 177.606308,140.061661 
	C176.750351,136.223526 175.313629,132.409241 175.154877,128.542480 
	C174.782013,119.460968 174.997025,110.354210 175.056580,101.258217 
	C175.061157,100.561226 175.714020,99.868484 176.444946,99.057983 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M182.397552,176.130859 
	C182.846420,173.862305 183.658676,171.672943 184.759674,169.635254 
	C185.820618,170.229523 186.595856,171.039627 187.364243,171.033188 
	C188.694855,171.022018 190.021210,170.504868 191.349350,170.199936 
	C188.486542,172.203293 185.623734,174.206665 182.397552,176.130859 
z"/>
<path fill="#F9C779" opacity="1.000000" stroke="none" 
	d="
M137.577057,112.856087 
	C135.170074,113.428360 132.503586,113.723923 129.398666,114.076523 
	C128.285248,115.051506 127.610252,115.969452 126.646141,116.961700 
	C126.523567,115.863731 126.690109,114.691452 127.037964,113.190170 
	C130.585373,112.767220 133.951462,112.673294 137.577057,112.856087 
z"/>
<path fill="#1195A2" opacity="1.000000" stroke="none" 
	d="
M191.611481,170.150879 
	C190.021210,170.504868 188.694855,171.022018 187.364243,171.033188 
	C186.595856,171.039627 185.820618,170.229523 185.040039,169.440613 
	C185.031616,169.094284 185.009399,169.028778 185.418854,169.017807 
	C188.216492,168.335526 190.604675,167.664200 192.992874,166.992874 
	C192.992874,166.992874 193.000000,167.000000 193.004944,167.347229 
	C193.022141,168.152863 193.034409,168.611237 193.046677,169.069626 
	C192.655670,169.413696 192.264648,169.757751 191.611481,170.150879 
z"/>
<path fill="#B29064" opacity="1.000000" stroke="none" 
	d="
M177.686249,140.419830 
	C177.682770,136.365204 177.759232,132.668732 177.882935,128.519501 
	C178.176117,132.822754 178.422028,137.578766 178.398163,142.633270 
	C178.007645,142.213837 177.886902,141.495911 177.686249,140.419830 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M237.958618,129.652328 
	C239.749161,130.044342 241.561737,130.775894 243.687622,131.605438 
	C243.554642,132.409256 243.108353,133.115067 242.333588,133.872406 
	C240.663635,132.613220 239.322144,131.302536 237.958618,129.652328 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M227.322372,144.708405 
	C226.817749,141.433807 229.124756,140.622665 232.161743,140.189819 
	C230.922165,141.697769 229.278030,143.159439 227.322372,144.708405 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M221.352798,148.954376 
	C222.502457,147.689423 223.977081,146.368484 225.835129,145.077850 
	C224.704956,146.371597 223.191360,147.635010 221.352798,148.954376 
z"/>
<path fill="#9FD8D0" opacity="1.000000" stroke="none" 
	d="
M171.286804,204.339905 
	C171.002136,203.652939 171.011627,202.787796 171.050751,201.492706 
	C171.680511,201.414780 172.280609,201.766800 172.940765,202.390366 
	C172.527527,203.161850 172.054245,203.661789 171.286804,204.339905 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M199.481964,164.213196 
	C199.978653,163.518402 200.814621,162.816559 202.014191,162.151245 
	C201.525635,162.860580 200.673431,163.533371 199.481964,164.213196 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M193.356018,169.005508 
	C193.034409,168.611237 193.022141,168.152863 193.008499,167.350800 
	C193.538849,167.030304 194.070572,167.053497 195.001236,167.130493 
	C194.821884,167.770020 194.243622,168.355698 193.356018,169.005508 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M197.371704,166.076508 
	C197.546829,165.484451 198.024658,164.816666 198.855225,164.180496 
	C198.696777,164.808334 198.185593,165.404541 197.371704,166.076508 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M182.001312,177.590286 
	C181.398651,177.793442 180.858597,177.679688 180.175018,177.324097 
	C180.522202,176.785065 181.012894,176.487885 181.776978,176.103546 
	C182.054901,176.435379 182.059418,176.854370 182.001312,177.590286 
z"/>
<path fill="#F9C779" opacity="1.000000" stroke="none" 
	d="
M154.646378,112.928337 
	C154.592056,113.057175 154.413452,113.061569 154.344727,113.010178 
	C154.275986,112.958794 154.391296,112.638008 154.391296,112.638008 
	C154.391296,112.638008 154.700699,112.799500 154.646378,112.928337 
z"/>
<path fill="#EAA06C" opacity="1.000000" stroke="none" 
	d="
M162.681091,201.964951 
	C161.912323,206.282166 160.833557,210.752823 159.649002,215.638123 
	C159.146927,216.073746 158.750626,216.094696 158.107544,215.688202 
	C157.802002,214.180984 157.743271,213.101242 157.642456,211.248337 
	C154.103668,213.509140 151.110077,215.421631 148.116470,217.334106 
	C147.737015,217.084915 147.357544,216.835739 146.754227,216.325806 
	C148.804672,214.511093 151.287186,213.186050 153.305435,211.350510 
	C156.491104,208.453232 159.365143,205.213272 162.681091,201.964951 
z"/>
<path fill="#F4F5F3" opacity="1.000000" stroke="none" 
	d="
M148.425720,217.557343 
	C151.110077,215.421631 154.103668,213.509140 157.642456,211.248337 
	C157.743271,213.101242 157.802002,214.180984 157.807007,215.672852 
	C157.477768,216.540878 157.202240,216.996780 156.844757,217.718323 
	C154.086838,217.916153 151.410889,217.848373 148.425720,217.557343 
z"/>
<path fill="#EE8D50" opacity="1.000000" stroke="none" 
	d="
M178.430023,103.012085 
	C178.922806,102.833824 179.788177,102.648323 180.849670,102.707985 
	C180.298050,102.970375 179.550323,102.987610 178.430023,103.012085 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M192.985764,166.617279 
	C190.604675,167.664200 188.216492,168.335526 185.453064,169.017288 
	C186.478653,166.113083 187.879440,163.198410 189.574463,160.109818 
	C190.905319,162.037827 191.941986,164.139755 192.985764,166.617279 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M214.001358,117.959656 
	C214.671371,118.237373 215.341400,118.515083 216.117798,119.042786 
	C215.232346,121.557144 214.240509,123.821510 213.168594,126.268669 
	C210.933182,125.196327 209.623123,124.567879 207.927460,123.855606 
	C208.144974,122.295174 208.748047,120.818581 209.912338,119.355042 
	C211.271103,120.162407 212.068665,120.956726 212.866211,121.751045 
	C213.244598,120.487251 213.622986,119.223450 214.001358,117.959656 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M191.376953,157.005386 
	C191.723511,155.421768 192.466171,153.840302 193.478302,152.074936 
	C194.471222,153.270004 195.194656,154.648941 196.185196,156.536972 
	C194.273270,156.740891 193.023178,156.874207 191.376953,157.005386 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M217.133102,120.033646 
	C219.230087,120.560310 221.433197,121.436714 223.847549,122.584686 
	C220.592285,125.322876 219.337082,121.691170 217.133102,120.033646 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M230.049896,126.249306 
	C231.919113,126.674904 233.824432,127.452087 235.908447,128.517487 
	C234.086746,128.070770 232.086380,127.335823 230.049896,126.249306 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M203.376587,132.928619 
	C203.383652,132.238602 203.751434,131.497818 204.407074,130.602707 
	C204.375732,131.258209 204.056519,132.068039 203.376587,132.928619 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M197.358643,144.947174 
	C197.374557,144.262436 197.752365,143.518082 198.416122,142.613281 
	C198.374893,143.264389 198.047714,144.075958 197.358643,144.947174 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M205.276108,128.936676 
	C205.304291,128.243011 205.705139,127.499855 206.395996,126.598404 
	C206.340256,127.255806 205.994522,128.071503 205.276108,128.936676 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M199.287231,140.939697 
	C199.318222,140.249146 199.719086,139.506958 200.411987,138.607925 
	C200.355042,139.263412 200.006073,140.075745 199.287231,140.939697 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M226.120377,124.159523 
	C226.832321,124.210312 227.557983,124.647797 228.427567,125.381363 
	C227.759018,125.300362 226.946564,124.923286 226.120377,124.159523 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M202.268753,134.822952 
	C202.170486,134.423370 202.322098,133.870667 202.728485,133.171661 
	C202.828400,133.573517 202.673508,134.121674 202.268753,134.822952 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M201.225220,136.856476 
	C201.137695,136.454758 201.307526,135.897629 201.732269,135.185867 
	C201.818970,135.587830 201.650757,136.144455 201.225220,136.856476 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M195.253235,148.878891 
	C195.160004,148.692657 195.303345,148.376938 195.673096,147.920410 
	C195.762939,148.102859 195.626389,148.426132 195.253235,148.878891 
z"/>
<path fill="#F0843F" opacity="1.000000" stroke="none" 
	d="
M239.962646,127.045128 
	C234.068146,124.571609 228.170731,122.105011 222.285034,119.610725 
	C221.839798,119.422043 221.505280,118.986755 221.073471,118.749565 
	C212.820755,114.216614 212.805161,114.212090 217.092712,105.676407 
	C218.707260,102.462143 220.404358,99.289360 222.772430,94.734802 
	C228.936691,105.981926 234.484558,116.104424 240.015869,126.615128 
	C239.999283,127.003349 239.962646,127.045128 239.962646,127.045128 
z"/>
<path fill="#1195A2" opacity="1.000000" stroke="none" 
	d="
M213.850281,117.887535 
	C213.622986,119.223450 213.244598,120.487251 212.866211,121.751045 
	C212.068665,120.956726 211.271103,120.162407 210.185913,119.148956 
	C210.378494,118.280670 210.858704,117.631523 211.822678,117.252411 
	C212.659485,117.629692 213.012558,117.736954 213.365616,117.844208 
	C213.365616,117.844208 213.699203,117.815414 213.850281,117.887535 
z"/>
<path fill="#F0843F" opacity="1.000000" stroke="none" 
	d="
M240.020050,126.984894 
	C240.160675,127.140472 240.280518,127.314499 240.400375,127.488510 
	C240.293869,127.442978 240.187347,127.397446 240.021744,127.198517 
	C239.962646,127.045128 239.999283,127.003349 240.020050,126.984894 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M213.195236,117.622849 
	C213.012558,117.736954 212.659485,117.629692 212.151367,117.287231 
	C212.339157,117.168510 212.682007,117.285004 213.195236,117.622849 
z"/>
<path fill="#F3823B" opacity="1.000000" stroke="none" 
	d="
M163.181946,138.002151 
	C162.093567,139.171844 161.209381,140.701065 159.884155,141.453720 
	C150.271210,146.913254 140.576721,152.229736 130.879715,157.539764 
	C130.192108,157.916275 129.278946,157.880875 128.055328,158.006332 
	C131.428497,151.473053 135.161591,144.937286 139.026993,138.480743 
	C141.220230,134.817291 143.630264,131.283630 146.022583,127.346970 
	C146.102509,127.002434 146.541046,127.002571 147.081573,127.127373 
	C152.763611,130.473007 157.905121,133.693817 163.046631,136.914642 
	C163.046631,136.914642 163.026505,136.971176 163.050293,137.228134 
	C163.110031,137.657440 163.145981,137.829803 163.181946,138.002151 
z"/>
<path fill="#F9BD68" opacity="1.000000" stroke="none" 
	d="
M163.034729,136.528717 
	C157.905121,133.693817 152.763611,130.473007 147.300842,127.126869 
	C149.432083,123.083038 151.884583,119.164520 154.627441,115.069862 
	C155.963913,119.626717 156.923447,124.382065 158.134338,129.072525 
	C158.357758,129.938004 159.765656,130.430389 160.331909,131.289413 
	C161.346985,132.829346 162.138092,134.516922 163.034729,136.528717 
z"/>
<path fill="#F9BD68" opacity="1.000000" stroke="none" 
	d="
M163.483734,137.999939 
	C163.145981,137.829803 163.110031,137.657440 163.079346,137.220612 
	C163.613586,137.129929 164.142593,137.303741 164.833923,137.710144 
	C164.592667,137.961044 164.189102,137.979385 163.483734,137.999939 
z"/>
</svg>`],d3=["100 100",`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" viewBox="0 0 339 339" enable-background="new 0 0 339 339" xml:space="preserve">
<path fill="#FFFFFF" opacity="0.000000" stroke="none" 
	d="
M235.000000,340.000000 
	C156.666687,340.000000 78.833359,340.000000 1.000031,340.000000 
	C1.000021,227.000031 1.000021,114.000069 1.000010,1.000077 
	C113.999947,1.000051 226.999893,1.000051 339.999878,1.000026 
	C339.999939,113.999931 339.999939,226.999863 339.999969,339.999878 
	C305.166656,340.000000 270.333344,340.000000 235.000000,340.000000 
M96.190811,200.860886 
	C97.707367,198.544037 99.223923,196.227203 101.601135,193.857376 
	C105.149773,193.164444 105.160286,195.630142 105.076721,198.757172 
	C102.241913,211.769226 95.944305,222.725037 86.573227,232.268234 
	C80.702225,238.247070 77.861687,246.103790 77.320549,254.830109 
	C79.039436,253.902481 80.403610,252.614975 80.839691,251.066162 
	C82.989738,243.429916 86.521675,236.666122 91.665092,230.547516 
	C99.351685,221.403564 105.442513,211.372269 106.838608,198.895691 
	C107.511414,198.802902 108.184227,198.710098 109.296478,198.999435 
	C109.478867,199.065857 109.661263,199.132294 110.137138,199.915024 
	C111.168571,201.391113 112.199997,202.867218 112.558334,204.826019 
	C111.743637,205.555374 110.703621,206.145203 110.151382,207.037048 
	C106.934509,212.232208 103.419823,217.302490 100.810799,222.797211 
	C98.362518,227.953400 96.794388,233.547928 95.134644,239.038956 
	C94.842186,240.006516 96.003906,241.413651 96.494057,242.617767 
	C97.201561,241.527863 98.450089,240.475266 98.528236,239.341965 
	C99.012604,232.317337 101.591644,226.260132 105.644234,220.524490 
	C108.083275,217.072525 109.547569,212.923737 111.378815,209.054443 
	C112.111725,207.505844 112.653603,205.866837 113.967720,204.680496 
	C119.979164,208.789551 125.990616,212.898590 132.298782,217.602020 
	C133.530670,219.043594 134.762573,220.485153 135.617661,222.419052 
	C134.784927,223.298294 133.952209,224.177536 132.569229,225.325699 
	C131.699890,226.191422 130.830566,227.057129 129.377991,228.070389 
	C128.921310,228.715240 128.464630,229.360092 127.439545,230.350906 
	C123.951675,235.594147 119.487251,240.442429 117.174507,246.160919 
	C111.988831,258.983032 104.163986,269.248535 92.096535,276.351868 
	C92.500008,277.365814 92.724281,278.144318 93.108040,278.834167 
	C93.502007,279.542419 94.051796,280.164001 94.750755,281.121216 
	C105.457909,274.664825 113.607872,266.036285 117.837334,254.453827 
	C121.735107,243.779724 127.281288,234.390350 135.861191,226.124603 
	C137.251877,225.086029 138.642563,224.047470 140.477463,222.773544 
	C140.671494,222.504852 140.865509,222.236145 141.804550,222.000854 
	C144.167557,223.479843 146.530563,224.958817 148.334564,226.882355 
	C131.532806,239.385681 120.148064,255.705887 113.837685,275.646240 
	C110.747192,285.411957 106.127037,294.370422 99.244049,302.054932 
	C96.073921,305.594238 92.869484,309.102783 89.121590,313.242767 
	C90.431564,314.530701 91.553818,315.634064 92.850830,316.909271 
	C103.729591,307.028534 111.961220,296.135101 115.788986,282.790619 
	C120.185661,267.462799 126.052490,252.934692 136.512527,240.904846 
	C141.715652,234.920822 148.721680,230.504440 155.135040,226.041443 
	C155.456375,226.368927 155.777710,226.696396 156.047897,227.816589 
	C154.422195,239.403946 148.863770,249.227234 141.693344,258.880798 
	C139.960510,260.676178 138.317383,262.569672 136.479355,264.250000 
	C128.434525,271.604431 122.637405,280.391144 119.520981,290.852264 
	C118.705383,293.590057 118.352531,296.465759 117.736435,299.530396 
	C119.617966,299.707916 120.592934,299.849243 121.570534,299.870697 
	C122.038284,299.880981 122.511017,299.664062 123.305313,299.471558 
	C124.692848,288.361969 129.189713,278.534851 136.561768,270.015594 
	C139.706024,266.382050 142.744003,262.656525 146.363174,258.550568 
	C152.949188,249.459503 157.269501,239.474152 158.811172,227.978500 
	C159.191513,227.619919 159.571869,227.261337 160.721512,227.039703 
	C161.500290,227.101105 162.279053,227.162506 163.202530,227.490799 
	C163.352005,227.645920 163.534317,227.717072 164.645432,227.860779 
	C170.748840,227.932312 176.886505,228.455688 182.949677,227.996185 
	C207.538467,226.132675 227.859772,215.518860 243.725677,196.769241 
	C265.787781,170.697266 271.009003,140.781525 260.099396,108.984329 
	C245.557602,66.600693 203.133667,42.287807 159.224838,50.121456 
	C131.436447,55.079105 110.365273,70.261406 96.521751,94.912697 
	C86.899170,112.047729 83.212097,130.441284 85.900482,150.124084 
	C87.897949,164.748276 92.737541,178.109695 101.242744,190.745773 
	C100.880165,191.795624 100.517593,192.845474 99.450623,194.019882 
	C97.643837,196.349396 95.837059,198.678925 93.587326,201.532578 
	C92.825020,203.121048 92.062714,204.709503 90.754646,206.751587 
	C90.345673,207.458664 89.770653,208.118332 89.553078,208.880081 
	C87.034737,217.697144 84.239250,226.323456 76.678940,232.429199 
	C76.179596,232.832474 76.803391,234.626450 77.010132,236.965820 
	C83.280258,230.825073 88.109444,225.617645 89.322754,217.843933 
	C89.877342,214.290680 91.400276,210.888565 92.897003,206.868103 
	C93.806656,204.948883 94.716309,203.029648 96.190811,200.860886 
z"/>
<path fill="#8FE4E8" opacity="1.000000" stroke="none" 
	d="
M101.374008,190.082886 
	C92.737541,178.109695 87.897949,164.748276 85.900482,150.124084 
	C83.212097,130.441284 86.899170,112.047729 96.521751,94.912697 
	C110.365273,70.261406 131.436447,55.079105 159.224838,50.121456 
	C203.133667,42.287807 245.557602,66.600693 260.099396,108.984329 
	C271.009003,140.781525 265.787781,170.697266 243.725677,196.769241 
	C227.859772,215.518860 207.538467,226.132675 182.949677,227.996185 
	C176.886505,228.455688 170.748840,227.932312 164.124222,227.655792 
	C163.449509,227.307587 163.267792,227.231964 163.057831,227.223907 
	C162.279053,227.162506 161.500290,227.101105 160.328339,226.544266 
	C160.340729,222.982605 160.746277,219.916397 161.392792,216.959717 
	C162.100494,217.284760 162.567215,217.500259 163.489868,217.793854 
	C167.745117,217.859756 171.683044,218.449585 175.293716,217.618164 
	C177.601105,217.086853 180.150528,214.803268 181.193954,212.633301 
	C181.823822,211.323425 180.181534,208.379837 178.825760,206.800949 
	C177.319794,205.047165 174.978455,204.010681 172.940765,202.390366 
	C172.280609,201.766800 171.680511,201.414780 170.992096,200.876099 
	C170.903778,200.689468 170.752747,200.305099 170.917053,199.963409 
	C171.433167,199.059326 171.657532,198.193909 172.157410,197.983688 
	C175.425705,196.609299 176.898834,194.509674 177.468460,190.729584 
	C178.131332,186.330795 180.378876,182.170807 182.001312,177.590286 
	C182.059418,176.854370 182.054901,176.435379 182.022690,176.014343 
	C181.994995,176.012299 182.034164,176.051682 182.397552,176.130859 
	C185.623734,174.206665 188.486542,172.203293 191.611481,170.150879 
	C192.264648,169.757751 192.655670,169.413696 193.356018,169.005508 
	C194.243622,168.355698 194.821884,167.770020 195.655304,167.143799 
	C196.296631,166.786255 196.682831,166.469254 197.371704,166.076508 
	C198.185593,165.404541 198.696777,164.808334 199.182983,164.144745 
	C199.158020,164.077377 199.142700,164.220245 199.481964,164.213196 
	C200.673431,163.533371 201.525635,162.860580 202.708328,162.118408 
	C209.035172,157.702805 215.031494,153.356583 221.352783,148.954376 
	C223.191360,147.635010 224.704956,146.371597 226.430786,145.065979 
	C226.643036,145.023773 227.010864,144.795700 227.322372,144.708405 
	C229.278030,143.159439 230.922165,141.697769 232.869888,140.116760 
	C236.117371,137.972931 239.061249,135.948425 242.333588,133.872406 
	C243.108353,133.115067 243.554642,132.409256 244.195953,131.483185 
	C244.358429,130.626602 244.538986,129.872620 244.262131,129.371185 
	C237.709610,117.503120 231.161621,105.631432 224.420929,93.870392 
	C223.831940,92.842728 221.917648,92.574661 220.138214,91.982208 
	C214.891266,92.727943 210.108276,93.349747 205.362503,94.183372 
	C196.725388,95.700523 188.110382,97.343437 179.155243,98.886482 
	C178.157684,98.873466 177.491028,98.907829 176.444946,99.057983 
	C175.714020,99.868484 175.061157,100.561226 175.056580,101.258217 
	C174.997025,110.354210 174.782013,119.460968 175.154877,128.542480 
	C175.313629,132.409241 176.750351,136.223526 177.686249,140.419830 
	C177.886902,141.495911 178.007645,142.213837 178.085663,143.277100 
	C178.097702,144.081024 178.152435,144.539612 178.097443,145.453293 
	C177.976959,151.265366 177.966217,156.622330 177.667969,162.281891 
	C177.255005,165.371109 176.705383,168.217529 177.087967,170.932571 
	C178.029984,177.617798 175.029770,182.192337 170.276642,186.367508 
	C167.968353,188.395126 166.473114,191.327911 164.460358,193.725479 
	C163.895554,194.398254 162.800446,194.625839 161.651016,194.877167 
	C159.105423,193.460052 156.983505,191.722229 154.576706,191.116623 
	C151.718781,190.397476 138.503738,198.886093 137.204865,201.660690 
	C136.731445,202.672012 136.401566,204.087524 135.577469,204.543106 
	C130.129791,207.554779 130.610443,212.119446 132.002060,217.007645 
	C125.990616,212.898590 119.979164,208.789551 113.636559,204.486694 
	C113.305397,204.292892 113.269005,204.310181 113.494164,203.921661 
	C114.100426,199.754379 115.307915,195.826736 114.660538,192.233246 
	C113.784676,187.371445 114.813217,183.587128 117.399826,179.606934 
	C119.130051,176.944550 121.298164,173.644455 116.918480,170.591446 
	C114.747269,172.880829 112.528206,175.220673 109.720009,178.181702 
	C113.759705,179.000854 113.312218,180.696548 111.049225,182.806778 
	C110.208542,181.876511 109.544945,181.142197 109.797363,181.421509 
	C106.833733,184.468872 104.103867,187.275879 101.374008,190.082886 
M154.700699,112.799500 
	C154.700699,112.799500 154.391296,112.638008 154.391296,112.638008 
	C154.391296,112.638008 154.275986,112.958794 153.311829,112.840439 
	C148.153412,112.937889 142.994980,113.035347 137.317566,112.579369 
	C133.951462,112.673294 130.585373,112.767220 127.047302,112.163910 
	C122.639191,105.967308 112.615089,106.823013 109.619392,113.495956 
	C109.194130,114.443214 108.058388,115.823448 107.342628,115.770538 
	C101.063438,115.306351 97.743416,118.418442 96.228340,124.181023 
	C96.056099,124.836166 95.102798,125.394508 94.393822,125.782288 
	C89.911240,128.234055 88.396675,131.957565 90.128242,136.669739 
	C91.743614,141.065704 95.466133,142.123337 99.820053,142.082703 
	C107.816406,142.008041 115.814552,142.125244 123.917854,142.996887 
	C123.487549,149.331818 123.057251,155.666748 122.434921,162.619095 
	C123.999382,162.607742 125.867043,163.156113 127.081352,162.498337 
	C139.101288,155.987350 151.055801,149.350876 162.898849,142.524414 
	C164.312546,141.709549 164.952301,139.551971 166.356430,137.556488 
	C163.365707,129.893433 160.414871,122.214149 157.312546,114.596550 
	C157.049377,113.950356 155.774078,113.716354 154.813614,113.120613 
	C154.813614,113.120613 154.592056,113.057175 154.700699,112.799500 
M198.269638,182.091202 
	C195.495117,187.751526 197.138733,191.057251 202.965851,191.102859 
	C214.754074,191.195160 226.549637,191.311981 238.327087,190.940567 
	C240.481857,190.872620 243.706146,188.949722 244.362457,187.133530 
	C245.026840,185.294983 243.653137,182.117294 242.225327,180.250275 
	C239.213486,176.311966 237.111755,170.927780 230.736252,170.988770 
	C230.362595,170.992371 230.021942,169.937927 229.593658,169.437759 
	C225.304291,164.428375 219.768509,164.613632 215.726181,169.782669 
	C214.648605,171.160599 213.397964,172.523849 211.949341,173.468307 
	C207.647293,176.273132 203.206985,178.865921 198.269638,182.091202 
M185.501282,83.116814 
	C190.332947,83.110619 195.170319,83.246201 199.994415,83.051903 
	C203.638138,82.905128 205.796066,79.955994 204.410278,76.995712 
	C201.199371,70.136635 194.513397,67.148293 188.489456,63.558723 
	C187.571533,63.011749 185.423233,63.697369 184.298752,64.472542 
	C179.287399,67.927132 174.336151,71.491638 169.609512,75.320488 
	C168.434006,76.272713 167.274902,78.724586 167.723633,79.833450 
	C168.303299,81.265862 170.426285,82.784935 172.024414,82.955177 
	C176.143478,83.393959 180.339432,83.110939 185.501282,83.116814 
z"/>
<path fill="#FDFDFC" opacity="1.000000" stroke="none" 
	d="
M132.150421,217.304840 
	C130.610443,212.119446 130.129791,207.554779 135.577469,204.543106 
	C136.401566,204.087524 136.731445,202.672012 137.204865,201.660690 
	C138.503738,198.886093 151.718781,190.397476 154.576706,191.116623 
	C156.983505,191.722229 159.105423,193.460052 161.675797,195.207642 
	C162.050400,196.381836 162.102646,197.045074 162.123016,198.069809 
	C162.391129,199.558060 162.691116,200.684784 162.681091,201.964951 
	C159.365143,205.213272 156.491104,208.453232 153.305435,211.350510 
	C151.287186,213.186050 148.804672,214.511093 146.193115,216.104446 
	C142.391739,216.548706 141.601822,219.156097 141.059525,221.967438 
	C140.865509,222.236145 140.671494,222.504852 140.273376,222.526001 
	C138.711014,222.161209 137.352737,222.043976 135.994461,221.926727 
	C134.762573,220.485153 133.530670,219.043594 132.150421,217.304840 
z"/>
<path fill="#2899A3" opacity="1.000000" stroke="none" 
	d="
M154.912140,225.378906 
	C148.721680,230.504440 141.715652,234.920822 136.512527,240.904846 
	C126.052490,252.934692 120.185661,267.462799 115.788986,282.790619 
	C111.961220,296.135101 103.729591,307.028534 92.850830,316.909271 
	C91.553818,315.634064 90.431564,314.530701 89.121590,313.242767 
	C92.869484,309.102783 96.073921,305.594238 99.244049,302.054932 
	C106.127037,294.370422 110.747192,285.411957 113.837685,275.646240 
	C120.148064,255.705887 131.532806,239.385681 148.885925,226.522232 
	C151.586777,224.336670 153.736282,222.511215 155.964035,221.044434 
	C155.665573,222.728394 155.288849,224.053650 154.912140,225.378906 
z"/>
<path fill="#EE8D50" opacity="1.000000" stroke="none" 
	d="
M135.259186,226.376694 
	C127.281288,234.390350 121.735107,243.779724 117.837334,254.453827 
	C113.607872,266.036285 105.457909,274.664825 94.750755,281.121216 
	C94.051796,280.164001 93.502007,279.542419 93.108040,278.834167 
	C92.724281,278.144318 92.500008,277.365814 92.096535,276.351868 
	C104.163986,269.248535 111.988831,258.983032 117.174507,246.160919 
	C119.487251,240.442429 123.951675,235.594147 128.044922,230.131958 
	C129.087280,229.249619 129.524246,228.586243 129.961227,227.922852 
	C130.830566,227.057129 131.699890,226.191422 133.178986,225.226028 
	C134.278885,225.543137 134.769043,225.959915 135.259186,226.376694 
z"/>
<path fill="#EE8D50" opacity="1.000000" stroke="none" 
	d="
M145.830292,258.972809 
	C142.744003,262.656525 139.706024,266.382050 136.561768,270.015594 
	C129.189713,278.534851 124.692848,288.361969 123.305313,299.471558 
	C122.511017,299.664062 122.038284,299.880981 121.570534,299.870697 
	C120.592934,299.849243 119.617966,299.707916 117.736435,299.530396 
	C118.352531,296.465759 118.705383,293.590057 119.520981,290.852264 
	C122.637405,280.391144 128.434525,271.604431 136.479355,264.250000 
	C138.317383,262.569672 139.960510,260.676178 142.413940,258.852234 
	C144.033127,258.873383 144.931702,258.923096 145.830292,258.972809 
z"/>
<path fill="#B3BFA4" opacity="1.000000" stroke="none" 
	d="
M101.308372,190.414337 
	C104.103867,187.275879 106.833733,184.468872 109.797363,181.421509 
	C109.544945,181.142197 110.208542,181.876511 111.049225,182.806778 
	C113.312218,180.696548 113.759705,179.000854 109.720009,178.181702 
	C112.528206,175.220673 114.747269,172.880829 116.918480,170.591446 
	C121.298164,173.644455 119.130051,176.944550 117.399826,179.606934 
	C114.813217,183.587128 113.784676,187.371445 114.660538,192.233246 
	C115.307915,195.826736 114.100426,199.754379 113.479172,203.927612 
	C113.239029,204.322052 113.231430,204.343307 113.231430,204.343307 
	C112.199997,202.867218 111.168571,201.391113 110.352737,199.347122 
	C111.135735,195.337784 111.703117,191.896332 112.270500,188.454895 
	C111.512962,188.227737 110.755417,188.000565 109.997871,187.773407 
	C109.324478,189.125015 108.162613,190.450577 108.088799,191.834167 
	C107.969231,194.075180 108.563927,196.354294 108.857040,198.617310 
	C108.184227,198.710098 107.511414,198.802902 106.382301,198.741638 
	C105.758179,198.341217 105.546173,198.141830 105.289986,197.989426 
	C105.160286,195.630142 105.149773,193.164444 101.025284,193.905029 
	C100.449425,193.952667 100.155022,193.895325 100.155022,193.895325 
	C100.517593,192.845474 100.880165,191.795624 101.308372,190.414337 
z"/>
<path fill="#F9C779" opacity="1.000000" stroke="none" 
	d="
M105.183350,198.373291 
	C105.546173,198.141830 105.758179,198.341217 106.044220,198.772995 
	C105.442513,211.372269 99.351685,221.403564 91.665092,230.547516 
	C86.521675,236.666122 82.989738,243.429916 80.839691,251.066162 
	C80.403610,252.614975 79.039436,253.902481 77.320549,254.830109 
	C77.861687,246.103790 80.702225,238.247070 86.573227,232.268234 
	C95.944305,222.725037 102.241913,211.769226 105.183350,198.373291 
z"/>
<path fill="#EC9256" opacity="1.000000" stroke="none" 
	d="
M112.894882,204.584656 
	C113.231430,204.343307 113.239029,204.322052 113.254013,204.316116 
	C113.269005,204.310181 113.305397,204.292892 113.293915,204.280945 
	C112.653603,205.866837 112.111725,207.505844 111.378815,209.054443 
	C109.547569,212.923737 108.083275,217.072525 105.644234,220.524490 
	C101.591644,226.260132 99.012604,232.317337 98.528236,239.341965 
	C98.450089,240.475266 97.201561,241.527863 96.494064,242.617767 
	C96.003906,241.413651 94.842186,240.006516 95.134644,239.038956 
	C96.794388,233.547928 98.362518,227.953400 100.810799,222.797211 
	C103.419823,217.302490 106.934509,212.232208 110.151382,207.037048 
	C110.703621,206.145203 111.743637,205.555374 112.894882,204.584656 
z"/>
<path fill="#EC9256" opacity="1.000000" stroke="none" 
	d="
M146.096741,258.761688 
	C144.931702,258.923096 144.033127,258.873383 142.692276,258.700439 
	C148.863770,249.227234 154.422195,239.403946 156.412140,227.426086 
	C157.297653,227.425781 157.818924,227.815979 158.340210,228.206177 
	C157.269501,239.474152 152.949188,249.459503 146.096741,258.761688 
z"/>
<path fill="#EC9256" opacity="1.000000" stroke="none" 
	d="
M92.484032,207.417892 
	C91.400276,210.888565 89.877342,214.290680 89.322754,217.843933 
	C88.109444,225.617645 83.280258,230.825073 77.010132,236.965820 
	C76.803391,234.626450 76.179596,232.832474 76.678940,232.429199 
	C84.239250,226.323456 87.034737,217.697144 89.553078,208.880081 
	C89.770653,208.118332 90.345673,207.458664 91.314636,206.817657 
	C92.077751,207.061768 92.280891,207.239838 92.484032,207.417892 
z"/>
<path fill="#9FD8D0" opacity="1.000000" stroke="none" 
	d="
M155.885803,220.685760 
	C153.736282,222.511215 151.586777,224.336670 149.165421,226.299957 
	C146.530563,224.958817 144.167557,223.479843 141.432037,221.984146 
	C141.601822,219.156097 142.391739,216.548706 146.416992,216.365173 
	C147.357544,216.835739 147.737015,217.084915 148.425720,217.557343 
	C151.410889,217.848373 154.086838,217.916153 156.696777,218.262573 
	C156.382462,219.256073 156.134125,219.970917 155.885803,220.685760 
z"/>
<path fill="#B3BFA4" opacity="1.000000" stroke="none" 
	d="
M155.964050,221.044449 
	C156.134125,219.970917 156.382462,219.256073 156.778763,217.996948 
	C157.202240,216.996780 157.477768,216.540878 158.053802,216.100311 
	C158.750626,216.094696 159.146927,216.073746 159.841309,216.118088 
	C160.476868,216.405655 160.814331,216.627914 161.151825,216.850174 
	C160.746277,219.916397 160.340729,222.982605 159.943695,226.475800 
	C159.571869,227.261337 159.191513,227.619919 158.575684,228.092346 
	C157.818924,227.815979 157.297653,227.425781 156.437714,227.029724 
	C155.777710,226.696396 155.456375,226.368927 155.023590,225.710175 
	C155.288849,224.053650 155.665573,222.728394 155.964050,221.044449 
z"/>
<path fill="#9FD8D0" opacity="1.000000" stroke="none" 
	d="
M109.076759,198.808380 
	C108.563927,196.354294 107.969231,194.075180 108.088799,191.834167 
	C108.162613,190.450577 109.324478,189.125015 109.997871,187.773407 
	C110.755417,188.000565 111.512962,188.227737 112.270500,188.454895 
	C111.703117,191.896332 111.135735,195.337784 110.206009,198.988968 
	C109.661263,199.132294 109.478867,199.065857 109.076759,198.808380 
z"/>
<path fill="#EAA06C" opacity="1.000000" stroke="none" 
	d="
M99.802826,193.957611 
	C100.155022,193.895325 100.449425,193.952667 100.594955,193.931519 
	C99.223923,196.227203 97.707367,198.544037 95.508858,200.957550 
	C94.561356,201.038956 94.295815,201.023697 94.030273,201.008453 
	C95.837059,198.678925 97.643837,196.349396 99.802826,193.957611 
z"/>
<path fill="#EAA06C" opacity="1.000000" stroke="none" 
	d="
M135.560181,226.250641 
	C134.769043,225.959915 134.278885,225.543137 133.454102,225.091568 
	C133.952209,224.177536 134.784927,223.298294 135.806061,222.172882 
	C137.352737,222.043976 138.711014,222.161209 140.051270,222.643677 
	C138.642563,224.047470 137.251877,225.086029 135.560181,226.250641 
z"/>
<path fill="#EC9256" opacity="1.000000" stroke="none" 
	d="
M93.808807,201.270508 
	C94.295815,201.023697 94.561356,201.038956 95.226433,201.082306 
	C94.716309,203.029648 93.806656,204.948883 92.690521,207.143005 
	C92.280891,207.239838 92.077751,207.061768 91.587509,206.590836 
	C92.062714,204.709503 92.825020,203.121048 93.808807,201.270508 
z"/>
<path fill="#EAA06C" opacity="1.000000" stroke="none" 
	d="
M129.669617,227.996613 
	C129.524246,228.586243 129.087280,229.249619 128.329132,229.958984 
	C128.464630,229.360092 128.921310,228.715240 129.669617,227.996613 
z"/>
<path fill="#B3BFA4" opacity="1.000000" stroke="none" 
	d="
M163.130188,227.357361 
	C163.267792,227.231964 163.449509,227.307587 163.676239,227.577545 
	C163.534317,227.717072 163.352005,227.645920 163.130188,227.357361 
z"/>
<path fill="#F3823B" opacity="1.000000" stroke="none" 
	d="
M178.207184,144.998199 
	C178.152435,144.539612 178.097702,144.081024 178.355453,142.978607 
	C178.422028,137.578766 178.176117,132.822754 177.902008,127.631393 
	C177.855316,125.176025 177.836807,123.156021 177.904419,120.666351 
	C178.012848,114.470901 178.035141,108.745117 178.430023,103.012085 
	C179.550323,102.987610 180.298050,102.970375 181.395538,102.995956 
	C190.325577,107.563530 198.905884,112.088295 207.776138,116.765953 
	C199.239014,134.459518 190.752884,152.047379 181.915466,170.363327 
	C181.381912,169.073425 180.995087,168.544037 180.960587,167.992599 
	C180.577682,161.870865 180.344986,155.737823 179.840683,149.626907 
	C179.710526,148.049805 178.773544,146.539291 178.207184,144.998199 
z"/>
<path fill="#1195A2" opacity="1.000000" stroke="none" 
	d="
M227.010864,144.795700 
	C227.010864,144.795700 226.643036,145.023773 226.047379,145.035660 
	C223.977081,146.368484 222.502457,147.689423 221.027832,149.010345 
	C215.031494,153.356583 209.035172,157.702805 202.344696,162.081863 
	C200.814621,162.816559 199.978653,163.518402 199.142700,164.220245 
	C199.142700,164.220245 199.158020,164.077377 198.830261,164.113129 
	C198.024658,164.816666 197.546829,165.484451 197.069000,166.152252 
	C196.682831,166.469254 196.296631,166.786255 195.256378,167.089966 
	C194.070572,167.053497 193.538849,167.030304 193.003555,167.003571 
	C193.000000,167.000000 192.992874,166.992874 192.985764,166.617279 
	C191.941986,164.139755 190.905319,162.037827 189.899658,159.619080 
	C190.280716,158.535934 190.630783,157.769592 191.376953,157.005386 
	C193.023178,156.874207 194.273270,156.740891 196.185196,156.536972 
	C195.194656,154.648941 194.471222,153.270004 193.802948,151.576813 
	C194.244308,150.511169 194.630478,149.759766 195.253235,148.878891 
	C195.626389,148.426132 195.762939,148.102859 195.919861,147.476410 
	C196.292389,146.451096 196.644562,145.728943 197.358643,144.947174 
	C198.047714,144.075958 198.374893,143.264389 198.663940,142.202515 
	C198.722977,141.631927 198.820160,141.311630 199.287231,140.939697 
	C200.006073,140.075745 200.355042,139.263412 200.677826,138.202271 
	C200.757050,137.639587 200.862457,137.325729 201.225220,136.856476 
	C201.650757,136.144455 201.818970,135.587830 201.983429,135.010712 
	C201.979660,134.990219 202.018875,134.976074 202.268753,134.822952 
	C202.673508,134.121674 202.828400,133.573517 202.982758,133.007721 
	C202.982224,132.990082 203.015869,132.979385 203.376587,132.928619 
	C204.056519,132.068039 204.375732,131.258209 204.654205,130.198242 
	C204.710144,129.627457 204.806778,129.306808 205.276093,128.936676 
	C205.994522,128.071503 206.340256,127.255806 206.650574,126.148819 
	C206.924072,125.162277 207.232986,124.467026 207.927475,123.855606 
	C209.623123,124.567879 210.933182,125.196327 213.168594,126.268669 
	C214.240509,123.821510 215.232346,121.557144 216.447952,119.343224 
	C216.671722,119.393661 217.026993,119.683907 217.133102,120.033646 
	C219.337082,121.691170 220.592285,125.322876 224.348602,122.884949 
	C225.127808,123.200035 225.617233,123.486435 226.120377,124.159523 
	C226.946564,124.923286 227.759018,125.300362 228.818878,125.639404 
	C229.382111,125.700150 229.697952,125.798935 230.049896,126.249306 
	C232.086380,127.335823 234.086746,128.070770 236.407562,128.840790 
	C237.130859,129.021530 237.533707,129.167175 237.958618,129.652328 
	C239.322144,131.302536 240.663635,132.613220 242.005127,133.923920 
	C239.061249,135.948425 236.117371,137.972931 232.465332,140.070496 
	C229.124756,140.622665 226.817749,141.433807 227.010864,144.795700 
z"/>
<path fill="#FDFEFE" opacity="1.000000" stroke="none" 
	d="
M123.811951,142.162476 
	C115.814552,142.125244 107.816406,142.008041 99.820053,142.082703 
	C95.466133,142.123337 91.743614,141.065704 90.128242,136.669739 
	C88.396675,131.957565 89.911240,128.234055 94.393822,125.782288 
	C95.102798,125.394508 96.056099,124.836166 96.228340,124.181023 
	C97.743416,118.418442 101.063438,115.306351 107.342628,115.770538 
	C108.058388,115.823448 109.194130,114.443214 109.619392,113.495956 
	C112.615089,106.823013 122.639191,105.967308 126.951981,112.841545 
	C126.690109,114.691452 126.523567,115.863731 126.265137,117.478088 
	C125.386154,126.000946 124.599060,134.081711 123.811951,142.162476 
z"/>
<path fill="#FDFEFE" opacity="1.000000" stroke="none" 
	d="
M198.545181,181.816391 
	C203.206985,178.865921 207.647293,176.273132 211.949341,173.468307 
	C213.397964,172.523849 214.648605,171.160599 215.726181,169.782669 
	C219.768509,164.613632 225.304291,164.428375 229.593658,169.437759 
	C230.021942,169.937927 230.362595,170.992371 230.736252,170.988770 
	C237.111755,170.927780 239.213486,176.311966 242.225327,180.250275 
	C243.653137,182.117294 245.026840,185.294983 244.362457,187.133530 
	C243.706146,188.949722 240.481857,190.872620 238.327087,190.940567 
	C226.549637,191.311981 214.754074,191.195160 202.965851,191.102859 
	C197.138733,191.057251 195.495117,187.751526 198.545181,181.816391 
z"/>
<path fill="#B29064" opacity="1.000000" stroke="none" 
	d="
M204.903412,128.986160 
	C204.806778,129.306808 204.710144,129.627457 204.366364,130.352570 
	C203.751434,131.497818 203.383652,132.238602 203.015869,132.979385 
	C203.015869,132.979385 202.982224,132.990082 202.727966,133.154022 
	C202.322098,133.870667 202.170486,134.423370 202.018875,134.976074 
	C202.018875,134.976074 201.979660,134.990219 201.728516,135.165375 
	C201.307526,135.897629 201.137695,136.454758 200.967865,137.011871 
	C200.862457,137.325729 200.757050,137.639587 200.385803,138.359100 
	C199.719086,139.506958 199.318222,140.249146 198.917358,140.991318 
	C198.820160,141.311630 198.722977,141.631927 198.377991,142.362991 
	C197.752365,143.518082 197.374557,144.262436 196.996735,145.006790 
	C196.644562,145.728943 196.292389,146.451096 195.693451,147.617249 
	C195.303345,148.376938 195.160004,148.692657 195.016647,149.008362 
	C194.630478,149.759766 194.244308,150.511169 193.533478,151.760712 
	C192.466171,153.840302 191.723511,155.421768 190.980835,157.003235 
	C190.630783,157.769592 190.280716,158.535934 189.605453,159.793030 
	C187.879440,163.198410 186.478653,166.113083 185.043625,169.028259 
	C185.009399,169.028778 185.031616,169.094284 184.751266,169.288925 
	C183.658676,171.672943 182.846420,173.862305 182.034164,176.051682 
	C182.034164,176.051682 181.994995,176.012299 181.749298,176.101501 
	C181.012894,176.487885 180.522202,176.785065 179.750122,176.770996 
	C178.964325,171.632919 178.459900,166.806122 177.955475,161.979309 
	C177.966217,156.622330 177.976959,151.265366 178.097443,145.453293 
	C178.773544,146.539291 179.710526,148.049805 179.840683,149.626907 
	C180.344986,155.737823 180.577682,161.870865 180.960587,167.992599 
	C180.995087,168.544037 181.381912,169.073425 181.915466,170.363327 
	C190.752884,152.047379 199.239014,134.459518 207.776138,116.765953 
	C198.905884,112.088295 190.325577,107.563530 181.199402,102.750793 
	C179.788177,102.648323 178.922806,102.833824 178.057449,103.019318 
	C178.035141,108.745117 178.012848,114.470901 177.656097,120.326782 
	C177.155884,113.285309 176.990112,106.113754 176.824356,98.942192 
	C177.491028,98.907829 178.157684,98.873466 179.382584,99.197327 
	C189.114883,104.140671 198.267853,108.769302 207.493744,113.247643 
	C208.481949,113.727318 210.760529,113.743553 210.981781,113.279427 
	C214.337662,106.239281 217.449783,99.082932 220.618958,91.953781 
	C221.917648,92.574661 223.831940,92.842728 224.420929,93.870392 
	C231.161621,105.631432 237.709610,117.503120 244.262131,129.371185 
	C244.538986,129.872620 244.358429,130.626602 243.882645,131.385193 
	C241.561737,130.775894 239.749161,130.044342 237.936569,129.312805 
	C237.533707,129.167175 237.130859,129.021530 236.228882,128.552582 
	C233.824432,127.452087 231.919113,126.674904 230.013794,125.897720 
	C229.697952,125.798935 229.382111,125.700150 228.674957,125.343323 
	C227.557983,124.647797 226.832321,124.210312 226.106644,123.772835 
	C225.617233,123.486435 225.127808,123.200035 224.137344,122.613373 
	C221.433197,121.436714 219.230087,120.560310 217.026993,119.683907 
	C217.026993,119.683907 216.671722,119.393661 216.341568,119.093231 
	C215.341400,118.515083 214.671371,118.237373 213.850281,117.887535 
	C213.699203,117.815414 213.365616,117.844208 213.195236,117.622849 
	C212.682007,117.285004 212.339157,117.168510 211.667618,117.017197 
	C210.858704,117.631523 210.378494,118.280670 209.624695,119.135902 
	C208.748047,120.818581 208.144974,122.295174 207.541901,123.771774 
	C207.232986,124.467026 206.924072,125.162277 206.360580,126.307114 
	C205.705139,127.499855 205.304291,128.243011 204.903412,128.986160 
M240.080841,127.351913 
	C240.187347,127.397446 240.293869,127.442978 240.400375,127.488518 
	C240.280518,127.314499 240.160675,127.140472 240.032440,126.226913 
	C234.484558,116.104424 228.936691,105.981926 222.772430,94.734802 
	C220.404358,99.289360 218.707260,102.462143 217.092712,105.676407 
	C212.805161,114.212090 212.820755,114.216614 221.073471,118.749565 
	C221.505280,118.986755 221.839798,119.422043 222.285034,119.610725 
	C228.170731,122.105011 234.068146,124.571609 240.080841,127.351913 
z"/>
<path fill="#F9BD68" opacity="1.000000" stroke="none" 
	d="
M123.864906,142.579681 
	C124.599060,134.081711 125.386154,126.000946 126.554260,117.403793 
	C127.610252,115.969452 128.285248,115.051506 129.134003,114.419144 
	C130.966934,116.001266 132.588623,117.349564 134.292847,118.583900 
	C138.208038,121.419571 142.163437,124.199730 146.022583,127.346970 
	C143.630264,131.283630 141.220230,134.817291 139.026993,138.480743 
	C135.161591,144.937286 131.428497,151.473053 127.337723,158.047089 
	C125.565933,159.412918 124.096443,160.707306 122.626945,162.001678 
	C123.057251,155.666748 123.487549,149.331818 123.864906,142.579681 
z"/>
<path fill="#FDFEFE" opacity="1.000000" stroke="none" 
	d="
M185.002975,83.116547 
	C180.339432,83.110939 176.143478,83.393959 172.024414,82.955177 
	C170.426285,82.784935 168.303299,81.265862 167.723633,79.833450 
	C167.274902,78.724586 168.434006,76.272713 169.609512,75.320488 
	C174.336151,71.491638 179.287399,67.927132 184.298752,64.472542 
	C185.423233,63.697369 187.571533,63.011749 188.489456,63.558723 
	C194.513397,67.148293 201.199371,70.136635 204.410278,76.995712 
	C205.796066,79.955994 203.638138,82.905128 199.994415,83.051903 
	C195.170319,83.246201 190.332947,83.110619 185.002975,83.116547 
z"/>
<path fill="#1C949D" opacity="1.000000" stroke="none" 
	d="
M220.138214,91.982208 
	C217.449783,99.082932 214.337662,106.239281 210.981781,113.279427 
	C210.760529,113.743553 208.481949,113.727318 207.493744,113.247643 
	C198.267853,108.769302 189.114883,104.140671 179.713470,99.244713 
	C188.110382,97.343437 196.725388,95.700523 205.362503,94.183372 
	C210.108276,93.349747 214.891266,92.727943 220.138214,91.982208 
z"/>
<path fill="#9FD8D0" opacity="1.000000" stroke="none" 
	d="
M177.667969,162.281891 
	C178.459900,166.806122 178.964325,171.632919 179.893646,177.012848 
	C180.858597,177.679688 181.398651,177.793442 181.938705,177.907196 
	C180.378876,182.170807 178.131332,186.330795 177.468460,190.729584 
	C176.898834,194.509674 175.425705,196.609299 172.157410,197.983688 
	C171.657532,198.193909 171.433167,199.059326 170.606445,199.896179 
	C167.344345,199.765472 164.368393,199.971832 162.154877,197.708298 
	C162.102646,197.045074 162.050400,196.381836 161.973373,195.388123 
	C162.800446,194.625839 163.895554,194.398254 164.460358,193.725479 
	C166.473114,191.327911 167.968353,188.395126 170.276642,186.367508 
	C175.029770,182.192337 178.029984,177.617798 177.087967,170.932571 
	C176.705383,168.217529 177.255005,165.371109 177.667969,162.281891 
z"/>
<path fill="#F0843F" opacity="1.000000" stroke="none" 
	d="
M146.102509,127.002434 
	C142.163437,124.199730 138.208038,121.419571 134.292847,118.583900 
	C132.588623,117.349564 130.966934,116.001266 129.572418,114.362106 
	C132.503586,113.723923 135.170074,113.428360 137.836563,113.132797 
	C142.994980,113.035347 148.153412,112.937889 153.862640,112.951004 
	C154.413452,113.061569 154.592056,113.057175 154.592056,113.057175 
	C154.592056,113.057175 154.813614,113.120613 154.864288,113.470505 
	C154.915909,114.178177 154.916855,114.535957 154.627441,115.069862 
	C151.884583,119.164520 149.432083,123.083038 146.760315,127.002068 
	C146.541046,127.002571 146.102509,127.002434 146.102509,127.002434 
z"/>
<path fill="#FDFDFC" opacity="1.000000" stroke="none" 
	d="
M173.000809,202.661911 
	C174.978455,204.010681 177.319794,205.047165 178.825760,206.800949 
	C180.181534,208.379837 181.823822,211.323425 181.193954,212.633301 
	C180.150528,214.803268 177.601105,217.086853 175.293716,217.618164 
	C171.683044,218.449585 167.745117,217.859756 163.492462,217.454712 
	C165.690292,212.864334 168.341461,208.691208 171.286804,204.339905 
	C172.054245,203.661789 172.527527,203.161850 173.000809,202.661911 
z"/>
<path fill="#D29A66" opacity="1.000000" stroke="none" 
	d="
M122.530930,162.310394 
	C124.096443,160.707306 125.565933,159.412918 127.753044,158.077789 
	C129.278946,157.880875 130.192108,157.916275 130.879715,157.539764 
	C140.576721,152.229736 150.271210,146.913254 159.884155,141.453720 
	C161.209381,140.701065 162.093567,139.171844 163.483734,137.999939 
	C164.189102,137.979385 164.592667,137.961044 165.234604,137.964722 
	C165.472961,137.986725 165.950790,138.016769 165.950790,138.016769 
	C164.952301,139.551971 164.312546,141.709549 162.898849,142.524414 
	C151.055801,149.350876 139.101288,155.987350 127.081352,162.498337 
	C125.867043,163.156113 123.999382,162.607742 122.530930,162.310394 
z"/>
<path fill="#F4F5F3" opacity="1.000000" stroke="none" 
	d="
M170.992645,204.518082 
	C168.341461,208.691208 165.690292,212.864334 163.036530,217.376617 
	C162.567215,217.500259 162.100494,217.284760 161.392792,216.959717 
	C160.814331,216.627914 160.476868,216.405655 159.947083,215.703430 
	C160.833557,210.752823 161.912323,206.282166 162.991089,201.811523 
	C162.691116,200.684784 162.391129,199.558060 162.123016,198.069809 
	C164.368393,199.971832 167.344345,199.765472 170.442139,200.237885 
	C170.752747,200.305099 170.903778,200.689468 170.962433,201.306061 
	C171.011627,202.787796 171.002136,203.652939 170.992645,204.518082 
z"/>
<path fill="#F9C779" opacity="1.000000" stroke="none" 
	d="
M166.153610,137.786621 
	C165.950790,138.016769 165.472961,137.986725 165.072266,137.732147 
	C164.142593,137.303741 163.613586,137.129929 163.055542,136.963654 
	C163.026505,136.971176 163.046631,136.914642 163.034729,136.528717 
	C162.138092,134.516922 161.346985,132.829346 160.331909,131.289413 
	C159.765656,130.430389 158.357758,129.938004 158.134338,129.072525 
	C156.923447,124.382065 155.963913,119.626717 154.917786,114.893730 
	C154.916855,114.535957 154.915909,114.178177 154.941986,113.555634 
	C155.774078,113.716354 157.049377,113.950356 157.312546,114.596550 
	C160.414871,122.214149 163.365707,129.893433 166.153610,137.786621 
z"/>
<path fill="#9FD8D0" opacity="1.000000" stroke="none" 
	d="
M176.444946,99.057983 
	C176.990112,106.113754 177.155884,113.285309 177.569977,120.796440 
	C177.836807,123.156021 177.855316,125.176025 177.854767,128.084152 
	C177.759232,132.668732 177.682770,136.365204 177.606308,140.061661 
	C176.750351,136.223526 175.313629,132.409241 175.154877,128.542480 
	C174.782013,119.460968 174.997025,110.354210 175.056580,101.258217 
	C175.061157,100.561226 175.714020,99.868484 176.444946,99.057983 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M182.397552,176.130859 
	C182.846420,173.862305 183.658676,171.672943 184.759674,169.635254 
	C185.820618,170.229523 186.595856,171.039627 187.364243,171.033188 
	C188.694855,171.022018 190.021210,170.504868 191.349350,170.199936 
	C188.486542,172.203293 185.623734,174.206665 182.397552,176.130859 
z"/>
<path fill="#F9C779" opacity="1.000000" stroke="none" 
	d="
M137.577057,112.856087 
	C135.170074,113.428360 132.503586,113.723923 129.398666,114.076523 
	C128.285248,115.051506 127.610252,115.969452 126.646141,116.961700 
	C126.523567,115.863731 126.690109,114.691452 127.037964,113.190170 
	C130.585373,112.767220 133.951462,112.673294 137.577057,112.856087 
z"/>
<path fill="#1195A2" opacity="1.000000" stroke="none" 
	d="
M191.611481,170.150879 
	C190.021210,170.504868 188.694855,171.022018 187.364243,171.033188 
	C186.595856,171.039627 185.820618,170.229523 185.040039,169.440613 
	C185.031616,169.094284 185.009399,169.028778 185.418854,169.017807 
	C188.216492,168.335526 190.604675,167.664200 192.992874,166.992874 
	C192.992874,166.992874 193.000000,167.000000 193.004944,167.347229 
	C193.022141,168.152863 193.034409,168.611237 193.046677,169.069626 
	C192.655670,169.413696 192.264648,169.757751 191.611481,170.150879 
z"/>
<path fill="#B29064" opacity="1.000000" stroke="none" 
	d="
M177.686249,140.419830 
	C177.682770,136.365204 177.759232,132.668732 177.882935,128.519501 
	C178.176117,132.822754 178.422028,137.578766 178.398163,142.633270 
	C178.007645,142.213837 177.886902,141.495911 177.686249,140.419830 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M237.958618,129.652328 
	C239.749161,130.044342 241.561737,130.775894 243.687622,131.605438 
	C243.554642,132.409256 243.108353,133.115067 242.333588,133.872406 
	C240.663635,132.613220 239.322144,131.302536 237.958618,129.652328 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M227.322372,144.708405 
	C226.817749,141.433807 229.124756,140.622665 232.161743,140.189819 
	C230.922165,141.697769 229.278030,143.159439 227.322372,144.708405 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M221.352798,148.954376 
	C222.502457,147.689423 223.977081,146.368484 225.835129,145.077850 
	C224.704956,146.371597 223.191360,147.635010 221.352798,148.954376 
z"/>
<path fill="#9FD8D0" opacity="1.000000" stroke="none" 
	d="
M171.286804,204.339905 
	C171.002136,203.652939 171.011627,202.787796 171.050751,201.492706 
	C171.680511,201.414780 172.280609,201.766800 172.940765,202.390366 
	C172.527527,203.161850 172.054245,203.661789 171.286804,204.339905 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M199.481964,164.213196 
	C199.978653,163.518402 200.814621,162.816559 202.014191,162.151245 
	C201.525635,162.860580 200.673431,163.533371 199.481964,164.213196 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M193.356018,169.005508 
	C193.034409,168.611237 193.022141,168.152863 193.008499,167.350800 
	C193.538849,167.030304 194.070572,167.053497 195.001236,167.130493 
	C194.821884,167.770020 194.243622,168.355698 193.356018,169.005508 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M197.371704,166.076508 
	C197.546829,165.484451 198.024658,164.816666 198.855225,164.180496 
	C198.696777,164.808334 198.185593,165.404541 197.371704,166.076508 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M182.001312,177.590286 
	C181.398651,177.793442 180.858597,177.679688 180.175018,177.324097 
	C180.522202,176.785065 181.012894,176.487885 181.776978,176.103546 
	C182.054901,176.435379 182.059418,176.854370 182.001312,177.590286 
z"/>
<path fill="#F9C779" opacity="1.000000" stroke="none" 
	d="
M154.646378,112.928337 
	C154.592056,113.057175 154.413452,113.061569 154.344727,113.010178 
	C154.275986,112.958794 154.391296,112.638008 154.391296,112.638008 
	C154.391296,112.638008 154.700699,112.799500 154.646378,112.928337 
z"/>
<path fill="#EAA06C" opacity="1.000000" stroke="none" 
	d="
M162.681091,201.964951 
	C161.912323,206.282166 160.833557,210.752823 159.649002,215.638123 
	C159.146927,216.073746 158.750626,216.094696 158.107544,215.688202 
	C157.802002,214.180984 157.743271,213.101242 157.642456,211.248337 
	C154.103668,213.509140 151.110077,215.421631 148.116470,217.334106 
	C147.737015,217.084915 147.357544,216.835739 146.754227,216.325806 
	C148.804672,214.511093 151.287186,213.186050 153.305435,211.350510 
	C156.491104,208.453232 159.365143,205.213272 162.681091,201.964951 
z"/>
<path fill="#F4F5F3" opacity="1.000000" stroke="none" 
	d="
M148.425720,217.557343 
	C151.110077,215.421631 154.103668,213.509140 157.642456,211.248337 
	C157.743271,213.101242 157.802002,214.180984 157.807007,215.672852 
	C157.477768,216.540878 157.202240,216.996780 156.844757,217.718323 
	C154.086838,217.916153 151.410889,217.848373 148.425720,217.557343 
z"/>
<path fill="#EE8D50" opacity="1.000000" stroke="none" 
	d="
M178.430023,103.012085 
	C178.922806,102.833824 179.788177,102.648323 180.849670,102.707985 
	C180.298050,102.970375 179.550323,102.987610 178.430023,103.012085 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M192.985764,166.617279 
	C190.604675,167.664200 188.216492,168.335526 185.453064,169.017288 
	C186.478653,166.113083 187.879440,163.198410 189.574463,160.109818 
	C190.905319,162.037827 191.941986,164.139755 192.985764,166.617279 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M214.001358,117.959656 
	C214.671371,118.237373 215.341400,118.515083 216.117798,119.042786 
	C215.232346,121.557144 214.240509,123.821510 213.168594,126.268669 
	C210.933182,125.196327 209.623123,124.567879 207.927460,123.855606 
	C208.144974,122.295174 208.748047,120.818581 209.912338,119.355042 
	C211.271103,120.162407 212.068665,120.956726 212.866211,121.751045 
	C213.244598,120.487251 213.622986,119.223450 214.001358,117.959656 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M191.376953,157.005386 
	C191.723511,155.421768 192.466171,153.840302 193.478302,152.074936 
	C194.471222,153.270004 195.194656,154.648941 196.185196,156.536972 
	C194.273270,156.740891 193.023178,156.874207 191.376953,157.005386 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M217.133102,120.033646 
	C219.230087,120.560310 221.433197,121.436714 223.847549,122.584686 
	C220.592285,125.322876 219.337082,121.691170 217.133102,120.033646 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M230.049896,126.249306 
	C231.919113,126.674904 233.824432,127.452087 235.908447,128.517487 
	C234.086746,128.070770 232.086380,127.335823 230.049896,126.249306 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M203.376587,132.928619 
	C203.383652,132.238602 203.751434,131.497818 204.407074,130.602707 
	C204.375732,131.258209 204.056519,132.068039 203.376587,132.928619 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M197.358643,144.947174 
	C197.374557,144.262436 197.752365,143.518082 198.416122,142.613281 
	C198.374893,143.264389 198.047714,144.075958 197.358643,144.947174 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M205.276108,128.936676 
	C205.304291,128.243011 205.705139,127.499855 206.395996,126.598404 
	C206.340256,127.255806 205.994522,128.071503 205.276108,128.936676 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M199.287231,140.939697 
	C199.318222,140.249146 199.719086,139.506958 200.411987,138.607925 
	C200.355042,139.263412 200.006073,140.075745 199.287231,140.939697 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M226.120377,124.159523 
	C226.832321,124.210312 227.557983,124.647797 228.427567,125.381363 
	C227.759018,125.300362 226.946564,124.923286 226.120377,124.159523 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M202.268753,134.822952 
	C202.170486,134.423370 202.322098,133.870667 202.728485,133.171661 
	C202.828400,133.573517 202.673508,134.121674 202.268753,134.822952 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M201.225220,136.856476 
	C201.137695,136.454758 201.307526,135.897629 201.732269,135.185867 
	C201.818970,135.587830 201.650757,136.144455 201.225220,136.856476 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M195.253235,148.878891 
	C195.160004,148.692657 195.303345,148.376938 195.673096,147.920410 
	C195.762939,148.102859 195.626389,148.426132 195.253235,148.878891 
z"/>
<path fill="#F0843F" opacity="1.000000" stroke="none" 
	d="
M239.962646,127.045128 
	C234.068146,124.571609 228.170731,122.105011 222.285034,119.610725 
	C221.839798,119.422043 221.505280,118.986755 221.073471,118.749565 
	C212.820755,114.216614 212.805161,114.212090 217.092712,105.676407 
	C218.707260,102.462143 220.404358,99.289360 222.772430,94.734802 
	C228.936691,105.981926 234.484558,116.104424 240.015869,126.615128 
	C239.999283,127.003349 239.962646,127.045128 239.962646,127.045128 
z"/>
<path fill="#1195A2" opacity="1.000000" stroke="none" 
	d="
M213.850281,117.887535 
	C213.622986,119.223450 213.244598,120.487251 212.866211,121.751045 
	C212.068665,120.956726 211.271103,120.162407 210.185913,119.148956 
	C210.378494,118.280670 210.858704,117.631523 211.822678,117.252411 
	C212.659485,117.629692 213.012558,117.736954 213.365616,117.844208 
	C213.365616,117.844208 213.699203,117.815414 213.850281,117.887535 
z"/>
<path fill="#F0843F" opacity="1.000000" stroke="none" 
	d="
M240.020050,126.984894 
	C240.160675,127.140472 240.280518,127.314499 240.400375,127.488510 
	C240.293869,127.442978 240.187347,127.397446 240.021744,127.198517 
	C239.962646,127.045128 239.999283,127.003349 240.020050,126.984894 
z"/>
<path fill="#259096" opacity="1.000000" stroke="none" 
	d="
M213.195236,117.622849 
	C213.012558,117.736954 212.659485,117.629692 212.151367,117.287231 
	C212.339157,117.168510 212.682007,117.285004 213.195236,117.622849 
z"/>
<path fill="#F3823B" opacity="1.000000" stroke="none" 
	d="
M163.181946,138.002151 
	C162.093567,139.171844 161.209381,140.701065 159.884155,141.453720 
	C150.271210,146.913254 140.576721,152.229736 130.879715,157.539764 
	C130.192108,157.916275 129.278946,157.880875 128.055328,158.006332 
	C131.428497,151.473053 135.161591,144.937286 139.026993,138.480743 
	C141.220230,134.817291 143.630264,131.283630 146.022583,127.346970 
	C146.102509,127.002434 146.541046,127.002571 147.081573,127.127373 
	C152.763611,130.473007 157.905121,133.693817 163.046631,136.914642 
	C163.046631,136.914642 163.026505,136.971176 163.050293,137.228134 
	C163.110031,137.657440 163.145981,137.829803 163.181946,138.002151 
z"/>
<path fill="#F9BD68" opacity="1.000000" stroke="none" 
	d="
M163.034729,136.528717 
	C157.905121,133.693817 152.763611,130.473007 147.300842,127.126869 
	C149.432083,123.083038 151.884583,119.164520 154.627441,115.069862 
	C155.963913,119.626717 156.923447,124.382065 158.134338,129.072525 
	C158.357758,129.938004 159.765656,130.430389 160.331909,131.289413 
	C161.346985,132.829346 162.138092,134.516922 163.034729,136.528717 
z"/>
<path fill="#F9BD68" opacity="1.000000" stroke="none" 
	d="
M163.483734,137.999939 
	C163.145981,137.829803 163.110031,137.657440 163.079346,137.220612 
	C163.613586,137.129929 164.142593,137.303741 164.833923,137.710144 
	C164.592667,137.961044 164.189102,137.979385 163.483734,137.999939 
z"/>
</svg>`],u3=[{component:h,name:"Luật-AI",to:"/qa",icon:p.jsx(O,{icon:r2,customClassName:"nav-icon"}),badge:{color:"info",text:"NEW"}},{component:h,name:"Dashboard",to:"/dashboard",icon:p.jsx(O,{icon:r2,customClassName:"nav-icon"}),badge:{color:"info",text:"NEW"}},{component:r1,name:"Theme"},{component:h,name:"Colors",to:"/theme/colors",icon:p.jsx(O,{icon:_0,customClassName:"nav-icon"})},{component:h,name:"Typography",to:"/theme/typography",icon:p.jsx(O,{icon:L0,customClassName:"nav-icon"})},{component:r1,name:"Components"},{component:H,name:"Base",to:"/base",icon:p.jsx(O,{icon:D0,customClassName:"nav-icon"}),items:[{component:h,name:"Accordion",to:"/base/accordion"},{component:h,name:"Breadcrumb",to:"/base/breadcrumbs"},{component:h,name:"Cards",to:"/base/cards"},{component:h,name:"Carousel",to:"/base/carousels"},{component:h,name:"Collapse",to:"/base/collapses"},{component:h,name:"List group",to:"/base/list-groups"},{component:h,name:"Navs & Tabs",to:"/base/navs"},{component:h,name:"Pagination",to:"/base/paginations"},{component:h,name:"Placeholders",to:"/base/placeholders"},{component:h,name:"Popovers",to:"/base/popovers"},{component:h,name:"Progress",to:"/base/progress"},{component:h,name:"Spinners",to:"/base/spinners"},{component:h,name:"Tables",to:"/base/tables"},{component:h,name:"Tabs",to:"/base/tabs"},{component:h,name:"Tooltips",to:"/base/tooltips"}]},{component:H,name:"Buttons",to:"/buttons",icon:p.jsx(O,{icon:S0,customClassName:"nav-icon"}),items:[{component:h,name:"Buttons",to:"/buttons/buttons"},{component:h,name:"Buttons groups",to:"/buttons/button-groups"},{component:h,name:"Dropdowns",to:"/buttons/dropdowns"}]},{component:H,name:"Forms",icon:p.jsx(O,{icon:T0,customClassName:"nav-icon"}),items:[{component:h,name:"Form Control",to:"/forms/form-control"},{component:h,name:"Select",to:"/forms/select"},{component:h,name:"Checks & Radios",to:"/forms/checks-radios"},{component:h,name:"Range",to:"/forms/range"},{component:h,name:"Input Group",to:"/forms/input-group"},{component:h,name:"Floating Labels",to:"/forms/floating-labels"},{component:h,name:"Layout",to:"/forms/layout"},{component:h,name:"Validation",to:"/forms/validation"}]},{component:h,name:"Charts",to:"/charts",icon:p.jsx(O,{icon:M0,customClassName:"nav-icon"})},{component:H,name:"Icons",icon:p.jsx(O,{icon:o2,customClassName:"nav-icon"}),items:[{component:h,name:"CoreUI Free",to:"/icons/coreui-icons",badge:{color:"success",text:"NEW"}},{component:h,name:"CoreUI Flags",to:"/icons/flags"},{component:h,name:"CoreUI Brands",to:"/icons/brands"}]},{component:H,name:"Notifications",icon:p.jsx(O,{icon:k0,customClassName:"nav-icon"}),items:[{component:h,name:"Alerts",to:"/notifications/alerts"},{component:h,name:"Badges",to:"/notifications/badges"},{component:h,name:"Modal",to:"/notifications/modals"},{component:h,name:"Toasts",to:"/notifications/toasts"}]},{component:h,name:"Widgets",to:"/widgets",icon:p.jsx(O,{icon:z0,customClassName:"nav-icon"}),badge:{color:"info",text:"NEW"}},{component:r1,name:"Extras"},{component:H,name:"Pages",icon:p.jsx(O,{icon:o2,customClassName:"nav-icon"}),items:[{component:h,name:"Login",to:"/login"},{component:h,name:"Register",to:"/register"},{component:h,name:"Error 404",to:"/404"},{component:h,name:"Error 500",to:"/500"}]},{component:h,name:"Docs",href:"https://coreui.io/react/docs/templates/installation/",icon:p.jsx(O,{icon:O0,customClassName:"nav-icon"})}],m3=()=>{const t=L2(),r=X1(e=>e.sidebarUnfoldable),o=X1(e=>e.sidebarShow);return p.jsxs(L1,{className:"border-end",colorScheme:"dark",position:"fixed",unfoldable:r,visible:o,onVisibleChange:e=>{t({type:"set",sidebarShow:e})},children:[p.jsxs(j1,{className:"border-bottom",children:[p.jsxs(D1,{to:"/",children:[p.jsx(O,{customClassName:"sidebar-brand-full",icon:p3,height:32}),p.jsx(O,{customClassName:"sidebar-brand-narrow",icon:d3,height:32})]}),p.jsx(k1,{className:"d-lg-none",dark:!0,onClick:()=>t({type:"set",sidebarShow:!1})})]}),p.jsx(E2,{items:u3}),p.jsx(R1,{className:"border-top d-none d-lg-flex",children:p.jsx(F1,{onClick:()=>t({type:"set",sidebarUnfoldable:!r})})})]})},h3=c.memo(m3),x2=t=>{const{content:r,href:o,name:e}=t,i=e.slice(-1)==="s",n=`https://coreui.io/react/docs/${o}`;return p.jsxs(S1,{color:"info",className:"bg-white",children:[r||`A React ${e} component ${i?"have":"has"} been created as a native React.js version
      of Bootstrap ${e}. ${e} ${i?"are":"is"} delivered with some new features,
      variants, and unique design that matches CoreUI Design System requirements.`,p.jsx("br",{}),p.jsx("br",{}),"For more information please visit our official"," ",p.jsx(u1,{href:n,target:"_blank",children:"documentation of CoreUI Components Library for React.js"}),"."]})};x2.propTypes={content:l.string,href:l.string,name:l.string};const b3=c.memo(x2),N2=t=>{const{href:r,name:o,text:e,...i}=t,n=o?`https://coreui.io/react/docs/components/${o}`:r;return p.jsx("div",{className:"float-end",children:p.jsx(u1,{...i,href:n,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:p.jsx("small",{className:"text-body-secondary",children:e||"docs"})})})};N2.propTypes={href:l.string,name:l.string,text:l.string};const g3=c.memo(N2),k2=t=>{const{children:r,href:o,tabContentClassName:e}=t,i=`https://coreui.io/react/docs/${o}`;return p.jsxs("div",{className:"example",children:[p.jsxs(_1,{variant:"underline-border",children:[p.jsx(h,{children:p.jsxs(K,{href:"#",active:!0,children:[p.jsx(O,{icon:A0,className:"me-2"}),"Preview"]})}),p.jsx(h,{children:p.jsxs(K,{href:i,target:"_blank",children:[p.jsx(O,{icon:w0,className:"me-2"}),"Code"]})})]}),p.jsx(P1,{className:`rounded-bottom ${e||""}`,children:p.jsx(V1,{className:"p-3 preview",visible:!0,children:r})})]})};k2.propTypes={children:l.node,href:l.string,tabContentClassName:l.string};const E3=c.memo(k2),f3=()=>p.jsxs("div",{children:[p.jsx(h3,{}),p.jsxs("div",{className:"wrapper d-flex flex-column min-vh-100",children:[p.jsx("div",{className:"body flex-grow-1 mt-4",children:p.jsx(E0,{})}),p.jsx(N0,{})]})]}),x3=Object.freeze(Object.defineProperty({__proto__:null,default:f3},Symbol.toStringTag,{value:"Module"}));export{z1 as A,x3 as B,w1 as C,g3 as D,V as T,P2 as _,E3 as a,C1 as b,_1 as c,h as d,K as e,V2 as f,j2 as g,M1 as h,l1 as i,P1 as j,k0 as k,k1 as l,b3 as m,z0 as n,M0 as o,w0 as p,S0 as q,O0 as r,_0 as s,A0 as t,m1 as u,T0 as v,L0 as w,D0 as x,r2 as y,o2 as z};
