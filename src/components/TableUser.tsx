import React from 'react'
interface TableUserProps {
    users: User[];
}
export default function TableUser({ users }: TableUserProps) {
    return (
        <div>
            <table border={1} style={{ padding: '30px' }}>
                <thead>
                    <tr style={{ padding: '30px' }}>
                        <th>Id</th>
                        <th>First-Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody style={{ padding: '30px' }}>
                    {
                        users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                </tr>
                            );
                        })
                    }
                    <tr >

                    </tr>
                </tbody>
            </table>
        </div>
    )
}
