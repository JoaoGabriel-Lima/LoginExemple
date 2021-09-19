import styled from 'styled-components';

export const StyleContainer = styled.div`
    height: 100vh;

    *:focus {
        border: 0;
    }
    
    main {
        width: 50%;
        height: 470px;
        max-width: 600px;
        min-width: 400px;
        min-height: 410px;
        border-radius: 15px;

        background-color: white;
    }
    .login-screen {
        height: auto;
        min-height: auto;
    }
    form {
        width: 100%;
    }
    .input-default {
        width: 100%;
        background-color: rgba(196, 196,196, 0.15 );
        
        border-radius: 10px;
        padding-left: 12px;
        height: 45px;
        transition: .2s;
        
    }
    .input-default:focus {
        box-shadow: 0px 1px 20px rgba(0,0,0,.07);
        border: solid rgba(196, 196,196, 0.3 ) 1.8px;
        outline: 0;
        background-color: white;
    }
    .input-default::placeholder {
        font-weight: 300;
        font-style: italic;
        font-size: 15px;
    }
    .input-default {
        font-size: 15px;
        color: black;
        font-weight: 500;
    }
    .divide-section {
        width: 100%;
    }
    .border-rule-right {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    .border-rule-left {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }
    button div h2, button div {
        color: white;
    }
    .arrow {
        width: 14px;
    }
    .discordicon {
        width: 25px;
    }
    button {
        transition: .2s
    }
    button:focus, button:hover{
        border: solid 1px #3F71BB;
    }
    #checkbox-area {
        -webkit-appearance: none;
        -moz-appearance: none;
        border: solid rgba(196, 196,196, 0.6 ) 1px;
        outline: 0;
        width: 18px;
        min-width: 18px;
        min-height: 18px;
        height: 18px;
        border-radius: 4px;
        background-color: lightgray;
        cursor: pointer;
        content: "✓";
    }
    #checkbox-area:checked {
        background-color: #3b82f6;
        border: solid 1px #3F71BB;
    }
    #checkbox-area:checked {
        content: "✓";
        color: white;
        text-align: center;
        /* background: #3b82f6; */
        /* border-color: teal; */
    }
    .inputs-section {
        width: 85%;
    }
    button:disabled, button:disabled div h2, button:disabled div {
        background: 0;
        color: gray;
        
    }
    button:disabled {
        background-color: rgba(196, 196,196, 0.5 );
        /* border: solid 2px rgba(59, 130,246, 0.5 ); */
    }
    button:hover:disabled {
        border: 0;
    }
    #button_composition {
        justify-content: space-between
    }
    @media only screen and (max-width: 400px) {
        main {
            min-width: 97%;
            height: auto;
        }
        .terms-checkbox {
            margin-bottom: 35px;
        }
    }
`