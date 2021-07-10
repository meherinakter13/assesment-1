import React, { useState } from 'react';
import user from '../../images/user.png';

const Registration = () => {
    const [error, setError] = useState("");
    const [info, setInfo] = useState({
        address: "",
        agreed: false,
        district: "",
        email: "",
        firstName: "",
        gender: "",
        lastName: "",
        phone: "",
        userName: ""

    })
    const validEmail = (email) => {
        const isPhoneEmailValid = /\S+@\S+\.\S+/.test(email);
        return isPhoneEmailValid;
    }

    const validNum = (num) => {
        const isPhoneNumValid = /^(?:\+88|88)?(01[3-9]\d{8})$/.test(num);
        return isPhoneNumValid;
    }

    const handleBlur = (event) => {
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!info.address) {
            setError("Enter Your address")
            return;
        }
        if (!info.district) {
            setError("Enter Your district")
            return;
        }
        if (!validEmail(info.email)) {
            setError("Enter email address")
            return;
        }
        if (!info.firstName) {
            setError("Enter Your firstName")
            return;
        }
        if (!info.gender) {
            setError("Enter Your gender")
            return;
        }
        if (!info.lastName) {
            setError("Enter Your lastName")
            return;
        }
        if (!validNum(info.phone)) {
            setError("Enter valid phone number")
            return;
        }
        if (!info.userName) {
            setError("Enter Your userName")
            return;
        }
        console.log(info)
    }


    return (
        <section className="container-fluid row m-0 " >
            <div className="col-md-12 col-sm-12 ">
                <img style={{ height: "50px", width: "50px", display: "block", marginLeft: "auto", marginRight: "auto" }} src={user} alt="" />
                <h2 className="text-brand fw-bolder text-center">Register user</h2>
                <form class="row m-0 p-5" onSubmit={handleSubmit}>
                    <div className="col-md-6 p-2">
                        <input type="text" name="firstName" onChange={handleBlur} class="form-control" placeholder="First Name" required />
                    </div>
                    <div className="col-md-6 p-2 ">
                        <input type="text" onChange={handleBlur} name="lastName" class="form-control" placeholder="Last Name" required />
                    </div>
                    <div className="col-md-6 p-2">
                        <input type="email" onChange={handleBlur} name="email" class="form-control" placeholder="Email Address" required />
                    </div>
                    <div className="col-md-6 p-2">
                        <input type="text" onChange={handleBlur} name="phone" class="form-control" placeholder="Phone" required />
                    </div>
                    <div className="col-md-6 p-2">
                        <input type="text" onChange={handleBlur} name="userName" class="form-control" placeholder="Username" required />
                    </div>
                    <div className="col-md-6 p-2">
                        <textarea class="form-control" onChange={handleBlur} name="address" placeholder="Address" rows="2" required></textarea>
                    </div>
                    <div className="col-md-6 p-2">
                        <select onChange={handleBlur} name="district" id="inputState" placeholder="District" required class="form-control">
                            <option>District</option>
                            <option>Dhaka</option>
                            <option>Munshigonj</option>
                            <option>Manikgonj</option>
                            <option>Sirajgonj</option>
                            <option>Tangail</option>
                            <option>Barishal</option>
                        </select>
                    </div>
                    <div className="col-md-6 p-2">
                        <label class="form-label">Gender</label>
                        <br />
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" onChange={handleBlur} type="radio" name="gender" id="inlineRadio1" value="female" />
                            <label class="form-check-label" for="inlineRadio1">Female</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" onChange={handleBlur} type="radio" name="gender" id="inlineRadio2" value="male" />
                            <label class="form-check-label" for="inlineRadio2">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" onChange={handleBlur} type="radio" name="gender" id="inlineRadio3" value="other" />
                            <label class="form-check-label" for="inlineRadio3">Other</label>
                        </div>
                    </div>
                    <div class="form-check col-md-12">
                        <input type="checkbox" onChange={handleBlur} name="agreed" value="true" class="form-check-input" />
                        <label class="form-check-label" for="exampleCheck1">I want to receive inspiration, marketing promotions and update via email.</label>
                    </div>
                    <div className="col-md-12">
                        <input type="submit" disabled={!validEmail(info.email) || !validNum(info.phone) || !info.firstName || !info.lastName || !info.address || !info.district || !info.gender || !info.userName} className="mt-3 btn btn-secondary w-100" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Registration;