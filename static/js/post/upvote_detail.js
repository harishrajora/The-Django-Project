update_upvote_detail()
function update_upvote_detail() {
    $.ajax({
    url: "upvotes/",
    type: 'get',
    success: function(data) {
    $('#upvotes_counter').text(data.upvotes)
    },
    failure: function(data) { 
        alert('Unable to get detai upvotes');
    }
}); 
}

setInterval(update_upvote_detail,1000);