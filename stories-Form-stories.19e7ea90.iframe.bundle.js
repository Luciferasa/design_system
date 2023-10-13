/*! For license information please see stories-Form-stories.19e7ea90.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[458],{"./src/stories/Form.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Form_stories}});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),style=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/@storybook/addon-styling/node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/Catcher/style.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(style.Z,options),style.Z&&style.Z.locals&&style.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Catcher=({catcherXCoordinate:catcherXCoordinate,handleCatcherXCoordinate:handleCatcherXCoordinate})=>((0,react.useEffect)((()=>{const handleKeyDown=event=>{"ArrowLeft"===event.key?catcherXCoordinate<window.innerWidth-115&&handleCatcherXCoordinate(catcherXCoordinate+15):"ArrowRight"===event.key&&catcherXCoordinate>0&&handleCatcherXCoordinate(catcherXCoordinate-15)};return window.addEventListener("keydown",handleKeyDown),()=>{window.removeEventListener("keydown",handleKeyDown)}}),[catcherXCoordinate]),(0,jsx_runtime.jsx)("div",{className:"catcher",style:{right:catcherXCoordinate+"px"}}));Catcher.displayName="Catcher",Catcher.__docgenInfo={description:"",methods:[],displayName:"Catcher"};var components_Catcher=Catcher;const FallingLetterItem=({id:id,data:data,deleteSymbol:deleteSymbol,onDown:onDown})=>{const[positionY,setPositionY]=(0,react.useState)(0),hasFired=(0,react.useRef)(!1);return(0,react.useEffect)((()=>{let start=0,lastTimestamp=performance.now();const updatePosition=timestamp=>{const deltaTime=timestamp-lastTimestamp;if(lastTimestamp=timestamp,start+=.1*deltaTime,setPositionY(start),start>=window.innerHeight-30&&!hasFired.current)return hasFired.current=!0,onDown(data),deleteSymbol(id),cancelAnimationFrame(updatePosition);requestAnimationFrame(updatePosition)};requestAnimationFrame(updatePosition)}),[]),(0,jsx_runtime.jsx)("div",{style:{position:"absolute",right:data.positionX,top:positionY},children:data.character})};FallingLetterItem.displayName="FallingLetterItem",FallingLetterItem.__docgenInfo={description:"",methods:[],displayName:"FallingLetterItem"};var components_FallingLetterItem=FallingLetterItem;var Falling_letters=({onDown:onDown})=>{const[symbols,setSymbols]=(0,react.useState)({}),characters="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.@";(0,react.useEffect)((()=>{const interval=setInterval((()=>{addNewSymbol()}),2e3);return()=>{clearInterval(interval)}}),[]);const deleteSymbol=id=>{setSymbols((prevSymbols=>{const updatedSymbols={...prevSymbols};return delete updatedSymbols[id],updatedSymbols}))},addNewSymbol=()=>{const newSymbol={character:characters[Math.floor(63*Math.random())],positionX:Math.random()*window.innerWidth,positionY:0},newField={[Math.random().toString(36).substr(2,9)]:newSymbol};setSymbols((prevSymbols=>({...prevSymbols,...newField})))};return Object.entries(symbols||{}).map((([key,value])=>(0,jsx_runtime.jsx)(components_FallingLetterItem,{id:key,data:value,deleteSymbol:deleteSymbol,onDown:onDown},key)))},Form_style=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/@storybook/addon-styling/node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/Form/style.scss"),style_options={};style_options.styleTagTransform=styleTagTransform_default(),style_options.setAttributes=setAttributesWithoutAttributes_default(),style_options.insert=insertBySelector_default().bind(null,"head"),style_options.domAPI=styleDomAPI_default(),style_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Form_style.Z,style_options),Form_style.Z&&Form_style.Z.locals&&Form_style.Z.locals;const Form=()=>{const[username,setUsername]=(0,react.useState)(""),[catcherXCoordinate,setCatcherXCoordinate]=(0,react.useState)(555),catcherXCoordinateRef=(0,react.useRef)(555);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Falling_letters,{onDown:symbol=>{symbol.positionX>catcherXCoordinateRef.current&&symbol.positionX<catcherXCoordinateRef.current+100&&setUsername((name=>name+(symbol.character||"")))}}),(0,jsx_runtime.jsxs)("form",{className:"login-form",children:[(0,jsx_runtime.jsxs)("div",{className:"form-group",children:[(0,jsx_runtime.jsx)("label",{children:"Username:"}),(0,jsx_runtime.jsx)("input",{type:"text",id:"username",value:username,disabled:!0,className:"input-field"})]}),(0,jsx_runtime.jsx)("button",{type:"submit",className:"submit-button",children:"Login"})]}),(0,jsx_runtime.jsx)(components_Catcher,{catcherXCoordinate:catcherXCoordinate,handleCatcherXCoordinate:coord=>{setCatcherXCoordinate(coord),catcherXCoordinateRef.current=coord}})]})};Form.__docgenInfo={description:"",methods:[],displayName:"Form"};var components_Form=Form,Form_stories={title:"Form",component:components_Form};const Template=()=>(0,jsx_runtime.jsx)(components_Form,{});Template.displayName="Template";const Default=Template.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <Form />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/@storybook/addon-styling/node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/Catcher/style.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".catcher{position:absolute;bottom:0;width:100px;height:10px;background:#007bff;border-radius:15px}","",{version:3,sources:["webpack://./src/components/Catcher/style.scss"],names:[],mappings:"AAAA,SACE,iBAAA,CACA,QAAA,CACA,WAAA,CACA,WAAA,CACA,kBAAA,CACA,kBAAA",sourcesContent:[".catcher {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100px;\r\n  height: 10px;\r\n  background: #007bff;\r\n  border-radius: 15px;\r\n}\r\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/@storybook/addon-styling/node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/Form/style.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".login-form{max-width:300px;transform:translateY(20%);margin:0 auto;padding:20px;border:1px solid #ccc;border-radius:4px;box-shadow:0 0 5px rgba(0,0,0,.1)}.login-form .form-group{margin-bottom:15px}.login-form .input-field{width:-webkit-fill-available;padding:8px;font-size:14px;border:1px solid #ccc;border-radius:4px}.login-form .label{display:block;font-weight:bold}.login-form .submit-button{background-color:#007bff;color:#fff;padding:10px 20px;border:none;border-radius:4px;cursor:pointer}.login-form .submit-button:hover{background-color:#0056b3}","",{version:3,sources:["webpack://./src/components/Form/style.scss"],names:[],mappings:"AAAA,YACI,eAAA,CACA,yBAAA,CACA,aAAA,CACA,YAAA,CACA,qBAAA,CACA,iBAAA,CACA,iCAAA,CAEA,wBACI,kBAAA,CAGJ,yBACI,4BAAA,CACA,WAAA,CACA,cAAA,CACA,qBAAA,CACA,iBAAA,CAGJ,mBACI,aAAA,CACA,gBAAA,CAGJ,2BACI,wBAAA,CACA,UAAA,CACA,iBAAA,CACA,WAAA,CACA,iBAAA,CACA,cAAA,CAGJ,iCACI,wBAAA",sourcesContent:[".login-form {\r\n    max-width: 300px;\r\n    transform: translateY(20%);\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\r\n\r\n    .form-group {\r\n        margin-bottom: 15px;\r\n    }\r\n\r\n    .input-field {\r\n        width: -webkit-fill-available;\r\n        padding: 8px;\r\n        font-size: 14px;\r\n        border: 1px solid #ccc;\r\n        border-radius: 4px;\r\n    }\r\n\r\n    .label {\r\n        display: block;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .submit-button {\r\n        background-color: #007bff;\r\n        color: white;\r\n        padding: 10px 20px;\r\n        border: none;\r\n        border-radius: 4px;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .submit-button:hover {\r\n        background-color: #0056b3;\r\n    }\r\n}\r\n\r\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":function(module){module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":function(module){module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":function(module){var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier:identifier,updater:updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":function(module){var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":function(module){module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":function(module){module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":function(module){module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);