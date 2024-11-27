import Title from "../Title/title";
import SubTitle from "../Subtitle/Subtitle";
import '../../css/Banner.css'

function Banner() {

    return (
        <div className="banner">
            <div className="container d-flex ">
                <div className="banner-left">
                    <Title />
                    <SubTitle />
                </div>
                <div className="banner-right">
                     <img src="../../../public/image 1.png" alt=""  width={300}/> 

                </div>
            </div>
        </div>
    );
}

export default Banner;