import "./StudentCard.css";
import { Mail,Building2,UserStar,UserRound } from "lucide-react";
import woman from "../../assets/images/woman.png";
import man from "../../assets/images/man.png";
import { PRIMARY_COLOR,LIGHT_COLOR,SECONDARY_COLOR } from "../../configs/app.js";

function StudentCard({name, email, city, personnel, gender}) {
  return (
    <div className="student-card" style={{backgroundColor: LIGHT_COLOR,borderColor:PRIMARY_COLOR}}>
           <h2 className="student-name" > {name}</h2>
           <p className="student-info"><Mail className="student-info-icon" /> {email}</p>

           <p className="student-info"><Building2 className="student-info-icon"/> {city}</p>

           <p className="student-info">
            { personnel == "Manager" ?(
               <UserStar className="student-info-icon"/>
              ) : (
               <UserRound  className="student-info-icon"/> 
             )
            } 
            {personnel}
            </p>  
           
              < img  src={gender=="female" ? woman : man}
              className="student-gender"/>
              
          </div>
        );
}

export default StudentCard;
