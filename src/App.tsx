import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import { Autocomplete, Button, TextField, Tooltip } from "@mui/material";
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { pink } from '@mui/material/colors';

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function App() {
  function writeSomething() {
    console.log("Hello");
  }
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the learning session
        </Typography>
        
        {/* TODO: Create a similar component like FenDropdown using material-ui */}
        {/* // TODO: Create a button from by using material-ui */}
        {/* //TODO: Add a tooltip for  */}
      </Box>
    </Container>
  );
}
