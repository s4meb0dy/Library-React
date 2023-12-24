import React from "react"

const BookCreating = ({ create }) => {
    const [title, setTitle] = React.useState("")
    const [author, setAuthor] = React.useState("")
    const [year, setYear] = React.useState("")
    const [isAvailable, setIsAvailable] = React.useState(true)

    const onClickBtn = () => {
        create({ title, author, year, isAvailable })
    }

    return (
        <div className='view__creating'>
            <h1>Creating a reader</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Author</td>
                        <td>
                            <input
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td>
                            <input
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Is available</td>
                        <td>
                            <input
                                type='checkbox'
                                checked={isAvailable}
                                onChange={() =>
                                    setIsAvailable((value) => !value)
                                }
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={onClickBtn}>Create</button>
        </div>
    )
}

export default BookCreating
