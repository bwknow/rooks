"use strict";

myapp.directive('setMenu', [function() {
    return {
        restrict: 'A',
        link: function($scope, iElm, iAttrs, controller) {
            iElm.bind("click", function() {

                $(".controls section, section.title").hide();
                $("section.menubar div").removeClass("active-menu");
                $(".controls section.buttonsec").css("display", "block");

                var menu = $(iElm).attr('id');

                switch (menu) {
                    case "menu-color":
                        $(".colorsec").fadeIn("slow");
                        $(iElm).addClass("active-menu");
                        break;
                    case "menu-design":
                        $(".designsec").fadeIn("slow");
                        $(iElm).addClass("active-menu");
                        break;
                    case "menu-name":
                        $(".namesec").fadeIn("slow");
                        $(iElm).addClass("active-menu");
                        //$("#cupname").focus();
                        break;

                    default:
                        $(".colorsec").fadeIn("slow");
                        $("div#menu-color").addClass("active-menu");
                        break;
                }

                $('html, body').animate({
                    scrollTop: 0
                }, 'slow');
            })
        }
    };
}])



.directive('setColor', [function() {
    return {
        restrict: 'A',
        link: function($scope, iElm, iAttrs, controller) {
            iElm.bind("click", function() {
                var colorNew = $(iElm).css("background-color");
                var colorClass = $(iElm).attr('class');

                $('.colorhex').colorpicker('setValue', colorNew);
                $(".body .el").css("background-color", colorNew).removeClass("homecup-base");
                $(".body .el").css("color", $scope.origcupColor);
                $('.picker i').css('color', colorNew);
                $('.controls .ionicons, #nodesign, .picker').show();
                $("section.title").hide("slow");
                $(".btn-group.design div").css("background-color", colorNew);

                $('html, body').animate({
                    scrollTop: 0
                }, 'slow');
            })
        }
    };
}])


.directive('setDesign', [function() {
    return {
        restrict: 'A',
        link: function($scope, iElm, iAttrs, controller) {
            iElm.bind("click", function() {
                var imageUrl = $(iElm).css("background-image").replace(/(url\(|\)|'|")/gi, '');
                var designname = $(iElm).attr('title');
                $(".body .el").css('background-image', 'url("' + imageUrl + '")').removeClass("homecup-base");
                $('.btn-group.design div').removeClass('active-design').css("background-color", $scope.origcupColor);
                $(iElm).addClass('active-design');
                $("section.title").hide("slow");
                $(".cup-design-name").text(designname);
                $('.controls .ionicons, #nodesign, .picker').show();
                $('.body .el').css('background-repeat','repeat');
                $('html, body').animate({
                    scrollTop: 0
                }, 'slow');
                $('.body .el').css('background-size','');
                
                  
            })
        }
    };
}])


.directive('clearDesign', [function() {
    return {
        restrict: 'A',
        link: function($scope, iElm, iAttrs, controller) {
            iElm.bind('click', function() {
                $('.body .el').addClass('homecup-base');

                if ($(iElm).attr('class').search('logo') > -1) {
                   
                    /*
                    $('.el').text(' ');
                    $('#cupname').val(' ');
                    $('canvas').remove();
                    $("section.title").show('slow');
                    var img  = document.getElementById("logo-image");
                    img.src = "images/logo.png";
                    $('#myCanvas').remove();
                    */
                    document.location.href = "?r="+Math.floor((Math.random() * 1000) + 1);
                }

                /*
                $('.body .el').css('background-position-y','0px');
                $(".body .el").css("color", $scope.basefontColor);
                $('.cup').css('color', $scope.basefontColor);
                $('.btn-group.design div, .el').css('background-color', $scope.origcupColor);
                $('.designsec, .namesec,.colorsec, .buttonsec, .controls .ionicons, #nodesign, .picker').fadeOut('slow');
                $('.designsec div, section.menubar div').removeClass('active-design active-menu');
                $('#coffee-cup .cup-design-name, .cup-design-name, .thankyou').text(' ');
                */

            })
        }
    };
}])


.directive('saveCup', [function() {
    return {
        restrict: 'A',
        link: function($scope, iElm, iAttrs, controller) {
            iElm.bind("click", function() {
                $("#nodesign, .picker").hide(); // hide edit button icons
                var designname = $('.cup-design-name').text(); //grab the design name
                $('.cup-design-name').text(' '); // then clear it out so it won't appear in the canvas

                html2canvas($("section#coffee-cup"), {
                    onrendered: function(canvas) {

                        var dwidth = window.innerWidth.toString();
                        var len = Object.keys($scope.clipcoords).length;
                        var fillstyle = $scope.clipareaColor;

                        for (var i = 0; i < len; i++) {

                            if ($scope.clipcoords[i].dwidth === dwidth) {
                                var context = canvas.getContext('2d');
                                context.beginPath();
                                context.moveTo($scope.clipcoords[i].left[0], 49);
                                context.lineTo($scope.clipcoords[i].left[1], 306);
                                context.lineTo($scope.clipcoords[i].left[2], 308);
                                context.moveTo($scope.clipcoords[i].right[0], 49);
                                context.lineTo($scope.clipcoords[i].right[1], 306);
                                context.lineTo($scope.clipcoords[i].right[2], 308);
                                context.fillStyle = fillstyle;
                                context.fill();
                                context.closePath();
                                break;
                            }
                        }

                        document.body.appendChild(canvas);

                        var cupname = $('.el').text();
                        var filename = "Starbucks Custom Cup - " + cupname + ".png";

                        canvas.toBlob(function(blob) {
                             saveAs(blob, filename);
                        });

                        // restore previous state
                        $("#nodesign, .picker").show();
                        $('.cup-design-name').text(designname);
                        $(".thankyou").text("Thanks " + cupname + ". Your personal cup has been saved. (" + designname + " design)");
                        $('html, body').animate({
                            scrollTop: 9999
                        }, 'slow'); // scoll down to saved cup position
                    }
                });
            })
        }
    };
}])


