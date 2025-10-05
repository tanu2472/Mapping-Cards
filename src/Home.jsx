import "./Home.css";
import { STUDENTS_DATA } from "./configs/students";
import StudentCard from "./components/StudentsCard/StudentCard.jsx";
import { APP_NAME ,APP_Description,BG_COLOR,PRIMARY_COLOR,SECONDARY_COLOR,LIGHT_COLOR} from "./configs/app.js";


function Home() {
  return (
    <div >
      <h1 className="header"
       style={{ color:PRIMARY_COLOR}} >
        {APP_NAME}</h1> 
      {APP_Description ? (
      <p className="app-description" style={{color: SECONDARY_COLOR}}>{APP_Description}</p>
      ) : null}
         
      <div className="person-container">
        {STUDENTS_DATA.map((student) => {
            const {name, email, city,personnel,gender} = student;

         return(
          <StudentCard
           name={name}
           email={email}
           city={city} 
           personnel={personnel} 
           gender={gender}
            key={email}
           />
         );
        })}
      </div>
    </div>
  );
}

export default Home;
