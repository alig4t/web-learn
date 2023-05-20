import React, { useState } from 'react';
import axios from 'axios';

import { toast } from 'react-toastify';


const Register = () => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const clearForm = () => {
        setFullname("");
        setEmail("")
        setPassword("")
    }

    const registerFormHandler = (event) => {
        event.preventDefault();
        let user = {
            fullname,
            email,
            password
        }
        // console.log(JSON.stringify(user));
        axios.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(user), {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(({ status, data }) => {
                console.log(data)
                if (status === 201) {
                    toast.success("ثبت نام با موفقیت انجام شد")
                    clearForm();
                }
            })
            .catch(err => {
                console.log(err)
                toast.error("خطایی هنگام ثبت نام بوجود آمده است")
            })
    }

    return (
        <>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">تاپ لرن</a></li>
                        <li className="breadcrumb-item active" aria-current="page">عضویت در سایت</li>
                    </ul>
                </nav>
            </div>

            <main className="client-page">
                <div className="container-content">

                    <header><h2> عضویت در سایت </h2></header>

                    <div className="form-layer">

                        <form onSubmit={registerFormHandler}>

                            <div className="input-group">
                                <span className="input-group-addon" id="username"><i className="zmdi zmdi-account"></i></span>
                                <input type="text"
                                    className="form-control"
                                    placeholder="نام و نام خانوادگی" aria-describedby="username"
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                />
                            </div>

                            <div className="input-group">
                                <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                                <input type="text"
                                    className="form-control"
                                    placeholder="ایمیل"
                                    aria-describedby="email-address"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="input-group">
                                <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                                <input type="password"
                                    className="form-control"
                                    placeholder="رمز عبور "
                                    aria-describedby="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="accept-rules">
                                <label><input type="checkbox" name="" />  قوانین و مقررات سایت را میپذیرم </label>
                            </div>

                            <div className="link">
                                <a href=""> <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                                <a href=""> <i className="zmdi zmdi-account"></i> ورود به سایت </a>
                            </div>

                            <button className="btn btn-success"> عضویت در سایت </button>

                        </form>
                    </div>

                </div>
            </main>

        </>
    );
}

export default Register;