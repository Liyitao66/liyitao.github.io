var posts=["2017/01/23/这是一篇新的博文/","2026/02/05/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };