import Nav3 from "./Navbar";

import Divider from '@mui/material/Divider';
import "./ProfilePage.css";
import "./AccountPage.css"
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function AccountsPage(){
       const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
    return(<body id="accpage"><Nav3/>
    {/* <div className="proftitle">ACCOUNT DETAILS</div>
    <Divider variant="middle" sx={{
          marginLeft:'4%',
          marginRight:'4%'
        }}/>
        <div className="details">Personal Information</div>

    <table className="details">
        <tr className="row">
            <td className="c1">Account Id</td>
            <td className="c2"> : </td>
            <td className="c3"> 123456</td>
        </tr>
        <tr className="row">
            <td className="c1">Account Name</td>
            <td className="c2"> : </td>
            <td className="c3"> account name 123</td>
        </tr>
        <tr className="row">
            <td className="c1">Address </td>
            <td className="c2"> : </td>
            <td className="c3"> Address Line 1</td>
        </tr>
        <tr className="row">
            <td className="c1"> </td>
            <td className="c2">  </td>
            <td className="c3"> city</td>
        </tr>
        <tr className="row">
            <td className="c1"> </td>
            <td className="c2">  </td>
            <td className="c3"> pincode</td>
        </tr>
    </table>
    <table className="details">
        <tr className="row">
            <td className="c1">Total Balance</td>
            <td className="c2"> : </td>
            <td className="c3"> 123354</td>
        </tr>
        <tr className="row">
            <td className="c1">Available Balance</td>
            <td className="c2"> : </td>
            <td className="c3"> 2365485</td>
        </tr>
        <tr className="row">
            <td className="c1">Blocked Credit Balance</td>
            <td className="c2"> : </td>
            <td className="c3"> 7347</td>
        </tr>
        <tr className="row">
            <td className="c1">Blocked Debit Balance</td>
            <td className="c2"> : </td>
            <td className="c3"> 87746</td>
        </tr>
        <tr className="row">
            <td className="c1">Account Created Date</td>
            <td className="c2"> : </td>
            <td className="c3"> date</td>
        </tr>
        <tr className="row">
            <td className="c1">Account Status</td>
            <td className="c2"> : </td>
            <td className="c3"> acc status</td>
        </tr>
        <tr className="row">
            <td className="c1">Account Type</td>
            <td className="c2"> : </td>
            <td className="c3"> Savings</td>
        </tr>
        </table> */}
     
        {/* <Box sx={{ flexGrow: 1 }}>
            <Grid container
                direction="row"
                justifyContent="space-evenly"
                alignItems="baseline" className="mainContainer"
                columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                <Grid container spacing={3} xs={8} >
                    <Grid xs={12} spacing={4} className="column1">container 1</Grid>
                </Grid>
                <Grid container spacing={3} xs={4} >
                    <Grid xs={12} spacing={4} className="column2">container 2</Grid>
                </Grid>
            </Grid></Box> */}
             <Box sx={{ flexGrow: 1 }} className="mainContainer">
      <Grid container spacing={2} justifyContent="space-evenly">
        <Grid xs={7} direction="column" >
          <Grid xs={12}>
          <Item className="itemc1" >
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accounts</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className="right-button">
        <Button variant="outlined" className="button-outlined" sx={{fontSize:'11px', marginLeft:'3px',marginRight:'3px', float:'right'}}>Transfer Money</Button>

        <Button variant="outlined" className="button-outlined" sx={{fontSize:'11px', marginLeft:'3px',marginRight:'3px',float:'right'}}>More</Button>
        </div>
          <Typography variant="h3" align="left">
            $1244.6
          </Typography>
        </AccordionDetails>
      </Accordion>

          </Item>
          </Grid>
          <Grid xs={12} >
          <Item className="itemc1">
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>External Accounts</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="right-button">
        <Button variant="outlined" className="button-outlined" sx={{fontSize:'11px', marginLeft:'3px',marginRight:'3px', float:'right'}}>Transfer Money</Button>

        <Button variant="outlined" className="button-outlined" sx={{fontSize:'11px', marginLeft:'3px',marginRight:'3px',float:'right'}}>More</Button>
        </div>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

          </Item>
          </Grid>
          <Grid xs={12} >
          <Item className="itemc1">
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Recent Activity</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="right-button">
        <Button variant="outlined" className="button-outlined" sx={{fontSize:'11px', marginLeft:'3px',marginRight:'3px', float:'right'}}>Transfer Money</Button>

        <Button variant="outlined" className="button-outlined" sx={{fontSize:'11px', marginLeft:'3px',marginRight:'3px',float:'right'}}>More</Button>
        </div>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

          </Item>
          </Grid>
        </Grid>
        <Grid container xs={3} spacing={2}>
          <Grid xs={12} >
            <Item>
              <Box className="itemc2"
                id="category-a"
                sx={{ fontSize: '12px', textAlign: 'left' }}
              >
                Plan, track & manage
              </Box>
              <Box component="ul" className="ul-ptm" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <li className="li-ptm">Autosave</li>
                <Divider variant="middle" sx={{
          marginLeft:'4%',
          marginRight:'4%'
        }}/>
                <li className="li-ptm">Spending Summary</li>
                <Divider variant="middle" sx={{
          marginLeft:'4%',
          marginRight:'4%'
        }}/>
                <li className="li-ptm">Credit Journey</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={12} >
            <Item>
              <Box className="itemc2"
                id="category-a"
                sx={{ fontSize: '12px', textAlign: 'left' }}
              >
                Help & support
              </Box>
              <Box component="ul" className="ul-ptm" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <li className="li-ptm">Get help replacing cards, reporting fraud, ordering checks, contacting us and more</li>
            
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
        >
          {/* <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item>© Copyright</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>Link A</Item>
            </Grid>
            <Grid>
              <Item>Link B</Item>
            </Grid>
            <Grid>
              <Item>Link C</Item>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
    </Box>
    </body>)


}

export default AccountsPage;