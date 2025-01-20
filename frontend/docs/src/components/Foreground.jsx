import React from 'react';
import Card from './Card';
import {useRef} from 'react'

const Foreground = ()=>{
    const ref = useRef(null);
    const data = [
        { desc:"Lorem ipsum dolor sit amet, consectetur adipisicing." ,
            filesize:"0.9mb",
            close:true,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}
        },
        { desc:"Lorem ipsum dolor sit amet, consectetur adipisicing." ,
            filesize:"0.9mb",
            close:true,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"blue"}
        },
        { desc:"Lorem ipsum dolor sit amet, consectetur adipisicing." ,
            filesize:"0.9mb",
            close:true,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}
        },
    ];
    return(
        <>
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap p-5 gap-10'>
            {data.map((item,index)=>(
                <Card key={index} data={item} reference={ref} />
            ))}

        </div>
        </>
    )
}

export default Foreground;