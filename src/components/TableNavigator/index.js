import React from "react";
import "./styles.scss";

const Index = ({ setOffset, offset = 1, length = 0, showItem = 20 }) => {
  return (
    <div className="navigation-container">
      {length > showItem && (
        <div style={{ float: "right" }}>
          <ul className="pagination">
            <li
              className="page-item"
              onClick={() =>
                setOffset((pre) => {
                  if (pre > 1) {
                    return pre - 1;
                  }
                  return pre;
                })
              }>
              <p>Previous</p>
            </li>

            {Array(Math.ceil(length / showItem))
              .fill()
              .map((item, index) => {
                return (
                  <li
                    className={
                      offset === index + 1 ? "page-item active" : "page-item"
                    }>
                    <p>{index + 1}</p>
                  </li>
                );
              })}

            <li
              className="page-item"
              onClick={() =>
                setOffset((pre) => {
                  if (Math.floor(length) > Number(pre * 20)) {
                    return pre + 1;
                  }
                  return pre;
                })
              }>
              <p>Next</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Index;
