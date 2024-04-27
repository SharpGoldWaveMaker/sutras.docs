import{provide as s,useData as a,openBlock as i,createElementBlock as n,createStaticVNode as p}from"./chunks/framework.BssAmy7X.js";const t=p(`<h1 id="路径解析" tabindex="-1">路径解析 <a class="header-anchor" href="#路径解析" aria-label="Permalink to &quot;路径解析&quot;">​</a></h1><p>demo的书写很简单，只涉及到一个路径path的问题，这个路径经过 Sutras 解析，最终将指向demo文件的实际地址。 考虑到使用场景，Sutras提供了一些配置项，能够让你在书写文档的时候体验更好，且便于维护。 Sutras考虑的使用场景如下：</p><h3 id="常见的项目结构" tabindex="-1">常见的项目结构 <a class="header-anchor" href="#常见的项目结构" aria-label="Permalink to &quot;常见的项目结构&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ components</span></span>
<span class="line"><span>│  │  ├─ button.md /** button的介绍文档 */</span></span>
<span class="line"><span>│  │  ├─ input.md /** input的介绍文档 */</span></span>
<span class="line"><span>│  │  └─ ...</span></span>
<span class="line"><span>│  └─ ...  </span></span>
<span class="line"><span>├─ packages</span></span>
<span class="line"><span>│  ├─ button</span></span>
<span class="line"><span>│  │  ├─ src</span></span>
<span class="line"><span>│  │  │  ├─ __demo__</span></span>
<span class="line"><span>│  │  │  │  ├─ basic.vue /** 最基础的case */</span></span>
<span class="line"><span>│  │  │  │  ├─ size.vue  /** 支持多种大小的case */</span></span>
<span class="line"><span>│  │  │  │  └─ ...</span></span>
<span class="line"><span>│  │  │  └─ index.ts</span></span>
<span class="line"><span>│  │  └─ package.json</span></span>
<span class="line"><span>│  ├─ input</span></span>
<span class="line"><span>│  └─ ...</span></span>
<span class="line"><span>└─ workspace.yaml</span></span></code></pre></div><p>甚至是更为复杂的<a href="https://semaphoreci.com/blog/what-is-monorepo" target="_blank" rel="noreferrer">monorepo</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ components</span></span>
<span class="line"><span>│  │  ├─ button.md /** button的介绍文档 */</span></span>
<span class="line"><span>│  │  ├─ input.md /** input的介绍文档 */</span></span>
<span class="line"><span>│  │  └─ ...</span></span>
<span class="line"><span>│  └─ ...  </span></span>
<span class="line"><span>├─ packages</span></span>
<span class="line"><span>│  ├─ components</span></span>
<span class="line"><span>│  │  ├─ src</span></span>
<span class="line"><span>│  │  │  ├─ button</span></span>
<span class="line"><span>│  │  │  │  ├─ __demo__</span></span>
<span class="line"><span>│  │  │  │  │  ├─ basic.vue /** 最基础的case */</span></span>
<span class="line"><span>│  │  │  │  │  ├─ size.vue  /** 支持多种大小的case */</span></span>
<span class="line"><span>│  │  │  │  │  └─ ...</span></span>
<span class="line"><span>│  │  │  │  └─ index.ts</span></span>
<span class="line"><span>│  │  │  ├─ ...</span></span>
<span class="line"><span>│  │  │  └─ index.ts</span></span>
<span class="line"><span>│  │  └─ package.json</span></span>
<span class="line"><span>│  ├─ composables</span></span>
<span class="line"><span>│  │  ├─ src</span></span>
<span class="line"><span>│  │  │  ├─ use-style</span></span>
<span class="line"><span>│  │  │  │  ├─ __demo__</span></span>
<span class="line"><span>│  │  │  │  │  └─ ...</span></span>
<span class="line"><span>│  │  │  │  └─ index.ts</span></span>
<span class="line"><span>│  │  │  ├─ ...</span></span>
<span class="line"><span>│  │  │  └─ index.ts</span></span>
<span class="line"><span>│  │  └─ package.json</span></span>
<span class="line"><span>│  ├─ utils</span></span>
<span class="line"><span>│  └─ ...</span></span>
<span class="line"><span>└─ workspace.yaml</span></span></code></pre></div><p>亦或是你的团队有其他的目录规范，但从概念上，Sutras做了总结：</p><h2 id="概念介绍" tabindex="-1">概念介绍 <a class="header-anchor" href="#概念介绍" aria-label="Permalink to &quot;概念介绍&quot;">​</a></h2><ul><li><p><strong>Component</strong></p><p>在Sutras中，<strong>Component</strong>这一概念被广泛地应用，它不仅限于前端组件。这一概念涉及<strong>模块化</strong>、<strong>复杂程序的分解</strong>以及<strong>设计重用</strong>等多个层面，是相对于<strong>整体</strong>的一个分割单元。</p><ul><li><strong>JavaScript函数</strong>：比如<code>lodash</code>库中的<code>chunk</code>、<code>each</code>等函数，每一个都可以视为一个组件。</li><li><strong>Hook函数</strong>：如<code>@vueuse/core</code>中的<code>useFetch</code>、<code>useTimeout</code>等，也属于Sutras所定义的组件范畴。</li></ul><p>它是demo的<strong>展示对象</strong></p></li><li><p><strong>Feature</strong></p><p>每个Component都至少包含一个<strong>Feature</strong>。</p><p>如一个<code>Button</code>组件，支持设置：<strong>类型</strong>、<strong>大小</strong>等等；</p><p>如lodash函数<code>find</code>，有多种用法：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;barney&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;age&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">36</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fred&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,    </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;age&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pebbles&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;age&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(users, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">o</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> o.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; });</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; object for &#39;barney&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The \`_.matches\` iteratee shorthand.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(users, { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;age&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; object for &#39;pebbles&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The \`_.matchesProperty\` iteratee shorthand.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(users, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; object for &#39;fred&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The \`_.property\` iteratee shorthand.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(users, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; object for &#39;barney&#39;</span></span></code></pre></div><p>Sutras认为每一个Feature都可以作为一个独立的demo进行展示，当然你也可以放在一个demo中。</p></li><li><p><strong>Scene</strong></p><p>有时一个复杂庞大的Feature，可能要进一步细化来解释、介绍。Sutras把被细化的每种情况称作<strong>Scene</strong></p></li><li><p><strong>Package</strong></p><p>在常规的<strong>单项目仓库</strong>(<strong>SingleRepo</strong>)中，你可能并不需要关注这个概念。在复杂的<strong>多项目仓库</strong>(<strong>Monorepo</strong>)，将庞大的Component划分组织成多个Package是常见的：</p><p>如前端组件库可以拆分为：<code>utils</code>，<code>components</code>，<code>style</code>，<code>hooks</code>...等等package。</p><p>如<strong>lodashjs</strong>，可以根据数据结果划分package：<code>Array</code>、<code>Collection</code>、<code>Function</code>...</p><p><strong>@vueuse</strong>，也有它自身设定的category分类：<code>State</code>、<code>Elements</code>...</p><p>这些package可能都需要demo展示，以便书写技术文档共享给社区或团队成员。</p></li></ul><p>由此Sutras遇到了：<strong>Package-Component-Feature-Scene</strong>，这样的四级结构。Sutras也是根据围绕着四个概念设计了<strong>路径解析逻辑</strong></p><h2 id="路径解析逻辑" tabindex="-1">路径解析逻辑 <a class="header-anchor" href="#路径解析逻辑" aria-label="Permalink to &quot;路径解析逻辑&quot;">​</a></h2><h3 id="package解析" tabindex="-1">Package解析 <a class="header-anchor" href="#package解析" aria-label="Permalink to &quot;Package解析&quot;">​</a></h3><p>首先，Sutras在构建时，会基于<a href="./config/index#root">工作目录</a>扫描你的仓库，搜集所有的package信息。</p><p>如果你的仓库是单项目仓库，那么Sutras会将你的仓库视为一个package。</p><p>如果你的仓库是多项目仓库，那么Sutras会依据你所使用的<strong>工作空间workspace</strong>设置，来获取所有的package信息。Sutras支持的workspace技术有： <code>Yarn</code>,<code> Bolt</code>,<code> Lerna</code>, <code>pnpm</code>, <code>Rush</code></p><h3 id="指定package与component" tabindex="-1">指定Package与Component <a class="header-anchor" href="#指定package与component" aria-label="Permalink to &quot;指定Package与Component&quot;">​</a></h3><p>Sutras需要你来指定demo所属的Package、Component，指定方式有三种：</p><ul><li><p><strong>通过文档的文件名与目录名</strong></p><p>通常你的文档可以按照<code>/docs/package/component.md</code>进行整理，如：<code>/docs/components/button.md</code>。</p><p>当你在文档<code>button.md</code>中书写：<code>&lt;demo path=&quot;basic&quot;/&gt;</code>时，Sutras会认为你要将：</p><p>Package名为：&quot;<strong>components</strong>&quot;、组件名为：&quot;<strong>button</strong>&quot;的<strong>basic文件</strong>作为你的demo文件。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>你可以省略demo文件后缀名。</p><p>Sutras也支持通过插件配置来为你的每个package定义各自的<strong>别名Alias</strong>，详见<a href="./config/index#package-alias">定义Package别名</a></p></div></li><li><p><strong>通过文档的frontmatter</strong></p><p>有的时候你的文档结构并非完全按照仓库结构进行组织，为此，Sutras支持你在文档的frontmatter中显示指定要展示的package与component，如在button.md中：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">components</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">button</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;basic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p>Sutras同样也会认为你要将：Package名为：&quot;<strong>components</strong>&quot;、组件名为：&quot;<strong>button</strong>&quot;的<strong>basic文件</strong>作为你的demo文件。</p></li><li><p><strong>通过<code>demo</code>的属性</strong></p><p>更特别地，你可能想要写一篇Summary文档页面，简单总结几个component下各自的demo。Sutras支持你通过<code>demo</code>的属性来指定，如在summary.md中：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;components&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;button&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;basic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;style&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;useStyle&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;basic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div></li></ul><p>你也可以讲上述三种方式组合起来，如：<code>/docs/xxx/summary-components.md</code>中</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">components</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;button&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;basic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;input&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;basic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p>或在<code>/docs/components/xxx.md</code>中，使用文档目录名：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;button&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;basic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;input&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;basic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p>或在<code>/docs/components/xxx.md</code>中，使用文档目录名，结合<strong>frontmatter</strong>：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">button</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;basic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p>总之：Sutras会<strong>先检查<code>demo</code>的属性</strong>，然后查看<strong>frontmatter</strong>，最后依据<strong>文档的文件名与目录名</strong></p><h3 id="扫描demo" tabindex="-1">扫描demo <a class="header-anchor" href="#扫描demo" aria-label="Permalink to &quot;扫描demo&quot;">​</a></h3><p>通过你的指定信息，Sutras基本已经知道你要展示的demo是什么了。接下来，Sutras会借助<code>glob</code>，扫描你的仓库获取demo文件内容：</p><p><strong>glob规则</strong>：</p><p>在单项目仓库中，Sutras生成的glob规则为：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{root}/**/{component}/**/demos/**/{demo}.{vue|ts|js}</span></span>
<span class="line"><span>{root}/**/{component}/**/demos/**/{demo}./index.{vue|ts|js}</span></span>
<span class="line"><span>{root}/**/demos/**/{component}/**/{demo}..{vue|ts|js}</span></span>
<span class="line"><span>{root}/**/demos/**/{component}/**/{demo}./index.{vue|ts|js}</span></span></code></pre></div><p>在多项目仓库中，Sutras生成的glob规则为：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{path-to-package}/**/{component}/**/demos/**/{demo}.{vue|ts|js}</span></span>
<span class="line"><span>{path-to-package}/**/{component}/**/demos/**/{demo}/index.{vue|ts|js}</span></span>
<span class="line"><span>{path-to-package}/**/demos/**/{component}/**/{demo}.{vue|ts|js}</span></span>
<span class="line"><span>{path-to-package}/**/demos/**/{component}/**/{demo}/index.{vue|ts|js}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">定义demos目录</p><p>你可以通过插件设置，来自定义demos目录，如：<code>__demos__</code>，详见<a href="./config/index#demos">定义demos目录</a></p></div><h2 id="使用本地demo" tabindex="-1">使用本地demo <a class="header-anchor" href="#使用本地demo" aria-label="Permalink to &quot;使用本地demo&quot;">​</a></h2><p>Sutras也支持你在Vitepress目录下使用demo，如，你在<code>/docs/xxxx/</code>目录下书写了一个<code>demo.vue</code>或<code>demo.js</code>，在<code>/docs/</code>目录下的<strong>任意文档</strong>中可以<strong>通过相对路径</strong>引用这个demo，如在<code>/docs/index.md</code>文档中：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./xxxx/demo.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="继续分解" tabindex="-1">继续分解 <a class="header-anchor" href="#继续分解" aria-label="Permalink to &quot;继续分解&quot;">​</a></h2><p>在概念介绍中，Sutras定义了一个Scene概念，如果你实际工作中确实遇到庞大的Feature需要继续分解的需求，Sutras也做了支持。</p><p>如上面介绍过的例子中，你的button组件的<code>size</code>特性还需要分场景进行展示：button按钮的大小，可以通过 Button 的 size属性来设置；也可以通过全局的ConfigProvder.componentSize来进行默认设置；</p><p>那么可以将<code>size</code>作为一个文件夹，把各种场景放置在里面：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─ src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ demos</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─ button</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  ├─ basic.vue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  ├─ size </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 支持多种大小的case */</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  │  ├─ by</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props.vue </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 通过属性进行设置 */</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  │  └─ by</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">provider </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 通过全局config进行设置 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  │     └─ index.vue </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 这里作为一个例子展示 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ button</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─ index.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ input</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  └─ index.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─ package.json</span></span></code></pre></div><p>文档<code>button.md</code>需要添加一个属性</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;size/by-props&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;size/by-provider&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p>如果多个场景需要并列展示，中间不插入其他markdown文本，那么Sutras提供了有更简单的等价写法：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;size&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scene</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div>`,45),e=[t],r=JSON.parse('{"title":"路径解析","description":"","frontmatter":{},"headers":[],"relativePath":"guide/path.md","filePath":"guide/path.md","lastUpdated":1714223899000}'),l={name:"guide/path.md"},E=Object.assign(l,{setup(h){return s("PageDataInjectKey",a()),(k,o)=>(i(),n("div",null,e))}});export{r as __pageData,E as default};