const Content = ({content}) => {
    return (
        <div>
            {content.map((content) => (
            <div key={content.id}>
                <h2>{content.name}</h2>
                <ul>{content.parts.map(ex => 
                    <li key={ex.id}>
                        {ex.name}
                    </li>)}
                </ul>
                <p>
                    <strong>
                        total of {content.parts.reduce((s, p) => {
                        return s + p.exercises
                    }, 0)} exercises
                    </strong>
                </p>
            </div>
            ))}
        </div>
    )
}

export default Content