(() => {
  const headerStyle = document.createElement("style");
  headerStyle.innerHTML += `    
      .containerHeader{
        font-family: 'Source Sans Pro', sans-serif;
        background-color: #1C89C2;
        width: 100%;
        height:10vh;
        display: flex;
        justify-content:space-between;
        align-items: center;
        position: fixed;
        z-index: 1;
        top: 0;
        margin: 0px; 
      }
      
      .logoHeader{
        font-size: 5rem;
        color: #fff;
      }

      nav li{
        width: 20vw;
        color: white;
        font-size: 1.5rem;
        font-weight: 300;
        text-align:center;
        border: none;
        list-style: none;
      }
      nav li:hover{
        cursor: pointer;
        font-weight: bolder;
      }

      @media(max-width: 700px) and (min-width: 360px){
        .containerHeader{
            height:15vh;
        }
        .logoHeader{
            height: 15vh;
          }
        nav{
          display: flex;
          width: 80vw;
          margin-left: -10vw;
        }
        nav li{
            display:flex;
            justify-content: space-around;
            width: 30vw;
        }
        nav a{
          font-size: 20px;
        }
      }
    `;
  document.body.appendChild(headerStyle);
})();
