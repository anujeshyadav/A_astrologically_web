import React from "react";
import { Link } from "react-router-dom";
import LayoutOne from "../../layouts/LayoutOne";
import { Container, Row, Col } from "reactstrap";
import LiveAstro from "../../assets/img/team/live-astro.jpg";
import MatchSearch from "./MatchSearch";
import axiosConfig from "../../axiosConfig";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";

class LiveAstrologer extends React.Component {
  constructor(props) {
    super(props);
    this.apicall = React.createRef();

    this.state = {
      liveastrilist: [],
    };
  }
  handleSetInterval = () => {
    this.apicall.current = setInterval(() => {
      axiosConfig
        .get(`/user/listLiveStreamAstro`)
        .then((res) => {
          // this.handleSetInterval();
          this.setState({ liveastrilist: res.data.data });
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log("object");
    }, 40000);
  };

  handleStart = async () => {
    await axiosConfig
      .get(`/user/listLiveStreamAstro`)
      .then((res) => {
        this.handleSetInterval();
        console.log(res.data.data);
        this.setState({ liveastrilist: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.handleStart();
  }

  handleastrolive = (data) => {
    // this.props.history.push("/yourlivestreming");
    // astroId
    localStorage.setItem("astroId", data?.astroAccount?._id);
    console.log(data?.astroAccount?._id);
    this.props.history.push({
      pathname: "/livestreaming",
      state: data,
    });
  };

  render() {
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              // backgroundColor: '#FFD59E',
              // width: '100%',
              // padding: '70px 0px',
              // backgroundSize: 'cover',
              float: "left",
              width: "100%",
              backgroundColor: "#272727",
              position: "relative",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              color: "#ffffff",
              padding: " 50px 0px 50px 0px",
              backgroundImage: `url(${astrologinbg})`,
              backgroundPosition: "center center",
              backgroundRepeat: " no-repeat",
              textAlign: "center",
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>Live Event</h1>
                    <h3>Live Chat with the Best Astrologers</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section>
          <Container>
            <Row className="mb-40">
              <Col lg="12">
                <p>
                  In a new way to interact with astrologers, Astrotalk brings
                  you Astrotalk Live, where you can talk to astrologers via live
                  sessions and ask them questions for free. Astrotalk Live is a
                  new and innovative way to talk to an astrologer face-to-face
                  and get your queries answered while enjoying the best of
                  astrology. On Astrotalk live, anyone can get guidance from the
                  best astrologers in India on questions spanning across topics
                  such as marriage, career, love, health and much more.
                </p>
                <br></br>
                <p>
                  Talking with astrologers through live sessions is one of the
                  most popular features of Astrotalk, as no other app provides
                  this unique way to consult an astrologer. Apart from just
                  being unique, the feature is easy to use and highly
                  interactive. Accessing an astrologer on Astrotalk Live is
                  fairly simple, and so is getting your queries answered by
                  them. To have the best experience of live sessions, it is
                  recommended that you ask YES and NO questions to the
                  astrologer. Also, if you like the session being delivered by
                  an astrologer, you can even contribute to their earnings by
                  the means of donations. The Astrotalk Live feature is also
                  available on the Astrotalk app.
                </p>
              </Col>
            </Row>

            <Row className="mb-50">
              <Col lg="8">
                <h3>Live Astrologers</h3>
              </Col>
              <Col lg="4">
                <MatchSearch />
              </Col>
            </Row>
            <Row>
              {this.state.liveastrilist.length > 0 ? (
                <>
                  {this.state.liveastrilist?.map((value) => (
                    <Col
                      key={value?._id}
                      style={{ cursor: "pointer" }}
                      lg="3"
                      md="3"
                    >
                      <div className="ast-list">
                        {/* <Link to={"/yourlivestreming"}> */}
                        <div
                          onClick={() => this.handleastrolive(value)}
                          className="liveimg"
                        >
                          <img
                            src={value?.astroAccount?.img[0]}
                            alt=""
                            height={220}
                            width={100}
                          />
                          {/* <img src={LiveAstro} alt="" width={100} /> */}
                        </div>
                        <div className="livecont">
                          <span>
                            <div class="zoom-in-zoom-out">
                              <span style={{ marginLeft: 20 }}>Live</span>
                            </div>
                            <h3>{value?.astroAccount?.fullname}</h3>
                          </span>
                        </div>
                        {/* </Link> */}
                      </div>
                    </Col>
                  ))}
                </>
              ) : (
                <>
                  <h4 style={{ color: "red" }}>No Astrologer is Live</h4>
                </>
              )}

              {/* <Col lg="3" md="3">
                <div className="ast-list">
                  <Link to={"/"}>
                    <div className="liveimg">
                      <img src={LiveAstro} alt="" width={100} />
                    </div>
                    <div className="livecont">
                      <span>
                        <div class="zoom-in-zoom-out">
                          <span style={{ marginLeft: 20 }}>Live</span>
                        </div>
                        <h3>lorem</h3>
                      </span>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col lg="3" md="3">
                <div className="ast-list">
                  <Link to={"/"}>
                    <div className="liveimg">
                      <img src={LiveAstro} alt="" width={100} />
                    </div>
                    <div className="livecont">
                      <span>
                        <div class="zoom-in-zoom-out">
                          <span style={{ marginLeft: 20 }}>Live</span>
                        </div>
                        <h3>lorem</h3>
                      </span>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col lg="3" md="3">
                <div className="ast-list">
                  <Link to={"/"}>
                    <div className="liveimg">
                      <img src={LiveAstro} alt="" width={100} />
                    </div>
                    <div className="livecont">
                      <span>
                        <div class="zoom-in-zoom-out">
                          <span style={{ marginLeft: 20 }}>Live</span>
                        </div>
                        <h3>lorem</h3>
                      </span>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col lg="3" md="3">
                <div className="ast-list">
                  <Link to={"/"}>
                    <div className="liveimg">
                      <img src={LiveAstro} alt="" width={100} />
                    </div>
                    <div className="livecont">
                      <span>
                        <div class="zoom-in-zoom-out">
                          <span style={{ marginLeft: 20 }}>Live</span>
                        </div>
                        <h3>lorem</h3>
                      </span>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col lg="3" md="3">
                <div className="ast-list">
                  <Link to={"/"}>
                    <div className="liveimg">
                      <img src={LiveAstro} alt="" width={100} />
                    </div>
                    <div className="livecont">
                      <span>
                        <div class="zoom-in-zoom-out">
                          <span style={{ marginLeft: 20 }}>Live</span>
                        </div>
                        <h3>lorem</h3>
                      </span>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col lg="3" md="3">
                <div className="ast-list">
                  <Link to={"/"}>
                    <div className="liveimg">
                      <img src={LiveAstro} alt="" width={100} />
                    </div>
                    <div className="livecont">
                      <span>
                        <div class="zoom-in-zoom-out">
                          <span style={{ marginLeft: 20 }}>Live</span>
                        </div>
                        <h3>lorem</h3>
                      </span>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col lg="3" md="3">
                <div className="ast-list">
                  <Link to={"/"}>
                    <div className="liveimg">
                      <img src={LiveAstro} alt="" width={100} />
                    </div>
                    <div className="livecont">
                      <span>
                        <div class="zoom-in-zoom-out">
                          <span style={{ marginLeft: 20 }}>Live</span>
                        </div>
                        <h3>lorem</h3>
                      </span>
                    </div>
                  </Link>
                </div>
              </Col> */}
            </Row>
            <Row className="mb-40 mt-30">
              <h3>Chat with Astrologers Live</h3>
              <Col lg="12">
                <p>
                  In a new way to interact with astrologers, Astrotalk brings
                  you Astrotalk Live, where you can talk to astrologers via live
                  sessions and ask them questions for free. Astrotalk Live is a
                  new and innovative way to talk to an astrologer face-to-face
                  and get your queries answered while enjoying the best of
                  astrology. On Astrotalk live, anyone can get guidance from the
                  best astrologers in India on questions spanning across topics
                  such as marriage, career, love, health and much more.
                </p>
                <br></br>
                <p>
                  Talking with astrologers through live sessions is one of the
                  most popular features of Astrotalk, as no other app provides
                  this unique way to consult an astrologer. Apart from just
                  being unique, the feature is easy to use and highly
                  interactive. Accessing an astrologer on Astrotalk Live is
                  fairly simple, and so is getting your queries answered by
                  them. To have the best experience of live sessions, it is
                  recommended that you ask YES and NO questions to the
                  astrologer. Also, if you like the session being delivered by
                  an astrologer, you can even contribute to their earnings by
                  the means of donations. The Astrotalk Live feature is also
                  available on the Astrotalk app.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default LiveAstrologer;
