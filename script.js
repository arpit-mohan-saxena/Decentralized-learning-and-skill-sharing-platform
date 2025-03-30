// script.js

// Dynamic Course Cards
const courseGrid = document.querySelector('.course-grid');

const courses = [
    { title: 'Blockchain Basics', instructor: 'John Doe', rating: 4.5 },
    { title: 'AI for Beginners', instructor: 'Jane Smith', rating: 4.7 },
    { title: 'Web Development', instructor: 'Alice Johnson', rating: 4.8 },
    { title: 'Data Science', instructor: 'Bob Brown', rating: 4.6 },
];

courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');
    courseCard.innerHTML = `
        <h3>${course.title}</h3>
        <p>Instructor: ${course.instructor}</p>
        <p>Rating: ${course.rating}</p>
    `;
    courseGrid.appendChild(courseCard);
});

// Dynamic Community Cards
const communityGrid = document.querySelector('.community-grid');

const communities = [
    { name: 'Blockchain Enthusiasts', members: 1200 },
    { name: 'AI Innovators', members: 1500 },
    { name: 'Web Dev Wizards', members: 1800 },
    { name: 'Data Science Geeks', members: 2000 },
];

communities.forEach(community => {
    const communityCard = document.createElement('div');
    communityCard.classList.add('community-card');
    communityCard.innerHTML = `
        <h3>${community.name}</h3>
        <p>Members: ${community.members}</p>
    ` ;   
    communityGrid.appendChild(communityCard);
});

// Search Functionality
const searchBar = document.querySelector('.search-bar input');
searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});