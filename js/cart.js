$(document).on('click', '.btn-buy-now', function (e) {
    e.preventDefault();

    if($(this).hasClass('disable')){
      return false;
    }
    $(document).find('.btn-buy-now').addClass('disable');
    var self=$(this);
    var parent=$(this).parents('.thumbnail');
    var src=parent.find('img').attr('src');
    var cart=$(document).find('#cart-shop');
    // alert(src);

    var parTop=parent.offset().top;
    var parLeft=parent.offset().left;

    $('<img />', { 
    class: 'img-product-fly',
      src: src
    }).appendTo('body').css({
      'top' : parTop,
      'left' : parseInt(parLeft)+parseInt(parent.width()) -50
    });

    setTimeout(function(){
      $(document).find('.img-product-fly').css({
          'top' : cart.offset().top,
          'left' : cart.offset().left
          
      });

      setTimeout(function(){
        $(document).find('.img-product-fly').remove();
        var citem=parseInt(cart.find('#count-item').data('count'))+1
        swal({
  title: "Hay lắm ",
  text: "nothing",
  icon: "warning",
  buttons: true,
  dangerMode: false,
  html:true
})
.then((willDelete) => {
  if (willDelete) {
    swal("Bạn đã thêm thành công", {
      customClass:"null",
      icon: "success",
    });
  } else {
    swal("don't things change :v");
  }
});

        cart.find('#count-item').text(citem).data('count', citem);
      $(document).find('.btn-buy-now').removeClass('disable');

      },1000);
    },500);
  });

//  setTimeout(function(){
//         swal({
//   title: "Bạn có thấy hay ko ?",
//   text: "Nếu hay thì like ^.^ ",
//   icon: "info",
//   buttons: true,
//   dangerMode: true,
// })
// .then((willDelete) => {
//   if (willDelete) {
//     swal("Thank you !!!", {
//       icon: "success",
//     });
//   } else {
//     swal("DM ông");
//   }
// });

//     }, 5000);

