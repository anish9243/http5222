document.getElementById('generateStory').addEventListener('click', async () => {
    const text = document.getElementById('storyText').value;

    // Text-to-Speech API request
    const ttsResponse = await fetch('/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });
    const ttsAudio = await ttsResponse.text();
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.querySelector('source').src = ttsAudio;
    audioPlayer.load();

    // Show the story display section
    const storyDisplay = document.querySelector('.story-display');
    storyDisplay.style.display = 'block'; // Make the section visible

    // Background music request
    const musicResponse = await fetch('/background-music?type=jungle');
    const musicData = await musicResponse.json();
    if (musicData.track) {
        const musicPlayer = document.getElementById('musicPlayer');
        musicPlayer.querySelector('source').src = musicData.track;
        musicPlayer.load();
        musicPlayer.volume = 0.6;
        playBoth(audioPlayer, musicPlayer);
    } else {
        alert('No background music available');
    }

    // Function to play both audios simultaneously
    async function playBoth(audioPlayer, musicPlayer) {
        Promise.all([
            new Promise((resolve) => audioPlayer.oncanplaythrough = resolve),
            new Promise((resolve) => musicPlayer.oncanplaythrough = resolve)
        ]).then(() => {
            audioPlayer.play();
            musicPlayer.play();
        });
    }

    // Fetching related books based on text
    try {
        const keywords = text.match(/\b(\w+)\b/g).slice(0, 5).join(' ');
        const booksResponse = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(keywords)}`);
        const booksData = await booksResponse.json();
        const bookList = document.getElementById('bookList');
        bookList.innerHTML = ''; // Clear previous results
        if (booksData.docs.length > 0) {
            booksData.docs.slice(0, 5).forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.className = 'col-md-4';
                bookCard.innerHTML = `
                    <div class="card mb-4 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text">${book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
                            <a href="https://openlibrary.org${book.key}" target="_blank" class="btn btn-secondary">View More</a>
                        </div>
                    </div>
                `;
                bookList.appendChild(bookCard);
            });
        } else {
            const noBooks = document.createElement('div');
            noBooks.className = 'col-12';
            noBooks.innerHTML = '<p>No related books found.</p>';
            document.getElementById('bookList').appendChild(noBooks);
        }
    } catch (error) {
        console.error('Error fetching related books:', error);
        const bookList = document.getElementById('bookList');
        bookList.innerHTML = '<li class="list-group-item">Error fetching related books.</li>';
    }
});
