import { Typography, Card, CardContent, Grid, TextField, Button } from "@mui/material";
import { inputFormElement } from "./form";

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <Card style={{maxWidth:450, margin: "0 auto", padding:"5px 5px"}}>
        <CardContent>
            <Typography color="textSecondary" variant="subtitle1" component="paragraph">Fill up the form and our team will get back to you within 24 hours.</Typography>
        <form>
          <Grid container spacing={1}>
            {
                inputFormElement.map(input=> <Grid xs={input.xs} sm={input.sm} item>
                                                <TextField {...input} />
                                            </Grid>)
            }

            
            <Grid xs={12} item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contact;
