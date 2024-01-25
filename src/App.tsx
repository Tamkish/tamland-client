import './App.css'
import {useState} from "react";
import {Game} from "./components/Game.tsx";
import {Socket} from "socket.io-client";
import { Lobby } from './components/Lobby.tsx';




const App = () => {

    const [socket, setSocket] = useState<Socket | null>(null);
    const joinedGame = socket != null;

    const afterJoinedGame = (socket: Socket) => {
        // register disconnect handling
        socket.on("disconnect", () => {
            setSocket(null);
        })

        //set socket, therefore switching to Game
        setSocket(socket);
    }

    return (
        joinedGame
            ? <Game socket={socket}/>
            : <Lobby afterJoinedGame={afterJoinedGame}/>
    );
}

export default App
