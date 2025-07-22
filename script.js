document.addEventListener('DOMContentLoaded', function() {
  const username = 'ebidoul';
  const projectsContainer = document.querySelector('#projects-container');

  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
      projectsContainer.innerHTML = ''; // Clear placeholder cards
      repos.forEach(repo => {
        const projectCard = `
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">${repo.name}</h5>
                <p class="card-text">${repo.description || 'No description available.'}</p>
                <a href="${repo.html_url}" class="btn btn-primary" target="_blank">View on GitHub</a>
              </div>
            </div>
          </div>
        `;
        projectsContainer.innerHTML += projectCard;
      });
    })
    .catch(error => {
      console.error('Error fetching GitHub repositories:', error);
      projectsContainer.innerHTML = '<p>Could not load projects at this time.</p>';
    });
});