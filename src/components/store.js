import { createStore } from "redux"

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "",
            foto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngriver.com%2Fwp-content%2Fuploads%2F2018%2F04%2FDownload-Star-PNG-File-768x768.png&f=1&nofb=1"
        },
        {
            id: 2,
            nombre: "",
            foto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngriver.com%2Fwp-content%2Fuploads%2F2018%2F04%2FDownload-Star-PNG-File-768x768.png&f=1&nofb=1"
        },
        {
            id: 3,
            nombre: "",
            foto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngriver.com%2Fwp-content%2Fuploads%2F2018%2F04%2FDownload-Star-PNG-File-768x768.png&f=1&nofb=1"
        },
        {
            id: 4,
            nombre: "",
            foto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngriver.com%2Fwp-content%2Fuploads%2F2018%2F04%2FDownload-Star-PNG-File-768x768.png&f=1&nofb=1"
        },
        {
            id: 5,
            nombre: "",
            foto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngriver.com%2Fwp-content%2Fuploads%2F2018%2F04%2FDownload-Star-PNG-File-768x768.png&f=1&nofb=1"
        }
    ],
    titulares: []
}

const reducerEntrenador = (state = initialState, action) => {

    if (action.type === "AGREGAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "QUITAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)