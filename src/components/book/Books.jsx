import React from "react"
import { baseUrl } from "../../apiConfig"
import TBody from "../TBody"
import ReaderCreating from "../reader/ReaderCreating"
import BookCreating from "./BookCreating"

const Books = () => {
    const [data, setData] = React.useState([])

    const fetchBooks = () => {
        fetch(`${baseUrl}/Book`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setData(
                    data.map((item) => ({
                        id: item.id,
                        title: item.title,
                        author: item.author,
                        year: item.year,
                        isAvailable: item.isAvailable,
                    }))
                )
            })
    }

    React.useEffect(() => {
        fetchBooks()
    }, [])

    const deleteRow = (id) => {
        fetch(`${baseUrl}/Book/${id}`, {
            method: "DELETE",
        }).then((response) => {
            if (response.ok) {
                setData((data) => data.filter((item) => item.id != id))
                alert("The operation is successful")
            } else {
                alert("The operation is unsuccessful")
            }
        })
    }

    const createRow = (data) => {
        fetch(`${baseUrl}/Book`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                alert("The operation is successful")
                fetchBooks()
            } else {
                alert("The operation is unsuccessful")
            }
        })
    }

    return (
        <div className='view'>
            <div className='view__data'>
                <h1>All books</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Address</th>
                            <th>Year</th>
                            <th>Is available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <TBody
                                key={item.id}
                                rowData={item}
                                deleteRow={deleteRow}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <BookCreating create={createRow} />
        </div>
    )
}

export default Books
