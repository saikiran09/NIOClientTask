function loadData(rowsCount) {
    document.getElementById('txtRowsCount').value = rowsCount;
    $.ajax({
        url: 'https://randomuser.me/api/?nat=GB&results=' + rowsCount,
        dataType: 'json',
        success: function (result) {
            console.log(result);
            document.getElementById('tiles').innerHTML = "";
            var data = result.results;
            for (var i = 0; i < data.length; i++) {
                if (data[i].nat == "GB") {
                    renderTiles(data[i]);
                }
            }
        }
    });
}
function loadMoreData() {
    var rowsCount = document.getElementById('txtRowsCount').value;
    loadData(rowsCount);
}

function renderTiles(tileData) {
    var tile = '<div id="tile"><div><img src="' + tileData.picture.medium + '"></div><div> <span>' + tileData.name.title + ' ' + tileData.name.first + ' ' + tileData.name.last + '</span></div><div> <a href="">' + tileData.email + '</a> </div></div>';
    $('#tiles').append(tile);
}