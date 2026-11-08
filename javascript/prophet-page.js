// Shared script for prophet pages (search, filters, and view tabs).
// Load at the end of <body> so the elements below exist when it runs.

const searchBar = document.getElementById('searchBar');
const callingFilter = document.getElementById('callingFilter');
const typeFilter = document.getElementById('typeFilter');
const teachingCount = document.getElementById('teachingCount');
const leftColumn = document.querySelector('.teachings-left');
const rightColumn = document.querySelector('.teachings-right');

// Remember every tile in its original order (left column first, then right)
const tiles = [
    ...leftColumn.querySelectorAll('.teaching-tile'),
    ...rightColumn.querySelectorAll('.teaching-tile')
];

function filterTeachings() {
    const search = searchBar.value.toLowerCase().trim();
    const calling = callingFilter.value;
    const type = typeFilter.value;
    const visibleTiles = [];

    tiles.forEach(tile => {
        const tileText = tile.textContent.toLowerCase();
        const matchesSearch = search === '' || tileText.includes(search);
        const matchesCalling = calling === 'all' || (tile.dataset.calling || '') === calling;
        const matchesType = type === 'all' || (tile.dataset.type || '') === type;

        if (matchesSearch && matchesCalling && matchesType) {
            tile.style.display = '';
            visibleTiles.push(tile);
        } else {
            tile.style.display = 'none';
            leftColumn.appendChild(tile); // park hidden tiles out of the way
        }
    });

    // Split the visible tiles evenly so both columns fill in from the top
    const half = Math.ceil(visibleTiles.length / 2);
    visibleTiles.forEach((tile, i) => {
        (i < half ? leftColumn : rightColumn).appendChild(tile);
    });

    teachingCount.textContent = 'Showing ' + visibleTiles.length + ' of ' + tiles.length + ' teachings';
}

searchBar.addEventListener('input', filterTeachings);
callingFilter.addEventListener('change', filterTeachings);
typeFilter.addEventListener('change', filterTeachings);
filterTeachings();

// ===== View tabs =====
// Only wired up on pages that have the tab buttons (older pages skip this).
const pageLayout = document.querySelector('.page-layout');
const filtersBox = document.getElementById('filters');
const tabButtons = document.querySelectorAll('.view-tabs button');

function setView(view) {
    pageLayout.dataset.view = view;
    tabButtons.forEach(b => b.setAttribute('aria-selected', b.dataset.view === view ? 'true' : 'false'));
    // Search/filters only apply to teachings
    const showFilters = view !== 'bio';
    if (filtersBox) filtersBox.style.display = showFilters ? '' : 'none';
    teachingCount.style.display = showFilters ? '' : 'none';
}

if (pageLayout && tabButtons.length) {
    tabButtons.forEach(b => b.addEventListener('click', () => setView(b.dataset.view)));
    setView('all');
}