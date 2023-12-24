import React from "react"

const ReaderCreating = ({ create }) => {
    const [fullName, setFullName] = React.useState("")
    const [address, setAddress] = React.useState("")

    const onClickBtn = () => {
        create({ fullName, address })
        setFullName("")
        setAddress("")
    }

    return (
        <div className='view__creating'>
            <h1>Creating a reader</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Full name</td>
                        <td>
                            <input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>
                            <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={onClickBtn}>Create</button>
        </div>
    )
}

export default ReaderCreating
