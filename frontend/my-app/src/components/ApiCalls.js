const Api = Object.create({}, {
    GetDoctors: {
        value: () => { 
            return fetch("http://localhost:5000/api/doctors", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then(res => res.json())
        }
    }
})
export default Api;