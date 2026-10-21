const posts = [
  {
    id: 'agentic-checklist', category: 'AI workflows', readTime: '6 MIN READ', date: 'OCT 18, 2026',
    title: 'The tiny AI agent that keeps your team out of spreadsheet jail',
    excerpt: 'A lightweight way to turn messy form responses into a clean, useful project brief before kickoff.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=82', alt: 'Notebook and pen on a desk',
    body: [
      ['p', 'Hackathon ideas arrive in every shape: a voice note, a half-filled form, a long chat message sent at midnight. The first job is not to judge the idea. It is to make the useful bits easy to see.'],
      ['h3', 'Give the agent one job'],
      ['p', 'We made a small workflow that reads each submission and returns four fields: the problem, who feels it, the proposed experiment, and the first thing the team needs to learn. That is the whole brief. No surprise strategy deck.'],
      ['ul', 'Keep the original response beside the summary|Ask for missing information instead of inventing it|Route anything uncertain to a person|Let the team edit the brief before it becomes official'],
      ['p', 'The useful part is less the AI than the shared starting point. Teams begin with the same clear shape and spend their attention on the actual idea.']
    ]
  },
  {
    id: 'no-code-intake', category: 'No-code', readTime: '4 MIN READ', date: 'OCT 12, 2026',
    title: 'A no-code participant check-in that doesn’t make a line',
    excerpt: 'Connect a simple form, a live roster, and a welcome message. Your volunteers get their hands back.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=82', alt: 'People collaborating at a workshop table',
    body: [
      ['p', 'The check-in desk is where a carefully planned event meets real life. Names are misspelled, teams change size, and somebody forgot their confirmation email. The best workflow makes exceptions easy instead of pretending they will not happen.'],
      ['h3', 'Three pieces, one calm arrival'],
      ['p', 'Start with a mobile-friendly form that looks up a participant by email. On a match, mark them arrived and show their team name. On a miss, give the volunteer a short manual path and record the fix for later.'],
      ['ul', 'A single shared source of truth for registrations|A clear confirmation state on the volunteer screen|A human override for last-minute changes|A welcome message with the right room and schedule'],
      ['p', 'Test it with a few deliberately awkward cases before doors open. Your future self, standing beside the badge printer, will be grateful.']
    ]
  },
  {
    id: 'team-standup', category: 'Team ops', readTime: '5 MIN READ', date: 'OCT 06, 2026',
    title: 'The two-minute async standup for a team that just met',
    excerpt: 'Get everyone moving in the same direction without scheduling yet another meeting.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=82', alt: 'A team sharing ideas in a bright meeting room',
    body: [
      ['p', 'New teams do not need process theater. They do need a reliable way to surface who is working on what and where a small snag could become a big one.'],
      ['h3', 'Three prompts are enough'],
      ['p', 'Use one async check-in at a predictable time. Ask each person for their next small deliverable, anything they are waiting on, and a request for help if they have one. Keep answers visible to the whole team.'],
      ['ul', 'What will you move forward next?|What is blocked or still unclear?|Who could unblock you in five minutes?'],
      ['p', 'If a thread needs a real conversation, move just that thread into a quick call. The check-in is a radar, not a replacement for talking to each other.']
    ]
  },
  {
    id: 'demo-rehearsal', category: 'AI workflows', readTime: '7 MIN READ', date: 'SEP 28, 2026',
    title: 'From working prototype to demo story, without the panic',
    excerpt: 'A repeatable rehearsal workflow that turns a half-finished feature into a clear, honest walkthrough.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=82', alt: 'A team planning a presentation together',
    body: [
      ['p', 'A compelling demo is not a tour of every button. It is one person, one frustrating moment, and a believable glimpse of a better way. A little structure helps your team find that story sooner.'],
      ['h3', 'Automate the prep, keep the story human'],
      ['p', 'Collect each teammate’s best-working feature and its current limitations in one place. Use an assistant to cluster the overlaps and draft a short run-of-show. Then have the presenter rewrite it in their own voice and verify every claim against the live build.'],
      ['ul', 'Name the audience and the problem in one sentence|Show the shortest path to a meaningful result|Say what is real and what is still a prototype|Prepare a fallback recording for fragile network moments'],
      ['p', 'A two-minute honest demo beats a ten-minute feature inventory. Rehearse once for timing and once for the handoffs.']
    ]
  },
  {
    id: 'n8n-first-flow', category: 'No-code', readTime: '5 MIN READ', date: 'SEP 19, 2026',
    title: 'Your first n8n flow: send the update, not another reminder',
    excerpt: 'A beginner-friendly pattern for collecting project updates and posting a neat digest where your team already works.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=82', alt: 'Collaborators working together on a laptop',
    body: [
      ['p', 'Automation earns its place when it removes a repeat task without adding a new thing people have to babysit. A daily update digest is a good first workflow because the result is visible and the failure is easy to catch.'],
      ['h3', 'A small, inspectable flow'],
      ['p', 'Collect updates in a short form, normalize the answers, and post a digest to your team channel at a set time. Keep the workflow readable: one node for intake, one for cleanup, one for delivery.'],
      ['ul', 'Start with sample submissions and inspect every output|Skip blank updates rather than posting noise|Include a link back to the original submission|Tell the team where to report a broken automation'],
      ['p', 'Use test credentials and a private channel while you build. Once the digest has survived a real day of updates, invite the rest of the team in.']
    ]
  },
  {
    id: 'scope-cut', category: 'Team ops', readTime: '4 MIN READ', date: 'SEP 11, 2026',
    title: 'The kindest thing a team can automate is its scope cut',
    excerpt: 'A friendly decision ritual for choosing the smallest version you can actually finish by demo time.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=82', alt: 'A focused team working through a shared challenge',
    body: [
      ['p', 'At some point, nearly every hackathon team has a lovely idea, a growing backlog, and not enough hours. The problem is not ambition; it is that nobody has made the trade-offs visible yet.'],
      ['h3', 'Sort by proof, not polish'],
      ['p', 'Write down the user outcome the demo must prove. Put every planned feature into must-show, helps-show, or nice-if-time. Agree on a stop time for adding anything new, then protect the time left for testing and the story.'],
      ['ul', 'One outcome the audience should understand|One happy path that demonstrates it|A named person who can call a scope decision|A small list of things the demo will not pretend to do'],
      ['p', 'A scope cut is not a smaller idea. It is the shortest honest path to showing why the idea matters.']
    ]
  }
];

const postGrid = document.querySelector('#post-grid');
const searchInput = document.querySelector('#post-search');
const resultsMessage = document.querySelector('#results-message');
const emptyState = document.querySelector('#empty-state');
const savedStorageKey = 'loop-blog-saved-posts';
let activeCategory = 'All';
let savedPosts = loadSavedPosts();

function loadSavedPosts() {
  try {
    const stored = JSON.parse(localStorage.getItem(savedStorageKey) || '[]');
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function iconMarkup(isSaved) {
  return `<svg viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-3.6L6 21V4.75Z"/></svg>`;
}

function updateSavedCount() {
  document.querySelector('.saved-count').textContent = String(savedPosts.length);
}

function getVisiblePosts() {
  const term = searchInput.value.trim().toLowerCase();
  return posts.filter((post) => {
    const categoryMatches = activeCategory === 'All'
      || (activeCategory === 'Saved' ? savedPosts.includes(post.id) : post.category === activeCategory);
    const searchMatches = !term || `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(term);
    return categoryMatches && searchMatches;
  });
}

function renderPosts() {
  const visiblePosts = getVisiblePosts();
  postGrid.innerHTML = visiblePosts.map((post) => {
    const isSaved = savedPosts.includes(post.id);
    return `<article class="post-card">
      <div class="post-image-wrap">
        <img class="post-image" src="${post.image}" alt="${post.alt}" loading="lazy">
        <button class="save-button${isSaved ? ' is-saved' : ''}" type="button" data-save="${post.id}" aria-label="${isSaved ? 'Remove saved article' : 'Save article'}: ${post.title}" aria-pressed="${isSaved}">${iconMarkup(isSaved)}</button>
      </div>
      <div class="post-meta"><span>${post.date}</span><span>${post.readTime}</span></div>
      <p class="post-category">${post.category}</p>
      <h3>${post.title}</h3><p>${post.excerpt}</p>
      <a class="post-read" href="#${post.id}" data-read="${post.id}">Read the field note <span aria-hidden="true">↗</span></a>
    </article>`;
  }).join('');
  emptyState.hidden = visiblePosts.length > 0;
  postGrid.hidden = visiblePosts.length === 0;
  resultsMessage.textContent = activeCategory === 'Saved'
    ? `${visiblePosts.length} saved ${visiblePosts.length === 1 ? 'note' : 'notes'}`
    : `${visiblePosts.length} ${visiblePosts.length === 1 ? 'field note' : 'field notes'}`;
  updateSavedCount();
}

function showArticle(postId) {
  const post = posts.find((item) => item.id === postId);
  if (!post) return;
  const dialogContent = document.querySelector('#dialog-content');
  dialogContent.innerHTML = `<img class="dialog-cover" src="${post.image}" alt="${post.alt}"><p class="dialog-category">${post.category} / ${post.readTime}</p><h2 id="dialog-title">${post.title}</h2><p class="dialog-byline">FIELD NOTE / ${post.date}</p><div class="dialog-body">${post.body.map(([type, text]) => type === 'ul' ? `<ul>${text.split('|').map((item) => `<li>${item}</li>`).join('')}</ul>` : `<${type}>${text}</${type}>`).join('')}</div>`;
  document.querySelector('#article-dialog').showModal();
}

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll('.filter-button').forEach((item) => item.classList.toggle('is-active', item === button));
    renderPosts();
  });
});

searchInput.addEventListener('input', renderPosts);
postGrid.addEventListener('click', (event) => {
  const saveButton = event.target.closest('[data-save]');
  if (saveButton) {
    const postId = saveButton.dataset.save;
    savedPosts = savedPosts.includes(postId) ? savedPosts.filter((id) => id !== postId) : [...savedPosts, postId];
    try { localStorage.setItem(savedStorageKey, JSON.stringify(savedPosts)); } catch { /* Saved state remains available for this page view. */ }
    renderPosts();
    return;
  }
  const readLink = event.target.closest('[data-read]');
  if (readLink) {
    event.preventDefault();
    showArticle(readLink.dataset.read);
  }
});

document.querySelector('.clear-filters').addEventListener('click', () => {
  activeCategory = 'All';
  searchInput.value = '';
  document.querySelectorAll('.filter-button').forEach((button) => button.classList.toggle('is-active', button.dataset.category === 'All'));
  renderPosts();
});

document.querySelector('.dialog-close').addEventListener('click', () => document.querySelector('#article-dialog').close());
document.querySelector('#article-dialog').addEventListener('click', (event) => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});

document.querySelector('#newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = document.querySelector('#email-address');
  document.querySelector('#form-status').textContent = `Thanks, ${emailInput.value}. This demo doesn't send or store your email.`;
  emailInput.value = '';
});

const menuToggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.lastElementChild.textContent = isOpen ? '−' : '+';
});
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.lastElementChild.textContent = '+';
}));

renderPosts();
