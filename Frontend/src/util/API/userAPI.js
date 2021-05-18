export const createPerson = async (user) => {
  let formData = new FormData();
  formData.append("pessoa", JSON.stringify(user));
  var requestOptions = {
    method: "POST",
    body: formData,
  };
  return await fetch(
    "http://localhost:8085/api/pessoa",
    requestOptions,
    {}
  ).then((response) => response.json());
};
