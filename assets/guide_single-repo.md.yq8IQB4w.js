import{useData as s}from"./chunks/data.Xzn-VJ5F.js";import{provide as a,openBlock as n,createElementBlock as i,createStaticVNode as p}from"./chunks/sutras-console.ChiQzqOZ.js";const e=p(`<h1 id="singlerepo-案例" tabindex="-1">SingleRepo 案例 <a class="header-anchor" href="#singlerepo-案例" aria-label="Permalink to &quot;SingleRepo 案例&quot;">​</a></h1><p>通常情况下的<code>SingleRepo</code>开发场景，目录设计有以下几种情况</p><p>总体上都是围绕：<code>component</code>与<code>demo</code>两个概念展开，即一个component对应多个demo的形式，并与文档<code>docs</code>目录独立。</p><p>Sutras以文档文件<code>.md</code>为中心，对<code>demo</code>进行查找。为了满足大多数应用场景，Sutras提供了如下几种查找方式：</p><h2 id="与library一致的文档结构" tabindex="-1">与library一致的文档结构 <a class="header-anchor" href="#与library一致的文档结构" aria-label="Permalink to &quot;与library一致的文档结构&quot;">​</a></h2><p>在<code>SingleRepo</code>仓库中<code>library</code>的目录是按照一定的逻辑组织的，比如上述例子</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ src</span></span>
<span class="line"><span>│  ├─ button</span></span>
<span class="line"><span>│  │  └─ index.ts</span></span>
<span class="line"><span>│  ├─ input</span></span>
<span class="line"><span>│  │  └─ index.ts</span></span>
<span class="line"><span>│  ├─ ...</span></span>
<span class="line"><span>│  └─ index.ts</span></span>
<span class="line"><span>├─ ...</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><p>其中，demo目录根据不同的团队习惯，一般会放在对应的component目录下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ src</span></span>
<span class="line"><span>│  ├─ button</span></span>
<span class="line"><span>│  │  ├─ __demo__</span></span>
<span class="line"><span>│  │  │  ├─ basic.vue /** 最基础的case */</span></span>
<span class="line"><span>│  │  │  ├─ size.vue  /** 支持多种大小的case */</span></span>
<span class="line"><span>│  │  │  └─ ...</span></span>
<span class="line"><span>│  │  └─ index.ts</span></span>
<span class="line"><span>│  ├─ input</span></span>
<span class="line"><span>│  ├─ ...</span></span>
<span class="line"><span>│  └─ index.ts</span></span>
<span class="line"><span>├─ ...</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><p>也有的独立于component，单独起一个demos目录：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ src</span></span>
<span class="line"><span>│  ├─ __demo__</span></span>
<span class="line"><span>│  │  ├─ button</span></span>
<span class="line"><span>│  │  │  ├─ basic.vue /** 最基础的case */</span></span>
<span class="line"><span>│  │  │  ├─ size.vue  /** 支持多种大小的case */</span></span>
<span class="line"><span>│  │  │  └─ ...</span></span>
<span class="line"><span>│  │  └─ ...</span></span>
<span class="line"><span>│  ├─ button</span></span>
<span class="line"><span>│  │  └─ index.ts</span></span>
<span class="line"><span>│  ├─ input</span></span>
<span class="line"><span>│  ├─ ...</span></span>
<span class="line"><span>│  └─ index.ts</span></span>
<span class="line"><span>├─ ...</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><p>甚至放到src目录之外，以打包结果作为demo演示的基础：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ __demo__</span></span>
<span class="line"><span>│  ├─ button</span></span>
<span class="line"><span>│  │  ├─ basic.vue /** 最基础的case */</span></span>
<span class="line"><span>│  │  ├─ size.vue  /** 支持多种大小的case */</span></span>
<span class="line"><span>│  │  └─ ...</span></span>
<span class="line"><span>│  └─ ...  </span></span>
<span class="line"><span>├─ dist</span></span>
<span class="line"><span>├─ src</span></span>
<span class="line"><span>│  ├─ button</span></span>
<span class="line"><span>│  │  └─ index.ts</span></span>
<span class="line"><span>│  ├─ input</span></span>
<span class="line"><span>│  ├─ ...</span></span>
<span class="line"><span>│  └─ index.ts</span></span>
<span class="line"><span>├─ ...</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><p>无论那种情况，Sutras建议你采用与library一致的文档组织结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ components</span></span>
<span class="line"><span>│  │  ├─ button.md /** button的介绍文档 */</span></span>
<span class="line"><span>│  │  ├─ input.md /** input的介绍文档 */</span></span>
<span class="line"><span>│  │  └─ ...</span></span>
<span class="line"><span>│  └─ ...</span></span></code></pre></div><p>在这种模式下，需要你开启配置，在你的vite.config.ts文件中：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { pluginVite </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sutrasVite } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@sutras/plugin&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        sutrasVite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            useDocPath: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认为：true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            demoDirname: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;demos&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 根据你的团队习惯设置，默认为：__demos__</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>在<code>button.md</code>文档中，只需要添加内容，Sutras就能推测demo的完整路径： {root}/src/button/demos/size.vue {root}/src/button/demos/size/index.vue {root}/src/demos/button/size.vue {root}/src/demos/button/size/index.vue {root}/demos/src/button/size.vue {root}/demos/src/button/size/index.vue</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>你的basic如果还需要分场景进行展示，那么可以将size作为一个文件夹，把各种场景放置在里面： 比如下面的例子，一个button按钮的大小，可以通过 Button 的 size属性来设置；也可以通过全局的ConfigProvder.componentSize来进行默认设置；</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─ src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ __demo__</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─ button</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  ├─ basic.vue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  ├─ size </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 支持多种大小的case */</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  │  ├─ local.vue </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 通过属性进行设置 */</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  │  └─ global </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 通过全局config进行设置 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  │     └─ index.vue </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** 这里作为一个例子展示 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ button</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─ index.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ input</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  └─ index.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─ package.json</span></span></code></pre></div><p>文档<code>button.md</code>需要添加一个属性</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;size/local&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;size/global&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p>如果你想要像上述情况一样，两个场景并列展示，中间不插入其他markdown文本，那么有更简答的等价写法</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;size&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scene</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div>`,25),l=[e],r=JSON.parse('{"title":"SingleRepo 案例","description":"","frontmatter":{},"headers":[],"relativePath":"guide/single-repo.md","filePath":"guide/single-repo.md","lastUpdated":null}'),t={name:"guide/single-repo.md"},E=Object.assign(t,{setup(h){return a("PageDataInjectKey",s()),(k,c)=>(n(),i("div",null,l))}});export{r as __pageData,E as default};
