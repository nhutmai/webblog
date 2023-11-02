import React from "react";
import NewContent from "./NewContent/NewContent";
import PopularContent from "./PopularContent/PopularContent";

function Suggest() {
  return (
    <div className="suggest">
      <div className="suggest_new">
        <div>Bài Mới đăng</div>
        <NewContent />
      </div>
      <div className="suggest_popular">
        <div>Bài Nổi Bật</div>
        <PopularContent />
      </div>
    </div>
  );
}

export default Suggest;
