import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import music from "../Assets/sound/welcome.mp3";
interface FormData {
  username: string;
  gender: string;
}

const UserForm = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();
  const initialValues: FormData = {
    username: "",
    gender: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required!"),
    gender: Yup.string().required("Gender is required!"),
  });

  const handleSubmit = (values: FormData) => {
    console.log("Form data submitted:", values);
    navigate("/game", { state: { username: values.username } });
  };

  const handlePlayMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        console.log("played");
        setIsMusicPlaying(true);
      } else {
        audioRef.current.pause();
        console.log("paused");
        setIsMusicPlaying(false);
      }
    }
  };

  return (
    <div className="my-welcome-container">
      <audio ref={audioRef} loop autoPlay>
        <source src={music} type="audio/mp3" />
      </audio>
      <button onClick={handlePlayMusic}>
        {isMusicPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <h1 className="header">Welcome to The Star Wars</h1>
          <div className="my-user-container">
            <div className="form-field">
              {/* Sử dụng Field thay cho input */}
              <Field
                className="name"
                type="text"
                id="name"
                name="username"
                placeholder="Enter your name"
                required
              />
              {/* Sử dụng ErrorMessage thay cho div */}
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className="form-field">
              <label>
                <Field className="my-user-select" as="select" name="gender">
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage name="gender" component="div" className="error" />
              </label>
            </div>
            <div className="form-field">
              <Button type="submit" variant="danger">
                Play
              </Button>{" "}
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
