const WHATSAPP_NUMBER = "+923237900211"; // Updated to match index.html

const scripts = [
    {
        title: "AI ERP With Google sheets and Appscripts",
        category: "management",
        image: "ai_erp_dashboard.png",
        tags: ["Premium", "Automation"],
        rating: 5.0,
        reviews: 210,
        priceType: "VIP Premium",
        isFree: false
    },
    {
        title: "QR Attendance System Pro",
        category: "management",
        image: "qr_attendance_system_1778694204667.png",
        tags: ["Premium", "Management"],
        rating: 5.0,
        reviews: 127,
        priceType: "Premium Plan",
        isFree: false
    },
    {
        title: "LogiStock Inventory Manager",
        category: "management",
        image: "inventory_management_system_1778695517518.png",
        tags: ["Premium", "Automation"],
        rating: 4.8,
        reviews: 151,
        priceType: "Weekly Plan",
        isFree: false
    },
    {
        title: "EduLink Student Portal",
        category: "education",
        image: "student_portal_ui_1778695594455.png",
        tags: ["Premium", "Education"],
        rating: 4.7,
        reviews: 141,
        priceType: "VIP Premium",
        isFree: false
    },
    {
        title: "Synergy CRM Dashboard",
        category: "automation",
        image: "business_management_dashboard_1778696105272.png",
        tags: ["Premium", "Automation"],
        rating: 4.9,
        reviews: 89,
        priceType: "Premium Plan",
        isFree: false
    },
    {
        title: "Basic Contact Form Script",
        category: "free",
        image: "media__1778693868307.png",
        tags: ["Free", "Automation"],
        rating: 4.5,
        reviews: 32,
        priceType: "Free",
        isFree: true
    }
];

const scriptGrid = document.getElementById('scriptGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderScripts(filter = 'all', search = '') {
    scriptGrid.innerHTML = '';
    
    const filtered = scripts.filter(s => {
        const matchesFilter = filter === 'all' || s.category === filter || (filter === 'free' && s.isFree);
        const matchesSearch = s.title.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    filtered.forEach((s, index) => {
        const card = document.createElement('div');
        card.className = 'card animate-in';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const whatsappMsg = encodeURIComponent(`Hi AM, I am interested in the "${s.title}" script. Can you provide more details?`);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${whatsappMsg}`;

        card.innerHTML = `
            <img src="${s.image}" alt="${s.title}" class="card-image">
            <div class="card-content">
                <div class="card-tags">
                    <span class="tag ${s.isFree ? 'tag-free' : 'tag-premium'}">${s.priceType}</span>
                    <span class="tag" style="background: #e2e8f0; color: #475569;">${s.tags[1]}</span>
                </div>
                <h3 class="card-title">${s.title}</h3>
                <div class="card-rating">
                    ${Array(5).fill().map((_, i) => `<i class="fa-${i < Math.floor(s.rating) ? 'solid' : 'regular'} fa-star"></i>`).join('')}
                    <span style="color: var(--text-muted); font-size: 0.875rem; margin-left: 0.5rem;">${s.rating} (${s.reviews})</span>
                </div>
                <div class="card-footer">
                    <a href="#" class="btn btn-primary">Preview</a>
                    <a href="#" class="btn btn-secondary">About</a>
                    <a href="${whatsappUrl}" target="_blank" class="btn btn-contact">
                        <i class="fa-brands fa-whatsapp"></i>
                        Contact for Customization
                    </a>
                </div>
            </div>
        `;
        scriptGrid.appendChild(card);
    });
}

// Initial Render
renderScripts();

// Search Listener
searchInput.addEventListener('input', (e) => {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    renderScripts(activeFilter, e.target.value);
});

// Filter Listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderScripts(btn.dataset.filter, searchInput.value);
    });
});
