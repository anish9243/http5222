# Interactive Storytelling Application

This Interactive Storytelling Application offers a unique platform where users can type in stories, have them transformed into speech, and be accompanied by dynamically selected background music. Additionally, the application suggests related books based on the story's content, using the Open Library API. 

This project uses the VoiceRSS API for text-to-speech capabilities and Spotify's API for background music.

## Features

- **Text-to-Speech Conversion**: Converts user-inputted text into audible speech using VoiceRSS.
- **Dynamic Background Music**: Automatically selects and plays background music that fits the mood of the story, sourced from Spotify's extensive library.
- **Related Books Recommendations**: Suggests books related to the themes or content of the user's story, enhancing the interactive experience and providing further reading options.

## Prerequisites

To set up and run this project, you need:
- Node.js (version 12 or higher recommended).
- A Spotify Developer account for Spotify API keys.
- An API key from VoiceRSS for the text-to-speech service.
- Access to the Open Library API for fetching book data.

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### Install Dependencies

Install the necessary Node.js dependencies by running:

```bash
npm install
```

### Set up Environment Variables

Create a `.env` file in the project's root directory and fill it with your API keys:

```plaintext
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
VOICERSS_API_KEY=your_voicerss_api_key
```

Replace the placeholders with your actual Spotify and VoiceRSS credentials.

### Start the Server

Launch the server using:

```bash
npm start
```

This will activate the server on `http://localhost:3000`. Navigate to this URL in your browser to start using the application.

## Usage

- **Entering Text**: On the homepage, input the text for your story into the text area provided.
- **Generate Speech**: Click on "Generate Speech" to convert the text into spoken audio. The audio can be played directly on the page.
- **Background Music**: Select and play appropriate background music from Spotify.
- **Related Books**: After generating the speech, the application will display a list of books related to the story's theme, providing links for further reading.

##

I hope you enjoy using the Interactive Storytelling Application! Dive into creating, listening, and exploring stories like never before.
