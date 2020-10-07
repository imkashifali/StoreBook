import React, {useState} from 'react'
import Button from './Button'
import Text from './Text'
import './counter.css';


const Counter = ({initialValue=0}) => {

    let [count, setcount] = useState(initialValue);

    return (
        <>
            <Text value={"Counter App"}
                style={{fontSize: "34px", fontWeight:"Bold"}} />

            <Text value={`Value of Counter: ${count}`}
                style={{fontSize: "24px"}} />

            <Button value={"Increment"}
                    className='btn-inc'
                    onClick={() => setcount(count + 1)}/>
                    
            <Button value={"Decrement"}
                    className='btn-dec'
                    onClick={() =>setcount(count - 1) } />
        </>
    )
}

export default Counter
