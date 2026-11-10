const internships = [
  { title: "Frontend Developer Intern", company: "TechNova", domain: "Development", type: "Remote", stipend: "₹10,000/mo", duration: "3 Months", desc: "Build responsive pages with HTML, CSS, JS." },
  { title: "UI/UX Design Intern", company: "PixelWorks", domain: "Design", type: "Hybrid", stipend: "₹8,000/mo", duration: "2 Months", desc: "Design wireframes and prototypes in Figma." },
  { title: "Digital Marketing Intern", company: "GrowMore", domain: "Marketing", type: "Remote", stipend: "₹7,000/mo", duration: "3 Months", desc: "Run campaigns and learn SEO & analytics." },
  { title: "Data Analyst Intern", company: "DataNest", domain: "Data", type: "On-site", stipend: "₹12,000/mo", duration: "4 Months", desc: "Clean data and make dashboards in Excel." },
  { title: "Backend Developer Intern", company: "CodeBase", domain: "Development", type: "On-site", stipend: "₹15,000/mo", duration: "6 Months", desc: "Learn Node.js, APIs and databases." },
  { title: "Graphic Design Intern", company: "ArtHouse", domain: "Design", type: "Remote", stipend: "₹6,000/mo", duration: "2 Months", desc: "Create posters and social media creatives." },
  { title: "Content Marketing Intern", company: "Wordly", domain: "Marketing", type: "Remote", stipend: "₹5,000/mo", duration: "2 Months", desc: "Write blogs and manage social content." },
  { title: "Python Intern", company: "PyLabs", domain: "Development", type: "Hybrid", stipend: "₹10,000/mo", duration: "3 Months", desc: "Automate tasks and learn Python basics." },
  { title: "Machine Learning Intern", company: "AI Labs", domain: "Data", type: "Remote", stipend: "₹20,000/mo", duration: "6 Months", desc: "Train simple ML models with Python." }
];

const board = document.getElementById('board');
const search = document.getElementById('search');
const domain = document.getElementById('domain');
const type = document.getElementById('type');
const count = document.getElementById('resultCount');
const empty = document.getElementById('emptyState');

function render(list) {
  board.innerHTML = "";
  count.textContent = `Showing ${list.length} of ${internships.length} internships`;
  if (list.length === 0) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  list.forEach(job => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'listitem');
    card.innerHTML = `<span class="badge">${job.domain}</span><h3>${job.title}</h3><p><strong>${job.company}</strong></p><p>${job.desc}</p><p class="meta">${job.type} • ${job.duration} • ${job.stipend}</p><a href="#" onclick="return false">Apply Now</a>`;
    board.appendChild(card);
  });
}

function filter() {
  const q = search.value.toLowerCase().trim();
  const d = domain.value;
  const t = type.value;
  const filtered = internships.filter(j =>
    (d === 'all' || j.domain === d) &&
    (t === 'all' || j.type === t) &&
    (j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q))
  );
  render(filtered);
}

search.addEventListener('input', filter);
domain.addEventListener('change', filter);
type.addEventListener('change', filter);
document.getElementById('resetBtn').addEventListener('click', () => {
  search.value = ""; domain.value = "all"; type.value = "all"; filter();
});
document.getElementById('clearBtn').addEventListener('click', () => {
  search.value = ""; domain.value = "all"; type.value = "all"; filter();
});

render(internships);