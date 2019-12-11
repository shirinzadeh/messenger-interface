$(document).ready(function() {
   //show 3 invisible icon after click the plus(add) icon
   $(".add-icons").click(function() {
      $(".js-icon-plus").toggleClass('<i class="fas fa-times-circle "></i> js-icon-times');
      $(".invisible-icons").toggle(300);
   });

   //hide rightside when click info info icon
   $(".js-info").click(function() {
      $(".rightside").toggle(0, function() {
         $(".js-info").toggleClass("info");
      });
   });

   //show popup and change background when click each ellipsis icon
   $(".user-popup").each(function(i) {
      $(this).click(function() {
         $(".user-popup__text")
            .on("click touch", function(event) {
               event.stopPropagation();
            })
            .eq(i)
            .toggle()
            .toArray();
         $(".user")
            .eq(i)
            .addClass("is-selected");
      });

      $(document).mouseup(function(e) {
         var mypopup = $(".user-popup__text");
         if (!$(".user-popup").is(e.target)) {
            /* && !popup.is(e.target) && popup.has(e.target).length == 0*/
            mypopup.hide();
            $(".user").removeClass("is-selected");
         }
      });

      // $(document).on("click touch", function(event) {
      //   if (
      //     !$(event.target)
      //       .parents()
      //       .addBack()
      //       .is(".user-popup")
      //   ) {
      //     $("#mypopup")
      //       .hide()
      //       .removeClass("selected");
      //   }
      // });
   });
});

//search input
const user = document.querySelectorAll(".users .user");
const search = document.querySelector(".search input");

const filterFullNames = term => {
   Array.from(user)
      .filter(user => !user.textContent.toLowerCase().includes(term))
      .forEach(user => user.classList.add("filtered"));
   console.log(user);

   //  Array.from(user)
   //     .filter(user => user.textContent.toLowerCase().includes(term))
   //     .forEach(user => user.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
   const term = search.value.trim().toLowerCase();
   filterFullNames(term);
});
