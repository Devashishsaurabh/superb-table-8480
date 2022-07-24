import React from 'react'
import style from "./Footer.module.css"
const Footer = () => {
  return (
    <div><div className={style.footer}>
    <div className={style.shell}>
      <div className={style.footer__body}>
        <div className={style.footer__content}>
          <div className={style.footer__cols}>
            <div className={style.footer__col}>
              <h6 className={style.footer__title}>Product</h6>
               <nav className={style.footer__nav}>
                <ul type="none">
                  <li>
                    <a href="##" class="">Discussions</a>
                    </li>
                     <li>
                      <a href="##" class="">Milestones</a></li> 
                      <li><a href="##" class="">Tasks</a></li> 
                      <li><a href="##" class="">Docs &amp; Files</a></li> 
                      <li><a href="##" class="">Time Tracking</a></li>
                       <li><a href="##" class="">Reporting</a></li> 
                       <li><a href="##" class="">Project Home</a></li> 
                       <li><a href="##" class="">Project Portfolios</a></li>
                       </ul>
                       </nav>
                       </div> 
                       <div className={style.footer__col}>
                        <h6 className={style.footer__title}>Resources</h6> 
                        <nav className={style.footer__nav}><ul type="none">
                          <li><a href="https://niftypm.com/blog/">Blog</a></li>
                           <li><a href="https://changelog.niftypm.com">Change Log</a></li> 
                           <li><a href="##" >Integrations</a></li> 
                           <li><a href="##" >Apps</a></li>  
                           <li><a href="##" >Pricing</a></li>
                            <li><a href="##">Affiliates</a></li></ul>
                            </nav></div> 
                            <div className={style.footer__col}>
                              <h6 className={style.footer__title}>Trust</h6>
                               <nav className={style.footer__nav}><ul type="none">
                                <li><a href="https://help.niftypm.com" target="blank" rel="noopener">Help Center</a></li>
                                 <li><a href="##" class="">Privacy</a></li> 
                                 <li><a href="##" class="">Security</a></li> 
                                 <li><a href="https://status.niftypm.com" target="blank" rel="noopener">Status</a></li>
                                 </ul>
                                 </nav>
                                 </div>
                                  <div className={style.footer__col}>
                                    <h6 className={style.footer__title}>Made For</h6> 
                                    <nav className={style.footer__nav}><ul type="none">
                                      <li><a href="##" class="">Agile Development</a></li>
                                      <li><a href="/got-clients" class="">Client Management</a></li> 
                                      <li><a href="##" class="">Digital Agencies</a></li> 
                                      <li><a href="##" class="">Legal Case Management</a></li>
                                       <li><a href="##" class="">Marketing Teams</a></li> 
                                       <li><a href="##" class="">Product Teams</a></li></ul>
                                       </nav></div> 
                                       <div className={style.footer__col}>
                                        <h6 className={style.footer__title}>Comparisions</h6> 
                                        <nav className={style.footer__nav}><ul type="none"><li>
                                          <a href="##" class="">Airtable Alternative</a></li> 
                                          <li><a href="##" class="">Asana Alternative</a></li> 
                                          <li><a href="##" class="">Basecamp Alternative</a></li> 
                                          <li><a href="##" class="">Clarizen Alternative</a></li> 
                                          <li><a href="##" class="">ClickUp Alternative</a></li> 
                                          <li><a href="##" class="">Confluence Alternative</a></li> 
                                          <li><a href="##" class="">Flow Alternative</a></li> 
                                          <li><a href="##" class="">Hive Alternative</a></li>
                                           <li><a href="##" class="">JIRA Alternative</a></li>
                                            <li><a href="##" class="">Monday.com Alternative</a></li>
                                            </ul></nav></div> 
                                            <div className={style.footer__col}>
                                              <h6 className={style.footer__title}>Blog</h6>
                                               <nav className={style.footer__nav}><ul type="none"><li>
                                                <a href="https://niftypm.com/blog/why-project-management-is-broken-and-how-to-fix-it/" target="blank" rel="noopener">Why project management is broken (&amp; how to fix it!)</a></li> <li><a href="https://niftypm.com/blog/why-remote-collaboration-is-more-than-just-communication/" target="blank" rel="noopener">Why Remote Collaboration is more than just Communication</a></li> 
                                                <li><a href="https://niftypm.com/blog/stay-on-top-of-your-workload-and-mental-health-with-a-time-tracker/" target="blank" rel="noopener">Staying on top of your workloads with time tracking</a></li> <li><a href="https://niftypm.com/blog/best-legal-case-management-software-for-law-firms-2ea3f47795ab/" target="blank" rel="noopener">Best Legal Case Management Software for Law Firms</a></li></ul></nav>
                                                </div></div></div></div> 
                                                <div className={style.footer__bar}>
                                                  <div className={style.copyright}><p>
                                                    <img src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" loading="lazy" alt="Nifty Logo"/>
                                                     <span className={style.copyright_text}>2022 © Nifty Technologies, Inc. All rights reserved.</span></p>
                                                     </div>
                                                      <div className={style.footer__bar__side}>
                                                        <div className={style.socials}><ul type="none">
                                                    <li><a href="https://www.linkedin.com/company/nifty-project-management/mycompany/" target="blank" rel="noopener">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 93.06 93.06">
                                                        <path fill="#acbad0" d="M11.185.08C5.004.08.001 5.092 0 11.259c0 6.173 5.003 11.184 11.186 11.184 6.166 0 11.176-5.011 11.176-11.184C22.362 5.091 17.351.08 11.185.08zM1.538 30.926h19.287V92.98H1.538zm68.387-1.543c-9.382 0-15.673 5.144-18.248 10.022h-.258v-8.479H32.92v62.053h19.27V62.281c0-8.093 1.541-15.932 11.575-15.932 9.89 0 10.022 9.256 10.022 16.451v30.178H93.06V58.942c0-16.707-3.605-29.559-23.135-29.559z" class="colored-path"></path></svg>
                                                        </a></li> <li><a href="https://www.facebook.com/nifty.pm/" target="blank" rel="noopener">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 40 40">
                                                                <path fill="#acbad0" d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z" class="colored-path"></path> 
                                                                <path fill="#fff" d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"></path></svg></a></li>
                                                                 <li><a href="https://twitter.com/niftypm" target="blank" rel="noopener"><svg width="20px" height="20px" viewBox="0 0 256 209" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45" fill="#acbad0" class="colored-path">
                                                      </path>
                                                      </svg>
                                                      </a>
                                                      </li>
                                                      </ul></div> </div></div>
                                                      </div>
                                                      </div></div>
  )
}

export default Footer