const addFaculty = (name, desc) => {
    const faculty = document.querySelector('#collapseOne > * > *')
    const div = createCard()
    const card = div.children[0];

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body');

    const title = document.createElement('h5')
    title.classList.add('card-title')
    title.innerText = name;

    const description = document.createElement('p')
    description.classList.add('card-text')
    description.innerHTML = "Chairman<br>" + desc;

    cardBody.append(title, description);
    card.appendChild(cardBody);
    faculty.appendChild(div);
}

const addAlumni = (name, desc) => {
    const alumni = document.querySelector('#collapseTwo > * > *')
    const cardDiv = createCard()
    const card = cardDiv.children[0];

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body');

    const title = document.createElement('h5')
    title.classList.add('card-title')
    title.innerText = name;

    const description = document.createElement('p')
    description.classList.add('card-text')
    description.innerHTML = "Chairman<br>" + desc;

    cardBody.append(title, description);
    card.appendChild(cardBody);
    alumni.appendChild(cardDiv);
}

const addStudent = (name, team) => {
    const teams = document.querySelector('#collapseThree > * > *')
    let studentTeam = -1;
    switch (team) {
        case 'PL':
            studentTeam = teams.children[0];
            break;
        case 'EPS':
            studentTeam = teams.children[1];
            break;
        case 'ADCS':
            studentTeam = teams.children[2];
            break;
        case 'COM':
            studentTeam = teams.children[3];
            break;
        case 'ES':
            studentTeam = teams.children[4];
            break;
        case 'PR':
            studentTeam = teams.children[5];
            break;
        default:
            break;
    }

    if (studentTeam == -1) {
        console.log("Error: No team found for student");
        return;
    }

    const ul = studentTeam.querySelector(".card > ul");
    const item = document.createElement('li')
    item.classList.add('list-group-item')
    item.innerText = name;

    ul.appendChild(item);
}

const addExpert = (name) => {
    const expert = document.querySelector('#collapseFour > * > *')
    console.log(expert)

    const cardDiv = createCard();
    const card = cardDiv.children[0];

    const div = document.createElement('div');
    div.classList.add('card-header');
    div.innerText = name;

    card.appendChild(div);
    expert.appendChild(cardDiv);
}

const addSponsor = (name, details) => {
    const sponsor = document.querySelector('#collapseFive > * > *')
    const cardDiv = createCard();
    const card = cardDiv.children[0];

    const div = document.createElement('div');
    div.classList.add('card-header')
    div.innerText = name;

    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = details;

    ul.appendChild(li);
    card.append(div, ul);
    sponsor.appendChild(cardDiv);
}

const createCard = () => {
    const div = document.createElement('div')
    div.classList.add('col-lg-3')

    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('style', 'width:18rem;')
    div.appendChild(card)
    return div;
}
console.log(createCard())
addFaculty("Dr. Rafey Ahmad", "afhdoihasdofsdf");
addAlumni("Dr. Rafey Ahmad", "afhdoihasdofsdf");
addStudent("Mr. Rafey Ahmad", "ES")
addExpert("asdasddas")
addSponsor("Rafey Ahmad", "Deloitte aosifjoiasdf")
// addAlumni(card2);