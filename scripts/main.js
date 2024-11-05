const userName = localStorage.getItem('userName');

// redirect the user if no account
function checkAccount() {
    if (!userName) {
        alert('Please create new local User');
        location.href = '/new.html';
        return;
    }
    document.getElementById('heading__user-name').innerText = userName;
}

const CRUD = {
    create: () => {console.log('Routine created!')}
}