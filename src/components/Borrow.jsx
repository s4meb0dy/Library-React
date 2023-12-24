import React from "react"
import { baseUrl } from "../apiConfig"

const Borrow = () => {
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
                setBooks(data.filter((b) => b.isAvailable))
            })
    }, [])

    const onClickBtn = () => {
        const readerId = readerRef.current.value
        const selectedBooks = []
        bookRef.current.querySelectorAll("option").forEach((element) => {
            if (element.selected) {
                selectedBooks.push(Number(element.value))
            }
        })
        if (!selectedBooks.length) {
            alert("Select books")
            return
        } else if (!readerId) {
            alert("Select a reader")
        }

        fetch(`${baseUrl}/Library/borrow?readerId=${readerId}`, {
            method: "POST",
            body: JSON.stringify(selectedBooks),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                alert("The operation is successful")
                setBooks((prev) => prev.filter((b) => !selectedBooks.includes(b.id)))
            } else {
                alert("The operation is unsuccessful")
            }
        })
    }

    return (
        <div className='view__creating'>
            <h1>Borrow books</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Reader</td>
                        <td>
                            <select ref={readerRef}>
                                {readers.map((r) => (
                                    <option key={r.id} value={r.id}>
                                        {r.id}, {r.fullName}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Books</td>
                        <td>
                            <select multiple ref={bookRef}>
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
            <button onClick={onClickBtn}>Borrow</button>
        </div>
    )
}

export default Borrow
