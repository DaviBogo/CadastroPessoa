import React from "react";
import { Card, CardContent, Grid, Typography, Button } from "@material-ui/core";

export default function CardRun(props) {
  const { run, user } = props;

  async function openRun() {
    let link =
      user.ocupation === "Forneiro"
        ? "forneiro"
        : user.ocupation === "Químico"
        ? "quimico"
        : "gerente";
    window.location.assign(`/${link}/run/${run.corridaAno}`);
  }

  return (
    <>
      <Card>
        <CardContent>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="flex-start"
          >
            <Grid item xs={12} md={2}>
              <Button variant="contained" color="primary" onClick={openRun}>
                Abrir
              </Button>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography align="center">
                <span style={{ fontWeight: 550 }}> Corrida do ano </span>
              </Typography>
              <Typography align="center"> {run.corridaAno} </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography align="center">
                {" "}
                <span style={{ fontWeight: 550 }}> Data </span>
              </Typography>
              <Typography align="center"> {run.data} </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography align="center">
                {" "}
                <span style={{ fontWeight: 550 }}> Classe </span>
              </Typography>
              <Typography align="center">{run.classe}</Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography align="center">
                {" "}
                <span style={{ fontWeight: 550 }}> Total derretido </span>
              </Typography>
              <Typography align="center"> {run.totalKgDerretido} </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
