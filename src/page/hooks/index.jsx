import React from 'react';
import { Button } from 'antd';
import { useMyState } from './hooks';

 

const Hooks = (props) => {
    const [count, setCount] = useMyState(0);
    const [count1, setCount1] = useMyState(0);
    return (
        <div>
            <Button onClick={() => {
                setCount(count + 1);
            }}>点击</Button>  你点击了{count}次

            <Button onClick={() => {    
                setCount1(count1 + 1);
            }}>点击</Button>  你点击了{count1}次
        </div>
    )
}

export default Hooks;
