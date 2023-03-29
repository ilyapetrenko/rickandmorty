import React from "react";

export const Char = ({char} : {char: any}) => {
    return (
        <div className='justify-between mx-2.5 my-6'>
        <img
            className='w-80 h-80 rounded-full'
            src={char?.image}
        />
            <ul>
                <li className="text-center"><span>{char.name}</span></li>
                <li><span>{char.status}</span></li>
                <li><span>{char.species}</span></li>
                <li><span>{char.gender}</span></li>
                <li><span>{char.location.name}</span></li>
            </ul>
        </div>
    )
}