const params_upvotes = new URLSearchParams(window.location.search);
const page_upvotes = params_upvotes.get("page") || 1;

update_upvotes_index()
function update_upvotes_index() {
    $.ajax({
    url: "upvotes/?page=" + page_upvotes,
    type: 'get',
    success: function(data) {
        data.posts.forEach(function(item) {
        $('#upvotes_counter_' + item.id).text(item.upvotes);

        let upvote_icon = $('#upvote-icon-' + item.id);

        if (item.upvoted) {
            upvote_icon.removeClass('arrow_upvote').addClass('arrow_fill_upvote');
        } else {
            upvote_icon.removeClass('arrow_fill_upvote').addClass('arrow_upvote');
        }

        })
    },
    error: function(data) { 
        alert('Unable to get index upvotes');
    }
}); 
}

$(document).on('click', '.upvote-btn', function (e) {
    e.preventDefault();

    const url = this.href;
    $.ajax({
        url: url,
        type: "GET",
        success: function () {
            update_upvotes_index();
        },
    });
});

setInterval(update_upvotes_index,10000);