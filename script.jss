// Select elements
const map = document.getElementById('map');
const form = document.getElementById('marker-form');
const output = document.getElementById('output');

// Add event listener to form
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const x = parseInt(document.getElementById('x').value);
    const y = parseInt(document.getElementById('y').value);
    const description = document.getElementById('description').value;

    // Validate coordinates
    if (x < 0 || x > 513 || y < 0 || y > 1023) {
        alert('Coordinates are out of range.');
        return;
    }

    // Create marker
    const marker = document.createElement('img');
    marker.src = 'assets/marker1.png'; // Default marker image
    marker.classList.add('marker');
    marker.style.left = `${(x / 513) * 100}%`;
    marker.style.top = `${(y / 1023) * 100}%`;

    // Attach description to marker
    marker.dataset.description = description;

    // Add click event to marker
    marker.addEventListener('click', () => {
        output.textContent = `X: ${x}, Y: ${y}, Description: ${description}`;
    });

    // Append marker to map
    map.parentElement.appendChild(marker);

    // Clear form
    form.reset();
});
