import React from "react"
import { baseUrl } from "../../apiConfig"

const FormCreating = ({ create }) => {
    const [readers, setReaders] = React.useState([])
    const [books, setBooks] = React.useState([])

    const readerRef = React.useRef(null)
    const bookRef = React.useRef(null)

    React.useEffect(() => {
        fetch(`${baseUrl}/Reader`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setReaders(data)
                return fetch(`${baseUrl}/Book`)
            })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setBooks(data)
            })
    }, [])

    const onClickBtn = () => {
        const readerId = readerRef.current.value
        const bookId = bookRef.current.value

        create({ readerId, bookId })
    }

    return (
        <div className='view__creating'>
            <h1>Creating a form</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Reader</td>
                        <td>
                            <select ref={readerRef}>
                                {readers.map((r) => (
                                    <option key={r.id} value={r.id}>
                                        {r.fullName}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Book</td>
                        <td>
                            <select ref={bookRef}>
                                {books.map((r) => (
                                    <option key={r.id} value={r.id}>
                                        {r.title}, {r.author}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={onClickBtn}>Create</button>
        </div>
    )
}

export default FormCreating
