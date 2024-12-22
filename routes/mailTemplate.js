
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


