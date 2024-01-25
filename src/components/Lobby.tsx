import officer from "../images/lobby/officer.png";

import {Socket} from "socket.io-client";
import {useState} from "react";
import {ServerConnector} from "./lobby/ServerConnector.tsx";


export const Lobby = (props: { afterJoinedGame: (socket: Socket) => void }) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const isConnected = socket != null;

    return (
        <div>
            <h1 className={"border-l-red-500"}>Lobby</h1>
            <ServerConnector
                isConnected={isConnected}
                setSocket={setSocket}
            />
        </div>)
};


/*
const ServerUrlCookey = "serverUrl";
const WhereWeHeading = () => null;
const Connecting = () => null;
    const [tryingToConnect, setTryingToConnect] = useState(false);
    const [serverValue, setServerValue] = useState<string>(cookies.get(ServerUrlCookey) ?? "");
    const letsGo = () => {
        console.log("connecting to " + serverValue)
        const socket = createSocket(serverValue)
        socket.on("connect", socket => {
            console.log("connected")
        })
        socket.connect()
    };
    return (<div>
        <h1>Welcome, traveler!</h1>
        <p>Where we headin' ?</p>
        {tryingToConnect ? <Connecting/> : <WhereWeHeading/>}
        <input
            type={"text"}
            placeholder={"Enter the server URL"}
            value={serverValue}
            onChange={event => setServerValue(event.target.value)}
        />
        <button onClick={() => letsGo()}>Let's go!</button>
        <br/>
        <img src={officer} alt={"funny words, funny man"}/>
    </div>)
}

* */