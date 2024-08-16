document.addEventListener('DOMContentLoaded', function() {
  const postList = document.getElementById('post-list');
 if (postList) {
    const posts = [
      { title: 'My First Blog Post', url: 'post.html' },
      { title: 'Another Post', url: 'post.html' }
        ];

    posts.forEach(post => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = post.url;
      link.textContent = post.title;
      listItem.appendChild(link);
      postList.appendChild(listItem);
    });
  } else {
    console.error('ID "post-list" wala element nahi mil raha.');
  }
});