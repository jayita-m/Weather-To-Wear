import React, { useState } from 'react';
import TitleGPage from './comps/TitleGPage';
import ShowInfo from './comps/ShowInfo';

function GeneratePage() {

  return (
    <div className="App">
      <TitleGPage/>
      <ShowInfo/>
    </div>
  );
}

export default GeneratePage;
