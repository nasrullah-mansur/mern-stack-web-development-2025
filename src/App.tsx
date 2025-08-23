import FoodCartItem from "./features/foodCart/FoodCartItem";
import FoodCartSection from "./features/foodCart/FoodCartSection";
import Footer from "./sections/Footer";
import Header from "./sections/Header";


const App = () => {

  const myFavoriteComponent = "headerasf";

  const myTitle = "this is title from app component"

  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];

  let renderPeople = people.map(item => <li>{item}</li>)

  return (
    <>

      {myFavoriteComponent == "header" ? <Header /> : <Footer />}

      <FoodCartSection title="this is food cart section title from app component">
        <FoodCartItem />

        <ul>
          {renderPeople}
        </ul>
      </FoodCartSection>

      <hr />
    </>
  )
}




export default App;