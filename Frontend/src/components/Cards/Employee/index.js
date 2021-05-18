import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
  Tooltip,
  Chip,
} from "@material-ui/core";

export default function EmployeeCard(props) {
  const { employee } = props;

  return (
    <>
      <Card>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} md={2}>
              {employee.ativo ? (
                <Tooltip title="Funcionário ativo" placement="top">
                  <Chip
                    size="small"
                    style={{
                      backgroundColor: "#00e676",
                      color: "white",
                    }}
                  />
                </Tooltip>
              ) : (
                <Tooltip title="Funcionário desativado" placement="top">
                  <Chip color="secondary" size="small" />
                </Tooltip>
              )}
            </Grid>
            <Grid item xs={12} md={2}>
              <span style={{ fontWeight: 550 }}> Nome </span>
              <Typography> {employee.nome} </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <span style={{ fontWeight: 550 }}> Sobrenome </span>
              <Typography> {employee.sobrenome} </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <span style={{ fontWeight: 550 }}> Ocupação </span>
              <Typography>
                {employee.authorities[0] ? employee.authorities[0].cargo : ""}
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <span style={{ fontWeight: 550 }}> Código Omil </span>
              <Typography> {employee.codigoOmil} </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Grid container justify="flex-end">
                <IconButton onClick={() => props.openEditEmployee(employee)}>
                  <EditIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
