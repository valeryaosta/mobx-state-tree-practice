import React from 'react';

interface Props {

}

interface State {

}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {}
  }


  render() {
    return (
        <div>
          <p>Hi</p>
        </div>
    );
  }
}

export default App;
