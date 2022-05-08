import { useState } from "react";
import { Button, Header, Modal } from "../components";
import rules from "../assets/images/image-rules.svg";
import "./App.scss";
import { Game, Play } from "../containers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameContextProvider from "constants/gameContext";

function App() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <GameContextProvider>
            <BrowserRouter>
                <div className='container layout'>
                    <Header />
                    <main className='App-main'>
                        <Routes>
                            <Route path='/' element={<Game />} />
                            <Route path='/play' element={<Play />} />
                        </Routes>
                    </main>
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
            </BrowserRouter>
        </GameContextProvider>
    );
}

export default App;
