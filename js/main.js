import { app } from './data.js';
import { getFirestore, collection, doc, setDoc, getDocs } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js'

const PROJECT_IN_CHARGE = "Prof. Ekram Khan";
const PROJECT_MENTOR = "Mr. Faraz Ahmad";

const firebaseConfig = {
    apiKey: "AIzaSyB2O-hYm_kEZpdZFdMIhpSuMKKBRZ_i_rU",
    authDomain: "ssamusat-dfc2c.firebaseapp.com",
    projectId: "ssamusat-dfc2c",
    storageBucket: "ssamusat-dfc2c.appspot.com",
    messagingSenderId: "395159965984",
    appId: "1:395159965984:web:e63fbcf5f8c5ae9fc88745"
};

console.log(app)
const db = getFirestore(app);


const faculty = document.querySelector('#collapseOne > * > *')
faculty.innerHTML = "";

const alumni = document.querySelector('#collapseTwo > * > *')
alumni.innerHTML = "";

const teams = document.querySelector('#collapseThree > * > *')
Array.from(teams.children).forEach((child) => {
    const ul = child.querySelector(".card > ul")
    ul.innerHTML = "";
});


const expert = document.querySelector('#collapseFour > * > *')
expert.innerHTML = "";

const sponsor = document.querySelector('#collapseFive > * > *')
sponsor.innerHTML = "";

const addFaculty = (name, designation, dept) => {
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
    description.innerHTML = designation + "<br>";
    if (dept) {
        description.innerHTML += "Dept. of " + dept + " Engg., ZHCET";
    } else {
        description.innerHTML += "Zakir Husain College of Engg. & Technology";
    }

    if (name === PROJECT_IN_CHARGE) {
        description.innerHTML += "<br><b>Project in-charge</b>"
    }

    cardBody.append(title, description);
    card.appendChild(cardBody);
    faculty.appendChild(div);
}

const addAlumni = (name, designation, institute) => {
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
    description.innerHTML = name + "<br>" + designation + "<br>" + institute;

    if (name === PROJECT_MENTOR) {
        description.innerHTML += "<br>" + "<b>Project Mentor</b>"
    }

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
    // console.log(expert)

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

const loadFaculty = async () => {
    const querySnapshot = await getDocs(collection(db, "faculty"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const data = doc.data();
        console.log(data)
        addFaculty(data.Name, data.Designation, data.Department)
    });
}

const loadAlumni = async () => {
    const querySnapshot = await getDocs(collection(db, "alumni"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data();
        console.log(data)
        addAlumni(data.Name, data.Designation, data.Institution)
    });
}

const loadStudents = async () => {
    const querySnapshot = await getDocs(collection(db, "students"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data();
        console.log(data)
        addStudent(data.Name, data.Team)
    });
}

const loadExperts = async () => {
    const querySnapshot = await getDocs(collection(db, "experts"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data();
        console.log(data)
        addExpert(data.Name)
    });
}

const loadSponsors = async () => {
    const querySnapshot = await getDocs(collection(db, "sponsors"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data();
        console.log(data)
        addSponsor(data.Name, data.Details);
    });
}
loadAlumni()
loadFaculty()
loadStudents();
loadExperts()
loadSponsors()
// console.log(createCard())
// addFaculty("Dr. Rafey Ahmad", "afhdoihasdofsdf");
// addAlumni("Dr. Rafey Ahmad", "afhdoihasdofsdf");
// addStudent("Mr. Rafey Ahmad", "ES")
// addExpert("asdasddas")
// addSponsor("Rafey Ahmad", "Deloitte aosifjoiasdf")
// addAlumni(card2);