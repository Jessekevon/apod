import React, { useEffect, useState } from 'react';

const API_KEY = 'cLDno3CrKltLF8YOqniPP21W9zwQSokdjiQPyNrwaqKzLjj1hjDUrdwV';
const API_ENDPOINT = `https://api.pexels.com/v1/search?query=astronomy&per_page=12`;

const App = () => {
  const [apods, setApods] = useState([]);

  useEffect(() => {
    fetchApods();
  }, []);

  const fetchApods = async () => {
    try {
      const response = await fetch(API_ENDPOINT, {
        headers: {
          Authorization: API_KEY
        }
      });
      const data = await response.json();
      setApods(data.photos);
    } catch (error) {
      console.error('Error fetching APODs:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold my-16 text-center">Astronomy Pictures of the Day</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {apods.map(apod => (
          <div key={apod.id} className="flex flex-col items-center bg-white rounded-md overflow-hidden">
            <h2 className="text-lg font-bold my-14">{apod.photographer}</h2>
            <img
              src={apod.src.large}
              alt={apod.photographer}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
