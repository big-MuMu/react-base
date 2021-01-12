import { Divider } from 'antd';
import React from 'react';

const { Consumer, Provider } = React.createContext();

export class BrowserRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPath: window.location.pathname
        }
    }

    componentDidMount() {
        window.addEventListener('popstate', this.pathChange);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.pathChange);
    }

    pathChange = () => {
        console.log(window.location)
        this.setState({
            currentPath: window.location.pathname
        })
    }

    render() {
        return (
            <Provider value={{ currentPath: this.state.currentPath, pathChange: this.pathChange }}>
                {this.props.children}
            </Provider>
        )
    }
}

export class Route extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { path, component } = this.props;
        return (
            <Consumer>
                {/* {({ currentPath }) => (
                    path === currentPath && component
                )} */}
                {({ currentPath }) => {
                    if (path === currentPath) {
                        return (
                            React.createElement(component, this.props)
                        )
                    }
                    return null;
                }}
            </Consumer>
        )
    }
}

export class Link extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { to } = this.props;
        console.log(123, this.props)
        return (
            <Consumer>
                {({ pathChange }) => (
                    <a
                        {...this.props}
                        onClick={(e) => {
                            e.preventDefault();
                            window.history.pushState(null, '', to)
                            pathChange();
                        }}
                    >
                        {this.props.children}
                    </a>
                )}
            </Consumer>
        )
    }
}