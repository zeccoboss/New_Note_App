const dateHandler = () => {
  const date = new Date();
  const year = date.toDateString();
  const time = date.toLocaleTimeString();

  return `${time} — ${year}`
}

export default dateHandler;