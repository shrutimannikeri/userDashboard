import { useContext, useState } from 'react';
import { Box } from '@mui/system';
import { profileContext } from '../App';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';
import Header from '../components/Header';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

export function Profile() {
  const [profile, setProfile] = useContext(profileContext);
  
  const [expanded, setExpanded] = useState(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

const navigate=useNavigate()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box  m="20px">
      <Header title="Admin profile" subtitle="Information about admin" />
     <Card  sx={{
              backgroundColor: colors.primary[400],
              color: colors.grey[100],
              maxWidth: 500
            }}>
      <CardHeader
        avatar={
          <Avatar src= {profile.avatar} aria-label="recipe" />
            
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= {<Typography component="div" variant="h5">
       {profile.name} 
      </Typography>
        }
        subheader={<Typography component="div" variant="subtitle1">
       {profile.designation}
       </Typography>}
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg"
        alt="Paella dish"
      />
      <CardContent>
       
        <Typography component="div" variant="subtitle1">
        Phone : {profile.number}
       </Typography>
       <Typography component="div" variant="subtitle1">
       Email : {profile.email}
       </Typography>
      
       <Typography component="div" variant="subtitle1">
        Age : {profile.age}
       </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="edit"
        onClick={()=>navigate("/profileedit")}
        >
          <EditIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

        <Typography component="div" variant="subtitle1">
        Address: 
       </Typography>

   <Typography component="div" variant="subtitle1">
        City:  {profile.city}
        <br />
        State:  {profile.state}
        <br />
        Country:  {profile.country}
        <br />
       </Typography>
<br />

          <Typography paragraph>About:</Typography>
          <hr />
       
          <Typography paragraph>
         {profile.about}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    
    </Box>
  );
}
