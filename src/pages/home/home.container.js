import React from 'react';
import { message } from 'antd'
import * as MailAPI from '../../apis/email'
import Presenter from './home.presenter'

class Container extends React.Component {
  state = {
    isLoading: false,
    isLoadingHistory: false,
    from: '',
    to: '',
    subject: '',
    text: '',
    historyData: null
  }

  async componentWillMount() {
    this.setState({ isLoadingHistory: true })
    const historyData = await MailAPI.getHistory()
    this.setState({ historyData: historyData.data.data, isLoadingHistory: false })
  }

  onFromChange(from) {
    this.setState({ from })
  }

  onToChnage(to) {
    this.setState({ to })
  }

  onSubjectChnage(subject) {
    this.setState({ subject })
  }

  onContentChange(text) {
    this.setState({ text })
  }

  async onSendClick() {
    this.setState({ isLoading: true })
    try { 
      await MailAPI.sendMail({ ...this.state })
      this.setState({
        isLoading: false,
        from: '',
        to: '',
        subject: '',
        text: ''
      })
      message.info("Your email was sent")
    } catch (err) {
      message.error("Can't send your email. Please try again later")
    }
    this.setState({ isLoading: false })
  }

  render() {
    return (
      <Presenter
        isLoadingHistory={this.state.isLoadingHistory}
        fromValue={this.state.from}
        toValue={this.state.to}
        subjectValue={this.state.subject}
        contentValue={this.state.text}
        onFromChange={this.onFromChange.bind(this)}
        onToChnage={this.onToChnage.bind(this)}
        onSubjectChnage={this.onSubjectChnage.bind(this)}
        onContentChange={this.onContentChange.bind(this)}
        onSendClick={this.onSendClick.bind(this)}
        isLoading={this.state.isLoading}
      />
    )
  }
}

export default Container