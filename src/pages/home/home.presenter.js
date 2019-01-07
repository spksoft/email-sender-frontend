import React from "react";
import styled from "styled-components";
import { Card, Input, Button } from 'antd';

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

const Presenter = ({ onFromChange, onToChnage, onSubjectChnage, onContentChange }) => (
  <PageContainer>
    <Body>
      <Card
        title="Email Sender"
      >
        <RowContainer><Input addonBefore="From: " onChange={(e) => onFromChange(e.target.value)}/></RowContainer>
        <RowContainer><Input addonBefore="To: " onChange={(e) => onToChnage(e.target.value)} /></RowContainer>
        <RowContainer><Input addonBefore="Subject" onChange={(e) => onSubjectChnage(e.target.value)} /></RowContainer>
        <RowContainer><h4>Content: </h4></RowContainer>
        <RowContainer><Input.TextArea rows={6} onChange={(e) => onContentChange(e.target.value)}></Input.TextArea></RowContainer>
        <RowContainer>
          <SendButtonContainer>
            <Button type="primary" icon="download" size="large">Send</Button>
          </SendButtonContainer>
        </RowContainer>
      </Card>
    </Body>
  </PageContainer>
)

export default Presenter