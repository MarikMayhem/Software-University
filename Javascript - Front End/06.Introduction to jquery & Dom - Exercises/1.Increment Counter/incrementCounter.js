function increment(selector){
    let container = $(selector);
    //Adding all the html via jquery and into internal ->
    //javascript instead of adding into the dom because ->
    // its expensive procedure! after that we will append ->
    // the document fragment to the DOM
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementButton = $('<button>Increment</button>');
    let addButton = $('<button>Add</button>');
    let list = $('<ul>');

    //Next step is to add some properties:

    //textArea Properties:

    //AddClass adds class
    textArea.addClass('counter');
    //textArea declares value to the variable
    textArea.val(0);
    //The next line of code disables the attributes
    textArea.attr('disabled', true);

    incrementButton.addClass('btn');
    //attr('id','name') declares id
    incrementButton.attr('id', 'incrementBtn');

    addButton.addClass('btn');
    addButton.attr('id', 'addBtn');

    list.addClass('results');

    //The next two lines are our main functions

    //.on means play the event onclick of the button
    //In the current case this adds 1 to the value of text area
    $(incrementButton).on('click', function(){
        //+ before the textArea removes the zero
        textArea.val(+textArea.val() + 1);
    });

    //.append(adds external li with the current variable value ->
    //just in this case
    $(addButton).on('click', function(){
        list.append(`<li>${textArea.val()}</li>`);
    });

    //Here we append our vars into the fragment document
    textArea.appendTo(fragment);
    incrementButton.appendTo(fragment);
    addButton.appendTo(fragment);
    list.appendTo(fragment);

    //for final we include the fragment doc into the container
    container.append(fragment);

}
    //Thats used for visualising the increment function ->
    //into the html div with class #wraper
    increment("#wrapper");