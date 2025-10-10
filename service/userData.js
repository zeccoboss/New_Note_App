const storedUserData = () => {
    const localStorageUserData = new Promise((resolve, reject) => {
        try {
            let savedNotes = JSON.parse(localStorage.getItem("zecco_note_app_user")) || null;
            
            // 
            savedNotes ? 
                resolve(savedNotes) :
                reject('Can\'t find the local storage User Data');
        } catch (error) {
            resolve(error);
        }
    });

    // Return promise
    return localStorageUserData;
}

const getlocalStorageUserData = async () => {
    try {
        const data = await storedUserData();
        return data;
    } catch (e) {
        console.log('');
        console.warn(e);
        console.log('');
        return null;
    }
}

export default getlocalStorageUserData;