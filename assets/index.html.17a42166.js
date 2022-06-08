import{_ as e,o as n,c as t,e as a}from"./app.1d54f927.js";var r="/web/img/in-post/data-structures/Singly-linked-list.svg";const i={},d=a('<p>\u5728\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D, \u4E00\u4E2A <strong>\u94FE\u8868</strong> \u662F\u6570\u636E\u5143\u7D20\u7684\u7EBF\u6027\u96C6\u5408, \u5143\u7D20\u7684\u7EBF\u6027\u987A\u5E8F\u4E0D\u662F\u7531\u5B83\u4EEC\u5728\u5185\u5B58\u4E2D\u7684\u7269\u7406\u4F4D\u7F6E\u7ED9\u51FA\u7684\u3002 \u76F8\u53CD, \u6BCF\u4E2A\u5143\u7D20\u6307\u5411\u4E0B\u4E00\u4E2A\u5143\u7D20\u3002\u5B83\u662F\u7531\u4E00\u7EC4\u8282\u70B9\u7EC4\u6210\u7684\u6570\u636E\u7ED3\u6784,\u8FD9\u4E9B\u8282\u70B9\u4E00\u8D77,\u8868\u793A\u5E8F\u5217\u3002</p><p>\u5728\u6700\u7B80\u5355\u7684\u5F62\u5F0F\u4E0B\uFF0C\u6BCF\u4E2A\u8282\u70B9\u7531\u6570\u636E\u548C\u5230\u5E8F\u5217\u4E2D\u4E0B\u4E00\u4E2A\u8282\u70B9\u7684\u5F15\u7528(\u6362\u53E5\u8BDD\u8BF4\uFF0C\u94FE\u63A5)\u7EC4\u6210\u3002\u8FD9\u79CD\u7ED3\u6784\u5141\u8BB8\u5728\u8FED\u4EE3\u671F\u95F4\u6709\u6548\u5730\u4ECE\u5E8F\u5217\u4E2D\u7684\u4EFB\u4F55\u4F4D\u7F6E\u63D2\u5165\u6216\u5220\u9664\u5143\u7D20\u3002</p><p>\u66F4\u590D\u6742\u7684\u53D8\u4F53\u6DFB\u52A0\u989D\u5916\u7684\u94FE\u63A5\uFF0C\u5141\u8BB8\u6709\u6548\u5730\u63D2\u5165\u6216\u5220\u9664\u4EFB\u610F\u5143\u7D20\u5F15\u7528\u3002\u94FE\u8868\u7684\u4E00\u4E2A\u7F3A\u70B9\u662F\u8BBF\u95EE\u65F6\u95F4\u662F\u7EBF\u6027\u7684(\u800C\u4E14\u96BE\u4EE5\u7BA1\u9053\u5316)\u3002</p><p>\u66F4\u5FEB\u7684\u8BBF\u95EE\uFF0C\u5982\u968F\u673A\u8BBF\u95EE\uFF0C\u662F\u4E0D\u53EF\u884C\u7684\u3002\u4E0E\u94FE\u8868\u76F8\u6BD4\uFF0C\u6570\u7EC4\u5177\u6709\u66F4\u597D\u7684\u7F13\u5B58\u4F4D\u7F6E\u3002</p><p><img src="'+r+`" alt="Linked List"></p><h2 id="\u57FA\u672C\u64CD\u4F5C\u7684\u4F2A\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u64CD\u4F5C\u7684\u4F2A\u4EE3\u7801" aria-hidden="true">#</a> \u57FA\u672C\u64CD\u4F5C\u7684\u4F2A\u4EE3\u7801</h2><h3 id="\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165" aria-hidden="true">#</a> \u63D2\u5165</h3><div class="language-text ext-text"><pre class="language-text"><code>Add(value)
  Pre: value is the value to add to the list
  Post: value has been placed at the tail of the list
  n \u2190 node(value)
  if head = \xF8
    head \u2190 n
    tail \u2190 n
  else
    tail.next \u2190 n
    tail \u2190 n
  end if
end Add
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>Prepend(value)
 Pre: value is the value to add to the list
 Post: value has been placed at the head of the list
 n \u2190 node(value)
 n.next \u2190 head
 head \u2190 n
 if tail = \xF8
   tail \u2190 n
 end
end Prepend
</code></pre></div><h3 id="\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u641C\u7D22" aria-hidden="true">#</a> \u641C\u7D22</h3><div class="language-text ext-text"><pre class="language-text"><code>Contains(head, value)
  Pre: head is the head node in the list
       value is the value to search for
  Post: the item is either in the linked list, true; otherwise false
  n \u2190 head
  while n != \xF8 and n.value != value
    n \u2190 n.next
  end while
  if n = \xF8
    return false
  end if
  return true
end Contains
</code></pre></div><h3 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h3><div class="language-text ext-text"><pre class="language-text"><code>Remove(head, value)
  Pre: head is the head node in the list
       value is the value to remove from the list
  Post: value is removed from the list, true, otherwise false
  if head = \xF8
    return false
  end if
  n \u2190 head
  if n.value = value
    if head = tail
      head \u2190 \xF8
      tail \u2190 \xF8
    else
      head \u2190 head.next
    end if
    return true
  end if
  while n.next != \xF8 and n.next.value != value
    n \u2190 n.next
  end while
  if n.next != \xF8
    if n.next = tail
      tail \u2190 n
    end if
    n.next \u2190 n.next.next
    return true
  end if
  return false
end Remove
</code></pre></div><h3 id="\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386" aria-hidden="true">#</a> \u904D\u5386</h3><div class="language-text ext-text"><pre class="language-text"><code>Traverse(head)
  Pre: head is the head node in the list
  Post: the items in the list have been traversed
  n \u2190 head
  while n != \xF8
    yield n.value
    n \u2190 n.next
  end while
end Traverse
</code></pre></div><h3 id="\u53CD\u5411\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5411\u904D\u5386" aria-hidden="true">#</a> \u53CD\u5411\u904D\u5386</h3><div class="language-text ext-text"><pre class="language-text"><code>ReverseTraversal(head, tail)
  Pre: head and tail belong to the same list
  Post: the items in the list have been traversed in reverse order
  if tail != \xF8
    curr \u2190 tail
    while curr != head
      prev \u2190 head
      while prev.next != curr
        prev \u2190 prev.next
      end while
      yield curr.value
      curr \u2190 prev
    end while
   yield curr.value
  end if
end ReverseTraversal
</code></pre></div><h2 id="\u590D\u6742\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u590D\u6742\u5EA6" aria-hidden="true">#</a> \u590D\u6742\u5EA6</h2><h3 id="\u65F6\u95F4\u590D\u6742\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u590D\u6742\u5EA6" aria-hidden="true">#</a> \u65F6\u95F4\u590D\u6742\u5EA6</h3><table><thead><tr><th style="text-align:center;">Access</th><th style="text-align:center;">Search</th><th style="text-align:center;">Insertion</th><th style="text-align:center;">Deletion</th></tr></thead><tbody><tr><td style="text-align:center;">O(n)</td><td style="text-align:center;">O(n)</td><td style="text-align:center;">O(1)</td><td style="text-align:center;">O(1)</td></tr></tbody></table><h3 id="\u7A7A\u95F4\u590D\u6742\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u95F4\u590D\u6742\u5EA6" aria-hidden="true">#</a> \u7A7A\u95F4\u590D\u6742\u5EA6</h3><p>O(n)</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><ul><li><a href="https://en.wikipedia.org/wiki/Linked_list" target="_blank" rel="noopener noreferrer">Wikipedia</a></li><li><a href="https://www.youtube.com/watch?v=njTh_OwMljA&amp;index=2&amp;t=1s&amp;list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8" target="_blank" rel="noopener noreferrer">YouTube</a></li></ul>`,24),l=[d];function h(s,o){return n(),t("div",null,l)}var u=e(i,[["render",h],["__file","index.html.vue"]]);export{u as default};
