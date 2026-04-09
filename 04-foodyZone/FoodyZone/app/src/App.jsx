import styled from "styled-components";

const App = () => {
  return (
    <>
  <Container>
    <TopSection>
    <div className="logo">
      <img src="../public/Foody Zone.svg" alt="logo" />
    </div>

    <div className="Search">
      <input type="text" placeholder="Search Food..." />
    </div>
    </TopSection>

    <FilterContainer>
    <Button>All</Button>
    <Button>Breakfast</Button>
    <Button>Lunch</Button>
    <Button>Dinner</Button>
    </FilterContainer>

    <FoodCardsContainer>
      <FoodCard />
    </FoodCardsContainer>
  </Container>
  </>
  )
};

export default App;

const Container = styled.div`
    
  margin: 0 auto;

`

const TopSection = styled.div`
  min-height:140px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .Search{
    input{
      border: 1px solid red;
      background-color: transparent;
      color: white;
      border-radius : 5px;
      height: 40px;
      font-size: 16px;
      padding:  0 16px;
    }

  }
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`

const Button = styled.button`
  background-color: red;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`

const FoodCardsContainer = styled.section`
  background-image: url(../public/bg.png);
  background-size: cover;
  height: calc(100vh - 210px);
`

const FoodCard = styled.div`

`