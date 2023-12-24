import React from "react"
import { baseUrl } from "../../apiConfig"
import TBody from "../TBody"
import ReaderCreating from "./FormCreating"
import FormCreating from "./FormCreating"

const Forms = () => {
    const [data, setData] = React.useState([])

    const fetchForms = () => {
        fetch(`${baseUrl}/Form`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setData(
                    data.map((f) => ({
                        id: f.id,
                        bookId: f.book.id,
                        bookTitle: f.book.title,
                        readerId: f.reader.id,
                        readerName: f.reader.fullName,
                        readerAddress: f.reader.address,
                    }))
                )
            })
    }

    React.useEffect(() => {
        fetchForms()
    }, [])

    const deleteRow = (id) => {
        fetch(`${baseUrl}/Form/${id}`, {
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
        fetch(`${baseUrl}/Form`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                alert("The operation is successful")
                fetchForms()
            } else {
                alert("The operation is unsuccessful")
            }
        })
    }

    return (
        <div className='view'>
            <div className='view__data'>
                <h1>All forms</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Form id</th>
                            <th>Book id</th>
                            <th>Book title</th>
                            <th>Reader id</th>
                            <th>Reader name</th>
                            <th>Reader address</th>
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
            <FormCreating create={createRow} />
        </div>
    )
}

export default Forms
