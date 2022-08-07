import { Typography } from '@mui/material';
import { bodyText } from '../../interfaces/interfaces';

function BodyText({ text, body1, body2 }: bodyText) {
  return (
    <Typography variant={body1 || body2} className="BodyText">
      {text}
    </Typography>
  );
}

export default BodyText;
