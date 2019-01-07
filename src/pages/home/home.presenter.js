import React from "react";
import styled from "styled-components";
import { Card, Input, Button, Spin, Table } from 'antd';

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
}];

const dataSource = [{
  from: 'Mike',
  to: 'Tom',
  subject: '10 Downing Street',
  service: 'gmail',
  status: 'sent'
}, {
  from: 'Mike',
  to: 'Tom',
  subject: '10 Downing Street',
  service: 'gmail',
  status: 'sent'
}, {
  from: 'Mike',
  to: 'Tom',
  subject: '10 Downing Street',
  service: 'gmail',
  status: 'sent'
}, {
  from: 'Mike',
  to: 'Tom',
  subject: '10 Downing Street',
  service: 'gmail',
  status: 'sent'
}, {
  from: 'Mike',
  to: 'Tom',
  subject: '10 Downing Street',
  service: 'gmail',
  status: 'sent'
}, {
  from: 'Mike',
  to: 'Tom',
  subject: '10 Downing Street',
  service: 'gmail',
  status: 'sent'
}, {
  from: 'Mike',
  to: 'Tom',
  subject: '10 Downing Street',
  service: 'gmail',
  status: 'sent'
}, {
  from: 'Mike',
  to: 'Tom',
  subject: '10 Downing Street',
  service: 'gmail',
  status: 'sent'
}, {
  from: 'Mike',
  to: 'Tom',
  subject: '10 Downing Street',
  service: 'gmail',
  status: 'sent'
}, {
  from: 'Mike',
  to: 'Tom',
  subject: '10 Downing Street',
  service: 'gmail',
  status: 'sent'
}, {
  from: 'Mike',
  to: 'Tom',
  subject: '10 Downing Street',
  service: 'gmail',
  status: 'sent'
}, {
  from: 'Mike',
  to: 'Tom',
  subject: '10 Downing Street',
  service: 'gmail',
  status: 'sent'
}, {
  from: 'Mike',
  to: 'Tom',
  subject: '10 Downing Street',
  service: 'gmail',
  status: 'sent'
}];

const Presenter = ({ onFromChange, onToChnage, onSubjectChnage, onContentChange, isLoading, onSendClick, fromValue, toValue, subjectValue, contentValue, isLoadingHistory }) => (
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
            <Button onClick={onSendClick} loading={isLoading} type="primary" icon="download" size="large">Send</Button>
          </SendButtonContainer>
        </RowContainer>
      </Card>
      <Card
        title="Sent History"
        style={{ marginTop: '20px' }}
      >
        {
          isLoadingHistory ? (<PageContainer><Spin /></PageContainer>) 
            : <Table columns={tableColumns} dataSource={dataSource} pagination={{ pageSize: 10 }} />}
      </Card>
    </Body>
  </PageContainer>
)

export default Presenter