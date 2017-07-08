$(document).ready(function () {

    $("button").click(function () {
        $.getJSON('data.json', function (dataObj) {
            var outputKey = "";
            
            //Well Constructor Function
            var Well = function (index) {
                this.result = dataObj.result.records[index];
                
                //Update Function
                this.update = function () {
                    for (key in this.result) {
                        formattedKey = key.toUpperCase(key).replace(/_/g, " ");

                        outputKey += '<li><span class="key">' + formattedKey + '</span> : <span class="value">' + this.result[key] + '</span></li>';
                    }
                    $(".records-container").html(outputKey.replace(/;/g, " "));
                }
            }
            
            //Construct Wells
            var marzett = new Well(0);
            var johnsonState = new Well(1);
            
            //Logic
            if ($("option:selected").val() == 'Marzett') {
                marzett.update();
            } else if ($("option:selected").val() == 'Johnson State') {
                johnsonState.update();
            } else {
                $(".records-container").html(outputKey);
            };

        });
    });
});
