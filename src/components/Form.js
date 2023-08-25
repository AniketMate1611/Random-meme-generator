import React from "react";

const Form = () => {

  const [allMemes, setAllMemes] = React.useState([]);

  const [memeText, setMemeText] = React.useState({
    upperText: "",
    lowerText: "",
    randomImage: "https://i.imgflip.com/1tl71a.jpg",
  });

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMemeText((prevtext) => ({
      ...prevtext,
      [name]: value,
    }));
  };

  const handleSubmit=(event)=>{
    event.preventDefault()
    let newImage=allMemes[Math.floor(Math.random()*allMemes.length)].url
    console.log(newImage);
    setMemeText(previmg=>({
      ...previmg,
      randomImage: newImage
    }))

  }
  return (
    <>
      <form >
        <div className="div--input">
          <input
            type="text"
            id="upperText"
            placeholder="Upper Text"
            className="form--input"
            name="upperText"
            value={memeText.upperText}
            onChange={handleChange}
          />
          <input
            type="text"
            id="lowerText"
            placeholder="Lower Text"
            className="form--input"
            name="lowerText"
            value={memeText.lowerText}
            onChange={handleChange}
          />
        </div>
        <div className="button--div">
          <button className="button--meme" onClick={handleSubmit}>
            Get New Meme Image{" "}
            <img
              src="https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png"
              alt="istha-logo"
              className="imgpng"
              
            />
          </button>
        </div>
      </form>
      <div className="container">
      <div className="image--container">
        <img src={memeText.randomImage} className="display--image" alt="Imageof--meme"/>
        <h2 className="memeText top">{memeText.upperText}</h2>
        <h2 className="memeText bottom">{memeText.lowerText}</h2>
        </div>
        </div>
    </>
  );
};

export default Form;
