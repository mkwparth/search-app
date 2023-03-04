import React from 'react'

const Table = ({ data }) => {
    return (
        <table >
            <tbody>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                </tr>

                {
                    data.map((item) => {
                        return (<tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                        </tr>)
                    })
                }

            </tbody>
        </table>
    )
}

export default Table