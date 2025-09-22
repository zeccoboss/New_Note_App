const localStorageNoteData = new Promise((resolve, reject) => {
    let savedNotes = JSON.parse(localStorage.getItem("zecco_note_app")) || null;
    savedNotes ? resolve(savedNotes) : reject('Can\'t find the local storage Note Data');
});

const getLocalStorageNoteData = async () => {
    try {
        const data = await localStorageNoteData;
        return data
    } catch (e) {
        console.error(e);
        return [];
    }
}

export default getLocalStorageNoteData;