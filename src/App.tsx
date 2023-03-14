
import './App.css';
import { Router } from "./Router";

import styled from "styled-components";
import { Header } from './components/layouts/Header';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color : yellow;
  max-width: 480px;
  min-width: 340px;
  width: 100%;
`

const ContentContainer = styled.div`
  flex: auto;
`

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <ContentContainer>
          <Router />
        </ContentContainer>
      </Container>
    </div>
  );
}

export default App;
