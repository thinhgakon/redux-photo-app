export const addToAlbum = (payload) => {
    return {
        type: 'ADD_TO_ALBUM',
        payload
    }
}

export const removePhoto = (payload) => {
    return {
        type: 'REMOVE_PHOTO',
        payload
    }
}