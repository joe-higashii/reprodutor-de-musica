const authEndpoint = "https://account.spotify.com/authorize?";
const clientId = "255aa34266cb45e592b9460b296cc670";
const redirectUri = "https://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
