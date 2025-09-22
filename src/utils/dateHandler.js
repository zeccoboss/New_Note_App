const dateHandler = () => {
  const date = new Date();
  const year = date.toDateString();
  const time = date.toLocaleTimeString();

  return `${year} — ${time}`
}

export default dateHandler;