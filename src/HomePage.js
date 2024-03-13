import React,{useState} from 'react'
import Header from './Components/Header';
import PostNavBarComponent from './Components/PostNavBarComponent';
import PostComponent from './Components/PostComponent';
import LocationComponent from './Components/LocationComponent';
import GroupsComponent from './Components/GroupsComponent';



export default function HomePage() {

  const [show,setShow]=useState(false);

  const handleShowGroupsComponent=(state)=>{
    //alert(state);
    setShow(state);
  }


  return (
    <div style={{ width: 1440 }}>
      <Header />
      <div className="container-fluid" style={{ position: "relative" }}>
         <div class="col-4 col-lg-6 col-xl-12 img-div" > 
          <img src="/img3.jpg" className="img-fluid"   />
          <div style={{position: "absolute",
              top: "60%",
              left: "15%",
              zIndex: 1,
              color: "#fff",
              fontFamily: "IBM Plex Sans,sans serif",
    }}>
            <div style={{ fontSize: 32, fontWeight: "bold" }}>
              {" "}
              Computer Engineering
            </div>
            <div style={{ fontSize: 18 }}>
              142,765 Computer Engineers follow this
            </div>
           </div> 
        </div>
      </div>

      <PostNavBarComponent  onChange={handleShowGroupsComponent}/>
     
      <PostComponent
        type={"✍️ Article"}
        heading={"What if famous brands had regular fonts? Meet RegulaBrands!"}
        subheading={
          " I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
        }
        name={"Sarthak Kamra"}
        image={"/img1.jpg"}
        bannerImage={"/bannerimage1.jpg"}
      />

      <PostComponent
        type={"🔬️ Education"}
        heading={
          "Tax Benefits for Investment under National Pension Scheme launched by Government"
        }
        subheading={
          " I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
        }
        name={"Sarah West"}
        image={"/img2.jpg"}
        bannerImage={"/bannerimage2.jpg"}
      />
      <PostComponent
        type={"🗓️ Meetup"}
        name={"Ronal Jones"}
        heading={"Finance & Investment Elite Social Mixer @Lujiazui"}
        image={"/img3.jpg"}
        date={"Fri, 12 Oct, 2018"}
        location={"Ahmedabad, India"}
        bannerImage={"/bannerimage3.jpg"}
      />
      <PostComponent
        type={"💼️ Job"}
        name={"Joseph Gray"}
        heading={"Software Developer"}
        image={"/img4.jpg"}
        location={"Noida, India"}
        company={"Innovaccer Analytics Private Ltd."}
      />
     <LocationComponent /> 
    {show?<GroupsComponent />:<></>}
    </div>
  );
}


