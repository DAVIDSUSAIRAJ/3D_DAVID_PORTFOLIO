import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Fox from "../models/Fox";
import Tiger from "../models/Tiger";
import Loader from "../components/Loader";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Howl");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("Walk Fast");
  const handleBlur = () => setCurrentAnimation("Howl");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setCurrentAnimation("Run");

    emailjs
      .send(
       import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
       import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          client_name: form.name,
          owner_name: "David susairaj",
          client_email: form.email,
          owner_email: "davidsusairaj1996@gmail.com",
          client_message: form.message,
          reply_to_client: form.email,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("✅ Thank you for your message 😃", {
            position: "top-right",
            autoClose: 3000,
          });
          setTimeout(() => {
            setCurrentAnimation("Howl");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");
          toast.error("❌ I didn't receive your message 😢", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Your Name'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='youremail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder="Feel free to share your thoughts here—no need to hesitate! I'm happy to hear what you have to say. 😊"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
           <ToastContainer />
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense 
          fallback={<Loader />}
          >
            {/* <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            /> */}
            <Tiger 
             currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;