import React from "react";
function ContentList() {
  const contentList = [
    {
      id: 1,
      Header: "Top 25 blog hữu ích nhất dành cho người Việt",
      conten:
        "Lang thang khá nhiều blog khác nhau trong 1 ngày, tôi nhận ra rằng người Việt rất có tài Ở mọi lĩnh vực đều có những blog chuyên biệt được viết tỉ mẩn, dốc tâm dốc sức để tạo giá trị cho người dùng.Với tiêu chí đánh giá: tần suất cập nhật nội dung, số lượng like, share trên facebook, bài viết dưới đây sẽ tổng hợp lại các blog hữu ích về một số lĩnh vực được quan tâm nhiều nhất trong xã hội.Hãy khám phá ngay!",
      img: "../../image/1.img",
    },
    {
      id: 2,
      Header: "Top 25 blog hữu ích nhất dành cho người Việt",
      conten:
        "Lang thang khá nhiều blog khác nhau trong 1 ngày, tôi nhận ra rằng người Việt rất có tài Ở mọi lĩnh vực đều có những blog chuyên biệt được viết tỉ mẩn, dốc tâm dốc sức để tạo giá trị cho người dùng.Với tiêu chí đánh giá: tần suất cập nhật nội dung, số lượng like, share trên facebook, bài viết dưới đây sẽ tổng hợp lại các blog hữu ích về một số lĩnh vực được quan tâm nhiều nhất trong xã hội.Hãy khám phá ngay!",
      img: "../../image/1.img",
    },
    {
      id: 2,
      Header: "Top 25 blog hữu ích nhất dành cho người Việt",
      conten:
        "Lang thang khá nhiều blog khác nhau trong 1 ngày, tôi nhận ra rằng người Việt rất có tài Ở mọi lĩnh vực đều có những blog chuyên biệt được viết tỉ mẩn, dốc tâm dốc sức để tạo giá trị cho người dùng.Với tiêu chí đánh giá: tần suất cập nhật nội dung, số lượng like, share trên facebook, bài viết dưới đây sẽ tổng hợp lại các blog hữu ích về một số lĩnh vực được quan tâm nhiều nhất trong xã hội.Hãy khám phá ngay!",
      img: "../../image/1.img",
    },
  ];
  return (
    <div>
      {contentList.map((content) => (
        <div key={content.id} className="contentlist">
          <img src={content.img} alt="" />
          <div className="contentlist_tieude">{content.Header}</div>
        </div>
      ))}
    </div>
  );
}

export default ContentList;
