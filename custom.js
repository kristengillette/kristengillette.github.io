var width = $(window).width();

if (width > 480)
{

   $(".card-img").removeClass("card-img-top");
   $(".project-text").addClass("card-img-overlay");
   $(".card-title").removeClass("m-y-1");
   $(".card").removeClass("p-y-1");

  $(".card").hover(function() {
    $(".card").children(".card-img-overlay").stop();
    $(".card").children(".card-img-overlay").css("visibility", "hidden");
    $(this).children(".card-img-overlay").fadeIn("fast");
    $(this).children(".btn-card").fadeIn("fast");
    $(this).children(".card-img-overlay").css("border", "2px solid #9370db");
    $(this).children(".project-text").css("visibility", "visible");
    $(this).children(".btn-card").css("visibility", "visible");
    $(this).children(".project-text").css("display", "block");
    },

    function() {
      $(".card").children(".card-img-overlay").stop();
      $(this).children(".card-img-overlay").fadeOut("fast");
      $(this).children(".btn-card").fadeOut("fast");
      $(this).children(".btn-card").css("visibility", "hidden!important");
    }

    );
   }

$(window).resize(function() {

width = $(window).width();

   $(".card-img").addClass("card-img-top");
   $(".project-text").removeClass("card-img-overlay");
   $(".card-title").addClass("m-y-1");
   $(".card").addClass("p-y-1");
   $(".project-text").css("visibility", "visible");

if(width > 480) {

   $(".card-img").removeClass("card-img-top");
   $(".project-text").addClass("card-img-overlay");
   $(".card-title").removeClass("m-y-1");
   $(".card").removeClass("p-y-1");
   $(".card").children(".card-img-overlay").css("visibility", "hidden");

  $(".card").hover(function() {
    $(".card").children(".card-img-overlay").stop();
    $(".card").children(".card-img-overlay").css("visibility", "hidden");
    $(this).children(".card-img-overlay").fadeIn("fast");
    $(this).children(".btn-card").fadeIn("fast");
    $(this).children(".card-img-overlay").css("border", "2px solid #9370db");
    $(this).children(".project-text").css("visibility", "visible");
    $(this).children(".btn-card").css("visibility", "visible");
    $(this).children(".project-text").css("display", "block");
    },

    function() {
      $(".card").children(".card-img-overlay").stop();
      $(this).children(".card-img-overlay").fadeOut("fast");
      $(this).children(".btn-card").fadeOut("fast");
      $(this).children(".btn-card").css("visibility", "hidden");
    }
    );

}
});

var photoName = "";
         var photoHTML = "";
         var photoName = "";
         var modalId = "";
         var largePhoto = false;

$(".btn-card").click(function() {
            console.log(largePhoto);
             if (largePhoto === false) {
                 $(".modal-image").remove();
             }
             largePhoto = true;

             if (largePhoto === true) {
                 modalId = $(this).attr("data-target");
                 photoName = modalId.substring(1);
                 photoHTML = '<img class="img-fluid modal-image" src="images/';
                 photoHTML += photoName;
                 photoHTML += '-image';
                 photoHTML += '.jpg" alt="image of site" >';
                 $(photoHTML).prependTo(".modal-body");
             }

         $(modalId).on('hidden.bs.modal', function() {
             largePhoto = false;
         });

       });