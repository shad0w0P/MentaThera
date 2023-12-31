import styled from 'styled-components';
import { primaryFont } from '../../utils/fonts/font';
import { SiTwitter, SiFacebook, SiInstagram, SiLinkedin, SiYoutubetv, SiWhatsapp, SiWorldhealthorganization } from 'react-icons/si';
import { footerTopBgColor, primaryColor } from '../../utils/color/Color';
import { BiArrowToTop } from 'react-icons/bi';
import { animateScroll as scroll  } from 'react-scroll';


const Footer = () => {

    const scrollToTop = () => {
       scroll.scrollToTop()
    }

    return(
        <StyledFooter>
             
              <BiArrowToTop className="backToTop" onClick={() => scrollToTop()}/>
            
            <FooterDiv data-aos="fade-up" data-aos-duration="500">
                <H3>Social Media</H3>
                <P>
            <a href="https://www.facebook.com">
                Facebook <SiFacebook />
            </a>
        </P>
        <P>
            <a href="https://twitter.com">
                Twitter <SiTwitter />
            </a>
        </P>
        <P>
            <a href="https://www.instagram.com">
                Instagram <SiInstagram />
            </a>
        </P>
        <P>
            <a href="https://www.linkedin.com">
                Linkedin <SiLinkedin />
            </a>
        </P>
            </FooterDiv>
            {/* <FooterDiv data-aos="fade-up" data-aos-duration="500">
                <H3>Terappy @2021</H3>
                <P>Accra, Central. Blue Crest Apartment</P>
                <P>Opposite, Ministry of Finance</P>
                <P>Email: terappy@gh.com</P>
                <P>Customer Service: 03333333(toll free)</P>
                <P>Whatsapp Us <SiWhatsapp />: +233545941195 </P>
                <P>Partners: WHO <SiWorldhealthorganization />, Unicef </P>
            </FooterDiv> */}
            <FooterDiv>A healthy mind, lives in a healthy body</FooterDiv>
        </StyledFooter>
    )
}

export default Footer;

const StyledFooter = styled.footer`
  background-Image: url("images/Wave.svg");
  background-color: ${footerTopBgColor};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  color: white;
  font-family: ${primaryFont};
  font-size: small;
`
const FooterDiv = styled.div`
  align-self: flex-end;
  margin: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const H3 = styled.h3`
 margin-top: 10px;
 margin-bottom: 10px;
`

const P = styled.p`
 padding: 2px;
 cursor: pointer;

 &:hover {
     color: ${primaryColor};
 }
`
