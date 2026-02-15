
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
