function HeapSort(A) {
    if (A.length == 0) return [];
    var n = A.length, i = Math.floor(n / 2), j, k, t;
    while (true) {
        if (i > 0) t = A[--i];
        else {
            n--;
            if (n == 0) return A;
            t = A[n];
            A[n] = A[0];
        }
        j = i;
        k = j * 2 + 1;
        while (k < n) {
            if (k + 1 < n && A[k + 1][0] > A[k][0]) k++;
            if (A[k][0] > t[0]) {
                A[j] = A[k];
                j = k;
                k = j * 2 + 1;
            } else break;
        }
        A[j] = t;
    }
}
function sort ( butt, page)//кнопка и страница
{
    let json = '';
    let htmlel = '';// id ел-та


    switch (page){//выбор json файла и id
        case 0: json = 'rings.json';
            htmlel = '#rings';
            break;
        case 1: json ='earrings.json';
            htmlel = '#earrings';
            break;
        case 2: json ='clock.json';
            htmlel = '#clock';
            break;
        case 3: json ='bracelets.json';
            htmlel = '#bracelets';
            break;
        case 4: json ='brooches.json';
            htmlel = '#brooches';
            break;
        case 5: json ='necklace.json';
            htmlel = '#necklace';
            break;
        case 6: json ='all.json';
            htmlel = '#all';
            break;
    }
    $.getJSON(json, function (data) {//загружаем эл.

        //заводим переменную для вывода данных в массив
        let outarray = [];//массив вывода текста
        let outcost = [];//стоимость товара
        let i = 0;//очередь
        // вывод для сортировки
        for (var key in data){
            let out = '';//
            out+='<div class="col-sm-4">';
            out+='<div class="panel panel-info">';
            out+='<div class="panel-heading">'+'<p>'+data[key]['name']+'</p>'+data[key]['model']+'</div>';
            out+='<div class="panel-body">'+'<table width="100%" cellspacing="0" cellpadding="0">'
                +'<tr>'+'<td class="leftcol">'+'<img src="'+data[key].image+'"height="100px" width="100px">'+'</td>'+'<td valign="top">'
                +'<p>'+data[key]['cost']+" руб."+'</p>'+'<p>'+data[key]['brand']+'</p>'+'</td>'+'</tr>'+'</table>'+'</div>';
            out+='</div>';
            out+='</div>';
            outcost[i] = [+data[key]['cost'], i ];//заполняем стоимость и очередь
            outarray[i] = out;
            i += 1;

        }
        HeapSort(outcost);//
        let out = '';//пересенная строка вывода
        i = 0;//обнуления индекса
        if (+butt.value == 0)//от меньшего к большему
            while (typeof (outcost[i]) != "undefined")//работаем до тех пор пока не вышли за предел массива
            {
                out += outarray[outcost[i][1]];//индекс нахождения эл-та
                i++;
            }
        if (+butt.value == 1)//от большего к меньшему
        {
            while (typeof (outcost[i]) != "undefined")//доходим до последнего эл-та
            {
                i++;
            }
            i--;
            while (typeof (outcost[i]) != "undefined")//заносим в вывод
            {//
                out += outarray[outcost[i][1]];//
                i--;//
            }//
        }
        $(htmlel).html(out);
    })
}

$('document').ready(function () {
    loadGoods();
});
function loadGoods() {
//загружаю товары на страницу

    $.getJSON('rings.json', function (data) {

        //заводим переменную для вывода данных в массив
        let out = '';//
        for (var key in data) {

            out += '<div class="col-sm-4">';
            out += '<div class="panel panel-info">';
            out += '<div class="panel-heading">' + '<p>' + data[key]['name'] + '</p>' + data[key]['model'] + '</div>';
            out += '<div class="panel-body">' + '<table width="100%" cellspacing="0" cellpadding="0">'
                + '<tr>' + '<td class="leftcol">' + '<img src="' + data[key].image + '" width="100px">' + '</td>' + '<td valign="top">'
                +'<p>'+data[key]['cost']+" руб."+'</p>'+'<p>'+data[key]['brand']+'</p>'+'</td>'+'</tr>'+'</table>'+'</div>';
            out += '</div>';
            out += '</div>';
        }
        $('#rings').html(out);
    })
    $.getJSON('earrings.json', function (data) {

        //заводим переменную для вывода данных в массив
        var out = '';
        for (var key in data){
            out+='<div class="col-sm-4">';
            out+='<div class="panel panel-info">';
            out+='<div class="panel-heading">'+'<p>'+data[key]['name']+'</p>'+data[key]['model']+'</div>';
            out+='<div class="panel-body">'+'<table width="100%" cellspacing="0" cellpadding="0">'
                +'<tr>'+'<td class="leftcol">'+'<img src="'+data[key].image+'" width="100px">'+'</td>'+'<td valign="top">'
                +'<p>'+data[key]['cost']+" руб."+'</p>'+'<p>'+data[key]['brand']+'</p>'+'</td>'+'</tr>'+'</table>'+'</div>';
            out+='</div>';
            out+='</div>';
        }
        $('#earrings').html(out);
    })
    $.getJSON('clock.json', function (data) {

        //заводим переменную для вывода данных в массив
        var out = '';
        for (var key in data){
            out+='<div class="col-sm-4">';
            out+='<div class="panel panel-info">';
            out+='<div class="panel-heading">'+'<p>'+data[key]['name']+'</p>'+data[key]['model']+'</div>';
            out+='<div class="panel-body">'+'<table width="100%" cellspacing="0" cellpadding="0">'
                +'<tr>'+'<td class="leftcol">'+'<img src="'+data[key].image+'"height="100px" width="100px">'+'</td>'+'<td valign="top">'
                +'<p>'+data[key]['cost']+" руб."+'</p>'+'<p>'+data[key]['brand']+'</p>'+'</td>'+'</tr>'+'</table>'+'</div>';
            out+='</div>';
            out+='</div>';
        }
        $('#clock').html(out);
    })
    $.getJSON('bracelets.json', function (data) {

        //заводим переменную для вывода данных в массив
        var out = '';
        for (var key in data){
            out+='<div class="col-sm-4">';
            out+='<div class="panel panel-info">';
            out+='<div class="panel-heading">'+'<p>'+data[key]['name']+'</p>'+data[key]['model']+'</div>';
            out+='<div class="panel-body">'+'<table width="100%" cellspacing="0" cellpadding="0">'
                +'<tr>'+'<td class="leftcol">'+'<img src="'+data[key].image+'" width="100px">'+'</td>'+'<td valign="top">'
                +'<p>'+data[key]['cost']+" руб."+'</p>'+'<p>'+data[key]['brand']+'</p>'+'</td>'+'</tr>'+'</table>'+'</div>';
            out+='</div>';
            out+='</div>';
        }
        $('#bracelets').html(out);
    })
    $.getJSON('brooches.json', function (data) {

        //заводим переменную для вывода данных в массив
        var out = '';
        for (var key in data){
            out+='<div class="col-sm-4">';
            out+='<div class="panel panel-info">';
            out+='<div class="panel-heading">'+'<p>'+data[key]['name']+'</p>'+data[key]['model']+'</div>';
            out+='<div class="panel-body">'+'<table width="100%" cellspacing="0" cellpadding="0">'
                +'<tr>'+'<td class="leftcol">'+'<img src="'+data[key].image+'" width="100px">'+'</td>'+'<td valign="top">'
                +'<p>'+data[key]['cost']+" руб."+'</p>'+'<p>'+data[key]['brand']+'</p>'+'</td>'+'</tr>'+'</table>'+'</div>';
            out+='</div>';
            out+='</div>';
        }
        $('#brooches').html(out);
    })
    $.getJSON('necklace.json', function (data) {

        //заводим переменную для вывода данных в массив
        var out = '';
        for (var key in data){
            out+='<div class="col-sm-4">';
            out+='<div class="panel panel-info">';
            out+='<div class="panel-heading">'+'<p>'+data[key]['name']+'</p>'+data[key]['model']+'</div>';
            out+='<div class="panel-body">'+'<table width="100%" cellspacing="0" cellpadding="0">'
                +'<tr>'+'<td class="leftcol">'+'<img src="'+data[key].image+'" width="100px">'+'</td>'+'<td valign="top">'
                +'<p>'+data[key]['cost']+" руб."+'</p>'+'<p>'+data[key]['brand']+'</p>'+'</td>'+'</tr>'+'</table>'+'</div>';
            out+='</div>';
            out+='</div>';
        }
        $('#necklace').html(out);
    })
    $.getJSON('all.json', function (data) {

        //заводим переменную для вывода данных в массив
        var out = '';
        for (var key in data){
            out+='<div class="col-sm-4">';
            out+='<div class="panel panel-info">';
            out+='<div class="panel-heading">'+'<p>'+data[key]['name']+'</p>'+data[key]['model']+'</div>';
            out+='<div class="panel-body">'+'<table width="100%" cellspacing="0" cellpadding="0">'
                +'<tr>'+'<td class="leftcol">'+'<img src="'+data[key].image+'"height="100px" width="100px">'+'</td>'+'<td valign="top">'
                +'<p>'+data[key]['cost']+" руб."+'</p>'+'<p>'+data[key]['brand']+'</p>'+'</td>'+'</tr>'+'</table>'+'</div>';
            out+='</div>';
            out+='</div>';
        }
        $('#all').html(out);
    })
}

