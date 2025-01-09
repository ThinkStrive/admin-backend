
// export const VERIFICATION_EMAIL_TEMPLATE = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Verify Your Email</title>
// </head>
// <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//   <div style="background: linear-gradient(to right, #5d02b2, #7900ec); padding: 20px; text-align: center;">
//     <h1 style="color: white; margin: 0;">Verify Your Email</h1>
//   </div>
//   <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
//     <p>Hello,</p>
//     <p>Thank you for signing up! Your verification code is:</p>
//     <div style="text-align: center; margin: 30px 0;">
//       <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #5d02b2;">{verificationCode}</span>
//     </div>
//     <p>Enter this code on the verification page to complete your registration.</p>
//     <p>This code will expire in 15 minutes for security reasons.</p>
//     <p>If you didn't create an account with us, please ignore this email.</p>
//     <p>Best regards,<br>Your App Team</p>
//   </div>
//   <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
//     <p>This is an automated message, please do not reply to this email.</p>
//   </div>
// </body>
// </html>
// `;

// export const EMAIL_VERIFIED_WELCOME_TEMPLATE = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Verify Your Email</title>
// </head>
// <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//   <div style="background: linear-gradient(to right, #5d02b2, #7900ec); padding: 20px; text-align: center;">
//     <h1 style="color: white; margin: 0;">Welcome On Board</h1>
//   </div>
//   <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
//     <p>Hello {name},</p>
//     <p>Thank you for signing up! Your Verification is done.</p>
    
//     <p>If you didn't create an account with us, please ignore this email.</p>
//     <p>Best regards,<br>Your App Team</p>
//   </div>
//   <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
//     <p>This is an automated message, please do not reply to this email.</p>
//   </div>
// </body>
// </html>
// `;

// export const PASSWORD_RESET_REQUEST_TEMPLATE = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Reset Your Password</title>
// </head>
// <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//   <div style="background: linear-gradient(to right, #5d02b2, #7900ec); padding: 20px; text-align: center;">
//     <h1 style="color: white; margin: 0;">Password Reset</h1>
//   </div>
//   <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
//     <p>Hello,</p>
//     <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
//     <p>To reset your password, click the button below:</p>
//     <div style="text-align: center; margin: 30px 0;">
//       <a href="{resetURL}" style="background-color: #5d02b2; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
//     </div>
//     <p>This link will expire in 1 hour for security reasons.</p>
//     <p>Best regards,<br>Your App Team</p>
//   </div>
//   <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
//     <p>This is an automated message, please do not reply to this email.</p>
//   </div>
// </body>
// </html>
// `;

// export const PLAN_ACTIVATED_SUCCESS_TEMPLATE = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Plan Activated Successfully</title>
// </head>
// <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//   <div style="background: linear-gradient(to right, #28a745, #1f8b3b); padding: 20px; text-align: center;">
//     <h1 style="color: white; margin: 0;">Plan Activation Successful</h1>
//   </div>
//   <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
//     <p>Hello,</p>
//     <p>We are excited to inform you that your subscription plan has been successfully activated!</p>
//     <div style="text-align: center; margin: 30px 0;">
//       <div style="background-color: #28a745; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
//         ✓
//       </div>
//     </div>
//     <p>Here are the details of your activated plan:</p>
//     <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
//       <tr style="background-color: #e0e0e0; text-align: left;">
//         <th style="padding: 10px; text-align: center;">Your Plan</th>
//         <td style="padding: 10px; border: 1px solid #ddd; text-align: center; background-color: rgb(103, 199, 103);">[PLAN_NAME]</td>
//       </tr>
//       <tr>
//         <th style="padding: 10px; border: 1px solid #ddd;">Activation Date</th>
//         <td style="padding: 10px; border: 1px solid #ddd;">[ACTIVATION_DATE]</td>
//       </tr>
//     </table>
//     <p>To make the most of your subscription, we recommend you:</p>
//     <ul>
//       <li>Explore all the benefits of your plan</li>
//       <li>Keep track of your subscription expiry date</li>
//       <li>Renew your plan in advance to avoid disruptions</li>
//     </ul>
//     <p>If you have any questions or need support, feel free to contact our support team.</p>
//     <p>Thank you for choosing us. We’re thrilled to have you on board!</p>
//     <p>Best regards,<br>Roulette Rise Team</p>
//   </div>
//   <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
//     <p>This is an automated message, please do not reply to this email.</p>
//   </div>
// </body>
// </html>

// `;


// export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Password Reset Successful</title>
// </head>
// <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//   <div style="background: linear-gradient(to right, #5d02b2, #7900ec); padding: 20px; text-align: center;">
//     <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
//   </div>
//   <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
//     <p>Hello,</p>
//     <p>We're writing to confirm that your password has been successfully reset.</p>
//     <div style="text-align: center; margin: 30px 0;">
//       <div style="background-color: #5d02b2; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
//         ✓
//       </div>
//     </div>
//     <p>If you did not initiate this password reset, please contact our support team immediately.</p>
//     <p>For security reasons, we recommend that you:</p>
//     <ul>
//       <li>Use a strong, unique password</li>
//       <li>Enable two-factor authentication if available</li>
//       <li>Avoid using the same password across multiple sites</li>
//     </ul>
//     <p>Thank you for helping us keep your account secure.</p>
//     <p>Best regards,<br>Your App Team</p>
//   </div>
//   <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
//     <p>This is an automated message, please do not reply to this email.</p>
//   </div>
// </body>
// </html>
// `;



// new Template 




export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <style>
    /* Prevent horizontal scrolling */
    body, html {
      overflow-x: hidden;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      color: #4a4a4a;
    }
  </style>
</head>
<body style="max-width: 600px; margin: 0 auto; padding: 16px; background-color: #f9f9f9;">

  <!-- Header Section -->
  <div style="background: linear-gradient(to right, #6b46c1, #4c51bf); padding: 24px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; align-items: center; gap: 16px;">
    <img src="https://res.cloudinary.com/dmd5xjtit/image/upload/v1733136588/RouletteRise_Transperent_Logo_rhaaxk.png" alt="Logo" style="height: 60px;">
    <h1 style="color: white; font-size: 24px; font-weight: bold; margin: 0;">Verify Your Email</h1>
  </div>

  <!-- Content Section -->
  <div style="background-color: white; padding: 24px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <!-- Greeting and Image -->
    <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 24px;">
      <p style="font-size: 16px; font-weight: 500; margin: 0 0 16px;">Hello,</p>
      <img src="https://media.tenor.com/n2Pnf0j5PlIAAAAC/mail-download.gif" alt="Verify Email GIF" style="width: 100px; border-radius: 8px;">
    </div>

    <!-- Main Text -->
    <p style="font-size: 14px; margin-bottom: 16px;">Thank you for signing up! Your verification code is:</p>

    <!-- Centered OTP Section -->
    <div style="text-align: center; margin: 24px 0;">
      <div style="font-size: 18px; font-weight: bold; color: #6b46c1; margin-bottom: 16px;">Your OTP</div>
      <p style="background-color: #6b46c1; color: white; font-size: 16px; font-weight: 600; padding: 12px 24px; border: none; border-radius: 4px; ">
        {verificationCode}
      </>
    </div>

    <!-- Additional Instructions -->
    <p style="font-size: 14px; margin-bottom: 8px;">Enter this code on the verification page to complete your registration.</p>
    <p style="font-size: 12px; color: #757575; margin-bottom: 8px;">This code will expire in 15 minutes for security reasons.</p>
    <p style="font-size: 12px; color: #757575; margin-bottom: 8px;">If you didn't create an account with us, please ignore this email.</p>

    <!-- Footer Section with Watermark -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px;">
      <p style="font-size: 12px; color: #757575; margin: 0;">
        Best regards,<br>
        <span style="color: #6b46c1; font-weight: bold;">RouletteRise</span>
      </p>
      <img src="https://res.cloudinary.com/dmd5xjtit/image/upload/v1733136588/RouletteRise_Transperent_Logo_rhaaxk.png" alt="Watermark" style="opacity: 0.1; width: 80px; height: 80px;">
    </div>
  </div>

  <!-- Footer Section -->
  <div style="text-align: center; color: #757575; font-size: 12px; margin-top: 24px;">
    <p style="margin: 0;">This is an automated message, please do not reply to this email.</p>
  </div>

</body>
</html>


`;

export const EMAIL_VERIFIED_WELCOME_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification Welcome</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9fafb;
      color: #374151;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .header {
      background: linear-gradient(to right, #6366f1, #8b5cf6);
      text-align: center;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .header img {
      display: inline-block;
      max-width: 100px;
      height: auto;
      margin: 0 10px;
    }

    .content {
      padding: 24px;
      text-align: center;
    }

    .content h1 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    .content p {
      font-size: 16px;
      margin: 8px 0;
    }

    .button-container {
      margin: 24px 0;
    }

    .button-container a {
      background-color: #2563eb;
      color: #ffffff;
      font-size: 16px;
      font-weight: bold;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 9999px;
      display: inline-block;
      transition: background-color 0.3s ease;
    }

    .button-container a:hover {
      background-color: #1e40af;
    }

    .gif-container {
      margin: 24px 0;
      text-align: center;
    }

    .gif-container img {
      max-width: 100px;
      height: auto;
    }

    .footer {
      font-size: 14px;
      color: #6b7280;
      text-align: center;
      padding: 16px;
      border-top: 1px solid #e5e7eb;
    }

    .footer a {
      color: #2563eb;
      text-decoration: none;
    }

    .footer a:hover {
      text-decoration: underline;
    }

    @media (max-width: 480px) {
      .header img {
        max-width: 70px;
      }

      .content h1 {
        font-size: 20px;
      }

      .button-container a {
        padding: 10px 20px;
        font-size: 14px;
      }

      .gif-container img {
        max-width: 70px;
      }
    }
  </style>
</head>
<body>
  <!-- Main Container -->
  <div class="container">
    <!-- Header -->
    <div class="header">
      <img src="https://res.cloudinary.com/dmd5xjtit/image/upload/v1733136588/RouletteRise_Transperent_Logo_rhaaxk.png" alt="Logo">
      <img src="https://steemitimages.com/DQmdVHQF3kaK5DYKmJWJ2JQ29d8QGUjWcApx5zWTMtRBEci/Welcome.png" alt="Welcome">
    </div>

    <!-- Body Content -->
    <div class="content">
      <h1>Welcome to Our Platform!</h1>
      <p>We’re excited to have you on board. Please verify your email to complete your registration.</p>
      
      <div class="button-container">
        <p>Hi {name},</p>
        <p>Thank you for signing up! To complete your registration, click the button below to verify your email.</p>
        <a href="[Verification Link]"> Your Email Verified</a>
      </div>

      <!-- GIF -->
      <div class="gif-container">
        <img src="https://handshakestudios.com/wp-content/uploads/2018/04/handshake_icon_broshake_v15.gif" alt="Handshake GIF">
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>If you didn’t sign up, please ignore this email.</p>
      <p>Need help? <a href="mailto:rouletterise@gmail.com">Contact us</a></p>
    </div>
  </div>
</body>
</html>


`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f3f4f6;
      color: #374151;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 30px auto;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      position: relative;
    }

    .container::after {
      content: '';
      position: absolute;
      bottom: 70px;
      right: 30px;
      width: 100px;
      height: 100px;
      background-image: url('https://res.cloudinary.com/dmd5xjtit/image/upload/v1733136588/RouletteRise_Transperent_Logo_rhaaxk.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      opacity: 0.1;
    }

    .header {
      background: linear-gradient(to right, #6366f1, #8b5cf6);
      padding: 24px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .header img {
      height: 64px;
      margin-right: 12px;
    }

    .header a {
      color: #ffffff;
      font-size: 24px;
      font-weight: bold;
      text-decoration: none;
    }

    .content {
      padding: 24px;
    }

    .content p {
      font-size: 16px;
      margin: 12px 0;
      color: #4b5563;
    }

    .button-container {
      text-align: center;
      margin: 32px 0;
    }

    .button-container a {
      background-color: #a855f7;
      color: #ffffff;
      font-size: 16px;
      font-weight: bold;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 8px;
      display: inline-block;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease;
    }

    .button-container a:hover {
      background-color: #9333ea;
    }

    .footer {
      text-align: center;
      background-color: #f9fafb;
      padding: 16px;
      font-size: 14px;
      color: #6b7280;
    }
  </style>
</head>
<body>
  <!-- Password Reset Section -->
  <div class="container">
    <!-- Header Section -->
    <div class="header">
      <!-- Logo -->
      <img src="https://res.cloudinary.com/dmd5xjtit/image/upload/v1733136588/RouletteRise_Transperent_Logo_rhaaxk.png" alt="Logo">
      <!-- Password Reset Text -->
      <span  style="text-decoration: none;font-size: 30px; color:#ffffff; font-weight: bold;">Password Reset</span>
    </div>

    <!-- Body Content -->
    <div class="content">
      <p>Hello,</p>
      <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>

      <!-- Reset Password Button -->

     <div style="text-align: center; margin: 30px 0;">
       <a href="{resetURL}" style="background-color: #5d02b2; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
     </div>
      <p>This link will expire in 1 hour for security reasons.</p>
      <p>
        Best regards,<br>
        <strong style="color: #6b21a8;">RouletteRise</strong>
      </p>
    </div>

    <!-- Footer -->
    <div class="footer">
      This is an automated message. Please do not reply to this email.
    </div>
  </div>
</body>
</html>

`;

export const ROULETTE_PLAN_ACTIVATED_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <title>DD Roulette plan activation email</title>
  <style>
    /* CSS Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: Arial, sans-serif;
      background-color: #f7fafc;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }
    img {
      display: block;
      border: 0;
    }
    a {
      text-decoration: none;
      transition: background-color 0.3s ease;
    }
    a:hover {
      background-color: #805ad5;
    }
    h1, h2, h3, p {
      margin-bottom: 16px;
    }
    ul {
      margin-top: 8px;
      padding-left: 24px;
    }
    li {
      margin-bottom: 8px;
    }
    .button {
      display: inline-flex;
      align-items: center;
      padding: 12px 24px;
      background-color: #6b46c1;
      color: #fff !important;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease;
    }
    .button i {
      font-size: 24px;
      margin-right: 8px;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(to right, #4c51bf, #9f7aea);
      padding: 16px 24px;
      height: 100px;
      gap: 16px;
    }
    .header img {
      height: 48px;
    }
    .header h1 {
      font-size: 20px;
      color: white;
      font-weight: bold;
      margin: 0;
    }
  </style>
</head>
<body>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7fafc; padding: 20px 0;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color: #fff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td class="header">
              <img src="https://res.cloudinary.com/dmd5xjtit/image/upload/v1733136588/RouletteRise_Transperent_Logo_rhaaxk.png" alt="Logo">
              <h1>Plan activation success</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px 8px 24px;">
              <h1 style="font-size: 16px; font-weight: 500;">Dear <strong>[USER_NAME],</strong></h1>
              <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">Thank you for subscribing to <strong>[GAME_NAME]</strong>. Your <strong>[SUBSCRIPTION_TYPE]</strong> subscription has been activated at <strong>[ACTIVATED_DATE] , [ACTIVATED_TIME]</strong> and you now have access to all the premium features. If the subscription status isn’t showing as active, please refresh the page to update it.</p>
              <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">To help you get started, I highly recommend watching this detailed video that explains the entire system. It will guide you on how to use the features effectively and make informed decisions in real-time before placing your bets.</p>
              <div style="margin-bottom: 16px;">
                <a href="https://youtu.be/4U9XHEjYnso" target="_blank" class="button">
                  <i class="fa-brands fa-youtube"></i>
                  Watch on YouTube
                </a>
              </div>
              <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">You can also learn more about the <strong>SpinCycle feature</strong> from the Help section in the app’s menu.</p>
              <h2 style="font-size: 20px; font-weight: 600; margin-top: 24px;">We’re thrilled to announce that:</h2>
              <div style="background-color: #f7fafc; padding: 16px; border-radius: 8px;">
                <h3 style="font-size: 20px; font-weight: 600; color: #6b46c1; margin-bottom: 16px;">Exciting Updates Are Here!</h3>
                <ul style="color: #4a5568; font-size: 16px; line-height: 1.6;">
                  <li>The new money management system and daily profit plan are now live, helping you optimize your strategy like never before.</li>
                  <li>Our Baccarat Application has been successfully launched, delivering a groundbreaking addition to revolutionize the Baccarat industry.</li>
                </ul>
                <a href="https://youtu.be/WXIMi97L3Cg" target="_blank" class="button" style="margin-top: 16px;">
                  <i class="fa-brands fa-youtube"></i>
                  Watch on YouTube
                </a>
                <p style="color: #4a5568; font-size: 16px; line-height: 1.6; margin-top: 16px;">Experience the impact of this game-changing release now!</p>
              </div>
              <p style="color: #4a5568; font-size: 16px; line-height: 1.6; margin-top: 16px;">Thank you again for choosing us. Wishing you great wins ahead!</p>
              <p style="font-weight: bold; font-size: 16px; margin-top: 16px;">Warm regards,</p>
              <p style="font-weight: bold; font-size: 16px; color: #6b46c1;">RouletteRise</p>
            </td>
          </tr>
          <tr>
            <td style="text-align: center; padding-bottom: 16px;">
              <a href="https://t.me/rouletterisee" target="_blank" class="button" style="border-radius: 9999px;">
                <i class="fa-brands fa-telegram"></i>
                Join our Telegram
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

export const BACCARAT_PLAN_ACTIVATED_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <title>Baccarat plan activation email</title>
  <style>
    /* CSS Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: Arial, sans-serif;
      background-color: #f7fafc;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }
    img {
      display: block;
      border: 0;
    }
    a {
      text-decoration: none;
      transition: background-color 0.3s ease;
    }
    a:hover {
      background-color: #805ad5;
    }
    h1, h2, h3, p {
      margin-bottom: 16px;
    }
    ul {
      margin-top: 8px;
      padding-left: 24px;
    }
    li {
      margin-bottom: 8px;
    }
    .button {
      display: inline-flex;
      align-items: center;
      padding: 12px 24px;
      background-color: #6b46c1;
      color: #fff !important;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease;
    }
    .button i {
      font-size: 24px;
      margin-right: 8px;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(to right, #4c51bf, #9f7aea);
      padding: 16px 24px;
      height: 100px;
      gap: 16px;
    }
    .header img {
      height: 48px;
    }
    .header h1 {
      font-size: 20px;
      color: white;
      font-weight: bold;
      margin: 0;
    }
  </style>
</head>
<body>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7fafc; padding: 20px 0;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color: #fff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td class="header">
              <img src="https://res.cloudinary.com/dmd5xjtit/image/upload/v1733136588/RouletteRise_Transperent_Logo_rhaaxk.png" alt="Logo">
              <h1>Plan activation success</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px 8px 24px;">
              <h1 style="font-size: 16px; font-weight: 500;">Dear <strong>[USER_NAME],</strong></h1>
              <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">Thank you for subscribing to <strong>[GAME_NAME]</strong>. Your <strong>[SUBSCRIPTION_TYPE]</strong> subscription has been activated at <strong>[ACTIVATED_DATE] , [ACTIVATED_TIME]</strong> and you now have access to all the premium features. If the subscription status isn’t showing as active, please refresh the page to update it.</p>
              <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">To help you get started, I highly recommend watching this detailed video that explains the entire system. It will guide you on how to use the features effectively and make informed decisions in real-time before placing your bets.</p>
              <div style="margin-bottom: 16px;" style="color: #fff;">
                <a href="https://www.youtube.com/watch?v=_FX-4f32pVE" target="_blank"
  style="
    display: inline-flex; 
    align-items: center; 
    padding: 12px 24px; 
    background-color: #6b46c1; 
    color: #fff !important; 
    border-radius: 8px; 
    font-size: 16px; 
    font-weight: bold; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    text-decoration: none; 
    text-align: center;"
>
  <i class="fa-brands fa-youtube" style="font-size: 24px; margin-right: 8px; color: #fff !important;"></i>
  Watch on YouTube
</a>

              </div>
              <h2 style="font-size: 20px; font-weight: 600; margin-top: 24px;">We’re thrilled to announce that:</h2>
              <div style="background-color: #f7fafc; padding: 16px; border-radius: 8px;">
                <h3 style="font-size: 20px; font-weight: 600; color: #6b46c1; margin-bottom: 16px;"> Printing Money 💰💰💰 </h3>
                <ul style="color: #4a5568; font-size: 16px; line-height: 1.6;">
                  <li>We’re starting a 30-Day Challenge to grow <strong>€250</strong> into <strong>€4500</strong> using BaccaratBoost. Want to join the league? Message us on Telegram: <strong>@RouletteRise</strong></li>
                  <li>new launch of Hit & Run Baccarat strategy</li>
                </ul>
                <p style="color: #4a5568; font-size: 16px; line-height: 1.6; margin-top: 16px;">Experience the impact of this game-changing release now!</p>
              </div>
              <p style="color: #4a5568; font-size: 16px; line-height: 1.6; margin-top: 16px;">Thank you again for choosing us. Wishing you great wins ahead!</p>
              <p style="font-weight: bold; font-size: 16px; margin-top: 16px;">Warm regards,</p>
              <p style="font-weight: bold; font-size: 16px; color: #6b46c1;">RouletteRise</p>
            </td>
          </tr>
          <tr>
            <td style="text-align: center; padding-bottom: 16px;">
              <a href="https://t.me/rouletterisee" target="_blank" class="button" style="border-radius: 999px; text-decoration: none;color:#fff">
                <i class="fa-brands fa-telegram"></i>
                Join our Telegram
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
  <style>
    body {
      background-color: #f3f4f6;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
      color: #1f2937;
    }

    .container {
      background: linear-gradient(to right, #6b46c1, #4c51bf);
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.25rem;
    }

    .header img {
      width: 80px;
      height: 80px;
    }

    .header h1 {
      color: white;
      font-size: 1.25rem;
      font-weight: bold;
      margin-left: 1.25rem;
      flex-grow: 1;
      text-align: left;
    }

    .content {
      background-color: white;
      padding: 1.5rem;
      border-radius: 0 0 0.5rem 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      position: relative;
    }

    .content p {
      margin-bottom: 1rem;
    }

    .success-animation {
      display: flex;
      justify-content: center;
      margin: 1.5rem 0;
    }

    .success-animation img {
      width: 6rem;
      height: 6rem;
    }

    ul {
      list-style-type: disc;
      padding-left: 1.25rem;
      margin-bottom: 1rem;
    }

    .watermark {
      position: absolute;
      top: 20rem;
      right: 1.25rem;
      opacity: 0.1;
      width: 6rem;
      height: 6rem;
    }

    .text-purple {
      color: #6b46c1;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      .header img {
        width: 64px;
        height: 64px;
      }

      .header h1 {
        font-size: 1rem;
        margin-left: 1rem;
      }

      .watermark {
        width: 5rem;
        height: 5rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header Section -->
    <div class="header">
      <img src="https://res.cloudinary.com/dmd5xjtit/image/upload/v1733136588/RouletteRise_Transperent_Logo_rhaaxk.png" 
           alt="Logo">
      <h1>Password Reset Successfully</h1>
    </div>

    <!-- Content Body -->
    <div class="content">
      <p>Hello,</p>
      <p>We're writing to confirm that your password has been successfully reset.</p>

      <!-- Success Animation -->
      <div class="success-animation">
        <img src="https://bitspanindia.com/WL-CNT/main/assest/img/success.gif" 
             alt="Verified">
      </div>

      <p>If you did not initiate this password reset, please contact our support team immediately.</p>
      <p>For security reasons, we recommend that you:</p>
      <ul>
        <li>Use a strong, unique password</li>
        <li>Avoid using the same password across multiple sites</li>
      </ul>
      <p>Thank you for helping us keep your account secure.</p>
      <p>Best regards,<br>
        <span class="text-purple">RouletteRise</span>
      </p>

      <!-- Watermark -->
      <img src="https://res.cloudinary.com/dmd5xjtit/image/upload/v1733136588/RouletteRise_Transperent_Logo_rhaaxk.png" 
           alt="Watermark" 
           class="watermark">
    </div>
  </div>
</body>
</html>


`;

export const ADMIN_MAIL_TEMPLATE = (subject,userName,dynamicBody)=>{
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="background-color: #f3f4f6; max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; color: #1f2937;">

  <div style="background: linear-gradient(to right, #6b46c1, #4c51bf); border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
    
    <!-- Header Section -->
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.25rem;">
      <img src="https://res.cloudinary.com/dmd5xjtit/image/upload/v1733136588/RouletteRise_Transperent_Logo_rhaaxk.png" alt="Logo" style="width: 80px; height: 80px;">
      <h1 style="color: white; font-size: 1.25rem; font-weight: bold; margin-left: 1.25rem; flex-grow: 1; margin-left:65px">Greetings from RouletteRise</h1>
    </div>

    <!-- Content Body -->
    <div style="background-color: white; padding: 1.5rem; border-radius: 0 0 0.5rem 0.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); position: relative;">
      <p style="margin-bottom: 1rem;">Hello, ${userName}</p>
      <div style="margin-bottom: 1rem;">${dynamicBody}</div> 

      <p style="margin-bottom: 1rem;">Best regards,<br>
        <span style="color: #6b46c1; font-weight: bold;">RouletteRise</span>
      </p>

      <!-- Watermark -->
      <img src="https://res.cloudinary.com/dmd5xjtit/image/upload/v1733136588/RouletteRise_Transperent_Logo_rhaaxk.png" alt="Watermark" style="position: absolute; top: 20rem; right: 1.25rem; opacity: 0.1; width: 6rem; height: 6rem;">
    </div>
  </div>
</body>
</html>
  `
}




export const PLAN_EXPIRED_TEMPLATE = (subject,userName,gameName,planName) =>{
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="background-color: #f3f4f6; margin: 0; padding: 20px; font-family: Arial, sans-serif; color: #1f2937; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">

  <div style="max-width: 600px; margin: 0 auto;">
    <div style="background: linear-gradient(to right, #6b46c1, #4c51bf); border-radius: 8px 8px 0 0; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); padding: 20px;">
      
      <!-- Header Section -->
      <div style="display: flex; align-items: center; justify-content: center; padding: 10px;">
        <img src="https://res.cloudinary.com/dmd5xjtit/image/upload/v1733136588/RouletteRise_Transperent_Logo_rhaaxk.png" alt="Logo" style="width: 60px; height: 60px; display: block;">
        <h1 style="color: white; font-size: 24px; font-weight: bold; margin: 0 0 0 20px;">RouletteRise</h1>
      </div>
    </div>

    <!-- Content Body -->
    <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); position: relative;">
      <p style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5;">Dear ${userName},</p>
      
      <!-- Main Message -->
      <div style="text-align: center; margin-bottom: 5px;">
        <h2 style="color: #6b46c1; margin: 0 0 15px 0; font-size: 22px;">Time to Renew Your Journey!</h2>
      </div>

      <p style="margin: 0 0 13px 0; font-size: 16px; line-height: 1.5;">Your subscription plan has come to an end:</p>

      <div style="background-color: #f8f5ff; border-left: 4px solid #6b46c1; padding: 15px; margin: 0 0 10px 0;">
        <p style="margin: 0 0 10px 0; font-weight: bold; color: #6b46c1;">Plan Details:</p>
        <p style="margin: 0;">Game: ${gameName}</p>
        <p style="margin: 0 0 5px 0;">Plan: ${planName}</p>
      </div>

      <!-- Benefits Section -->
      <div style="margin: 10px 0; text-align: center;">
        <h3 style="color: #6b46c1; margin: 0 0 20px 0;">Why Continue with RouletteRise?</h3>
        <div style="display: inline-block; width: 100%; max-width: 500px;">
          <div style="text-align: left; margin-bottom: 15px;">
            <p style="margin: 0 0 10px 0; font-weight: bold;">✨ Premium Features</p>
            <p style="margin: 0; color: #4b5563;">Access to advanced strategies and premium game modes</p>
          </div>
          <div style="text-align: left; margin-bottom: 15px;">
            <p style="margin: 0 0 10px 0; font-weight: bold;">📊 Real-time Analytics</p>
            <p style="margin: 0; color: #4b5563;">Track your progress with detailed statistics</p>
          </div>
          <div style="text-align: left; margin-bottom: 15px;">
            <p style="margin: 0 0 10px 0; font-weight: bold;">🎯 Exclusive Access</p>
            <p style="margin: 0; color: #4b5563;">Special events and community features</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div style="background: linear-gradient(to right, #6b46c1, #4c51bf); border-radius: 8px; padding: 25px; text-align: center; margin: 15px 0;">
        <h3 style="color: white; margin: 0 0 10px 0; font-size: 20px;">Don't Miss Out on the Action!</h3>
        <p style="color: white; margin: 0 0 10px 0;">Renew now and get back in the game with these exclusive features</p>
        <a href="https://gamin01.netlify.app/project1/blackRed" style="display: inline-block; background-color: white; color: #6b46c1; padding: 12px 30px; border-radius: 25px; text-decoration: none; font-weight: bold; font-size: 16px;" target="_blank">Renew Subscription</a>
      </div>

      <!-- Steps to Renew -->
      <div style="margin: 10px 0;">
        <h4 style="color: #6b46c1; margin: 0 0 15px 0;">Quick Steps to Renew:</h4>
        <ol style="margin: 0; padding-left: 20px; line-height: 1.5;">
          <li style="margin-bottom: 10px;">Log into your RouletteRise account</li>
          <li style="margin-bottom: 10px;">Visit the subscription section</li>
          <li style="margin-bottom: 10px;">Choose your preferred plan</li>
          <li style="margin-bottom: 10px;">Complete the payment process</li>
        </ol>
      </div>

      <!-- Warning Box -->
      <div style="background-color: #fdf2f2; border-left: 4px solid #dc2626; padding: 15px; margin: 0 0 10px 0;">
        <p style="margin: 0; font-size: 14px; color: #dc2626;">Note: Without an active subscription, you'll have limited access to features and games.</p>
      </div>

      <!-- Support Section -->
      <div style="margin: 10px 0;">
        <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.5;">Need help? Our support team is available 24/7 to assist you with the renewal process.</p>
      </div>

      <p style="margin: 0 0 5px 0;">Best regards,</p>
      <p style="margin: 0; color: #6b46c1; font-weight: bold;">The RouletteRise Team</p>

      <!-- Watermark -->
      <img src="https://res.cloudinary.com/dmd5xjtit/image/upload/v1733136588/RouletteRise_Transperent_Logo_rhaaxk.png" 
           alt="Watermark" 
           style="position: absolute; bottom: 20px; right: 20px; opacity: 0.1; width: 100px; height: 100px;">
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 20px; font-size: 12px; color: #6b7280;">
      <p style="margin: 0 0 10px 0;">This is an automated message. Please do not reply to this email.</p>
      <p style="margin: 0;">&copy; 2025 RouletteRise. All rights reserved.</p>
    </div>
  </div>

</body>
</html>`
}





// Think Strive Promo Template

// export const ADMIN_MAIL_TEMPLATE = (subject,userName,dynamicBody)=>{
//   return `
//     <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>${subject}</title>
//     <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
//     <style>
//         body {
//             margin: 0;
//             padding: 0;
//             font-family: 'Kanit', sans-serif;
//             background-color: #f0f2f5;
//         }

//         .container {
//             max-width: 600px;
//             margin: 0 auto;
//             background-color: white;
//             box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//         }

//         .header {
//             background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
//             color: white;
//             padding: 25px 22px;
//             text-align: center;
//         }

//         .logo {
//             font-size: 32px;
//             font-weight: bold;
//             margin-bottom: 15px;
//             letter-spacing: 2px;
//             border-bottom: 3px solid #64b5f6;
//             display: inline-block;
//             padding-bottom: 10px;
//         }

//         .tagline {
//             font-size: 20px;
//             line-height: 1.5;
//             margin-bottom: 20px;
//             font-weight: 300;
//         }

//         .content {
//             padding: 20px 20px;
//             background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
//                         url(https://i.pinimg.com/736x/7f/4e/de/7f4ede2f389020ae8d0ceb0b4a07b3ac.jpg);
//             background-size: cover;
//         }

//         .section-title {
//             color: #ffffff;
//             text-align: center;
//             font-size: 28px;
//             margin-bottom: 15px;
//             text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
//         }

//         .features {
//             display: grid;
//             grid-template-columns: repeat(2, 1fr);
//             gap: 20px;
//             margin: 20px;
//         }

//         .feature-card {
//             background: rgba(255, 255, 255, 0.95);
//             border-radius: 16px;
//             box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//             overflow: hidden;
//             margin-bottom: 20px;
//         }

//         .feature-card-figure {
//             padding: 20px 20px 0;
//             margin: 0;
//         }

//         .feature-card-image {
//             width: 100%;
//             height: 150px;
//             object-fit: cover;
//             border-radius: 8px;
//         }

//         .feature-card-body {
//             text-align: center;
//             padding: 15px;
//         }

//         .feature-card-title {
//             font-size: 20px;
//             font-weight: bold;
//             margin-bottom: 10px;
//             color: #1a237e;
//         }

//         .feature-card-text {
//             font-size: 16px;
//             color: #333;
//             margin: 0;
//             line-height: 1.5;
//             font-weight: 700;
//         }

//         .cta-button {
//             display: inline-block;
//             background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
//             color: white;
//             padding: 18px 40px;
//             text-decoration: none;
//             border-radius: 30px;
//             font-weight: bold;
//             margin-top: 30px;
//             text-transform: uppercase;
//             letter-spacing: 1px;
//         }

//         @media (max-width: 768px) {
//             .features {
//                 grid-template-columns: 1fr;
//             }
            
//             .logo {
//                 font-size: 24px;
//             }

//             .tagline {
//                 font-size: 18px;
//             }

//             .section-title {
//                 font-size: 24px;
//             }
//         }
//     </style>
// </head>

// <body>

//     <div class="container">
//      <h1 style="all: unset;font-weight: 500;">Dear <strong style="font-size:22px; "> ${userName}</strong></h1>
//         <div class="header">
//             <div class="header-content">
//                 <div class="logo">
//                     <span style="color: #4a90e2;">Think</span> Strive Solutions
//                 </div>
//                 <div class="tagline">Transforming Your <strong style="font-weight: 700;">IDEAS</strong> into <strong style="font-weight: 700;">REALITY</strong></div>
//                 <div style="font-size: 14px;">⚡ TSS delivers customized solutions to elevate your business to new heights ⚡</div>
//             </div>
//         </div>

//         <div class="content">
//             <h2 class="section-title">
//                 Ready to Elevate Your Business? 
//                 <!-- <img src="https://pngimg.com/uploads/rockets/rockets_PNG101054.png" alt="Rocket Icon" class="rocket-icon"> -->
//             </h2>
            
//             <p style="color: #f7f5f5; line-height: 1.5; text-align: center; font-size: 18px;  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);  ">
//                 <!-- 💡 Have a groundbreaking business idea? Looking for a web or mobile application to kickstart your
//                 venture?
//                 Let TSS transform your vision into reality with our cutting-edge solutions. -->

//                 💡 Need a web or Mobile application for your <strong style="font-size: 1.5rem;color:#4a90e2 ;">start up or existing business</strong>
//             </p>

//             <div class="features">
//                 <div class="feature-card">
//                     <div class="feature-card-figure">
//                         <img src="https://i.pinimg.com/736x/fc/d8/31/fcd8310354601ee5a6f161324cee0ada.jpg" alt="Creative Solution Icon" class="feature-card-image">
//                     </div>
//                     <div class="feature-card-body">
//                         <h2 class="feature-card-title">Perfect Solution</h2>
//                         <p class="feature-card-text" >
//                             Custom-crafted solutions aligned perfectly with your business needs and goals. We deliver excellence, every time. ✨
//                         </p>
//                     </div>
//                 </div>
                
//                 <div class="feature-card">
//                     <div class="feature-card-figure">
//                         <img src="https://i.pinimg.com/736x/99/e5/dc/99e5dc97d7b593defc6ae90064173d47.jpg" alt="Creative Solution Icon" class="feature-card-image">
//                     </div>
//                     <div class="feature-card-body">
//                         <h2 class="feature-card-title">Affordable Pricing</h2>
//                         <p class="feature-card-text">
//                             Premium solutions at competitive rates. We believe in delivering value without compromising on quality. 💰
//                         </p>
//                     </div>
//                 </div>
            
//                 <div class="feature-card">
//                     <div class="feature-card-figure">
//                         <img src="https://i.pinimg.com/736x/42/52/38/425238d09293b2bdb908da6e167823ea.jpg" alt="Creative Solution Icon" class="feature-card-image">
//                     </div>
//                     <div class="feature-card-body">
//                         <h2 class="feature-card-title">Continuous Services</h2>
//                         <p class="feature-card-text">
//                             24/7 support and maintenance to keep your business running smoothly. We're always here for you! ${dynamicBody} 🔧
//                         </p>
//                     </div>
//                 </div>
            
//                 <div class="feature-card">
//                     <div class="feature-card-figure">
//                         <img src="https://cdn2.iconfinder.com/data/icons/seo-development-2/64/THE_BEST_SOLUTION-1024.png" alt="Creative Solution Icon" class="feature-card-image">
//                     </div>
//                     <div class="feature-card-body">
//                         <h2 class="feature-card-title">One Stop Solution</h2>
//                         <p class="feature-card-text">
//                             Your complete technology partner - from planning and development to deployment and maintenance. All under one roof! 🔄
//                         </p>
//                     </div>
//                 </div>
//             </div>
            
            
            

//             <div style="text-align: center;">
//                 <a href="mailto:infothinkstrive@gmail.com" target="_blank" class="cta-button" style="color: #ffffff;">✉️ Enquire Now</a>
//             </div>
//         </div>

//         <!-- <div class="footer">
//             <div style="font-size: 20px; font-weight: bold;">Let's Build Something Amazing Together!</div>
//             <div class="divider"></div>
//             <div class="contact-info">
//                 <div class="contact-item">
//                     <a href="https://www.facebook.com/profile.php?id=61564673224207" target="_blank">
//                         <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" class="social-icon">
//                     </a>
//                 </div>
//                 <div class="contact-item">
//                     <a href="https://www.instagram.com/thinksstrive/" target="_blank">
//                         <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" class="social-icon">
//                     </a>
//                 </div>
//                 <div class="contact-item">
//                     <a href="www.linkedin.com/in/think-strive-349754326" target="_blank">
//                         <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG24.png" alt="LinkedIn" class="social-icon">

//                     </a>
//                 </div>
//                 <div class="contact-item">
//                     <a href="https://wa.me/6374191971?text=Hello%20Think%20Strive" target="_blank">
//                         <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="social-icon">
//                     </a>
//                 </div>
//             </div>
            
//             <div style="margin-top: 20px; font-size: 12px; opacity: 0.8;">
//                 © 2024 Think Strive Solutions. All rights reserved.
//             </div>
//         </div> -->
//     </div>
// </body>
// </html>
//   `
// }

// export const ADMIN_MAIL_TEMPLATE = (subject,userName,dynamicBody)=>{
//   return`
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>${subject}</title>
// </head>
// <body style="background-color: #f3f4f6; max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; color: #1f2937;">
//   <div style="background: linear-gradient(to right, #6b46c1, #4c51bf); border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
//     <!-- Header Section -->
//     <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.25rem;">
//       <img src="https://res.cloudinary.com/dmd5xjtit/image/upload/v1733136588/RouletteRise_Transperent_Logo_rhaaxk.png" alt="Logo" style="width: 80px; height: 80px;">
//       <h1 style="color: white; font-size: 1.25rem; font-weight: bold; margin-left: 1.25rem; flex-grow: 1; margin-left:65px">Greetings from RouletteRise</h1>
//     </div>

//     <!-- Banner Image -->
//     <div style="width: 100%; max-height: 300px; overflow: hidden;">
//       <img src="https://res.cloudinary.com/dxsdme4qy/image/upload/v1735647246/endofsale_spnjti.jpg" alt="End of Sale Banner" style="width: 100%; height: auto; display: block;">
//     </div>

//     <!-- Content Body -->
//     <div style="background-color: white; padding: 1.5rem; border-radius: 0 0 0.5rem 0.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); position: relative;">
//       <h2 style="color: #6b46c1; font-size: 1.5rem; text-align: center; margin-bottom: 1.5rem;">🎉 Important Announcement for Roulette & Baccarat Lovers! 🎉</h2>
//       <p style="font-size: 1.1rem; margin-bottom: 1rem;font-weight: bold;">Dear ${userName}</p>
//       <p style="font-size: 1.1rem; margin-bottom: 1rem;">Hello, RouletteRisers and BaccaratBoosters! 🚀</p>
      
//       <p style="margin-bottom: 1rem;">Starting TOMORROW, January 1st, subscription prices for RouletteRise and BaccaratBoost will be updated to the following: ${dynamicBody}</p>

//       <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
//         <h3 style="color: #6b46c1; margin-bottom: 0.5rem;">🎰 RouletteRise Plans (New Pricing):</h3>
//         <p style="margin: 0.5rem 0;">💎 48-Hour Pass: $24</p>
//         <p style="margin: 0.5rem 0;">💎 Monthly Plan: $300</p>
        
//         <h4 style="color: #4c51bf; margin: 1rem 0 0.5rem;">🌟 Features:</h4>
//         <p style="margin: 0.25rem 0;">✅ Data-Driven Roulette Tracker</p>
//         <p style="margin: 0.25rem 0;">✅ SpinCycle Strategy</p>
//         <p style="margin: 0.25rem 0;">✅ NEW! SMART BET SELECTION & DEALER CHANGE FEATURE, launching tomorrow!</p>
//       </div>

//       <div style="background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
//         <h3 style="color: #6b46c1; margin-bottom: 0.5rem;">🔮 BaccaratBoost Plans (New Pricing):</h3>
//         <p style="margin: 0.5rem 0;">💎 48-Hour Pass: $50</p>
//         <p style="margin: 0.5rem 0;">💎 Monthly Plan: $500</p>
//         <p style="margin: 0.5rem 0;">🎯 Includes Core Strategy, Hit & Run, and the all-new "PowerPlay Strategy," launching the 1st week of January!</p>
//       </div>

//       <p style="font-weight: bold; color: #dc2626; margin: 1.5rem 0;">💥 Take advantage of today's lower prices before midnight tonight!</p>
      
//       <p style="margin-bottom: 1.5rem;">This is your last chance to lock in the current prices before the update. Don't miss out on starting 2025 with game-changing tools to dominate Roulette and Baccarat.</p>

//       <!-- CTA Button -->
//       <div style="text-align: center; margin: 2rem 0;">
//         <a href="https://rouletterise.com" target="_blank" style="display: inline-block; background: linear-gradient(to right, #6b46c1, #4c51bf); color: white; padding: 1rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: transform 0.2s;">
//           👉 Sign up today at RouletteRise.com
//         </a>
//       </div>

//       <p style="text-align: center; font-size: 1.2rem; font-weight: bold; color: #6b46c1; margin-top: 2rem;">Let's Rise! 🚀</p>

//       <!-- Signature -->
//       <p style="margin-top: 2rem;">Best regards,<br>
//         <span style="color: #6b46c1; font-weight: bold;">RouletteRise</span>
//       </p>

//       <!-- Watermark -->
//       <img src="https://res.cloudinary.com/dmd5xjtit/image/upload/v1733136588/RouletteRise_Transperent_Logo_rhaaxk.png" alt="Watermark" style="position: absolute; bottom: 1.25rem; right: 1.25rem; opacity: 0.1; width: 6rem; height: 6rem;">
//     </div>
//   </div>
// </body>
// </html>


//   `
// }


