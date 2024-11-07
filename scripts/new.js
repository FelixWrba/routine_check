const main = document.getElementById('main');

if (userName) {
    changeMain(`<h1 class="heading--big">You alredy have a <b>local Account</b></h1><a href="/">Go to account <i>${userName}</i></a>`);
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
            <input type="text" id="title-input" name="title" class="input" required>
            <label for="description-input" class="input__label">Description (optional)</label>
            <input type="text" id="description-input" name="description" class="input">
            <label for="notify-date-input" class="input__label">Notify me at ... every day!</label>
            <input type="time" id="notify-date-input" name="notify-date" class="input" required>
            <button type="submit" class="btn btn--narrow">Create</button>
            <div class="spacer--big"></div>
            <a href="/">Cancel</a>
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
    location.href = '/';
}