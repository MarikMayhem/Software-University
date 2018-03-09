let createBook = (function createBook() {
    let id = 1;
    return function (selector, titleName, authorName, isbn) {


        let fragment = document.createDocumentFragment();
        let container = $(selector);

        let div = $('<div>');
        let pTitleName = $('<p>');
        let pAuthorName = $('<p>');
        let pIsbn = $('<p>');

        let selectBtn = $('<button>Select</button>');
        let deSelectBtn = $('<button>deSelect</button>');

        div.attr('id', 'book' + id);
        div.css('border', '2px solid blue');
        id++;

        pTitleName.addClass('title');
        pTitleName.text(titleName);
        pAuthorName.addClass('author');
        pAuthorName.text(authorName);
        pIsbn.addClass('isbn');
        pIsbn.text(isbn);

        $(selectBtn).on('click', function () {
            div.css('border', '2px solid blue');
        });

        $(deSelectBtn).on('click', function () {
            div.css('border', 'none');
        });

        pTitleName.appendTo(div);
        pAuthorName.appendTo(div);
        pIsbn.appendTo(div);
        selectBtn.appendTo(div);
        deSelectBtn.appendTo(div);

        div.appendTo(fragment);

        container.append(fragment);

    };
})();