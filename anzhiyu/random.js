var posts=["2026/08/29/开学时间/","2026/05/11/化学会考操作视频/"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };