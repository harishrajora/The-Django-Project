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
}); 
}

$(document).on('click', '#upvote-btn', function (e) {
    e.preventDefault(); 

    
    const url = this.href;
    $.ajax({
        url: url,
        type: "GET",
        success: function () {
            alert("asdadsa")
            update_upvote_detail();
        },
        error: function (xhr) {
            console.log("AJAX ERROR");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });
});

setInterval(update_upvote_detail,5000);