class GitHub {
    constructor() {
        this.client_id = '1305192ea1fa29d9894a';
        this.client_secret = '2dbce4aea98d20179679fed6256308ae6eadfe14'
        this.repo_count = 5;
        this.repo_sort = 'created: asc';
    }

    async getUser(user) {
        //Get User Profile - We are adding a query string as well
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        //Get User Repos - We are addoing a query string as well
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profileData = await profileResponse.json();
        console.log(profileData);
        const repoData = await repoResponse.json();

        console.log(profileData);

        return {
            profile: profileData,
            repos: repoData
        } //End Return
    } //End Get user prototype/method
}