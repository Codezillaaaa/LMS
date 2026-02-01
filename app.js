// Mock Data - Scaled to 50+ Books with diverse categories
const books = [
    { id: '101', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/8392880-M.jpg' },
    { id: '102', title: 'To Kill a Mockingbird', author: 'Harper Lee', status: 'Issued', holder: 'Alice J.', cover: 'https://covers.openlibrary.org/b/id/12617721-M.jpg' },
    { id: '103', title: '1984', author: 'George Orwell', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12698696-M.jpg' },
    { id: '104', title: 'Algorithms', author: 'T. Cormen', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/14553163-M.jpg' },
    { id: '105', title: 'Clean Code', author: 'Robert C. Martin', status: 'Issued', holder: 'Dev_Mike', cover: 'https://covers.openlibrary.org/b/id/13247400-M.jpg' },
    { id: '106', title: 'Design Patterns', author: 'Erich Gamma', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12558667-M.jpg' },
    { id: '107', title: 'Artificial Intelligence', author: 'Russell & Norvig', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/14552436-M.jpg' },
    { id: '108', title: 'Database Systems', author: 'Elmasri & Navathe', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12668589-M.jpg' },
    { id: '109', title: 'Operating Systems', author: 'Silberschatz', status: 'Issued', holder: 'SysAdmin_X', cover: 'https://covers.openlibrary.org/b/id/12693077-M.jpg' },
    { id: '110', title: 'Computer Networks', author: 'Tanenbaum', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/8392880-M.jpg' }, // Mock placeholder for now
    { id: '111', title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12711075-M.jpg' },
    { id: '112', title: 'Atomic Habits', author: 'James Clear', status: 'Issued', holder: 'Reader_Pro', cover: 'https://covers.openlibrary.org/b/id/12726913-M.jpg' },
    { id: '113', title: 'The Pragmatic Programmer', author: 'Andrew Hunt', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12720993-M.jpg' },
    { id: '114', title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', status: 'Issued', holder: 'Psych_Student', cover: 'https://covers.openlibrary.org/b/id/12589086-M.jpg' },
    { id: '115', title: 'Sapiens', author: 'Yuval Noah Harari', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12318451-M.jpg' },
    { id: '116', title: 'Dune', author: 'Frank Herbert', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12608406-M.jpg' },
    { id: '117', title: 'Neuromancer', author: 'William Gibson', status: 'Issued', holder: 'CyberP', cover: 'https://covers.openlibrary.org/b/id/12586749-M.jpg' },
    { id: '118', title: 'Snow Crash', author: 'Neal Stephenson', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12592100-M.jpg' },
    { id: '119', title: 'The Alchemist', author: 'Paulo Coelho', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12730623-M.jpg' },
    { id: '120', title: 'Brave New World', author: 'Aldous Huxley', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12583842-M.jpg' },
    { id: '121', title: 'Lord of the Flies', author: 'William Golding', status: 'Issued', holder: 'Class_10A', cover: 'https://covers.openlibrary.org/b/id/12308709-M.jpg' },
    { id: '122', title: 'Harry Potter 1', author: 'J.K. Rowling', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12555314-M.jpg' },
    { id: '123', title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/10582963-M.jpg' },
    { id: '124', title: 'Meditations', author: 'Marcus Aurelius', status: 'Issued', holder: 'Stoic_Fan', cover: 'https://covers.openlibrary.org/b/id/12711018-M.jpg' },
    { id: '125', title: 'Deep Work', author: 'Cal Newport', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12613204-M.jpg' },
    { id: '126', title: 'Zero to One', author: 'Peter Thiel', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12631580-M.jpg' },
    { id: '127', title: 'The Lean Startup', author: 'Eric Ries', status: 'Issued', holder: 'Entrepreneur_1', cover: 'https://covers.openlibrary.org/b/id/14561081-M.jpg' },
    { id: '128', title: 'Code Complete', author: 'Steve McConnell', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12812538-M.jpg' },
    { id: '129', title: 'Head First Java', author: 'Kathy Sierra', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12686161-M.jpg' },
    { id: '130', title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12470724-M.jpg' },
    { id: '131', title: 'You Don\'t Know JS', author: 'Kyle Simpson', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12552803-M.jpg' },
    { id: '132', title: 'Python Crash Course', author: 'Eric Matthes', status: 'Issued', holder: 'Py_Newbie', cover: 'https://covers.openlibrary.org/b/id/12628456-M.jpg' },
    { id: '133', title: 'Refactoring', author: 'Martin Fowler', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12644243-M.jpg' },
    { id: '134', title: 'Soft Skills', author: 'John Sonmez', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12614397-M.jpg' },
    { id: '135', title: 'The Mythical Man-Month', author: 'Fred Brooks', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12569263-M.jpg' },
    { id: '136', title: 'Don\'t Make Me Think', author: 'Steve Krug', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12596827-M.jpg' },
    { id: '137', title: 'Hooked', author: 'Nir Eyal', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/14552437-M.jpg' },
    { id: '138', title: 'Sprint', author: 'Jake Knapp', status: 'Issued', holder: 'Product_Mgr', cover: 'https://covers.openlibrary.org/b/id/12630571-M.jpg' },
    { id: '139', title: 'Start with Why', author: 'Simon Sinek', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12711017-M.jpg' },
    { id: '140', title: 'Crucial Conversations', author: 'Patterson', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12711037-M.jpg' },
    { id: '141', title: 'Calculus Vol 1', author: 'OpenStax', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12693080-M.jpg' },
    { id: '142', title: 'Biology', author: 'Campbell', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12693081-M.jpg' },
    { id: '143', title: 'Physics', author: 'Halliday', status: 'Issued', holder: 'Sci_Nerd', cover: 'https://covers.openlibrary.org/b/id/12693082-M.jpg' },
    { id: '144', title: 'Chemistry', author: 'Zumdahl', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12693083-M.jpg' },
    { id: '145', title: 'Economics', author: 'Mankiw', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12693084-M.jpg' },
    { id: '146', title: 'Psychology', author: 'Myers', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12693085-M.jpg' },
    { id: '147', title: 'Sociology', author: 'Giddens', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12693086-M.jpg' },
    { id: '148', title: 'History of World', author: 'Roberts', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12693087-M.jpg' },
    { id: '149', title: 'Art History', author: 'Janson', status: 'Issued', holder: 'Artist_Eva', cover: 'https://covers.openlibrary.org/b/id/12693088-M.jpg' },
    { id: '150', title: 'Music Theory', author: 'Turek', status: 'Available', holder: null, cover: 'https://covers.openlibrary.org/b/id/12693089-M.jpg' },
];

// DOM Elements
const bookList = document.getElementById('bookList');
const bookCount = document.getElementById('bookCount');
const searchInput = document.getElementById('searchInput');
const issueForm = document.getElementById('issueForm');
const returnForm = document.getElementById('returnForm');
const statusMessage = document.getElementById('statusMessage');

// Stats Elements
const statTotal = document.getElementById('statTotal');
const statAvailable = document.getElementById('statAvailable');
const statIssued = document.getElementById('statIssued');

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    // Set default dates
    const today = new Date().toISOString().split('T')[0];
    document.querySelector('input[name="issueDate"]').value = today;
    document.querySelector('input[name="returnDate"]').value = today;

    // Load from LocalStorage if exists
    const savedBooks = localStorage.getItem('library_books');
    if (savedBooks) {
        // We merge saved status with our mock data to ensure we have images/titles 
        // (in case code changed, but preserving status)
        // For simplicity in this demo, we can just assume mock data structure is stable 
        // or prioritize saved state if IDs match.
        const parsed = JSON.parse(savedBooks);
        // Map saved status back to mock books to keep content fresh but status persisted
        books.forEach(b => {
            const saved = parsed.find(p => p.id === b.id);
            if (saved) {
                b.status = saved.status;
                b.holder = saved.holder;
            }
        });
    }

    renderBooks(books);
    updateStats();
});

// Stats Function
function updateStats() {
    const total = books.length;
    const issued = books.filter(b => b.status === 'Issued').length;
    const available = total - issued;

    statTotal.textContent = total;
    statAvailable.textContent = available;
    statIssued.textContent = issued;
}

// Persist Function
function saveState() {
    localStorage.setItem('library_books', JSON.stringify(books));
}

// Render Function
function renderBooks(booksToRender) {
    bookList.innerHTML = '';
    bookCount.textContent = booksToRender.length;

    if (booksToRender.length === 0) {
        bookList.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">No books found.</div>';
        return;
    }

    booksToRender.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';

        const statusClass = book.status === 'Available' ? 'status-available' : 'status-issued';
        const initials = book.title.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

        // Fallback if image fails (standard gradient)
        const fallbackGradient = 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)';

        card.innerHTML = `
            <div class="book-cover" style="background: ${fallbackGradient}; padding: 0;">
                <img src="${book.cover}" alt="${book.title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; border-radius: 0.75rem;" onerror="this.style.display='none'; this.parentElement.style.background='var(--gradient-brand)'; this.parentElement.innerHTML='<div class=\\'book-initials\\'>${initials}</div>'">
                ${!book.cover ? `<div class="book-initials">${initials}</div>` : ''}
                <div class="book-id-badge">#${book.id}</div>
            </div>
            <div class="book-title">${book.title}</div>
            <div class="book-author">by ${book.author}</div>
            <div class="status-badge ${statusClass}">
                ${book.status === 'Issued' ? '⛔ Issued' : '✅ Available'}
            </div>
            ${book.status === 'Issued' ? `<div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.5rem;">Holder: ${book.holder}</div>` : ''}
        `;
        bookList.appendChild(card);
    });
}

// Search Logic
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    const filtered = books.filter(book =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term) ||
        book.id.includes(term)
    );
    renderBooks(filtered);
});

// Tab Switching
window.switchTab = function (mode) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => t.classList.remove('active'));

    if (mode === 'issue') {
        tabs[0].classList.add('active');
        issueForm.classList.remove('hidden');
        returnForm.classList.add('hidden');
    } else {
        tabs[1].classList.add('active');
        issueForm.classList.add('hidden');
        returnForm.classList.remove('hidden');
    }
    clearStatus();
}

// Issue Book
issueForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookId = formData.get('bookId').trim();
    const member = formData.get('memberName').trim();

    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex === -1) {
        showStatus('Book ID not found!', 'error');
        return;
    }

    if (books[bookIndex].status === 'Issued') {
        showStatus('Book is already issued!', 'error');
        return;
    }

    // Update State
    books[bookIndex].status = 'Issued';
    books[bookIndex].holder = member;

    saveState(); // Persist
    renderBooks(books);
    updateStats(); // Refresh stats
    showStatus(`Book "${books[bookIndex].title}" issued successfully!`, 'success');
    e.target.reset();
    document.querySelector('input[name="issueDate"]').value = new Date().toISOString().split('T')[0];
});

// Return Book
returnForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookId = formData.get('bookId').trim();

    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex === -1) {
        showStatus('Book ID not found!', 'error');
        return;
    }

    if (books[bookIndex].status === 'Available') {
        showStatus('Book is not currently issued!', 'error');
        return;
    }

    // Update State
    const penalty = calculatePenalty(books[bookIndex].id);
    books[bookIndex].status = 'Available';
    books[bookIndex].holder = null;

    saveState(); // Persist
    renderBooks(books);
    updateStats(); // Refresh stats
    showStatus(`Book returned! ${penalty}`, 'success');
    e.target.reset();
    document.querySelector('input[name="returnDate"]').value = new Date().toISOString().split('T')[0];
});

// Helper: Show Status
function showStatus(msg, type) {
    statusMessage.style.display = 'block';
    statusMessage.textContent = msg;
    statusMessage.style.color = type === 'error' ? '#ef4444' : '#10b981';

    setTimeout(() => {
        statusMessage.style.display = 'none';
    }, 3000);
}

function clearStatus() {
    statusMessage.style.display = 'none';
}

function calculatePenalty(id) {
    return Math.random() > 0.8 ? '(Late fee: $2.00)' : '';
}
