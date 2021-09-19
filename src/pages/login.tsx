import Head from 'next/head'
import {StyleContainer} from '../styles/pages/login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'
import axios from 'axios';
import Router from 'next/router'

config.autoAddCss = false;
library.add(fas, fab);

function CheckButton() {

    let checkvalue  = (document.getElementById("fmail") as HTMLInputElement)
    let checkvalue2 = (document.getElementById("fpassword") as HTMLInputElement)
    let button  = (document.getElementById("buttonlogin") as HTMLButtonElement)

    // console.log(checkvalue.value )
    if(checkvalue.value == "" || checkvalue2.value == "") {
        button.disabled = true;
        button.classList.remove("cursor-auto")
        button.classList.add("cursor-not-allowed")
        // console.log("disabled")
    } else if (checkvalue.value != "" || checkvalue2.value != "") {
        button.disabled = false
        button.classList.remove("cursor-not-allowed")
        button.classList.add("cursor-auto")
        // console.log("enabled")
    }
}


export default function Home() {

  const handleClick = async (e) => {
    // console.log("oi")

    let email  = (document.getElementById("fmail") as HTMLInputElement).value
    let password = (document.getElementById("fpassword") as HTMLInputElement).value
    let button  = (document.getElementById("buttonlogin") as HTMLButtonElement)
    e.preventDefault()
    document.getElementById("space-button").classList.add("hidden")
    document.getElementById("spin-circle-icon").classList.remove("hidden")
    var res = await axios.post('/api/login', {
        email: email,
        password: password
    }).then(res => {
      
      console.log(res.data)
      if(res.data.logged == "true") {
        document.getElementById("space-button").classList.remove("hidden")
        document.getElementById("spin-circle-icon").classList.add("hidden")
        button.classList.remove("bg-red-500")
        button.classList.remove("bg-blue-500")
        // button.classList.remove("bg-blue-500")
        button.classList.add("bg-green-500")
  
        Router.push("/home/discord")
      } else if (res.data.ok == "true") {
        document.getElementById("space-button").classList.remove("hidden")
        document.getElementById("spin-circle-icon").classList.add("hidden")
        button.classList.add("bg-red-500")
        // button.classList.remove("bg-blue-500")
        button.classList.remove("bg-blue-500")
        button.classList.remove("bg-green-500")
      } else {
        document.getElementById("space-button").classList.remove("hidden")
        document.getElementById("spin-circle-icon").classList.add("hidden")
        button.classList.remove("bg-green-500")
        button.classList.remove("bg-blue-500")
        // button.classList.remove("bg-blue-500")
        button.classList.add("bg-red-500")
      }
    })

  }
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <title>Create Next App</title>
      </Head>

      
      <StyleContainer className="bg-gradient-to-r from-yellow-300 via-red-400 to-pink-400 flex justify-center items-center">
        <main className="shadow-lg flex items-center flex-col h-auto login-screen" >
          <div className="title-section  justfify-center flex-col mt-10">
            <h1 className="text-black font-bold text-3xl mb-3 text-center">Log in your account</h1>
            <h3 className="text-black text-base text-center">Don't have an account? <Link href="/"><a className="text-blue-500 underline cursor-pointer">Sign up</a></Link></h3>
          </div>
          <div className="inputs-section flex flex-col items-center mt-8">
            <form className="flex flex-col items-center" onSubmit={handleClick}>
              <input type="text" id="fmail" className="input-default mb-3" name="floginmail" onChange={CheckButton} placeholder="Email Address or Username"/>
              {/* <div className="flex flex-row justify-center divide-section">
                <input type="text" id="fname" className="input-default mr-2 border-rule-right" name="fname" placeholder="Nickname"/>
                <input type="text" id="fname" className="input-default border-rule-left" name="fname" placeholder="Discord User"/>
              </div>  */}
              <input type="password" id="fpassword" className="input-default" min="6" name="floginpassword" onChange={CheckButton} placeholder="Password"/>
              <button id="buttonlogin" className="mb-10 bg-blue-500 w-full h-12 mt-5 rounded-xl cursor-not-allowed" disabled>
                <div id="button_composition" className="w-full h-full flex flex-row justify-center items-center">
                  <div className="ml-4 h-4 w-4" id="space-button"></div>
                  <FontAwesomeIcon id="spin-circle-icon" className="spin-circle animate-spin h-4 w-4 ml-4 hidden" icon={['fas', 'circle-notch']} />
                  <div className="flex flex-row align-center">
                    <h2 className="mr-2">Try Login now</h2>
                    <FontAwesomeIcon className="arrow" icon={['fas', 'arrow-right']} />
                  </div>
                  <div className="mr-4 h-4 w-4"></div>
                </div>
              </button>
              {/* <div className="terms-checkbox mb-5 mt-7 flex flex-row justify-start items-center w-full">
                <input className="mr-2" type="checkbox" id="checkbox-area" name="interesse" value="codificação"></input>
                <h3 className="text-gray-500 text-sm">I have read and agree to the <span className="text-blue-500">Terms of Service</span></h3>
              </div> */}
            </form>
          </div>
        </main>
      </StyleContainer>
    </div>
  )
}
