import Head from 'next/head'
import {StyleContainer} from '../../styles/pages/login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'
// import { useEffect } from 'react';
import Router from 'next/router'

// import { userService } from 'services';


config.autoAddCss = false;
library.add(fas, fab);

function CheckButton() {
    let checkvalue  = (document.getElementById("fmail") as HTMLInputElement)
    let checkvalue2 = (document.getElementById("fpassword") as HTMLInputElement)
    let button  = (document.getElementById("buttonlogin") as HTMLButtonElement)
    // console.log(checkvalue.value )
    if(checkvalue.value == "" || checkvalue2.value == "") {
        button.disabled = true
        // console.log("disabled")
    } else if (checkvalue.value != "" || checkvalue2.value != "") {
        button.disabled = false
        // console.log("enabled")
    }
}
// useEffect(() => {
//     // redirect to home if already logged in
//     if (!userService.userValue) {
//         Router.push('/');
//     }

//     // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);

export default function Home() {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <title>Create Next App</title>
      </Head>

      
      <StyleContainer className="bg-gradient-to-r from-yellow-300 via-red-400 to-pink-400 flex justify-center items-center">
        <main className="shadow-lg flex items-center flex-col h-auto login-screen">
          <div className="title-section  justfify-center flex-col mt-10">
            <h1 className="text-black font-bold text-3xl mb-3 text-center">We have one <br/> more step to finish</h1>
            <h3 className="text-black text-base text-center">Don't worry, <Link href="/"><a className="font-semibold cursor-pointer">you can change this later</a></Link></h3>
          </div>
          <div className="inputs-section flex flex-col items-center mt-8">
        
              <button id="buttonlogin" className="mb-10 bg-blue-500 w-full h-12 rounded-xl">
                <div className="w-full h-full flex flex-row justify-center items-center">
                  <h2 className="mr-2">Link your <span className="font-semibold">Discord</span> Account</h2>
                  <FontAwesomeIcon className="arrow discordicon" icon={['fab', 'discord']} />
                </div>
              </button>
          </div>
        </main>
      </StyleContainer>
    </div>
  )
}
