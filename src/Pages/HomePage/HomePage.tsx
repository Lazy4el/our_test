import {FC} from "react";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import ContainerBg from "../../components/ContainerBg/ContainerBg"
import StagesFormation from "../../components/StagesFormation/StagesFormation"

const HomePage: FC = () => {
    return (
        <div>
            <ContainerBg />
            <AboutCompany />
            <StagesFormation />
        </div>
    )
}
export  default HomePage