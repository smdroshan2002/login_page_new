<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $secret = "6LeI2_UqAAAAAOjTjm8eLPJuIKkI3P8Fpzpyz4dc"; // Replace with your Secret Key
    $response = $_POST["g-recaptcha-response"];
    $remoteip = $_SERVER["REMOTE_ADDR"];

    $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$remoteip";
    $verify = file_get_contents($url);
    $captcha_success = json_decode($verify);

    if ($captcha_success->success) {
        echo "Captcha verified successfully!";
        // Proceed with login
    } else {
        echo "Captcha verification failed. Please try again.";
    }
}
?>
