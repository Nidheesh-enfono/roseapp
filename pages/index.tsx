import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Card, Row, Col, Form, Button } from "react-bootstrap";

export default function Home() {
  //Get current date
  const today = new Date();
  const tomorrow = new Date(today);
  const dayAfter = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  dayAfter.setDate(dayAfter.getDate() + 2);

  const [standard, setStandard] = useState("1");
  const [day, setDay] = useState(today.toISOString().split("T")[0]);
  const [time, setTime] = useState("3:00 PM");
  const [mobile, setMobile] = useState("");

  const grade = [
    { id: "1", grade: "1" },
    { id: "2", grade: "2" },
    { id: "3", grade: "3" },
    { id: "4", grade: "4" },
    { id: "5", grade: "5" },
    { id: "6", grade: "6" },
    { id: "7", grade: "7" },
    { id: "8", grade: "8" },
    { id: "9", grade: "9" },
    { id: "10", grade: "10" },
    { id: "11", grade: "11" },
    { id: "12", grade: "12" },
  ];

  const days = [
    {
      id: 1,
      label: `TODAY`,
      value: today.toISOString().split("T")[0],
    },
    {
      id: 2,
      label: `TOMORROW`,
      value: tomorrow.toISOString().split("T")[0],
    },
    {
      id: 3,
      label: `DAY AFTER`,
      value: dayAfter.toISOString().split("T")[0],
    },
  ];

  const timing = [
    {
      id: 1,
      label: "3:00 PM",
    },
    {
      id: 2,
      label: "4:00 PM",
    },
    {
      id: 3,
      label: "5:00 PM",
    },
    {
      id: 4,
      label: "6:00 PM",
    },
    {
      id: 5,
      label: "7:00 PM",
    },
    {
      id: 6,
      label: "8:00 PM",
    },
    {
      id: 7,
      label: "9:00 PM",
    },
  ];

  const handleBooking = (e: any) => {
    e.preventDefault();

    if (mobile === "") {
      alert("Please enter your mobile number");
      return;
    } else {
      window.location.href = `https://wa.me/917006691010?text=Hi, I would like to book a free demo for my child in ${standard} grade on ${day} at ${time}. My mobile number is ${mobile}`;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Book for Free Demo Class and Counseling</title>
        <meta
          name="description"
          content="Book for Free Demo Class and Counseling"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="custom-body">
        <div className="d-flex justify-content-center align-items-center py-3">
          {/*eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://uae.roseapp.in/wp-content/uploads/2022/02/rose-150x38.png"
            alt=""
          />
        </div>
        <Card>
          <Card.Body className="text-center">
            <h3 className="mt-2" style={{ fontWeight: "600" }}>
            Book for Free Demo Class and Counseling
            </h3>
            <hr />
            <h5>Select Your Child&apos;s Grade in School</h5>
            <Row className="mt-4 pb-0 d-flex justify-content-center align-items-center">
              <Col
                xs={3}
                className="p-2 m-1 rounded-2"
                style={{
                  border: "1px solid #F35D94",
                  cursor: "pointer",
                  backgroundColor: standard === "LKG" ? "#F35D94" : "white",
                  color: standard === "LKG" ? "white" : "black",
                }}
                onClick={() => setStandard("LKG")}
              >
                LKG
              </Col>
              <Col
                xs={3}
                className="p-2 m-1 rounded-2"
                style={{
                  border: "1px solid #F35D94",
                  cursor: "pointer",
                  backgroundColor: standard === "UKG" ? "#F35D94" : "white",
                  color: standard === "UKG" ? "white" : "black",
                }}
                onClick={() => setStandard("UKG")}
              >
                UKG
              </Col>
            </Row>
            <Row className="p-2 pb-0 d-flex justify-content-center align-items-center">
              {grade?.map((item, idx) => (
                <Col
                  key={idx}
                  xs={2}
                  className="p-2 m-1 rounded-2"
                  style={{
                    border: "1px solid #F35D94",
                    cursor: "pointer",
                    backgroundColor: standard === item.id ? "#F35D94" : "white",
                    color: standard === item.id ? "white" : "black",
                  }}
                  onClick={() => setStandard(item.id)}
                >
                  {item.grade}
                </Col>
              ))}
            </Row>
            <Row className="mt-2 pb-0 d-flex justify-content-center align-items-center">
              <Col
                xs={4}
                className="p-2 m-1 rounded-2"
                style={{
                  border: "1px solid #F35D94",
                  cursor: "pointer",
                  backgroundColor: standard === "Grown-up" ? "#F35D94" : "white",
                  color: standard === "Grown-up" ? "white" : "black",
                }}
                onClick={() => setStandard("Grown-up")}
              >
                Grown Up
              </Col>
            </Row>
            <h5 className="mt-4">Select Date for Free Demo</h5>
            <hr className="my-3" />
            <Row className="mt-4 px-3">
              {days?.map((item, idx) => (
                <Col
                  key={idx}
                  onClick={() => setDay(item.value)}
                  className="p-2 py-3 rounded-2"
                  style={{
                    cursor: "pointer",
                    backgroundColor: day === item.value ? "#F35D94" : "white",
                    color: day === item.value ? "white" : "black",
                  }}
                >
                  {item.label}
                </Col>
              ))}
            </Row>
            <Row className="mt-4 d-flex justify-content-center">
              <Col xs={6}>
                <h5>OR</h5>
                <Form.Control
                  style={{ border: "1px solid #b3c3f3" }}
                  type="date"
                  name="date"
                  value={day}
                  placeholder="Enter Phone Number with country code"
                  onChange={(e) => setDay(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="py-3 mt-3 d-flex justify-content-center align-items-center">
              <h5>Select Time Slot</h5>
              <hr className="my-3" />
              {timing?.map((item, idx) => (
                <Col
                  key={idx}
                  xs={2}
                  className="p-1 mx-1 mb-2 rounded-2"
                  style={{
                    border: "1px solid #F35D94",
                    cursor: "pointer",
                    backgroundColor: time === item.label ? "#F35D94" : "white",
                    color: time === item.label ? "white" : "black",
                  }}
                  onClick={() => setTime(item.label)}
                >
                  <p className="m-0" style={{ fontSize: "12px" }}>
                    {item.label}
                  </p>
                </Col>
              ))}
            </Row>

            <h5 className="mt-3">Please Enter your Mobile</h5>
            <hr className="my-3" />
            <Row className="mt-3">
              <Col className="">
                <Form.Control
                  style={{ border: "1px solid #b3c3f3" }}
                  type="text"
                  name="Mobile"
                  placeholder="Enter Phone Number with country code"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </Col>
            </Row>
            <Button
              onClick={handleBooking}
              style={{ background: "#F35D94", width: "100%" }}
              className="my-4"
            >
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </main>
    </div>
  );
}
