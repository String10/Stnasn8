import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as t,c as o,e as n,a as e,b as r,f as i}from"./app-6cd91074.js";const d={},p=e("h1",{id:"正向连接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#正向连接","aria-hidden":"true"},"#"),r(" 正向连接")],-1),v=e("p",null,"正向连接是指client连上server, 然后把server能访问的机器地址和端口(包括server自己)镜像到client的端口上.",-1),h=i(`<p>其中实线表示可以直接访问的机器地址或者端口, 虚线表示通过<code>正向连接</code>可以访问的机器地址或者端口.</p><p>命令格式:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-p</span> server-SSH-PORT <span class="token punctuation">\\</span>
    <span class="token parameter variable">-L</span> client-IP:client-PORT:machine-IP:machine-PORT <span class="token punctuation">\\</span>
    user@server-IP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中:</p><ol><li>machine-IP和machine-PORT是server侧访问时使用的地址和端口.</li><li>client-IP可以省略, 默认为127.0.0.1.</li><li>server-IP可以用域名代替.</li></ol><h1 id="反向连接" tabindex="-1"><a class="header-anchor" href="#反向连接" aria-hidden="true">#</a> 反向连接</h1><p>反向连接是指client连上server, 然后把client能访问的机器地址和端口(包括client自己)镜像到server的端口上.</p>`,7),m=i(`<p>同样地, 实现表示可以直接访问的机器地址或者端口, 虚线表示通过<code>反向连接</code>可以访问的机器地址或者端口.</p><p>命令格式:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-p</span> server-SSH-PORT <span class="token punctuation">\\</span>
    <span class="token parameter variable">-R</span> server-IP:server-PORT:machine-IP:machine-PORT <span class="token punctuation">\\</span>
    user@server-IP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中:</p><ol><li>machine-IP和machine-PORT是client端访问时使用的地址和端口.</li><li>server-IP可以省略, 默认为127.0.0.1, 那么只有server自身可以访问. 如果指定server-IP的话任何人都可以通过server-IP:server-PORT来访问服务, 同时如果server要访问这个服务的话也需要使用server-IP:server-PORT的格式.</li></ol><p>参考:</p>`,6),u={href:"https://blog.csdn.net/linsanhua/article/details/17360369",target:"_blank",rel:"noopener noreferrer"};function _(b,P){const s=a("Mermaid"),l=a("ExternalLinkIcon");return t(),o("div",null,[p,v,n(s,{id:"mermaid-6",code:"eJxLL0osyFDwCeJSAILknMzUvBIFXV07heLUorLUIrAohAkWzS/JSC2Kzk1MzsjMS9UvyC8qiUXRqAdTwwUArSQbIA=="}),h,n(s,{id:"mermaid-40",code:"eJxLL0osyFDwCeLiTM7JTM0rUdDVtVMoTi0qSy1CEcovyUgtis5NTM7IzEvVL8gvKonl4oSoU9DVgyngAgADeRm7"}),m,e("ol",null,[e("li",null,[e("a",u,[r("使用ssh正向连接、反向连接、做socks代理的方法_ssh 正向代理_linsanhua的博客-CSDN博客"),n(l)])])])])}const T=c(d,[["render",_],["__file","SSH-Tunneling.html.vue"]]);export{T as default};
