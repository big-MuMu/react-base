import React from 'react';
import { Provider } from './context';
import Son from './son';

// export default (props) => {
//     return (
//         <Provider value={{
//             a: 1,
//             b: 2
//         }}>
//             <div>
//                 我是爹
//             </div>
//         </Provider>
//     )
// }

export default class Parent extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <Provider value={{
                a: 1,
                b: 2
            }}>
                <Son />
            </Provider>
        )
    }
}