const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

let spotifyToken = {
    accessToken: null,
    expiryTime: null
};

async function fetchSpotifyToken() {
    const currentTime = Date.now();
    // Check if the current token is still valid and not set to refresh every 10 minutes
    if (spotifyToken.accessToken && spotifyToken.expiryTime > currentTime && currentTime + 600000 < spotifyToken.expiryTime) {
        return spotifyToken.accessToken;
    }
    
    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    const auth = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');

    try {
        const response = await axios.post(tokenUrl, params.toString(), {
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const data = response.data;
        // Set the token to expire in 10 minutes regardless of the Spotify-defined expiration
        spotifyToken.accessToken = data.access_token;
        spotifyToken.expiryTime = currentTime + 600000; // 10 minutes from now
        return data.access_token;
    } catch (error) {
        console.error('Error fetching Spotify token:', error);
        throw new Error('Failed to retrieve Spotify token');
    }
}

module.exports = fetchSpotifyToken;
