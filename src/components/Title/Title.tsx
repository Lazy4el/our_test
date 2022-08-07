import Typography from '@mui/material/Typography';
import { TitleText } from '../../interfaces/interfaces';

function Title({ title, h2, h3, h4 }: TitleText) {
  return (
    <Typography variant={h2 || h3 || h4} className="Title">
      {title}
    </Typography>
  );
}

export default Title;
