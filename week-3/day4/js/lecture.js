
(function() {

    var main = document.querySelector('main');
    // generally speaking, do NOT use this syntax (for...in looping)
    // for (key in main) {
    //     console.log(key);
    // }

    console.log( main.tagName );
    console.log( main.childNodes );  // array-like ... NodeList
    var list = main.querySelector( 'ul' );       // Node
    console.log(  main.childNodes[1],  list );
    console.log( list.querySelector('li') );
    console.log( list.querySelectorAll('li') );  // NodeList
    console.log( list.querySelectorAll('li')[1].parentNode );

    console.log( document.getElementById('third') );  // Node
    console.log( document.querySelector('#third') );  // Node
    // getElementsByTagName(), getElementsByClassName()


    document
        //     HTMLElement
        .querySelector('li.foobar')
        .addEventListener('click', function changeColor(eventObj) {
            console.log(eventObj);
            eventObj.target.classList.add('colorChange');
            eventObj.target.style.color = '#99ff99';
            eventObj.target.parentNode.parentNode.parentNode.style.backgroundColor = '#ffdddd';
        });

    // Task: when ANY li is clicked, increase its font size
    // Use EVENT DELEGATION
    document
        .querySelector('ul')
        .addEventListener('click', function increaseSize(eventObj) {
            eventObj.preventDefault();
            console.log(eventObj.target, this);

            if (eventObj.target.tagName === 'LI') {
                eventObj.target.style.fontSize = '2em';
            } else {
                eventObj.target.parentNode.style.fontSize = '2em';
            }
        });


    console.log( document.querySelector('ul').innerHTML );


    function addItem(text) {
        var item = document.createElement('li');
        item.innerText = text;
        item.classList.add('new-item');
        document.querySelector('ul').appendChild(item);
        item.style.color = '#9999ff';
        item.setAttribute('id', Date.now());
    }

    document
        .querySelector('.add-item')
        .addEventListener('click', function handleAddItemClick() {
            // (new Date()).getTime()
            addItem('A new item ' + Date.now() );  // shortcut for line above
        });
    document
        .querySelector('.remove-item')
        .addEventListener('click', function handleRemoveItem() {
            // document.querySelector('li:last-child')
            var allItems = document.querySelectorAll('li');
            allItems[allItems.length-1]
                .parentNode
                .removeChild(allItems[allItems.length-1]);
        });


})();
