import React from 'react'
import style from "./Navbar.module.css"
import { Button ,Popover,PopoverBody,PopoverTrigger,PopoverContent,PopoverArrow,PopoverHeader} from '@chakra-ui/react'
const Navbar = () => {
 
  return (
    <div className={style.cont}>
        <div  className={style.cont1}>
            <div>
                <img className={style.contimg} height="95px" width= "90px"src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" alt="logo" />
            </div>
            <div >
                <ul className={style.mid} type="none">
                <Popover isLazy trigger="hover">
                <PopoverTrigger>
                <li>Features <span><i class="fa-solid fa-angle-down"></i></span> </li>
                </PopoverTrigger>
                <PopoverContent>
                <PopoverArrow />
                <PopoverHeader style={{color:"#aa6c39",border:"none"}}>❤Learn how Nifty inspires productivity!</PopoverHeader>
                <PopoverBody className={style.div}>
                  <div className={style.div1}>
                    <div>Discussion</div>
                    <div>Task</div>
                    <div>Time Tracking</div>
                    <div>Project Home</div>
                  </div>
                  <div>
                  <div>MileStone(Gantt Chart)</div>
                    <div>Docs & Files</div>
                    <div>Reporting</div>
                    <div>Project Portfolio</div>
                  </div>
                </PopoverBody>
                </PopoverContent>
                </Popover> 
                <li>Use Cases <span><i class="fa-solid fa-angle-down"></i></span> </li>
                <li>Resources <span><i class="fa-solid fa-angle-down"></i></span> </li>
                <li>Got Clients</li>
                <li>Pricing</li>
                <li style={{color:"#00baab"}}>Get a Demo </li>
                </ul>
            </div>
            <div style={{display:"flex",marginLeft:"10px"}}>
              <Button  style={{backgroundColor:"White",color:"black",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>Login</Button>
              <Button style={{backgroundColor:"#00baab",color:"white",marginLeft:"15px"}}>Sign Up</Button>
            </div>

        </div>
        
    </div>
  )
}

export default Navbar