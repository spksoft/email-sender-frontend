import React from "react";
import styled from "styled-components";
import { Card, Input, Button, Spin, Table, Icon } from 'antd';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  width: 800px;
  padding: 20px;
  flex-direction: column;
`

const RowContainer = styled.div`
  padding: 3px;
`

const SendButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const tableColumns = [{
  title: 'From',
  dataIndex: 'from',
  key: 'from',
}, {
  title: 'To',
  dataIndex: 'to',
  key: 'to',
}, {
  title: 'Subject',
  dataIndex: 'subject',
  key: 'subject',
}, {
  title: 'Service',
  dataIndex: 'service',
  key: 'service',
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
  render: text => (text === 'fail') ? <Icon style={{ color: 'red' }} type="close-circle" /> : <Icon style={{ color: 'green' }} type="check-circle" /> 
}];

const Presenter = ({ 
  onFromChange, 
  onToChnage, 
  onSubjectChnage, 
  onContentChange, 
  isLoading, 
  onSendClick, 
  fromValue, 
  toValue, 
  subjectValue, 
  contentValue, 
  isLoadingHistory,
  historyDataSource,
  onEmailChange
}) => (
  <PageContainer>
    <Body>
      <Card
        title="Email Sender"
      >
        <RowContainer>
          <Input
            value={fromValue}
            addonBefore="From: " 
            onChange={(e) => onFromChange(e.target.value)}
          />
        </RowContainer>
        <RowContainer>
          <Input
            value={toValue} 
            addonBefore="To: "
            onChange={(e) => onToChnage(e.target.value)}
          />
        </RowContainer>
        <RowContainer>
          <Input
            value={subjectValue} 
            addonBefore="Subject" 
            onChange={(e) => onSubjectChnage(e.target.value)} 
          />
        </RowContainer>
        <RowContainer>
          <h4>Content: </h4>
        </RowContainer>
        <RowContainer>
          <Input.TextArea 
            value={contentValue}
            rows={6} 
            onChange={(e) => onContentChange(e.target.value)}
          >
          </Input.TextArea>
        </RowContainer>
        <RowContainer>
          <SendButtonContainer>
            <Button onClick={onSendClick} loading={isLoading} type="primary" icon="upload" size="large">Send</Button>
          </SendButtonContainer>
        </RowContainer>
      </Card>
      <Card
        title="Sent History"
        style={{ marginTop: '20px' }}
      >
        <RowContainer>
          <Input placeholder="Email" onChange={(e) => onEmailChange(e.target.value)} />
        </RowContainer>
        <RowContainer>
          {
            isLoadingHistory ? (<PageContainer><Spin /></PageContainer>) 
              : <Table columns={tableColumns} dataSource={historyDataSource} pagination={{ pageSize: 10 }} />}
        </RowContainer>
      </Card>
    </Body>
  </PageContainer>
)

export default Presenter