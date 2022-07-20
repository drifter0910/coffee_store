import React, { useRef, useState } from 'react';
import './Reservation.css';
import res from '../../img/reservation.png';
import emailjs from '@emailjs/browser';
const Reservation = () => {
  const form = useRef<any>();
  const [done, setDone] = useState(false);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    emailjs.sendForm('service_h4iojru', 'template_gkgxyen', form.current, '5pldGwo_DBee12R4W').then(
      (result) => {
        console.log(result.text);
        setDone(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="nav-menu">
      <div className="navmenu-top">
        <label className="product1-label">
          <p>RESERVATION</p>
        </label>
      </div>
      <div className="reservation">
        <div className="row">
          <div className="col-xl-6">
            <div className="reservation-l">
              <label className="reservation-label" htmlFor="">
                RESERVE YOUR TABLE HERE
              </label>
              <p className="reservation-des">
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in
                mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri
                nsequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id.error epicurei
                mea.
              </p>
            </div>
            <div className="reservation-form">
              <form ref={form} onSubmit={sendEmail}>
                <input className="user" type="text" name="user_name" placeholder="Name ..." />
                <input className="email" type="email" name="user_email" placeholder="Email ..." />

                <textarea
                  className="reservation-form-input"
                  placeholder="Message me ..."
                  name="message"
                />
                <input className="book-button" type="submit" value="BOOK A TABLE" />
                <span style={{ paddingTop: '2rem', fontSize: '20px' }}>
                  {done && 'Thanks for your contact!'}
                </span>
              </form>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="reservation-img">
              <img src={res} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
