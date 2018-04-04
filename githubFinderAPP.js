//Search Input
const searchUser = document.getElementById('search-user')
const github = new GitHub;
const ui = new UI;

//Search Input Event Listener
searchUser.addEventListener('keyup', (event) => {
    //Get Input Text
    const userText = event.target.value; //Probably could have done =searchUser.value

    if (userText !== '') {
        //Make HTTP Call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //Show Alert Message
                    ui.showAlert('User Not Found', 'alert alert-danger');
                    ui.showProfile('');

                } else {
                    //Show Profile
                    ui.showProfile(data.profile)
                    ui.showRepos(data.repos)
                }
            })
    } else {
        //CLear Profile
        ui.clearProfile()
    }
})