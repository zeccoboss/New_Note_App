const localStorageNoteData = new Promise((resolve, reject) => {
    try {
        let savedNotes = JSON.parse(localStorage.getItem("zecco_note_app")) || null;
        
        // 
        savedNotes ? 
            resolve(savedNotes) :
            reject('Can\'t find the local storage Note Data');
    } catch (error) {
        resolve(error);
    }
});

const getLocalStorageNoteData = async () => {
    try {
        const data = await localStorageNoteData;
        return data
    } catch (e) {
        console.warn(e);
        return [];
    }
}

export default getLocalStorageNoteData;