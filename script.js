
// API Fetch

let url = "https://fdnd.directus.app/items/person"


async function fetchData() {

    const savedData = sessionStorage.getItem('personData');

    if (savedData) {
        console.log('Data loaded from localStorage');
        return JSON.parse(savedData);
    }
    try {
        console.log('Fetching data from API...');
        const response = await fetch(url);

        if (!response.ok) throw new Error(`API request failed: ${response.status}`);

        const result = await response.json();
        const person = result.data;

        sessionStorage.setItem('personData', JSON.stringify(person));

        return person;
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
    const favColorElement = document.querySelector('.favColor');

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

    if (favColorElement) {
        const favouriteColorElement = randomPerson.fav_color;
        favColorElement.textContent = "Favorite Color: " + (randomPerson.fav_color || 'No favorite color available.');

        favColorElement.style.backgroundColor = favouriteColorElement;

        favColorElement.style.textShadow = `0 0 100px ${favouriteColorElement}`;
    } else {
        favColorElement.style.backgroundColor = 'transparent'
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

    // Dark mode toggle
    
    function toggleDarkMode() {
        let element = document.body;
        element.classList.toggle("dark-mode");
    }

    // Font size toggle

    function toggleFontSize() {
        let element = document.body;
        element.classList.toggle("large-font");
    }

    // Dyslexia friendly toggle

    function toggleDyslexiaFriendly() {
        let element = document.body;
        element.classList.toggle("dyslexia");
    }






    // article onClick event effect

    const article = document.querySelector('article');

    if (article) {
        article.addEventListener('mouseenter', () => {
            glow.classList.add('hovered');
        });
        article.addEventListener('mouseleave', () => {
            glow.classList.remove('hovered');
        });
        article.addEventListener('click', () => {
            article.classList.toggle('clicked');
        });
    }

    const randomProfile = document.querySelector('.randomProfile');

    if (randomProfile) {
        randomProfile.addEventListener('mouseenter', () => {
            glow.classList.add('hovered');
        });
        randomProfile.addEventListener('mouseleave', () => {
            glow.classList.remove('hovered');
        });
        randomProfile.addEventListener('click', () => {
            randomProfile.classList.toggle('clicked');
        });
    }

    const hamburgerMenus = document.querySelector('.hamburgerMenu');

    if (hamburgerMenus) {
        hamburgerMenus.addEventListener('mouseenter', () => {
            glow.classList.add('hovered');
        });
        hamburgerMenus.addEventListener('mouseleave', () => {
            glow.classList.remove('hovered');
        });
    }

    const headerElement = document.querySelector('header');

    if (headerElement) {
        headerElement.addEventListener('mouseenter', () => {
            glow.classList.add('hovered');
        });
        headerElement.addEventListener('mouseleave', () => {
            glow.classList.remove('hovered');
        });
    }





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
