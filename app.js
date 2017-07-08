$(document).ready(function () {

    $("button").click(function () {
        $.getJSON('data.json', function (dataObj) {
            
            var outputKey = "";
            var resultOne = dataObj.result.records[0];
            var resultTwo = dataObj.result.records[1];
            
            if ($("option:selected").val() == 'Marzett') { 
                
                for (key in resultOne) {
                    formattedKey = key.toUpperCase(key).replace(/_/g, " ");

                    outputKey += '<li><span class="key">' + formattedKey + '</span> : <span class="value">' + resultOne[key] + '</span></li>';
                }
                $(".records-container").html(outputKey.replace(/;/g, " "));
                
            } else if ($("option:selected").val() == 'Johnson State') {
                
                for (key in resultTwo) {
                    formattedKey = key.toUpperCase(key).replace(/_/g, " ");

                    outputKey += '<li><span class="key">' + formattedKey + '</span> : <span class="value">' + resultTwo[key] + '</span></li>';
                }
                $(".records-container").html(outputKey.replace(/;/g, " "));
                
            } else {
                
                $(".records-container").html(outputKey);
            };
        });
    });
});
