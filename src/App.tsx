import FoodCartItem from "./features/foodCart/FoodCartItem";
import Footer from "./sections/Footer";
import Header from "./sections/Header";


const foodCartData: object[] = [
  {
    id: 1,
    title: "this is food one"
  },
  {
    id: 2,
    title: "this is food one"
  },
  {
    id: 3,
    title: "this is food one"
  }
]

const myName: string = "nasrullah mansur";


const App = () => {
  return (
    <>
      <Header />
      {myName}


      {foodCartData.map(item => <FoodCartItem />)}





      <Footer />
    </>
  )
}




export default App;