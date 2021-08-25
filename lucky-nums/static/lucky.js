/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
    evt.preventDefault();

    luckyNumberUrl = 'http://localhost:5000/api/get-lucky-num';

    let dataToSend = {};

    $('input').each(function () {
        dataToSend[this.id] = $(this).val()
    });

    let resp = await axios.post(luckyNumberUrl, dataToSend);

    handleResponse(resp)
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
    // let data =
    if (resp.data['errors']) {
        let errorCategories = resp.data['errors'];

        for (let errorInput in errorCategories) {
            error = errorCategories[errorInput];

            for (let errorDetail in error) {
                $(`#${errorInput}-err`).append(`<p>${errorInput}: ${error[errorDetail]}</p>`)

            }
        }

    }
    else {
        console.log(resp.data)
        for (let subject in resp.data) {
            subjectData = resp.data[subject];
            console.log(subject, subjectData)
            if (subject == 'num') {
                $(`#lucky-results`).append(`<p>Your lucky number ${subjectData[subject]} fact is "${subjectData['fact']}"</p>`)
            }
            else{
                $(`#lucky-results`).append(`<p>Your birth year (${subjectData[subject]}) fact is "${subjectData['fact']}"</p>`)
            }

        }
    }


}


$("#lucky-form").on("submit", processForm);
