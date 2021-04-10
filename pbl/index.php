<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <title>Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">-->
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" href="./css/style.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" href="./css/animate.css" />
    <!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
    <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css">
    <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
    <!--===============================================================================================-->	
        <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
    <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
    <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
    <!--===============================================================================================-->	
        <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
    <!--===============================================================================================-->
        <link rel="stylesheet" type="text/css" href="css/util.css">
        <link rel="stylesheet" type="text/css" href="css/main.css">
    <!--===============================================================================================-->
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700" rel="stylesheet">
    <script src="./js/modernizr-3.5.0.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</head>
<body>
<?php
    include("navbar.php");
?>
<div>
    <img class="banner d-none d-sm-block" src="img/banner.jpg">
    <div class="banner-text d-none d-sm-block animate-box" data-animate-effect="fadeInLeft">
        <h2>We help you <br> to Find Your Dream Home</h2>
        <div style="width: 45%">Get amazing results working with the best designers, developers and other top
            pros.
            Powered by RentMyHouse.com<br><br>
            <a href="all-property.php" class="btn btn-banner">CHECK OUR PRICES</a>
        </div>
    </div>

</div>
<div>
    <div class="row aft-banner">
        <div class="col-sm-1"></div>
        <div class="col-sm-2 d-none d-sm-block">
            <div class="g-box">Find your<br><b>Dream Property</b></div>
        </div>
        <div class="col-sm-4">
            <div class="domains">Find your dream home</div>
            <div class="text-center orange"><i class="fa fa-arrow-circle-right"></i>  Across 29 states over India</div>
        </div>
        <div class="col-sm-4">
                <form action="" class="input-group">
                    <input type="text" class="form-control dark-bg" placeholder="City">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary btn-org" type="Submit">Go</button>
                    </div>
                </form>
        </div>
    </div>
</div>
<?php
    include("property-list.php");
    include("features.php")
?>

<div>
    <div class="wordpress-bg text-center animate-box" data-animate-effect="fadeInUpBig">
        <div><h2 class="text-org">WE PROVIDE BEST HOUSES ALL OVER INDIA</h2></div>
        <br>
        <button class="btn btn-banner">LEARN MORE</button>
    </div>
</div>
<br><br><br>


<?php
    include("review.php");
    include("contact.php");
    include("footer.php")
?>


<!--<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>-->
<script src="./js/jquery.min.js"></script>
<!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>-->
<script src="./js/bootstrap.min.js"></script>
<!--<script src="https://use.fontawesome.com/8e45396e2e.js"></script>-->
<script src="./js/fontawesome.js"></script>
<script src="./js/jquery.waypoints.min.js"></script>
<script src="./js/animate.js"></script>

</body>
</html>
