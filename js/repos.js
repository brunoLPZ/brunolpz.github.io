//https://api.github.com/users/brunoLPZ/repos

window.onload = () => {
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let responseJsonObj = JSON.parse(this.responseText);
      responseJsonObj.forEach((repo) => {
        let codeCard = document.createElement('div');
        codeCard.classList.add('code-card');
        codeCard.classList.add('animate-appear');
        codeCard.innerHTML = `<div class="code-card-title">
                                            <a href="${
                                              repo.html_url
                                            }" target="_blank">${repo.name}</a>
                                        </div>
                                        <div class="code-card-description">
                                            ${
                                              repo.description != null
                                                ? repo.description
                                                : ''
                                            }
                                        </div>
                                        <div class="code-card-metrics">
                                            <div class="metric">
                                                <span class="material-icons">
                                                    star
                                                </span>
                                                <span>${
                                                  repo.stargazers_count
                                                }</span>
                                            </div>
                                            <div class="metric">
                                                <span class="material-icons">
                                                    bug_report
                                                </span>
                                                <span>${repo.open_issues}</span>
                                            </div>
                                            <div class="metric">
                                                <span class="material-icons">
                                                    account_tree
                                                </span>
                                                <span>${repo.forks}</span>
                                            </div>
                                            <div class="metric">
                                                <span class="material-icons">
                                                    code
                                                </span>
                                                <span>${
                                                  repo.language != null
                                                    ? repo.language
                                                    : 'unknown'
                                                }</span>
                                            </div>                   
                                        </div>`;
        document.getElementById('code').appendChild(codeCard);
        console.log(repo);
      });
    }
  };

  xmlhttp.open('GET', 'https://api.github.com/users/brunoLPZ/repos', true);
  xmlhttp.send();
};
