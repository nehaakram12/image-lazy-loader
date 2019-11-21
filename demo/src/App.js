import React, { Component } from "react";
import Picture from "@nehaakram12/image-lazy-loader";
import "@nehaakram12/image-lazy-loader/lib/main.css";
import "./app.css";

const data = [
  {
    title: "tahiti-GettyImages-550870471.jpg",
    handle: "EVbXOrYbS8q7tCKM8m9o"
  },
  {
    title: "tikehau-pearl-beach-resort.jpg",
    handle: "joqz8cLdSvWQvV08rjNt"
  },
  {
    title:
      "pearl-beach-resort-tikehau-french-polynesia-age-fotostock-alamy.jpg",
    handle: "pcJxeF8vRSWTbZH8pzJP"
  },
  {
    title: "tikehau-pearl-beach-resort-tuomatu-archipelago-bed-rca-2014.jpg",
    handle: "jAMvZzRzTXrQ16eger19"
  },
  {
    title: "tikehau-pearl-beach-resort-tuomatu-archipelago-rca-2014.jpg",
    handle: "GNtDQEyoRie0gXz7zonU"
  },
  {
    title: "dreamland-bali-GettyImages-544489350.jpg",
    handle: "6xPu3tKfTEu3nyCj2Yor"
  },
  {
    title: "Bathroom-TheMulia-Bali-CRHotel.jpg",
    handle: "SYL1h6uUSvmNRkfryyxa"
  },
  {
    title: "Bedroom-TheMulia-Bali-CRHotel.jpg",
    handle: "8McSojdxTYiEKnpw5WkQ"
  },
  {
    title: "LivingRoom-TheMulia-Bali-CRHotel.jpg",
    handle: "IRbl6rsKSvyjqanEvxGo"
  },
  {
    title: "Terrace-TheMulia-Bali-CRHotel.jpg",
    handle: "LjbqV9MpTQigJpu1cIuS"
  },
  {
    title: "Pool-TheMulia-Bali-CRHotel.jpg",
    handle: "9oZwwnNmS7i86pdVUxrc"
  },
  {
    title: "Beach-TheMulia-Bali-CRHotel.jpg",
    handle: "dfMkSLM5QXuOq9L1BlZj"
  },
  {
    title: "View-TheMulia-Bali-CRHotel.jpg",
    handle: "YMnsGk2gRK2CfvFzDued"
  },
  {
    title: "Bathsheba-barbados-GettyImages-158546414.jpg",
    handle: "AidCfhtFRBaLOilVTmSD"
  },
  {
    title: "fairmont-royal-pavilion-barbados-barbados-barbados-101810-1.jpg",
    handle: "QDXuTnQEazV7seWRPhvw"
  },
  {
    title: "fairmont-royal-pavilion-barbados-barbados-barbados-101810-2.jpg",
    handle: "MoeHOKy4SMKbIi5FBokr"
  },
  {
    title: "fairmont-royal-pavilion-barbados-barbados-barbados-101810-3.jpg",
    handle: "GPlI2e8oRxmdZTsqWwnW"
  },
  {
    title: "fairmont-royal-pavilion-barbados-barbados-barbados-101810-4.jpg",
    handle: "L9pEZU5QRL6MJceCyoNl"
  },
  {
    title: "fairmont-royal-pavilion-barbados-barbados-barbados-101810-5.jpg",
    handle: "K82qfKf8TUKstPqrXtoN"
  },
  {
    title: "7MileBeach-2013-HiRes.jpg",
    handle: "vW3kA2MQqGlNxOil8TcK"
  },
  {
    title:
      "The-Ritz-Carlton,-Grand-Cayman__2018_TRC_GRANDCAYMAN_GW_SELECTS-142.jpg",
    handle: "05KCD7TwTrq1nu5B9GYo"
  },
  {
    title: "The-Ritz-Carlton,-Grand-Cayman__2018_RCGNDCA_00290.jpg",
    handle: "U1cqEvkdQuaHVvaChYn0"
  },
  {
    title: "The-Ritz-Carlton,-Grand-Cayman__2018_rcgc_ste772_bed1_v1.jpg",
    handle: "D0YfncIWQBa83Dsp7Ygj"
  },
  {
    title: "The-Ritz-Carlton,-Grand-Cayman__2018_RCGNDCA_00229.jpg",
    handle: "F2EpX1BDQQ2l0o5Xq5uA"
  },
  {
    title: "horseshoe-bay-bermuda-getty.jpg",
    handle: "VPTXLufQ36FXtZBVORqk"
  },
  {
    title: "Exterior-TheReefsResort&Club-Bermuda-CRHotel.jpg",
    handle: "AzWXwcUNQ9uTqQv6pibn"
  },
  {
    title: "harbour-island-bahamas-GettyImages-548295287.jpg",
    handle: "KS6rp3JhSKGGTKXrojyA"
  },
  {
    title: "Beach-PinkSands-Bahamas-CRHotel.jpg",
    handle: "1sNgJaSuRWiddTZVFw2i"
  },
  {
    title: "Exterior-PinkSands-Bahamas-CRHotel.jpg",
    handle: "ZS7k73JpTPKIjviX7tC8"
  },
  {
    title: "LivingRoom-PinkSands-Bahamas-CRHotel.jpg",
    handle: "sdU41fM8QZWDkDeb465o"
  },
  {
    title: "DiningRoom-PinkSands-Bahamas-CRHotel.jpg",
    handle: "NyrmAFOpSZeF3G8TpJAy"
  },
  {
    title: "Bar-PinkSands-Bahamas-CRHotel.jpg",
    handle: "MJVMtGosTQ27ROZ6vdxt"
  },
  {
    title: "Dinner-PinkSands-Bahamas-CRHotel.jpg",
    handle: "vjnvpnRhTxOFPR5gbOD8"
  },
  {
    title: "La-Chiva-Vieques-cr-alamy.jpg",
    handle: "1zuYa1DPS9CXdEn8yQLa"
  },
  {
    title: "Firepit-WRetreat&SpaViequesIsland-PuertoRico-CRHotel.jpg",
    handle: "VIuXg19SIOtLBTPj053i"
  },
  {
    title: "Bedroom1-WRetreat&SpaViequesIsland-PuertoRico-CRHotel.jpg",
    handle: "tZuTolHfT6CkzcBjnmIA"
  },
  {
    title: "Lounge-WRetreat&SpaViequesIsland-PuertoRico-CRHotel.jpg",
    handle: "jLaliBTO6g0PNL2PlqQ1"
  },
  {
    title: "Beach-WRetreat&SpaViequesIsland-PuertoRico-CRHotel.jpg",
    handle: "YL83saoSmiwuPyMON9sQ"
  },
  {
    title: "Detail-WRetreat&SpaViequesIsland-PuertoRico-CRHotel.jpg",
    handle: "GlkxNYunRQah5pUktup7"
  },
  {
    title: "Trunk-Bay-St-John-cr-alamy.jpg",
    handle: "7DGiQPtQJeKdC9rC1kbg"
  },
  {
    title: "caneel-bay-st-john-st-john-usvi-102178-2.jpg",
    handle: "tJq4J1R2jLnue6PfSRwd"
  },
  {
    title: "caneel-bay-st-john-st-john-usvi-102178-1.jpg",
    handle: "mjc00Q6kS9isQ96YS2Z6"
  },
  {
    title: "caneel-bay-st-john-st-john-usvi-102178-3.jpg",
    handle: "HyNVCBckRO2enBX75nN8"
  },
  {
    title: "caneel-bay-st-john-st-john-usvi-102178-4.jpg",
    handle: "cXtNxOZQTetzUDl92EsW"
  },
  {
    title: "caneel-bay-st-john-st-john-usvi-102178-5.jpg",
    handle: "cbNI8eitRzaSnTCJ01Qx"
  },
  {
    title: "Waipio-Valley-Beach-cr-alamy.jpg",
    handle: "axiCBe2PSfegHvfnABU9"
  },
  {
    title: "mauna-kea-beach-hotel-pool-hawaii.jpg",
    handle: "AiL9rCIbQtuuN5oW1sZv"
  },
  {
    title: "mauna-kea-hotel-lobby.jpg",
    handle: "fwFajAcES567OuTAsPJM"
  },
  {
    title: "mauna-kea-white-exterior.jpg",
    handle: "E5t6HIvZSIKhfz18gaq7"
  },
  {
    title: "parrot-cay-DYRAXB.jpg",
    handle: "TOX3wohnTfOcch489De5"
  },
  {
    title: "Tout-COMOParrotCay-TurksandCaicos-CRHotel.jpg",
    handle: "KStfYRR0K21IVfCKtBXQ"
  },
  {
    title: "LivingRoom2-COMOParrotCay-TurksandCaicos-CRHotel.jpg",
    handle: "B6bL0kj2QrWHvt19to6V"
  },
  {
    title: "Bedroom2-COMOParrotCay-TurksandCaicos-CRHotel.jpg",
    handle: "EIZjNb6EShipRx4r5Oqd"
  },
  {
    title: "Bathroom2-COMOParrotCay-TurksandCaicos-CRHotel.jpg",
    handle: "bXjk6ENTt2PIT25KYgg8"
  },
  {
    title: "Lounge-COMOParrotCay-TurksandCaicos-CRHotel.jpg",
    handle: "Oz26E49bQ2qL0pt1ax6D"
  },
  {
    title: "LivingRoom1-COMOParrotCay-TurksandCaicos-CRHotel.jpg",
    handle: "Q5zBSG8fQNWIwBZhvGkM"
  },
  {
    title: "Bedroom1-COMOParrotCay-TurksandCaicos-CRHotel.jpg",
    handle: "gm94lPl6SNqQ8AOl4twi"
  },
  {
    title: "Bathroom1-COMOParrotCay-TurksandCaicos-CRHotel.jpg",
    handle: "ApqvMenKQcyTfQbuP3ba"
  },
  {
    title: "Detail-COMOParrotCay-TurksandCaicos-CRHotel.jpg",
    handle: "3bh8qSKLRr2HP1jSgOIx"
  },
  {
    title: "Evening-COMOParrotCay-TurksandCaicos-CRHotel.jpg",
    handle: "Glp8n0kmSFKWpR4kPSVs"
  },
  {
    title: "Beach-COMOParrotCay-TurksandCaicos-CRHotel.jpg",
    handle: "USsepPkGQo68zUonzoVQ"
  },
  {
    title: "Lindquist-Beach-st-thomas-GettyImages-183056331.jpg",
    handle: "CZzurk7XQhqS8IOytSkT"
  },
  {
    title: "View-RitzCarltonStThomas-CRHotel.jpg",
    handle: "Buzkrol4QKRS296fHtjD"
  },
  {
    title: "Suite-RitzCarltonStThomas-Caribbean-CRHotel.jpg",
    handle: "DA8u784TwWUfyRyi1XrQ"
  },
  {
    title: "Dining-RitzCarltonStThomas-Caribbean-CRHotel.jpg",
    handle: "OMJZ2vmcSNiIQqz6zY0v"
  },
  {
    title: "Sailing-RitzCarltonStThomas-Caribbean-CRHotel.jpg",
    handle: "Fq7JME3YROqDvQ6DHFui"
  },
  {
    title: "Pool2-RitzCarltonStThomas-Caribbean-CRHotel.jpg",
    handle: "rGgbyXKXTVCvlSfjNa3Q"
  }
];

class App extends Component {
  render() {
    return (
      <div className={"gallery"}>
        {data.map(item => (
          <Picture
            key={item.handle}
            handle={item.handle}
            className={"item"}
            objectFitMode
            width={item.width}
            alt={item.title}
          />
        ))}
      </div>
    );
  }
}

export default App;
