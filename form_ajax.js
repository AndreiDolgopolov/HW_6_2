$(document).ready(function () {
  
  $("form").submit(function (event) {
    var formData = {
      user_name: $("#user_name").val(),
      user_second_name: $("#user_second_name").val(),
      user_last_name: $("#user_last_name").val(),
    };

    $.ajax({
      type: "POST",
      url: "dadata.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (result) {
      console.log(result);
      for (let value of result) {
        console.log(value);
        $("#result").html(
          '<pre><p><b>Фамилия:</b>         ' + value.name +
          '<p><b>Имя:</b>             ' + value.surname +
          '<p><b>Отчество</b>         ' + value.patronymic +
          '<p><b>Полное имя:</b>      ' + value.result +
          '</p><p><b>В лице:</b>          ' + value.result_genitive +
          '</p><p><b>Кому:</b>            ' + value.result_dative +
          '</p><p><b>Согласовано:</b>     ' + value.result_ablative + '</p></pre>'
        );
      }

    });

    event.preventDefault();
  });
});
