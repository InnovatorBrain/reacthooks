import React, { useState, useEffect } from 'react'

const useEffectHookk = () => {
    const [initsize, setinitsize] = useState(window.innerWidth) 

    useEffect(() => {
        const updateWindowSize = () => setinitsize(window.innerWidth);

        window.addEventListener('resize', updateWindowSize);

        return () => {
            window.removeEventListener('resize', updateWindowSize);
        };
    }, []); 

    return (
        <h1 style={{fontSize: '30px', textAlign: 'center'}}>The Screen Size is {initsize}</h1>
    )
}

export default useEffectHookk
