<?php 

$name = $_POST['name'];
$phone = $_POST['tel'];
$data = $_POST['quiz-data'];

$dir = dirname(__DIR__, 2);

$lastNumber = basename($dir);


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'botmail@gmail.com';                 // Логин от почты , с которой будет происходить отправка
$mail->Password = 'botmailpassword';                            // Пароль от почты , с которой будет происходить отправка
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('botmail@gmail.com', 'Заявки сайта');   // От кого письмо 
$mail->addAddress('clientmail@gmail.com');    // почта, на которую будет отправка
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = 'Заявка с ' . $lastNumber . ' <br> 
Имя:  ' . $name .  ' <br>
Телефон:  ' . $phone . ' <br>
Тест: <br>' . $data . '';


if(!$mail->send()) {
	echo "Ошибка";
} 
?>