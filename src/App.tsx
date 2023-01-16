import React from 'react';
import {setupRootStore} from "./mst/setup";
import {Provider} from "mobx-react";
import {EmployerComponent} from "./components/Employer";

interface Props {

}

interface State {
    rootTree: any,
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            rootTree: null,
        }
    }

    componentDidMount = () => {
        const {rootTree} = setupRootStore();
        this.setState({rootTree});
    }

    render() {
        const {rootTree} = this.state;
        if (!rootTree) return null;
        return (
            <Provider rootTree={rootTree}>
                <EmployerComponent />
            </Provider>

        );
    }
}

export default App;
