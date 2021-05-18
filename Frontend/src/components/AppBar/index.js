import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";
import Menu from "./Menu";
import Loading from "../../components/Dialogs/Loading";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const useStyles = makeStyles(() => ({
  marginLeft8: {
    marginLeft: 32,
  },
  root: {
    flexGrow: 1,
    marginBottom: 32,
  },
}));

const mapStateToProps = (state) => ({
  user: state.user,
  run: state.run,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  const classes = useStyles();
  const { user } = props.user;
  const [open, setOpen] = useState(false);
  const [code] = useState(localStorage.getItem("code"));

  useEffect(() => {
    setOpen(true);
  }, []);

  function handleLogout() {
    localStorage.removeItem("access_token");
    window.location.assign("/login");
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={9}>
              <Button
                color="inherit"
                variant="outlined"
                onClick={() =>
                  window.location.assign(
                    user.ocupation === "Forneiro"
                      ? "/forneiro"
                      : user.ocupation === "Químico"
                      ? "/quimico"
                      : "/gerente"
                  )
                }
              >
                OMIL | Fundição
              </Button>
            </Grid>

            {user.ocupation === "Gerente" ? (
              <Grid item xs={1}>
                <Grid container justify="flex-end">
                  <Menu></Menu>
                </Grid>
              </Grid>
            ) : (
              <Grid item xs={1}></Grid>
            )}

            <Grid item xs={1}>
              <Grid container justify="center">
                <Typography variant="h6">{user.familyName} </Typography>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Button
                fullWidth
                color="inherit"
                onClick={handleLogout}
                variant="outlined"
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {open && (
        <Loading open={open} code={code} onClose={() => setOpen(false)} />
      )}
    </div>
  );
});
