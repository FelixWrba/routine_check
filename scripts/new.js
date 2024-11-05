const main = document.getElementById('main');

if (userName) {
    alert('You already have a local account.');
    location.href = '/';
}

function createUser() {
    const userName = document.getElementById('name-input').value;
    if (userName == '') {
        alert('Name cannot be empty');
        return;
    }
    localStorage.setItem('userName', userName);
    changeMain(`<h1 class="heading--big">Create your first <strong>Routine</strong></h1>
        <div class="spacer--big"></div>
        <form action="javascript:createFirstRoutine();" class="flex-column" autocomplete="off">
            <label for="title-input" class="input__label">Title</label>
            <input type="text" id="title-input" name="title" class="input">
            <label for="description-input" class="input__label">Description</label>
            <input type="text" id="description-input" name="description" class="input">
            <label for="notify-date-input" class="input__label">Notify me at ... every day!</label>
            <input type="time" id="notify-date-input" name="notify-date" class="input">
            <button type="submit" class="btn btn--narrow">Create</button>
            <div class="spacer--big"></div>
            <a href="/" class="">Cancel</a>
        </form>`);
}

// adds fade animation to main and replaces its content
function changeMain(html) {
    main.classList.add('main--animation');
    setTimeout(() => main.innerHTML = html, 500);
    setTimeout(() => main.classList.remove('main--animation'), 1100);
}

function createFirstRoutine() {
    CRUD.create();
    location.href= '/';
}