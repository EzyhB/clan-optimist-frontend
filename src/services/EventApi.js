function updateDescription(id, description) {
  fetch("https://clanoptimistapi.herokuapp.com/api/v1/events/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ event_description: description }),
  });
}

export default updateDescription;
