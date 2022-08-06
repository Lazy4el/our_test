import Typography from '@mui/material/Typography';
import {TitleText} from '../../interfaces/interfaces'

function Title(prop:TitleText) {

  const {title, h2, h3, h4} =prop
  
  
  return (    
    <Typography variant = {h2||h3||h4} className="Title">
        {title}
    </Typography>
  );
}

export default Title;
