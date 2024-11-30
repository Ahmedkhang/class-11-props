
export default function Child(props:any) {
    return(
        <div className="py-5">
            <p>Name : {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Class : {props.class}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
            <p>Favourite Dish : {props.favDish}</p>

        </div>
    )

    
}
