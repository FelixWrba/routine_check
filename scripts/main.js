const userName = localStorage.getItem('userName');

// redirect the user if no account
function checkAccount() {
    if (!userName) {
        document.getElementById('main').innerHTML = '<h1 class="heading--big">Please create a <b>local Account</b></h1><a href="/new.html">Create a new Account</a>';
    }
    document.getElementById('heading__user-name').innerText = userName;
}

const CRUD = {
    create: () => { console.log('Routine created!') }
}