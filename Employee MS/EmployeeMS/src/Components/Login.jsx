import React from "react";

const Login = () => {
    return(
        <div>
            <div>
                <h2>Login Page</h2>
                <form>
                    <div>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="email" name ="email" autoComplete="off" 
                        placeHolder="Enter email" className="form-control rounded-0"/>
                    </div>
                    <div>
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input type="password" name ="password" autoComplete="off" 
                        placeHolder="Enter password" className="form-control rounded-0"/>
                    </div>
                    <button className="btn btn-success w-100 rounded-0" ></button>
                </form>
            </div>
        </div>
    )
}