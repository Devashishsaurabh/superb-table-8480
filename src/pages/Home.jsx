import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import style from './Home.module.css'
const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <div className={style.main}>
        <section className={style.intro}>
          <div className={style.intro__image} style={{ zIndex: "0" }}>
            <div
              className={style.image__inner}
              style={{ aspectRatio: "1.72667 / 1;", zIndex: "0" }}
            >
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcset="https://niftypm.com/_nuxt/img/small@2x.73c6950.webp 2x, https://niftypm.com/_nuxt/img/small@1x.7b6c01a.webp"
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="https://niftypm.com/_nuxt/img/large@2x.00707a1.webp 2x, https://niftypm.com/_nuxt/img/large@1x.8a3e5ad.webp"
                  type="image/webp"
                />
                <source
                  media="(max-width: 767px)"
                  srcset="https://niftypm.com/_nuxt/img/small@2x.03e7937.png 2x, https://niftypm.com/_nuxt/img/small@1x.e5ba10e.png"
                  type="image/png"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="https://niftypm.com/_nuxt/img/large@2x.cfe0d60.png 2x, https://niftypm.com/_nuxt/img/large@1x.38699dc.png"
                  type="image/png"
                />
                <img
                  src="https://niftypm.com/_nuxt/img/large@2x.00707a1.webp"
                  loading="lazy"
                  alt="Homescreen"
                  width="1036"
                  height="600"
                />
              </picture>
            </div>
            <div className={style.btn_play_holder}>
              <button onClick={onOpen} className={style.btn_play}>
                <i class="fa-solid fa-play"></i>
              </button>
              <span className={style.text}>Introducing</span>
            </div>
          </div>

          <div>
            <div className={style.top_img}>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="https://niftypm.com/_nuxt/img/large@2x.50aa656.webp 2x, https://niftypm.com/_nuxt/img/large@1x.3c022b0.webp"
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="https://niftypm.com/_nuxt/img/large@2x.ae4d9d3.png 2x, https://niftypm.com/_nuxt/img/large@1x.5b2a12f.png"
                  type="image/png"
                />
                <img
                  src="https://niftypm.com/_nuxt/img/large@1x.5b2a12f.png"
                  loading="lazy"
                  alt="Sphere 1"
                  width="206"
                  height="243"
                />
              </picture>
            </div>
            <div className={style.bottom__image}>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="https://niftypm.com/_nuxt/img/large@2x.cc5719b.webp 2x, https://niftypm.com/_nuxt/img/large@1x.9405506.webp"
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="https://niftypm.com/_nuxt/img/large@2x.7d3666c.png 2x, https://niftypm.com/_nuxt/img/large@1x.43bcba3.png"
                  type="image/png"
                />
                <img
                  src="https://niftypm.com/_nuxt/img/large@1x.43bcba3.png"
                  loading="lazy"
                  alt="Sphere 2"
                  width="260"
                  height="314"
                />
              </picture>
            </div>
            <div className={style.intro_main}>
              <div className={style.into_content}>
                <h1 className={style.intro_title}>
                  The ultimate project <br></br> management
                  <span
                    className={style.text_image}
                    style={{ aspectRatio: "auto" }}
                  >
                    <picture>
                      <source
                        media="(max-width: 767px)"
                        srcset="https://niftypm.com/_nuxt/img/small@2x.9fdb533.webp 2x, https://niftypm.com/_nuxt/img/small@1x.f2de59d.webp"
                        type="image/webp"
                      />
                      <source
                        media="(min-width: 768px)"
                        srcset="https://niftypm.com/_nuxt/img/large@2x.f9497bf.webp 2x, https://niftypm.com/_nuxt/img/large@1x.639e4a2.webp"
                        type="image/webp"
                      />
                      <source
                        media="(max-width: 767px)"
                        srcset="https://niftypm.com/_nuxt/img/small@2x.2103a91.png 2x, https://niftypm.com/_nuxt/img/small@1x.8c5b987.png"
                        type="image/png"
                      />
                      <source
                        media="(min-width: 768px)"
                        srcset="https://niftypm.com/_nuxt/img/large@2x.a619370.png 2x, https://niftypm.com/_nuxt/img/large@1x.78d6e11.png"
                        type="image/png"
                      />
                      <img
                        src="https://niftypm.com/_nuxt/img/large@1x.78d6e11.png"
                        loading="lazy"
                        alt="OS"
                      />
                    </picture>
                  </span>
                </h1>
                <div className={style.intro_entry}>
                  <p>
                    Stop switching between Roadmaps, Tasks, Docs, Chats, & other
                    tools.
                    <br></br>
                    Nifty is one app to unite teams, goals, and actions in one
                    place.
                  </p>
                </div>
                <div className={style.form_subscribe}>
                  <form action="?" method="post">
                    <div className={style.form__inner}>
                      <div className={style.form__main}>
                        <div className={style.form__body}>
                          <div className={style.field}>
                            <div class="field__controls">
                              <input
                                type="email"
                                name="signup-email"
                                placeholder="name@company.com"
                                required="required"
                                className={style.field__input}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={style.form__actions}>
                          <button className={style.btn__primary}>
                            Get Started
                          </button>
                        </div>
                      </div>
                      <div className={style.form__additions}>
                        <span className={style.separator}></span>
                        <div className={style.socials}>
                          <ul type="none">
                            <li>
                              <a
                                href="https://api.niftypm.com/auth/google"
                                className={style.btn__light}
                              >
                                <i className={style.ico_googleplus}></i>{" "}
                                <span class="text">Sign up with Google</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className={style.note}>
                        <p>Free forever. No credit card required.</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <Modal onClose={onClose} isOpen={isOpen} size="xl" isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton style={{ marginLeft: "10px" }} />
                <ModalBody>
                  <iframe
                    width="100%"
                    height="380px"
                    src="https://www.youtube.com/embed/5GaV5EZX22o"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
        </section>
      </div>
      <section className={style.section}>
        <div>
          <div className={style.shell}>
            <div className={style.clients}>
              <h6>JOIN OVER 20,000 HIGHLY PRODUCTIVE TEAMS</h6>
              <div className={style.clients__list}>
                <div className={style.client}>
                  <img
                    src="https://niftypm.com/_nuxt/img/logo-verizon.b7c8a9c.svg"
                    alt="Verizon Logo"
                    width="118"
                    height="27"
                    loading="lazy"
                    style={{ marginTop: "-10px" }}
                  />
                </div>{" "}
                <div className={style.client}>
                  <img
                    src="https://niftypm.com/_nuxt/img/logo-pd.e35bded.svg"
                    alt="Periscope Data Logo"
                    width="133"
                    height="41"
                    loading="lazy"
                  />
                </div>
                <div className={style.client}>
                  <img
                    src="https://niftypm.com/_nuxt/img/logo-emovis.895c86e.svg"
                    alt="Emovis Logo"
                    width="117"
                    height="38"
                    loading="lazy"
                    style={{ marginTop: "-20px" }}
                  />
                </div>{" "}
                <div className={style.client}>
                  <img
                    src="https://niftypm.com/_nuxt/img/logo-vmware.b3363fd.svg"
                    alt="VMware Logo"
                    width="120"
                    height="25"
                    loading="lazy"
                  />
                </div>
                <div className={style.client}>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI0MDAiPgogIDxjbGlwUGF0aCBpZD0iYiI+CiAgICA8cGF0aCBkPSJNMC0xdjgzaDU1LjkzN3YyMzZIMS41MjN2ODJoMTk0LjY1di04MmgtNTUuOTM4VjgyaDU0LjQxNFYtMXptNTU0LjAyIDF2ODJoNTUuOTM4djIzNmgtNTQuNDE0djgyaDEzOC43MVYxNzEuODRsODIuNjU2IDIyOC4wOCAxLjY4LjA0IDgxLjE3Mi0yMjguMTJWNDAwaDE0MC4yM3YtODJoLTU1LjkzOFY4Mmg1NC40MTVWMGgtMTU2LjMzbC02NC43MjYgMTgyLjg5TDcxMS44NjYgMHoiLz4KICAgIDxwYXRoIGlkPSJhIiBkPSJNMjIyLjIzIDB2ODJoNTUuOTM3djEzMGgyMTUuMzF2LTI0LjkyOHMxOC4wMTEtMTQuMDQyIDIzLjc1LTI3LjM2N2wxMS41MjMtMjUuODU1czUuMzUyLTE0LjQ3MiA1LjM1Mi0yNy40MDVsLTIuMzA1LTI1Ljg1NXMtMy42MTYtMjEuMDYzLTkuOTIyLTI3LjMyOGwtMjIuMjY2LTI1Ljg5NVM0NzEuMjc2IDAgNDMzLjc1IDB6bTE0MC4yMyA4Mmg4MS45OTJ2NzZIMzYyLjQ2eiIvPgogICAgPHVzZSB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDQwMCkiIHhsaW5rOmhyZWY9IiNhIi8+CiAgPC9jbGlwUGF0aD4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNhY2JhZDAiIHN0cm9rZS13aWR0aD0iMjcuMzciIGQ9Ik0wIDEzLjY4M2gxMDMwdjUzLjIzMkgwbTAgNTMuMjMyaDk3NXY1My4yNDJIMHY1My4yMjJoOTc1djUzLjIyMkgwbTAgNTMuMjQyaDEwMzB2NTMuMjQySDAiIGNsaXAtcGF0aD0idXJsKCNiKSIvPgo8L3N2Zz4K"
                    alt="IBM Logo"
                    width="101"
                    height="25"
                    loading="lazy"
                  />
                </div>
                <div className={style.client}>
                  <img
                    src="https://niftypm.com/_nuxt/img/logo-loreal.8cc4fed.svg"
                    alt="Loreal Logo"
                    width="120"
                    height="25"
                    loading="lazy"
                  />
                </div>
                <div className={style.client}>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4OC4yIDMwLjEiPgogIDxwYXRoIGZpbGw9IiNhY2JhZDAiIGQ9Ik0zNy45IDYuN2gzLjVsOCAxMC41VjYuN2gzLjd2MTdoLTMuMmwtOC4zLTEwLjh2MTAuOGgtMy43di0xN3pNNjEuNSAxN0w1NC45IDYuN2g0LjRsNC4xIDYuOCA0LjEtNi44aDQuM2wtNi41IDEwLjJ2Ni44aC0zLjdWMTd6bTExLjktLjZWNi43aDMuN3Y5LjZjMCAyLjggMS40IDQuMiAzLjcgNC4yIDIuMyAwIDMuNy0xLjQgMy43LTQuMVY2LjdoMy43djkuNmMwIDUuMi0yLjkgNy43LTcuNSA3LjdzLTcuMy0yLjYtNy4zLTcuNm0tNjAtLjdjLTMuMS0xLjgtMi44LTQuNS0xLjUtNi40di0uMmMtLjEtLjUtLjYtMS42LS44LTEuOS0uMS0uMS0uMS0uMS0uMSAwIDAgLjUtLjYgMS44LTEuNSAzLjMtMSAxLjctMSA1LjIgMy45IDUuMiAwIC4xIDAgMCAwIDBtLjgtLjFjLTEuOC0zLjkgMS44LTYuNSAyLjQtNyAuMS0uMS4xLS4xLjEtLjIgMC0xLjItLjctMy4yLS45LTMuNWgtLjFjLS4zIDEuMi0yIDMtMi4zIDMuNC0yLjkgMy4zLTIuMiA1LjQuOCA3LjMgMCAuMSAwIDAgMCAwbS42LS4yYy45LTQuMiA0LjMtNC4zIDQuNi01LjEuNS0xLjItLjQtMy40LS42LTMuN2gtLjFjLS41IDEtMS4yIDItMS44IDIuNC0uNy43LTMuNyAyLjktMi4xIDYuNC0uMS4xIDAgLjEgMCAwbS42LjRjNS41LjIgNS45LTQuOCA1LjktNi43IDAtLjEtLjEtLjEtLjEgMC0uMi40LS45IDEuOC0yLjkgMi42LTEuNy44LTIuOCAyLjUtMi45IDQuMS0uMSAwIDAgMCAwIDBtMS4yLjZoLTQuM3YxLjNoNC4zdi0xLjN6bS0yLjUgMTAuMmMwIC4yLjUuMy42IDBsMS04LjNoLTIuNWwuOSA4LjN6bTE2IDMuNUguMVYuMWgzMHYzMHoiLz4KPC9zdmc+Cg=="
                    alt="NYU Logo"
                    width="101"
                    height="25"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={style.section_divider}>
        Say goodbye to status meetings
      </div>
      <div className={style.intre}>
        <Tabs isLazy style={{ margin: "auto" }}>
          <TabList style={{ width: "70%", margin: "auto", border: 0 }}>
            <Tab
              style={{
                marginRight: "15px",
                fontWeight: "700",
                fontSize: "18px",
                margin: "auto",
              }}
            >
              Roadmaps
            </Tab>
            <Tab
              style={{
                marginRight: "15px",
                fontWeight: "700",
                fontSize: "18px",
                margin: "auto",
              }}
            >
              . . . . Tasks
            </Tab>
            <Tab
              style={{
                marginRight: "15px",
                fontWeight: "700",
                fontSize: "18px",
                margin: "auto",
              }}
            >
              . . . . Discussion
            </Tab>
            <Tab
              style={{
                marginRight: "15px",
                fontWeight: "700",
                fontSize: "18px",
                margin: "auto",
              }}
            >
              . . . . Docs
            </Tab>
            <Tab
              style={{
                marginRight: "15px",
                fontWeight: "700",
                fontSize: "18px",
                margin: "auto",
              }}
            >
              . . . . Reporting
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Heading style={{ textAlign: "center", marginTop: "50px" }}>
                Set Goals & Timelines
              </Heading>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: "3px",
                  fontSize: "18px",
                }}
              >
                Set a visual timeline for your big-picture goals and build team
                alignment by
                <br />
                automating progress as tasks are completed.
                <span style={{ color: "#00baab" }}> Learn more </span>
              </Text>
              <img
                style={{ marginTop: "25px", borderRadius: "10px" }}
                src="https://niftypm.com/_nuxt/img/large@2x.51eeb43.webp"
                alt=""
              />
            </TabPanel>
            <TabPanel>
              <Heading style={{ textAlign: "center", marginTop: "50px" }}>
                Collaborate on Tasks
              </Heading>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: "3px",
                  fontSize: "18px",
                }}
              >
                Flexibly organize, prioritize, and track daily work with a high
                level of detail using
                <br />
                Kanban, List, Timeline, Calendar, and Swimlane views.{" "}
                <span style={{ color: "#00baab" }}> Learn more </span>
              </Text>
              <img
                style={{ marginTop: "25px", borderRadius: "10px" }}
                src="https://niftypm.com/_nuxt/img/large@2x.82364f8.webp"
                alt=""
              />
            </TabPanel>
            <TabPanel>
              <Heading style={{ textAlign: "center", marginTop: "50px" }}>
                Establish Knowledge Hub
              </Heading>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: "3px",
                  fontSize: "18px",
                }}
              >
                Empower all members to share ideas, finalize specifications, &
                gather feedback in
                <br />
                real-time with chat and one-click video calls.{" "}
                <span style={{ color: "#00baab" }}> Learn more </span>
              </Text>
              <img
                style={{ marginTop: "25px", borderRadius: "10px" }}
                src="https://niftypm.com/_nuxt/img/large@2x.c91cddb.webp"
                alt=""
              />
            </TabPanel>
            <TabPanel>
              <Heading style={{ textAlign: "center", marginTop: "50px" }}>
                Create Docs & Wikis
              </Heading>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: "3px",
                  fontSize: "18px",
                }}
              >
                Empower all members to share ideas, finalize specifications, &
                gather feedback in
                <br />
                real-time with chat and one-click video calls.{" "}
                <span style={{ color: "#00baab" }}> Learn more </span>
              </Text>
              <img
                style={{ marginTop: "25px", borderRadius: "10px" }}
                src="https://niftypm.com/_nuxt/img/large@2x.c91cddb.webp"
                alt=""
              />
            </TabPanel>
            <TabPanel>
              <Heading style={{ textAlign: "center", marginTop: "50px" }}>
                Automate Reporting
              </Heading>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: "3px",
                  fontSize: "18px",
                }}
              >
                Access automated progress reporting across all your projects and
                team activities
                <br />
                to ensure operational clarity.{" "}
                <span style={{ color: "#00baab" }}> Learn more </span>
              </Text>
              <img
                style={{ marginTop: "25px", borderRadius: "10px" }}
                src="https://niftypm.com/_nuxt/img/large@2x.c9f3a5a.webp"
                alt=""
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div style={{ textAlign: "center" }}>
        <button href="" className={style.intre1}>
          <img
            src="https://niftypm.com/_nuxt/img/nifty-logo-compact.ab551d5.svg"
            width="18px"
            alt="Nifty Logo"
            className={style.app_logo}
          />
          Try Nifty now. Thank us later
        </button>
      </div>
      <div className={style.section_divider}>BUILT FOR EVERY TEAM</div>
      <div className={style.about}>
        <Tabs isLazystyle={{ margin: "auto" }}>
          <TabList style={{ marginLeft: "5%", border: 0 }}>
            <Tab
              style={{
                marginRight: "10px",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              Engineering
            </Tab>
            <Tab
              style={{
                marginRight: "10px",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              . . . . Sales
            </Tab>
            <Tab
              style={{
                marginRight: "10px",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              . . . . Marketing
            </Tab>
            <Tab
              style={{
                marginRight: "10px",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              . . . . Product
            </Tab>
            <Tab
              style={{
                marginRight: "10px",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              . . . . Client Management
            </Tab>
            <Tab
              style={{
                marginRight: "10px",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              . . . . IT
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel style={{ display: "flex", marginLeft: "20px" }}>
              <div style={{ width: "50%" }}>
                <Heading style={{ marginTop: "60px" }}>Engineering</Heading>
                <Text style={{ marginTop: "15px" }}>
                  Let go of fragmented tools. Plan, track, and manage your
                  workflows with award-winning ease — in one collaborative
                  workspace.
                </Text>
                <p style={{ marginTop: "20px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Real-time progress reporting with Milestones
                </p>
                <p style={{ marginTop: "10px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Custom development workflows with if/then rules
                </p>
                <p style={{ marginTop: "10px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Manage issues, bugs, and changes directly in one place
                </p>
              </div>
              <div style={{ width: "50%" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://niftypm.com/_nuxt/img/large@2x.dbaaa6f.webp"
                  alt=""
                />
              </div>
            </TabPanel>
            <TabPanel style={{ display: "flex", marginLeft: "20px" }}>
              <div style={{ width: "50%" }}>
                <Heading style={{ marginTop: "60px" }}>Sales</Heading>
                <Text style={{ marginTop: "15px" }}>
                  Empower your sales teams by adding flow to their work with
                  real-time reporting and insights using automated workflows.
                </Text>
                <p style={{ marginTop: "20px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Track lead status and values for pipeline visibility
                </p>
                <p style={{ marginTop: "10px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Create & store sales collateral for streamlined access
                </p>
                <p style={{ marginTop: "10px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Automate the creation of projects upon closing of leads
                </p>
              </div>
              <div style={{ width: "50%" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://niftypm.com/_nuxt/img/large@2x.d723e85.webp"
                  alt=""
                />
              </div>
            </TabPanel>
            <TabPanel style={{ display: "flex", marginLeft: "20px" }}>
              <div style={{ width: "50%" }}>
                <Heading style={{ marginTop: "60px" }}>Marketing</Heading>
                <Text style={{ marginTop: "15px" }}>
                  Deliver better results with fewer tools. Manage tasks,
                  campaigns, and marketing content with real-time collaboration
                  in one place.
                </Text>
                <p style={{ marginTop: "20px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Expedite approval for creatives with Proofing
                </p>
                <p style={{ marginTop: "10px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Create & track marketing campaigns as Milestones
                </p>
                <p style={{ marginTop: "10px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Align content schedules using Calendar View for Tasks
                </p>
              </div>
              <div style={{ width: "50%" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://niftypm.com/_nuxt/img/large@2x.763298c.webp"
                  alt=""
                />
              </div>
            </TabPanel>
            <TabPanel style={{ display: "flex", marginLeft: "20px" }}>
              <div style={{ width: "50%" }}>
                <Heading style={{ marginTop: "60px" }}>Product</Heading>
                <Text style={{ marginTop: "15px" }}>
                  Build better products with team alignment. Create clear
                  product roadmaps and automate progress reporting as tasks are
                  completed.
                </Text>
                <p style={{ marginTop: "20px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Prioritize & track feature sprints as Milestones
                </p>
                <p style={{ marginTop: "10px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Build spec documents using Nifty or Google Docs
                </p>
                <p style={{ marginTop: "10px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Improve decision-making with custom Project Embeds
                </p>
              </div>
              <div style={{ width: "50%" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://niftypm.com/_nuxt/img/large@2x.e35b583.webp"
                  alt=""
                />
              </div>
            </TabPanel>
            <TabPanel style={{ display: "flex", marginLeft: "20px" }}>
              <div style={{ width: "50%" }}>
                <Heading style={{ marginTop: "60px" }}>
                  Client Management
                </Heading>
                <Text style={{ marginTop: "15px" }}>
                  Never lose a client due to poor communication again. Real-time
                  collaboration to shorten feedback cycles and automate progress
                  reporting.
                </Text>
                <p style={{ marginTop: "20px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Instant messaging & one-click video meetings
                </p>
                <p style={{ marginTop: "10px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Centralize files & expedite approvals with Proofing
                </p>
                <p style={{ marginTop: "10px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Sharable project boards for real-time progress reporting
                </p>
              </div>
              <div style={{ width: "50%" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://niftypm.com/_nuxt/img/large@2x.f664d4b.webp"
                  alt=""
                />
              </div>
            </TabPanel>
            <TabPanel style={{ display: "flex", marginLeft: "20px" }}>
              <div style={{ width: "50%" }}>
                <Heading style={{ marginTop: "60px" }}>IT</Heading>
                <Text style={{ marginTop: "15px" }}>
                  Streamline, centralize, and modernize your workflows. One app
                  to manage your processes without letting anything fall through
                  the cracks again.
                </Text>
                <p style={{ marginTop: "20px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Gather tickets using forms & prioritize resolutions
                </p>
                <p style={{ marginTop: "10px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Automate ticket assignments with status assignees
                </p>
                <p style={{ marginTop: "10px" }}>
                  <span style={{ color: "green" }}>
                    <i class="fa-solid fa-circle-check"></i>
                  </span>{" "}
                  Plan project timelines & deployments using Roadmaps
                </p>
              </div>
              <div style={{ width: "50%" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://niftypm.com/_nuxt/img/large@2x.60b0cdd.webp"
                  alt=""
                />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <button
          style={{
            borderBottom: 0,
            borderLeft: 0,
            backgroundColor: "white",
            width: "15%",
            height: "40px",
            color: "#00baab",
            fontWeight: 700,
            borderTopRightRadius: "20px",
          }}
        >
          Get Started
        </button>
      </div>
      <section className={style.section_gradient}>
        <div>
          <div className={style.review_single}>
            <div className={style.review_single__main}>
              <div className={style.ellipse}></div>
              <div className={style.ellipse}></div>
              <div className={style.ellipse}></div>
              <div className={style.ellipse}></div>
              <div className={style.review_single__body}>
                <p>
                  Nifty is by far the best productivity tool I've ever used.
                  <br />
                  They have consolidated so many tools down to one for my team,
                  without compromising the experience.
                </p>
              </div>{" "}
              <div className={style.review_single__foot}>
                <strong>Rim N. Kay</strong>
                Engineering lead, emovis
              </div>
            </div>
            <div class="review-single__additional">
              <a
                href="https://www.g2.com/products/nifty-technologies-inc-nifty/reviews"
                target="blank"
                rel="noopener"
                class="link"
              >
                Read more Nifty reviews on G2
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={style.section_gradient_all}>
        <div className={style.section__body}>
          <div className={style.shell}>
            <div className={style.callout}>
              <div className={style.callout__content}>
                <div class="callout__content__inner">
                  <img
                    src="https://niftypm.com/_nuxt/img/nifty-logo-compact.ab551d5.svg"
                    alt="Nifty Logo"
                    className={style.app_logo}
                  />
                  <h4 className={style.callout__title}>Get Started Now</h4>
                  <div className={style.callout__entry}>
                    <p>
                      It takes less than 2 mins to sign up and create your first
                      project or import your data from anywhere.
                    </p>
                  </div>
                  <div className={style.callout__actions}>
                    <div className={style.form_subscribe}>
                      <form action="?" method="post">
                        <div className={style.form__inner}>
                          <div className={style.form__main}>
                            <div className={style.form__body}>
                              <div className={style.field}>
                                <div class="field__controls">
                                  <input
                                    type="email"
                                    name="signup-email"
                                    placeholder="name@company.com"
                                    required="required"
                                    className={style.field__input}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={style.form__actions}>
                              <button className={style.btn__primary}>
                                Get Started
                              </button>
                            </div>
                          </div>
                          <div className={style.form__additions}>
                            <span className={style.separator}></span>
                            <div className={style.socials}>
                              <ul type="none">
                                <li>
                                  <a
                                    href="https://api.niftypm.com/auth/google"
                                    className={style.btn__light}
                                  >
                                    <i className={style.ico_googleplus}></i>{" "}
                                    <span class="text">
                                      Sign up with Google
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className={style.note}>
                            <p>Free forever. No credit card required.</p>
                          </div>
                        </div>
                      </form>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className={style.foot_badges}>
                <a
                  title="Nifty is a leader in Small-Business for Project Management on G2"
                  href="https://www.g2.com/products/nifty-technologies-inc-nifty/reviews?utm_source=rewards-badge"
                  target="blank"
                  rel="noopener"
                >
                  <img
                    alt="Nifty is a leader in Small-Business for Project Management on G2"
                    src="https://niftypm.com/_nuxt/img/medal-2651.78561c1.svg"
                    style={{ width: "80px" }}
                  />
                </a>
                <a
                  title="Nifty is a leader in for Project Management on G2"
                  href="https://www.g2.com/products/nifty-technologies-inc-nifty/reviews?utm_source=rewards-badge"
                  target="blank"
                  rel="noopener"
                >
                  <img
                    alt="Nifty is a leader in for Project Management on G2"
                    src="https://niftypm.com/_nuxt/img/medal-2671.abe8328.svg"
                    style={{ width: "80px" }}
                  />
                </a>
                <a
                  title="Nifty is a leader in for Product Management on G2"
                  href="https://www.g2.com/products/nifty-technologies-inc-nifty/reviews?utm_source=rewards-badge"
                  target="blank"
                  rel="noopener"
                >
                  <img
                    alt="Nifty is a leader in for Product Management on G2"
                    src="https://niftypm.com/_nuxt/img/medal-2659.521cffc.svg"
                    style={{ width: "80px" }}
                  />
                </a>
                <a
                  title="Nifty is a leader in Small-Business for Project Management on G2"
                  target="blank"
                  rel="noopener"
                  href="https://www.g2.com/products/nifty-technologies-inc-nifty/reviews?utm_source=rewards-badge"
                >
                  <img
                    alt="Nifty is a leader in Small-Business for Project Management on G2"
                    src="https://niftypm.com/_nuxt/img/medal-2696.defc16a.svg"
                    style={{ width: "80px" }}
                  />
                </a>
                <a
                  title="Nifty is a leader in Small-Business for Project Management on G2"
                  target="blank"
                  rel="noopener"
                  href="https://www.g2.com/products/nifty-technologies-inc-nifty/reviews?utm_source=rewards-badge"
                >
                  <img
                    alt="Nifty is a leader in Small-Business for Project Management on G2"
                    src="https://niftypm.com/_nuxt/img/medal-2640.333478a.svg"
                    style={{ width: "80px" }}
                  />
                </a>
                <a
                  title="Users love Nifty on G2"
                  target="blank"
                  rel="noopener"
                  href="https://www.g2.com/products/nifty-technologies-inc-nifty/reviews?utm_source=rewards-badge"
                >
                  <img
                    alt="Users love Nifty on G2"
                    src="https://niftypm.com/_nuxt/img/users-love-us.a93e7d7.svg"
                    style={{ width: "80px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home