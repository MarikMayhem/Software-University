function domDynamicForm(selector) {

    let container = $(selector);

    let fragment = document.createDocumentFragment();

    let div = $('<div>');
    let label = $('<label>Enter Text</label>');
    let input = $('<input>');
    let aButton = $('<a> Add </a>');

    let divResult = $('<div>');
    let ulList = $('<ul>');
    let a = $('<a>X</a>');

    div.addClass('add-controls');

    aButton.addClass('button');
    aButton.css('cursor', 'pointer');
    //aButton.css('display', 'inline-block');


    divResult.addClass('result-controls');
    ulList.addClass('items-list');
    //a.addClass('button');

    let id = 0;
    $(aButton).on('click', function () {
        //$(this).parent().find(label).css('color', 'red');
        ulList.append(`<li class="dudi"> <a class="button">x</a>${input.val()}</li>  `);

    });

    $(a).on('click', function () {
        // $('.dudi').remove();

    });

    div.appendTo(fragment);
    label.appendTo(fragment);
    input.appendTo(fragment);
    aButton.appendTo(fragment);
    divResult.appendTo(fragment);
    ulList.appendTo(fragment);
    a.appendTo(fragment);

    // fragment
    //     .append(div)
    //     .append(label)
    //     .append(input)
    //     .append(aButton)
    //     .append(divResult)
    //     .append(ulList)
    //     .append(a);

    container.append(fragment);


}


domDynamicForm("#content");