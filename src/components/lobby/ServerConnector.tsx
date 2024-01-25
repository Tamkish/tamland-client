import {Socket} from "socket.io-client";
import cookies from "js-cookie";
import {useState} from "react";

interface ServerConnectorParams {
    isConnected: boolean;
    setSocket: (newSocket: Socket | null) => void
}

const ServerUrlCookey = "serverUrl";

export const ServerConnector = (props: ServerConnectorParams) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [serverUrl, setServerUrl] = useState(cookies.get(ServerUrlCookey)??"");
    const hasEnteredServerUrl = socket != null;

    const handleServerUrl = () => {
        if (props.isConnected) return; // shouldn't be able to change when connected
    };
    return (
        <form onSubmit={event => {
            event.preventDefault();
            handleServerUrl()
        }}>
            <input
                value={serverUrl}
                disabled={hasEnteredServerUrl}
                placeholder={"Server URL"}
                onChange={event => setServerUrl(event.target.value)}
            />

            <input
                type={"submit"}
                value={">"}
            />


        </form>
    );
}