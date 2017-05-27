import 'whatwg-fetch';
import { CLIENT_ID, SOUNDCLOUD_ARTIST } from '../constants/constants';

async function fetchSoundcloud() {
	const url = `https://api.soundcloud.com/users/${SOUNDCLOUD_ARTIST}/favorites?client_id=${CLIENT_ID}`;
	const response = await fetch(url);
	const data = await response.json();
  const info = extractTrackInfo(data);
  return info;
}

function extractTrackInfo(response) {
  return response.map((track) => {
    const { id, stream_url, title, duration, artwork_url } = track;
    const { username } = track.user;
    return { id, stream_url, title, duration, artwork_url, username };
  })
}

export default fetchSoundcloud;

