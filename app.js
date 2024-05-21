const routes = {
    '/': '/pages/main.html',
    '/relativeTables': '/pages/relativeTables.html',
    '/wiki': '/pages/wiki.html'
  };
  
  function router() {
    const path = window.location.hash.slice(1) || '/';
    const route = routes[path];
    fetch(route)
      .then(response => response.text())
      .then(html => {
        document.getElementById('app').innerHTML = html;
      })
      .catch(err => console.error('Failed to fetch page:', err));
  }
  
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
  