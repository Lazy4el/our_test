import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Title from '../Title/Title';
import Divider from '@mui/material/Divider';
import BodyText from '../BodyText/BodyText';
import './ProductCard.css';

export default function ProductCard({ element }: any) {
  const { title, text, gost, org } = element;

  return (
    <div className="ProductCard">
      <Box>
        <Card>
          <CardContent className="ProductCard__conent">
            <Title title={title} h4="h4"></Title>
            {text && <Divider />}
            {gost && <BodyText text={'ГОСТ/ТУ'} body2="body2" />}
            <BodyText text={text} body1="body1" />
            {org}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
