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

async function AddText() {
  var res = await axios.post('/api/savetext', {
  
  })

}


function CheckButton() {
    let checkvalue  = (document.getElementById("fregistermail") as HTMLInputElement)
    let checkvalue2 = (document.getElementById("fregisterpassword") as HTMLInputElement)
    let checkvalue3 = (document.getElementById("fregisternick") as HTMLInputElement)
    let checkvalue4 = (document.getElementById("fregisteruser") as HTMLInputElement)
    let checkvalue5 = (document.getElementById("checkbox-area") as HTMLInputElement)
    let button  = (document.getElementById("buttonlogin") as HTMLButtonElement)
    // console.log(checkvalue.value )
    if(checkvalue.value == "" || checkvalue2.value == "" || checkvalue3.value == "" || checkvalue4.value == "" || checkvalue5.checked == false) {
        button.disabled = true
        // console.log("disabled")
    } else {
        button.disabled = false
        // console.log("enabled")
    }
}


export default function Home() {
  const handleClick = async (e) => {
    // console.log("oi")
    let email  = (document.getElementById("fregistermail") as HTMLInputElement).value
    let password = (document.getElementById("fregisterpassword") as HTMLInputElement).value
    let nickname = (document.getElementById("fregisternick") as HTMLInputElement).value
    let discord = (document.getElementById("fregisteruser") as HTMLInputElement).value
    let button  = (document.getElementById("buttonlogin") as HTMLButtonElement)
    e.preventDefault()
    var res = await axios.post('/api/register', {
        email: email,
        nickname: nickname,
        discord: discord,
        password: password
    })
    console.log(res.data)
    if(res.data.msg == 'Salvo') {
      button.classList.remove("bg-red-500")
      button.classList.add("bg-blue-500")
      Router.push("/login")
    } else {
      button.classList.remove("bg-blue-500")
      button.classList.add("bg-red-500")
    }
  }
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <title>Create Next App</title>
      </Head>

      
      <StyleContainer className="bg-gradient-to-r from-yellow-300 via-red-400 to-pink-400 flex justify-center items-center">
        <main className="shadow-lg flex items-center flex-col">
          <div className="title-section  flex-col mt-10">
            <h1 className="text-black font-bold text-3xl mb-3">Create account</h1>
            <h3 className="text-black text-base">Already have an account? <Link href="/login"><a className="text-blue-500 underline cursor-pointer">Sign in</a></Link></h3>
          </div>
          <div className="inputs-section flex flex-col items-center mt-8">
            <form className="flex flex-col items-center " onSubmit={handleClick}>
              <input type="email" id="fregistermail" onChange={CheckButton} className="input-default mb-3" name="fregistermail" placeholder="Email Address"/>
              <div className="flex flex-row justify-center divide-section">
                <input type="text" id="fregisternick" onChange={CheckButton} className="input-default mr-2 border-rule-right" name="fregisternick" placeholder="Username"/>
                <input type="text" id="fregisteruser" onChange={CheckButton} className="input-default border-rule-left" name="fregisteruser" placeholder="Discord User"/>
              </div> 
              <input type="password" id="fregisterpassword" onChange={CheckButton} className="input-default mt-3" name="fregisterpass" placeholder="Password"/>
              <button type="submit" disabled id="buttonlogin" className="bg-blue-500 w-full h-12 mt-5 rounded-xl">
                <div className="w-full h-full flex flex-row justify-center items-center">
                  <h2 className="mr-2">Sign Up</h2>
                  <FontAwesomeIcon className="arrow" icon={['fas', 'arrow-right']} />
                </div>
              </button>
              <div className="terms-checkbox mb-5 mt-7 flex flex-row justify-start items-center w-full">
                <input className="mr-2" type="checkbox" onChange={CheckButton} id="checkbox-area"></input>
                <h3 className="text-gray-500 text-sm">I have read and agree to the <span className="text-blue-500">Terms of Service</span></h3>
              </div>
            </form>
          </div>
        </main>
      </StyleContainer>
    </div>
  )
}
