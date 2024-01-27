import { useState } from 'react'


function Form() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3000/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        })

        if (response.ok) {
            console.log('User created')
        } else{
            console.log('User not created')
        }


    }

    return (
        <>
           <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

                <button type="submit">Submit</button>
           </form>
        </>
    )
}


export default Form