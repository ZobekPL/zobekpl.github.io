<?php
  $to      = "tymekcierzan@gmail.com";
  $subject = $_POST["title"];
  $message = $_POST["message"];
  $headers = "From: " . $_POST["email"] . "\r\n" .
      "Reply-To: " . $_POST["email"] . "\r\n" .
      "X-Mailer: PHP/" . phpversion();

  mail($to, $subject, $message, $headers);
?>
