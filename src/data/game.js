import { createContext } from "react";

export const game = {
    state: {
        chapter: 'first',
        line: 0,
    },
    music: {
        volume: 1,
        status: false
    },
    sounds: {
        volume: 1,
        status: false
    }
}

export const GameContext = createContext(null);