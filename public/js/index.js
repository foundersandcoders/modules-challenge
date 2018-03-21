(function () {
  function handleErr(err) {
    var h1 = document.createElement('h1');
    h1.innerHTML = 'Server Error';
    document.querySelector('#repos').appendChild(h1);
  }

  function renderRepos(repos) {
    var view_capitalised = view.toUpperCase();
    var other_view = view === 'fac' ? 'dwyl' : 'fac';
    var other_view_capitalised = other_view.toUpperCase();

    var h1 = document.createElement('h1');
    h1.innerHTML = view_capitalised + ' Repositories';
    document.querySelector('#repos').appendChild(h1);

    var link = document.querySelector('#link');
    link.href = '/' + other_view;
    link.innerHTML = 'See ' + other_view_capitalised + '\'s repositories';

    repos.forEach(function (repo, i) {
      var h3 = document.createElement('h3');
      var a = document.createElement('a');
      h3.innerHTML = (i + 1) + '. ' + repo.name;
      a.href = repo.url;
      a.appendChild(h3);
      document.querySelector('#repos').appendChild(a);
    });
  }

  request.get('/api/repos/' + view, function (err, res) {
    if (err) {
      handleErr(err);
    } else {
      renderRepos(res);
    }
  });
})();
