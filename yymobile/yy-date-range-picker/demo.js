webpackJsonp([31,319],{809:function(n,s){n.exports={content:{"zh-CN":[["p","Tag \u5206\u4e3a\u4e24\u79cd\u7c7b\u578b\uff1a",["code","selectable"]," / ",["code","readonly"],", \u540e\u8005\u662f\u65e0\u4ea4\u4e92\u7684\uff0c\u5c3a\u5bf8\u66f4\u5c0f\uff0c\u901a\u5e38\u7528\u4e8e\u5185\u5bb9\u5c55\u793a\u3002"]],"en-US":[["p","There are two kinds of Tag, selectable and readonly type, the latter is a smaller tag without interactive behavior, which is typically used for display content."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"yymobile/yy-date-range-picker/demo/basic.md",id:"yymobile-yy-date-range-picker-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token string">\'rmc-picker/assets/index.css\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'rmc-date-picker/assets/index.css\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'rmc-picker/assets/popup.css\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> YyDateRangePicker<span class="token punctuation">,</span> DatePickere <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'yymobile\'</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>YyDateRangePicker<span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> minDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2015</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> maxDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2018</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> cn <span class="token operator">=</span> <span class="token keyword">typeof</span> location <span class="token operator">!==</span> <span class="token string">\'undefined\'</span> <span class="token operator">?</span> location<span class="token punctuation">.</span>search<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">\'cn\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>cn<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> now<span class="token punctuation">.</span><span class="token function">getTimezoneOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">60000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> mday <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> month <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  month <span class="token operator">=</span> month <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token template-string"><span class="token string">`0</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>month<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span> <span class="token punctuation">:</span> month<span class="token punctuation">;</span>\n  mday <span class="token operator">=</span> mday <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token template-string"><span class="token string">`0</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mday<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span> <span class="token punctuation">:</span> mday<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>date<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>month<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mday<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> zhCn <span class="token operator">=</span> <span class="token punctuation">{</span>\n  year<span class="token punctuation">:</span> <span class="token string">\'\u5e74\'</span><span class="token punctuation">,</span>\n  month<span class="token punctuation">:</span> <span class="token string">\'\u6708\'</span><span class="token punctuation">,</span>\n  day<span class="token punctuation">:</span> <span class="token string">\'\u65e5\'</span><span class="token punctuation">,</span>\n  hour<span class="token punctuation">:</span> <span class="token string">\'\u65f6\'</span><span class="token punctuation">,</span>\n  minute<span class="token punctuation">:</span> <span class="token string">\'\u5206\'</span><span class="token punctuation">,</span>\n  am<span class="token punctuation">:</span> <span class="token string">\'\u4e0a\u5348\'</span><span class="token punctuation">,</span>\n  pm<span class="token punctuation">:</span> <span class="token string">\'\u4e0b\u5348\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token operator">&lt;</span>any<span class="token punctuation">,</span> any<span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n    mode<span class="token punctuation">:</span> <span class="token string">\'date\'</span><span class="token punctuation">,</span>\n    locale<span class="token punctuation">:</span> zhCn<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      date<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>startTime<span class="token punctuation">,</span> endTime<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onChange\'</span><span class="token punctuation">,</span> startTime<span class="token punctuation">,</span> endTime<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">/*this.setState({\n      date,\n    });*/</span>\n  <span class="token punctuation">}</span>\n\n  onDismiss <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onDismiss\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  show <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'my click\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  onOk <span class="token operator">=</span> <span class="token punctuation">(</span>startTime<span class="token punctuation">,</span> endTime<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onOK\'</span><span class="token punctuation">,</span> startTime<span class="token punctuation">,</span> endTime<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> date <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'10px 30px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>popup date picker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>YyDateRangePicker</span>\n          <span class="token attr-name">transitionName</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yyc-picker-popup-slide-fade<span class="token punctuation">"</span></span>\n          <span class="token attr-name">maskTransitionName</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yyc-picker-popup-fade<span class="token punctuation">"</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Date</span> <span class="token attr-name">picker"</span>\n          <span class="token attr-name">date</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>date<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onDismiss</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDismiss<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onOk</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onOk<span class="token punctuation">}</span></span>\n          <span class="token attr-name">rootNativeProps</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">\'data-xx\'</span><span class="token punctuation">:</span> <span class="token string">\'yy\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">minDate</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>minDate<span class="token punctuation">}</span></span>\n          <span class="token attr-name">maxDate</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>maxDate<span class="token punctuation">}</span></span>\n          <span class="token attr-name">defaultDate</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>now<span class="token punctuation">}</span></span>\n          <span class="token attr-name">mode</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>mode<span class="token punctuation">}</span></span>\n          <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>locale<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onDateChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>show<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>date <span class="token operator">&amp;&amp;</span> <span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">\'open\'</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>YyDateRangePicker</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],style:".tag-container{\n  display: flex;\n  padding-top: 9px;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.tag-container > div {\n  margin-left: 9px;\n  margin-bottom: 9px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.tag-container</span></span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token number">9</span>px<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>\n  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.tag-container</span> > div </span><span class="token punctuation">{</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">9</span>px<span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">9</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},925:function(n,s,a){n.exports={basic:a(809)}}});