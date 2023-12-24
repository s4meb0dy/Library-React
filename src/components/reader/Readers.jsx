import React from "react"
import { baseUrl } from "../../apiConfig"
import TBody from "../TBody"
import ReaderCreating from "./ReaderCreating"

const Readers = () => {
    const [data, setData] = React.useState([])

    const fetchReaders = () => {
        fetch(`${baseUrl}/Reader`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setData(data)
            })
    }

    React.useEffect(() => {
        fetchReaders()
    }, [])

    const deleteRow = (id) => {
        fetch(`${baseUrl}/Reader/${id}`, {
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
        fetch(`${baseUrl}/Reader`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                alert("The operation is successful")
                fetchReaders()
            } else {
                alert("The operation is unsuccessful")
            }
        })
    }

    return (
        <div className='view'>
            <div className='view__data'>
                <h1>All readers</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Full name</th>
                            <th>Address</th>
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
            <ReaderCreating create={createRow} />
        </div>
    )
}

export default Readers
