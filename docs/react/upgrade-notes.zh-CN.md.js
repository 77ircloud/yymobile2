webpackJsonp([195,301],{634:function(n,a){n.exports={content:["article",["p","\u6b64\u5904\u7740\u91cd\u5217\u51fa\u5347\u7ea7\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u5316\u548c\u63a8\u8350\u6539\u52a8\u3002\u6240\u6709\u53d8\u52a8\u8bf7\u89c1 ",["a",{title:null,href:"/changelog"},"Changelog"],"\u3002"],["h2","1.x => 2.0"],["p","\u5f88\u9ad8\u5174\u7684\u901a\u77e5\u5404\u4f4d\uff0c",["code","antd-mobile@2.0"]," \u5df2\u7ecf\u8fdb\u5165\u6bd4\u8f83\u7a33\u5b9a\u7684 beta \u7248\u672c\u72b6\u6001\u3002\u76f8\u5bf9\u4e8e 1.x\uff0c",["code","antd-mobile@2.0"]," \u66f4\u5feb\u3001\u66f4\u8f7b\u91cf\u3001\u66f4\u5bb9\u6613\u4e0a\u624b\u3002\u6b22\u8fce\u5927\u5bb6\u5f00\u59cb\u4f7f\u7528\uff01"],["h3","2.x \u4e3b\u8981\u53d8\u5316\u6982\u89c8"],["ul",["li",["p",'"Web \u9875\u9762\u9ad8\u6e05\u663e\u793a" / "SVG Icon" \u7b49\u4f18\u5316\u65b9\u6848\uff0c\u4ece\u201c\u5185\u7f6e\u201d\u6539\u4e3a\u201c\u5916\u7f6e\u201d\uff0c\u663e\u8457\u964d\u4f4e\u4e0a\u624b\u4f7f\u7528\u7684\u590d\u6742\u5ea6\u3002']],["li",["p","\u53bb\u9664 ",["code","moment.js"]," / ",["code","hammer.js"]," \u7b49\u91cd\u91cf\u7ea7\u5e95\u5c42\u4f9d\u8d56\u4f9d\u8d56\u3002"]],["li",["p","\u5220\u9664\u4e0d\u5e38\u7528\u7684 ",["code","Table"]," \u7ec4\u4ef6\uff0c\u628a ",["code","Popup"]," \u7ec4\u4ef6\u5408\u5e76\u5230 ",["code","Modal"]," \u7ec4\u4ef6\u4e2d\u3002"]],["li",["p","\u91cd\u6784 ",["code","Tabs"]," / ",["code","Modal"]," \u7ec4\u4ef6\uff0c\u4ee5\u51cf\u5c0f\u4f53\u79ef\u3001\u4f18\u5316\u529f\u80fd\u3002"]],["li",["p","\u65b0\u589e ",["code","Calendar"]," / ",["code","DatePickerView"]," \u7ec4\u4ef6\uff0c\u6ee1\u8db3\u66f4\u591a\u4e1a\u52a1\u573a\u666f\u9700\u6c42\u3002"]]],["h3","2.x \u4e0d\u517c\u5bb9\u6539\u52a8"],["h4","\u9ad8\u6e05\u65b9\u6848"],["p","\u5728 1.x \u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 ",["a",{title:null,href:"https://gw.alipayobjects.com/os/rmsportal/dVgyohpfmDMFFeDasFns.js"},"\u9ad8\u6e05\u65b9\u6848\u811a\u672c"]," \u548c ",["a",{title:null,href:"https://github.com/cuth/postcss-pxtorem"},"pxtorem"]," \u5de5\u5177\uff0c\u4f7f\u7528 iPhone6 \u7684\u7269\u7406\u50cf\u7d20\u5bbd\u5ea6 ",["code","750px"]," \u4f5c\u4e3a\u57fa\u51c6\uff0c\u5e76\u4e14\u4f7f\u7528 ",["code","rem"]," \u6765\u4f7f\u9875\u9762\u7b49\u6bd4\u7f29\u653e\uff0c\u6700\u7ec8\u8fbe\u5230\u9875\u9762\u9ad8\u6e05\u663e\u793a\u7684\u7ec6\u817b\u6548\u679c\u3002"],["p","\u5728 2.0 \u4e2d\uff0c\u6211\u4eec\u628a\u201c\u9ad8\u6e05\u201d\u65b9\u6848\u4ece\u201c\u5185\u7f6e\u201d\u6539\u4e3a\u201c\u5916\u7f6e\u201d\uff0c\u9ed8\u8ba4\u56de\u5f52\u5230\u6700\u5927\u4f17\u5316\u7684\u65b9\u5f0f\uff0c\u5373\u6240\u6709\u6837\u5f0f\u9ed8\u8ba4\u90fd\u6539\u4e3a\u4ee5 iPhone6 \u7684\u903b\u8f91\u50cf\u7d20\u5bbd\u5ea6 ",["code","375px"],"(ideal viewport width) \u4e3a\u57fa\u51c6\uff0c\u9ed8\u8ba4\u4e0d\u518d\u63d0\u4f9b ",["code","rem"]," \u5355\u4f4d\u7528\u6cd5\u793a\u4f8b\u3002"],["p","\u5982\u4f55\u5347\u7ea7\uff1f"],["ol",["li",["p","\u786e\u4fdd\u5728\u4f60\u9875\u9762\u7684 html \u6807\u7b7e\u4e0a\u52a0\u4e0a ",["code","data-scale"]," \u5c5e\u6027\uff0c \u5982 ",["code",'<html data-scale="true"></html>'],", \u6216\u8005\u901a\u8fc7 js \u52a8\u6001\u6dfb\u52a0 ",["code","document.documentElement.setAttribute('data-scale', true);"],"\u3002"]],["li",["p","\u53c2\u7167 ",["a",{title:null,href:"https://ant.design/docs/react/customize-theme-cn"},"\u81ea\u5b9a\u4e49\u4e3b\u9898\u6587\u6863"],"  \u5c06 antd-mobile \u63d0\u4f9b\u7684\u5355\u4f4d\u53d8\u91cf ",["code","@hd"]," \u8d4b\u503c\u4e3a ",["code","@hd: '2px'"],"\u3002"]]],["h4","svg icon"],["p","\u5728 2.0 \u4e2d ",["code","Icon.props.type"]," \u4e0d\u518d\u652f\u6301\u4f20\u5165 require \u7684\u672c\u5730 svg \u6587\u4ef6\uff0c\u53ea\u652f\u6301\u4f20\u5165 ",["code","string"]," \u5f62\u5f0f\u7684 Icon \u540d\u79f0\u3002"],["p","\u5982\u4f55\u5347\u7ea7\uff1f"],["ol",["li",["p","\u5bf9\u4e8e\u539f\u6709\u4ee3\u7801\u4e2d ",["code",'<Icon type="loading" />']," \u6b64\u7c7b\u4f20\u5165\u5b57\u7b26\u4e32\u7684 icon \u540d\u79f0\u7684\u4f7f\u7528\u573a\u666f\uff0c\u65e0\u9700\u4efb\u4f55\u4fee\u6539\uff0c\u4ecd\u7136\u652f\u6301 (\u5177\u4f53\u652f\u6301\u54ea\u4e9b icon name, \u8bf7\u67e5\u9605 ",["a",{title:null,href:"http://beta.mobile.ant.design/components/icon-cn"},"\u6587\u6863"],")\u3002"]],["li",["p","\u5bf9\u4e8e\u539f\u6709\u4ee3\u7801\u6709 ",["code","<Icon type={require('../foo.svg')} />"]," \u5982\u4f55\u5347\u7ea7 \uff1f \u5efa\u8bae\u7528\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 ",["code","AntdMobileOldIcon"]," \u7ec4\u4ef6\u66ff\u6362 antd-mobile ",["code","Icon"],", \u53ef\u76f4\u63a5 copy \u5982\u4e0b\u7684\u4ee3\u7801\uff1a"]]],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// \u539f\u6765\u7684\u4f7f\u7528\u65b9\u5f0f</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./foo.svg)\'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token comment" spellcheck="true">// \u4fee\u6539\u6210</span>\n<span class="token keyword">const</span> CustomIcon <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">,</span> className <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token string">\'md\'</span><span class="token punctuation">,</span> <span class="token operator">...</span>restProps <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span>\n      <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`am-icon am-icon-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>type<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> am-icon-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>className<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">{...restProps}</span>\n    <span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">xlinkHref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomIcon</span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./foo.svg)\'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","// \u539f\u6765\u7684\u4f7f\u7528\u65b9\u5f0f\nimport { Icon } from 'antd-mobile';\n\n<Icon type={require('./foo.svg)'} />\n\n// \u4fee\u6539\u6210\nconst CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => (\n    <svg\n      className={`am-icon am-icon-${type.substr(1)} am-icon-${size} ${className}`}\n      {...restProps}\n    >\n      <use xlinkHref={type} />\n    </svg>\n);\n<CustomIcon type={require('./foo.svg)'} />"]],["h4","DatePicker"],["p","\u53bb\u9664 moment.js \u4f9d\u8d56\uff0c\u76f8\u5e94\u5730 ",["code","value"]," / ",["code","minDate"]," / ",["code","maxDate"]," / ",["code","format"]," / ",["code","onChange"]," \u8fd9\u4e9b\u5c5e\u6027\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4ece ",["code","moment"]," \u5bf9\u8c61\u53d8\u4e3a ",["code","Date"]," \u5bf9\u8c61\u3002\u53e6\u5916 moment \u5bf9\u8c61\u4e0a\u6709 format \u7b49\u81ea\u5b9a\u4e49\u65b9\u6cd5\uff0c\u4f46 Date \u5bf9\u8c61\u4e0a\u6ca1\u6709\u76f8\u5e94\u65b9\u6cd5\u3001\u9700\u8981\u81ea\u884c\u5b9e\u73b0\u3002"],["p","\u5347\u7ea7\u793a\u4f8b\uff1a"],["pre",{lang:"diff",highlighted:'<span class="token deleted">&lt;DatePicker</span>\n<span class="token deleted">-  minDate={moment([2015, 8, 15, 10, 30, 0])}</span>\n<span class="token inserted">+  minDate={new Date(2015, 8, 15, 10, 30, 0)}</span>\n<span class="token deleted">-  maxDate={moment([2018, 1, 1, 23, 49, 59])}</span>\n<span class="token inserted">+  maxDate={new Date(2018, 1, 1, 23, 49, 59)}</span>\n<span class="token inserted">></span>\n  &lt;List.Item arrow="horizontal">\u65e5\u671f&lt;/List.Item>\n<span class="token deleted">&lt;/DatePicker></span>'},["code",'<DatePicker\n-  minDate={moment([2015, 8, 15, 10, 30, 0])}\n+  minDate={new Date(2015, 8, 15, 10, 30, 0)}\n-  maxDate={moment([2018, 1, 1, 23, 49, 59])}\n+  maxDate={new Date(2018, 1, 1, 23, 49, 59)}\n>\n  <List.Item arrow="horizontal">\u65e5\u671f</List.Item>\n</DatePicker>']],["h4","Tabs"],["p","\u65e7\u7248\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span> <span class="token attr-name">defaultActiveKey</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>callback<span class="token punctuation">}</span></span> <span class="token attr-name">onTabClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleTabClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabPane</span> <span class="token attr-name">tab</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Badge text<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'3\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>First Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span><span class="token punctuation">}</span> key<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> First Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TabPane</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabPane</span> <span class="token attr-name">tab</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Badge text<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'\u4eca\u65e5(20)\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Second Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span><span class="token punctuation">}</span> key<span class="token operator">=</span><span class="token string">"2"</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> Second Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TabPane</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabPane</span> <span class="token attr-name">tab={&lt;Badge</span> <span class="token attr-name">dot</span><span class="token punctuation">></span></span>Third Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span><span class="token punctuation">}</span> key<span class="token operator">=</span><span class="token string">"3"</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> Third Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TabPane</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs</span><span class="token punctuation">></span></span>'},["code",'<Tabs defaultActiveKey="2" onChange={callback} onTabClick={handleTabClick}>\n  <TabPane tab={<Badge text={\'3\'}>First Tab</Badge>} key="1">\n    <div>Content of First Tab</div>\n  </TabPane>\n  <TabPane tab={<Badge text={\'\u4eca\u65e5(20)\'}>Second Tab</Badge>} key="2">\n    <div>Content of Second Tab</div>\n  </TabPane>\n  <TabPane tab={<Badge dot>Third Tab</Badge>} key="3">\n    <div>Content of Third Tab</div>\n  </TabPane>\n</Tabs>']],["p","\u65b0\u7248\u53d8\u5316\uff1a"],["ul",["li",["p","\u6bcf\u4e2a tab \u7684\u5143\u6570\u636e\u7531 ",["code","tabs=[{ key: string, title: Node, ... }, ...]"]," \u5c5e\u6027\u4f20\u5165"]],["li",["p",["code","defaultActiveKey"]," => ",["code","initialPage"],"\u3001",["code","activeKey"]," => ",["code","page"],"\uff0c\u652f\u6301\u5b57\u7b26\u4e32\u5f62\u5f0f\u7684 key \u6216\u8005\u6570\u5b57\u7d22\u5f15"]],["li",["p","\u53bb\u6389 ",["code","TabPane"]," \u5143\u7d20, Tabs \u7684 children \u6839\u636e key \u6216\u7d22\u5f15\u987a\u5e8f\u4e0e ",["code","tabs"]," \u6570\u636e\u5bf9\u5e94"]],["li",["p","\u652f\u6301\u5355\u5185\u5bb9\u8282\u70b9\u3001\u51fd\u6570\u5185\u5bb9\u8282\u70b9"]],["li",["p","\u6dfb\u52a0 ",["code","renderTab"]," / ",["code","renderTabBar"]," API \u6765\u652f\u6301\u66f4\u7075\u6d3b\u7684\u81ea\u5b9a\u4e49\u5185\u5bb9"]]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> tabs <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'3\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>First Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> sub<span class="token punctuation">:</span> <span class="token string">\'subcontent\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'\u4eca\u65e5(20)\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Second Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> sub<span class="token punctuation">:</span> <span class="token string">\'subcontent\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">dot</span><span class="token punctuation">></span></span>Third Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> sub<span class="token punctuation">:</span> <span class="token string">\'subcontent\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tabs</span> <span class="token attr-name">tabs</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>tabs<span class="token punctuation">}</span></span> <span class="token attr-name">initialPage</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> tab<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">renderTab</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>tab <span class="token operator">=</span><span class="token operator">></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>tab<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">-</span><span class="token punctuation">{</span>tab<span class="token punctuation">.</span>sub<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">renderTabBar</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>Tabs<span class="token punctuation">.</span>DefaultTabBar <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n<span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> First Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> Second Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Content <span class="token keyword">of</span> Third Tab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tabs</span><span class="token punctuation">></span></span>'},["code","const tabs = [\n  { title: <Badge text={'3'}>First Tab</Badge>, sub: 'subcontent' },\n  { title: <Badge text={'\u4eca\u65e5(20)'}>Second Tab</Badge>, sub: 'subcontent' },\n  { title: <Badge dot>Third Tab</Badge>, sub: 'subcontent' },\n];\n\n<Tabs tabs={tabs} initialPage={1}\n  onChange={(tab, index) => { console.log(index, tab); }}\n  renderTab={tab => <span>{tab.title}-{tab.sub}</span>}\n  renderTabBar={(props) => <Tabs.DefaultTabBar {...props} />}\n>\n  <div>Content of First Tab</div>\n  <div>Content of Second Tab</div>\n  <div>Content of Third Tab</div>\n</Tabs>"]],["h4","Popup"],["p","\u7531\u4e8e Popup \u7ec4\u4ef6\u7684\u5e95\u5c42\u4f9d\u8d56\u548c\u5927\u91cf\u6837\u5f0f\u90fd\u4e0e Modal \u7ec4\u4ef6\u76f8\u540c\uff0c\u5e76\u4e14 ",["code","Popup.show()"]," \u7684 API \u8c03\u7528\u65b9\u6cd5\u5728\u6570\u636e\u66f4\u65b0\u65f6\u9047\u5230\u56f0\u96be\uff0c\u56e0\u6b64\u6211\u4eec\u5220\u9664\u4e86 Popup \u7ec4\u4ef6\uff0c\u5e76\u4e14\u5728 Modal \u7ec4\u4ef6\u4e0a\u589e\u52a0 ",["code","popup"]," \u5c5e\u6027\u3001\u6765\u5b9e\u73b0 Popup \u7ec4\u4ef6\u7684\u529f\u80fd\u3002"],["p","\u4f7f\u7528 Modal \u7ec4\u4ef6\u5b9e\u73b0 Popup \u7684\u793a\u4f8b\uff1a"],["pre",{lang:"diff",highlighted:'<span class="token deleted">- Popup.show(&lt;div>Content&lt;/div>, { animationType: \'slide-up\', maskClosable: false });</span>\n<span class="token deleted">- Popup.hide();</span>\n\n<span class="token inserted">+ &lt;Modal</span>\n<span class="token inserted">+   popup</span>\n<span class="token inserted">+   visible={this.state.vsible}</span>\n<span class="token inserted">+   animationType="slide-up"</span>\n<span class="token inserted">+   maskClosable={false}</span>\n<span class="token inserted">+ ></span>\n<span class="token inserted">+   Content</span>\n<span class="token inserted">+ &lt;/Modal></span>'},["code","- Popup.show(<div>Content</div>, { animationType: 'slide-up', maskClosable: false });\n- Popup.hide();\n\n+ <Modal\n+   popup\n+   visible={this.state.vsible}\n+   animationType=\"slide-up\"\n+   maskClosable={false}\n+ >\n+   Content\n+ </Modal>"]],["h4","Others"],["ul",["li",["p","\u5220\u9664 ",["code","Table"]," \u7ec4\u4ef6\uff0c\u53ef\u4ee5\u81ea\u884c\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/react-component/table"},"rc-table"]," \u5305\u88c5\u3002"]],["li",["p","\u5404\u4e2a\u7ec4\u4ef6\u7684 ",["code","ref"]," \u4ece ",["code","string"]," \u4fee\u6539\u4e3a ",["code","function"]," (\u6bd4\u5982 ",["code","input"]," \u7ec4\u4ef6 ",["code","this.refs.input"]," => ",["code","this.input"],")"]],["li",["p","\u90e8\u5206 Web \u7248\u672c\u7ec4\u4ef6\u539f\u6765\u4f1a\u6839\u636e UA \u5bf9 iOS \u6216 Android \u5e73\u53f0\u5e94\u7528\u4e0d\u540c\u7684\u6837\u5f0f\uff0c\u73b0\u5728\u4fee\u6539\u4e3a\u9ed8\u8ba4\u5e94\u7528 iOS \u5e73\u53f0\u6837\u5f0f\u3002"]],["li",["p",["code","Button"]," / ",["code","InputItem"]," / ",["code","TextareaItem"]," / ",["code","Progress"]," / ",["code","List"],"/ ",["code","Result"],"/ ",["code","Switch"]," / ",["code","Slider"]," / ",["code","Flex"]," / ",["code","pagination"]," / ",["code","ActionSheet"]," \u7b49\u7ec4\u4ef6\u7684 \u7ec6\u8282\u6837\u5f0f \u6216 API \u90fd\u6709\u90e8\u5206\u5fae\u8c03"]]],["p","\u66f4\u7ec6\u8282\u7684\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b change logs"],["h2","0.9.x => 1.0"],["p","\u4ece 1.0 \u5f00\u59cb\uff0c",["code","antd-mobile"]," \u4e25\u683c\u9075\u5faa ",["a",{title:null,href:"http://semver.org/lang/zh-CN/"},"Semantic Versioning 2.0.0"]," \u8bed\u4e49\u5316\u7248\u672c\u89c4\u8303\u3002"],["p","\u91cd\u8981\u53d8\u52a8\u5982\u4e0b\uff1a"],["h3","\u7ec4\u4ef6\u7684 icon \u4ece iconfont \u8f6c\u4e3a\u4f7f\u7528 svg \u56fe\u7247"],["p","Icon \u7ec4\u4ef6\u7684\u4f7f\u7528\u65b9\u5f0f\u6ca1\u6709\u53d8\u5316\u3001\u6bd4\u5982\uff1a",["code",'<Icon type="check" />'],"\uff0c\n\u4f46\u662f\u7531\u4e8e\u4e0d\u518d\u662f font\u3001\u6240\u4ee5 css font-size \u8bbe\u7f6e\u4e0d\u518d\u751f\u6548\uff0c\n\u76f8\u5bf9\u4e8e\u5176\u4ed6\u5143\u7d20\u7684\u4f4d\u7f6e\u504f\u79fb\u8bbe\u7f6e\u4e5f\u4e0e\u539f\u6765\u7684\u7565\u6709\u4e0d\u540c\uff0c\n\u5de5\u5177\u4e0a\u7684\u8bbe\u7f6e\u8981\u6c42\u6bd4\u4e4b\u524d\u66f4\u52a0\u590d\u6742\uff1b\u8be6\u7ec6\u53c2\u8003 ",["a",{title:null,href:"https://mobile.ant.design/components/icon/"},"Icon \u6587\u6863"],"\u3002"],["h3","Web ",["code","Slider"]," \u62c6\u5206\u6210 ",["code","Slider"],", ",["code","Range"],", ",["code","createTooltip"],", \u4f7f\u7528\u65b9\u5f0f\u53c2\u89c1 ",["a",{title:null,href:"https://mobile.ant.design/components/slider"},"Slider\u6587\u6863"],", ",["a",{title:null,href:"https://mobile.ant.design/components/range"},"Range\u6587\u6863"]],["h3","\u5176\u4ed6\u5e38\u7528\u7ec4\u4ef6\u66f4\u65b0\u6ce8\u610f\u4e8b\u9879"],["blockquote",["p","\u4e3b\u8981\u4ecb\u7ecd\u7ec4\u4ef6\u6838\u5fc3\u5b9e\u73b0\u7684\u53d8\u66f4\u3002\u5982\u65e0\u7279\u522b\u8bf4\u660e\u3001\u7ec4\u4ef6 API \u5747\u5411\u524d\u517c\u5bb9\uff08\u65b0\u589e\u7684 API \u8bf7\u67e5\u770b\u5bf9\u5e94\u7ec4\u4ef6\u6587\u6863\uff09"]],["ul",["li",["p","Button \u7ec4\u4ef6\u7684\u5185\u90e8 html \u5143\u7d20\u7531",["code","button"],"\u6807\u7b7e\u66f4\u6362\u4e3a",["code","a"],"\u6807\u7b7e\uff0c\u76f8\u5e94",["code","htmlType"],"API \u5931\u6548\u3002"]],["li",["p","Form \u76f8\u5173\u7684\u8f93\u5165\u7c7b\u7ec4\u4ef6\u3001\u66f4\u660e\u786e\u533a\u5206",["a",{title:null,href:"https://facebook.github.io/react/docs/forms.html#controlled-components"},"\u53d7\u63a7\u4e0e\u5426"],"\u7684\u72b6\u6001\u3002"]],["li",["p","NoticeBar \u7ec4\u4ef6\u652f\u6301\u5e38\u89c1\u7684\u6a2a\u5411\u8d70\u9a6c\u706f\u529f\u80fd\u3002"]],["li",["p",["code","DatePicker"],", ",["code","Pagination"]," \u4e0d\u518d\u63a5\u53d7 ",["code","okText"],", ",["code","dismissText"],"\u5c5e\u6027\uff0c\u800c\u662f\u9ed8\u8ba4\u5185\u7f6e\u4e2d\u6587\u6587\u6848\uff0c\u53ef\u4ee5\u5229\u7528 ",["a",{title:null,href:"https://mobile.ant.design/components/locale-provider/"},"LocalProvider"]," \u5207\u6362\u4e3a\u82f1\u6587\u6587\u6848\u3002"]],["li",["p",["code","DatePicker"],"\u7684",["code","locale"],"\u5c5e\u6027\u7ed3\u6784\u53d8\u5316\uff0c\u539f\u6765\u7684",["code","DatePickerLocale: object"],"\u73b0\u4e3a",["code","{DatePickerLocale, okText, dismissText}"]]]],["h2","0.8.x => 0.9"],["p","\u4f18\u5316\u5404\u7ec4\u4ef6\u7684\u6837\u5f0f\u548c\u517c\u5bb9\u6027\uff0c\u5e76\u63d0\u5347\u957f\u5217\u8868\u7b49\u7ec4\u4ef6\u6027\u80fd\u3002"],["p","\u8be6\u7ec6\u53d8\u66f4\u89c1 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/releases/tag/0.9.0"},"tag/0.9.0"]],["h2","0.7.x => 0.8.0"],["p","\u4e3b\u8981\u52a0\u5165\u300c\u9ad8\u6e05\u65b9\u6848\u300d\u652f\u6301\uff0c\u8bbe\u7f6e\u65b9\u5f0f\u89c1 wiki ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/wiki"},"antd mobile 0.8 \u4ee5\u4e0a\u7248\u672c\u300c\u9ad8\u6e05\u300d\u65b9\u6848\u8bbe\u7f6e"]],["p","\u5176\u4ed6\u8be6\u7ec6\u66f4\u89c1 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/releases/tag/0.8.0"},"tag/0.8.0"]],["h2","0.5.x => 0.6.0"],["p","\u8bf7\u67e5\u770b ",["a",{title:null,href:"/changelog#0.6.0"},"Changelog"],"\u3002"]],meta:{order:4,title:"\u5347\u7ea7\u6307\u5357",filename:"docs/react/upgrade-notes.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#1.x-=>-2.0",title:"1.x => 2.0"},"1.x => 2.0"]],["li",["a",{className:"bisheng-toc-h2",href:"#0.9.x-=>-1.0",title:"0.9.x => 1.0"},"0.9.x => 1.0"]],["li",["a",{className:"bisheng-toc-h2",href:"#0.8.x-=>-0.9",title:"0.8.x => 0.9"},"0.8.x => 0.9"]],["li",["a",{className:"bisheng-toc-h2",href:"#0.7.x-=>-0.8.0",title:"0.7.x => 0.8.0"},"0.7.x => 0.8.0"]],["li",["a",{className:"bisheng-toc-h2",href:"#0.5.x-=>-0.6.0",title:"0.5.x => 0.6.0"},"0.5.x => 0.6.0"]]]}}});