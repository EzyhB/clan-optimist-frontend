import React from "react";
import "./deleteDataButton.css";

export default function DeleteDataButton({ eventid }) {
  async function handleOnClick(e) {
    await fetch(
      "https://clanoptimistapi.herokuapp.com/api/v1/events/" + e.target.value,
      {
        method: "DELETE",
      }
    );
    console.log("delete req passed");
  }

  return (
    <div>
      <button
        onClick={(e) => {
          handleOnClick(e);
        }}
        className="delete-data-button"
        value={eventid}
      >
        Delete event
      </button>
    </div>
  );
}
