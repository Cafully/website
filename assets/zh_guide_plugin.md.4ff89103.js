import{_ as s,c as a,o as n,N as l}from"./chunks/framework.1e6a71f2.js";const F=JSON.parse('{"title":"插件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/plugin.md","lastUpdated":1679226626000}'),p={name:"zh/guide/plugin.md"},o=l(`<h1 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h1><p>实现一个简单的插件,在插件被加载时输出一条日志</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>将插件拖动到<code>plugin</code>文件夹里</p><h2 id="自制" tabindex="-1">自制 <a class="header-anchor" href="#自制" aria-label="Permalink to &quot;自制&quot;">​</a></h2><h3 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h3><p>创建一个项目,这里以<code>Gradle</code>项目为例</p><div class="language-groovy"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">plugins {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">java</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">group </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cn.enaium.cafully</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">version </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.0.0</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sourceCompatibility </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> targetCompatibility </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">JavaVersion</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">VERSION_1_8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">repositories {</span></span>
<span class="line"><span style="color:#A6ACCD;">    mavenCentral</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dependencies {</span></span>
<span class="line"><span style="color:#A6ACCD;">    compileOnly </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cn.enaium.cafully:cafully-api:1.1.1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p>其中<code>cafully-api</code>依赖就是<code>Cafully</code>的API</p><p>以中央参仓库的版本为准</p><p><a href="https://central.sonatype.com/search?smo=true&amp;q=cafully-api" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/cn.enaium.cafully/cafully-agent?style=flat-square" alt="Maven Central"></a></p><div class="language-groovy"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">repositories {</span></span>
<span class="line"><span style="color:#A6ACCD;">    maven { url </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://jitpack.io</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dependencies {</span></span>
<span class="line"><span style="color:#A6ACCD;">    compileOnly </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">com.github.Cafully.cafully:cafully-api:1.1.1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p>如果使用<code>jitpack</code>需要添加仓库</p><p>以<code>jitpack</code>仓库的版本为准</p><p><a href="https://jitpack.io/#Cafully/cafully" target="_blank" rel="noreferrer"><img src="https://img.shields.io/jitpack/version/com.github.Cafully/cafully?style=flat-square" alt="JitPack"></a></p><h3 id="主类" tabindex="-1">主类 <a class="header-anchor" href="#主类" aria-label="Permalink to &quot;主类&quot;">​</a></h3><p>创建一个类<code>cn.enaium.cafully.example.Example</code>,实现<code>cn.enaium.cafully.plugin.api.IInitializer</code>接口</p><p>添加<code>cn.enaium.cafully.plugin.annotation.Plugin</code>注解</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Plugin</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">unique</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Example Plugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">version</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">api</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&gt;=1.1.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Example</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IInitializer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">initialize</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">IHelper</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">plugin</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Throwable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>Plugin</code>注解,<code>unique</code>插件的唯一标识,<code>name</code>插件的名字,<code>version</code>插件的版本,<code>api</code>api的版本</p><p>插件在被加载时,会调用插件的<code>initialize</code>方法,这时调用插件的日志方法,输出一条日志</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">initialize</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">IHelper</span><span style="color:#A6ACCD;"> plugin</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> throws Throwable </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    plugin</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">plugin</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">logger</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello Example World!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="最后的步骤" tabindex="-1">最后的步骤 <a class="header-anchor" href="#最后的步骤" aria-label="Permalink to &quot;最后的步骤&quot;">​</a></h3><p>在构建配置中将主类名添加到<code>manifest</code>中</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">jar {</span></span>
<span class="line"><span style="color:#A6ACCD;">    manifest.attributes(</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;Manifest-Version&#39;: 1.0,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;Main-Class&#39;: &#39;cn.enaium.cafully.example.Example&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>好了,这样一个简单的插件就制作完成了</p>`,26),e=[o];function c(t,r,i,y,D,C){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{F as __pageData,d as default};
