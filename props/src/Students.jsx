import PropTypes from 'prop-types'

function Students(props) {
   return(
    <div className="student" >
        <p>Name: {props.name}</p>
        <p>age: {props.age} </p>
        <p>Student: {props.isStudent ? "Ts Nigga study here" : "Not student just unemployed"} </p>
    </div>
   )
}

Students.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
export default Students