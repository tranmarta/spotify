import { useState, useEffect } from 'react';

const API = '/assets/api.json';

function App()
{
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(0);
  const audioRef = useRef();

  useEffect(
    () => {
      fetch(API).then(response => response.json()).then(data => setSongs(data))
      []);
    }, []);

  if (songs.length < 1)
  {
    return (
      <div>Ładowanie danych...</div>
    )  
  }

	return (
    <div className='min-h-screen bg-gray-900 text-white justify-center items-center flex-col m-auto'>
      <secton className='bg-black p-8 text-center'>
        <h1 className='text-3xl font-bold mb-4'>Spotify</h1>
        <img src={ songs[selectedSong].cover } className='mx-auto my-4 w-64 object-cover shadow-lg' />
        <button onClick={ () => audioRef.current.play() }>PLAY</button>
        <button onClick={ () => audioRef.current.pause() }>Pause</button>
        <audio ref={ audioRef }>
          <source src={ songs.[selectedSong].audio } />
        </audio>
      </secton>
	  Spotify
      <section>
        <h1 className='text-2xl font-bold mb-4 text-center'>
          Lista piosenek:
        </h1>
        <ul className='flex flex-col space-y-2'>
          { songs.map((song, index) => (
            <li className={ 'text-center py-2 px-4 cursor-pointer rounded-lg' } key={ song.id }>
              { song.title } by { song.author }
            </li>
          )) }
        </ul>
      </section>
    </div>
  )
}