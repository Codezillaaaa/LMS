
// Mock Data
let books = [
    { id: '101', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'Available', holder: null, coverColor: '#e0f2fe' },
    { id: '102', title: 'To Kill a Mockingbird', author: 'Harper Lee', status: 'Issued', holder: 'Alice Johnson', coverColor: '#fce7f3' },
    { id: '103', title: '1984', author: 'George Orwell', status: 'Available', holder: null, coverColor: '#ede9fe' },
    { id: '104', title: 'Pride and Prejudice', author: 'Jane Austen', status: 'Available', holder: null, coverColor: '#fef3c7' },
    { id: '105', title: 'The Catcher in the Rye', author: 'J.D. Salinger', status: 'Issued', holder: 'Bob Smith', coverColor: '#dcfce7' },
    { id: '106', title: 'The Hobbit', author: 'J.R.R. Tolkien', status: 'Available', holder: null, coverColor: '#fae8ff' }
];

// DOM Elements
const bookList = document.getElementById('bookList');
const bookCount = document.getElementById('bookCount');
const searchInput = document.getElementById('searchInput');
const issueForm = document.getElementById('issueForm');
const returnForm = document.getElementById('returnForm');
const statusMessage = document.getElementById('statusMessage');

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    // Set default dates to today
    const today = new Date().toISOString().split('T')[0];
    document.querySelector('input[name="issueDate"]').value = today;
    document.querySelector('input[name="returnDate"]').value = today;
    
    renderBooks(books);
});

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
        const initials = book.title.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();

        card.innerHTML = `
            <div class="book-cover" style="background: ${book.coverColor}">
                ${initials}
                <div class="book-tag">#${book.id}</div>
            </div>
            <div class="book-title">${book.title}</div>
            <div class="book-author">by ${book.author}</div>
            <div class="status-badge ${statusClass}">
                ${book.status === 'Issued' && book.holder ? `Issued to ${book.holder}` : book.status}
            </div>
        `;
        bookList.appendChild(card);
    });
}

// Search Logic
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = books.filter(book => 
        book.title.toLowerCase().includes(term) || 
        book.author.toLowerCase().includes(term) || 
        book.id.includes(term)
    );
    renderBooks(filtered);
});

// Tab Switching
window.switchTab = function(mode) {
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
    const bookId = formData.get('bookId');
    const member = formData.get('memberName');

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
    
    renderBooks(books);
    showStatus(`Book "${books[bookIndex].title}" issued successfully!`, 'success');
    e.target.reset();
    
    // Reset date after form reset
    document.querySelector('input[name="issueDate"]').value = new Date().toISOString().split('T')[0];
});

// Return Book
returnForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookId = formData.get('bookId');

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
    const penalty = calculatePenalty(books[bookIndex].id); // Mock logic
    books[bookIndex].status = 'Available';
    books[bookIndex].holder = null;

    renderBooks(books);
    showStatus(`Book returned! ${penalty}`, 'success');
    e.target.reset();

    // Reset date
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
    // Just a fun mock element
    return Math.random() > 0.8 ? '(Late fee: $2.00)' : '';
}
