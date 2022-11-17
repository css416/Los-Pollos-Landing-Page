import { createContext, useState, useReducer } from "react";

export const GalleryContext = createContext();

export const galleryReducer = (state, action) => {

    switch(action.type) {
        case 'SET_IMAGES':
            return {
                gallery: [action.payload, ...state.gallery]
            }
        default:
            return state; 
    }
}

export const GalleryContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)

    const [state, dispatch] = useReducer(galleryReducer, {
        gallery: []
    })  

    return (
        <GalleryContext.Provider value={{...state, dispatch, isLoading, setIsLoading}}>        
            { children }
        </GalleryContext.Provider>
    )
}