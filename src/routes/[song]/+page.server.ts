import { ACCESS_TOKEN } from '$env/static/private';
import { Client } from 'genius-lyrics';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const client = new Client(ACCESS_TOKEN);
	const [song] = await client.songs.search(params.song);
	const [kidsBopSong] = await client.songs.search(`${params.song} Kidz Bop`);

	return {
		original: {
			title: song.title,
			artist: song.artist.name,
			lyrics: await song.lyrics()
		},
		kidzBop: {
			title: kidsBopSong.title,
			artist: kidsBopSong.artist.name,
			lyrics: await kidsBopSong.lyrics()
		}
	};
};
