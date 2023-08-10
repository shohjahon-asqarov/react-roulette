import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const data = [
    { option: '0' },
    { option: '1' },
    { option: '2' },
]

const Roulette = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    }

    return (
        <div>
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}

                onStopSpinning={() => {
                    setMustSpin(false);
                }}
            />
            <button onClick={handleSpinClick}>SPIN</button>
        </div>
    )
}

export default Roulette