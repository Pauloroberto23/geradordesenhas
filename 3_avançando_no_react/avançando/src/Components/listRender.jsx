import { useState } from "react";

const listRender = () => {
    const [list] = useState(["Paulo", "luiz", "lu"])

    const [users,setUsers] = useState ([
        {id: 1, name:"paulo", age:31},
        {id: 2, name:"luiz",age:25},
        {id: 3, name:"lu",age: 29},
    ])

    const deleteRandom = () => {
        const randomNumber = math.floor(math.rondom() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id ))
    }
  return (
    <div>
        {/* 4 render sem key*/}
        <ul>
            {list.map((item) => (
                <li>{item}</li>

            ))}
        </ul>
        {/* 5 render com key*/}
        <ul>{users.map((user) => (
           <li key={user.id}>
            {user.name} - {user.age} anos</li>
         
        ))}
        </ul>
        {/* 6 previous state*/}
        <button onClick={deleteRandom}>delete random user</button>
    </div>
  )
}

export default listRender