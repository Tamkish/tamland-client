/*
import {io, Socket} from "socket.io-client";

let socket: Socket | null = null;
let deleteHook: (() => void) | null = null;
export const createSocket = (url: string, hookWhenDelete: () => void) => {
    socket = io(url, {autoConnect: false})
    deleteHook = hookWhenDelete;
    return socket;
}

export const getSocket = () => socket;
export const cancelSocket = () => {
    socket = null;
    if (deleteHook != null)
        deleteHook();
}*/
//todo odstranit