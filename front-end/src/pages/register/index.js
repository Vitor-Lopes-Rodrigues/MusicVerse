import React, { useState } from "react";
import styles from "../../pages/register/register.module.css";
import axios from "axios";
import Button from "../../components/button";
import {Link, useNavigate} from "react-router-dom";

const Register = () => {
    // Navigate
    const navigate = useNavigate()

    // User
    const [displayName, setDisplayName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [cpf,setCpf] = useState("");
    const [rg, setRg] = useState("");
    // Login
    const [phone,setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    // Address
    const [cep,setCep] = useState("");
    const [street,setStreet] = useState("");
    const [city,setCity] = useState("");
    const [state,setState] = useState("");
    const [country,setCountry] = useState("");
    const [image, setImage] = useState("");



    const handleSubmit =  async (e) => {
        e.preventDefault()
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

        const data = {
            name: displayName,
            birthDate: birthDate,
            gender:gender,
            cpf:cpf.replaceAll(".", "").replaceAll("-", ""),
            rg:rg,
            user:phone.replaceAll("-","").replaceAll("(","").replaceAll(")",""),
            email:email,
            password:password,
            cep:cep,
            street:street,
            city:city,
            state:state,
            country:country
        }

        axios.post(`http://localhost:3001/user`, data)
            .then(function (response){
                console.log(response.data)
                navigate('/login')
            })
            .catch(function (error){
                // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
                console.log(error)
            })
    }

    //API de busca de CEP via number
    const buscarCep = async (cepRecebido) => {
        setCep(cepRecebido)
        if (validaCep(cepRecebido)) {
            let url = `https://viacep.com.br/ws/${cepRecebido}/json/`

            // const resp = await fetch(url, {mode:'no-cors'})
            const resp = await fetch(url, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'content-type': 'aplication/json'
                }
            })
            const data = await resp.json()

            setStreet(data.logradouro)
            setCity(data.localidade)
            setState(data.uf)
            setCountry('Brasil')
            document.getElementById("input-number").focus()
        }
    }
    //Validacao do CEP digitado
    const validaCep = (cepRecebido) => {
        cepRecebido = cepRecebido.replace(/[^0-9]/gi, "");
        return cepRecebido.length === 8
    }




    //Validacao do RG digitado
    const validaRg = (rg) => {
        return parseInt(rg).toString().length >= 8
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
    const phoneMask = (value) => {
        if (!value) return ""
        value = value.replace(/\D/g,'')
        value = value.replace(/(\d{2})(\d)/,"($1) $2")
        value = value.replace(/(\d)(\d{4})$/,"$1-$2")
        return value
    }


    return(
        <div className={styles.register}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe o seu SOM!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="displayName" required placeholder="Nome do usuário" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                </label><br/>
                    <label className={styles.register}>
                        <span>Genero:</span>
                        <input  type="radio" name="setGender" required placeholder="Genero" value={gender} onChange={(e) => setGender("Male")}/>Homem
                        <input  type="radio" name="setGender" required placeholder="Genero" value={gender} onChange={(e) => setGender("Femile")}/>Mulher
                        <input  type="radio" name="setGender" required placeholder="Genero" value={gender} onChange={(e) => setGender("Others")}/>Outros
                    </label><br/>
                <label>
                    <span>CPF:</span>
                    <input type="text" name="cpf" required placeholder="CPF" value={cpf} onChange={(e) => setCpf(maskCPF(e.target.value))}/>
                </label><br/>
                <label>
                    <span>RG:</span>
                    <input type="text" name="rg" required placeholder="RG" value={rg}  maxLength="9" onChange={(e) => setRg(e.target.value)}/>
                </label><br/>
                <label>
                    <span>Telefone:</span>
                    <input type="tel" name="phone" maxlength="15" required placeholder="Telefone" value={phone}  onChange={(e) => setPhone(phoneMask(e.target.value))}/>
                </label><br/>
                <label>
                    <span>Aniversário:</span>
                    <input type="date" name="birthDate" required placeholder="Aniversário" value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
                </label><br/>
                <label>
                    <span>Email:</span>
                    <input type="email" name="displayName" required placeholder="E-mail do usuário exemplo@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label><br/>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" required placeholder="Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label><br/>
                <label>
                <input
                    type="file"
                    name="image"
                    required
                    placeholder="Insira uma imagem sobre música em geral"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        const fileName = file.name;
                        setImage(fileName);
                    }}
                />
                </label><br/>
                <label>
                    <span>CEP:</span>
                    <input type="number" name="cep" required placeholder="Insira o seu CEP" value={cep} onChange={(e) => buscarCep(e.target.value)}/>
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
                    <span>País</span>
                    <input type="text" name="country" required placeholder="Insira seu continente" value={country} onChange={(e) => setCountry(e.target.value)}/>
                </label><br/>
                <Button className="btn btn-primary" name={'Cadastrar'}/><br/><br/>
                <p>Já tem conta? <Link to={"/login"}>Faça login</Link></p>
            </form>
        </div>
    )
}

export default Register