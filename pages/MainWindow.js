import React from 'react';
import Home from './Layouts/Home.jsx';
import Servers from './Layouts/Servers.jsx';
import Discord from './Layouts/Discord.jsx';
import Vote from './Layouts/Vote.jsx';
import Donate from './Layouts/Donate.jsx';

const MainWindow = ({tab}) => {
    console.log(tab)
    const renderCurrentTab = () => {
        switch (tab) {
            case "Servers":
                return <Servers/>;
            case "Discord":
                return <Discord/>;
            case "Vote":
                return <Vote/>;
            case "Donate":
                return <Donate/>;
            default:
                return <Home/>;
        }
    }
    return (
        <div className="min-h-screen bg-cover bg-[url('/img/BG02.jpg')] flex h-full items-center justify-center">
            {renderCurrentTab()}
        </div>
    )
};

export default MainWindow;
