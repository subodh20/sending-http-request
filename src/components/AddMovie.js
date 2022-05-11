import { useRef } from "react";
import classes from "./AddMovie.module.css";
const AddMovie = (props) => {
  const titleRef = useRef("");
  const openTextRef = useRef("");
  const releaseDateRef = useRef("");
  const handleFormData = (event) => {
    event.preventDefault();
    const movie = {
      title: titleRef.current.value,
      openText: openTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };
    props.onAddMovie(movie);
    titleRef.current.value = "";
    openTextRef.current.value = "";
    releaseDateRef.current.value = "";
  };
  return (
    <form onSubmit={handleFormData}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-txt">Opening Text</label>
        <textarea rows="5" type="text" ref={openTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="release">Release Date</label>
        <input type="date" id="release" ref={releaseDateRef} />
      </div>
      <button type="submit">AddMovie</button>
    </form>
  );
};

export default AddMovie;
