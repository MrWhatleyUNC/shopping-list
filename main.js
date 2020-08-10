function addItem() {
    $('#js-shopping-list-form').on(
        'submit',
        function (e) {
            e.preventDefault();
            console.log(e)
            let newItem = $('#shopping-list-entry').val()
            console.log(newItem)
            $('.shopping-list').append(`
        <li>
            <span class="shopping-item">${newItem}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`)
            $('#shopping-list-entry').val('')
        }
    )
    $(buttonFunctions);
}


function buttonFunctions() {
    $('.shopping-item-toggle').on('click', function (e) {
        e.preventDefault();
        console.log('clicked')
        $(this).closest('li').children('span').toggleClass('shopping-item__checked')
    })

    $('.shopping-item-delete').on('click', function (e) {
        e.preventDefault();
        console.log('clicked')
        $(this).closest('li').remove()
    })
}


$(addItem);

$(buttonFunctions);