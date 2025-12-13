update_upvote_detail()

function update_upvote_detail() {
    $.ajax({
    url: "upvotes/",
    type: 'get',
    success: function(data) {
        $('#upvotes_counter').text(data.upvotes)

        let upvote_icon = $('#upvote-icon');
        
        if (data.upvoted) {
            upvote_icon.removeClass('arrow_upvote').addClass('arrow_fill_upvote');
        } else {
            upvote_icon.removeClass('arrow_fill_upvote').addClass('arrow_upvote');
        }
    },
    error: function(data) { 
        alert('Unable to get detail upvotes');
    }
}); 
}
$('#upvote-btn').on('click', function (e) {
    e.preventDefault();

    $.ajax({
        url: this.href,
        type: "GET",
        success: function () {
            update_upvote_detail();
        }
    });
});

setInterval(update_upvote_detail,5000);