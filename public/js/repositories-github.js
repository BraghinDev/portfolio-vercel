async function getRepositories() {
    const profile_url = "https://api.github.com/users/braghinDev/repos";
    const respositories = await fetch(profile_url);
    const data = await respositories.json();
    addRepositories(data);
}

function addRepositories(data) {
    let content = '';
    for(repo of data) {
        content += `
        <div class="repository">
            <div class="description">
                <span class="repository-name">Repositório: ${repo.name}</span>
                <span class="repository-description">${repo.description}</span>
            </div>
            <a href="${repo.html_url}" target="_blank">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </div>`;
    }

    document.querySelector(".repositories-container").innerHTML = content;
}

getRepositories();