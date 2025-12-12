update_views_detail()
function update_views_detail() {
    $.ajax({
    url: "views/",
    type: 'get',
    success: function(data) {
    $('#views_counter').text(data.post_views)
    },
    failure: function(data) { 
        alert('Unable to get detai view');
    }
}); 
}

setInterval(update_views_detail,1000);