import { FC } from 'react';
import AboutCompany from '../../components/AboutCompany/AboutCompany';
import ContainerBg from '../../components/ContainerBg/ContainerBg';
import StagesFormation from '../../components/StagesFormation/StagesFormation';
import Companions from '../../components/Companions/Companions';

const HomePage: FC = () => {
  return (
    <div>
      <ContainerBg />
      <AboutCompany />
      <StagesFormation />
      <Companions />
    </div>
  );
};
export default HomePage;
