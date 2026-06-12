System.register(["jimu-core","jimu-arcgis","esri/widgets/ElevationProfile","esri/layers/ElevationLayer","esri/Graphic","esri/geometry/Polyline","esri/core/reactiveUtils"],(function(e,t){var i={},n={},l={},s={},o={},a={},r={};return{setters:[function(e){i.DataSourceComponent=e.DataSourceComponent,i.React=e.React,i.css=e.css,i.jsx=e.jsx},function(e){n.JimuMapViewComponent=e.JimuMapViewComponent},function(e){l.default=e.default},function(e){s.default=e.default},function(e){o.default=e.default},function(e){a.default=e.default},function(e){r.watch=e.watch}],execute:function(){e((()=>{var e={89:e=>{"use strict";e.exports=o},243:e=>{"use strict";e.exports=r},196:e=>{"use strict";e.exports=a},282:e=>{"use strict";e.exports=s},785:e=>{"use strict";e.exports=l},686:e=>{"use strict";e.exports=n},244:e=>{"use strict";e.exports=i}},t={};function u(i){var n=t[i];if(void 0!==n)return n.exports;var l=t[i]={exports:{}};return e[i](l,l.exports,u),l.exports}u.d=(e,t)=>{for(var i in t)u.o(t,i)&&!u.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="";var c={};return u.p=window.jimuConfig.baseUrl,(()=>{"use strict";u.r(c),u.d(c,{__set_webpack_public_path__:()=>$,default:()=>p});var e=u(244),t=u(686),i=u(785),n=u(282),l=u(89),s=u(196),o=u(243);const a="https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",{useState:r,useEffect:v,useRef:d}=e.React;function p(s){var u,c,p;const x=null===(u=s.useMapWidgetIds)||void 0===u?void 0:u[0],h=null===(c=s.useDataSources)||void 0===c?void 0:c[0],j=(null===(p=s.config)||void 0===p?void 0:p.elevationSourceUrl)||a,[b,S]=r(null),[y,$]=r(null),[E,U]=r(null),M=d(null),P=d(null);return v((()=>{if(!(null==b?void 0:b.view)||!M.current)return;const e=document.createElement("div");M.current.innerHTML="",M.current.appendChild(e),P.current=new i.default({view:b.view,container:e,profiles:[{type:"query",title:"Elevation",color:"#1f78b4",source:new n.default({url:j})}],visibleElements:{selectButton:!1,sketchButton:!1,legend:!1}}),y&&(P.current.input=new l.default({geometry:y}));const t=o.watch((()=>{var e,t,i,n;return null===(n=null===(i=null===(t=null===(e=P.current)||void 0===e?void 0:e.profiles)||void 0===t?void 0:t.getItemAt)||void 0===i?void 0:i.call(t,0))||void 0===n?void 0:n.result}),(e=>{var t,i,n,l,s,o,a,r;(null==e?void 0:e.statistics)?U({minElevation:e.statistics.minElevation,maxElevation:e.statistics.maxElevation,avgElevation:e.statistics.avgElevation,elevationGain:e.statistics.elevationGain,elevationLoss:e.statistics.elevationLoss,maxDistance:e.statistics.maxDistance,maxPositiveSlope:null!==(t=e.statistics.maxPositiveSlope)&&void 0!==t?t:null,maxNegativeSlope:null!==(i=e.statistics.maxNegativeSlope)&&void 0!==i?i:null,avgPositiveSlope:null!==(n=e.statistics.avgPositiveSlope)&&void 0!==n?n:null,avgNegativeSlope:null!==(l=e.statistics.avgNegativeSlope)&&void 0!==l?l:null,elevationUnit:null!==(o=null===(s=e.effectiveUnits)||void 0===s?void 0:s.elevation)&&void 0!==o?o:"meters",distanceUnit:null!==(r=null===(a=e.effectiveUnits)||void 0===a?void 0:a.distance)&&void 0!==r?r:"kilometers"}):U(null)}));return()=>{var e;null==t||t.remove(),null===(e=P.current)||void 0===e||e.destroy(),P.current=null,U(null),M.current&&(M.current.innerHTML="")}}),[null==b?void 0:b.view,j]),v((()=>{P.current&&(y?P.current.input=new l.default({geometry:y}):(P.current.input=null,U(null)))}),[y]),(0,e.jsx)("div",{className:"widget-elevation-profile jimu-widget",css:g},(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:x,onActiveViewChange:S}),h&&(0,e.jsx)(e.DataSourceComponent,{useDataSource:h,widgetId:s.id,query:{where:"1=1",outFields:["*"],returnGeometry:!0}},(t=>(0,e.jsx)(f,{ds:t,onGeometry:$}))),(0,e.jsx)("div",{ref:M,css:w}),E&&(0,e.jsx)(m,{stats:E}))}function f({ds:e,onGeometry:t}){var i;const n=null===(i=null==e?void 0:e.getRecords())||void 0===i?void 0:i[0];return v((()=>{const e=null==n?void 0:n.getGeometry();e&&e.paths?t(new s.default({paths:e.paths,spatialReference:e.spatialReference})):t(null)}),[n,t]),null}function m({stats:t}){const i="feet"===t.elevationUnit?"ft":"m",n="miles"===t.distanceUnit?"mi":"feet"===t.distanceUnit?"ft":"kilometers"===t.distanceUnit?"km":"meters"===t.distanceUnit?"m":t.distanceUnit,l=e=>{var t;return null!==(t=null==e?void 0:e.toFixed(1))&&void 0!==t?t:"-"},s=e=>null!=e?`${l(e)}\xb0`:"-";return(0,e.jsx)("div",{css:h},(0,e.jsx)("div",{css:j},(0,e.jsx)(x,{label:"Length",value:`${l(t.maxDistance)} ${n}`}),(0,e.jsx)(x,{label:"Gain",value:`${l(t.elevationGain)} ${i}`}),(0,e.jsx)(x,{label:"Loss",value:`${l(t.elevationLoss)} ${i}`}),(0,e.jsx)(x,{label:"Min",value:`${l(t.minElevation)} ${i}`}),(0,e.jsx)(x,{label:"Max",value:`${l(t.maxElevation)} ${i}`}),(0,e.jsx)(x,{label:"Avg",value:`${l(t.avgElevation)} ${i}`}),(0,e.jsx)(x,{label:"Max Slope",value:`\u2191${s(t.maxPositiveSlope)} \u2193${s(t.maxNegativeSlope)}`}),(0,e.jsx)(x,{label:"Avg Slope",value:`\u2191${s(t.avgPositiveSlope)} \u2193${s(t.avgNegativeSlope)}`})))}function x({label:t,value:i}){return(0,e.jsx)("div",{css:b},(0,e.jsx)("div",{css:S},t),(0,e.jsx)("div",{css:y},i))}const g=e.css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,w=e.css`
  width: 100%;
  flex: 1;
  min-height: 0;
  > div {
    height: 100%;
  }
  .esri-elevation-profile.esri-component.esri-widget--panel {
    width: 100% !important;
    height: 100% !important;
    box-sizing: border-box !important;
  }
`,h=e.css`
  flex-shrink: 0;
  background: #f3f3f3;
  border-top: 1px solid #ddd;
  padding: 8px 12px;
`,j=e.css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  gap: 4px 12px;
  width: 100%;
`,b=e.css`
  display: block;
  text-align: start;
  white-space: nowrap;
`,S=e.css`
  font-size: 10px;
  font-weight: 400;
  color: #6e6e6e;
`,y=e.css`
  font-size: 10px;
  font-weight: 600;
  color: #323232;
`;function $(e){u.p=e}})(),c})())}}}));