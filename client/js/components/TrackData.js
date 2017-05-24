import 'whatwg-fetch';

async function fetchSoundcloud() {
	const url = `https://api.soundcloud.com/users/underground-riches/favorites?client_id=SxZ147CXpYUuUkX93wX9UcZjqwXcsB1d`;
	const response = await fetch(url);
	const data = await response.json();
  const info = extractTrackInfo(data);
  return info;
}

function extractTrackInfo(response) {
  return response.map((track) => {
    const { id, stream_url, title, duration, artwork_url } = track;
    const { username } = track.user;
    return { stream_url, title, duration, artwork_url, username };
  })
}

export default fetchSoundcloud;

