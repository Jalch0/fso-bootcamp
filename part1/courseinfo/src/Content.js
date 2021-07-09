import Part from "./Part"

const Content = ({content, exercises}) => {
    return (
        <div>
            <Part content={content[0]} exercise={exercises[0]}/>
            <Part content={content[1]} exercise={exercises[1]}/>
            <Part content={content[2]} exercise={exercises[2]}/>
        </div>
    )
}

export default Content