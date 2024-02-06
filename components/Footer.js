import React from "react";
import Link from "next/link";
import style from "../styles/Header.module.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link href="/AllProducts" className="me-4 text-reset">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#1877f2", fontSize: "30px" }}
            />
          </Link>
          <Link href="" className="me-4 text-reset">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "#1da1f2", fontSize: "30px" }}
            />
          </Link>
          <Link href="" className="me-4 text-reset">
            <FontAwesomeIcon
              icon={faGoogle}
              style={{ color: "#FF5B22", fontSize: "30px" }}
            />
          </Link>
          <Link href="" className="me-4 text-reset">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#1da1f2", fontSize: "30px" }}
            />
          </Link>
          <Link href="" className="me-4 text-reset">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#FF0075", fontSize: "30px" }}
            />
          </Link>
          {/* <Link href="" className="me-4 text-reset">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#000000", fontSize: "30px" }}
            />
          </Link> */}
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <img
                src="https://www.etechcube.com/wp-content/uploads/2021/03/cropped-cropped-cropped-cropped-color_logo_transparent-1-1-1.png"
                width={100}
                height={30}
              />
              <p>
                "Innovative software solutions transforming businesses with
                cutting-edge technology. Elevate your operations and stay ahead
                in the digital era with us."
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link href="#!" className={style.text_decoration}>
                  Angular
                </Link>
              </p>
              <p>
                <Link href="#!" className={style.text_decoration}>
                  React
                </Link>
              </p>
              <p>
                <Link href="#!" className={style.text_decoration}>
                  Vue
                </Link>
              </p>
              <p>
                <Link href="#!" className={style.text_decoration}>
                  Laravel
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link href="#!" className={style.text_decoration}>
                  Pricing
                </Link>
              </p>
              <p>
                <Link href="#!" className={style.text_decoration}>
                  Settings
                </Link>
              </p>
              <p>
                <Link href="#!" className={style.text_decoration}>
                  Orders
                </Link>
              </p>
              <p>
                <Link href="#!" className={style.text_decoration}>
                  Help
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-3" />
                Confident Antlia 3, Sarjapura, Bangalore - 562125
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@etechcube.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 72800 44001
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 72800 44002
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2001-2021 etechcube All rights reserved. eTechCube
      </div>
    </MDBFooter>
  );
}
