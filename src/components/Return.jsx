import React from "react"
import { baseUrl } from "../apiConfig"

const Return = () => {
    const [books, setBooks] = React.useState([])

    const bookRef = React.useRef(null)

    React.useEffect(() => {
        fetch(`${baseUrl}/Book`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setBooks(data.filter((b) => !b.isAvailable))
            })
    }, [])

    const onClickBtn = () => {
        const bookId = bookRef.current.value

        if (!bookId) {
            alert("Select books")
            return
        }

        fetch(`${baseUrl}/Library/return?bookId=${bookId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                alert("The operation is successful")
                setBooks((prev) => prev.filter((b) => b.id != bookId))
            } else {
                alert("The operation is unsuccessful")
            }
        })
    }

    return (
        <div className='view__creating'>
            <h1>Return books</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Books</td>
                        <td>
                            <select ref={bookRef}>
                                {books.map((b) => (
                                    <option key={b.id} value={b.id}>
                                        {b.id}, {b.title}, {b.author}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={onClickBtn}>Return</button>
        </div>
    )
}

export default Return
