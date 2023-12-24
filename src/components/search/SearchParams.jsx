import React from "react"

const SearchParams = ({ search }) => {
    const [title, setTitle] = React.useState("")
    const [author, setAuthor] = React.useState("")
    const [year, setYear] = React.useState("")

    const onClickBtn = () => {
        search &&
            search({
                title: title.length ? title : null,
                author: author.length ? author : null,
                year: year.length ? year : null,
            })
    }

    return (
        <div style={{ paddingBottom: "50px" }} className='view__creating'>
            <h1>Search by</h1>
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
                </tbody>
            </table>
            <button onClick={onClickBtn}>Search</button>
        </div>
    )
}

export default SearchParams
