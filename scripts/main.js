const userName = localStorage.getItem('userName');

// redirect the user if no account
function checkAccount() {
    if (!userName) {
        document.getElementById('main').innerHTML = '<h1 class="heading--big">Please create a <b>local Account</b></h1><a href="/new.html">Create a new Account</a>';
    }
    document.getElementById('heading__user-name').innerText = userName;
}

let routineList = JSON.parse(localStorage.getItem('routineList')) || [];

class Routine {
    // unique id that doesn't exist in other Routines
    id;
    title;
    description;
    notificationTime;

    constructor(title = "untiteld", description = undefined, notificationTime = '12:12') {
        this.id = parseInt(localStorage.getItem('uniqueId')) || 0;
        this.title = title;
        this.description = description;
        this.notificationTime = notificationTime;
        // increament uniqueId because id has been used in this Routine
        localStorage.setItem('uniqueId', (this.id + 1) + '');
    }
}

const CRUD = {
    create: (title, description, notificationTime) => {
        routineList.push(new Routine(title, description, notificationTime));
        localStorage.setItem('routineList', JSON.stringify(routineList));
    }
}

function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
    }
    else {
        document.body.classList.add('dark-mode');
    }
}

function displayRoutineList() {
    let html = '';
    routineList.forEach(routine => {
        html += `<div class="routine-card">
                <div class="routine-card__top flex-row">
                    <h3 class="routine-card__title">${routine.title}</h3>
                    <input type="checkbox" class="routine-card__check">
                </div>
                <div class="routine-card__description">${(routine.description) ? routine.description : '<i>No description</u>'}</div>
            </div>`;
    });
    document.querySelector('.routines-container').innerHTML = html;
}