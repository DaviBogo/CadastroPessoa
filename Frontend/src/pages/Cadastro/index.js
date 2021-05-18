import React, { useState } from "react";
import * as userAPI from "../../util/API/userAPI";
import Warning from "../../components/Warning";
import moment from "moment";
import "moment/locale/pt-br";
import {
  Typography,
  TextField,
  makeStyles,
  Button,
  Grid,
  Paper,
} from "@material-ui/core";

import { MountPersonDataForBackEnd } from "../../util/MountData/mountPersonData";
import { validatePerson } from "../../util/ValidationFields";

moment.locale("pt-br");

const useStyles = makeStyles(() => ({
  marginBottom16: {
    marginBottom: 16,
  },
  paper: {
    marginTop: 240,
    padding: 16,
  },
}));

export default function Cadastro(props) {
  const classes = useStyles();
  const [warningMessage, setWarningMessage] = useState("");
  const [openWarning, setOpenWarning] = useState(false);
  const [typeWarning, setTypeWarning] = useState("info");
  const [user, setUser] = useState({
    name: "",
    birthDate: "",
  });

  async function Cadastro() {
    let response = validatePerson(user);
    if (response.erro === true) return handleWarning(response.message, "error");
    let UserForBackEnd = MountPersonDataForBackEnd(user);
    response = await userAPI.createPerson(UserForBackEnd);

    if (!response) {
      handleWarning(
        "Não foi possível efetuar a comunicação com o servidor. Tente novamente ou contate o suporte técnico",
        "error"
      );
    } else if (response.errorMessage) {
      handleWarning(response.errorMessage, "error");
    } else {
      setUser({ name: "", birthDate: "" });
      handleWarning("Pessoa criada com sucesso", "success");
    }
  }

  function handleWarning(message, type) {
    setOpenWarning(true);
    setWarningMessage(message);
    setTypeWarning(type);
  }

  function onCloseWarning() {
    setOpenWarning(false);
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ padding: 8 }}
      >
        <Paper className={classes.paper}>
          <Grid container direction="row">
            <Grid item>
              <Typography
                variant="h4"
                className={classes.marginBottom16}
                align="center"
              >
                Cadastro de Usuário{" "}
              </Typography>{" "}
              <TextField
                id="outlined-required"
                label="Nome"
                variant="outlined"
                margin="dense"
                fullWidth
                type="text"
                onChange={(event) =>
                  setUser({ ...user, name: event.target.value })
                }
                className={classes.marginBottom16}
              />{" "}
              <TextField
                label="Data de nascimento"
                margin="dense"
                variant="outlined"
                name="dataNascimento"
                fullWidth
                onChange={(event) =>
                  setUser({ ...user, birthDate: event.target.value })
                }
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={Cadastro}
              >
                Cadastrar{" "}
              </Button>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </Paper>{" "}
      </Grid>{" "}
      {openWarning && (
        <Warning
          message={warningMessage}
          open={openWarning}
          typeMessage={typeWarning}
          onClose={onCloseWarning}
        />
      )}{" "}
    </>
  );
}
