import {
  Container,
  Right,
  Left,
  ContactContainer,
  ToContact,
  LocationOnMap,
  Address,
  Email,
  Phone,
  LineBreak,
  FoundationYear,
  Invitation,
  BottomContainer,
  FbLinkContainer,
  Logo,
  Text,
  FbText,
  BoldText,
  Open,
  Close,
  NameLink,
  Map,
  InvitationText,
  Wrapper,
} from "./Footer-styles";
import React from "react";
import { FacebookOutlined } from "@mui/icons-material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { closeCommaImage, openCommaImage } from "../../Data/Images";
import { nyanLinTunFbLink } from "../../Data/Materials";
import { lawonyaungchyiFbLink } from "../../Data/Materials";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <ContactContainer>
            <ToContact>ဆက်သွယ်ရန်</ToContact>
            <Address>
              သဘာဝမီးစက်လမ်း၊ရွာသစ်ကုန်းရွာ၊မြန်အောင်မြို့၊ဧရာဝတီတိုင်း။
            </Address>
            <Email>lawonyaungchyi@gmail.com</Email>
            <Phone>၀၉-၉၆၀၈၈၃၉၈၇၊၀၉-၄၃၀၂၀၁၄၆၅။</Phone>
            <FbLinkContainer>
              <Logo>
                <FacebookOutlined fontSize="medium" />
              </Logo>
              <FbText href={lawonyaungchyiFbLink}>Lawon Yaung Chyi</FbText>
            </FbLinkContainer>
          </ContactContainer>
          <LineBreak />
          <FoundationYear>
            စတင်တည်ထောင်သည့်ရက်စွဲ။ ။ <BoldText>ဖေဖော်ဝါရီ</BoldText>လ၊
            <BoldText>၂</BoldText>ရက် ၊ <BoldText>၂၀၁၅</BoldText> ခုနှစ်။
          </FoundationYear>
          <Invitation>
            <InvitationText>
              <Open src={openCommaImage} />
              အလှူရှင်များနှင့်အဖွဲ့ဝင်များအဖြစ်
              <br />
              လဝန်းရောင်ခြည်ပရဟိတလူငယ်အဖွဲ့
              <br />
              မြန်အောင်မှလှိုက်လှဲစွာဖိတ်ခေါ်ပါတယ်။
              <Close src={closeCommaImage} />
            </InvitationText>
          </Invitation>
        </Left>
        <Right>
          <LocationOnMap>မြေပုံပေါ်တွင်တည်နေရာ</LocationOnMap>
          <Map>
            <MapContainer
              center={[18.277929, 95.308036]}
              zoom={13}
              scrollWheelZoom={false}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "inherit",
              }}
              zIndex={1}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                zIndex={1}
              />
              <Marker position={[18.277929, 95.308036]}>
                <Popup>
                  သဘာ၀မီးစက်ကြီးလမ်း
                  <br /> မြန်အောင်မြို့,လဝန်းရောင်ခြည်ရုံးခန်း။
                </Popup>
              </Marker>
            </MapContainer>
          </Map>
        </Right>
      </Wrapper>

      <BottomContainer>
        <Text>လဝန်းရောင်ခြည် မူပိုင်ခွင့်/၂၀၂၂</Text>
        <Text>
          Design & Developed By
          <NameLink href={nyanLinTunFbLink}>Nyan Lin Tun</NameLink>
        </Text>
      </BottomContainer>
    </Container>
  );
};

export default Footer;
