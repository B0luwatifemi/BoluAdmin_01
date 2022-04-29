import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./user.css"

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
           <h1 className="userTitle">Edit User</h1>
           <Link to="/newUser">
            <button 
            className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img className="userShowImage" 
                    src="./Image/PictureCap.jpeg" 
                    alt="" />
               <div className="userShowTopTile">
                   <span className="userShowTopUsername">Olufemi Oluyomi</span>
                   <span className="userShowTopUserTitle">Software Engineer</span>
               </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowBottomTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">Bolutifemi</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">15-01-1900</span>
                    </div>
                    <span className="userShowBottomTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+2347 123 456 789</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">Bolutifemi@mail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">Yaba, Lagos | Nigeria</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                            <label> Full Name </label>
                            <input 
                            type="text" 
                            placeholder="Surname, Firstname"
                            className="userUpdateInput1" />
                        </div>
                        <div className="userUpdateItem">
                            <label> Username </label>
                            <input 
                            type="text" 
                            placeholder="Your Username"
                            className="userUpdateInput1" />
                        </div>
                        <div className="userUpdateItem">
                            <label> Date Of Birth </label>
                            <input 
                            type="text" 
                            placeholder="Your DOB"
                            className="userUpdateInput1" />
                        </div>
                        <div className="userUpdateItem">
                            <label> Phone Number </label>
                            <input 
                            type="number" 
                            placeholder="Your Call Digit"
                            className="userUpdateInput1" />
                        </div>
                        <div className="userUpdateItem">
                            <label> email </label>
                            <input 
                            type="email" 
                            placeholder="Your Email"
                            className="userUpdateInput1" />
                        </div>

                        <div className="userUpdateItem">
                            <label> Address </label>
                            <input 
                            type="text" 
                            placeholder="Your Addres"
                            className="userUpdateInput1" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img 
                            className="userUpdateImage" 
                            src="./Image/PictureNigga.jpeg" 
                            alt="" />
                            <label htmlFor="file">
                                <Publish 
                                className="userUpdateIcon"/>
                                </label>
                            <input type="file"  id="file" style={{display: "none"}}/>
                            
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}
