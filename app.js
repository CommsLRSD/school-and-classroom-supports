/* =========================================
   app.js — SCST Interactive Site
   School and Classroom Support Team
   Louis Riel School Division
   ========================================= */

'use strict';

// ── Team Data ──────────────────────────────────────────────────────────────
const teamData = [
    // Leadership
    {
        department: "Leadership",
        name: "Nicholas Kelly",
        role: "Director of School and Classroom Support",
        desc: "Provides overall leadership for SCST, ensuring coordinated, responsive, and equity-focused support across the division. Works closely with school and divisional leaders to align services, strengthen system coherence, and improve outcomes for all students."
    },
    {
        department: "Leadership",
        name: "Nicole Mager",
        role: "Divisional Principal (Instructional & Indigenous Education)",
        desc: "Leads instructional and Indigenous education supports across the division. Partners with schools to strengthen teaching practices, advance culturally responsive learning, and support meaningful, engaging learning experiences for all students."
    },
    {
        department: "Leadership",
        name: "Megan Vankoughnett",
        role: "Divisional Principal (Clinical & Student Services)",
        desc: "Provides leadership for clinical and student services, supporting inclusive and responsive learning environments. Works collaboratively with schools to ensure student needs are met through coordinated, evidence-informed approaches."
    },
    {
        department: "Leadership",
        name: "Lisa Tymchuk",
        role: "Assistant Director, Clinical Services",
        desc: "Supports the delivery of clinical services across the division, helping to coordinate interdisciplinary supports for students. Works with school teams to strengthen practices that support student learning, communication, regulation, and well-being."
    },
    {
        department: "Leadership",
        name: "Kelsey Lenaghan",
        role: "Divisional Indigenous Leader",
        desc: "Leads Indigenous education and intercultural understandings across the division. Works alongside schools to strengthen relationships, support Indigenous Education School-based Action Planning, and embed Indigenous perspectives, identities, and ways of knowing into learning."
    },

    // Instructional Support
    {
        department: "Instructional Support",
        name: "Kristyn Artibise",
        role: "Instructional Support Teacher (Numeracy)",
        desc: "Supports schools in strengthening numeracy instruction through data-informed practices, targeted intervention planning, and collaborative problem solving. Works alongside educators to build confidence and capacity in teaching mathematics so all students can experience success."
    },
    {
        department: "Instructional Support",
        name: "Kristen McDowell",
        role: "Instructional Support Teacher (Literacy)",
        desc: "Partners with schools to strengthen literacy instruction using structured, evidence-informed approaches. Supports educators through coaching, co-planning, and the use of data to guide responsive instruction and improve student outcomes."
    },
    {
        department: "Instructional Support",
        name: "Geneviève Shyiak",
        role: "Instructional Support Teacher (Literacy)",
        desc: "Works collaboratively with school teams to enhance literacy learning and instructional practice. Supports teachers in using data to inform instruction, monitor progress, and create responsive learning environments that meet the needs of all students."
    },

    // Student Support Services
    {
        department: "Student Support Services",
        name: "Kerri Bush",
        role: "Instructional Support / Student Services",
        desc: "Supports schools in creating inclusive and responsive learning environments that meet the diverse needs of students. Works alongside educators to strengthen classroom practices, support social-emotional learning, and build strategies that enhance student well-being and engagement."
    },
    {
        department: "Student Support Services",
        name: "Rose Pagtakhan",
        role: "Instructional Support / Student Services",
        desc: "Specializes in supporting multilingual learners across the division. Partners with teachers to design inclusive, language-rich instruction that supports both academic achievement and language development, helping students feel confident, capable, and connected."
    },

    // Indigenous Education
    {
        department: "Indigenous Education",
        name: "Sean Oliver",
        role: "Indigenous Education",
        desc: "Supports schools through land-based learning, cultural teachings, and Indigenous Education School-based Action Planning. Works alongside students and staff to strengthen connection to culture, identity, and community."
    },
    {
        department: "Indigenous Education",
        name: "Rose Bird",
        role: "Indigenous Education",
        desc: "Partners with schools to support Indigenous language, culture, identity and Indigenous Education School-based Action Planning. Works with educators and students to deepen understanding and strengthen belonging."
    },
    {
        department: "Indigenous Education",
        name: "Judith Saunders-McKay",
        role: "Indigenous Education",
        desc: "Supports Indigenous education in schools through language, cultural learning, relationship-building and action planning. Works collaboratively with staff and students to foster respect and a strong sense of identity and belonging."
    },
    {
        department: "Indigenous Education",
        name: "Sam Flamand",
        role: "Indigenous Education",
        desc: "Supports Indigenous language and cultural learning across schools and action planning. Works alongside educators to strengthen culturally responsive practices and helps create spaces where students feel seen, valued, and connected."
    },
    {
        department: "Indigenous Education",
        name: "Trish Wilson",
        role: "Indigenous Education",
        desc: "Works with schools to support Indigenous education through cultural programming, relationship-building, student engagement and action planning. Contributes to creating inclusive and welcoming school environments."
    },
    {
        department: "Indigenous Education",
        name: "Tammy Bruce",
        role: "Community Liaison – Indigenous Academic Support",
        desc: "Connects students, families, schools, and community supports. Plays a key role in strengthening relationships, supporting student well-being, and ensuring that schools are responsive to community needs and strengths."
    },

    // Indigenous Language Team
    {
        department: "Indigenous Language Team",
        name: "Alice McKay",
        role: "Ojibwe Teacher",
        desc: "Teaches Ojibwe language and supports students in developing strong connections to language, culture, and identity. Creates meaningful opportunities for students to learn through language and deepen their understanding of Indigenous ways of knowing."
    },
    {
        department: "Indigenous Language Team",
        name: "Courtney Pranteau",
        role: "Cree Teacher",
        desc: "Teaches Cree language and works with students to build confidence and connection through language learning. Supports cultural understanding and helps create spaces where students can explore identity and belonging."
    },
    {
        department: "Indigenous Language Team",
        name: "Maxine Lavitt",
        role: "Michif Instructor",
        desc: "Teaches Michif, supporting language revitalization and cultural connection for students. Strengthens identity, pride, and understanding of Métis culture through meaningful learning experiences."
    },
    {
        department: "Indigenous Language Team",
        name: "Cub Spring",
        role: "Ojibwe Instructor",
        desc: "Supports students in learning Ojibwe language while fostering connection to culture and community. Works alongside schools to create engaging and meaningful language learning opportunities."
    },
    {
        department: "Indigenous Language Team",
        name: "Rhea Paul",
        role: "Ojibwe Instructor",
        desc: "Supports Ojibwe language learning across schools, helping students develop communication skills and cultural understanding. Contributes to strengthening identity and belonging through language."
    },
    {
        department: "Indigenous Language Team",
        name: "Alyssa Guimond",
        role: "Ojibwe Instructor",
        desc: "Supports students in learning Ojibwe language in ways that are engaging and responsive. Works with school teams to support language development and cultural connection."
    },
    {
        department: "Indigenous Language Team",
        name: "Hailey McKay",
        role: "Cree Instructor",
        desc: "Supports Cree language learning and works with students to build connection, confidence, and cultural understanding. Helps create inclusive learning environments where language and identity are valued."
    },
    {
        department: "Indigenous Language Team",
        name: "Destanee Ducharme",
        role: "Cree Instructor",
        desc: "Supports Cree language instruction and works with students to strengthen their understanding of culture, identity, and community. Creates meaningful and connected learning experiences."
    },
    {
        department: "Indigenous Language Team",
        name: "Rose McKay",
        role: "Cree Instructor",
        desc: "Supports Cree language learning through relationship, storytelling, and cultural connection. Works with students to build confidence and pride in language and identity."
    },

    // Clinical Services
    {
        department: "Clinical Services",
        name: "Robert George",
        role: "Psychologist",
        desc: "Supports schools through assessment, consultation, and collaborative problem solving. Works alongside educators to better understand student learning and well-being needs, helping to guide effective, data-informed supports."
    },
    {
        department: "Clinical Services",
        name: "Travis Hoare",
        role: "Occupational Therapist",
        desc: "Supports students in developing skills related to self-regulation, independence, and participation in learning. Works with school teams to design inclusive, responsive strategies that help students succeed in daily classroom environments."
    },
    {
        department: "Clinical Services",
        name: "Karla Guiterrez",
        role: "Speech Language Pathologist",
        desc: "Supports students and educators in strengthening communication, language development, and literacy foundations. Collaborates with school teams to implement strategies that support learning, engagement, and participation."
    },
    {
        department: "Clinical Services",
        name: "Kim Mackey",
        role: "Social Worker",
        desc: "Supports students' social-emotional well-being, mental health, and overall sense of belonging. Collaborates with educators, families, and community partners to provide responsive supports that help students navigate challenges and build resilience."
    },

    // Specialized Supports
    {
        department: "Specialized Supports",
        name: "Kathy Atkin",
        role: "Divisional Teacher Librarian",
        desc: "Supports school libraries across the division, helping to create welcoming, literacy-rich environments that foster a love of reading and inquiry. Partners with educators to enhance access to diverse resources and strengthen teaching and learning."
    },
    {
        department: "Specialized Supports",
        name: "Shaemus Campbell",
        role: "Physical Education & Healthy Living",
        desc: "Supports high-quality physical education and promotes active, healthy lifestyles for students. Works alongside teachers to strengthen PE programming, mentor educators, and coordinate divisional events."
    },
    {
        department: "Specialized Supports",
        name: "Jordana Milne",
        role: "Manager of Athletics and Healthy Living",
        desc: "Leads and coordinates divisional extra-curricular athletics, supporting schools in offering inclusive and engaging sport opportunities. Helps create positive experiences for students through athletics and teamwork."
    },
    {
        department: "Specialized Supports",
        name: "Ryan Sabourin",
        role: "Applied Technology / Human Ecology",
        desc: "Supports applied technology and human ecology programming across the division. Works with schools to create safe, innovative, and engaging learning experiences that prepare students with practical skills and real-world connections."
    },
    {
        department: "Specialized Supports",
        name: "Allan Suban",
        role: "LRSD Arts (Music, Visual Arts, Drama)",
        desc: "Supports arts programming in schools, helping to foster creativity, expression, and student engagement. Works with educators to strengthen music, visual arts, and drama experiences that enrich learning and build student confidence."
    }
];

// ── Section Navigation ─────────────────────────────────────────────────────
const sections   = Array.from(document.querySelectorAll('.section-panel'));
const tabs       = Array.from(document.querySelectorAll('.section-tab'));
const prevBtn    = document.getElementById('prevBtn');
const nextBtn    = document.getElementById('nextBtn');
let   activeSec  = 0;

/**
 * Transition to a section by index.
 * Handles visibility, ARIA state, arrow disabled state,
 * and scrolls the active tab into view.
 */
function goToSection(index) {
    if (index < 0 || index >= sections.length || index === activeSec) return;

    // Hide current, show new
    sections[activeSec].hidden = true;
    sections[index].hidden = false;

    // Move focus into new panel (preventScroll avoids jarring jump)
    sections[index].focus({ preventScroll: true });

    // Update tab aria state
    tabs[activeSec].classList.remove('active');
    tabs[activeSec].setAttribute('aria-selected', 'false');
    tabs[activeSec].setAttribute('tabindex', '-1');

    tabs[index].classList.add('active');
    tabs[index].setAttribute('aria-selected', 'true');
    tabs[index].setAttribute('tabindex', '0');

    // Scroll tab into view (for mobile / overflow scenarios)
    tabs[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

    activeSec = index;
    updateArrows();

    // Smooth scroll to top of page so header is visible
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateArrows() {
    prevBtn.disabled = activeSec === 0;
    prevBtn.setAttribute('aria-disabled', prevBtn.disabled ? 'true' : 'false');
    nextBtn.disabled = activeSec === sections.length - 1;
    nextBtn.setAttribute('aria-disabled', nextBtn.disabled ? 'true' : 'false');
}

// Arrow button listeners
prevBtn.addEventListener('click', () => goToSection(activeSec - 1));
nextBtn.addEventListener('click', () => goToSection(activeSec + 1));

// Tab click listeners + keyboard navigation within tablist
tabs.forEach((tab, i) => {
    // Set initial tabindex (only active tab is in tab order within the group)
    tab.setAttribute('tabindex', i === 0 ? '0' : '-1');

    tab.addEventListener('click', () => goToSection(i));

    tab.addEventListener('keydown', (e) => {
        let target = -1;
        switch (e.key) {
            case 'ArrowRight': target = Math.min(i + 1, tabs.length - 1); break;
            case 'ArrowLeft':  target = Math.max(i - 1, 0);               break;
            case 'Home':       target = 0;                                 break;
            case 'End':        target = tabs.length - 1;                   break;
            default: return;
        }
        e.preventDefault();
        tabs[target].focus();
        goToSection(target);
    });
});

// Alt+Arrow keys as global shortcut (outside tablist)
document.addEventListener('keydown', (e) => {
    if (e.target.closest('[role="tablist"]')) return; // handled above
    if (!e.altKey) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); goToSection(activeSec + 1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goToSection(activeSec - 1); }
});

// Initialise arrow state
updateArrows();

// ── Team Search & Filter ───────────────────────────────────────────────────
const teamGrid     = document.getElementById('teamGrid');
const filterWrap   = document.getElementById('filterButtons');
const searchInput  = document.getElementById('searchInput');
const noResults    = document.getElementById('noResults');

const departments  = ['All', ...new Set(teamData.map(m => m.department))];
let   activeFilter = 'All';
let   searchQuery  = '';

// Build filter buttons
departments.forEach(dept => {
    const btn = document.createElement('button');
    btn.textContent = dept;
    btn.className = 'filter-btn' + (dept === 'All' ? ' active' : '');
    btn.setAttribute('aria-pressed', dept === 'All' ? 'true' : 'false');

    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        activeFilter = dept;
        renderTeam();
    });

    filterWrap.appendChild(btn);
});

// Search listener
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderTeam();
});

// Render team cards
function renderTeam() {
    teamGrid.innerHTML = '';
    let shown = 0;

    teamData.forEach(member => {
        const inFilter = activeFilter === 'All' || member.department === activeFilter;
        const inSearch = !searchQuery ||
            member.name.toLowerCase().includes(searchQuery)       ||
            member.role.toLowerCase().includes(searchQuery)       ||
            member.department.toLowerCase().includes(searchQuery) ||
            member.desc.toLowerCase().includes(searchQuery);

        if (inFilter && inSearch) {
            shown++;
            const card = document.createElement('div');
            card.className = 'team-card';
            card.innerHTML = `
                <span class="team-dept">${escHtml(member.department)}</span>
                <h4>${escHtml(member.name)}</h4>
                <p class="team-role">${escHtml(member.role)}</p>
                <p class="team-desc">${escHtml(member.desc)}</p>
            `;
            teamGrid.appendChild(card);
        }
    });

    noResults.classList.toggle('hidden', shown > 0);
}

/** Minimal HTML-escape for dynamic content */
function escHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// Initial render
renderTeam();
