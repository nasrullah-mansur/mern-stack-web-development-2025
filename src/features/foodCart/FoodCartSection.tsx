
const FoodCartSection = ({ title, children }) => {

    // let title = props.title; 

    return (
        <div>
            {title}
            The children is: {children}
        </div>
    )
}

export default FoodCartSection