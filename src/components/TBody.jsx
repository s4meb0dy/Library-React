import React from "react"

const TBody = ({ rowData, deleteRow = null }) => {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        setData([])
        Object.keys(rowData).forEach((key) =>
            setData((prev) => {
                let value = rowData[key]

                if (typeof rowData[key] === "boolean") {
                    value = rowData[key] ? "true" : "false"
                }
                return [...prev, { key, value }]
            })
        )
    }, [rowData])
    return (
        <tr>
            {data.map((item, index) => (
                <td key={item.key}>{item.value}</td>
            ))}
            {deleteRow && (
                <td>
                    <button onClick={() => deleteRow(rowData.id)}>
                        Delete
                    </button>
                </td>
            )}
        </tr>
    )
}

export default TBody
