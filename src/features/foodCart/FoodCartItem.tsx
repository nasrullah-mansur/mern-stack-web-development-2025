
const FoodCartItem = () => {

    let myContent = "";

    let clickHandler = (data) => {
        alert(data);

    }

    return (
        <div>
            <div className="p-2 m-2 border-2">this is food cart item</div>

            <h1 className="text-3xl">This content is: {myContent}</h1>

            <button onClick={() => { clickHandler("this is after content document") }} className="bg-red-500 p-3 cursor-pointer">Click to add something</button>
        </div>
    )
}

export default FoodCartItem;