import React from 'react';
import Presenter from './home.presenter'

class Container extends React.Component {
  state = {
    isLoading: false,
    from: '',
    to: '',
    subject: '',
    content: ''
  }

  onSendClick() {
    console.log(this.state)
  }

  render() {
    return (
      <Presenter
        onFromChange={(e) => console.log(e)}
        onToChnage={(e) => console.log(e)}
        onSubjectChnage={(e) => console.log(e)}
        onContentChange={(e) => console.log(e)}
        onSendClick={this.onSendClick.bind(this)}
        isLoading={false}
      />
    )
  }
}

export default Container