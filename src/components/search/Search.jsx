import React from "react"
import { baseUrl } from "../../apiConfig"
import TBody from "../TBody"
import SearchParams from "./SearchParams"

const Search = () => {
    const [data, setData] = React.useState([])

    const fetchSearch = (option = {}) => {
        let query = ""

        if (option.title) {
            query += `title=${option.title}`
            if (option.author || option.year) query += "&"
        }
        if (option.author) {
            query += `author=${option.author}`
            if (option.year) query += "&"
        }
        if (option.year) {
            query += `year=${option.year}`
        }

        if (query.length) query = "?" + query

        fetch(`${baseUrl}/Catalog/search${query}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                if (Array.isArray(data)) setData(data)
                else setData([])
            })
    }

    React.useEffect(() => {
        fetchSearch()
    }, [])

    return (
        <div className='view'>
            <SearchParams search={fetchSearch} />
            <div className='view__data'>
                <h1>Catalog</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                            <th>Is available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <TBody key={item.id} rowData={item} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Search
