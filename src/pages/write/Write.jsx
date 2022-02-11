import { useContext, useState } from "react";
import "./Write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      isAdmin: user.isAdmin,
      username: user.username,
      title,
      desc,
    };

    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("https://myblogapion.herokuapp.com/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post(
        "https://myblogapion.herokuapp.com/api/posts",
        newPost,
        {
          headers: { token: "Bearer " + user.accessToken },
        }
      );
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  if (user.isAdmin === true) {
    return (
      <div className="write">
        <div>
          {file && (
            <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
          )}
          <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
                <i className="writeIcon fas fa-plus">Add image</i>
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <input
                type="text"
                placeholder="Title"
                className="writeInput"
                autoFocus={true}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Tell your story..."
                type="text"
                className="writeInput writeText"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <button className="writeSubmit" type="submit">
              Publish
            </button>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div className="warning">
      <h1>Only Admin Can add Posts, Contact Admin</h1>
    </div>
  );
}
