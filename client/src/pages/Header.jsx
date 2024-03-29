import React from "react";
import "./Header.css";
import Nav from "../components/Nav";
import v from "../assets/World Blood Donor Day Initiative - Blood Donor Awareness Video.mp4"
function Header() {
  return (
    <>
    <Nav/>

    <div className="Header_main">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=My+Soul&family=Permanent+Marker&family=Righteous&display=swap"
        rel="stylesheet"
      />
      <section className="nav" id="nav">
        {/* <a href="#" className="logo">
          <img src="image.png" alt="logo" />
        </a>
        <div className="login">
          <form method="POST" name="myform" onsubmit="abc()">
            <ul>
              <li className="btn">
                <input type="text" name="name" placeholder="Donor Login" />
              </li>
              <li className="btn">
                <input type="password" name="password" placeholder="Password" />
              </li>
              <li className="btn">
                <input type="submit" value="Login" />{" "}
              </li>
            </ul>
          </form>
        </div> */}
        {/* <div className="info">
          <ul>
            <li className="infobtn">
              <a href="register.html" target="_blank">
                Register
              </a>
            </li>
            <li className="infobtn">
              <a href="why donate blood.html" target="_blank">
                Why Donate Blood
              </a>
            </li>
            <li className="infobtn">
              <a href="who can donate.html" target="_blank">
                Who Can Give Blood
              </a>
            </li>
            <li className="infobtn">
              <a href="refer.html" target="_blank">
                Refer A Friend
              </a>
            </li>
            <li className="infobtn">
              <a href="#us">Contact Us</a>
            </li>
          </ul>
        </div> */}
        <h2 className="thought">
          Lets Initiate . Lets Help Someone . Lets Donate Blood
        </h2>
      </section>
      <section className="content">
        <div className="vdo">
          <video
            src={v}
            muted
            autoplay
            loop
            controls
            
          ></video>
        </div>
        {/* <section className="form" id="form">
          <h1>Find A Donor</h1>
          <form name="myform1" method="POST" onsubmit="def()">
            <div className="form-group">
              <input type="text" name="name1" placeholder="Enter your Name" />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="number1"
                placeholder="Enter your Age"
              />
            </div>
            <div className="form-group">
              <input type="text" name="name2" placeholder="Enter your Gender" />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name3"
                placeholder="Enter your Locality"
              />
            </div>
            <div className="form-group">
              <input type="text" name="name4" placeholder="Enter your Group" />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="number2"
                placeholder="Enter your Contact"
              />
            </div>
            <input type="submit" className="sub" value="submit" />
          </form>
        </section> */}
      </section>
      <section className="types" id="types">
        <h2 className="heading">Types Of Blood Donation</h2>
        <section className="image">
          <img src="blood1.png" alt="loading" height="400px" width="400px" />
        </section>
        <section className="types_content">
          <ul>
            <li>
              {" "}
              <a href="#whole"> Whole Blood Donation</a>
            </li>
            <li>
              {" "}
              <a href="#power"> Power Red Donation </a>
            </li>
            <li>
              {" "}
              <a href="#platelet"> Platelet Donation </a>
            </li>
            <li>
              {" "}
              <a href="#plasma"> AB Elite Plasma Donation</a>
            </li>
          </ul>
        </section>
      </section>
      <div className="top">
        <a href="#nav">
          <img src="red gif.gif" width="150px" height="150px" alt="" />
        </a>
      </div>
      <section className="whole" id="whole">
        <details>
          <summary>
            <h2 className="whole_heading">Whole Blood Donation</h2>
          </summary>

          <p className="whole_content">
            <strong> What is whole blood donation?</strong> A whole blood (WB)
            donation is the most common form of blood donation, in which a
            person gives one pint of blood. <br />
            <br />
            <strong> What is whole blood used for?</strong> After your donation,
            our lab separates the whole blood into its components. We do this
            because it allows usto deliver what patients need more specifically.
            The components we separate out are: <br />
            <br />
            <strong> Plasma</strong>: Many proteins in plasma that help with
            blood clotting come from the liver. It can be used for patients who
            have certain bleeding problems or in an emergent trauma situation.{" "}
            <br />
            <br />
            <strong>Red Blood Cells</strong>: Red blood cells transport oxygen
            and nutrients to the tissues and remove carbon dioxide and waste.
            Red blood cells are indicated for more than 70% of all transfusions.
            Patients who lose or at risk of losing significant volumes of blood
            require red blood cell transfusions. This population includes
            patients who have suffered severe trauma, have a perforated bleeding
            ulcer, or who are undergoing a major surgical procedure. <br />
            <br />
            <strong>How long does donating take?</strong> The actual “draw”
            takes around 7 minutes, and the process overall takes about an hour.
            There are four basic steps in the whole blood donation process:
            registration, medical history, donation, and rest & refreshments.
            <br />
            <br />
            <strong>What are the requirements for donating WB?</strong> To learn
            more about the requirements for donating whole blood, visit our
            eligibility page. <br />
            <br />
            <strong>How often can I donate?</strong> Donors ages 16-18 are
            eligible for a whole blood donation once every six months (180 days)
            or a double red blood cell donation (DRBC) once every 12 months (365
            days). Donors 19 years of age or older are eligible for a whole
            blood donation every 56 days or a DRBC donation every four months.
            <br />
            <br />
            <strong>How do I make an appointment to donate?</strong> To make an
            appointment to donate whole blood, you can schedule online at
            website <br />
            <br />
          </p>
          <section className="whole_img">
            <img src="whole blood.png" alt="" />
          </section>
        </details>
      </section>
      <section className="power" id="power">
        <details>
          <summary>
            <h2 className="power_heading">Power RED Donation</h2>
          </summary>
          <p className="power_content">
            <strong> What Is It?</strong>
            <br />
            <br />
            Power red cell donation is similar to a whole blood donation, except
            a special machine is used to allow you to safely donate two units of
            red blood cells during one donation while returning your plasma and
            platelets to you.
            <br />
            <br />
            <strong>Who is eligible?</strong>
            <br />
            <br />
            <br />
            <br />
            <strong>
              Q: Is your blood type A negative, B negative, O positive or O
              negative?
            </strong>
            <br />
            <br />
            <strong>Q: MALES:</strong> Are you at least 5’1″ tall and do you
            weigh at least 130lbs?
            <br />
            <br />
            <strong>Q: FEMALES:</strong> Are you at least 5’5″ tall and do you
            weigh at least 150lbs?
            <br />
            <br />
            <strong>Q: Can you spare an extra 30 minutes?</strong>
            <br />
            <br />
            If you answered <strong>YES!</strong> to each of these questions,
            you may be eligible to be one of our automated donors.
            <br />
            <br />
            <strong>How Is a Power Red Cell Donation Different?</strong>
            <br />
            <br />
            During your power red cell donation, blood is drawn from one arm and
            drawn through a sterile, single-use needle set to a machine. The
            machine separates and collects two units of red cells and then
            safely returns the remaining blood components, along with some
            saline, back to you through the same arm. A video guide to the
            process can be found at the American Red Cross website.
            <br />
            <br />
            <strong>The Benefits</strong>
            <br />
            <br />
            <strong>Save time and make your donation go further:</strong> If you
            are extremely busy, committed to donating blood and an eligible A,
            AB, B, or O negative donor, power red cell donation may be ideal for
            you. Each procedure lets you give more of the product that is needed
            most by patients. Power red cell donation takes about 20-30 minutes
            longer than a whole blood donation and you can donate approximately
            every four months.
            <br />
            <br />
            <strong>Feel better:</strong> With all of your platelets and plasma
            returned to you along with some saline, you don’t lose
            mjkhbgdsa1qasthe liquid portion of your blood and may feel more
            hydrated after your donation.
            <br />
            <br />
          </p>
        </details>
      </section>
      <section className="platelet" id="platelet">
        <details>
          <summary>
            <h2 className="platelet_heading">Platelet Donation</h2>
          </summary>
          <p className="platelet_content">
            <strong>
              Platelets hold a unique power to save lives. Cancer patients are a
              primary recipient of platelets due to the harsh effects of
              chemotherapy.
            </strong>{" "}
            <br />
            <br />
            Platelet donations are done using a process called automation
            (sometimes referred to as apheresis). Automation allows us to
            collect specific components of your blood at a larger volume. For
            example, one automated platelet donation produces one or more
            complete platelet doses for a patient. It would take six to eight
            whole blood donors pooled together to produce one complete platelet
            dose.
            <br />
            <br />
            <strong>
              {" "}
              People with the following blood types should consider donating
              Platelets.
            </strong>
            <br />
            <br />
            A Positive || B Positive || AB Negative || AB Positive || O Positive
            <br />
            <br />
            <strong>How often can you donate platelets?</strong>
            <br />
            <br />
            You can donate platelets every 7 days and can give up to 24 times a
            year. If you have donated whole blood, you must wait at least 2 days
            before you can donate platelets.
            <br />
            <br />
            <strong>What are the best days to donate platelets?</strong>
            <br />
            <br />
            In routine circumstances, the best days to donate platelets are
            Friday, Saturday, Sunday and Monday to meet hospital needs. In times
            of critical need, the best day to donate platelets is today.
            <br />
            <br />
            At OneBlood, you can donate platelets in our donor centers and on
            select mobiles. Appointments are recommended for platelet donations.
            <br />
            <br />
          </p>
        </details>
      </section>
      <section className="plasma" id="plasma">
        <details>
          <summary>
            <h2 className="plasma_heading">Plasma Donation</h2>
          </summary>
          <p className="plasma_content">
            <strong> During an AB Elite donation,</strong>
            <br /> you give plasma, a part of your blood used to treat patients
            in emergency situations. AB plasma can be given to anyone regardless
            of their blood type. Plasma is collected through an automated
            process that separates plasma from other blood components, then
            safely and comfortably returns your red blood cells and platelets to
            you. AB Elite maximizes your donation and takes just a few minutes
            longer than donating blood. <br />
            <br />
            Plasma is collected at select Red Cross donation centers. Learn more
            about plasma donation.
            <strong> Who it helps:</strong> AB Plasma is used in emergency and
            trauma situations to help stop bleeding.
            <br />
            <br />
            <strong>Time it takes:</strong> About 1 hour and 15 minutes
            <br />
            <br />
            <strong>Ideal blood types:</strong> AB positive, AB negative
            <br />
            <br />
            <strong>Donation frequency:</strong> Every 28 days, up to 13
            times/year
            <br />
            <br />
          </p>
        </details>
      </section>
      <section className="process" id="process">
        <h2 className="process_heading">Blood Donation Process</h2>
        <section className="process_content">
          <h3 className="process_sub">Registration</h3>
          <ol type="I">
            <li>We’ll sign you in and go over basic eligibility.</li>
            <li>You’ll be asked to show ID, such as your driver’s license.</li>
            <li>You’ll read some information about donating blood.</li>
            <li>
              We’ll ask you for your complete address. Your address needs to be
              complete (including PO Box,street/apartment number) and the place
              where you will receive your mail 8 weeks from donation.
            </li>
          </ol>
          <h3 className="process_sub">Health History</h3>
          <ol type="I">
            <li>
              {" "}
              You’ll answer a few questions about your health history and places
              you’ve traveled{" "}
            </li>
            <li> private and confidential interview. </li>
            <li>
              {" "}
              You’ll tell us about any prescription and/or over the counter
              medications that may be in your system.
            </li>
            <li>
              {" "}
              We’ll check your temperature, pulse, blood pressure and hemoglobin
              level.{" "}
            </li>
          </ol>
          <h3 className="process_sub">Your Donation</h3>
          <ol type="I">
            <li>
              If you’re donating whole blood, we’ll cleanse an area on your arm
              and insert a br/and new sterile needle for the blood draw. (This
              feels like a quick pinch and is over in seconds.)
            </li>
            <strong>
              {" "}
              Other types of donations, such as platelets, are made using an
              apheresis machine which will be connected to both arms.
            </strong>
            <li>
              A whole blood donation takes about 8-10 minutes, during which
              you’ll be seated comfortably or lying down. When approximately a
              pint of whole blood has been collected, the donation is complete
              and a staff person will place a bandage on your arm.
            </li>
            <li>
              For platelets, the apheresis machine will collect a small amount
              of blood, remove the platelets, and return the rest of the blood
              through your other arm; this cycle will be repeated several times
              over about 2 hours.
            </li>
          </ol>
          <h3 className="process_sub">Refreshment And Recovery</h3>
          <ol type="I">
            <li>
              {" "}
              After donating blood, you’ll have a snack and something to drink
              in the refreshment area.
            </li>
            <li>
              You’ll leave after 10-15 minutes and continue your normal routine.
            </li>
            <li>
              Enjoy the feeling of accomplishment knowing you are helping to
              save lives.
            </li>
            <li>
              {" "}
              Take a selfie, or simply share your good deed with friends. It may
              inspire them to become blood donors.
            </li>
          </ol>
        </section>
      </section>
      <section className="place" id="place">
        <h2 className="place_heading">Where Would You Like To Donate ?</h2>
        <form className="place_content">
          <select name="place_city" id="place_city" className="place_city">
            <option value="">Select Your City</option>
            <option value="	Amaravati"> Amaravati</option>
            <option value="Itanagar">Itanagar</option>
            <option value="	Dispur"> Dispur</option>
            <option value="	Patna"> Patna</option>
            <option value="	Raipur"> Raipur</option>
            <option value="	Panaji"> Panaji</option>
            <option value="	Gandhinagar"> Gandhinagar</option>
            <option value="	Chandigarh"> Chandigarh</option>
            <option value="Shimla">Shimla</option>
            <option value="	Ranchi"> Ranchi</option>
            <option value="	Bengaluru"> Bengaluru</option>
            <option value="	Thiruvananthapuram"> Thiruvananthapuram</option>
            <option value="	Bhopal"> Bhopal</option>
            <option value="	Mumbai"> Mumbai</option>
            <option value="	Imphal"> Imphal</option>
            <option value="	Shillong"> Shillong</option>
            <option value="	Aizawl"> Aizawl</option>
            <option value="	Kohima"> Kohima</option>
            <option value="	Bhubaneswar">Bhubaneswar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="	Jaipur"> Jaipur</option>
            <option value="Gangtok">Gangtok</option>
            <option value="	Chennai"> Chennai</option>
            <option value="	Hyderabad"> Hyderabad</option>
            <option value="	Agartala"> Agartala</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Dehradun ">Dehradun </option>
            <option value="	Kolkata"> Kolkata</option>
          </select>
          <input
            type="submit"
            value="Submit"
            className="btn_place"
            onclick="alert('Done')"
          />
        </form>
      </section>
      <section className="feed">
        <h3 className="feed_heading">Feedback</h3>
        <textarea
          className="feed_content"
          name=""
          id=""
          cols="196"
          rows="10"
          placeholder="Help Us To Improve Ourselves"
        ></textarea>
      </section>
      <section className="footer">
        <div className="exp">
          <h3 className="footer_heading">Blood Bank</h3>
          <p className="exp content">
            Content on this website is provided for information purposes only.
            Information about a therapy, service, product or treatment does not
            in any way endorse or support such therapy, service, product or
            treatment and is not intended to replace advice from your doctor or
            other registered health professional. The information and materials
            contained on this website are not intended to constitute a
            comprehensive guide concerning all aspects of the therapy, product
            or treatment described on the website. All users are urged to always
            seek advice from a registered health care professional for diagnosis
            and answers to their medical questions and to ascertain whether the
            particular therapy, service, product or treatment described on the
            website is suitable in their circumstances.
          </p>
        </div>
        <div className="transfer">
          <h3 className="footer_heading">Navigate</h3>
          <ul className="transfer_content">
            <li>
              <a href="#nav">Home</a>{" "}
            </li>
            <li>
              <a href="#form">Find A Donor</a>
            </li>
            <li>
              <a href="#types">Types Of Blood Donation</a>
            </li>
            <li>
              <a href="#process">Blood Donation Process</a>
            </li>
            <li>
              <a href="#place">Select Place To Donate Blood</a>
            </li>
          </ul>
        </div>
        <div className="us" id="us">
          <h3 className="footer_heading">Contact Us</h3>
          <ul className="contact_us_content">
            <li>
              <a
                href="#"
                onclick="alert('Sorry! Currently We dont have any social handles')"
              >
                <img src="fb.png" width="30px" height="30px" alt="" />
                &nbsp;&nbsp;&nbsp;Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                onclick="alert('Sorry! Currently We dont have any social handles')"
              >
                <img src="insta.png" width="30px" height="30px" alt="" />
                &nbsp;&nbsp;&nbsp;Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                onclick="alert('Sorry! Currently We dont have any social handles')"
              >
                <img src="linked in.png" width="30px" height="30px" alt="" />
                &nbsp;&nbsp;&nbsp;Linked In
              </a>
            </li>
            <li>
              <a
                href="#"
                onclick="alert('Sorry! Currently We dont have any social handles')"
              >
                <img src="gmail.png" height="25px" width="30px" alt="" />
                &nbsp;&nbsp;&nbsp;Gmail
              </a>
            </li>
            <li>
              <a
                href="#"
                onclick="alert('Sorry! Currently We dont have any social handles')"
              >
                <img src="twitter.png" height="30px" width="30px" alt="" />
                &nbsp;&nbsp;&nbsp;Twitter
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
    </>
  );
}

export default Header;
