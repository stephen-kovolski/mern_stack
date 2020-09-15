
const {default: axios} = require('axios');
const baseURL = 'http://localhost:5000';

module.exports = {
    loginReq: (form) => {
        const reqData = {};

        for (const input of form) {

            const val = input.value
            if(val != '') {
                reqBody[input.name] = val
            }
        }     
        
        
//frontend validation needed: [] make sure all fields are present, [] emailis an email, lengths of inputs (match schema)



            const loginURL = `${baseURL}/user/login`;

            const reqData = {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json'

                },
                data: JSON.stringify(reqBody)
            }
        
    
    axios.put(loginURL, reqData)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        if (err) {
            console.log(err);
        }
    })
    },



    regReq: () => {
    console.log(form)
    }
            //all validation from before, plus make sure both password inputs match

}


// module.exports = {
//     loginReq: (form) => {
//         for (const input of form) {
//             console.log(input.value)
//         }
//         console.log(this);
//     },

//     regReq: (form) => {
//         console.log(this);
//     }

// }