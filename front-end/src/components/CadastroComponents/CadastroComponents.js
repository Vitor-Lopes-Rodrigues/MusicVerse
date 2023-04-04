//Importando React
import React, {useState} from "react";
//Importando Styles
import styles from "../../pages/Cadastro/Cadastro.module.css";


const CadastroComponents = () => {
    //Criando constantes para nome,email,senha,cofirmacaoSenha,errorIndicados
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    // const { createUser, error: authError, loading } = useAuthentication()

    //Criando submit de formulário
    const handleSubmit =  async (e) => {
        e.preventDefault()
        //Enviei o formulário fica igual a vazio(sem erros)
        setError("")

        const user = {
            displayName,
            email,
            password
        }
    }
    return(
        <div className={styles.register}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe o seu SOM!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="displayName" required placeholder="Nome do usuário" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email" name="displayName" required placeholder="E-mail do usuário" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" required placeholder="Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button className="btn">Cadastrar</button>
                {/*{!loading &&}*/}
                {/*{loading && (*/}
                {/*    <button className="btn" disabled>*/}
                {/*        Aguarde...*/}
                {/*    </button>*/}
                {/*)}*/}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}

export default CadastroComponents