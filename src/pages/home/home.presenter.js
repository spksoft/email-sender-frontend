import React from "react";
import styled from "styled-components";
import { Card, Input } from 'antd';

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

const Presenter = () => (
  <PageContainer>
    <Body>
      <Card
        title="Email Sender"
      >
        <RowContainer><Input addonBefore="From: " /></RowContainer>
        <RowContainer><Input addonBefore="To: " /></RowContainer>
        <RowContainer><Input addonBefore="Subject" /></RowContainer>
        <RowContainer><h4>Content: </h4></RowContainer>
        <RowContainer><Input.TextArea rows={4}></Input.TextArea></RowContainer>
      </Card>
    </Body>
  </PageContainer>
)

export default Presenter