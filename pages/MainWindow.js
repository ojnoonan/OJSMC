import React from 'react';
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
                return <Servers/>;
        }
    }
    return (
        <div className="min-h-screen bg-cover bg-[url('/img/BG02.jpg')]">
            {renderCurrentTab()}
        </div>
    )
};

export default MainWindow;
