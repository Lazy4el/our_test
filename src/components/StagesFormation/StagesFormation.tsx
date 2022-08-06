import { Container } from "@mui/material";
import Title from "../Title/Title";
import BodyText from "../BodyText/BodyText"
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import './StagesFormation.css'
import Divider from '@mui/material/Divider';
import Customer from '../Сustomer/Сustomer'

export default function StagesFormation () {
    return <Container>
    <div className="StagesFormation">
      <div className="StagesFormation__description">
        <Title title ='Становление компании' h2='h2' />
        <div className="StagesFormation__stage">
            <div className="">
                <Title title ='2009 год' h3='h3' />
                <BodyText text =" Установление партнеских отношений с ведущими предприятиями химической отрасли такими как ПАО«Казаньоргсинтез» и ПАО«Нижнекамскнефтехим». Анализ рынка, определение стратегии бизнеса и начало оптовых продаж технической химии." />
            </div>
            <HandshakeTwoToneIcon className="StagesFormation__Icon" />

        </div>
        <Divider />
        <div className="StagesFormation__stage">
            <LocalShippingTwoToneIcon className="StagesFormation__Icon" />
            <div className="">
                <Title title ='2011 год' h3='h3' />
                <BodyText text ="Организация собственного автопарка грузовых машин позволяющего максимально быстро поставлять и гарантировать заказчикам качество продукции минуя третьих лиц." />
            </div>
        </div>
        <Divider />
        <div className="StagesFormation__stage">
            <div className="">            
                <Title title ='2016-2017 годы' h3='h3' />
                <BodyText text ="Ознаменованы организацией производственной площадки. Начинается производство собственной продукции, а также появляется техническая возможность синтеза химических решений заказчика. В тесном сотрудничестве с ведущими специалистами Казанского Химико-Технологического Университета компания создает инновационные продукты." />
            </div>
            <CategoryTwoToneIcon className="StagesFormation__Icon" />
        </div>

        <Divider />
        <Customer />
      </div>
    </div>
  </Container>
}