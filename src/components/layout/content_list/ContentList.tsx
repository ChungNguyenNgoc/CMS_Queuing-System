import Header from "../header/Header";
import Home from "../content/home/Home";
import "./ContentList.css";

function ContentList() {
  return (
    <div className="content-list">
      <Header />
      <Home />
    </div>
  );
}

export default ContentList;
