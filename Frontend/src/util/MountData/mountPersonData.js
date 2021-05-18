export const MountPersonDataForBackEnd = (person) => {
  let user = {
    nome: person.name,
    dataNascimento: person.birthDate,
  };
  return user;
};
