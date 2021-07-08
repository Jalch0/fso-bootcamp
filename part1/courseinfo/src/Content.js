const Content = (props) => {

    const {content} = props
    const {exercises} = props

    return (
        <div>
            <p>
                {content[0]} {exercises[0]}
            </p>
            <p>
                {content[1]} {exercises[1]}
            </p>
            <p>
                {content[2]} {exercises[2]}
            </p>
        </div>
    )
}

export default Content