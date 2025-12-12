const params = new URLSearchParams(window.location.search);
const page = params.get("page") || 1;

update_views_index()
function update_views_index() {
    $.ajax({
    url: "views/?page=" + page,
    type: 'get',
    success: function(data) {
        data.posts.forEach(function(item) {
        $('#views_counter_' + item.id).text(item.views);
        })
    },
    failure: function(data) { 
        alert('Unable to get index views');
    }
}); 
}

setInterval(update_views_index,1000);