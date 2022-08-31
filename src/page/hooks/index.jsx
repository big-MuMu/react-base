import React from 'react';
import { Button } from 'antd';
import { useMyState } from './hooks';
import Code from '../Code';

 

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
            <Code lang='jsx'>
            {`
            (function(d) {
                var wfAD = d.createElement('script'), sAD = d.scripts[0];
                wfAD.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
                wfAD.async = true;
                sAD.parentNode.insertBefore(wfAD, sAD);
            })(document);
            \`}</Code>
        `}
            </Code>
        </div>
    )
}

export default Hooks;
