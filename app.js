const teamData = [
    { department: "Leadership", name: "Nicholas Kelly", role: "Director of School and Classroom Support", desc: "Provides overall leadership, ensuring coordinated, responsive, and equity-focused support." },
    { department: "Leadership", name: "Nicole Mager", role: "Divisional Principal (Instructional & Indigenous Education)", desc: "Leads instructional and Indigenous education supports to advance culturally responsive learning." },
    { department: "Leadership", name: "Megan Vankoughnett", role: "Divisional Principal (Clinical & Student Services)", desc: "Provides leadership for clinical and student services, supporting inclusive learning environments." },
    { department: "Leadership", name: "Lisa Tymchuk", role: "Assistant Director, Clinical Services", desc: "Supports delivery of clinical services, coordinating interdisciplinary supports for students." },
    { department: "Leadership", name: "Kelsey Lenaghan", role: "Divisional Indigenous Leader", desc: "Leads Indigenous education and intercultural understandings to embed Indigenous perspectives." },
    
    { department: "Instructional Support", name: "Kristyn Artibise", role: "Instructional Support Teacher (Numeracy)", desc: "Supports numeracy instruction through data-informed practices and collaborative problem solving." },
    { department: "Instructional Support", name: "Kristen McDowell", role: "Instructional Support Teacher (Literacy)", desc: "Partners to strengthen literacy instruction using structured, evidence-informed approaches." },
    { department: "Instructional Support", name: "Geneviève Shyiak", role: "Instructional Support Teacher (Literacy)", desc: "Enhances literacy learning and supports teachers in using data to inform instruction." },
    
    { department: "Student Support Services", name: "Kerri Bush", role: "Instructional Support / Student Services", desc: "Creates inclusive learning environments, enhancing student well-being and engagement." },
    { department: "Student Support Services", name: "Rose Pagtakhan", role: "Instructional Support / Student Services", desc: "Specializes in supporting multilingual learners with inclusive, language-rich instruction." },
    
    { department: "Indigenous Education", name: "Sean Oliver", role: "Indigenous Education", desc: "Supports schools through land-based learning, cultural teachings, and action planning." },
    { department: "Indigenous Education", name: "Rose Bird", role: "Indigenous Education", desc: "Partners to support Indigenous language, culture, identity, and action planning." },
    { department: "Indigenous Education", name: "Judith Saunders-McKay", role: "Indigenous Education", desc: "Supports Indigenous education through language, cultural learning, and relationship-building." },
    { department: "Indigenous Education", name: "Sam Flamand", role: "Indigenous Education", desc: "Supports Indigenous language, cultural learning, and culturally responsive practices." },
    { department: "Indigenous Education", name: "Trish Wilson", role: "Indigenous Education", desc: "Supports cultural programming, relationship-building, and inclusive school environments." },
    { department: "Indigenous Education", name: "Tammy Bruce", role: "Community Liaison – Indigenous Academic Support", desc: "Connects students, families, and schools to strengthen relationships and well-being." },
    
    { department: "Indigenous Language Team", name: "Alice McKay", role: "Ojibwe Teacher", desc: "Teaches Ojibwe language, building strong connections to culture and identity." },
    { department: "Indigenous Language Team", name: "Courtney Pranteau", role: "Cree Teacher", desc: "Teaches Cree language to build confidence, connection, and cultural understanding." },
    { department: "Indigenous Language Team", name: "Maxine Lavitt", role: "Michif Instructor", desc: "Teaches Michif, supporting language revitalization and Métis cultural connection." },
    { department: "Indigenous Language Team", name: "Cub Spring", role: "Ojibwe Instructor", desc: "Supports students in learning Ojibwe language and fostering community connection." },
    { department: "Indigenous Language Team", name: "Rhea Paul", role: "Ojibwe Instructor", desc: "Helps students develop communication skills and cultural understanding in Ojibwe." },
    { department: "Indigenous Language Team", name: "Alyssa Guimond", role: "Ojibwe Instructor", desc: "Supports engaging and responsive Ojibwe language development." },
    { department: "Indigenous Language Team", name: "Hailey McKay", role: "Cree Instructor", desc: "Supports Cree language learning, cultural understanding, and identity." },
    { department: "Indigenous Language Team", name: "Destanee Ducharme", role: "Cree Instructor", desc: "Supports Cree language instruction to strengthen understanding of culture and community." },
    { department: "Indigenous Language Team", name: "Rose McKay", role: "Cree Instructor", desc: "Supports Cree language learning through relationship and storytelling." },
    
    { department: "Clinical Services", name: "Robert George", role: "Psychologist", desc: "Supports schools through assessment, consultation, and collaborative problem solving." },
    { department: "Clinical Services", name: "Travis Hoare", role: "Occupational Therapist", desc: "Supports self-regulation, independence, and participation in learning." },
    { department: "Clinical Services", name: "Karla Guiterrez", role: "Speech Language Pathologist", desc: "Strengthens communication, language development, and literacy foundations." },
    { department: "Clinical Services", name: "Kim Mackey", role: "Social Worker", desc: "Supports social-emotional well-being, mental health, and belonging." },
    
    { department: "Specialized Supports", name: "Kathy Atkin", role: "Divisional Teacher Librarian", desc: "Fosters a love of reading and inquiry in welcoming, literacy-rich environments." },
    { department: "Specialized Supports", name: "Shaemus Campbell", role: "Physical Education & Healthy Living", desc: "Promotes active, healthy lifestyles and high-quality physical education programming." },
    { department: "Specialized Supports", name: "Jordana Milne", role: "Manager of Athletics and Healthy Living", desc: "Leads extra-curricular athletics for inclusive and engaging sport opportunities." },
    { department: "Specialized Supports", name: "Ryan Sabourin", role: "Applied Technology / Human Ecology", desc: "Creates safe, innovative learning experiences building practical skills." },
    { department: "Specialized Supports", name: "Allan Suban", role: "LRSD Arts (Music, Visual Arts, Drama)", desc: "Fosters creativity, expression, and student engagement through the arts." }
];

const departments = ["All", ...new Set(teamData.map(t => t.department))];
let currentFilter = "All";
let searchQuery = "";

const teamGrid = document.getElementById("teamGrid");
const filterButtons = document.getElementById("filterButtons");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

// Generate filter buttons
departments.forEach(dept => {
    const btn = document.createElement("button");
    btn.textContent = dept;
    btn.className = `px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
        dept === "All" 
        ? "bg-blue-600 text-white border-blue-600 shadow" 
        : "bg-white text-gray-600 border-gray-200 hover:border-blue-500 hover:text-blue-600"
    }`;
    btn.onclick = () => {
        // Update styling
        Array.from(filterButtons.children).forEach(child => {
            child.className = `px-4 py-2 rounded-full text-sm font-medium transition-colors border bg-white text-gray-600 border-gray-200 hover:border-blue-500 hover:text-blue-600`;
        });
        btn.className = `px-4 py-2 rounded-full text-sm font-medium transition-colors border bg-blue-600 text-white border-blue-600 shadow`;
        
        currentFilter = dept;
        renderTeam();
    };
    filterButtons.appendChild(btn);
});

// Search input
searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderTeam();
});

// Render team
function renderTeam() {
    teamGrid.innerHTML = "";
    let visibleCount = 0;

    teamData.forEach(member => {
        const matchesFilter = currentFilter === "All" || member.department === currentFilter;
        const matchesSearch = member.name.toLowerCase().includes(searchQuery) || 
                              member.role.toLowerCase().includes(searchQuery) || 
                              member.department.toLowerCase().includes(searchQuery) ||
                              member.desc.toLowerCase().includes(searchQuery);

        if (matchesFilter && matchesSearch) {
            visibleCount++;
            const card = document.createElement("div");
            card.className = "bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow fade-in visible";
            card.innerHTML = `
                <div class="flex items-start justify-between">
                    <div>
                        <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold mb-3">
                            ${member.department}
                        </span>
                        <h4 class="text-xl font-bold text-gray-900">${member.name}</h4>
                        <p class="text-sm font-medium text-purple-600 mb-3">${member.role}</p>
                        <p class="text-sm text-gray-600 leading-relaxed">${member.desc}</p>
                    </div>
                </div>
            `;
            teamGrid.appendChild(card);
        }
    });

    if (visibleCount === 0) {
        noResults.classList.remove("hidden");
    } else {
        noResults.classList.add("hidden");
    }
}

// Initial render
renderTeam();

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 10) {
        nav.classList.add('shadow-md');
        nav.classList.remove('shadow-sm');
    } else {
        nav.classList.add('shadow-sm');
        nav.classList.remove('shadow-md');
    }
});
