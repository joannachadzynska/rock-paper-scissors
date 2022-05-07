import { useState } from "react";
import { Button, Header, Modal } from "../components";
import rules from "../assets/images/image-rules.svg";
import "./App.scss";

function App() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <div className='container layout'>
            <Header />
            <main className='App-main'>main</main>
            <Button onClick={() => setIsOpenModal(true)} role='rules'>
                Rules
            </Button>
            <Modal
                isOpen={isOpenModal}
                handleClose={() => setIsOpenModal(false)}>
                <h2>RULES</h2>
                <img alt='rules' src={rules} />
            </Modal>
        </div>
    );
}

export default App;
