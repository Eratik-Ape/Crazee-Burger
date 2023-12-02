import { useState } from "react"

export default function LoginPage() {

const [inputValue, setInputValue] = useState("")


    const handleSubmit = (e) => { 
        e.preventDefault
        alert(`Bonjour ${inputValue}`)
        setInputValue("")
     }

     const handleChange = (e) => { 
        setInputValue(e.target.value)
      }

  return (
    <div>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>
        <form action="submit" onSubmit={handleSubmit}>
            <input value={inputValue}
            onChange={handleChange}
            type="text" placeholder="Entrez votre prénom" required />
            <button>Accéez à votre espace</button>
        </form>
    </div>
  )
}
