<h1 align="center">Prevention of DOS for a login account</h1>
<h2>Team Members</h2>
<ol type="1"><li>Navneet Priyadarshi(22BCS074)</li><li>Shruthik Sai(22BCS096)</li><li>Sanchay Awana(22BCS109)</li><li>Shaik Guffran Ahmed(22BCS112)</li></ol>
<hr>
<h2>About DOS attack</h2>
<p>A Denial-of-Service (DOS) attack is a an attempt to disrupt the normal functioning of a targeted server,service,or network by overwhelming it with a flood of traffic or requests.The goal is to make the service unavailable to legitimate users.</p>
<hr>
<h2>Type of DOS attack we are trying to prevent:</h2>
<p>Denial of Service (DOS) attack we aim to prevent is unauthorized login attempts that lead to account lockouts.This attack occurs when an unauthorized individual gains access to a user's device and attempts to log in with incorrect credentials multiple times.After a predetermined number of failed attempts,the account may be locked or services rendered inaccessible for a specific period of time(24hrs in most cases),denying the user access.</p>
<hr>
<h2>What are we trying to do?(Target of our project)</h2>
<p><h3>Objective:</h3>
Develop a website that mimics the login and sign-up pages of a typical application while implementing enhanced security measures to prevent unauthorized access through failed login attempts.
<h3>Features:</h3>
<h4>1.User Registration:</h4>
Users can sign up by providing their email address and setting a secure password.
<h4>2.Unauthorized Login Attempts:</h4>
If an unauthorized user obtains the email address and tries to log in with incorrect passwords, the system will track these failed attempts.
<h4>3.Failed Login Notification:</h4>
<h5>After three consecutive failed login attempts:</h5>
  <ul><li>The website will send an email notification to the legitimate user, informing them of the failed attempts.</li><li>The email will include a randomly generated CAPTCHA or numerical password.</li></ul>
<h4>4.CAPTCHA Verification for Login:</h4>
<h5>For the next login attempt (within a specified time frame):</h5>
<ul><li>The user must input their email and the CAPTCHA received in the notification email.</li><li>As the unauthorized user will not have access to the personal email of real user due to two-step verification of email,preventing them from logging in.</li></ul>
<h4>5.Resumption of Normal Access:</h4>
Once the specified period expires, the user can log in normally using their email and password without needing the CAPTCHA.
<hr>
<h2>Implementation Details:</h2>
<ol type="1">
  <li>Front-End: HTML, CSS, and JavaScript for user interfaces (sign-up and login pages).</li>
  <li>Back-End: Server-side programming (e.g Node.js,Python,or any preferred language)
  <br><h5>For handling:</h5>
    <ul><li>User registration and password hashing.</li>
      <li>Tracking login attempts and sending emails.</li>
      <li>Generating random CAPTCHAs.</li></ul>
  </li>
  <li>Database: A secure database (e.g MongoDB,PostgreSQL,Mysql) to store user credentials and track login attempts.
</li></ol>
<hr>
<h2>Security Measures:</h2>
  <ul>
    <li>hashing (using bcrypt) for secure storage of user passwords.</li>
    <li>Use of email sending methods to dispatch notifications to users.</li>
  </ul>
  <hr>
<h2>Progress:</h2>
Currently we are working on front-end of the project and verifying various options we can consider for improvement website and its security mechanisms.
<hr>
<h2>Conclusion:</h2>
This project not only replicates a standard login and sign-up system but also incorporates essential security features to protect user accounts from unauthorized access. The combination of user notifications and CAPTCHA verification ensures that legitimate users can maintain access while preventing potential attackers.
<hr>
</p>

