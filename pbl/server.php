<?php

$name = '';
$email = '';
$password = '';
$_SESSION['success'] = "";

$errors=array();

$db = mysqli_connect('localhost', 'root', '', 'rentmyhouse');

if($db->connect_error){
    echo "Error Connecting Database...";
}

if(isset($_POST['login'])){
    $email = mysqli_real_escape_string($db, $_POST['email']);
    $password = mysqli_real_escape_string($db, $_POST['password']);
    $password = md5($password);
    $sql = "SELECT * FROM user WHERE email='$email' AND Password='$password'";
    $result = $db->query($sql);
    if ($result->num_rows>0) {
        $_SESSION['email'] = $email;
        echo ('<script LANGUAGE="JavaScript">
        swal("Welcome!", "You have Successfully Logged In", "success");
        </script>');
    }
    else {
        ?>
      <script LANGUAGE='JavaScript'>
          alert("Incorrect Email or password");
      </script>
  <?php
      }
  }


if(isset($_POST['register'])){
    $name = mysqli_real_escape_string($db, $_POST['name']);
    $email = mysqli_real_escape_string($db, $_POST['email']);
    $password = mysqli_real_escape_string($db, $_POST['password']);
    $password = md5($password);
    
    $sql = "SELECT * FROM user WHERE email='$email'";
    $result = $db->query($sql);
    if($result->num_rows>0){
      echo ("<script LANGUAGE='JavaScript'>
      window.alert('Email already Registered');
      window.location.href='index.php';
      </script>");
    }
    else{
        $sql = "INSERT INTO user(name,email,Password) VALUES('$name','$email','$password')";

        if ($db->query($sql) === true) {
          $_SESSION['email'] = $email;
          echo ("<script LANGUAGE='JavaScript'>
          window.alert('You have Successfully Registered and Logged in');
          window.location.href='index.php';
          </script>");
            
        }
    }
}