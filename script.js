const getData = async (arg) => {
  try {
    const res = await fetch('/model/notes.json');
    if (!res.ok) {
      throw new Error('Could not fetch notes')
      return
    }
    const notes = await res.json()
    
    console.log(notes)
  } catch (e) {
    console.error(e)
  }
}

getData()

export default getData