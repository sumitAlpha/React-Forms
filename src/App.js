
import './App.css';
import { useState } from "react";

function App() {

  // const[firstName, setfirstName]=useState("");
  // const[lastName, setlastName]=useState("");
  // const[emailName, setemailName]=useState("");

  // console.log(firstName);
  // console.log(lastName);
  // console.log(emailName);

  // function changeFirstHandler(event){
  //   setfirstName(event.target.value);
  // }

   
  // function changeSecondHandler(event){
  //  // console.log(event.target);
  //  setlastName(event.target.value);
  //   }
  //   function changeHandler(event){
  //    // console.log(event.target);
  //    setemailName(event.target.value);
  //     }



      //multiple states kaise handle krte hai react me
      const[formData,SetformData]= useState({firstName:"", lastName:"", emailid:"",comments:"", 
      isVisible:true , mode:"", favcar:""});
   
      function changeHandler(event){
        const{value,checked,type,name}=event.target
        SetformData(prevformData =>{
          return{
            ...prevformData,
             [name]: type=== "checkbox"? (checked) : (value)
          }
        });
      }

      function  submitHandler(event){
        event.preventDefault();
         console.log("printing the entire data")
         console.log(formData)
      }
  return (
  
    <div className="App">
    <form onSubmit={submitHandler}>
     <label htmlFor="fname">Your Name:</label>
      <input type="text"
      id="fname"
      placeholder="Enter your first name"
      onChange={changeHandler}
      name="firstName"
      value={formData.firstName} />
      <br></br>
      <br></br>
      <br></br>

<label htmlFor="lname">Your Title:</label>
      <input type="text"
      id="lname"
      placeholder="Enter your last name"
      onChange={changeHandler}
      name="lastName"
      value={formData.lastName} />
     <br></br>
     <br></br>
     <br></br>


      <label htmlFor="emailid">Your email:</label>
       <input type="email" 
       id="emailid"
       placeholder="Enter your email id"
       onChange={changeHandler}
       name="emailid" 
        value={formData.emailid}
       /> 
        <br />
        <br />

        <label htmlFor="comments">Write Your Comments :</label>
        <br />
        <textarea name="comments"
         id="comments"
          cols="30" rows="10"
          onChange={changeHandler}
          placeholder='Enter your Comments'
          value={formData.comments}></textarea>

          <br />
          <br />

          <input type="checkbox"
          onChange={changeHandler} 
            id='isVisible'
            name='isVisible'
             checked={formData.isVisible} 
          />
          <label htmlFor="isVisible">Am I Visible</label>

          <br/>
          <br/>
          <fieldset>
            <legend>Modes:</legend>
            
          <input type="radio"
          name="mode"
          id='onlineMode' 
           value="onlineMode"
           onChange={changeHandler}
           checked={formData.mode==="onlineMode"}
          />
              <label htmlFor="onlineMode">Online Mode</label>
           
  
         <input type="radio"
         name="mode"
         id='offlineMode'
         value="offlineMode" 
         onChange={changeHandler}
          checked={formData.mode==="offlineMode"}
         />
         <label htmlFor="offlineMode">OfflineMode</label>
          </fieldset>

         <br /><br />
         <label htmlFor="favcar">Tell me Your Favourite Car</label>
         <br />

         <select name="favcar" id="favcar"
         value={formData.favcar} onChange={changeHandler}>
          <option value="scorpio">Scorpio</option>
          <option value="buggati">Buggati</option>
          <option value="thar">Thar</option>
          <option value="ferrari">Ferrari</option>
         </select>

          <br /><br />
         <button>Submit Now</button>

      </form>
    </div>
  );
}

export default App;
