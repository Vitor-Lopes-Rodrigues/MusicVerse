import Modal from "react-bootstrap/Modal";
import React, {useState} from "react";



const PostEdit = ({showModal, setShowModal,item}) => {



    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [gender, setGender] = useState("");
    const [state, setStade] = useState("");
    const [country, setCountry] = useState("");

    const itemToState = () => {
        setName(item.name)
        setEmail(item.email)
        setPhone(item.phone)
        setCity(item.city)
        setGender(item.gender)
        setStade(item.state)
        setCountry(item.country)
    }
    const returnData = () => {
        return {
            id: item.id,
            name,
            email,
            phone,
            city,
            gender,
            state,
            country
        }
    }

    const [formValues, setFormValues] = useState({
        user: '',
        email: '',
        phone: '',
        city: '',
        gender: '',
        state: '',
        country: ''
    });
    const alterarEstado = () => {
        setName("");
    }

    const handleClose = () => {
        setShowModal(false);
    };
    const handleClick = () => {
        setShowModal(true);
    };

    const handleChange = (e) => {
        const value = e.target.value();
        setName(value);
        setEmail(value);
        setPhone(value);
        setCity(value);
        setGender(value);
        setStade(value);
        setCountry(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Faça o que quiser com os valores do formulário
        console.log(formValues);
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
                                    value={name.user}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"

                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"

                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>City:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="city"

                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Gender:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="gender"

                                    onChange={(e)=> setGender(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>State:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="state"

                                    onChange={(e)=> setStade(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Country:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="country"

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
export default PostEdit