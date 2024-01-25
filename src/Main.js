import React from "react";
import { Container, Paper, Grid, TextField, Button } from "@mui/material";

import "./style.css"

export default function Main() {
  return (
    <Container component="main" maxWidth="xs" sx={{ width: "100%", padding: 0, minHeight: "100vh" }}>
      <Paper className="paper" elevation={6} sx={{ p: 3, display: "flex", flexDirection: "column", alignItems: "center", width: "100%", minHeight: "60vh" }}>
        <h2>Sign In</h2>
        <form style={{ width: "100%", marginTop: "8px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
            </Grid>
          </Grid>
          <Button style={{ backgroundColor: "#FF0208", color: "#FFFFFF" }} variant="contained" color="primary" fullWidth>
            Sign In
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
