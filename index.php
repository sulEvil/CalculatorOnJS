<!DOCTYPE html>
<html lang="en">

<head>
    <script src="scripts/jquery-3.6.0.min.js"></script>
    <script src="scripts/calculator.js"></script>
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="styles/calculator.css">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEOW</title>
</head>
<body>
<header>
    <div class="header_title">My projects</div>
    <!-- nav menu -->
    <div class="nav">

        <!-- title -->
        <div class="title_nav">Навигация</div>
        <!-- end title end -->

        <!-- items nav menu -->
        <div class="item_nav"><a href="">Калькулятор</a></div>
        <!-- end items nav menu -->
    </div>

    <!-- nav for telephone -->
    <div class="nav_telephone">
        <div class="dropdown">
            <div id="myDropdown" class="dropdown-content">
                <a href="#">Калькулятор</a>
            </div>
        </div>
    </div>
    <!-- end nav for telephone -->

    <!-- end nav menu -->
</header>
<div class="cnt">
<!-- calculator -->
 <div class="calculator">
     <form name="calc" class="wrapper">
         <table class="main">
             <tr class="display">
                 <td colspan="4"><input id="displayCalculator" value = ""; readonly autocomplete="off" type="text" maxlength="18" name="input"></td>
             </tr>
             <tr class="buttons">
                 <td><input type="button" class="mainCalculateButton" id="clear_string" value="C" ></td>
                 <td><input type="button" class="mainCalculateButton" value="Sqrt" id="square"  ></td>
                 <td><input type="button" class="mainCalculateButton" value="√" id="theroot" ></td>
                 <td><input type="button" class="mainCalculateButton" value="/" id="divide"  ></td>
             </tr>
             <tr class="buttons">
                 <td><input type="button" class="calculateButton" value="7" id="plusSeven"></td>
                 <td><input type="button" class="calculateButton" value="8" id="plusEight" ></td>
                 <td><input type="button" class="calculateButton" value="9" id="plusNine" ></td>
                 <td><input type="button" class="mainCalculateButton" value="x" id="multiply" ></td>
             </tr>
             <tr class="buttons">
                 <td><input type="button" class="calculateButton" value="4" id="plusFour" ></td>
                 <td><input type="button" class="calculateButton" value="5" id="plusFive" ></td>
                 <td><input type="button" class="calculateButton" value="6" id="plusSix" ></td>
                 <td><input type="button" class="mainCalculateButton" value="-" id="minus" ></td>
             </tr>
             <tr class="buttons">
                 <td><input type="button" class="calculateButton" value="1" id="plusOne" ></td>
                 <td><input type="button" class="calculateButton" value="2" id="plusTwo" ></td>
                 <td><input type="button" class="calculateButton" value="3" id="plusThree" ></td>
                 <td rowspan="2"><input class="mainCalculateButton" style="height:130px" id="plus" type="button" value="+"></td>
             </tr>
             <tr class="buttons">
                 <td><input type="button" class="calculateButton" value="0" id="plusZero" "></td>
                 <td><input type="button" value="." id="plusPoint" ></td>
                 <td><input type="button" class="mainCalculateButton" value="=" id="equal" ></td>
             </tr>
         <table>
     </form>
 </div>
<!-- calculator -->
</div>
</body>
</html>