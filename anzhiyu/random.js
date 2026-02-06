var posts=["2026/02/06/一元二次函数、方程和不等式 - 能力卷/","2026/02/06/集合与常用逻辑用语 - 能力卷 答案及解题过程/","2026/02/06/英语/","2026/02/06/1集合与常用逻辑用语-基础卷/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };