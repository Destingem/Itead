import MUI, {
  Box,
  Container,
  Grid,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { AppBar } from "@mui/material";
import { maxHeight } from "@mui/system";
import Link from "next/link";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <div>
      <nav>
        <AppBar position="static" color="transparent">
          <Grid maxWidth="xl" margin="1.5vh 2vh 1.5vh 2vh" className={styles.navbar}>
            <Link href="/" >
            <Stack direction="row" spacing={2} className={styles.logo}>
              <img className={styles.logo} src="images/logo-lista.png"></img>

              <Typography
                variant="h4"
                component="h1"
                marginTop="0.5vh"
                color="#036bb1"
              >
                ITEAD
              </Typography>
            </Stack>
            </Link>
            
            <Stack direction="row" className={styles.links} spacing={4} marginLeft="20vh" >
              <li>
                <Link href="/pojisteni">Pojištění</Link>
              </li>
              <li>
                <Link href="/o-nas">O nás</Link>
              </li>
              <li>
                <Link href="/aktuality">Aktuality</Link>
              </li>
              <li>
                <Link href="/spoluprace">Spolupráce</Link>
              </li>
              <li>
                <Link href="/zakonne-informace">Zákonné informace</Link>
              </li>
              <li>
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </Stack>
          </Grid>
        </AppBar>
      </nav>
    </div>
  );
}
