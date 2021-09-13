import Head from 'next/head'
import Navbar from "../components/Navbar"
import { BsPersonFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import {useState,useEffect} from "react";
import request from "../utils/request";
import axios from "axios";

export default function Home() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [btnIsActive, setBtnIsActive] = useState(false);
    const [isSend, setIsSend] = useState(false);
    

    useEffect(() => {
        const fetchData = async () => {
          const response = await request.getPeople;
          setData(response.data[0]);
        }
        fetchData();
      },[]);

      const sendMail = () => {
          axios.post("http://localhost:1337/emails",{name,surname,title,message,email})
          .then(response =>  response.status === 200 && setIsSend(true))
          .catch(error => {
              console.error('There was an error!', error) 
            })
           setName("");
           setSurname("");
           setTitle("");
           setMessage("");
           setEmail("");
    
        }

        useEffect(() => {
            name ? setBtnIsActive(true) : setBtnIsActive(false)
            surname ? setBtnIsActive(true) : setBtnIsActive(false)
            title ? setBtnIsActive(true) : setBtnIsActive(false)
            email ? setBtnIsActive(true) : setBtnIsActive(false)
            message ? setBtnIsActive(true) : setBtnIsActive(false)
        },[name, surname, title, email, message])


  return (
    <div className="min-h-screen">
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar />
        <div className="container mx-auto flex lg:flex-row flex-col-reverse lg:my-44">
            <div className="flex flex-col gap-4 lg:w-1/2 ">
                <p>{data.contact_text}</p>
                <div className="flex">
                    <BsPersonFill className="text-green-500 text-3xl mr-5 mt-1"/>
                    <div>
                        <p className="font-bold text-black">Name</p>
                        <p className="text-gray-500">{data.fullname}</p>
                    </div>
                </div>

                <div className="flex">
                    <FaMapMarkerAlt className="text-green-500 text-3xl mr-5 mt-1"/>
                    <div>
                        <p className="font-bold text-black">Adress</p>
                        <p className="text-gray-500 ">{data.adress}</p>
                    </div>
                </div>

                <div className="flex">
                    <GrMail className="text-green-500 text-3xl mr-5 mt-1"/>
                    <div>
                        <p className="font-bold text-black">Email</p>
                        <p className="text-gray-500 ">{data.email}</p>
                    </div>
                </div>
            </div>
            
            <div className="lg:w-1/2 lg:ml-10 lg:my-0 my-10">
                <p className="font-bold text-lg mb-4">Send Your Message</p>
                <form className="flex flex-col gap-4" >
                    <div>
                        <input className="border-2 border-gray-300 rounded-md p-1 pl-3 mr-5 " type="text" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}} />
                        <input className="border-2 border-gray-300 rounded-md p-1 pl-3" type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                    </div>
                    <input className="border-2 border-gray-300 rounded-md p-1 pl-3 w-full" type="mail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className="border-2 border-gray-300 rounded-md p-1 pl-3 w-full" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <textarea name="" id="" cols="30" rows="10" className="border-2 border-gray-300 rounded-md pl-3 pt-2 w-full" placeholder="Write Your Message..." value={message}  onChange={(e) => setMessage(e.target.value)}></textarea>
                </form>
                <button className="bg-green-500 border-2 border-green-500 text-white p-2 font-semibold mt-4 rounded-md hover:bg-white hover:text-green-500 transition ease-in-out duration-300 disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed disabled:text-gray-400"  disabled={!btnIsActive} onClick={sendMail} >Mesaj Gönder</button>
                {isSend && alert("Your message has been sent")}
            </div>
        </div>
    </div>
  )
}
