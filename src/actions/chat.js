import io from '../utils/socket.io/socket.io';
let socket

export function receiveMsg(msg) {
    return {
        type: 'MSG_IN',
        msg
    };
}

export function connectChat(authString) {
    return dispatch => {
        socket = io.connect('http://39.104.189.84:30200', {
            "reconnect": true,
            "auto connect": true,
            "force new connection": true
        });

        socket.on("connect_error", function (error) {
            console.error(error);
        });
        socket.on('disconnect', function () {
            console.log('disconnect')
        });
        socket.on('connect', function () {
            console.log('connect ok.')
            setTimeout(() => {
                console.log('send auth')
                socket.emit('auth', authString)
              }, 2000);
        });
    }
}

export function sendMessage(msg){
    return dispatch=>{
        console.log('socket-msg:'+msg)
        socket.emit('msg',msg)
    }
}

