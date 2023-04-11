//Importando React
import React, {useState} from "react";
//Importando Styles
import styles from "../../pages/Cadastro/Cadastro.module.css";


const CadastroComponents = () => {
    //Criando constantes para nome,email,senha,cofirmacaoSenha,errorIndicados
    //Const User information
    const [id, setId] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [cpf,setCpf] = useState("");
    const [rg, setRg] = useState("");
    // Const Login
    const [user,setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    //Const adress
    const [cep,setCep] = useState("");
    const [street,setStreet] = useState("");
    const [city,setCity] = useState("");
    const [state,setState] = useState("");
    const [country,setCountry] = useState("");

    // const { createUser, error: authError, loading } = useAuthentication()

    //API de busca de CEP via number
    // const buscarCep = async (cepRecebido) => {
    //     setCep(cepRecebido)
    //     if (validaCep(cepRecebido)) {
    //         let url = `https://viacep.com.br/ws/${cepRecebido}/json/`
    //
    //         // const resp = await fetch(url, {mode:'no-cors'})
    //         const resp = await fetch(url, {
    //             headers: {
    //                 'Access-Control-Allow-Origin': '*',
    //                 'content-type': 'aplication/json'
    //             }
    //         })


    //Validacao do CEP digitado
    // const validaCep = (cepRecebido) => {
    //     cepRecebido = cepRecebido.replace(/[^0-9]/gi, "");
    //     return cepRecebido.length === 8
    // }
    //Validacao do RG digitado
    const validaRg = (rg) => {
        return parseInt(rg).toString().length >= 8
    }
    //Criando submit de formulário
    const handleSubmit =  async (e) => {
        e.preventDefault()
        //Enviei o formulário fica igual a vazio(sem erros)
        setError("")
        //Valida RG
        if (!validaRg(rg)) {
            setError("RG Inválido!")
            document.getElementById("input-rg").focus()
            console.log(error)
            return
        }
        //Valida CPF
        if (!validaCpf(cpf)) {
            setError("Cpf Inválido!")
            document.getElementById("input-cpf").focus()
            console.log(error)
            return
        }
        //Valida CEP
        // if (!validaCep(cep)) {
        //     setError("Cep Inválido!")
        //     document.getElementById("input-cep").focus()
        //     console.log(error)
        //     return
        // }

        const user = {
            displayName,
            email,
            password
        }
        const data = {
            id: id,
            displayName: displayName,
            birthDate: birthDate,
            gender:gender,
            cpf:cpf,
            rg:rg,
            user:user,
            email:email,
            password:password,
            cep:cep,
            street:street,
            city:city,
            state:state,
            country:country
        }
    }
    //Validando CPF com formato ("000.000.000-00")
    const validaCpf = (cpfRecebido) => {

        cpfRecebido = cpfRecebido.replace(/[^0-9]/gi, "");

        if (cpfRecebido.length !== 11 || ['00000000000', '11111111111', '22222222222',
            '33333333333', '44444444444', '55555555555', '66666666666',
            '77777777777', '88888888888', '99999999999'].includes(cpfRecebido)) {
            return false;
        }

        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpfRecebido.charAt(i)) * (10 - i);
        }
        let resto = 11 - (soma % 11);
        if (resto === 10 || resto === 11) {
            resto = 0;
        }
        if (resto !== parseInt(cpfRecebido.charAt(9))) {
            return false;
        }
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpfRecebido.charAt(i)) * (11 - i);
        }
        resto = 11 - (soma % 11);
        if (resto === 10 || resto === 11) {
            resto = 0;
        }
        if (resto !== parseInt(cpfRecebido.charAt(10))) {
            return false;
        }
        return true;
    }
    //Mascara de CPF ("000.000.000-00")
    const maskCPF = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})/, "$1-$2")
            .replace(/(-\d{2})\d+?$/, "$1");
    };

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
                    <span>Genero:</span>
                    <input type="radio" name="setGender" required placeholder="Genero" value={gender} onChange={(e) => setGender(e.target.value)}/>M
                    <input type="radio" name="setGender" required placeholder="Genero" value={gender} onChange={(e) => setGender(e.target.value)}/>F
                </label>
                <label>
                    <span>CPF:</span>
                    <input type="text" name="cpf" required placeholder="CPF" value={cpf} onChange={(e) => setCpf(maskCPF(e.target.value))}/>
                </label>
                <label>
                    <span>RG:</span>
                    <input type="text" name="rg" required placeholder="RG" value={rg}  maxLength="9" onChange={(e) => setRg(e.target.value)}/>
                </label>
                <label>
                    <span>Usuário:</span>
                    <input type="text" name="username" required placeholder="Nome do usuário" value={user}  onChange={(e) => setUser(e.target.value)}/>
                </label>
                <label>
                    <span>Aniversário:</span>
                    <input type="date" name="birthDate" required placeholder="Aniversário" value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email" name="displayName" required placeholder="E-mail do usuário" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" required placeholder="Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <label>
                    <span>CEP:</span>
                    <input type="number" name="cep" required placeholder="Insira o seu CEP" value={cep} onChange={(e) => setCep(e.target.value)}/>
                </label>
                <label>
                    <span>Rua:</span>
                    <input type="text" name="street" required placeholder="Insira sua Rua" value={street} onChange={(e) => setStreet(e.target.value)}/>
                </label>
                <label>
                    <span>Cidade:</span>
                    <input type="text" name="city" required placeholder="Insira sua cidade" value={city} onChange={(e) => setCity(e.target.value)}/>
                </label>
                <label>
                    <span>Estado:</span>
                    <input type="text" name="state" required placeholder="Insira seu estado" value={state} onChange={(e) => setState(e.target.value)}/>
                </label>
                <label>
                    <span>Continente</span>
                    <input type="text" name="country" required placeholder="Insira seu continente" value={country} onChange={(e) => setCountry(e.target.value)}/>
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
};

export default CadastroComponents;