import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";

export const useGalleryContext = () => {
    const context = useContext(GalleryContext)

    if (!context) {
        throw Error('GalleryContext must be used inside GalleryContextProvider')
    }

    return context;
}