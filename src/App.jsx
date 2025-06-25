import React from 'react';
import SiteHeader from './components/SiteHeader';
import LeftNav from './components/LeftNav';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <LeftNav />
        <main className="flex-1 p-4 bg-white">
          <h2 className="text-lg font-semibold">Main Content Area</h2>
        </main>
      </div>
    </div>
  );
};

export default App;
