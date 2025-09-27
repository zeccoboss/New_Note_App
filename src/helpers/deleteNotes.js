import { localNoteData } from "../utils/initApp.js";

const deleteNotes = async (e) => {
    const filteredNotes = await localNoteData.filter(note => note.id);
}