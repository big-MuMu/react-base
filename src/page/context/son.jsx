import React from 'react';
import { Consumer } from './context';

// export default (props) => {
//     console.log(99, props);
//     return (
//         <Consumer>
//             <div>
//                 我是儿子
//             </div>
//         </Consumer>
//     )
// }

export default class Son extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <Consumer>
                {context => {
                    console.log(1111, context)
                    return (
                        <div>
                            我是儿子
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}