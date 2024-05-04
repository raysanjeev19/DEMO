import React from "react";
import "./card.css"

const dummyData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        fill="currentColor"
        class="bi bi-cloud-fog2"
        viewBox="0 0 16 16"

      >
        <path d="M8.5 4a4 4 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 13H.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 4M0 8.5A.5.5 0 0 1 .5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
      </svg>
    ),
    headerText: "Automotive Parts & Systems",
    bodyText:
      "Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        fill="currentColor"
        class="bi bi-cloud-fog2"
        viewBox="0 0 16 16"
      >
        <path d="M8.5 4a4 4 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 13H.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 4M0 8.5A.5.5 0 0 1 .5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
      </svg>
    ),
    headerText: "Automotive Parts & Systems",
    bodyText:
      "Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        fill="currentColor"
        class="bi bi-cloud-fog2"
        viewBox="0 0 16 16"
      >
        <path d="M8.5 4a4 4 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 13H.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 4M0 8.5A.5.5 0 0 1 .5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
      </svg>
    ),
    headerText: "Automotive Parts & Systems",
    bodyText:
      "Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        fill="currentColor"
        class="bi bi-cloud-fog2"
        viewBox="0 0 16 16"
      >
        <path d="M8.5 4a4 4 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 13H.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 4M0 8.5A.5.5 0 0 1 .5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
      </svg>
    ),
    headerText: "Automotive Parts & Systems",
    bodyText:
      "Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        fill="currentColor"
        class="bi bi-cloud-fog2"
        viewBox="0 0 16 16"
      >
        <path d="M8.5 4a4 4 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 13H.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 4M0 8.5A.5.5 0 0 1 .5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
      </svg>
    ),
    headerText: "Automotive Parts & Systems",
    bodyText:
      "Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        fill="currentColor"
        class="bi bi-cloud-fog2"
        viewBox="0 0 16 16"
      >
        <path d="M8.5 4a4 4 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 13H.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 4M0 8.5A.5.5 0 0 1 .5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
      </svg>
    ),
    headerText: "Automotive Parts & Systems",
    bodyText:
      "Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.",
  },
];

const Card = () => {
  return (
    <div className="row">
      <div
        className="col-md-12 text-center"
        style={{ fontSize: 18, fontWeight: "bold" }}
      >
        ---- Our Service ----
      </div>
      <div
        className="col-md-12 text-center"
        style={{ fontSize: 28, fontWeight: "bold" }}
      >
        We Offer Best Product Service To You.
      </div>
      <div className="col-md-12 d-flex justify-content-center align-items-center flex-wrap">
        {dummyData.map((item,index) => {
          return (
            <div  key={index} className="col-md-3 m-4 p-4 card">
              <div > {item.icon}</div>
              <div style={{fontSize:24}} className="card-header"> {item.headerText}</div>
              <div > {item.bodyText}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
