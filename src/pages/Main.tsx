import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color : yellow;
  max-width: 480px;
`
export function Main() {
  return (
    <div>
      <Container>
        <h1>메인 페이지</h1>
      </Container>
    </div>
  )
}