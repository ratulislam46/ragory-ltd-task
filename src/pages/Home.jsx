import React from 'react';
import jsonData from '../data/data.json';
import DataTable from '../components/DataTable';

const Home = () => {

    return (
        <div>
            <h1 className='text-2xl'>Home Page</h1>
            <DataTable data={jsonData.data} />
        </div>
    );
};

export default Home;