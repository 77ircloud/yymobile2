webpackJsonp([29,301],{795:function(n,s){n.exports={content:[["p",["code","<WingBlank size='md'>...</WingBlank>"]]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"yymobile/yy-pull-load/demo/basic.md",id:"yymobile-yy-pull-load-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> PureComponent<span class="token punctuation">,</span> PropTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> YyPullLoad <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'yymobile\'</span>\n\n<span class="token keyword">const</span> STATS <span class="token operator">=</span> YyPullLoad<span class="token punctuation">.</span>STATS\n\n\n<span class="token keyword">const</span> defaultStyle <span class="token operator">=</span><span class="token punctuation">{</span>\n  width<span class="token punctuation">:</span> <span class="token string">"100%"</span><span class="token punctuation">,</span>\n  textAlign<span class="token punctuation">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>\n  fontSize<span class="token punctuation">:</span> <span class="token string">"20px"</span><span class="token punctuation">,</span>\n  lineHeight<span class="token punctuation">:</span> <span class="token string">"1.5"</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> loadMoreLimitNum <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> cData <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string">"http://img1.gtimg.com/15/1580/158031/15803178_1200x1000_0.jpg"</span><span class="token punctuation">,</span>\n    <span class="token string">"http://img1.gtimg.com/15/1580/158031/15803179_1200x1000_0.jpg"</span><span class="token punctuation">,</span>\n    <span class="token string">"http://img1.gtimg.com/15/1580/158031/15803181_1200x1000_0.jpg"</span><span class="token punctuation">,</span>\n    <span class="token string">"http://img1.gtimg.com/15/1580/158031/15803182_1200x1000_0.jpg"</span><span class="token punctuation">,</span>\n    <span class="token string">"http://img1.gtimg.com/15/1580/158031/15803183_1200x1000_0.jpg"</span><span class="token punctuation">,</span>\n    <span class="token comment" spellcheck="true">// "http://img1.gtimg.com/15/1580/158031/15803184_1200x1000_0.jpg",</span>\n    <span class="token comment" spellcheck="true">// "http://img1.gtimg.com/15/1580/158031/15803186_1200x1000_0.jpg"</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span><span class="token punctuation">{</span>\n      hasMore<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      data<span class="token punctuation">:</span> cData<span class="token punctuation">,</span>\n      action<span class="token punctuation">:</span> STATS<span class="token punctuation">.</span>init<span class="token punctuation">,</span>\n      index<span class="token punctuation">:</span> loadMoreLimitNum <span class="token comment" spellcheck="true">//loading more test time limit</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  handleAction <span class="token operator">=</span> <span class="token punctuation">(</span>action<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>action<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>action<span class="token punctuation">,</span>action <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">//new action must do not equel to old action</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>action <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>action <span class="token operator">||</span>\n       action <span class="token operator">===</span> STATS<span class="token punctuation">.</span>refreshing <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>action <span class="token operator">===</span> STATS<span class="token punctuation">.</span>loading <span class="token operator">||</span>\n       action <span class="token operator">===</span> STATS<span class="token punctuation">.</span>loading <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>action <span class="token operator">===</span> STATS<span class="token punctuation">.</span>refreshing<span class="token punctuation">)</span><span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"It\'s same action or on loading or on refreshing "</span><span class="token punctuation">,</span>action<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>action<span class="token punctuation">,</span>action <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">if</span><span class="token punctuation">(</span>action <span class="token operator">===</span> STATS<span class="token punctuation">.</span>refreshing<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment" spellcheck="true">//\u5237\u65b0</span>\n      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">//refreshing complete</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          data<span class="token punctuation">:</span> cData<span class="token punctuation">,</span>\n          hasMore<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          action<span class="token punctuation">:</span> STATS<span class="token punctuation">.</span>refreshed<span class="token punctuation">,</span>\n          index<span class="token punctuation">:</span> loadMoreLimitNum\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>action <span class="token operator">===</span> STATS<span class="token punctuation">.</span>loading<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment" spellcheck="true">//\u52a0\u8f7d\u66f4\u591a</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        hasMore<span class="token punctuation">:</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            action<span class="token punctuation">:</span> STATS<span class="token punctuation">.</span>reset<span class="token punctuation">,</span>\n            hasMore<span class="token punctuation">:</span> <span class="token boolean">false</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span><span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            data<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>data<span class="token punctuation">,</span> cData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> cData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            action<span class="token punctuation">:</span> STATS<span class="token punctuation">.</span>reset<span class="token punctuation">,</span>\n            index<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>index <span class="token operator">-</span> <span class="token number">1</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">//DO NOT modify below code</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      action<span class="token punctuation">:</span> action\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  getScrollTop <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>reactpullload<span class="token punctuation">)</span><span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>reactpullload<span class="token punctuation">.</span><span class="token function">getScrollTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  setScrollTop <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>reactpullload<span class="token punctuation">)</span><span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>reactpullload<span class="token punctuation">.</span><span class="token function">setScrollTop</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>\n      data<span class="token punctuation">,</span>\n      hasMore\n    <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state\n\n    <span class="token keyword">const</span> fixHeaderStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n      position<span class="token punctuation">:</span> <span class="token string">"fixed"</span><span class="token punctuation">,</span>\n      width<span class="token punctuation">:</span> <span class="token string">"100%"</span><span class="token punctuation">,</span>\n      height<span class="token punctuation">:</span> <span class="token string">"50px"</span><span class="token punctuation">,</span>\n      color<span class="token punctuation">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>\n      lineHeight<span class="token punctuation">:</span> <span class="token string">"50px"</span><span class="token punctuation">,</span>\n      backgroundColor<span class="token punctuation">:</span> <span class="token string">"#e24f37"</span><span class="token punctuation">,</span>\n      left<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      top<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      textAlign<span class="token punctuation">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>\n      zIndex<span class="token punctuation">:</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">const</span> fixButtonStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n      position<span class="token punctuation">:</span> <span class="token string">"fixed"</span><span class="token punctuation">,</span>\n      top<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>\n      width<span class="token punctuation">:</span> <span class="token string">"100%"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>fixHeaderStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          fixed header\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>YyPullLoad</span>\n          <span class="token attr-name">downEnough</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">150</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>reactpullload<span class="token punctuation">"</span></span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span>\n          <span class="token attr-name">isBlockContainer</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">action</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>action<span class="token punctuation">}</span></span>\n          <span class="token attr-name">handleAction</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleAction<span class="token punctuation">}</span></span>\n          <span class="token attr-name">hasMore</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>hasMore<span class="token punctuation">}</span></span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>paddingTop<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">distanceBottom</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test-ul<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleAction<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> STATS<span class="token punctuation">.</span>refreshing<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>refreshing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleAction<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> STATS<span class="token punctuation">.</span>loading<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>loading more<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>fixButtonStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>getScrollTop<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>getScrollTop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>setScrollTop<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>setScrollTop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>\n              data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>str<span class="token punctuation">,</span> index <span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>str<span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span>/</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>YyPullLoad</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],style:"li{font-size: 20px; width: 100%;list-style: none;}\nimg{width: 100%;}\ndiv, .test-ul, p{margin: 0; padding: 0;}\n.block{position: absolute; height: 100%;}\n\nbutton{\n  display: inline-block;\n  font-weight: 500;\n  text-align: center;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  line-height: 1.5;\n  padding: 4px 15px;\n  font-size: 12px;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);\n  transition: all .3s cubic-bezier(.645,.045,.355,1);\n  position: relative;\n  color: rgba(0,0,0,.65);\n  background-color: #fff;\n  border-color: #d9d9d9;\n  outline: 0;\n  margin-right: 8px;\n  margin-bottom: 12px;\n  margin-top: 12px;\n  -webkit-appearance: button;\n  box-sizing: border-box;\n}",highlightedStyle:'<span class="token selector">li</span><span class="token punctuation">{</span><span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">20</span>px<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span><span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span><span class="token punctuation">}</span>\n<span class="token selector">img</span><span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n<span class="token selector">div, <span class="token class">.test-ul</span>, p</span><span class="token punctuation">{</span><span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.block</span></span><span class="token punctuation">{</span><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n\n<span class="token selector">button</span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n  <span class="token property">font-weight</span><span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">-ms-touch-action</span><span class="token punctuation">:</span> manipulation<span class="token punctuation">;</span>\n  <span class="token property">touch-action</span><span class="token punctuation">:</span> manipulation<span class="token punctuation">;</span>\n  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n  <span class="token property">background-image</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token number">1</span>px solid transparent<span class="token punctuation">;</span>\n  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">1.5</span><span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">4</span>px <span class="token number">15</span>px<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">12</span>px<span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">4</span>px<span class="token punctuation">;</span>\n  <span class="token property">-webkit-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">-moz-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">-ms-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> all <span class="token number">.3</span>s <span class="token function">cubic-bezier</span><span class="token punctuation">(</span><span class="token number">.645</span>,<span class="token number">.045</span>,<span class="token number">.355</span>,<span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">transition</span><span class="token punctuation">:</span> all <span class="token number">.3</span>s <span class="token function">cubic-bezier</span><span class="token punctuation">(</span><span class="token number">.645</span>,<span class="token number">.045</span>,<span class="token number">.355</span>,<span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span>,<span class="token number">0</span>,<span class="token number">0</span>,<span class="token number">.65</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token hexcode">#d9d9d9</span><span class="token punctuation">;</span>\n  <span class="token property">outline</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">12</span>px<span class="token punctuation">;</span>\n  <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token number">12</span>px<span class="token punctuation">;</span>\n  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> button<span class="token punctuation">;</span>\n  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'
}},900:function(n,s,a){n.exports={basic:a(795)}}});