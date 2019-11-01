calc.onclick = function(){
    var myform = this.form,
        chbx = myform['precipitation[]'],
        chbxSum = 0;
    for(var i = 0; i < chbx.length; i++){
        if(chbx[i].checked) {
            chbxSum += +chbx[i].value;
        }
    }
    myform.result.value = +myform.myname.value + +myform.street.value + chbxSum;
}
