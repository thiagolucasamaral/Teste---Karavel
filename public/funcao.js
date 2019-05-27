$(document).ready(function () {
    carregar_json('Base');

    function carregar_json(id, Rates) {
        var html = '';


        $.getJson('https://api.exchangeratesapi.io/latest', function (data) {
            html += '<option>' + id + '<option>';
            console.log(data);
            /*if (id == 'Base' && rates == null) {
                for (var i = 0; i < data; i++) {
                    html += '<option value=' + data[i] + '>'
                    data[i] + '</option>';

                }else{
                    for (var i = 0; data.base, i++) {
                        if (data.base[i] == rates) {
                            for (var j = 0; data.rates[i]; j++) {
                                html += '<option value=' + data + '>' + data.rates[j] + '</option>'
                            }
                        }
                    }
                }

            }
            $('#' + id).html(html);

        });

        $.(document).on('change', '#Base', function () {
            var Rates = $(this).val();
            console.log(Rates);
            if (cidade_id != null) {
                carregar_json('Rates', rates);
            }*/
        })

    };
});