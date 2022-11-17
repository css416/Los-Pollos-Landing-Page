import { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { listAll, ref, getDownloadURL } from "firebase/storage";

const fetchImages = async ({ dispatch, imageListRef, setIsLoading }) => {

    try{
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
              getDownloadURL(item).then((url) => {
                //   setImageList((prev) => [...prev, url]);
                dispatch({type: 'SET_IMAGES', payload: url })
              });
            });
          });
          setIsLoading(false)
    } catch(e) {
        console.error(e);
    }
}

export default fetchImages;