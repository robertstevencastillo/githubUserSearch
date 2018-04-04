class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }

    //SHOW PROFILE PROTOTYPE
    showProfile(user) {
        console.log(user)
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <p>Name: ${user.name}</p>
            <p>Email Address: ${user.email}</p>
            <p>Github Username:${user.login}</p>
            <p>BIO: ${user.bio}</p>
            <div class="row">

                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>

                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos:${user.public_repos}</span>

                    <span class="badge badge-seconday">Public Gists:${user.public_gists}</span>

                    <span class="badge badge-success">Followers:${user.followers}</span>

                    <span class="badge badge-info">Following:${user.following}</span>
                    <br><br>
                    
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Most Recent Repos</h3>
        <div id="repos"></div>
        `;
    } //END SHOW PROFILE PROTOTYPE/METHOD

    //Shower REPOS PROTOTYPE
    showRepos(repos) {
        let output = '';

        repos.forEach(function (repo) {
            output += `
            <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>    

                <div class="col-md-6">
                    <span class="badge badge-primary">Stars:${repo.stargazers_count}</span>

                    <span class="badge badge-seconday">Watchers:${repo.watchers_count}</span>

                    <span class="badge badge-success">Forks:${repo.forks_count}</span>
                </div>   
            
            </div>
            </div>
            `
        }); //End ForEach
        document.getElementById('repos').innerHTML = output;
    } //END SHOW REPOS PROTOTYPE

    //SHOW ALERT PROTOTYPE
    showAlert(message, className) {
        //Clear Any Remaining ALert MEssages
        this.clearAlert();
        //Create Div
        const div = document.createElement('div')
        //Add Class
        div.className = className;
        //Add Text
        div.appendChild(document.createTextNode(message));
        //Get Parent To Insert this div
        const container = document.querySelector('.search-container');
        //Get Search Box
        const search = document.querySelector('.search')
        //Insert Alert
        container.insertBefore(div, search);

        //Timeout After 2 seconds
        setTimeout(() => {
            this.clearAlert()
        }, 3000);
    } //END SHOW ALERT PROTOTYPE

    //CLEAR ALERT PROTOTYPE
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    } //END CLEAR ALERT PROTOTYPE

    //CLEAR PROFILE PROTOTYPE
    clearProfile() {
        this.profile.innerHTML = '';
    } //END CLEAR PROFILE PROTOTYPE/METHOD

} //END UI CLASS

/*Remember ES6 Classes and Methods are the same as Objects and Prototypes because under the hood, a class is an object, and class methods are prototypes */