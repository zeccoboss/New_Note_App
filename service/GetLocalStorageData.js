class GetLocalStorageData {
	constructor(caller_value, module_name, data_name) {
		this.caller_value = caller_value;
		this.module_name = module_name;
		this.dataName = data_name;
	}

	/*_==> Private Methods <==_*/
	
	/* ___________________________________________________*/
	/* Read local storage */
	/* ___________________________________________________*/
	#storedNoteData = (dataName) => {
		const storedDAtaContent = new Promise((resolve, reject) => {
			try {
				// Fetch data from local storage 
				let savedNotes = JSON.parse(localStorage.getItem(dataName)) || null;
				
				// Return a valid data or an error message
				savedNotes ? resolve(savedNotes) : reject(`Can't find ${this.caller_value} from ${this.module_name} module in Local Storage!`);
			} catch (err) {
				resolve(err);
			}
		});

		// Return storedDAtaContent
		return storedDAtaContent;
	}

	#storedUserData = (dataName) => {
		const storedDAtaContent = new Promise((resolve, reject) => {
			try {
				// Fetch data from local storage 
				let savedData = JSON.parse(localStorage.getItem(dataName)) || null;
				
				// Return a valid data or an error message
				savedData ? resolve(savedData) : reject(`Can't find ${this.caller_value} from ${this.module_name} module in Local Storage!`);
			} catch (err) {
				resolve(err);
			}
		});

		// Return storedDAtaContent
		return storedDAtaContent;
	}

	#storedThemeData = (dataName) => {
		// Fetch data from local storage 
		let savedTheme = JSON.parse(localStorage.getItem(dataName)) || null;
		
		// Return storedDAtaContent
		return savedTheme
	}

	// Procees the fetched data and return the valid data or an empty array
 	#processLocalStorageNoteData = async (dataName) => {
		try {
			const data = await this.#storedNoteData(dataName);
			return data;
		} catch (e) {
			console.error(e);
			return [];
		}
	}

	// Procees the fetched data and return the valid data or nuul
	#processlocalStorageThemeData = (dataName) => {
		try {
			const data = this.#storedThemeData(dataName);
			return data;
		} catch (err) {
			console.warn(err);
			return null;
		}
	}

	#processLocalStorageUserData = async (dataName) => {
		try {
			const data = await this.#storedUserData(dataName);
			return data;
		} catch (e) {
			console.error(e);
			return null;
		}
	}

	/*_==> Public Methods <==_*/

	/* ___________________________________________________*/
	/* Create Data */
	/* ___________________________________________________*/
	
	// Save note data
	saveNoteData(newNoteData) {
		localStorage.setItem(this.dataName, JSON.stringify(newNoteData)); // Save note data to local storage
	}

	// Save app theme 
	saveAppTheme(newAppTheme) {
		localStorage.setItem(this.dataName, JSON.stringify(newAppTheme)); // Save theme data to local storage
	}

	// Save user data
	saveUserData(newUserData) {
		localStorage.setItem(this.dataName, JSON.stringify(newUserData)); // Save user data to local storage
	}

	/* ___________________________________________________*/
	/* Read Data */
	/* ___________________________________________________*/
	
	// Get note data
	getNoteData() {
		
		return this.#processLocalStorageNoteData(this.dataName); 
	}

	// Get app theme value
 	getAppTheme() {
		return this.#processlocalStorageThemeData(this.dataName);
	}

	// Get user data
	getUserData() {
		return this.#processLocalStorageUserData(this.dataName);	
	}

	/* ___________________________________________________*/
	/* Update Data */
	/* ___________________________________________________*/
	
	// Update note data
	updateNoteData(newNoteData) {
		this.saveNoteData(newNoteData); // Push it to the saveNoteData method so it can be updated
	}

	// Update app theme value
	updateAppTheme(newAppTheme) {
		this.saveAppTheme(newAppTheme); // Push it to the saveAppTheme method so it can be updated
	}

	// Update user data
	updateUserData(newUserData) {
		this.saveUserData(newUserData);	// Push it to the saveUserData method so it can be updated
	}

	/* ___________________________________________________*/
	/* Delete Data */
	/* ___________________________________________________*/
	
	// Delete note data
	deleteNoteData(noteData) {
		return '';
	}

	// Delete app theme value
	deleteAppTheme(appTheme) {
		return '';
	}

	// Delete user data
	deleteUserData(userData) {
		return '';	
	}

	logger() {
		console.log('');
        console.log('Caller name : ' , this.caller_value);
		console.log('Module name: ', this.module_name);
		console.log('Data name: ', this.dataName);
	}
}

export default GetLocalStorageData;


// saved-note-app-theme	"light_theme"
// zecco_note_app	[{"id":"DDBxEr","title":"kjeb.j","content":"jkd b","date":"9:31:14 AM — Sat Oct 04 2025"},{"id":"FSQsBu","title":"bns","content":"jkbe","date":"9:31:09 AM — Sat Oct 04 2025"},{"id":"E2EP3y","title":"ww","content":"w","date":"9:31:00 AM — Sat Oct 04 2025"},{"id":"a31drg","title":"sss","content":"Note content not specified!","date":"7:30:42 AM — Sat Oct 04 2025"}]
// zecco_note_app_user	{"id":"33IsiOjrag","userName":"Obang Ezekiel.","nickname":"ZECCO.","email":"youngzecco@gmail.com.","hobbies":"Coding, Trouble Making & Sleeping."}
