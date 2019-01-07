import React from 'react';
import Presenter from './home.presenter'

class Container extends React.Component {
  render() {
    return (
      <Presenter
        onFromChange={(e) => console.log(e)}
        onToChnage={(e) => console.log(e)}
        onSubjectChnage={(e) => console.log(e)}
        onContentChange={(e) => console.log(e)}
        isLoading={false}
      />
    )
  }
}

export default Container