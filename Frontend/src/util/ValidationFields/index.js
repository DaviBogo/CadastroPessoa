import validator from "validator";

export const validatePerson = (user) => {
  if (!user.name || validator.isEmpty(user.name))
    return { erro: true, message: "Campo Nome vazio!" };
  if (!user.birthDate || validator.isEmpty(user.birthDate))
    return { erro: true, message: "Campo Data Nascimento vazio!" };
  return { erro: false, message: "" };
};
