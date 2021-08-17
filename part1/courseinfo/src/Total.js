const Total = ({exercises}) => {
    return (
        <strong><p>total of {exercises.reduce((s, p) => {
            return s + p.exercise
        },0 )} exercises</p></strong>
    )
}
export default Total
