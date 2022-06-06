import{_ as e,o as t,c as n,e as a}from"./app.101810d4.js";const i={},r=a(`<p>\u5728\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D, \u4E00\u4E2A <strong>\u53CC\u5411\u94FE\u8868(doubly linked list)</strong> \u662F\u7531\u4E00\u7EC4\u79F0\u4E3A\u8282\u70B9\u7684\u987A\u5E8F\u94FE\u63A5\u8BB0\u5F55\u7EC4\u6210\u7684\u94FE\u63A5\u6570\u636E\u7ED3\u6784\u3002\u6BCF\u4E2A\u8282\u70B9\u5305\u542B\u4E24\u4E2A\u5B57\u6BB5\uFF0C\u79F0\u4E3A\u94FE\u63A5\uFF0C\u5B83\u4EEC\u662F\u5BF9\u8282\u70B9\u5E8F\u5217\u4E2D\u4E0A\u4E00\u4E2A\u8282\u70B9\u548C\u4E0B\u4E00\u4E2A\u8282\u70B9\u7684\u5F15\u7528\u3002\u5F00\u59CB\u8282\u70B9\u548C\u7ED3\u675F\u8282\u70B9\u7684\u4E0A\u4E00\u4E2A\u94FE\u63A5\u548C\u4E0B\u4E00\u4E2A\u94FE\u63A5\u5206\u522B\u6307\u5411\u67D0\u79CD\u7EC8\u6B62\u8282\u70B9\uFF0C\u901A\u5E38\u662F\u524D\u54E8\u8282\u70B9\u6216null\uFF0C\u4EE5\u65B9\u4FBF\u904D\u5386\u5217\u8868\u3002\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u524D\u54E8\u8282\u70B9\uFF0C\u5219\u5217\u8868\u901A\u8FC7\u524D\u54E8\u8282\u70B9\u5FAA\u73AF\u94FE\u63A5\u3002\u5B83\u53EF\u4EE5\u88AB\u6982\u5FF5\u5316\u4E3A\u4E24\u4E2A\u7531\u76F8\u540C\u6570\u636E\u9879\u7EC4\u6210\u7684\u5355\u94FE\u8868\uFF0C\u4F46\u987A\u5E8F\u76F8\u53CD\u3002</p><p><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg" alt="Doubly Linked List"></p><p>\u4E24\u4E2A\u8282\u70B9\u94FE\u63A5\u5141\u8BB8\u5728\u4EFB\u4E00\u65B9\u5411\u4E0A\u904D\u5386\u5217\u8868\u3002</p><p>\u5728\u53CC\u5411\u94FE\u8868\u4E2D\u8FDB\u884C\u6DFB\u52A0\u6216\u8005\u5220\u9664\u8282\u70B9\u65F6,\u9700\u505A\u7684\u94FE\u63A5\u66F4\u6539\u8981\u6BD4\u5355\u5411\u94FE\u8868\u590D\u6742\u5F97\u591A\u3002\u8FD9\u79CD\u64CD\u4F5C\u5728\u5355\u5411\u94FE\u8868\u4E2D\u66F4\u7B80\u5355\u9AD8\u6548,\u56E0\u4E3A\u4E0D\u9700\u8981\u5173\u6CE8\u4E00\u4E2A\u8282\u70B9\uFF08\u9664\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u4EE5\u5916\u7684\u8282\u70B9\uFF09\u7684\u4E24\u4E2A\u94FE\u63A5,\u800C\u53EA\u9700\u8981\u5173\u6CE8\u4E00\u4E2A\u94FE\u63A5\u5373\u53EF\u3002</p><h2 id="\u57FA\u7840\u64CD\u4F5C\u7684\u4F2A\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u64CD\u4F5C\u7684\u4F2A\u4EE3\u7801" aria-hidden="true">#</a> \u57FA\u7840\u64CD\u4F5C\u7684\u4F2A\u4EE3\u7801</h2><h3 id="\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165" aria-hidden="true">#</a> \u63D2\u5165</h3><div class="language-text ext-text"><pre class="language-text"><code>Add(value)
  Pre: value is the value to add to the list
  Post: value has been placed at the tail of the list
  n \u2190 node(value)
  if head != \xF8
    head \u2190 n
    tail \u2190 n
  else
    n.previous \u2190 tail
    tail.next \u2190 n
    tail \u2190 n
  end if
end Add
</code></pre></div><h3 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h3><div class="language-text ext-text"><pre class="language-text"><code>Remove(head, value)
  Pre: head is the head node in the list
       value is the value to remove from the list
  Post: value is removed from the list, true; otherwise false
  if head = \xF8
    return false
  end if
  if value = head.value
    if head = tail
      head \u2190 \xF8
      tail \u2190 \xF8
    else
      head \u2190 head.next
      head.previous \u2190 \xF8
    end if
    return true
  end if
  n \u2190 head.next
  while n != \xF8 and value !== n.value
    n \u2190 n.next
  end while
  if n = tail
    tail \u2190 tail.previous
    tail.next \u2190 \xF8
    return true
  else if n != \xF8
    n.previous.next \u2190 n.next
    n.next.previous \u2190 n.previous
    return true
  end if
  return false
end Remove
</code></pre></div><h3 id="\u53CD\u5411\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5411\u904D\u5386" aria-hidden="true">#</a> \u53CD\u5411\u904D\u5386</h3><div class="language-text ext-text"><pre class="language-text"><code>ReverseTraversal(tail)
  Pre: tail is the node of the list to traverse
  Post: the list has been traversed in reverse order
  n \u2190 tail
  while n != \xF8
    yield n.value
    n \u2190 n.previous
  end while
end Reverse Traversal
</code></pre></div><h2 id="\u590D\u6742\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u590D\u6742\u5EA6" aria-hidden="true">#</a> \u590D\u6742\u5EA6</h2><h2 id="\u65F6\u95F4\u590D\u6742\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u590D\u6742\u5EA6" aria-hidden="true">#</a> \u65F6\u95F4\u590D\u6742\u5EA6</h2><table><thead><tr><th style="text-align:center;">Access</th><th style="text-align:center;">Search</th><th style="text-align:center;">Insertion</th><th style="text-align:center;">Deletion</th></tr></thead><tbody><tr><td style="text-align:center;">O(n)</td><td style="text-align:center;">O(n)</td><td style="text-align:center;">O(1)</td><td style="text-align:center;">O(1)</td></tr></tbody></table><h3 id="\u7A7A\u95F4\u590D\u6742\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u95F4\u590D\u6742\u5EA6" aria-hidden="true">#</a> \u7A7A\u95F4\u590D\u6742\u5EA6</h3><p>O(n)</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><ul><li><a href="https://en.wikipedia.org/wiki/Doubly_linked_list" target="_blank" rel="noopener noreferrer">Wikipedia</a></li><li><a href="https://www.youtube.com/watch?v=JdQeNxWCguQ&amp;t=7s&amp;index=72&amp;list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8" target="_blank" rel="noopener noreferrer">YouTube</a></li></ul>`,18),d=[r];function l(s,h){return t(),n("div",null,d)}var u=e(i,[["render",l],["__file","index.html.vue"]]);export{u as default};
