$(document).ready(function() {
    let position = 0;
    let tempString = "";
    let tempString2= "";
    let currentSymbolOfOperation = "";


    $("#clear_string").click(function (e) {
        position = 0;
        tempString = "";
        tempString2= "";
        $('#displayCalculator').prop("value", "");
        }
    );
    $("#square").click(function (e) {
        $("#displayCalculator").css("color","transparent");
            parseFloat(tempString);
            tempString *= tempString;
            $("#displayCalculator").val("");
            $("#displayCalculator").val($("#displayCalculator").val() + tempString );
            setTimeout(() => {$("#displayCalculator").css("color","black");}, 100);
}
);
    $("#theroot").click(function (e) {
        $("#displayCalculator").css("color","transparent");
            parseFloat(tempString);
            tempString = Math.sqrt(tempString);
            $('#displayCalculator').val("");
            $("#displayCalculator").val($("#displayCalculator").val() + tempString );
            setTimeout(() => {$("#displayCalculator").css("color","black");}, 100);
        });
    $("#divide").click(function (e) {
        $("#displayCalculator").css("color","transparent");
        currentSymbolOfOperation = "/";
        if(position === 0) {
            position = 1;
        };
        if(position === 2) {
            parseFloat(tempString);
            parseFloat(tempString2);
            $('#displayCalculator').val(parseFloat(tempString) / parseFloat(tempString2));
            tempString = parseFloat(tempString) / parseFloat(tempString2);
            tempString2 = "";
            position = 1;
        }
        setTimeout(() => {
            $("#displayCalculator").css("color","black");
        }, 100);
        }
    );
    $("#plusSeven").click(function (e) {
        if (position === 1) {
            tempString2 = tempString;
            tempString = "";
            $('#displayCalculator').val("");
            tempString += "7";
            $("#displayCalculator").css("color","transparent");
            $('#displayCalculator').val($('#displayCalculator').val() + "7");
            position = 2;
            setTimeout(() => {
                $("#displayCalculator").css("color","black");
            }, 100);
        } else {
            tempString += "7";
            $('#displayCalculator').val($('#displayCalculator').val() + "7");
        };

        }
    );
    $("#plusEight").click(function (e) {
        if (position === 1) {
            tempString2 = tempString;
            tempString = "";
            $("#displayCalculator").css("color","transparent");
            $('#displayCalculator').val("");
            tempString += "8";
            $('#displayCalculator').val($('#displayCalculator').val() + "8");
            position = 2;
            setTimeout(() => {
                $("#displayCalculator").css("color","black");
            }, 100);
        } else {
            tempString += "8";
            $('#displayCalculator').val($('#displayCalculator').val() + "8");
        };


        }

    );
    $("#plusNine").click(function (e) {
        if (position === 1) {
            tempString2 = tempString;
            tempString = "";
            $('#displayCalculator').val("");
            tempString += "9";
            $("#displayCalculator").css("color","transparent");

            $('#displayCalculator').val($('#displayCalculator').val() + "9");
            position = 2;

            setTimeout(() => {  $("#displayCalculator").css("color","black"); });

        } else {
            tempString += "9";
            $('#displayCalculator').val($('#displayCalculator').val() + "9");
        };
        }
    );
    $("#multiply").click(function (e) {
        currentSymbolOfOperation = "*";
        if(position === 0) {
            position = 1;
        };
        if(position === 2) {

            if(!tempString2) {
                $('#displayCalculator').val(parseFloat(tempString));
            };

            parseFloat(tempString);
            parseFloat(tempString2);
            $('#displayCalculator').val(parseFloat(tempString) * parseFloat(tempString2));
            tempString = parseFloat(tempString) * parseFloat(tempString2);
            tempString2 = "";
            position = 1;
        }
        $("#displayCalculator").css("color","transparent");


        setTimeout(() => {
            $("#displayCalculator").css("color","black");
        }, 100);
        }
    );
    $("#plusFour").click(function (e) {
        if (position === 1) {
            tempString2 = tempString;
            tempString = "";
            $('#displayCalculator').val("");
            tempString += "4";
            $('#displayCalculator').val($('#displayCalculator').val() + "4");
            position = 2;
            $("#displayCalculator").css("color","transparent");
            setTimeout(() => {  $("#displayCalculator").css("color","black"); }, 100);
        } else {
            tempString += "4";
            $('#displayCalculator').val($('#displayCalculator').val() + "4");

        };

        setTimeout(() => {
            $("#displayCalculator").css("color","black");
        }, 100);
        }
    );
    $("#plusFive").click(function (e) {
        if (position === 1) {
            tempString2 = tempString;
            tempString = "";
            $('#displayCalculator').val("");
            tempString += "5";
            $('#displayCalculator').val($('#displayCalculator').val() + "5");
            position = 2;
            $("#displayCalculator").css("color","transparent");
            setTimeout(() => {  $("#displayCalculator").css("color","black"); }, 100);
        } else {
            tempString += "5";
            $('#displayCalculator').val($('#displayCalculator').val() + "5");
        };
        }
    );
    $("#plusSix").click(function (e) {
        if (position === 1) {
            tempString2 = tempString;
            tempString = "";
            $('#displayCalculator').val("");
            tempString += "6";
            $('#displayCalculator').val($('#displayCalculator').val() + "6");
            position = 2;
            $("#displayCalculator").css("color","transparent");
            setTimeout(() => {  $("#displayCalculator").css("color","black"); }, 100);
        } else {
            tempString += "6";
            $('#displayCalculator').val($('#displayCalculator').val() + "6");
        };
        }
    );
    $("#minus").click(function (e) {
        currentSymbolOfOperation = "-";
        if(!tempString){
            tempString += "-";
            $('#displayCalculator').val("-");
        } else if (position === 0) {
            position = 1;
        };
        if(position === 2) {
            if(!tempString2) {
                $('#displayCalculator').val(parseFloat(tempString));
            }
            parseFloat(tempString);
            parseFloat(tempString2);
            $('#displayCalculator').val(parseFloat(tempString2) - parseFloat(tempString));
            tempString = parseFloat(tempString2) - parseFloat(tempString);
            tempString2 = "";
            position = 1;
        }
        $("#displayCalculator").css("color","transparent");

        setTimeout(() => {  $("#displayCalculator").css("color","black"); }, 100);
        }
    );
    $("#plusOne").click(function (e) {
        if (position === 1) {
            tempString2 = tempString;
            tempString = "";
            $('#displayCalculator').val("");
            tempString += "1";
            $('#displayCalculator').val($('#displayCalculator').val() + "1");
            position = 2;
            $("#displayCalculator").css("color","transparent");
            setTimeout(() => {  $("#displayCalculator").css("color","black"); }, 100);
        } else {
            tempString += "1";
            $('#displayCalculator').val($('#displayCalculator').val() + "1");
        };
        }
    );
    $("#plusTwo").click(function (e) {
        if (position === 1) {
            tempString2 = tempString;
            tempString = "";
            $('#displayCalculator').val("");
            tempString += "2";
            $('#displayCalculator').val($('#displayCalculator').val() + "2");
            position = 2;
            $("#displayCalculator").css("color","transparent");
            setTimeout(() => {  $("#displayCalculator").css("color","black"); }, 100);
        } else {
            tempString += "2";
            $('#displayCalculator').val($('#displayCalculator').val() + "2");
        };
    });
    $("#plusThree").click(function (e) {
        if (position === 1) {
            tempString2 = tempString;
            tempString = "";
            $('#displayCalculator').val("");
            tempString += "3";
            $('#displayCalculator').val($('#displayCalculator').val() + "3");
            position = 2;
            $("#displayCalculator").css("color","transparent");
            setTimeout(() => {  $("#displayCalculator").css("color","black"); }, 100);
        } else {
            tempString += "3";
            $('#displayCalculator').val($('#displayCalculator').val() + "3");
        };
        }
    );
    $("#plus").click(function (e) {
            currentSymbolOfOperation = "+";
        if(position === 0) {
            position = 1;
        };
                if(position === 2) {
                    parseFloat(tempString);
                    parseFloat(tempString2);
                    $('#displayCalculator').val(parseFloat(tempString2) + parseFloat(tempString));
                    tempString = parseFloat(tempString) + parseFloat(tempString2);
                    tempString2 = "";
                    position = 1;
                }
        $("#displayCalculator").css("color","transparent");
       setTimeout(() => {  $("#displayCalculator").css("color","black"); }, 100);

    }
    );
    $("#plusZero").click(function (e) {
        if (position === 1) {
            tempString2 = tempString;
            tempString = "";
            $('#displayCalculator').val("");
            tempString += "0";
            $('#displayCalculator').val($('#displayCalculator').val() + "0");
            position = 2;
            $("#displayCalculator").css("color","transparent");
            setTimeout(() => {  $("#displayCalculator").css("color","black"); }, 100);
        } else {
            tempString += "0";
            $('#displayCalculator').val($('#displayCalculator').val() + "0");
        };
        });
    $("#plusPoint").click(function (e) {
        if(!tempString){
            tempString += "0.";
            $('#displayCalculator').val("0.");
        } else if (position === 1) {
            tempString2 = tempString;
            tempString = "";
            $('#displayCalculator').val("");
            tempString += "0.";
            $('#displayCalculator').val($('#displayCalculator').val() + "0.");


            position = 2;

        } else {
            tempString += ".";
            $('#displayCalculator').val($('#displayCalculator').val() + ".");
        };
        }
    );
    $("#equal").click(function (e) {
        $("#displayCalculator").css("color","transparent");
        if (tempString2) {
            /*В зависимости от знака*/
            switch (currentSymbolOfOperation) {
                case "/":
                    if(!tempString2) {
                        $('#displayCalculator').val(parseFloat(tempString));
                    }
                    $('#displayCalculator').val(parseFloat(tempString2) / parseFloat(tempString));
                    tempString = parseFloat(tempString2) / parseFloat(tempString);
                    tempString2 = "";
                    position = 0;
                    break;
                case "*":
                    if(!tempString2) {
                        $('#displayCalculator').val(parseFloat(tempString));
                    }
                    $('#displayCalculator').val(parseFloat(tempString2) * parseFloat(tempString));
                    tempString = parseFloat(tempString2) * parseFloat(tempString);
                    tempString2 = "";
                    position = 0;
                    break;
                case "+":
                    if(!tempString2) {
                        $('#displayCalculator').val(parseFloat(tempString));
                    }
                    $('#displayCalculator').val(parseFloat(tempString2) + parseFloat(tempString));
                    tempString = parseFloat(tempString2) + parseFloat(tempString);
                    tempString2 = "";
                    position = 0;
                    break;
                case "-":

                    if(!tempString2) {
                        $('#displayCalculator').val(parseFloat(tempString));
                    }

                    $('#displayCalculator').val(parseFloat(tempString2) - parseFloat(tempString));
                    tempString = parseFloat(tempString2) - parseFloat(tempString);
                    tempString2 = "";
                    position = 0;
                    break;
            }

        } else if (tempString) {
            $('#displayCalculator').val(tempString);
        }

        setTimeout(() => {  $("#displayCalculator").css("color","black"); }, 100);
        }
);

});