$("#botonEnviar").on("click", function(){

if($("#name").val() == "" || $("#mail").val() == "" || $("#msg").val() == "" ){
        alert("nincuno de los campos puede estar vacio");

}
else{

    alert("Mensaje enviado");
    $("#name").val("");
    $("#mail").val("");
    $("#msg").val("");
}

});