const params = new URLSearchParams(window.location.search);
const page = params.get("page") || 1;

update_upvotes_index()
function update_upvotes_index() {
    $.ajax({
    url: "upvotes/?page=" + page,
    type: 'get',
    success: function(data) {
        data.posts.forEach(function(item) {
        $('#upvotes_counter_' + item.id).text(item.upvotes);
        })
    },
    failure: function(data) { 
        alert('Unable to get index upvotes');
    }
}); 
}

setInterval(update_upvotes_index,10000);