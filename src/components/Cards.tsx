import React, { useEffect, useState } from 'react';
import { useAppContext } from '../AppContext';
import { fetchData } from '../lib/api';
import Loading from './Loading';
import Error from './Error';

// interface Card {
//   id: number;
//   name: string;
// }

const Cards: React.FC = () => {
  const { searchQuery, setTotalItems } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
        setTotalItems(data.length)
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const filteredData = data.filter((item) =>
    item.mission_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {filteredData.map((item) => (
        <div key={item.id} className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.mission_name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
