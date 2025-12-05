// FILTERS
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove 'active' from all buttons
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    const posts = document.querySelectorAll('.card');

    posts.forEach(post => {
      if (filter === 'all' || post.dataset.filter === filter) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  });
});

// SEARCH
document.getElementById('searchInput').addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  const posts = document.querySelectorAll('.card');

  posts.forEach(post => {
    const title = post.querySelector('h3').textContent.toLowerCase();
    const desc = post.querySelector('p').textContent.toLowerCase();

    if (title.includes(term) || desc.includes(term)) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
});
