import React from 'react';

const Servers = () => {

    const servers = [
        {name: "Survival", desc: "", img: "/img/BG01.jpg", link: ''},
        {name: "Prison", desc: "", img: "/img/BG01.jpg", link: ''},
        {name: "Creative", desc: "", img: "/img/BG01.jpg", link: ''}
    ];

    return (
        <>
            <div className="grid grid-cols-3 gap-4 grid-rows-1 grid-flow-col place-items-stretch h-56">
                {servers.map((server, id) => (
                    <div key={id} style={{backgroundImage: `url(${server.img})`}} className="row-span-1 rounded-lg border-2 border-solid border-white h-fit bg-cover">
                        <h1>{server.name}</h1>
                    </div>
                ))}
            </div>
        </>
    )
};

export default Servers;
