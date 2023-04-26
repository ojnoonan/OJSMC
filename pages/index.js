import React, { useState } from 'react';
import Navbar from './Navbar.js';
import MainWindow from './MainWindow.js';

export default function Home() {
  const tabs = ['Home', 'Servers', 'Discord', 'Vote', 'Donate'];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <>
      <MainWindow tab={currentTab}/>
      <Navbar changePage={setCurrentTab.bind(this)} tabs={tabs}/>
    </>
  )
}
