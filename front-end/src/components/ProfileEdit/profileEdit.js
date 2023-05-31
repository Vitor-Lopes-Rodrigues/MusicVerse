import Modal from "react-bootstrap/Modal";
import React, {useState} from "react";
import axios from "axios";



const ProfileEdit = ({showModal, setShowModal, userId, userName, userEmail, userPhone, userCity, userStade, userCountry}) => {

    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    const [phone, setPhone] = useState(userPhone);
    const [city, setCity] = useState(userCity);
    const [state, setStade] = useState(userStade);
    const [country, setCountry] = useState(userCountry);

    // const itemToState = () => {
    //     setName(user.name)
    //     setEmail(user.email)
    //     setPhone(user.phone)
    //     setCity(user.city)
    //     setGender(user.gender)
    //     setStade(user.state)
    //     setCountry(user.country)
    // }

    const data = {
        name: name,
        email: email,
        phone: phone,
        city: city,
        state: state,
        country: country
    };
    const alterarEstado = () => {
        setName("");
    }

    const handleClose = () => {
        setShowModal(false);
    };

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
    };

    const handleClick = () => {
        setShowModal(true);

        axios.put(`http://localhost:3001/user/${userId}`, data, config)
            .then(function (response){
                console.log(response.data)
                window.location.reload();
            })
    };

    const handleChange = (e) => {
        const value = e.target.value();
        setName(value);
        setEmail(value);
        setPhone(value);
        setCity(value);
        setStade(value);
        setCountry(value);
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        // Faça o que quiser com os valores do formulário
        console.log(name);
        setShowModal(false);
    };

    return(
        <>
            <div id="poppup-modal">
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Informações</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Username:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>City:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>State:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="state"
                                    value={state}
                                    onChange={(e)=> setStade(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Country:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="country"
                                    value={country}
                                    onChange={(e)=> setCountry(e.target.value)}
                                />
                            </div>
                            <br/>
                            <button type="submit" onClick={handleClick} className="btn btn-primary">Salvar</button>
                            <br/><br/>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )

}
export default ProfileEdit