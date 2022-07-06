import {Types} from '../types'

export const setWelcomeAction: (name: string) => Types.Action = (name) => {
    return {
        type: 'SET_WELCOME',
        payload: name
    }
};
export const setJokeAction: (joke: string) => Types.Action = (joke) => {
    return {
        type: 'SET_JOKE',
        payload: joke
    }
};
export const setError: (errorMessage: string) => Types.Action = (errorMessage) => {
    return {
        type: 'SET_ERROR',
        payload: errorMessage
    }
};
export const setImageSrc: (imageSrc: string) => Types.Action = (imageSrc) => {
    return {
        type: 'SET_IMAGE_SRC',
        payload: imageSrc
    }
};