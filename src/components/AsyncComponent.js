import React, { Component } from "react"; //HOC async Component

export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        state = {
            component: null
        };

        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({ component: component });
        }
        render() {
            const Component = this.state.component;

            return Component ? <Component {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}