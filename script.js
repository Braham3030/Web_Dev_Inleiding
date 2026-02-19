
// API Fetch

let url = "https://fdnd.directus.app/items/person"


async function fetchData() {
    try {
        const response = await fetch(url);

        if (!response.ok) throw new Error(`API request failed: ${response.status}`);

        const data = await response.json();

        return data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
console.log(fetchData());


// filter name

async function nameFilter() {
    const person = await fetchData();

    const allPerson = person.map(person => person.name);
    console.log(allPerson);

    const personWithName = person.filter(person => person.name != null && person.name !== '');
    console.log(personWithName);
}

nameFilter();


// random naming

async function randomName() {
    const person = await fetchData();

    const activePerson = person.filter(person => person.name && person.name.trim() !== '');
    
    if (activePerson.length === 0) return;

    const randomIndex = Math.floor(Math.random() * activePerson.length);

    const randomPerson = activePerson[randomIndex];

    const nameElement = document.querySelector('.name');
    const nicknameElement = document.querySelector('.nickname');
    const bioElement = document.querySelector('.bio');
    const birthDateElement = document.querySelector('.birthDate');
    const favEmojiElement = document.querySelector('.favEmoji');

    if (nameElement) {
        nameElement.textContent = randomPerson.name
    }
    console.log(randomPerson.name);

    if (nicknameElement) {
        nicknameElement.textContent = "Nickname: " + (randomPerson.nickname || 'No nickname available.');
    }

    if (bioElement) {
        bioElement.textContent = "Bio: " + (randomPerson.bio || 'No bio available.');
    }

    if (birthDateElement) {
        birthDateElement.textContent = "Birthday: " + (randomPerson.birthdate || 'Birth date not available.');
    }

    if (favEmojiElement) {
        favEmojiElement.textContent = "Favorite Emoji: " + (randomPerson.fav_emoji || 'No favorite emoji available.');
    }
}

randomName();







// Compact header mode on scroll effect

    const header = document.querySelector('header');

    let lastY = 0;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (scrollY <= 0 || scrollY < 20) {
            header.classList.remove('compact');
        } else if (scrollY > lastY) {
            header.classList.add('compact');
        }
        lastY = scrollY;
    });







// Mouse glow effect

        const glow = document.querySelector('.mouse-glow');
        const card = document.querySelector('.glass-card');



    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';


        if (card) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }
    })
