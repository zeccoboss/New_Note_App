const storedData = () => {
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

    return localStorageNoteData;
}

const getLocalStorageNoteData = async () => {
    try {
        const data = await storedData();
        return data;
    } catch (e) {
        console.warn(e);
        return [];
    }
}

export default getLocalStorageNoteData;