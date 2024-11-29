import PropTypes from "prop-types";
export default function Child(props) {
    return(
        <div>
            <p>Name : {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Class : {props.class}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
            <p>Favourite Dish : {props.favDish}</p>

        </div>
    )

    
}