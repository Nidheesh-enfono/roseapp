import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Card, Row, Col, Form, Button } from "react-bootstrap";

export default function Home() {
  const [standard, setStandard] = useState(1);
  const [day, setDay] = useState("TODAY");
  const [time, setTime] = useState("3:00 PM");
  const [mobile, setMobile] = useState("");

  const grade = [
    { id: 1, grade: "1" },
    { id: 2, grade: "2" },
    { id: 3, grade: "3" },
    { id: 4, grade: "4" },
    { id: 5, grade: "5" },
    { id: 6, grade: "6" },
    { id: 7, grade: "7" },
    { id: 8, grade: "8" },
    { id: 9, grade: "9" },
    { id: 10, grade: "10" },
    { id: 11, grade: "11" },
    { id: 12, grade: "12" },
  ];

  const days = [
    {
      id: 1,
      label: "TODAY",
    },
    {
      id: 2,
      label: "TOMORROW",
    },
    {
      id: 3,
      label: "DAY AFTER",
    },
  ];

  const timing = [
    {
      id: 1,
      label: "3:00 PM",
    },
    {
      id: 2,
      label: "3:30 PM",
    },
    {
      id: 3,
      label: "4:00 PM",
    },
    {
      id: 4,
      label: "4:30 PM",
    },
    {
      id: 5,
      label: "5:00 PM",
    },
    {
      id: 6,
      label: "5:30 PM",
    },
    {
      id: 7,
      label: "6:00 PM",
    },
    {
      id: 8,
      label: "6:30 PM",
    },
    {
      id: 9,
      label: "7:00 PM",
    },
  ];

  const handleBooking = (e: any) => {
    e.preventDefault();

    if (mobile === "") {
      alert("Please enter your mobile number");
      return;
    } else {
      window.location.href = `https://wa.me/918129855572?text=Hi, I would like to book a free demo for my child in ${standard} grade on ${day} at ${time}. My mobile number is ${mobile}`;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Roseapp</title>
        <meta name="description" content="Roseapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="d-flex justify-content-center align-items-center py-3">
          <img
            src="https://uae.roseapp.in/wp-content/uploads/2022/02/rose-150x38.png"
            alt=""
          />
        </div>
        <Card>
          <Card.Body className="text-center">
            <h3 className="mt-4" style={{ fontWeight: "600" }}>
              DEMO BOOKING
            </h3>
            <hr />
            <h5>Select Your Child Grade in School</h5>
            <Row className="mt-3 p-3 pb-0 pointer">
              {grade?.map((item, idx) => (
                <Col
                  key={idx}
                  xs={2}
                  className="p-3 m-1 rounded-2"
                  style={{
                    border: "1px solid #F56EB3",
                    cursor: "pointer",
                    backgroundColor: standard === item.id ? "#F56EB3" : "white",
                  }}
                  onClick={() => setStandard(item.id)}
                >
                  {item.grade}
                </Col>
              ))}
            </Row>
            <h5 className="mt-4">Select Date for Free Demo</h5>
            <hr className="my-3" />
            <Row className="mt-4">
              {days?.map((item, idx) => (
                <Col
                  key={idx}
                  onClick={() => setDay(item.label)}
                  className="p-2 py-3 rounded-2"
                  style={{
                    cursor: "pointer",
                    backgroundColor: day === item.label ? "#F56EB3" : "white",
                  }}
                >
                  {item.label}
                </Col>
              ))}
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
                    border: "1px solid #F56EB3",
                    cursor: "pointer",
                    backgroundColor: time === item.label ? "#F56EB3" : "white",
                  }}
                  onClick={() => setTime(item.label)}
                >
                  <p className="m-0" style={{ fontSize: "12px" }}>
                    {item.label}
                  </p>
                </Col>
              ))}
            </Row>

            <h5 className="mt-3">Please Enter your mobile</h5>
            <hr className="my-3" />
            <Row className="mt-3">
              <Col className="">
                <Form.Control
                  style={{ border: "1px solid ##F56EB3" }}
                  type="text"
                  name="Mobile"
                  placeholder="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </Col>
            </Row>
            <Button onClick={handleBooking} style={{background:'#F56EB3',width:'75%'}} className="my-4">
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </main>
    </div>
  );
}
