import{_ as e,o as t,c as n,e as o}from"./app.6b320b72.js";const r={},a=o(`<p>Given a positive integer, write a function to find if it is a power of two or not.</p><p><strong>Naive solution</strong></p><p>In naive solution we just keep dividing the number by two unless the number becomes <code>1</code> and every time we do so, we check that remainder after division is always <code>0</code>. Otherwise, the number can&#39;t be a power of two.</p><p><strong>Bitwise solution</strong></p><p>Powers of two in binary form always have just one bit set. The only exception is with a signed integer (e.g. an 8-bit signed integer with a value of -128 looks like: <code>10000000</code>)</p><div class="language-text ext-text"><pre class="language-text"><code>1: 0001
2: 0010
4: 0100
8: 1000
</code></pre></div><p>So after checking that the number is greater than zero, we can use a bitwise hack to test that one and only one bit is set.</p><div class="language-text ext-text"><pre class="language-text"><code>number &amp; (number - 1)
</code></pre></div><p>For example for number <code>8</code> that operations will look like:</p><div class="language-text ext-text"><pre class="language-text"><code>  1000
- 0001
  ----
  0111

  1000
&amp; 0111
  ----
  0000
</code></pre></div><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2><ul><li><a href="https://www.geeksforgeeks.org/program-to-find-whether-a-no-is-power-of-two/" target="_blank" rel="noopener noreferrer">GeeksForGeeks</a></li><li><a href="http://www.graphics.stanford.edu/~seander/bithacks.html#DetermineIfPowerOf2" target="_blank" rel="noopener noreferrer">Bitwise Solution on Stanford</a></li><li><a href="https://www.youtube.com/watch?v=S9LJknZTyos&amp;t=0s&amp;list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&amp;index=66" target="_blank" rel="noopener noreferrer">Binary number subtraction on YouTube</a></li></ul>`,12),i=[a];function s(c,l){return t(),n("div",null,i)}var p=e(r,[["render",s],["__file","index.html.vue"]]);export{p as default};
